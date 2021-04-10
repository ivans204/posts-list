import { useEffect } from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message, propMessage }) => {
  const componentName = 'ErrorMessage';

  useEffect(() => console.log(`${propMessage} ${componentName}`), []);

  return <h2 className="text-center">{message}</h2>;
};

ErrorMessage.propTypes = {
  propMessage: PropTypes.string,
};

export default ErrorMessage;
