import axios from 'axios';

const url = 'http://localhost:5006/posts';

export const fetchPosts = () => axios.get(url);