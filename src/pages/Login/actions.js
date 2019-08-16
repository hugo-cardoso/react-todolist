import firebase from 'firebase';

export const updateUser = user => ({
  type: 'SET_USER',
  user
});

export const login = () => async dispatch => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const {user} = await firebase.auth().signInWithPopup(provider);
  dispatch(updateUser(user));
};

export const logout = () => dispatch => {
  firebase.auth().signOut();
  dispatch(updateUser({}));
};

export const checkIsLogged = () => dispatch => {
  firebase.auth().onAuthStateChanged(user => {
    dispatch(updateUser(user));
  });
};
