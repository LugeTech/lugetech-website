'use server'
import { profile, Repo } from "./interfaces"
import { getPinnedRepos } from '@kentaylorappdev/get-pinned-repos'

export const GetGithubProfile = async (username: string): Promise<profile> => {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

export const GetGithubRepos = async (username: string): Promise<Repo[]> => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
}


export const GetGithubPinnedRepos = async (username: string): Promise<Repo[]> => {
  const pinned = await getPinnedRepos(username) as unknown as String[]
  const allrepos = await GetGithubRepos(username)

  return pinned.map((pinnedRepo) => {
    return allrepos.find((repo: Repo) => repo.full_name === pinnedRepo) as Repo
  })
}
