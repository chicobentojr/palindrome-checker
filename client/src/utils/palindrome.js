import axios from 'axios';

const isPalindrome = (text) => {
  return axios.post('http://localhost:4000/ispalindrome', {
    sentence: text
  });
}

export default {
  isPalindrome
}
