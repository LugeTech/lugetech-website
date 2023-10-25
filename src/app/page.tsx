import React from "react";
import BadgesPanel from "./components/BadgesPanel";
import ProjectsPanel from "./components/ProjectsPanel";
import { DeveloperInfo } from "./components/DeveloperInfo";
import { GetGithubProfile, GetGithubRepos } from "./lib/serverActions";
const page = () => {
  return (
    <main className=" h-full w-full flex flex-col">
      <div
        id="logo"
        className="flex flex-row items-center justify-around font-bold text-xl"
      >
        <p> LugeTech</p>
      </div>
      <div id="profiles" className=" flex flex-col md:flex-row h-full w-full ">
        <div id="profile" className="flex flex-row  w-full h-1/2  mr-4">
          <div id="profile-info" className=" flex flex-col w-full h-full gap-4 justify-between ">
            <DeveloperInfo name="ktappdev" />
          </div>
        </div>
        <div id="profile" className="flex flex-row w-full gap-4 h-1/2">
          <div id="profile-info" className=" flex flex-col w-full h-full gap-4 justify-between ">
            <DeveloperInfo name="clinteastman01" />
          </div>
        </div>
      </div>
      <div className=" h-full">
        <ProjectsPanel developer="ktappdev" />
      </div>
    </main>
  );
};

export default page;
