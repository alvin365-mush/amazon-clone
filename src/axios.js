import axios from 'axios';

const instance = axios.create({
    //useful for debugging ---> baseURL: 'http://localhost:5001/clone-22134/us-central1/api' //the api (cloud function) url
    baseURL: 'https://us-central1-clone-22134.cloudfunctions.net/api'
});

export default instance;