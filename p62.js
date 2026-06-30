// Find the student with the highest marks.


let students = [{
  name : 'Ayushi Sharma',
  age : 19,
  marks : 85
},
{
  name : 'Kuldeep Saho',
  age : 20,
  marks : 90
},
{
  name : 'Keerthi',
  age : 21,
  marks : 95,
}
];
let maxMarks = Math.max(students[0].marks,students[1].marks,students[2].marks);
console.log(maxMarks)


