import React, { useState } from 'react';
import { useFolders, useProjects, useTopics } from 'src/hooks';
import { parseInt } from 'lodash';
import { sortByStartedDate } from 'src/services/sorting';
import { filterByFolder, filterByNoFolder } from 'src/services/filter';

function Home() {
	const [ topicIds, setTopicIds ] = useState([]);
	const { folders } = useFolders();
	const { projects } = useProjects({ topicIds });
	const { topics, loaded: topicsLoaded } = useTopics();

	const folderlessFolders = filterByNoFolder(folders);
	const folderlessProjects = filterByNoFolder(projects);

	function handleSelectTopic(id) {
		setTopicIds([ ...topicIds, id ]);
	}

	function handleDeselectTopic(id) {
		const newTopicIds = topicIds.filter((topicId) => topicId !== id);
		setTopicIds(newTopicIds);
	}

	function handleTopicCheck(e, id) {
		if (e.target.checked) {
			handleSelectTopic(id);
		} else {
			handleDeselectTopic(id);
		}
	}

	function topicIsSelected(id) {
		return topicIds.find((topicId) => topicId === id);
	}

	function topicName(topicId) {
		if (!topicsLoaded) {
			return;
		}

		const topic = topics.find((topic) => topic.id === topicId);
		return topic.title;
	}

	return (
		<div className="container py-10">
			<h1>
				Here are Citizen<span className="text-primary">lab</span>'s projects.
			</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum quibusdam amet. Adipisci
				consequatur molestiae ex velit dignissimos. Quos soluta dignissimos mollitia placeat minus, facere porro
				explicabo excepturi odit quasi.
			</p>

			<section className="row mt-6">
				<header className="col-12">
					<h2 className="h4">Folders</h2>
					<hr />
				</header>
				{folderlessFolders.map((folder) => (
					<article className="col-12 mb-3">
						<div className="card p-4">
							<h1 className="h5">{folder.title}</h1>
							<p className="text-muted mb-0">started on: {folder.started}</p>
						</div>
					</article>
				))}
			</section>

			<section className="row mt-6">
				<header className="col-12 mb-4">
					<h2 className="h4">Projects</h2>
					<hr />
					<div className="d-flex">
						{topics.map((topic) => (
							<div className="form-check mr-3">
								<input
									className="form-check-input"
									type="checkbox"
									checked={topicIsSelected(topic.id)}
									id={topic.title}
									onChange={(e) => handleTopicCheck(e, topic.id)}
								/>
								<label className="form-check-label" for={topic.title}>
									{topic.title}
								</label>
							</div>
						))}
					</div>
				</header>
				{folderlessProjects.map((project) => (
					<article className="col-12 mb-3">
						<div className="card p-4">
							<h1 className="h5">{project.title}</h1>
							<p className="text-muted mb-0">started on: {project.started}</p>
							<div>
								{project.topic_ids.map((topic_id) => (
									<span className="badge bg-primary mr-2">{topicName(topic_id)}</span>
								))}
							</div>
						</div>
					</article>
				))}
			</section>
		</div>
	);
}

export default Home;
