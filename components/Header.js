import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/'>
          <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
            <Image
              src='/acoustic-guitar.svg'
              alt='Logo Guitar'
              width={30}
              height={30}
            />
            <span className='ml-3 text-xl'>My Guitars</span>
          </a>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <Link href='/'>
            <a className='mr-5 hover:text-gray-900'>Home</a>
          </Link>
          <Link href='/guitars'>
            <a className='mr-5 hover:text-gray-900'>Guitars</a>
          </Link>
          <Link href='/guitars/add'>
            <a className='mr-5 hover:text-gray-900'>Add a Guitar</a>
          </Link>
          <Link href='/about'>
            <a className='mr-5 hover:text-gray-900'>About</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
