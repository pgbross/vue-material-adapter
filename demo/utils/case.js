export const capitalize = string => {
  return string.replace(/[._-]/g, ' ').replace(/\b(\w)/g, function (_, x) {
    return x.toUpperCase();
  });
};

export const camelize = string => {
  return string.replace(/[._-](\w|$)/g, function (_, x) {
    return x.toUpperCase();
  });
};
