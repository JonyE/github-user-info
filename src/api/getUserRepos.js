import axios from "axios";
import parseLinkHeader from "../utils/parseLinkHeader";
import userReposDataMapper from "./dataMapper/userReposDataMapper";

export default ({ name, link }) =>
  axios
    .get(link ? link : `https://api.github.com/users/${name}/repos`)
    .catch(error => {
      console.log(error);
    })
    .then(({headers, data}) => {
      const navigation = parseLinkHeader(headers.link);
      const repos = userReposDataMapper(data);
      return {repos, navigation};
    });
