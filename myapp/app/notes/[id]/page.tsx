async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 }
    }
  );
  const data = await res.json();

  return data;
}

interface Props {
  params: { id: string };
}

export default async function NotePage({ params }: Props) {
  const note = await getNote(params.id);

  return (
    <div>
      <h1>notes/{note.id}</h1>
      <div className='bg-yellow-400 p-3 rounded shadow-md'>
        <h2>{note.title}</h2>
        <h5>{note.content}</h5>
        <p>{note.created}</p>
      </div>
    </div>
  );
}
