import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, IconsContainer, Img } from './ProductsStyles';
import { IoIosShirt } from "react-icons/io";


const Products = () =>  (
  <Section id="Products">
    <SectionDivider />
    <br />
    <SectionTitle>Products</SectionTitle>
    <SectionText>
      Some products from our collective:
    </SectionText>
    <List>
      <ListItem>
        <IconsContainer>
          <IoIosShirt size="2.5rem" />
        </IconsContainer>
        <ListContainer>
          <ListTitle>Red T-Shirt</ListTitle>
          <ListParagraph>
          The red color represent our seriuos mood of partying, our elegant way to enjoy the moment with some details of darkness.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Img src="/images/camisetaRoja.png" 
        alt="KeepSilentCollective" />
      </ListItem>
      <ListItem>
        <IconsContainer>
          <IoIosShirt size="2.5rem" />
        </IconsContainer>
        <ListContainer>
          <ListTitle>Blue T-Shirt</ListTitle>
          <ListParagraph>
          The blue color respresent our soul part, our essence as spiritual beans, repesent our way as connected entities to the source.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Img src="/images/camisetaAzul.png" 
        alt="KeepSilentCollective" />
      </ListItem>
    </List>
  </Section>
);

export default Products;