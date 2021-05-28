import Image from 'next/image';

export default function GuitarImg({ guitar, width, height }) {
  return (
    <>
      {guitar.img_main ? (
        <Image
          className='lg:w-auto w-full lg:h h-64 object-cover object-top rounded '
          src={guitar.img_main.formats.small.url}
          alt={guitar.model}
          layout='intrinsic'
          width={width}
          height={height}
          objectFit='contain'
        />
      ) : (
        <Image
          className='lg:w-auto w-full lg:h h-64 object-top rounded'
          src='/default-guitar.svg'
          alt='Default Guitar'
          layout='intrinsic'
          width={width}
          height={height}
          objectFit='contain'
        />
      )}
    </>
  );
}
