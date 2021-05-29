import { useFormContext } from 'react-hook-form';
import GuitarImg from '../GuitarImg';

export default function GuitarAddFormDetails({ setTab, woodOption, guitar }) {
  console.log('woodOption', woodOption);
  console.log('guitar', guitar);

  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext();

  return (
    <>
      <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
        <div>
          <label
            className='text-gray-700 dark:text-gray-200'
            htmlFor='top_wood'
          >
            Top Wood
          </label>

          <select
            {...register('top_wood', { required: 'select one option' })}
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
          >
            <option></option>
            {woodOption.map((wood) => (
              <option key={wood.id} value={wood.id}>
                {wood.name}
              </option>
            ))}
          </select>
          {!touchedFields.top_wood && (
            <span className='text-xs text-red-700' id='passwordHelp'>
              This is a required Field
            </span>
          )}
          {errors.top_wood && (
            <span className='text-xs text-red-700' id='passwordHelp'>
              This is a required Field
            </span>
          )}
        </div>

        <div className='my-10'>
          <div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
            <input
              {...register('solid_top')}
              type='checkbox'
              name='solid_top'
              id='solid_top'
              className='toggle-checkbox block w-6 h-6 rounded-full bg-white border-4 cursor-pointer'
            />
            <label
              htmlFor='solid_top'
              className='toggle-label h-6 rounded-full cursor-pointer'
            ></label>
          </div>
          <label
            htmlFor='solid_top'
            className='text-gray-700 dark:text-gray-200'
          >
            is Solid Top
          </label>
        </div>

        <div>
          <label
            className='text-gray-700 dark:text-gray-200'
            htmlFor='side_wood'
          >
            Side Wood
          </label>

          <select
            {...register('side_wood')}
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
          >
            <option></option>
            {woodOption.map((wood) => (
              <option key={wood.id} value={wood.id}>
                {wood.name}
              </option>
            ))}
          </select>
        </div>

        <div className='my-10'>
          <div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
            <input
              {...register('solid_side')}
              type='checkbox'
              name='solid_side'
              id='solid_side'
              className='toggle-checkbox block w-6 h-6 rounded-full bg-white border-4 cursor-pointer'
            />
            <label
              htmlFor='solid_side'
              className='toggle-label h-6 rounded-full cursor-pointer'
            ></label>
          </div>
          <label
            htmlFor='solid_side'
            className='text-gray-700 dark:text-gray-200'
          >
            is Solid Side
          </label>
        </div>

        <div>
          <label
            className='text-gray-700 dark:text-gray-200'
            htmlFor='back_wood'
          >
            Back Wood
          </label>

          <select
            {...register('back_wood')}
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
          >
            <option></option>
            {woodOption.map((wood) => (
              <option key={wood.id} value={wood.id}>
                {wood.name}
              </option>
            ))}
          </select>
        </div>

        <div className='my-10'>
          <div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
            <input
              {...register('solid_back')}
              type='checkbox'
              name='solid_back'
              id='solid_back'
              className='toggle-checkbox block w-6 h-6 rounded-full bg-white border-4 cursor-pointer'
            />
            <label
              htmlFor='solid_back'
              className='toggle-label h-6 rounded-full cursor-pointer'
            ></label>
          </div>
          <label
            htmlFor='solid_back'
            className='text-gray-700 dark:text-gray-200'
          >
            is Solid Back
          </label>
        </div>

        <div>
          <label
            className='text-gray-700 dark:text-gray-200'
            htmlFor='neck_wood'
          >
            Neck Wood
          </label>

          <select
            {...register('neck_wood')}
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
          >
            <option></option>
            {woodOption.map((wood) => (
              <option key={wood.id} value={wood.id}>
                {wood.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            className='text-gray-700 dark:text-gray-200'
            htmlFor='fretboard_wood'
          >
            Fretboard Wood
          </label>

          <select
            {...register('fretboard_wood')}
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
          >
            <option></option>
            {woodOption.map((wood) => (
              <option key={wood.id} value={wood.id}>
                {wood.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            className='text-gray-700 dark:text-gray-200'
            htmlFor='bracing_pattern'
          >
            Bracing System
          </label>
          <input
            //   defaultValue='test'
            {...register('bracing_pattern')}
            id='bracing_pattern'
            type='text'
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
          />
        </div>
      </div>

      <div className='flex justify-end mt-6'>
        <button
          onClick={() => setTab('measures')}
          className='px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
        >
          Next
        </button>
      </div>
    </>
  );
}
