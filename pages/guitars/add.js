import Layout from '@/components/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm, FormProvider } from 'react-hook-form';
import { useState } from 'react';
import GuitarAddFormDescription from '@/components/guitar-add-form/GuitarAddFormDescription';
import GuitarAddFormDetails from '@/components/guitar-add-form/GuitarAddFormDetails';
import GuitarAddFormMesures from '@/components/guitar-add-form/GuitarAddFormMesures';
import { API_URL } from '@/config/index';
import { useRouter } from 'next/router';

export default function addPage({ woods }) {
  const router = useRouter();

  const woodOption = woods.map((w) => {
    const newList = {
      id: w.id,
      name: w.name,
    };

    return newList;
  });

  const [tab, setTab] = useState('description');

  const methods = useForm({ mode: 'onChange' });
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = async (data) => {
    if (!isValid) {
      toast.error('The Form is not complete');
    }
    const res = await fetch(`${API_URL}/guitars`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
      }),
    });

    if (!res.ok) {
      toast.error('Something went wrong');
    } else {
      const guitar = await res.json();
      router.push(`/guitars/${guitar.id}`);
    }
  };

  return (
    <Layout>
      <section className='max-w-4xl p-6 mx-auto bg-white rounded-md dark:bg-gray-800'>
        <h2 className='text-lg font-semibold text-gray-700 dark:text-white'>
          Add a Guitar
        </h2>
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
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {tab === 'description' && (
              <GuitarAddFormDescription setTab={setTab} />
            )}

            {tab === 'details' && (
              <GuitarAddFormDetails setTab={setTab} woodOption={woodOption} />
            )}

            {tab === 'measures' && (
              <>
                <GuitarAddFormMesures />
                <div className='flex justify-end mt-6'>
                  <button
                    onClick={handleSubmit(onSubmit)}
                    className='px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
                  >
                    Save
                  </button>
                </div>
              </>
            )}
          </form>
        </FormProvider>
        <ToastContainer />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/woods?_sort=name:ASC`);
  const woods = await res.json();

  return {
    props: { woods },
    revalidate: 1,
  };
}
