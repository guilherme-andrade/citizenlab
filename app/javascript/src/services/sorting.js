import { sortBy } from 'lodash';

export function sortByStartedDate(data) {
  return sortBy(data, record => new Date() - new Date(record.started))
}
