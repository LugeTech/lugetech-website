import { GetGithubProfile } from "../lib/serverActions";
import { profile as ProfileType } from "@/app/lib/interfaces";
import {
  FaBuilding,
  FaLink,
  FaMapMarkerAlt,
  FaEnvelope,
  FaTwitter,
  FaCode,
  FaStar,
  FaUserFriends,
  FaUserPlus,
} from "react-icons/fa";

const GitHubProfile: React.FC<{ username: string }> = async ({ username }) => {
  const profileData = (await GetGithubProfile(username)) as ProfileType;
  if (!profileData) {
    return <div>Loading...</div>;
  }

  // Mock data for pinned repositories
  const pinnedRepos = [
    { name: "Repo 1", description: "Description of Repo 1", stars: 150 },
    { name: "Repo 2", description: "Description of Repo 2", stars: 250 },
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Profile Header */}
      <div className="sm:flex sm:items-center px-6 py-4">
        <img
          className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-24 rounded-full"
          src={profileData.avatar_url}
          alt={profileData.name}
        />
        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <p className="text-xl leading-tight">{profileData.name}</p>
          <p className="text-sm leading-tight text-gray-600">
            {profileData.bio}
          </p>
        </div>
      </div>

      {/* Profile Details */}
      <div className="px-6 py-4">
        {profileData.company && (
          <p className="flex items-center text-sm text-gray-600">
            <FaBuilding className="mr-2" />
            {profileData.company}
          </p>
        )}
        {profileData.blog && (
          <p className="flex items-center text-sm text-gray-600">
            <FaLink className="mr-2" />
            <a href={profileData.blog}>{profileData.blog}</a>
          </p>
        )}
        {profileData.location && (
          <p className="flex items-center text-sm text-gray-600">
            <FaMapMarkerAlt className="mr-2" />
            {profileData.location}
          </p>
        )}
        {profileData.email && (
          <p className="flex items-center text-sm text-gray-600">
            <FaEnvelope className="mr-2" />
            {profileData.email}
          </p>
        )}
        {profileData.twitter_username && (
          <p className="flex items-center text-sm text-gray-600">
            <FaTwitter className="mr-2" />
            <a href={`https://twitter.com/${profileData.twitter_username}`}>
              @{profileData.twitter_username}
            </a>
          </p>
        )}
      </div>

      {/* Badges Section */}
      <div className="px-6 py-4 border-t">
        <div className="flex items-center mt-3">
          <FaUserFriends className="mr-2" />
          <span className="text-sm font-semibold mr-2">Followers:</span>
          {profileData.followers}
        </div>
        <div className="flex items-center mt-3">
          <FaUserPlus className="mr-2" />
          <span className="text-sm font-semibold mr-2">Following:</span>
          {profileData.following}
        </div>
        <div className="flex items-center mt-3">
          <FaCode className="mr-2" />
          <span className="text-sm font-semibold mr-2">Public Repos:</span>
          {profileData.public_repos}
        </div>
      </div>

      {/* Pinned Repositories */}
      <div className="px-6 py-4 border-t">
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
    </div>
  );
};

export default GitHubProfile;
