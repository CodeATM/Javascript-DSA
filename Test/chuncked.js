const chuckArray = (array, size) => {
  const chuncked = [];
  let index = 0;

  while (index < array.length) {
    const chuck = array.slice(index, index + size);
    console.log("--------", chuck);
    chuncked.push(chuck);

    index += size;
  }
};

console.log(chuckArray([1, 2, 3, 4, 5, 6, 7, 8, 12], 4));
