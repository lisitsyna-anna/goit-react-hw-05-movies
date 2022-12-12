export const actorsMaper = actors => {
  return actors.map(({ id, name, profile_path: profilePath, character }) => ({
    id,
    name,
    profilePath,
    character,
  }));
};
