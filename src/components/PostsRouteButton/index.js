import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const PostsRouteButton = ({ btnText, propMessage }) => {
  const componentName = 'PostsRouteButton';

  useEffect(() => console.log(`${propMessage} ${componentName}`), []);

  return (
    <Link to="/posts">
      <button className="btn btn-primary d-block m-auto">{btnText}</button>
    </Link>
  );
};

PostsRouteButton.propTypes = {
  btnText: PropTypes.string,
  propMessage: PropTypes.string,
};

export default PostsRouteButton;
