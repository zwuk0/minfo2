const truncate = (text, start, end) => {
  let string = text;
  if (string.length > end) {
    return string.slice(start, end) + "...";
  } else {
    return text;
  }
};

export default truncate;
