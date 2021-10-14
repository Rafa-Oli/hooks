import { useContext, useEffect } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';

export const Posts = () => {
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  useEffect(() => {
    loadPosts(postsDispatch);
  }, [postsDispatch]);

  return (
    <div>
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
