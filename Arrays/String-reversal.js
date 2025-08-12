function reverseString(string) {
  const StringArray = string.split("");
  const reversed = StringArray.reverse();
  const finalReversd = reversed.join("");
  console.log(finalReversd);
}

reverseString("money");

function pallendromString(string) {
  const StringArray = string.split("");
  const reversed = StringArray.reverse();
  const finalReversd = reversed.join("");
  console.log(finalReversd);

  if (finalReversd !== string) {
    console.log("this is false");
  } else {
    console.log("this is true");
  }
}

pallendromString("abba");
