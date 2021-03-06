import firebase from 'firebase';

export const updateUser = user => ({
  type: 'SET_USER',
  user
});

const loadGoogleApi = () => {
  if( gapi.client ) return;
  return new Promise((resolve) => {
    gapi.load('client:auth2', async () => {
      await gapi.client.init({
        apiKey	: process.env.NODE_ENV == 'production' ? GOOGLE_KEY : process.env.GOOGLE_KEY,
        clientId: '681761028706-i3glgbm17ivctan81ducavuukg2k269t.apps.googleusercontent.com',
        scope: 'profile https://www.googleapis.com/auth/calendar.readonly',
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
      });
      resolve();
    });
  })
};

export const login = () => async dispatch => {
  await loadGoogleApi();
  await gapi.auth2.getAuthInstance().signIn();
  const googleUser = gapi.auth2.getAuthInstance().currentUser.get();
  const isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
  if (isSignedIn) {
    const credential = firebase.auth.GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
    const user = await firebase.auth().signInWithCredential(credential);

    dispatch(updateUser({
      displayName: user.user.displayName,
      email: user.user.email
    }));
  }
};

export const logout = () => dispatch => {
  firebase.auth().signOut();
  dispatch(updateUser({}));
};

export const checkIsLogged = () => dispatch => {
  firebase.auth().onAuthStateChanged(async (user) => {
    await loadGoogleApi();
    dispatch(updateUser(user));
  });
};
