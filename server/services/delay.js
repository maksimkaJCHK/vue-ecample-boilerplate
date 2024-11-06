const delay = (time = 2_000) => new Promise((resolve) => setTimeout(resolve, time));

export default delay;