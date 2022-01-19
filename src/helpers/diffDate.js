import moment from 'moment';

export const diffDate = (date, newDate) => {
    if (date == null || newDate == null) {
        return 0;
    }
    return moment(date).diff(moment(newDate), 'hours');
};
