import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import PostList from './pages/PostList';
import PostPage from './pages/Post';

const propMessage = 'Hello from';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/post/:id"
            render={() => <PostPage propMessage={propMessage} />}
          />
          <Route
            path="/posts"
            render={() => <PostList propMessage={propMessage} />}
          />
          <Route exact path="/" render={() => <Redirect to="/posts" />} />
          <Route
            path="*"
            render={() => (
              <div className="container">
                <h1 className="text-center">404</h1>
                <Link to="/posts">
                  <button className="d-block m-auto btn btn-primary">
                    Go To Posts
                  </button>
                </Link>
              </div>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
