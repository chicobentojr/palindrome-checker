const isPalindrome = (text) => {
  const sentence = text.toLowerCase().replace(/[^a-z0-9]/gi,'');
  const reverse = sentence.split('').reverse().join('');

  return sentence == reverse;
}

module.exports = isPalindrome;
