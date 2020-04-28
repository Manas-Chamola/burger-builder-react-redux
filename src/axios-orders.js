import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-6be6c.firebaseio.com/'
});

export default instance;