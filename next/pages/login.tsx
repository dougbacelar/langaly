import { NextPageContext } from 'next';
import { Head } from '../components/Head';
import { Header } from '../components/Header';
import { getJwtPayload } from '../utils/validateUser';

export default function Login() {
  return (
    <>
      <Head title="Login | Langaly" />
      <Header />
      <main
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <h1>You havent logged in yet!</h1>
        <a href="http://localhost:8000/auth/facebook">Login with Facebook</a>
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
