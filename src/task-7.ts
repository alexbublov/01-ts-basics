function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS");
    }, 1000);
  }) as Promise<string>;
}

getMessage().then(result => console.log(result));
