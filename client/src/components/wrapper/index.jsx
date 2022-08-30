import React from 'react';
import PropTypes from 'prop-types';
import StyledWrapper from './StyledWrapper.styled';

const Wrapper = ({ width, children }) => {
  return (
    <StyledWrapper wrapperWidth={width} className="wrapper">
      {children}
    </StyledWrapper>
  );
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.func,
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number,
  ]),
};

Wrapper.defaultProps = {
  children: PropTypes.undefined,
};

export default Wrapper;
