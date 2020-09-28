import axios from "axios";

const instance = axios.create({
  baseURL:'https://us-central1-clone-cf967.cloudfunctions.net/api'

  //'http://localhost:5001/clone-cf967/us-central1/api',  //The API (cloud function) URL
});

export default instance;

