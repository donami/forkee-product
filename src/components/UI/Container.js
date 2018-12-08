import styled from 'styled-components';

const Container = styled.div`
  display: block;
  max-width: 100% !important;

  @media only screen and (max-width: 767px) {
    width: 90%;
    margin: 0 auto;
    /* width: auto !important;
    margin-left: 1em !important;
    margin-right: 1em !important; */
  }

  @media only screen and (max-width: 991px) and (min-width: 768px) {
    width: 90%;
    margin: 0 auto;
    /* width: 723px;
    margin-left: auto !important;
    margin-right: auto !important; */
  }

  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    width: 933px;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  @media only screen and (min-width: 1200px) {
    width: 1127px;
    margin-left: auto !important;
    margin-right: auto !important;
  }
`;

export default Container;
