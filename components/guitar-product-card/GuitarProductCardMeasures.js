export default function GuitarProductCardMeasures({ guitar }) {
  return (
    <div>
      <div className='flex border-t border-gray-200 py-2'>
        <span className='text-gray-500'>Body Width</span>
        <span className='ml-auto text-gray-900'>{guitar.body_width}</span>
      </div>
      <div className='flex border-t border-gray-200 py-2'>
        <span className='text-gray-500'>Body Lenght</span>
        <span className='ml-auto text-gray-900'>{guitar.body_lenght}</span>
      </div>
      <div className='flex border-t border-gray-200 py-2'>
        <span className='text-gray-500'>Body Depth</span>
        <span className='ml-auto text-gray-900'>{guitar.body_depth}</span>
      </div>

      <div className='flex border-t border-b mb-6 border-gray-200 py-2'>
        <span className='text-gray-500'>Bracing System</span>
        <span className='ml-auto text-gray-900'>{guitar.bracing_pattern}</span>
      </div>

      <div className='flex border-t border-gray-200 py-2'>
        <span className='text-gray-500'>Neck Profile</span>
        <span className='ml-auto text-gray-900'>{guitar.neck_shape}</span>
      </div>
      <div className='flex border-t border-gray-200 py-2'>
        <span className='text-gray-500'>Fretboard Radius</span>
        <span className='ml-auto text-gray-900'>{guitar.fretboard_radius}</span>
      </div>
      <div className='flex border-t border-gray-200 py-2'>
        <span className='text-gray-500'>Nut Width</span>
        <span className='ml-auto text-gray-900'>{guitar.nut_width}</span>
      </div>
      <div className='flex border-t border-gray-200 py-2'>
        <span className='text-gray-500'>String Spacing</span>
        <span className='ml-auto text-gray-900'>{guitar.string_spacing}</span>
      </div>

      <div className='flex border-t border-b mb-6 border-gray-200 py-2'>
        <span className='text-gray-500'>Number of Frets</span>
        <span className='ml-auto text-gray-900'>{guitar.frets_number}</span>
      </div>
    </div>
  );
}
