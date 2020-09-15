import React from 'react'
import PropTypes from 'prop-types'

function FolderCard({ folder, onClick }) {
  return (
    <article className="col-12 mb-2">
      <div className="card card-clickable p-3" onClick={() => onClick(folder.id)}>
        <h1 className="h6 mb-0">{folder.title}</h1>
        <p className="text-muted small mb-0">started on: {folder.started}</p>
      </div>
    </article>
  )
}

FolderCard.propTypes = {
  folder: PropTypes.object
}

export default FolderCard

