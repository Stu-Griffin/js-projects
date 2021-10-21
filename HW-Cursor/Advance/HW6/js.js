const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }
];

//1
function getSubjects(student) {
  const subjectsList = Object.keys(student.subjects);
  return subjectsList.map(item => item.slice(0,1).toUpperCase()+item.slice(1).replace(/_/g, ' '));
}
console.log(getSubjects(students[0]));

//2
const getAverageMark = (student) => {
  const marks = Object.values(student.subjects).flat(); //в один масив все оценки студента
  let sum = 0;
  for(let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  const average = sum / marks.length;
  return average.toFixed(2);
}
console.log(getAverageMark(students[0]));

//3
// function getStudentInfo(students) {
//   const studentsCopy = {...students}; 
//   const  averageMark = getAverageMark(students);
//   delete studentsCopy.subjects;
//   studentsCopy.averageMark = averageMark;
//   return studentsCopy;
// }
const getStudentInfo = (student) => {
  const { name, course } = student;
  return {course,name,averageMark: getAverageMark(student)};
  };
console.log(getStudentInfo(students[0]));

//4
function getStudentsNames(students) {
  const names = students.map((student) => {
    return Object.values(student.name).join("");
  })
  return names.sort();
}
console.log(getStudentsNames(students));

//5
function getBestStudent(students) {
  const marks = [];
  for(let i = 0; i < students.length; i++) {
    marks.push(getAverageMark(students[i]));
    if(4.44 == getStudentInfo(students[i]).averageMark) {
      return(getStudentInfo(students[i]).name)
    }
  }
}
console.log(getBestStudent(students))

//6 //интерестно пробовал с for но пишет undefined
function calculateWordLetters(word) {
  const result = {};
  const lowWord = word.toLowerCase();
  for(letter of word) {
    if(result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  return result;
}
console.log(calculateWordLetters("test"));//если будет "тест" то консоль выбъет "т" как прописную