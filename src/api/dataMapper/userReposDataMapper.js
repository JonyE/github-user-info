export default repos =>
  repos.map(({ name, description, fork, forks, forks_count, stargazers_count }) => ({
    name,
    description,
    fork,
    forks,
    forksCount: forks_count,
    starsCount: stargazers_count
  }));
