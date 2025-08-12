function findPair(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(`Pair: ${array[i]} ${array[j]}`);
    }
  }

  for (let a = 0; a < 5; a++) {
    console.log("--------------", a);
  }
}

const array = [1, 2, 3, 4, 5];

findPair(array);
