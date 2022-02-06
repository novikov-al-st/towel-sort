module.exports = function towelSort (matrix) {
  return (matrix || []).map((value, index) => index % 2 === 1 ? value.reverse() : value).flat();
}
