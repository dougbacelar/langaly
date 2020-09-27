export const ProfileList = ({
  profiles,
}: {
  profiles: ReadonlyArray<LangalyProfile>;
}) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {profiles.map((profile) => (
        <li>
          <article>
            <h2>{profile.displayName}</h2>
            <address>{profile.countryCode}</address>
            <p>{profile.description}</p>
          </article>
        </li>
      ))}
    </ul>
  );
};
