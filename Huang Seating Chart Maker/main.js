let studentsList = [];

//here, you can change the list of students
//the formatting is as follows: studentsList.push(new Student("firstName","middleName","lastName","letterGrade"));
studentsList.push(new Student("Tim","Yun","Lou","b"));
studentsList.push(new Student("Debbie","Huanged","Huang","a"));
studentsList.push(new Student("Lala","muscle","hands","c"));
studentsList.push(new Student("Gitchee","wa","ma","d"));
studentsList.push(new Student("Jams","summer","sand","f"));
studentsList.push(new Student("something","woman","Man","a"));
studentsList.push(new Student("my","name","gone","b"));
studentsList.push(new Student("help","I'm","dad","b"));
studentsList.push(new Student("running","really","fast","d"));
studentsList.push(new Student("baby","shark","doodooodooodoo","a"));
studentsList.push(new Student("What","is","love","b"));
studentsList.push(new Student("let","it","go","f"));

//this uses the student list and organizes it into groups of 4
//format: new Chart(arrayName, amountOfStudents);
let apple = new Chart(studentsList, 4);
console.log(apple.getTables());
let text = document.getElementById("hello");

//don't touch this part it's broken
// text.innerHTML = apple.stringGroups();

