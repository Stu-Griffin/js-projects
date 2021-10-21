const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//func 1
function makePairs(students) {
    const pair = [];
    const girls = [];
    const boys = [];
    const a = "а";
    students.forEach(student => {
        //console.log(student);
        const b = student.split("").reverse()[0];
        //console.log(b);
        if(b == a) {
          girls.push(student);
          //console.log(girls);
        } else {
          boys.push(student);
          //console.log(boys);
        } 
    });
    for(let i = 0; i < students.length/2; i++) {
      //console.log(i);
     
      //pair[i].push(boys[i], girls[i]); //не подходит пишет что не возможно использовать push с undefined
      //pair[i] = boys[i].concat(girls[i]); //работает не плохо он их объединяет но в string - "ОлександрОлена" вот так вот
      pair[i] = new Array(boys[i], girls[i]); //а это создает полностью то что надо ["Олександр", "Олена"] вот так вот
      //console.log(pair[i]);
    }
    return pair;
}
const pairs = makePairs(students);//понадобилась const что бы использовать это в других func

//func 1 but for others func
function getPairsForOtherFunc(students) {
  const pairForOtherFunc = [];
  const girlsForOtherFunc = [];
  const boysForOtherFunc = [];
  const a = "а";
  students.forEach(student => {
      //console.log(student);
      const b = student.split("").reverse()[0];
      //console.log(b);
      if(b == a) {
        girlsForOtherFunc.push(student);
        //console.log(girls);
      } else {
        boysForOtherFunc.push(student);
        //console.log(boys);
      } 
  });
  for(let i = 0; i < students.length/2; i++) {
    //console.log(i);
   
    //pair[i].push(boys[i], girls[i]); //не подходит пишет что не возможно использовать push с undefined
    //pair[i] = boys[i].concat(girls[i]); //работает не плохо он их объединяет но в string - "ОлександрОлена" вот так вот
    pairForOtherFunc[i] = new Array(boysForOtherFunc[i]+" i "+girlsForOtherFunc[i]); //а это создает полностью то что надо ["Олександр", "Олена"] вот так вот
    //console.log(pair[i]);
  }
  return pairForOtherFunc;
}
const pairsForOtherFunc = getPairsForOtherFunc(students);

//func 2
function pairsAndProjects(pairsForOtherFunc, themes) {
    const pairsPlusProjects = [];
    for(let i = 0; i < pairsForOtherFunc.length && i < themes.length; i++) {
      //console.log(i);
      //pairsPlusProjects[i] = new Array(pairs[i], themes[i]);// не подошло делает в масиве [["Олександр", "Олена"], "Диференційне рівняння"],
      pairsPlusProjects[i] = pairsForOtherFunc[i].concat(themes[i]);
      //pairsPlusProjects[i].push(pairs[i], themes[i]);//не подходит пишет что не возможно использовать push с undefined
      //console.log(pairsPlusProjects[i]);
    }
    return pairsPlusProjects;
}
const pairsProjects = pairsAndProjects(pairsForOtherFunc, themes);

//func 3
function studentsAndMarks(students, marks) {
    const studentsMarks = []; 
    for(let i = 0; i < students.length && i < marks.length; i++) {
        //console.log(i);
        studentsMarks[i] = new Array(students[i], marks[i]);
        //console.log(studentsMarks);
    }
  return studentsMarks;
}

// func random mark
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//func 4
function studentAndRandomMark(pairsProjects) {
    const studentsWithRandomMark = [];
    for(let i = 0; i < pairsProjects.length; i++) {
        //console.log(i);
        studentsWithRandomMark[i] = [...pairsProjects[i]];//копируем pairsProjects по индексого в масив studentsWithRandomMark по индексого
        //console.log(studentsWithRandomMark[i]);
    }
    studentsWithRandomMark.forEach(mark => {
        //console.log(mark) // просмотрим все индексы studentsWithRandomMark ну то есть pairsProjects, поскольку мы скопировали  pairsProjects в studentsWithRandomMark
        mark.push(randomNumber(1, 5));// запушили "рандомайзер"
    });
    return studentsWithRandomMark;
}
const a = [pairs, pairsProjects, studentsAndMarks(students, marks), studentAndRandomMark(pairsProjects)]
export default a