type AsyncFn = () => void;

const queue: Array<AsyncFn> = [];

const countdown = (id: string, from: number, callback: () => void) => {
  console.log(`${id}: ${from}`);

  if (from > 0) {
    queue.push(() => countdown(id, from - 1, callback));
  } else {
    queue.push(callback);
  }
};

queue.push(() =>
  countdown("countdown-1", 4, () => console.info("Done countdown-1")),
);
queue.push(() =>
  countdown("countdown-2", 2, () => console.info("Done countdown-2")),
);

while (queue.length > 0) {
  const next = queue.shift();
  if (next) next();
}
