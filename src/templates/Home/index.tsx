import { useEffect, useState } from 'react';
import { useFetch } from './use-fetch';

const Home = () => {
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts/' + postId, {
    method: 'GET',
    headers: {
      abc: '1',
    },
  });
  useEffect(() => {
    console.log('post id', postId);
  }, [postId]);

  const handleClick = (id) => {
    setPostId(id);
  };

  if (loading) {
    return <p>Loading ....</p>;
  }

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (
          result.map((p) => (
            <div key={p?.id} onClick={() => handleClick(p?.id)}>
              <p>{p?.title}</p>
            </div>
          ))
        ) : (
          <div onClick={() => handleClick('')}>
            <p>{result?.title}</p>
          </div>
        )}
      </div>
    );
  }
};
export default Home;
