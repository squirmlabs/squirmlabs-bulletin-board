import moment from 'moment';
import momentT from 'moment-timezone';

export function converUnixMoment(data) {
  const dateString = moment.unix(data).format('MMMM Do YYYY, h:mm:ss a');
  return dateString;
}
