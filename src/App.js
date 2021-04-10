import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import PostList from './pages/PostList';

const propMessage = 'Hello from';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/posts"
            render={() => <PostList propMessage={propMessage} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
