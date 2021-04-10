import PostList from './pages/PostList';

const propMessage = 'Hello from';

function App() {
  return (
    <div className="App">
      <PostList propMessage={propMessage} />
    </div>
  );
}

export default App;
