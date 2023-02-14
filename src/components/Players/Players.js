import React, { useEffect } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, ListAcco, TitleContent, UtilityList, Img } from './PlayersStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { useState } from 'react';
import { getPlayers } from '../../Firebase/firestoreFunctions';

export default function Players () {

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function callGetPlayers() {
      setPlayers(await getPlayers());
      setLoading(false);
    }

    callGetPlayers();
  }, [])

  return (
  loading === true 
    ? (<h4>Loading...</h4>)
    : (<Section id="players">
    <SectionDivider />
    <SectionTitle>Players</SectionTitle>
    <GridContainer>
      {players.map(({id, image, name, description, tags, source, visit, accomplishments}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree name>{name}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          {/* {accomplishments.length !== 0 ? <TitleContent>Accomplishment</TitleContent> : null}
          <ListAcco>
            {accomplishments.map((acomplishment, index) => (
                <li key={index}>
                  {acomplishment}
                </li>
            ))}
          </ListAcco> */}
          <>
            <TitleContent>Links</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </>
          <UtilityList>
              {visit !== '' ? <ExternalLinks target="_blank" href={visit}>More</ExternalLinks> :  null}
              {source !== '' ? <ExternalLinks target="_blank" href={source}>Listen</ExternalLinks> :  null}
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
  ))
};
