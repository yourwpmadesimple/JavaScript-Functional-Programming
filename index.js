import words from "an-array-of-english-words" assert { type: "json" };

// Spread Operator //
function spread() {
  /** Objects **/
  function objects() {
    const person = {
      name: "Jimmy James",
      age: 50,
      hairColor: "Brown",
      eyeColor: "Green",
    };

    const careerData = {
      name: "Chuck Charles",
      title: "Web Developer",
      company: "HatGlobe",
    };

    const updates = {
      name: "John Johnson",
    };

    const personWithCareerData = {
      ...person,
      ...careerData,
      name: person.name,
      ...careerData,
    };

    const updatedPerson = {
      ...person,
      ...updates,
    };
    console.log(updatedPerson);
  }
  objects();
  /** Arrays **/
  function arrays() {
    const numbers = [1, 2, 3, 4, 5];
    // conventional way
    // numbers.push(6);
    // console.log("conventional way", numbers);

    // using spread //
    const newNumbers = [...numbers, 6];
    console.log("using spread", newNumbers);
  }
  arrays();
}
//spread();

// Map Function //
function mapFunc() {
  function numbersArray() {
    const numbers = [1, 2, 3, 4, 5];
    const double = (x) => x + 2;

    const doubledNumbers = numbers.map(double);
    console.log(doubledNumbers);

    // const doubledNumbers = [];
    // for (let i = 0; i < numbers.length; i++) {
    //   doubledNumbers.push(numbers[i] * 2);
    //   console.log(doubledNumbers);
    // }
  }
  numbersArray();
}
//mapFunc();

// Filter Function //
function filterFunc() {
  function numbersArray() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const isEven = (x) => x % 2 === 0;

    // const evenNumbers = numbers.filter(isEven);
    const evenNumbers = numbers.filter((x) => x % 2 === 0);
    console.log(evenNumbers);
    // let evenNumbers = [];

    // // for (let i = 0; i < numbers.length; i++) {
    // //   if (numbers[i] % 2 === 0) {
    // //     evenNumbers.push(numbers[i]);
    // //     console.log(evenNumbers);
    // //   }
    // // }
  }
  //numbersArray();
  function wordsArray() {
    const words = ["hello", "goodbye", "the", "Antartica"];

    const createLengthTest = (minLength) => (word) => word.length > minLength;
    const longWords = words.filter(createLengthTest(5));

    console.log(longWords);

    //const isLongerThanFive = words.filter((word) => word.length < 5);
    //console.log(isLongerThanFive);
  }
  wordsArray();
}
//filterFunc();

// Ever and Some Functions //
function EverySomeFunc() {
  function employeeFunc() {
    const employees = [
      {
        name: "Jane Janer",
        salary: 90000,
      },
      {
        name: "Don Donnald",
        salary: 65000,
      },
      {
        name: "Donna Donata",
        salary: 1500000,
      },
      {
        name: "John Johnson",
        salary: 250000,
      },
    ];
    const makesMoreThanOneMillion = (employee) => employee.salary > 1000000;
    const result = employees.some(makesMoreThanOneMillion);
    console.log(result);

    const formValues = ["Shaun", "Shaunte", "Dayton", ""];

    const isNotEmpty = (string) => !!string;

    const allFieldsFilled = formValues.every(isNotEmpty);

    console.log(allFieldsFilled);
  }
  employeeFunc();
}
//EverySomeFunc();

// Slice Function - Get a section of elements from an array//
function slicFunc() {
  function numbersArray() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("Array length: ", numbers.length);
    console.log("Sliced: ", numbers.slice(3, 8));
    console.log("Copy Array: ", numbers.slice());
    console.log("Copy Array in Reverse: ", numbers.slice().reverse());
  }
  numbersArray();
}
//slicFunc();

// Sort Function used to change the order of elements in an Array //
function sortFunc() {
  function mixedUpNumbersArray() {
    const mixedUpNumbers = [10, 2, 4, 3, 7, 8, 9, 1, 6];
    const ascending = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
    const descending = (a, b) => {
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    };
    // const sortedNumbers = mixedUpNumbers.slice().sort(ascending);
    const sortedNumbers = mixedUpNumbers.slice().sort(descending);

    console.log(sortedNumbers);
  }
  mixedUpNumbersArray();
}
///sortFunc();

// Reduce Function allows to take an array of data and reduce it down to a single value //
function reduceFunc() {
  function numbersArray() {
    const numbers = [5, 7, 2, 40, 23, 14, 8, 4, 11];

    const sum = numbers.reduce((acc, x) => {
      console.log(`acc is ${acc}`);
      console.log(`x is ${x}`);
      return acc * x;
    }, 1);
    console.log(sum);
  }
  numbersArray();
}
//reduceFunc();

