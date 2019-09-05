import moment from 'moment';

export const addEvent = (title, description, startDate, endDate) => {
    return new Promise(async (resolve) => {

        const eventModel = {
            'summary': title,
            'description': description,
            'start': {
                'dateTime': moment(startDate).format('YYYY-MM-DDTHH:mm:ss.SSS'),
                'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
            },
            'end': {
                'dateTime': moment(endDate).add(15, 'minutes').format('YYYY-MM-DDTHH:mm:ss.SSS'),
                'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
            }
        };
        const event = await gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': eventModel
        });
        resolve(event);
    });
};