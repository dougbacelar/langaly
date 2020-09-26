import { NextPageContext } from 'next';
import Head from 'next/head';
import { validateUser } from './utils/validateUser';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>Welcome to Langaly!</h1>
      </main>
    </div>
  );
}

export const getServerSideProps = async (context: NextPageContext) => {
  const jwt = validateUser(context);
  console.log({ jwt });
  return { props: {} };
};
