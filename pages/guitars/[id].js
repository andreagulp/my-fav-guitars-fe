import GuitarProductCardDescription from '@/components/guitar-product-card/GuitarProductCardDescription';
import GuitarProductCardDetail from '@/components/guitar-product-card/GuitarProductCardDetail';
import GuitarProductCardMeasures from '@/components/guitar-product-card/GuitarProductCardMeasures';
import Layout from '@/components/Layout';
import LoveButton from '@/components/LoveButton';
import { API_URL } from '@/config/index';
import { useState } from 'react';
import Image from 'next/image';
import GuitarImg from '@/components/GuitarImg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function GuitarPage({ guitar }) {
  const router = useRouter();
  // console.log(guitar);
  const [tab, setTab] = useState('description');

  const handleDelete = async (e) => {
    if (confirm('Are you sure')) {
      const res = await fetch(`${API_URL}/guitars/${guitar.id}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.push('/guitars');
      }
    }
  };

  return (
    <Layout>
      <section className='text-gray-600 body-font overflow-hidden p-3'>
        <div className='container mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <div className='lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0'>
              <h2 className='text-sm title-font text-gray-500 tracking-widest'>
                {guitar.producer}
              </h2>
              <h1 className='text-gray-900 text-3xl title-font font-medium mb-4'>
                {guitar.model}
              </h1>

              <div className='flex'>
                <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'>
                  <div className='group cursor-pointer relative  border-gray-400'>
                    <Link href={`/guitars/edit/${guitar.id}`}>
                      <a href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                          />
                        </svg>
                      </a>
                    </Link>
                    {/* tooltip */}
                    <div className='opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-60 bottom-full   px-3 pointer-events-none'>
                      Edit Guitar
                      <svg
                        className='absolute text-black h-2 w-full left-0 '
                        x='0px'
                        y='0px'
                        viewBox='0 0 255 255'
                        xmlSpace='preserve'
                      >
                        <polygon
                          className='fill-current'
                          points='0,0 127.5,127.5 255,0'
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'>
                  <div className='group cursor-pointer relative  border-gray-400'>
                    <a onClick={handleDelete} href='#'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                        />
                      </svg>
                    </a>
                    {/* tooltip */}
                    <div className='opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-60 bottom-full   px-3 pointer-events-none'>
                      Delete Guitar
                      <svg
                        className='absolute text-black h-2 w-full left-0 '
                        x='0px'
                        y='0px'
                        viewBox='0 0 255 255'
                        xmlSpace='preserve'
                      >
                        <polygon
                          className='fill-current'
                          points='0,0 127.5,127.5 255,0'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

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

              <LoveButton />
            </div>

            <GuitarImg guitar={guitar} width='400' height='400' />
          </div>
        </div>
        <ToastContainer />
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`${API_URL}/guitars?id=${id}`);
  const guitars = await res.json();
  return {
    props: {
      guitar: guitars[0],
    },
  };
}
