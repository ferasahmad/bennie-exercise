import axios from "axios";

export const getUsers = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users')
}

export const getPosts = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts')
}
