import readlineSync from 'readline-sync';
const actualName = () => {
  return readlineSync.question('Your answer: ');
};

export default actualName;
