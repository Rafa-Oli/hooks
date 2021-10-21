import { useState, useEffect, useCallback } from 'react';

const useAsync = (asyncFunction, shouldRun) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle',
  });

  const run = useCallback(async () => {
    await new Promise((r) => setTimeout(r, 2000));
    setState({
      result: null,
      error: null,
      status: 'pending',
    });
    await new Promise((r) => setTimeout(r, 2000));

    return asyncFunction()
      .then((response) => {
        setState({
          result: response,
          error: null,
          status: 'settled',
        });
      })
      .catch((err) => {
        setState({
          result: null,
          error: err,
          status: 'error',
        });
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [run, shouldRun]);

  return [run, state.result, state.error, state.status];
};

const fetchData = async () => {
  await new Promise((r) => setTimeout(r, 2000));
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const json = await data.json();
  return json;
};

const PostsExample = () => {
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  useEffect(() => {
    reFetchData();
  }, [reFetchData]);

  if (status === 'idle') {
    return <pre>Nada executando</pre>;
  }
  if (status === 'pending') {
    return <pre>Loading ....</pre>;
  }
  if (status === 'error') {
    return <pre>{error.message}</pre>;
  }
  if (status === 'settled') {
    return <pre>{JSON.stringify(result, null, 2)}</pre>;
  }
  return <p>IXIIII</p>;
};

export default PostsExample;
