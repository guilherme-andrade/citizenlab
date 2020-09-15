import React from 'react';
import PropTypes from 'prop-types';

function ProjectCard({ project, topicName }) {
	return (
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
	);
}

ProjectCard.propTypes = {
  folder: PropTypes.object,
  topicName: PropTypes.func
};

export default ProjectCard;
