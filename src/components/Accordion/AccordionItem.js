import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';
import { ListItem, ListItemTitle, ListItemBody } from './Accordion.css';

const AccordionItem = ({ item, active, setActive }) => (
  <ListItem active={active}>
    <ListItemTitle
      active={active}
      onClick={() => {
        setActive(item.id);
      }}
    >
      <span className="text">{item.title}</span>
      <span>
        {active && <Icon icon="minus" />} {!active && <Icon icon="plus" />}
      </span>
    </ListItemTitle>
    <ListItemBody active={active}>{item.body}</ListItemBody>
  </ListItem>
);

AccordionItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  active: PropTypes.bool,
  setActive: PropTypes.func.isRequired,
};

AccordionItem.defaultProps = {
  active: false,
};

export default AccordionItem;
