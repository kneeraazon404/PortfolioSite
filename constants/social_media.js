import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

export const SOCIAL_MEDIA = [
	{
		id: "linkedin",
		icon: <FaLinkedinIn />,
		title: "Visit LinkedIn profile",
		url: "https://www.linkedin.com/in/kneeraazon"
	},
	{
		id: "twitter",
		icon: <IoLogoTwitter />,
		title: "Visit Twitter profile",
		url: "https://twitter.com/kneeraazon"
	},
	{
		id: "github",
		icon: <FaGithub />,
		title: "Visit Github profile",
		url: "https://github.com/kneeraazon404"
	},
	{
		id: "mail",
		icon: <FiMail />,
		title: "Send me an email",
		url: "mailto://kneeraazon@gmail.com"
	}
];
