import React from 'react';

import Image from './Image';
import Carousel from './Carousel';
import Cards from './Cards';
import List from './List';
import Lead from './Lead';

const Components = {
  image: Image,
  carousel: Carousel,
  cards: Cards,
  list: List,
  lead: Lead,
};

export function Block(block) {
  // component does exist
    if (typeof Components[block.component] !== "undefined") {
        return React.createElement(
            Components[block.component],
            {
                key: block._uid,
                ...block.attributes
            },
            block.children
        );
    }
}

export default function Content(props) {
    return (
        <>
            { props.blocks.map(block => Block(block)) }
        </>
    );
}