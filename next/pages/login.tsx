import { NextPageContext } from 'next';
import Head from 'next/head';
import { getJwtPayload } from './utils/validateUser';

export default function Login() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>You havent logged in yet!</h1>
        <a href='http://localhost:8000/auth/facebook'>Login</a>
      </main>
    </>
  );
}

export const getServerSideProps = async (context: NextPageContext) => {
  const isAlreadyAuthenticated = !!getJwtPayload(context);

  if (isAlreadyAuthenticated) {
    context.res?.writeHead(302, { Location: '/' });
    context.res?.end();
    return { props: {} };
  }
  return { props: {} };
};
