import { ObjectString } from 'interfaces';

export const getFormattedDate = (date: Date): string => {
    date = new Date(date)
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset())

    const options: ObjectString = { year: "numeric", month: "long" }

    return new Intl.DateTimeFormat("es-VE", options).format(date)
};

export const transformDatesToString  = (from: Date, to: Date): string => {
    const fromDate: string = getFormattedDate(from)
    const toDate: string = to ? getFormattedDate(to) : "actualidad"

    return `${fromDate} - ${toDate}`
};