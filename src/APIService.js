import axios from 'axios';
const API_URL = 'http://localhost:3000';

export class APIService {

    constructor() { }

    isLoggedIn() {
        const url = `${API_URL}/gets/isLoggedIn`;
        return axios.get(url, { withCredentials: true });
    }

    logOut() {
        const url = `${API_URL}/gets/logout`;
        return axios.get(url, { withCredentials: true });
    }

    MyHomeProjects() {
        const url = `${API_URL}/gets/MyHomeProjects`;
        return axios.get(url, { withCredentials: true });
    }
    
    MyHomeGroups() {
        const url = `${API_URL}/gets/MyHomeGroups`;
        return axios.get(url, { withCredentials: true });
    }

    signIn(user) {
        const url = `${API_URL}/posts/signin`;
        return axios.post(url, user, { withCredentials: true });
    }

    signUp(user) {
        const url = `${API_URL}/posts/signup`;
        return axios.post(url, user, { withCredentials: true });
    }

    newProject(user) {
        const url = `${API_URL}/posts/newproject`;
        return axios.post(url, user, { withCredentials: true });
    }

    newGroup(user) {
        const url = `${API_URL}/posts/newgroup`;
        return axios.post(url, user, { withCredentials: true });
    }

    getProject(id) {
        const url = `${API_URL}/gets/project/` + id;
        return axios.get(url, { withCredentials: true });
    }

    getGroup(id) {
        const url = `${API_URL}/gets/group/` + id;
        return axios.get(url, { withCredentials: true });
    }

}


/*
//const https = require('https')
const http = require('http')
const querystring = require('querystring')

const gets = {
    hostname: 'localhost',
    port: 8080,
    path: '/gets',
    method: 'GET'
}

const posts = {
    hostname: 'localhost',
    port: 8080,
    path: '/posts',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

export class APIService {

    constructor() { }

    isLoggedIn() {
        gets.path = '/gets/isLoggedIn'
        return new Promise((resolve, reject) => {
            const req = http.request(gets, (res) => {
                console.log(`statusCode: ${res.statusCode}`)

                var body = []
                res.on('data', function (chunk) {
                    body.push(chunk);
                })

                res.on('end', function () {
                    try {
                        body = JSON.parse(Buffer.concat(body).toString())
                    } catch (e) {
                        reject(e);
                    }
                    resolve(body);
                })
            })

            req.on('error', (error) => {
                console.error(error)
                reject(error)
            })

            req.end()
        })
    }

    signIn(user) {
        posts.path = '/posts/signin'
        return new Promise((resolve, reject) => {
            const req = http.request(posts, (res) => {
                console.log(`statusCode: ${res.statusCode}`)

                var body = []
                res.on('data', function (chunk) {
                    body.push(chunk);
                })

                res.on('end', function () {
                    try {
                        body = JSON.parse(Buffer.concat(body).toString())
                    } catch (e) {
                        reject(e);
                    }
                    resolve(body);
                })
            })

            req.on('error', (error) => {
                console.error(error)
                reject(error)
            })

            if (user) {
                req.write(JSON.stringify(user))
            }
            req.end()
        })
    }
}*/