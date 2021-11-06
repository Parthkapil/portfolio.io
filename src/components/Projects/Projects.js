import React from "react";

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from "./ProjectsStyles";
import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Projects = () => (
	<Section nopadding id="projects">
		<SectionDivider />
		<SectionTitle main>Projects</SectionTitle>
		<GridContainer>
			{projects.map((p, i) => {
				return (
					<BlogCard key={i}>
						<Img src={prefix + p.image} class="img-responsive" />
						<TitleContent>
							<HeaderThree title>{p.title}</HeaderThree>
							<Hr />
						</TitleContent>
						<CardInfo className="card-info">{p.description}</CardInfo>
						<div>
							<TitleContent>Stack</TitleContent>
							<TagList>
								{p.tags.map((t, i) => {
									return <Tag key={i}>{t}</Tag>;
								})}
							</TagList>
						</div>
						<UtilityList>
							{p.visit != "" && <ExternalLinks href={p.visit}>Visit</ExternalLinks>}
							{p.source != "" && <ExternalLinks href={p.source}>Source</ExternalLinks>}
						</UtilityList>
					</BlogCard>
				);
			})}
		</GridContainer>
	</Section>
);

export default Projects;