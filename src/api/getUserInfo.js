import axios from "axios";
import userInfoDataMapper from "./dataMapper/userInfoDataMapper";

export default ({ name }) =>
  axios
    .get(`https://api.github.com/users/${name}`)
    .then(({ data }) => userInfoDataMapper(data))
    .catch(({ response: { status, statusText } }) => ({
      error: `${status} : ${statusText}`
    }));
