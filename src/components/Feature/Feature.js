import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { stripUnit } from 'polished';

const Feature = ({ image, imageAlign, title, children }) => {
  return (
    <FeatureContainer imageAlign={imageAlign}>
      <Body>
        <h3>{title}</h3>
        {children}
      </Body>
      <Image>
        <img src={image} alt="" />
      </Image>
    </FeatureContainer>
  );
};

Feature.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlign: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Feature.defaultProps = {
  imageAlign: 'left',
};

export default Feature;

const FeatureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props =>
    props.imageAlign === 'left' ? 'row-reverse' : 'row'};

  @media screen and (max-width: 960px) {
    flex-direction: row-reverse;
  }

  /* > div {
    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  } */
`;

const Image = styled.div`
  align-self: center;
  padding: 0 ${props => stripUnit(props.theme.padding) / 2}px;
  flex: 1;

  @media screen and (max-width: 960px) {
    flex: 0 0 auto;
    width: 100%;
    text-align: center;

    img {
      max-width: 70% !important;
      margin-top: ${props => props.theme.margin};
    }
  }

  img {
    border-radius: 10px;
    box-shadow: 0 10px 10px 10px #f9f9f9;
    padding: ${props => props.theme.padding};
    max-width: calc(100% - ${props => stripUnit(props.theme.padding) * 2}px);
    /* border-radius: 10px; */
  }
`;

const Body = styled.div`
  padding: 0 ${props => stripUnit(props.theme.padding) / 2}px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 960px) {
    flex: 0 0 auto;
    width: 100%;
  }

  h3 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: ${props => props.theme.margin};
    font-size: 1.4em;
  }

  p {
    line-height: 1.8em;
    margin-bottom: 1.5em;
  }
`;
