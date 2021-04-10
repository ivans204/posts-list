import { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Spinner = ({ propMessage }) => {
  const componentName = 'Spinner';

  useEffect(() => console.log(`${propMessage} ${componentName}`), []);

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
      }}
    >
      <Loader type="Oval" color="#007bff" height={50} width={50} />
    </div>
  );
};

Spinner.propTypes = {
  propMessage: PropTypes.string,
};

export default Spinner;
