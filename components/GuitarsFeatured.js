import GuitarItem from '@/components/GuitarItem';
import Link from 'next/link';

export default function GuitarsList({ guitars }) {
  const featured = guitars.slice(0, 4);

  return (
    <section className='py-6 sm:py-12 bg-coolGray-100 text-coolGray-800'>
      <div className='container p-6 mx-auto space-y-8'>
        <div className='space-y-2 text-center'>
          <h2 className='text-3xl font-bold'>Recent Guitars</h2>
          <p className='font-serif text-sm text-coolGray-600'>
            Recently added guitars
          </p>
        </div>

        <div className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4'>
          {featured.map((guitar) => (
            <GuitarItem key={guitar.id} guitar={guitar} />
          ))}
        </div>
        <div className='flex justify-center'>
          <Link href='/guitars'>
            <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              View All Guitars
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
