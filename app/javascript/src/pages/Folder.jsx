import React from 'react'
import { useParams } from 'react-router-dom';
import { useFolder } from 'src/hooks';

import FolderCard from 'src/components/FolderCard'

export default function Folder() {
  const { id } = useParams();
  const { folder } = useFolder(id);

  return (
    <div className="container pt-10">
      <h1>{folder.title}</h1>
      <p>{folder.description}</p>

      <section className="row">
        {folder.folders.map(folder => <FolderCard folder={folder} />)}
      </section>
    </div>
  )
}
