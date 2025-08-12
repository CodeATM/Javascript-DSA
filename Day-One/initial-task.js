const User = ["Tolu", "Bola", "Dayo", "Berry"];

const findIndividual = (name) => {
  for (let i = 0; i < User.length; i++) {
    if (User[i] == name) {
      console.log(`we have found her ${name}`);
    } else if (User[i] !== name) {
      console.log(`${name} no exist`);
    }
  }
};

findIndividual("Dayo");
