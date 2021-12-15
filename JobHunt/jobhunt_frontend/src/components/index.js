import moment from 'moment'

export const formatDate = (date) => {
    if (date) {
        return moment(`${date.split('T')[0]} ${date.split('T')[1].split('.')[0]}`, "YYYY-MM-DD HH:mm:ss").fromNow()
    } else {
        return ""
    }
}