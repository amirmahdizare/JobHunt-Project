import moment from 'moment'

export const formatDate = (date) => {
    if (date) {
        return moment(`${date.split('T')[0]} ${date.split('T')[1].split('.')[0]}`, "YYYY-MM-DD HH:mm:ss").fromNow()
    } else {
        return ""
    }
}

export const filterDate = (filter) => {
    if (filter == 'Last Hour') {
        return moment.utc().subtract(1, "hours").format("YYYY-MM-DDTHH:mm:ss");
    }
    else if (filter == 'Last 24 Hours') {
        return moment.utc().subtract(24, "hours").format("YYYY-MM-DDTHH:mm:ss");
    }
    else if (filter == 'Last 7 Days') {
        return moment.utc().subtract(7, "days").format("YYYY-MM-DDTHH:mm:ss");
    }
    else if (filter == 'Last 14 Days') {
        return moment.utc().subtract(14, "days").format("YYYY-MM-DDTHH:mm:ss");
    }
    else if (filter == 'Last 30 Days') {
        return moment.utc().subtract(30, "days").format("YYYY-MM-DDTHH:mm:ss");
    }
}