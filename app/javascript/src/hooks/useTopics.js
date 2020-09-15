import { useEffect, useState, useCallback } from 'react';

import apiClient from 'src/api/client';

export default function useTopics() {
  const [ topics, setTopics ] = useState([])
  const [ loaded, setLoaded ] = useState(false)

  const loadTopics = useCallback(() => {
    apiClient.get('/topics').then(({ data }) => {
      setTopics(data)
      setLoaded(true)
    })
  }, [setTopics])

  useEffect(() => {
    if (!loaded) {
      loadTopics()
    }
  },
    [loadTopics, loaded]
  )

  return {
    topics,
    loaded,
    loadTopics
  }
}
