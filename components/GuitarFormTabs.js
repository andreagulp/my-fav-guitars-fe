export default function GuitarFormTabs({ setTab, tab }) {
  return (
    <div className='flex mb-4'>
      <a
        href='#'
        onClick={() => setTab('description')}
        className={`${
          tab === 'description'
            ? 'text-indigo-500 flex-grow  border-b-2 border-indigo-500 py-2 text-lg px-1'
            : 'flex-grow border-gray-300 border-b-2 py-2 text-lg px-1'
        }`}
      >
        Description
      </a>
      <a
        href='#'
        onClick={() => setTab('details')}
        className={`${
          tab === 'details'
            ? 'text-indigo-500 flex-grow  border-b-2 border-indigo-500 py-2 text-lg px-1'
            : 'flex-grow border-gray-300 border-b-2 py-2 text-lg px-1'
        }`}
      >
        Details
      </a>
      <a
        href='#'
        onClick={() => setTab('measures')}
        className={`${
          tab === 'measures'
            ? 'text-indigo-500 flex-grow  border-b-2 border-indigo-500 py-2 text-lg px-1'
            : 'flex-grow border-gray-300 border-b-2 py-2 text-lg px-1'
        }`}
      >
        Measures
      </a>
    </div>
  );
}
