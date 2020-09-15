import { useEffect, useState, useCallback } from 'react';
import { shallowEqualObjects } from 'shallow-equal';
import usePrevious from './usePrevious';

import apiClient from 'src/api/client';

export default function useProjects(params) {
	const [ projects, setProjects ] = useState([]);
	const [ loaded, setLoaded ] = useState(false);
	const prevParams = usePrevious(params);

	const loadProjects = useCallback(
		() => {
			apiClient.get('/projects', { params: params }).then(({ data }) => {
				setProjects(data);
				setLoaded(true);
			});
		},
		[ setProjects, params ]
	);

	useEffect(
		() => {
			if (!shallowEqualObjects(prevParams, params)) {
				setLoaded(false)
			}
		},
		[ params, prevParams ]
	);

	useEffect(
		() => {
			if (!loaded) {
				loadProjects();
			}
		},
		[ loadProjects, loaded, params ]
	);

	return {
		projects,
		loaded,
		loadProjects
	};
}
