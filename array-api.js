// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const q1 = fruits.join(" ");
  console.log(`q1 : ${q1}`);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const q2 = fruits.split(",");
  console.log(`q2 : ${q2}`);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
//splice는 배열자체수정
{
  const array = [1, 2, 3, 4, 5];
  const q3 = array.reverse();
  console.log(`q3 : ${q3}`);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const q4 = array.slice(2, 5);
  console.log(`q4 : ${q4}`);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const q5 = students.find((student) => student.score === 90);
  console.log(q5);
}

// Q6. make an array of enrolled students
{
  const q6 = students.filter((student) => student.enrolled);
  console.log(q6);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const q7 = students.map((student) => student.score);
  console.log(q7);
}

// Q8. check if there is a student with the score lower than 50
{
  const q8 = students.some((student) => student.score < 50);
  console.log(q8);
}

// Q9. compute students' average score
{
  const q9 = students.reduce(
    (prev, nextStudent) => prev + nextStudent.score,
    0
  );
  console.log(q9 / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const q10 = students.map((student) => student.score).join(", ");

  console.log(q10);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const bonous = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join(", ");
  console.log(bonous);
}
