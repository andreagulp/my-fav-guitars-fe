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
import GuitarImg from '@/components/GuitarImg';
import ImageUpload from '@/components/ImageUpload';
import GuitarFormTabs from '@/components/GuitarFormTabs';

export default function editPage({ guitar, woods }) {
  console.log('guitar', guitar);

  const router = useRouter();
  const [tab, setTab] = useState('description');
  const [newImg, setNewImg] = useState();
  const [uploadImg, setUploadImg] = useState();

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      ...guitar,
      top_wood: guitar.top_wood?.id,
      back_wood: guitar.back_wood?.id,
      neck_wood: guitar.neck_wood?.id,
      fretboard_wood: guitar.fretboard_wood?.id,
      side_wood: guitar.side_wood?.id,
    },
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  // create items for dropdown menu
  const woodOption = woods.map((w) => {
    const newList = {
      id: w.id,
      name: w.name,
    };
    return newList;
  });

  const handleUpdateImage = async (e) => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append('files', uploadImg);

    formData.append('ref', 'guitars');
    formData.append('refId', guitar.id);
    formData.append('field', 'img_main');

    const res = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      toast.success('New Image is Uploading');
      router.push(`/guitars/${guitar.id}`);
      // router.push(`/guitars/edit/${guitar.id}`);
      setNewImg('');
    } else {
      toast.error('Something went wrong');
    }
  };

  const onSubmit = async (data) => {
    console.log('data', data);

    if (!isValid) {
      toast.error('The Form is not complete');
    }
    const res = await fetch(`${API_URL}/guitars/${guitar.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
      }),
    });

    handleUpdateImage();

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
        <h2 className='text-lg font-semibold text-gray-700 dark:text-white'>Add a Guitar</h2>

        <GuitarFormTabs setTab={setTab} tab={tab} />

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {tab === 'description' && (
              <>
                <GuitarAddFormDescription setTab={setTab} />
                {newImg ? (
                  <img
                    className='lg:w-auto w-full lg:h h-64 object-cover object-top rounded '
                    src={newImg}
                    alt='preview file'
                  />
                ) : (
                  <GuitarImg guitar={guitar} width={200} height={300} />
                )}

                <ImageUpload
                  guitar={guitar}
                  setUploadImg={setUploadImg}
                  setNewImg={setNewImg}
                  newImg={newImg}
                />
              </>
            )}

            {tab === 'details' && (
              <GuitarAddFormDetails setTab={setTab} woodOption={woodOption} guitar={guitar} />
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

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`${API_URL}/guitars?id=${id}`);
  const guitars = await res.json();

  const resW = await fetch(`${API_URL}/woods?_sort=name:ASC`);
  const woods = await resW.json();

  return {
    props: {
      guitar: guitars[0],
      woods,
    },
  };
}
