import { NextApiRequest, NextApiResponse } from 'next';
import { LangalyProfile } from '../../utils/types';

const profileBlob: ReadonlyArray<LangalyProfile> = [
  {
    id: 1,
    countryCode: 'BR',
    displayName: 'doug',
    description: 'this is a nice description',
    birthdate: new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
  },
  {
    id: 2,
    countryCode: 'JP',
    displayName: 'john',
    description: 'this is another nice description',
    birthdate: new Date(new Date().setFullYear(new Date().getFullYear() - 25)),
  },
];
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json(profileBlob);
};
