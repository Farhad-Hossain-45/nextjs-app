import React from 'react';
import Counter from './contact/Counter/Counter';
import Link from 'next/link';

const Home = () => {
  // throw new error()
  return (
    <div>
      <h2>hello bangladesh</h2>
      <Counter></Counter>

      <Link href="/about">
      <button className='btn btn-primary'>About</button>
      </Link>
      <Link href="/news">
      <button className='btn btn-primary'>News</button>
      </Link>
    </div>
  );
};

export default Home;