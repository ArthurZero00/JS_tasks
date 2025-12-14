/*
Task: School Management System (with IDs and Relations)
1. Person Class
Properties:
id (number or string, unique)
name (string)
age (number)
Method:
introduce() → "Hi, my name is <name> and I am <age> years old."
2. Student Class (extends Person)
Additional Properties:
grade (number)
courseIds (array of course IDs)
Methods:
enroll(courseId) → adds the course ID to courseIds
listCourses(coursesArray) → print all course names from the passed coursesArray using IDs
Override introduce() → "Hi, my name is <name>, I am <age> years old and I study in grade <grade>."
3. Teacher Class (extends Person)
Additional Properties:
subjectIds (array of subject IDs)
courseIds (array of course IDs)
Methods:
assignCourse(courseId) → adds the course ID to courseIds
listSubjects(subjectsArray) → print all subject names using IDs
teach(coursesArray) → logs: "<name> is teaching <course.name>." for each assigned course (using IDs)
4. Subject Class
Properties:
id (unique)
name (string)
teacherIds (array of teacher IDs, because many teachers can teach one subject)
Methods:
subjectInfo(teachersArray) → logs: "Subject <name> is taught by <teacher names>."
5. Course Class
Properties:
id (unique)
name (string)
subjectId (one subject per course)
teacherId (one teacher per course)
studentIds (array of student IDs)
Methods:
addStudent(studentId) → adds to studentIds
courseInfo(studentsArray, teachersArray, subjectsArray) → logs course details:
"Course <name> on <subject> taught by <teacher> has <N> students."
6. School Class
Properties:
students (array of Student objects)
teachers (array of Teacher objects)
subjects (array of Subject objects)
courses (array of Course objects)
Methods:
addStudent(student)
addTeacher(teacher)
addSubject(subject)
addCourse(course)
listStudents(), listTeachers(), listSubjects(), listCourses()
:white_check_mark: Goal of Task:
Implement all these classes in JavaScript with IDs for relations, then create some sample data (2 teachers, 3 students, 2 subjects, 2 courses, 1 school).
Test:
Enrolling students in courses
Assigning teachers to courses
Linking teachers to subjects
Printing reports using the methods
*/


class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(id, name, age, grade, courseIds = []) {
        super(id, name, age);
        this.grade = grade;
        this.courseIds = courseIds;
    }

    enroll(courseId) {
        if (!this.courseIds.includes(courseId)) {
            this.courseIds.push(courseId);
        }
    }

    listCourses(coursesArray) {
        const enrolledCourses = coursesArray.filter(course =>
            this.courseIds.includes(course.id)
        );
        enrolledCourses.forEach(course => console.log(course.name));
    }

    introduce() {
        console.log(
            `Hi, my name is ${this.name}, I am ${this.age} years old and I study in grade ${this.grade}.`
        );
    }
}

class Teacher extends Person {
    constructor(id, name, age, subjectIds = [], courseIds = []) {
        super(id, name, age);
        this.subjectIds = subjectIds;
        this.courseIds = courseIds;
    }

    assignCourse(courseId) {
        if (!this.courseIds.includes(courseId)) {
            this.courseIds.push(courseId);
        }
    }

    listSubjects(subjectsArray) {
        const mySubjects = subjectsArray.filter(subject =>
            this.subjectIds.includes(subject.id)
        );
        mySubjects.forEach(subject => console.log(subject.name));
    }

    teach(coursesArray) {
        const myCourses = coursesArray.filter(course =>
            this.courseIds.includes(course.id)
        );
        myCourses.forEach(course =>
            console.log(`${this.name} is teaching ${course.name}.`)
        );
    }
}

class Subject {
    constructor(id, name, teacherIds = []) {
        this.id = id;
        this.name = name;
        this.teacherIds = teacherIds;
    }

    subjectInfo(teachersArray) {
        const teachers = teachersArray.filter(teacher =>
            this.teacherIds.includes(teacher.id)
        );
        const teacherNames = teachers.map(t => t.name).join(", ");
        console.log(`Subject ${this.name} is taught by ${teacherNames}.`);
    }
}

class Course {
    constructor(id, name, subjectId, teacherId, studentIds = []) {
        this.id = id;
        this.name = name;
        this.subjectId = subjectId;
        this.teacherId = teacherId;
        this.studentIds = studentIds;
    }

    addStudent(studentId) {
        if (!this.studentIds.includes(studentId)) {
            this.studentIds.push(studentId);
        }
    }

    courseInfo(studentsArray, teachersArray, subjectsArray) {
        const subject = subjectsArray.find(s => s.id === this.subjectId);
        const teacher = teachersArray.find(t => t.id === this.teacherId);
        const students = studentsArray.filter(s => this.studentIds.includes(s.id));

        console.log(
            `Course ${this.name} on ${subject?.name} taught by ${teacher?.name} has ${students.length} students.`
        );
    }
}

// 6. School class
class School {
    constructor() {
        this.students = [];
        this.teachers = [];
        this.subjects = [];
        this.courses = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    addTeacher(teacher) {
        this.teachers.push(teacher);
    }

    addSubject(subject) {
        this.subjects.push(subject);
    }

    addCourse(course) {
        this.courses.push(course);
    }

    listStudents() {
        this.students.forEach(s => console.log(s.name));
    }

    listTeachers() {
        this.teachers.forEach(t => console.log(t.name));
    }

    listSubjects() {
        this.subjects.forEach(sub => console.log(sub.name));
    }

    listCourses() {
        this.courses.forEach(c => console.log(c.name));
    }
}


const school = new School();

const teacher1 = new Teacher(1, "Aghas", 35, [101]);
const teacher2 = new Teacher(2, "Hayk", 40, [102]);

const student1 = new Student(1, "Narek", 15, 9);
const student2 = new Student(2, "Sevak", 14, 8);
const student3 = new Student(3, "Hakob", 16, 10);

const subject1 = new Subject(101, "Computer Fundamentals", [1]);
const subject2 = new Subject(102, "Networking", [2]);

const course1 = new Course(201, "Computer Science", 101, 1);
const course2 = new Course(202, "Computer Architecture", 102, 2);

school.addTeacher(teacher1);
school.addTeacher(teacher2);
school.addStudent(student1);
school.addStudent(student2);
school.addStudent(student3);
school.addSubject(subject1);
school.addSubject(subject2);
school.addCourse(course1);
school.addCourse(course2);

student1.enroll(201);
student2.enroll(201);
student3.enroll(202);
course1.addStudent(1);
course1.addStudent(2);
course2.addStudent(3);

teacher1.assignCourse(201);
teacher2.assignCourse(202);



student1.introduce();
teacher1.introduce();
student1.listCourses(school.courses);
teacher1.listSubjects(school.subjects);
teacher1.teach(school.courses);
subject1.subjectInfo(school.teachers);
course1.courseInfo(school.students, school.teachers, school.subjects);