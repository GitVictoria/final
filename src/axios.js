import axios from 'axios';

//taking axios and putting a cookie to it

var instance = axios.create({
    xsrfCookieName: 'mytoken',
    xsrfHeaderName: 'csrf-token'
});


export default instance;
