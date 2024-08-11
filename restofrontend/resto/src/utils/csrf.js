//import Cookies from 'js-cookie';

export const getCsrfToken = () => {
    const csrfToken = document.cookie.split(';')
        .map(cookie =>cookie.trim())
        .find(cookie => cookie.startsWith('csrftoken='))
        ?.split('=')[1];

    return csrfToken || '';
};