/******* Array Functions *******/
function arrayFuncs() {
  function dataSet() {
    const employees = [
      {
        name: "John Olsen",
        age: 54,
        jobTitle: "developer",
        salary: 70000,
      },
      {
        name: "Karen Norris",
        age: 34,
        jobTitle: "engineer",
        salary: 75000,
      },
      {
        name: "Daryl Cline",
        age: 25,
        jobTitle: "secretary",
        salary: 54000,
      },
      {
        name: "Abbey Garcia",
        age: 40,
        jobTitle: "developer",
        salary: 100000,
      },
      {
        name: "Finn Smith",
        age: 29,
        jobTitle: "engineer",
        salary: 40000,
      },
      {
        name: "Eve Wordsworth",
        age: 20,
        jobTitle: "developer",
        salary: 65000,
      },
      {
        name: "Ronald Jacobs",
        age: 60,
        jobTitle: "developer",
        salary: 90000,
      },
    ];

    function developersFunc() {
      // Get list of all developers in employees objects array
      const developers = employees.filter(
        (employee) => employee.jobTitle === "developer"
      );
      console.log("List of all Developers: ", developers);

      const developerSalaries = developers.map((developer) => developer.salary);
      console.log("List of Developer salaries: ", developerSalaries);

      // Total Developer Salaries
      const totalDeveloperSalaries = developerSalaries.reduce(
        (acc, x) => acc + x,
        0
      );
      console.log("Total Developer salaries: ", totalDeveloperSalaries);

      const averageDeveloperSalary =
        totalDeveloperSalaries / developerSalaries.length;
      console.log("Average Developer Salary: ", averageDeveloperSalary);
    }
    developersFunc();

    function otherEmployees() {
      // list of non Developers
      const nonDevelopers = employees.filter(
        (employee) => employee.jobTitle !== "developer"
      );
      console.log("List of employess that are not developers: ", nonDevelopers);
      // Salary list of non developers
      const nonDeveloperSalaries = nonDevelopers.map((nondev) => nondev.salary);
      console.log("Non Dev salaries: ", nonDeveloperSalaries);
      // Salary total of non developers
      const totalNonDeveloperSalaries = nonDeveloperSalaries.reduce(
        (acc, x) => acc + x,
        0
      );
      console.log(
        "Total salary of non developers: ",
        totalNonDeveloperSalaries
      );
      // Average salary for non developers
      const averageNonDeveloperSalary =
        totalNonDeveloperSalaries / nonDeveloperSalaries.length;
      console.log(
        "Average salary of non developers: ",
        Math.round(averageNonDeveloperSalary)
      );
    }
    otherEmployees();
  }
  dataSet();
}
//arrayFuncs();

function challengeOne() {
  const map = (arr, func) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      const result = func(arr[i]);
      newArray.push(result);
    }
    return newArray;

    //return arr.reduce((acc, x) => [...acc, func(x)], []);
  };
  console.log(map([1, 2, 3], (x) => x * 2));

  console.log(map([5, 6, 7, 8, 9, 10], (x) => -x));

  console.log(map(["a", "b", "c", "d"], (x) => x.toUpperCase()));
}
//challengeOne();

/*** Partial Application */
function partialAppFunc() {
  const add = (x, y, z) => x + y + z;

  const addPartial = function (x = 5) {
    return function (y = 6, z = 7) {
      return add(x, y, z);
    };
  };
  const add5 = addPartial();

  const sum = add5();

  console.log(sum);
}
// partialAppFunc();

// Recursion is a function that calls itself//
function recursionFunc() {
  const countDown = (x) => {
    if (x < 0) return;
    console.log("Count Down: ", x);
    countDown(x - 1);
  };
  countDown(10);

  const countUp = (x, max) => {
    if (x > max) return;
    console.log("Count Up: ", x);
    countUp(x + 1, max);
  };
  countUp(0, 10);
}
//recursionFunc();

//  Function Objects //
function funcObj() {
  const sayHello = () => {
    console.log("Hello");
  };
  //console.log(sayHello.name);

  const add = (x, y, z) => x + y + z;
  const args = [1, 2, 3];
  const add1 = add.bind(null, 1);

  //console.log(add.length);
  //console.info(add.toString());

  /** call function property */
  //   console.log(add.call(null, 1, 2, 3));
  //   console.log(add(1, 2, 3));

  /** apply function property */
  //console.log(add.apply(null, [1, 2, 3]));
  //console.log(add(...args));

  /** bind function property */
  //console.log(add.bind(null, 1));
  console.log(add1(2, 3));
}
//funcObj();

// Challenge 2 //
function challenge2() {
  const electionVotes = [
    "Harry",
    "Rick",
    "Ben",
    "Ben",
    "Harry",
    "Ashley",
    "Connor",
    "Rick",
    "Ashley",
    "Rick",
    "Albert",
    "Ben",
    "Michael",
    "Rick",
    "Albert",
    "Karen",
    "Harry",
    "Karen",
    "Donna",
    "Ashley",
    "Albert",
    "Harry",
    "Dane",
    "Dane",
    "Rick",
    "Donna",
    "Mortimer",
  ];

  const tallyVotes = (votes) => {
    return votes.reduce(
      (acc, name) => ({
        ...acc,
        [name]: acc[name] ? acc[name] + 1 : 1,
      }),
      {}
    );
  };

  console.log(tallyVotes(electionVotes));

  /* Expected Output (something like this):
        {
            Harry: <some number>
            Donna: <some number>
            Rick: <some number>
            ...
        }
    */
}
//challenge2();

// Challenge 3 //

function challenge3() {
  const countOccurrences = (arr) =>
    arr.reduce(
      (acc, str) => ({
        ...acc,
        [str]: acc[str] ? acc[str] + 1 : 1,
      }),
      {}
    );

  const hasSameLetterCount = (word1, word2) => {
    const word1Count = countOccurrences(word1.split(""));
    const word2Count = countOccurrences(word2.split(""));

    return (
      Object.keys(word1Count).length === Object.keys(word2Count).length &&
      Object.keys(word1Count).every(
        (letter) => word1Count[letter] === word2Count[letter]
      )
    );
  };

  const findAnagrams = (word, allWords) => {
    return allWords
      .filter((entry) => hasSameLetterCount(word, entry))
      .filter((anagram) => anagram !== word);
  };

  console.log(findAnagrams("Louis Friend", words));

  /*
    Expected output: ['iceman', 'anemic']
*/
}
challenge3();
