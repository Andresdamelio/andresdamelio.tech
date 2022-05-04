import { ObjectString } from 'interfaces';

export const getFormattedDate = (date: string): string => {
  const dateFormat = new Date(date);
  dateFormat.setMinutes(
    dateFormat.getMinutes() + dateFormat.getTimezoneOffset()
  );

  const options: ObjectString = { year: 'numeric', month: 'long' };

  return new Intl.DateTimeFormat('es-VE', options).format(dateFormat);
};

export const transformDatesToString = (
  from: string,
  to: string | undefined
): string => {
  const fromDate: string = getFormattedDate(from);
  const toDate: string = to ? getFormattedDate(to) : 'actualidad';

  return `${fromDate} - ${toDate}`;
};
