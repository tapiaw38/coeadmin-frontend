import moment from 'moment';

export const formatDate = (date) => {
    if (date == null) {
        return "";
    }
    return moment(date).format("DD/MM/YYYY")
}