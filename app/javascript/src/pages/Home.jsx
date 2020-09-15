import React, { useState } from 'react';
import { uniqueId, isEmpty } from 'lodash';
import { useNavigate } from 'react-router-dom';

import { useFolders, useProjects, useTopics } from 'src/hooks';
import { filterByNoFolder } from 'src/services/filter';
import FolderCard from 'src/components/FolderCard';
import ProjectCard from 'src/components/ProjectCard';

function Home() {
	const navigate = useNavigate();
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

	function handleFolderClick(id) {
		navigate(`folders/${id}`);
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

			<div className="row">
				<main className="col-8">
					<section className="row mt-6">
						<header className="col-12 mb-4">
							<h2 className="h4">Projects</h2>
							<hr />
							<div className="d-flex flex-wrap">
								{topics.map((topic) => (
									<div className="form-check mr-3" key={uniqueId()}>
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
						{isEmpty(folderlessProjects) ? (
							<p>No projects found.</p>
						) : (
							folderlessProjects.map((project) => (
								<ProjectCard project={project} key={uniqueId()} topicName={topicName} />
							))
						)}
					</section>
				</main>
				<aside className="col-4 pl-5">
					<section className="row mt-6">
						<header className="col-12">
							<h2 className="h4">Folders</h2>
							<hr />
						</header>
						{isEmpty(folderlessFolders) ? (
							<p>No folders found.</p>
						) : (
							folderlessFolders.map((folder) => (
								<FolderCard onClick={handleFolderClick} folder={folder} key={uniqueId()} />
							))
						)}
					</section>
				</aside>
			</div>
		</div>
	);
}

export default Home;
