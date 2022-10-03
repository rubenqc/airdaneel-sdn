import axios from 'axios';

const airdaneelApi = axios.create({
    baseURL: '/api'
})

export default airdaneelApi