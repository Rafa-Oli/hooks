import { PostsProvider } from '../../contexts/PostsProvider';
import './styles.css';
import { Posts } from '../../components/Posts/index';

function App() {
  return (
    <PostsProvider>
      <div>
        <Posts />
      </div>
    </PostsProvider>
  );
}
export default App;
