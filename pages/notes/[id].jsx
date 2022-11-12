import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NoteId = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Note: {id} </h1>
      <Link href="/notes">Notes</Link>
    </div>
  );
};

export default NoteId;
