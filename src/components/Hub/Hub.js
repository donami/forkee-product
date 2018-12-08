import React from 'react';
import styled from 'styled-components';

import Container from '../UI/Container';
import Button from '../UI/Button';
import { stripUnit } from 'polished';

const Hub = () => {
  return (
    <Wrapper>
      <SubHeading>We play well with others</SubHeading>
      <HubHeading>
        Clubhouse integrates with your process and the most important tools you
        use every day – from code review to bug reporting, file sharing, and
        team communication.
      </HubHeading>
      <Bottom>
        <Button primary>Connect your tools</Button>
      </Bottom>
    </Wrapper>
  );
};

export default Hub;

const Wrapper = styled.div`
  font-size: 1em;
`;

const SubHeading = styled.div`
  font-size: 1.2em;
  margin-bottom: ${props => stripUnit(props.theme.margin) / 2}px;
`;

const HubHeading = styled.div`
  max-width: 70%;
  font-size: 1.8em;
  line-height: 1.5em;
  letter-spacing: 2px;
  margin-bottom: ${props => stripUnit(props.theme.margin) / 2}px;
`;

const Bottom = styled.div``;
