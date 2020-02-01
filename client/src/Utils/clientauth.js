// function to set JWT in request header
import axios from 'axios';

export default {
    userAuth: function() {
        return axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    },
    userLogin: function(history) {
        return (
            axios
            .get('/api/survey')
            .then(res => {
                history.push('/');
            })
            .catch(error => {
                if (error.response.status === 401) {
                history.push('/login');
                }
            })
        )
    },
    userData: function(id) {
        return (
            axios.get(`/api/user/${id}`)
            .then(res => {
                console.log(res);
            })
        )
    },
    userRegister: function(obj, callback) {
        return (
            axios.post('/api/auth/register', obj, function(res) {
                // changed the data being sent in request
                if (res.status === 200) {
                    console.log('success');
                }
            })
            .then((result) => {
                callback();
            })
        )
    }
}