import { useEffect, useState, useCallback } from 'react';

import apiClient from 'src/api/client';

export default function useFolder(id) {
  const [ folder, setFolder ] = useState({})
  const [ loaded, setLoaded ] = useState(false)

  const loadFolder = (id) => {
    apiClient.get(`/folders/${id}`).then(({ data }) => {
      setFolder(data)
      console.log(data)
      setLoaded(true)
    })
  }

  useEffect(() => {
    console.log('here')
    if (!loaded) {
      loadFolder(id)
    }
  },
    [loadFolder, loaded, id, folder]
  )

  return {
    folder,
    loaded,
    loadFolder
  }
}
