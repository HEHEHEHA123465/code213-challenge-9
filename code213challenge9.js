let arrayofnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenonly(number) {
    return number % 2 === 0;
}

let arrayofeven = arrayofnumbers.filter(evenonly);

function sum(array) {
    return array.reduce((x, y) => x + y, 0);
}

function average(array) {
    const total = sum(array);
    return total / array.length;
}

console.log(average(arrayofeven)); 
function findLongestWord(words) {
    return words.reduce((longest, word) => word.length > longest.length ? word : longest);
}

const wordsArray = ["one", "desk", "poster", "bottle", "bear"];
console.log(findLongestWord(wordsArray)); 

const books = [
    { title: "Book 1", author: "Author 1", pages: 200 },
    { title: "Book 2", author: "Author 2", pages: 350 },
    { title: "Book 3", author: "Author 3", pages: 150 }
  ];
  
  const pagesArray = books.map(book => book.pages);
  console.log(pagesArray); 


  function stringFrequency(strings) {
    return strings.reduce((frequencyObj, string) => {
      if (frequencyObj[string]) {
        frequencyObj[string]++;
      } 
      else {
        frequencyObj[string] = 1;
      }
      return frequencyObj;
    }, {}); 
  }
  
  const input = ["hello", "world", "hello"];
  const result = stringFrequency(input);
  console.log(result); 
  

  function countPeopleByCity(people) {
    return people.reduce((cityCounts, person) => {
      if (cityCounts[person.city]) {
        cityCounts[person.city]++;
      } 
      else {
        cityCounts[person.city] = 1;
      }
      return cityCounts;
    }, {}); 
  }
  
  const people = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 40, city: "Chicago" },
    { name: "Charlie", age: 50, city: "New York" }
  ];
  
  const resultpeople = countPeopleByCity(people);
  console.log(resultpeople);
  