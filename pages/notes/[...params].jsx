import React from 'react';
import { useRouter } from 'next/router';

const NoteId = () => {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);
  return (
    <div>
      <h1>Note Id</h1>
    </div>
  );
};

export default NoteId;
