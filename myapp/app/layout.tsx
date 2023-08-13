import Link from 'next/link';
import './global.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <main className='p-10 pt-5'>
          <nav className='flex gap-5'>
            <Link className='font-bold underline' href='/'>
              Home
            </Link>
            <Link className='font-bold underline' href='/notes'>
              Notes
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
