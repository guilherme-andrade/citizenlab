export function filterByFolder(data) {
  return data.filter(record => record.folder_id)
}

export function filterByNoFolder(data) {
  return data.filter(record => !record.folder_id)
}
