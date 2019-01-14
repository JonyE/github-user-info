export default ({
  avatar_url,
  email,
  name,
  location,
  public_gists,
  repos,
  followers,
  following
}) => ({
  avatarUrl: avatar_url,
  email,
  name,
  location,
  gists: public_gists,
  repos,
  followers,
  following
});
