import React from 'react';
import PropTypes from 'prop-types';
import { AuthenticationContext } from '../contexts/authentication';

function ContextProvider(props) {
  const { children, authentication } = props;

  return (
    <AuthenticationContext.Provider value={ authentication }>
      { children }
    </AuthenticationContext.Provider>
  )
}

export default ContextProvider;