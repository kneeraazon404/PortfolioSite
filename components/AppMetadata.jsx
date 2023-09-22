const author = "Nirajan Karki";
const description =
	"Hey there! I'm Nirajan, a passionate coder on a mission to create intuitive software solutions.";
const url = "https://kneeraazon-rezojmbhv-kneeraazon01.vercel.app/";
export const AppMetadata = {
	metadataBase: new URL("https://kneeraazon-rezojmbhv-kneeraazon01.vercel.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Nirajan Karki",
		"Nirajan Karki - software developer",
		"Frontend developer",
		"Python developer",
		"Portfolio website",
		"Frontend Developer Portfolio",
		"Software Developer Portfolio",
		"Software Engineer Portfolio",
		"Software Developer",
		"Software Engineer",
		"Software Developer in Nepal",
		"Software Engineer in Nepal",
		"Software Developer in Kathmandu",
		"Software Engineer in Kathmandu",
		"Software Developer in Lalitpur",
		"Software Engineer in Lalitpur",
		"Software Developer in Bhaktapur",
		"Software Engineer in Bhaktapur",
		"Software Developer in Pokhara",
		"Software Engineer in Pokhara",
		"Software Developer in Biratnagar",
		"Software Engineer in Biratnagar",
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "https://kneeraazon-rezojmbhv-kneeraazon01.vercel.app/screenshot.webp",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://kneeraazon-rezojmbhv-kneeraazon01.vercel.app/screenshot.webp",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
