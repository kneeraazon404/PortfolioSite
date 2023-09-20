/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-7xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							As an experienced Backend Developer, I've honed my skills in Python, Django, and a myriad of other tools, delivering exceptional results across diverse backend, API, and AI automation projects. My proficiency encompasses data science libraries like Numpy and Pandas, database management systems such as PostgreSQL and MySQL, and DevOps tools including Docker and AWS. My recent achievements include the development of a state-of-the-art web application blending Django with React, all powered by the OpenAI API. This project is a testament to my ability to incorporate AI and chatbot capabilities to enhance user experiences.
						</p>
						<br />
						<p>My approach is anchored in clear communication, adhering to timelines, and the relentless quest for knowledge. With specializations in Python, Django, and tools like ChatGPT and the OpenAI API, I craft innovative chatbot applications, bridging backend expertise with front-end acumen in ReactJS and NextJS. If you're seeking a developer attuned to industry advancements, particularly in AI, and eager to unlock the potential of tools like ChatGPT and the OpenAI API for your projects, I'm ready to bring your visions to fruition. Let's embark on this journey together!</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
