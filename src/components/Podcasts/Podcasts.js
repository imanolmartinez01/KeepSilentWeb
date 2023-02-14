import React, { useEffect, useState } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, IconsContainer, DivDivider } from './PodcastsStyles';
import { SiDiscogs } from "react-icons/si";
import { getPodcasts } from '../../Firebase/firestoreFunctions';


export default function Podcasts () {

  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function callGetPodcasts() {
      setPodcasts(await getPodcasts());
      setLoading(false);
      console.log('Podcasts:',podcasts);
    }

    callGetPodcasts();
  }, [])

  return (
    loading === true 
    ? (<h4>Loading...</h4>)
    : <Section id="podcasts">
    <SectionDivider />
    <br />
    <SectionTitle>Podcasts</SectionTitle>
    <SectionText>
      Some artist have record podcasts some podcasts for us, here is a tail of his collection:
    </SectionText>
    <List>
      {podcasts.map(({id, name, description, source}) => (
        <div  key={id}>
          <ListItem>
          <IconsContainer>
            <SiDiscogs size="2.5rem" />
          </IconsContainer>
          <ListContainer>
            <ListTitle>{name}</ListTitle>
            <ListParagraph>
              {description}
            </ListParagraph>
          </ListContainer>
          </ListItem>
          <ListItem>
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src={source} />
          </ListItem>
          <DivDivider ></DivDivider>
        </div>
      ))}
    </List>
  </Section>
  )
};




