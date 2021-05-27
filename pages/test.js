import { useForm } from 'react-hook-form';

export default function test() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch('name'));

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input defaultValue='test' {...register('example')} />

    //   <input {...register('exampleRequired', { required: true })} />
    //   {errors.exampleRequired && <span>This field is required</span>}

    //   <input type='submit' />
    // </form>

    <section class='max-w-4xl p-6 mx-auto bg-white rounded-md dark:bg-gray-800'>
      <h2 class='text-lg font-semibold text-gray-700 capitalize dark:text-white'>
        Account settings
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div class='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
          <div>
            <label class='text-gray-700 dark:text-gray-200' for='username'>
              name
            </label>
            <input
              //   defaultValue='test'
              {...register('name')}
              id='username'
              type='text'
              class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
            />
          </div>

          <div>
            <label class='text-gray-700 dark:text-gray-200' for='emailAddress'>
              Email Address
            </label>
            <input
              {...register('email')}
              id='emailAddress'
              type='email'
              class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
            />
          </div>

          <div>
            <label class='text-gray-700 dark:text-gray-200' for='password'>
              Password
            </label>
            <input
              {...register('password')}
              id='password'
              type='password'
              class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
            />
          </div>

          <div>
            <label
              class='text-gray-700 dark:text-gray-200'
              for='passwordConfirmation'
            >
              Password Confirmation
            </label>
            <input
              {...register('passwordConfirm')}
              id='passwordConfirmation'
              type='password'
              class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
            />
          </div>
        </div>

        <div class='flex justify-end mt-6'>
          <button
            onClick={handleSubmit(onSubmit)}
            class='px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
}
