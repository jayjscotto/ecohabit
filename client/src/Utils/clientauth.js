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
    },
    populateLocalStorage: function(userData) {
        localStorage.setItem('jwtToken', userData.token);
        localStorage.setItem('eco-user', userData.user);
        localStorage.setItem('eco-firstName', userData.firstName);
    },
    getLocalStorage: function(key) {
        if (localStorage.getItem('jwtToken', result.data.token)) {
            const userData = {
                user: localStorage.getItem('eco-user', result.data.user),
                firstName: localStorage.getItem('eco-firstName', result.data.firstName)
            }
            return userData;
        } else {
            
        }
    },
    /// boolean for user daily check in
    userDailyCheck: function(userName) {
        // return axios.get('/api/user/dailycheck', obj)
    },
    // submit user daily check answers
    userSubmitDaily: function(userName) {
        // return axios.post('/api/user/dailycheck', obj)
    },
}