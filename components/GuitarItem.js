import Image from 'next/image';
import Link from 'next/link';

export default function GuitarItem({ guitar }) {
  return (
    <article className='flex flex-col bg-coolGray-50'>
      <Link href={`/guitars/${guitar.id}`}>
        <a href='#'>
          {guitar.img_main ? (
            <Image
              src={guitar.img_main.formats.small.url}
              alt={guitar.model}
              layout='intrinsic'
              width={200}
              height={200}
              objectFit='contain'
            />
          ) : (
            <Image
              src='/default-guitar.svg'
              alt='Default Guitar'
              layout='intrinsic'
              width={200}
              height={200}
              // objectFit='contain'
            />
          )}
        </a>
      </Link>
      <div className='flex flex-col flex-1 p-6'>
        <a
          href='#'
          className='text-xs tracking-wider uppercase text-violet-600'
        >
          {guitar.producer}
        </a>

        <h3 className='flex-1 py-2 text-lg font-semibold leading-snug'>
          <Link href={`/guitars/${guitar.id}`}>
            <a href='#' className='hover:underline text-violet-600'>
              {guitar.model}
            </a>
          </Link>
        </h3>
        <div className='flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600'>
          {/* <span>June 1, 2020</span>
     <span>2.1K views</span> */}
        </div>
      </div>
    </article>
  );
}
