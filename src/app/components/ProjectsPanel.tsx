import React from 'react'
import { GetGithubRepos, GetGithubPinnedRepos } from '../lib/serverActions';
interface project {
  developer: string,
}

const ProjectsPanel = async (props: project) => {
  const repos = await GetGithubPinnedRepos(props.developer);
  // console.log(repos) //just to test if the data is being fetched
  return (
    <div id='projects'>Projects Panel
      <div id='projects-list' className='flex flex-col md:flex-row gap-4 hover:border-2 p-2'>
        <div id='project'>
          <a href='https://badwordsthing.lugetech.com/' target='_blank' rel='noreferrer'>
            <div id='project-name'>{repos[0].name}</div>
            <div id='project-description'>{repos[0].description}</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPanel
