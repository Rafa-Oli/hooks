import { useEffect, useMemo, useRef, useState } from 'react';
import P from 'prop-types';

const Post = ({ post, onClick }) => {
  console.log('filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1 style={{ fontSize: 14 }} onClick={() => onClick(post.title)}>
        {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  onClick: P.func,
};

function UseRef() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const counter = useRef(0);

  console.log('Pai renderizou');

  //component didMount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  useEffect(() => {
    counter.current++;
  });

  const handleClick = (value) => {
    console.log('ola');
    setValue(value);
  };

  return (
    <div className="App">
      <h1> Render: {counter.current}x</h1>
      <p>
        <input ref={input} type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      </p>

      {useMemo(() => {
        return posts.length > 0 && posts.map((post) => <Post key={post.id} post={post} onClick={handleClick} />);
      }, [posts])}

      {posts.length <= 0 && <p>Ainda não existem posts</p>}
    </div>
  );
}

export default UseRef;
