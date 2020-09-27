import NextHead from 'next/head';

export const Head = ({ title }: { title: string }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};
