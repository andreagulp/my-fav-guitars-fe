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
import GuitarFormTabs from '@/components/GuitarFormTabs';
import GuitarImg from '@/components/GuitarImg';
import ImageUpload from '@/components/ImageUpload';

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
  const [newImg, setNewImg] = useState();
  const [uploadImg, setUploadImg] = useState();

  const methods = useForm({ mode: 'onChange' });
  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  // const handleUpdateImage = async (e) => {
  //   console.log('update image started');
  //   const formData = new FormData();
  //   formData.append('files', uploadImg);

  //   formData.append('ref', 'guitars');
  //   // formData.append('refId', guitar.id);
  //   formData.append('field', 'img_main');

  //   const res = await fetch(`${API_URL}/upload`, {
  //     method: 'POST',
  //     body: formData,
  //   });

  //   if (res.ok) {
  //     toast.success('New Image is Uploading');
  //     router.push(`/guitars/${guitar.id}`);
  //     // router.push(`/guitars/edit/${guitar.id}`);
  //     setNewImg('');
  //     console.log('updateimage completed successfull');
  //   } else {
  //     console.log('updateimage completed with error');
  //     toast.error(
  //       'Something went wrong with the image, try to edit the guitar and update the image again'
  //     );
  //   }
  // };

  const onSubmit = async (data) => {
    console.log('data', data);
    console.log('newImg', newImg);
    console.log('uploadImg', uploadImg);

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
        // img_main: uploadImg,
      }),
    });

    // const guitarId = res.data.id;
    // console.log('guitarid', guitarId);

    if (!res.ok) {
      toast.error('Something went wrong');
    } else {
      const guitar = await res.json();
      toast.success('Guitar has been added');
      // await handleUpdateImage();
      router.push(`/guitars/edit/${guitar.id}`);
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
                {/* {newImg ? (
                  <img
                    className='lg:w-auto w-full lg:h h-64 object-cover object-top rounded '
                    src={newImg}
                    alt='preview file'
                  />
                ) : (
                  <h3>No Image Yet</h3>
                )} */}

                {/* <ImageUpload setUploadImg={setUploadImg} setNewImg={setNewImg} /> */}
              </>
            )}

            {tab === 'details' && <GuitarAddFormDetails setTab={setTab} woodOption={woodOption} />}

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
