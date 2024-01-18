"use server";
import { profile, Repo } from "./interfaces";
import { getPinnedRepos_v2 } from "@kentaylorappdev/get-pinned-repos";

export const GetGithubProfile = async (username: string): Promise<profile> => {
  const token = process.env.GITHUB_TOKEN; // Replace with your environment variable

  const headers = {
    Authorization: `token ${token}`,
    "User-Agent": "lugetech-website", // Replace with your app name or username
  };

  return fetch(`https://api.github.com/users/${username}`, { headers })
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
