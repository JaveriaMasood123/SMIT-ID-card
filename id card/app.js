let name1 = prompt("Please enter your name");
let father = prompt("Please enter your father name");
let gender = prompt("Please enter your gender");
let course = prompt(" Please enter your course \n 1- Web And Mobile App Development \n 2-UI/UX design  \n 3- Cyber security\n 4- Introduction to Ai\n 5- Graphic Designing \n 6- Microsoft Power BI \n 7- Digital Marketing");
let campus = prompt("Please enter your campus \n 1-Numaish \n 2- Gulshan \n 3- Malir \n 4- Johar \n 5- Nazimabad \n 6- Muhammad Ali Society ")

document.write("Name:"  + name1 + " <br>");
document.write( "Father Name :"+ father + " <br>");
document.write("Gender: " + gender + " <br>");

if(course == "Web And Mobile App Development" ||  course == "WMA" || course == "Web Development" || course == " Digital Marketing" || course == " DM" || course == "Graphic Designing" || course == "GD" || course ==  "Introduction to Ai" ||course == "Cyber security"|| course == "Microsoft Power BI"||  course == "UI/UX design" ){
 document.write(" Course:" + course + "<br>");
 if ( campus== "Numaish" ||campus== "Muhammad Ali Society" || campus== "Malir"|| campus== " Johar"|| campus== "  Nazimabad"|| campus== "  Gulshan" ) {
    
    document.write(" Campus:" +campus  + "<br>");
    alert("Congrats!! You are enrolled in SMIT")
 }
 else{
    document.write("Sorry! You are not enrolled in SMIT")
 }

}
else{
    document.write("Sorry! You are not enrolled in SMIT")
}