import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import PostList from './pages/PostList';
import PostPage from './pages/Post';
import PostsRouteButton from './components/PostsRouteButton';

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
                <PostsRouteButton
                  btnText="Go to Posts"
                  propMessage={propMessage}
                />
              </div>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
