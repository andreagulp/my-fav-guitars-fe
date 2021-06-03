export default function GuitarProductCardDescription({ guitar }) {
  return (
    <div>
      <p className='leading-relaxed mb-4'>{guitar.description}</p>

      <div className='flex border-t border-gray-200 py-2'>
        <span className='text-gray-500'>Top Wood</span>
        <span className='ml-auto text-gray-900'>
          {`${guitar.solid_top ? 'solid' : 'laminated'} ${
            guitar.top_wood?.name
          } `}
        </span>
      </div>

      <div className='flex border-t border-gray-200 py-2'>
        <span className='text-gray-500'>Type</span>
        <span className='ml-auto text-gray-900'>{guitar.body_shape}</span>
      </div>

      <div className='flex border-t border-b mb-6 border-gray-200 py-2'>
        <span className='text-gray-500'>Scale Lenght</span>
        <span className='ml-auto text-gray-900'>{guitar.scale_lenght} </span>
      </div>
    </div>
  );
}
