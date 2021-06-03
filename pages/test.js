import Image from 'next/image';
import { useState } from 'react';

export default function test() {
  const [image, setImage] = useState();

  const onChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    console.log('e.target.file[0]:', e.target.files[0]);
    console.log('image:', image);
  };

  return (
    <div>
      <input type='file' onChange={onChange} />
      {image && (
        <img
          className='lg:w-auto w-full lg:h h-64 object-cover object-top rounded '
          src={image}
          alt='preview file'
        />
      )}
    </div>
  );
}
