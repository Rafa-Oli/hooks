import { useContext, useEffect } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { CounterContext } from '../../contexts/CounterProvider/context';
import { decrementCounter, incrementCounter } from '../../contexts/CounterProvider/actions';

export const Posts = () => {
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  useEffect(() => {
    loadPosts(postsDispatch);
  }, [postsDispatch]);

  return (
    <div>
      <button onClick={() => incrementCounter(counterDispatch)}>Counter {counterState.counter}+</button>
      <button onClick={() => decrementCounter(counterDispatch)}>Counter {counterState.counter}-</button>
      <h1>POSTS</h1>
      {postsState?.loading ? (
        <p>
          <strong>Carregando posts....</strong>
        </p>
      ) : (
        <>
          {postsState?.posts.map((post) => (
            <p key={post.id}>{post.title}</p>
          ))}
        </>
      )}
    </div>
  );
};
