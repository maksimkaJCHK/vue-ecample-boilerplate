export const getRandomNumb = (max) => Math.floor(Math.random() * max);

export const bUrlToAddr = (path) => path.replace(/\//,  '%2F');

export const bUrl = (path) => path.replace(/%2F/,  '\/');