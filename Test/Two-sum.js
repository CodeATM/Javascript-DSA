const findTwoSum = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        console.log(`we found ${array[i]} ${array[j]}`);
      }
    }
  }
};

const nums = [1, 4, 6, 5];
findTwoSum(nums, 11);
