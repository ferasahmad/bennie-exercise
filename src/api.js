import axios from "axios";

export const getUsers = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users')
}

export const getPosts = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts')
}

export const getUser = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}

export const getUserPosts = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
}
