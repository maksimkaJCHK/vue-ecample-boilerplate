export const getRandomNumb = (max) => {
  return Math.floor(Math.random() * max);
}

export const bUrlToAddr = (path) => {
  return path.replace(/\//,  '%2F');
}

export const bUrl = (path) => {
  return path.replace(/%2F/,  '\/')
}
