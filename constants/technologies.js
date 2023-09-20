import { AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiMongodb, DiPostgresql, DiPython, DiRedis, DiVisualstudio, } from "react-icons/di";
import { FaReact, FaTrello, FaDocker, FaAws, FaLinux, FaFlask } from "react-icons/fa";
import { BsBootstrap, BsGit } from "react-icons/bs";
import { TbBrandDjango, TbBrandElastic, TbBrandNextjs, TbBrandTailwind, } from "react-icons/tb";

import JiraIcon from "public/assets/svg/jira.svg";
import { VscCode } from "react-icons/vsc";
export const TECHNOLOGIES = [
	{
		category: "Backend Development",
		items: [
			{ name: "Python", icon: <DiPython size={32} /> },
			{ name: "Django", icon: <TbBrandDjango size={32} /> },
			{ name: "Flask", icon: <FaFlask size={32} /> },
			{ name: "FastAPI", icon: <VscCode size={32} /> },
			// Add other icons like DRF, Flask, FastAPI when available
		]
	},
	{
		category: "Frontend Development",
		items: [
			{ name: "TailwindCSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "ReactJS", icon: <FaReact size={32} /> },
			{ name: "NextJS", icon: <TbBrandNextjs size={32} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={32} /> },
			// Add other icons like Redux when available
		]
	},
	{
		category: "Databases",
		items: [
			{ name: "PostgreSQL", icon: <DiPostgresql size={32} /> },
			{ name: "MongoDB", icon: <DiMongodb size={32} /> },
			{ name: "Redis", icon: <DiRedis size={32} /> },
			// Add other icons like MySQL, MongoDB, Redis when available
		]
	},
	{
		category: "DevOps",
		items: [
			{ name: "Docker", icon: <FaDocker size={32} /> },
			{ name: "AWS", icon: <FaAws size={32} /> },
			{ name: "Linux", icon: <FaLinux size={32} /> },
			// Add other icons like Docker Compose, NGINX, Apache when available
		]
	},
	{
		category: "Version Control",
		items: [
			{ name: "Git", icon: <BsGit size={32} /> },  // You can use another Git icon if available
			{ name: "GitLab", icon: <AiFillGitlab size={32} /> },
			{ name: "GitHub", icon: <AiFillGithub size={32} /> },
		]
	},
	{
		category: "Project Management",
		items: [
			{ name: "Trello", icon: <FaTrello size={32} /> },
			{ name: "Jira", icon: <JiraIcon width={32} /> },
		]
	},
	{
		category: "Other Technologies",
		items: [
			{ name: "Elastic Search", icon: <TbBrandElastic size={32} /> },
			{ name: "Visual Studio Code", icon: <DiVisualstudio size={32} /> },

			// Add icons for RabbitMQ, Celery, Let's Encrypt when available
		]
	}
];
