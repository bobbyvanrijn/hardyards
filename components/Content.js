import React from 'react';

import Image from './Image';
import Carousel from './Carousel';
import List from './List';
import Lead from './Lead';
import Meta from './Meta';

function Text(props) {
    return (
        <section {...props}>
            { props.children }
        </section>
    );
}

function Title(props) {
    const tag = props.headingLevel ? `h${props.headingLevel}` : 'h3';

    return (
        React.createElement(
            tag,
            {
                key: props.headingLevel,
                ...props
            },
            props.children
        )
    );
}

const Components = {
  image: Image,
  carousel: Carousel,
  list: List,
  meta: Meta,
  lead: Lead,
  text: Text,
  title: Title
};

export function Block(block) {
    if (typeof Components[block.component] !== "undefined") {
        return (
            React.createElement(
                Components[block.component],
                {
                    key: block._uid,
                    ...block.attributes
                },
                block.children
            )
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