import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 5000,
    headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'applicaion/json',
        'Accept': 'application/json',
    },
});

export default instance;