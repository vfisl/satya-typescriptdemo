class Student  {

         public constructor(
                       public name:string,
                       public studentId:number,
                       public city:string,
                       public department?:string,
    public hobby:string='sports'){}

printDetails=()=>
{
    console.log(`Name : ${this.name}`)
    console.log(`id : ${this.studentId}`)
    console.log(`Department : ${this.department}`)
}
showCourses=(...course:string[]):void=>
{
    course.forEach(course=>console.log(`${course}`))
}
}
var student=new Student('sadik',100,'assam','java');
console.log(student);
student.printDetails()
student.showCourses('java','c++')