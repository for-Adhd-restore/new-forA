export const logOnDev = (message: string) => {
  if (__DEV__) {
    console.log(message);
  }
};
