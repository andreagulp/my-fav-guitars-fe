import GuitarProductCard from '@/components/GuitarProductCard';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

export default function GuitarPage({ guitar }) {
  return (
    <Layout>
      <GuitarProductCard guitar={guitar} />
    </Layout>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`${API_URL}/guitars?id=${id}`);
  const guitars = await res.json();
  return {
    props: {
      guitar: guitars[0],
    },
  };
}

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/guitars/}`);
//   console.log(res);

//   const guitars = await res.json();

//   const paths = guitars.map((guitar) => ({ params: { id: guitar.id } }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params: { id } }) {
//   console.log(id);

//   const res = await fetch(`${API_URL}/guitars/${id}`);
//   const guitars = await res.json();
//   return {
//     props: {
//       guitar: guitars[0],
//     },
//     revalidate: 1,
//   };
// }
