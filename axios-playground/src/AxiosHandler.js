import axios from 'axios'
const baseUrl = 'https://jsonplaceholder.typicode.com/'

axios.baseUrl = baseUrl

function getPosts() {
    axios.get('posts')
        .then(x => printData(x))
        .error(err => reportError(err))
}

function getPost(id) {
    axios.get(`posts/${id}`)
        .then(x => printData(x))
        .error(err => reportError(err))
}

function createPost(post) {
    axios.post('posts', {

    })
        .then(x => printData(x))
        .error(err => reportError(err))
}

function reportError(err) {
    document.getElementById('errorElement').innerText = err
}

function printData(data) {
    document.getElementById('displayElement').innerText = data
}