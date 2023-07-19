export const capitalizeEveryFirstLetter = (text) => {
  return text.toLowerCase().replace(/(^[a-z]| [a-z])/g, (letter) => {
    return letter.toUpperCase();
  });
};

export const deCapitaliseFirstLetter = (text) => {
  return text && text[0].toLowerCase() + text.slice(1);
};
