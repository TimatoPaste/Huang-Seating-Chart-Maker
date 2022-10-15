//stores student data
class Student{
    constructor(firstNameIn,middleNameIn,lastNameIn,gradeIn){
        this.firstName = firstNameIn.toUpperCase().trim();
        this.middleName = middleNameIn.toUpperCase().trim();
        this.lastName = lastNameIn.toUpperCase().trim();
        this.grade = gradeIn.toUpperCase().trim();
    }

    //determines which student's grade is higher
    compareGrades(student){
        if(this.grade.charCodeAt(0)<student.grade.charCodeAt(0)){
            return 1;
        }
        else if(this.grade.charCodeAt(0)>student.grade.charCodeAt(0)){
            return -1;
        }
        else{
            return 0;
        }
    }
}