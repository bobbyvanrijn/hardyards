import React from 'react';

import Image from './Image';
import Carousel from './Carousel';
import Calendar from './Calendar';
import Gallery from './Gallery';
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

function filterEmptyBlocks(blocks) {
    return blocks.filter((block) => {
        const hasChildren = block.attributes.items?.length > 0 || block.children?.length > 0;
        const shouldHaveChildren = ['text', 'list', 'meta', 'carousel'].includes(block.component);

        return shouldHaveChildren ? hasChildren : true;
    });
}

const Components = {
  image: Image,
  carousel: Carousel,
  calendar: Calendar,
  gallery: Gallery,
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
    const blocks = filterEmptyBlocks(props.blocks);

    return (
        <>
            { blocks.map(block => Block(block)) }
        </>
    );
}