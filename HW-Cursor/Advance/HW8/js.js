class Student {
    constructor(fullName, university, course) {
        this.fullName = fullName;
        this.university = university;
        this.course = course;
        this.marks = [5,4,3,4,5];
        //this.allMarksTogether = [];
        this.average = 0;
        this.isStudent = true;
    }
    deleteStudent() {
      this.isStudent = false;
    }
    returnStudent() {
      this.isStudent = true;
    }
    get studentInfo() {
        return `студент ${this.course} ${this.university}, ${this.fullName}`
    }
    get studentMarks() {
      if(this.isStudent) {
        //this.allMarksTogether.push(this.marks)
        //return (this.allMarksTogether).join(",").split(",").map(number => parseInt(number));
        return (this.marks.join(",").split(",").map(number => parseInt(number)));
      } else {
        return null;
      }
    }
    set studentMarks(mark) {
      if(this.isStudent) {
        //this.allMarksTogether.push(mark)
        //return (this.allMarksTogether);
        (this.marks).push(mark);
        return(this.marks);
      } else {
        return null;
      }
    }
    get getAverageMark() {
      if(this.isStudent) {
        // this.average = this.allMarksTogether.flat().reduce((sum, current) => sum + current, 0) / this.allMarksTogether.flat().length;
        // return parseFloat(this.average.toFixed(1));
        this.average = this.marks.flat().reduce((sum, current) => sum + current, 0) / this.marks.flat().length;
        return parseFloat(this.average.toFixed(1));
      } else {
        return null;
      }
    }
}
const student = new Student("Остап Бендер","Вищої Школи Психотерапії м.Одеса","1го курсу");
student.studentMarks = 5;
console.log(student.studentInfo);
console.log(student.studentMarks);
console.log(student.getAverageMark);
console.log(student.deleteStudent());
console.log(student.studentMarks)
console.log(student.returnStudent());
console.log(student.studentMarks);

class BudgetStudent extends Student{
  constructor(fullName, university, course) {
    super(fullName, university, course)
  }
  get Scholarship() {
    if(!(this.isStudent)) {
      return "Немає студента";
    } else  if(this.getAverageMark < 4) {
      return "Ще не заслужив";
    } else {
      return "Ви отримали 1400 грн. стипендії";
    }
  }
}
const budgetStudent = new BudgetStudent("Остап Бендер","Вищої Школи Психотерапії м.Одеса","1го курсу");
console.log(budgetStudent.Scholarship)
console.log(budgetStudent.deleteStudent())
console.log(budgetStudent.Scholarship)
console.log(budgetStudent.returnStudent())
console.log(budgetStudent.Scholarship)