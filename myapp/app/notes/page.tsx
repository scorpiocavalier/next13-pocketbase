import Link from 'next/link';
import PocketBase from 'pocketbase';
import CreateNote from './CreateNote';

export const dynamic = 'force-dynamic';

async function getNotes() {
  const db = new PocketBase('http://127.0.0.1:8090');
  const data = await db.collection('notes').getList();

  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr] gap-10'>
        <CreateNote />

        <div className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
          {notes?.map((note) => {
            return <Note key={note.id} note={note} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className='bg-yellow-400 px-3 pb-3 rounded shadow-md'>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}
