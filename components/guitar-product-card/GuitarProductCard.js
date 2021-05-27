import Image from 'next/image';
import { useState } from 'react';
import GuitarProductCardDescription from './GuitarProductCardDescription';
import GuitarProductCardDetail from './GuitarProductCardDetail';
import GuitarProductCardMeasures from './GuitarProductCardMeasures';
import LoveButton from '../LoveButton';

export default function GuitarProductCard({ guitar }) {
  console.log(guitar);
  const [tab, setTab] = useState('description');
  return (
    <section className='text-gray-600 body-font overflow-hidden'>
      <div className='container mx-auto'>
        <div className='lg:w-4/5 mx-auto flex flex-wrap'>
          <div className='lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0'>
            <h2 className='text-sm title-font text-gray-500 tracking-widest'>
              {guitar.producer}
            </h2>
            <h1 className='text-gray-900 text-3xl title-font font-medium mb-4'>
              {guitar.model}
            </h1>

            <div className='flex mb-4'>
              <a
                href='#'
                onClick={() => setTab('description')}
                className={`${
                  tab === 'description'
                    ? 'text-indigo-500 flex-grow  border-b-2 border-indigo-500 py-2 text-lg px-1'
                    : 'flex-grow border-gray-300 border-b-2 py-2 text-lg px-1'
                }`}
              >
                Description
              </a>
              <a
                href='#'
                onClick={() => setTab('details')}
                className={`${
                  tab === 'details'
                    ? 'text-indigo-500 flex-grow  border-b-2 border-indigo-500 py-2 text-lg px-1'
                    : 'flex-grow border-gray-300 border-b-2 py-2 text-lg px-1'
                }`}
              >
                Details
              </a>
              <a
                href='#'
                onClick={() => setTab('measures')}
                className={`${
                  tab === 'measures'
                    ? 'text-indigo-500 flex-grow  border-b-2 border-indigo-500 py-2 text-lg px-1'
                    : 'flex-grow border-gray-300 border-b-2 py-2 text-lg px-1'
                }`}
              >
                Measures
              </a>
            </div>

            {/* start description */}

            {tab === 'description' && (
              <GuitarProductCardDescription guitar={guitar} />
            )}

            {tab === 'details' && <GuitarProductCardDetail guitar={guitar} />}
            {tab === 'measures' && (
              <GuitarProductCardMeasures guitar={guitar} />
            )}

            {/* love button with count */}
            <LoveButton />
            {/* end love button */}
          </div>
          {guitar.img_main && (
            <Image
              className='lg:w-auto w-full lg:h h-64 object-cover object-center rounded'
              src={
                guitar.img_main.formats.medium.url ||
                guitar.img_main.formats.small.url
              }
              alt={guitar.model}
              layout='intrinsic'
              width={400}
              height={200}
            />
          )}
        </div>
      </div>
    </section>
  );
}
