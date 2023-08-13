'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const create = async (e: any) => {
    e.preventDefault();

    await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        content
      })
    });

    setTitle('');
    setContent('');

    router.refresh();
  };

  return (
    <form onSubmit={create} className='w-full max-w-[500px] mx-auto mb-10'>
      <h3 className='text-center'>Create a new Note</h3>

      <div className='flex flex-col gap-5'>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder='Content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type='submit'>CREATE</button>
      </div>
    </form>
  );
}
