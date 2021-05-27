export default function GuitarProductCardDetail({ guitar }) {
  return (
    <div>
      <div className='flex border-t border-gray-200 py-2'>
        <span className='text-gray-500'>Body Shape</span>
        <span className='ml-auto text-gray-900'>{guitar.body_shape}</span>
      </div>
      <div className='flex border-t border-gray-200 py-2'>
        <span className='text-gray-500'>Cutawy</span>
        <span className='ml-auto text-gray-900'>
          {guitar.cutaway ? 'Yes' : 'No'}
        </span>
      </div>
      <div className='flex border-t border-gray-200 py-2'>
        <span className='text-gray-500'>Eletric</span>
        <span className='ml-auto text-gray-900'>
          {guitar.eletric ? 'Yes' : 'No'}
        </span>
      </div>
      <div className='flex border-t border-gray-200 py-2'>
        <span className='text-gray-500'>Top Wood</span>
        <span className='ml-auto text-gray-900'>
          {`${guitar.solid_top ? 'solid' : 'laminated'} ${
            guitar.top_wood.name
          } `}
        </span>
      </div>
      <div className='flex border-t border-gray-200 py-2'>
        <span className='text-gray-500'>Back Wood</span>
        <span className='ml-auto text-gray-900'>
          {`${guitar.solid_back ? 'solid' : 'laminated'} ${
            guitar.back_wood.name
          } `}
        </span>
      </div>
      <div className='flex border-t border-gray-200 py-2'>
        <span className='text-gray-500'>Side Wood</span>
        <span className='ml-auto text-gray-900'>
          {`${guitar.solid_side ? 'solid' : 'laminated'} ${
            guitar.side_wood.name
          } `}
        </span>
      </div>
      <div className='flex border-t border-gray-200 py-2'>
        <span className='text-gray-500'>Neck Wood</span>
        <span className='ml-auto text-gray-900'>
          {`${guitar.solid_neck ? 'solid' : 'laminated'} ${
            guitar.neck_wood.name
          } `}
        </span>
      </div>
      <div className='flex border-t border-b mb-6 border-gray-200 py-2'>
        <span className='text-gray-500'>Fretboard Wood</span>
        <span className='ml-auto text-gray-900'>
          {`${guitar.solid_fretboard ? 'solid' : 'laminated'} ${
            guitar.fretboard_wood.name
          } `}
        </span>
      </div>
    </div>
  );
}
