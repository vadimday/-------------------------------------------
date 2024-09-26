function createCounter() {
  let counter = 0;
  return {
    increment: function () {
      counter++;
      return counter;
    },
    get: function () {
      return counter;
    },
  };
}

const counter = createCounter();
console.log(counter.get());
counter.increment();
counter.increment();
console.log(counter.get());
counter.increment();
console.log(counter.get());
