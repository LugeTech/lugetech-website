"use server";
import { profile, Repo } from "./interfaces";
import { getPinnedRepos_v2 } from "@kentaylorappdev/get-pinned-repos";

export const GetGithubProfile = async (username: string): Promise<profile> => {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const GetGithubRepos = async (username: string): Promise<Repo[]> => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const GetGithubPinnedRepos = async (username: string) => {
  const pinned = await getPinnedRepos_v2(username);
  return pinned;
};
