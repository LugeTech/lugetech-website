"use client";

// src/components/GitHubProfile.tsx
import React, { useState, useEffect } from "react";

interface GitHubData {
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
}

const GitHubProfile: React.FC<{ username: string }> = ({ username }) => {
  const [profile, setProfile] = useState<GitHubData | null>(null);

  // Mock Data
  const badges = ["Followers: 123", "Following: 456", "Repos: 78", "Gists: 90"];
  const pinnedRepos = [
    { name: "Repo 1", description: "Description of Repo 1", stars: 150 },
    { name: "Repo 2", description: "Description of Repo 2", stars: 250 },
  ];
  const favoriteLanguages = ["JavaScript", "TypeScript", "Python", "Ruby"];

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, [username]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center space-x-4">
        <img
          src={profile.avatar_url}
          alt={profile.name}
          className="w-20 h-20 rounded-full border-2 border-blue-500"
        />
        <div>
          <h2 className="text-2xl font-bold">{profile.name}</h2>
          <p className="text-gray-600">{profile.bio}</p>
        </div>
      </div>
      <a
        href={profile.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
      >
        View GitHub Profile
      </a>

      {/* Badges Section */}
      <div className="my-4 flex flex-wrap">
        {badges.map((badge, index) => (
          <span
            key={index}
            className="m-1 bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full"
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Pinned Repositories */}
      <div className="my-4">
        <h3 className="text-lg font-bold mb-2">Pinned Repositories</h3>
        {pinnedRepos.map((repo, index) => (
          <div
            key={index}
            className="my-2 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300"
          >
            <h4 className="font-bold">{repo.name}</h4>
            <p className="text-sm text-gray-600">{repo.description}</p>
            <span className="text-sm font-semibold">{`⭐ ${repo.stars}`}</span>
          </div>
        ))}
      </div>

      {/* Favorite Languages Section */}
      <div className="my-4">
        <h3 className="text-lg font-bold mb-2">Favorite Languages</h3>
        <div className="flex flex-wrap">
          {favoriteLanguages.map((language, index) => (
            <span
              key={index}
              className="m-1 bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full"
            >
              {language}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHubProfile;
