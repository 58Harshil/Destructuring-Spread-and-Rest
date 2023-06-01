
//1
function wordCount(text) {
    const wordList = text.split(' ');
    const wordCountMap = {};

    for (let i = 0; i < wordList.length; i++) {
        const word = wordList[i];

        if (word in wordCountMap) {
            wordCountMap[word]++;
        } else {
            wordCountMap[word] = 1;
        }
    }

    return wordCountMap;
}
const text = "Hello world harshil harshil";
//const result = wordCount(text);
//console.log(result);

//2
function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}
const numbers = [1, 2, 3, 4, 2, 1, 5, 3];
const uniqueNumbers = removeDuplicates(numbers);
  //console.log(uniqueNumbers);

//3
function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
  }
  let x = 5;
  let y = 10;
  
  const swappedValues = swapValues(x, y);
  //console.log(swappedValues);
  //console.log(x); // Output: 10
  //console.log(y); // Output: 5

  //4
  function extractElements(array) {
    const [first, second, ...rest] = array;
    const last = rest.pop();
    return [first, second, last];
  }
  //const array = [1, 2, 3, 4, 5];
  //const extractedElements = extractElements(array);
  //console.log(extractedElements);


  //5
  function findMinMax(array) {
    const max = Math.max(...array);
    const min = Math.min(...array);
    return { max, min };
  }

  const array = [5, 2, 7, 1, 9];
  const result = findMinMax(array);
  //console.log(result);


  //6
  const person = {
    name: "Mithun",
    age: 21,
    address: {
      street: "B8, Block B, Industrial Area.",
      city: "Sector 62, Noida",
      state: "Uttar Pradesh",
    },
  };
  
  function extractData(obj) {
    const {
      name,
      address: { street },
    } = obj;
    return { name, street };
  }
  
  console.log(extractData(person));
