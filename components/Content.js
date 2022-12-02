import React from 'react';

import Image from './Image';
import Carousel from './Carousel';
import Cards from './Cards';
import List from './List';
import Lead from './Lead';
import Meta from './Meta';

function Text({ children, gridArea }) {
    return (
        <section className='body-text' grid-area={gridArea}>
            { children }
        </section>
    );
}

function Title({ children, gridArea, headingLevel} ) {
    switch (headingLevel) {
        case '1':
            return <h1 className='trim-both' grid-area={gridArea}>{children}</h1>
        case '2':
            return <h2 className='trim-both' grid-area={gridArea}>{children}</h2>
        case '3':
            return <h3 className='trim-both' grid-area={gridArea}>{children}</h3>
        case undefined:
            return <h3 className='trim-both' grid-area={gridArea}>{children}</h3>
    };
}

const Components = {
  image: Image,
  carousel: Carousel,
  cards: Cards,
  list: List,
  meta: Meta,
  lead: Lead,
  text: Text,
  title: Title
};

export function Block(block) {
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