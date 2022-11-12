import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <h1>Page Index</h1>
      <Link href={'/notes'}>
        To Notes
      </Link>
    </div>
  )
}

export default Page