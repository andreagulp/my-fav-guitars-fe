import { useFormContext } from 'react-hook-form';

export default function GuitarAddFormMesures() {
  const { register } = useFormContext();

  return (
    <>
      <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
        <div>
          <label
            className='text-gray-700 dark:text-gray-200'
            htmlFor='scale_lenght'
          >
            Scale Lenght
          </label>
          <input
            defaultValue={0}
            {...register('scale_lenght')}
            id='scale_lenght'
            type='number'
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
          />
        </div>
        <div>
          <label
            className='text-gray-700 dark:text-gray-200'
            htmlFor='body_width'
          >
            Body Width
          </label>
          <input
            defaultValue={0}
            {...register('body_width')}
            id='body_width'
            type='number'
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
          />
        </div>

        <div>
          <label
            className='text-gray-700 dark:text-gray-200'
            htmlFor='body_lenght'
          >
            Body Lenght
          </label>
          <input
            defaultValue={0}
            {...register('body_lenght')}
            id='body_lenght'
            type='number'
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
          />
        </div>

        <div>
          <label
            className='text-gray-700 dark:text-gray-200'
            htmlFor='body_depth'
          >
            Body Depth
          </label>
          <input
            defaultValue={0}
            {...register('body_depth')}
            id='body_depth'
            type='number'
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
          />
        </div>

        <div>
          <label
            className='text-gray-700 dark:text-gray-200'
            htmlFor='neck_shape'
          >
            Neck profile
          </label>
          <input
            // defaultValue={0}
            {...register('neck_shape')}
            id='neck_shape'
            type='text'
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
          />
        </div>
        <div>
          <label
            className='text-gray-700 dark:text-gray-200'
            htmlFor='fretboard_radius'
          >
            Fretboard Radius
          </label>
          <input
            defaultValue={0}
            {...register('fretboard_radius')}
            id='fretboard_radius'
            type='number'
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
          />
        </div>
        <div>
          <label
            className='text-gray-700 dark:text-gray-200'
            htmlFor='nut_width'
          >
            Nut Width
          </label>
          <input
            defaultValue={0}
            {...register('nut_width')}
            id='nut_width'
            type='number'
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
          />
        </div>
        <div>
          <label
            className='text-gray-700 dark:text-gray-200'
            htmlFor='string_spacing'
          >
            String Spacing
          </label>
          <input
            defaultValue={0}
            {...register('string_spacing')}
            id='string_spacing'
            type='number'
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
          />
        </div>
        <div>
          <label
            className='text-gray-700 dark:text-gray-200'
            htmlFor='frets_number'
          >
            Number Of Frets
          </label>
          <input
            defaultValue={0}
            {...register('frets_number')}
            id='frets_number'
            type='number'
            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
          />
        </div>
      </div>
    </>
  );
}
