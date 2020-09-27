import { NextPageContext } from 'next';
import { Head } from '../components/Head';
import { Header } from '../components/Header';
import { ProfileList } from '../components/ProfileList';
import { api } from '../utils/api';
import { LangalyProfile } from '../utils/types';
import { getJwtPayload } from '../utils/validateUser';

type Props = {
  authenticated: boolean;
  profiles: ReadonlyArray<LangalyProfile>;
};
export default function Home({ authenticated, profiles }: Props) {
  return (
    <>
      <Head title="Langaly" />
      <Header>{!authenticated && <a href="/login">Login</a>}</Header>
      <main
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <ProfileList profiles={profiles} />
      </main>
    </>
  );
}

export const getServerSideProps = async (context: NextPageContext) => {
  const jwtPayload = getJwtPayload(context);
  const profiles = await api<ReadonlyArray<LangalyProfile>>(
    'http://localhost:3000/api/profiles'
  );
  const props: Props = { authenticated: !!jwtPayload, profiles };
  return { props };
};
