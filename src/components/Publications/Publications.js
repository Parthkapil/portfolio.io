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
} from "./PublicationsStyles";
import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { papers } from "../../constants/constants";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Publications = () => (
	<Section nopadding id="publications">
		<SectionDivider />
		<SectionTitle main>Publications</SectionTitle>
		<GridContainer>
			{papers.map((p, i) => {
				return (
					<BlogCard key={i}>
						<Img src={prefix + p.image} class="img-responsive" />
						<TitleContent>
							<HeaderThree title>{p.title}</HeaderThree>
							<Hr />
						</TitleContent>
						<CardInfo className="card-info">{p.description}</CardInfo>
						<UtilityList>
							<ExternalLinks href={p.source}>Visit</ExternalLinks>
						</UtilityList>
					</BlogCard>
				);
			})}
		</GridContainer>
	</Section>
);

export default Publications;
