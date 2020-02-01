// function to set JWT in request header
import axios from 'axios';

export default {
    userToken: function() {
        return axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    },
    giveUserAccess: function(history) {
        return axios.get('/api/survey');
    },
    getUserData: function(id) {
        return axios.get(`/api/user/${id}`);
    },
    userRegister: function(obj) {
        return (
            axios.post('/api/auth/register', obj, function(res) {
                // changed the data being sent in request
                if (res.status === 200) {
                    console.log('success');
                }
            })
        )
    },
    userLogin: function(obj) {
        return axios.post('/api/auth/login', obj)
    }
}