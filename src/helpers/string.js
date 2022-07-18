export const capitalize = (string = "") => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const excerpt = (string = "", length = 100) => {
  return string.length > length ? string.substring(0, length) + "..." : string;
}