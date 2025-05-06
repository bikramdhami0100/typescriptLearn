enum WhoType {
   
    student="student",
    teacher="teacher",
    admin="admin"
}

const student=WhoType.student;
console.log(student);
console.log(WhoType.admin)
console.log(WhoType["teacher"])

enum Who{
    student,
    teacher,
    admin
}
console.log(Who.student)
console.log(Who.admin)