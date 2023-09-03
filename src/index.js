module.exports = function reverse(n) {
    const numberString = n.toString();
    const reversedString = numberString.split('').reverse().join('').replace('-', '');
    return reversedString;
}