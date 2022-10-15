let tables = [];
let sortedStudentGroups;
let amountOfGroups;
let peoplePerGroup;
let studentList;
class Chart{
    //combines arrays and sorts them in descending left to right
    static merge(arrayOne,arrayTwo){
        let ultimate = [];
        for(let a = 0;a<arrayOne.length;a++){
            ultimate.push(arrayOne[a]);
        }
        for(let a = 0;a<arrayTwo.length;a++){
            ultimate.push(arrayTwo[a]);
        }
        let temp;
        for(let outer = 0;outer<ultimate.length;outer++){
            for(let inner = 0;inner<ultimate.length-outer-1;inner++){
                if(ultimate[inner]<ultimate[inner+1]){
                    temp = ultimate[inner+1];
                    ultimate[inner+1] = ultimate[inner];
                    ultimate[inner] = temp;
                }
            }
        }
        return ultimate;
    }
    //combines arrays and sorts them in descending letter grades left to right
    static mergeGradeBased(arrayOne,arrayTwo){
        let ultimate = [];
        for(let a = 0;a<arrayOne.length;a++){
            ultimate.push(arrayOne[a]);
        }
        for(let a = 0;a<arrayTwo.length;a++){
            ultimate.push(arrayTwo[a]);
        }
        let temp;
        for(let outer = 0;outer<ultimate.length;outer++){
            for(let inner = 0;inner<ultimate.length-outer-1;inner++){
                if(ultimate[inner].compareGrades(ultimate[inner+1])==-1){
                    temp = ultimate[inner+1];
                    ultimate[inner+1] = ultimate[inner];
                    ultimate[inner] = temp;
                }
            }
        }
        return ultimate;
    }
    //splits the list into many pieces to make sorting more effcient
    //then, merges all the pieces back together and sorts them based on descending left to right (numbers)
    static mergeSort(array,l,r){
        
        let subLength = r-l+1;
        let m = Math.floor((l+r)/2);
        if(subLength>2){
            return this.merge(this.mergeSort(array,l,m),this.mergeSort(array,m+1,r));
            
        }
        let temp = [];
        for(let a = l;a<=r;a++){
            temp.push(array[a]);
        }
        return temp;
    }
    //splits the student list into many pieces to make sorting more effcient
    //then, merges all the pieces back together and sorts them based on descending left to right (letter grades)
    static mergeSortGradeBased(array,l,r){
        
        let subLength = r-l+1;
        let m = Math.floor((l+r)/2);
        if(subLength>2){
            return this.mergeGradeBased(this.mergeSort(array,l,m),this.mergeSort(array,m+1,r));
        }
        let temp = [];
        for(let a = l;a<=r;a++){
            temp.push(array[a]);
        }
        return temp;
    }
    //the whole organization process
    //assigns students to tables (cocktail shaker)
    constructor(studentListIn,peoplePerGroupIn){
        studentList = studentListIn;
        peoplePerGroup = peoplePerGroupIn;
        sortedStudentGroups = Chart.mergeSortGradeBased(studentList,0,studentList.length-1);
        amountOfGroups = Math.ceil(studentList.length/peoplePerGroup);
        for(let a = 0;a<amountOfGroups;a++){
            tables.push([]);
        }
        let counter = 0;
        for(let outer = 0;outer<peoplePerGroup;outer++){
            if(outer%2==0){
                for(let inner = 0;inner<tables.length;inner++){
                    tables[inner][outer] = sortedStudentGroups[counter];
                    counter++;
                }
            }
            else{
                for(let inner = tables.length-1;inner>=0;inner--){
                    tables[inner][outer] = sortedStudentGroups[counter];
                    counter++;
                }
            }
        }
    }
    //WIP converts the groups into text form that is able to be displayed on the website
    stringGroups(){
        let output = "";
        for(let outer = 0;outer<tables.length;outer++){
            for(let inner = 0;inner<peoplePerGroup;inner++){
                if(!tables[outer][inner] == "undefined"){
                    let currentStudent = tables[outer][inner]
                    output += currentStudent.firstName +" "+ currentStudent.middleName +" "+ currentStudent.lastName +" - Grade: "+ currentStudent.grade +"\n";
                }
            }
            output+="\n"
        }
        return output;
    }

    //allows me to access the processed list of table groups from other files
    getTables(){
        return tables;
    }
}