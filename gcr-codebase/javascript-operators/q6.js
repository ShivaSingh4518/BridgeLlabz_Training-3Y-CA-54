let count = 0;

function increment() {
  function updateCount() {
    count += 1;
  }

  updateCount();
  console.log(`Count: ${count}`);
}

function decrement() {
  count -= 1;
  console.log(`Count: ${count}`);
}

increment();
increment();
decrement();
