import { API_URL, URL_CHARACTER } from "./constants/api";
import { getDataApi } from "./utils/getDataApi";

(async () => {
  const data = await getDataApi.getData(API_URL + URL_CHARACTER);
  console.log(data);
})();