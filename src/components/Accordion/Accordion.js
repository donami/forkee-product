import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AccordionContainer, List } from './Accordion.css';
import AccordionItem from './AccordionItem';

const Accordion = ({ title, items }) => {
  const [active, setActive] = useState([]);

  const onItemClick = id => {
    if (active.indexOf(id) > -1) {
      setActive(active.filter(itemId => itemId !== id));
    } else {
      setActive([...new Set(active.concat(id))]);
    }
  };

  return (
    <AccordionContainer>
      {title && <h3>{title}</h3>}
      <List>
        {items.map(item => (
          <AccordionItem
            key={item.id}
            item={item}
            active={active.indexOf(item.id) > -1}
            setActive={onItemClick}
          />
        ))}
      </List>
    </AccordionContainer>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ),
};

Accordion.defaultProps = {
  title: undefined,
  items: [],
};

export default Accordion;
