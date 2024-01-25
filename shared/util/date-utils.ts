import moment from 'moment-timezone';

export function convertToLocalTime(date) {
  const value = moment.tz(date, 'Asia/Ho_Chi_Minh');
  return value.utc().format('DD/MM/YYYY');
}

export function convertToLocalTimeFull(date) {
  const value = moment.tz(date, 'Asia/Ho_Chi_Minh');
  return value.utc().format('DD/MM/YYYY hh:mm a');
}

export function convertToLocalHouse(date) {
  const value = moment.tz(date, 'Asia/Ho_Chi_Minh');
  return value.utc().format('hh:mm a');
}
