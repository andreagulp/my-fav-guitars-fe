import { useFormContext } from 'react-hook-form';

export default function GuitarAddFormDescription({ setTab }) {
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext();

  console.log(touchedFields);

  return (
    <>
      <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
        <div>
          <label
            className='text-gray-700 dark:text-gray-200'
            htmlFor='producer'
          >
            Producer
          </label>
          <input
            //   defaultValue='test'
            {...register('producer', { required: true })}
            id='producer'
            type='text'
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
          />

          {errors.producer && (
            <span className='text-xs text-red-700' id='passwordHelp'>
              This is a required Field
            </span>
          )}
          {!touchedFields.producer && (
            <span className='text-xs text-red-700' id='passwordHelp'>
              This is a required Field
            </span>
          )}
        </div>

        <div>
          <label className='text-gray-700 dark:text-gray-200' htmlFor='model'>
            Model
          </label>
          <input
            {...register('model', { required: true })}
            id='model'
            type='text'
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
          />
          {!touchedFields.model && (
            <span className='text-xs text-red-700' id='passwordHelp'>
              This is a required Field
            </span>
          )}
          {errors.model && (
            <span className='text-xs text-red-700' id='passwordHelp'>
              This is a required Field
            </span>
          )}
        </div>

        <div>
          <label
            className='text-gray-700 dark:text-gray-200'
            htmlFor='description'
          >
            Description
          </label>
          <textarea
            {...register('description')}
            name='description'
            id='description'
            cols='10'
            rows='3'
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
          ></textarea>
        </div>

        <div>
          <label
            className='text-gray-700 dark:text-gray-200'
            htmlFor='body_shape'
          >
            Body Shape
          </label>
          <input
            {...register('body_shape')}
            id='body_shape'
            type='text'
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
          />
        </div>

        <div>
          <div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
            <input
              {...register('cutaway')}
              type='checkbox'
              name='cutaway'
              id='cutaway'
              className='toggle-checkbox block w-6 h-6 rounded-full bg-white border-4 cursor-pointer'
            />
            <label
              htmlFor='cutaway'
              className='toggle-label h-6 rounded-full cursor-pointer'
            ></label>
          </div>
          <label htmlFor='cutaway' className='text-gray-700 dark:text-gray-200'>
            is Cutaway
          </label>
        </div>
        <div>
          <div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
            <input
              {...register('eletric')}
              type='checkbox'
              name='eletric'
              id='eletric'
              className='toggle-checkbox block w-6 h-6 rounded-full bg-white border-4 cursor-pointer'
            />
            <label
              htmlFor='eletric'
              className='toggle-label h-6 rounded-full cursor-pointer'
            ></label>
          </div>
          <label htmlFor='eletric' className='text-gray-700 dark:text-gray-200'>
            is Eletric
          </label>
        </div>
      </div>

      <div className='flex justify-end mt-6'>
        <button
          onClick={() => setTab('details')}
          className='px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
        >
          Next
        </button>
      </div>
    </>
  );
}
