import { useEffect, useState, useCallback } from 'react';

import apiClient from 'src/api/client';

export default function useFolders() {
  const [ folders, setFolders ] = useState([])
  const [ loaded, setLoaded ] = useState(false)

  const loadFolders = useCallback(() => {
    apiClient.get('/folders').then(({ data }) => {
      setFolders(data)
      setLoaded(true)
    })
  }, [setFolders])

  useEffect(() => {
    if (!loaded) {
      loadFolders()
    }
  },
    [loadFolders, loaded]
  )

  return {
    folders,
    loaded,
    loadFolders
  }
}
