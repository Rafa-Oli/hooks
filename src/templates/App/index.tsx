import { PostsProvider } from '../../contexts/PostsProvider';
import './styles.css';
import { Posts } from '../../components/Posts/index';
import { CounterProvider } from '../../contexts/CounterProvider';

function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}
export default App;
