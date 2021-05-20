export const sleep = (miliseconds?: number): Promise<void> =>
  new Promise((resolve) => {
    let timer = setTimeout(() => {
      clearTimeout(timer);
      resolve();
    }, miliseconds || 10);
  });
