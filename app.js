//{Chapter 1}




document.title = "javaScript Assignment";
alert("Welcome ");//Question 1



alert("Error! please Enter a valid password");//Question 2


alert("Welcome to Js Land.....\n Happy Coding");//Question 3



alert("Welcome To Js Land....");//Question 4


alert("Happy Coding" + "\n" + "prevent this page from creating additional dialogs");






























//{chapter 2}



var a = prompt("Enter Your Name");//Question 1
alert(a);



var b =prompt(" My Name"); //Question2
alert("My Name IS"+" "+b);



var c;
c="Hello world";
alert(c);//Question 3



var d =prompt("Enter Your Name");
alert(d);
var e =prompt(" Enter Your age");
alert(e);
var f ="Certified Mobile Application Development"; 
alert(f); //Question 4
  



var g="pizza";
alert(g+"\n"+"pizz"+"\n"+"piz"+"\n"+"pi"+"\n"+"p");//Question 5



var h = prompt("Enter Your Email Address");
alert("Your Email is"+" "+a); //Question 6





var  book="A Smarter Way To Learn JavaScript";
alert("i am trying to learn from the Book"+" "+book);//Question 7




var i="yeh! i can write HTML content through javascript"
document.write(i);//Question 8








var j="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(j);






























//{chapter3}

var age=prompt("Enter Your Age");
alert("Your Age Is"+" "+age); //Question1




var n=15; 
alert("You have visited this site"+" "+n+" "+"times");//Question 2




var birthyear=prompt("Enter your birth year")
document.write("My birth year is"+"  "+birthyear+"<br>"+"Data Type of my declare variable is number ")//Question3



var a =prompt("Visitors Name")
var b =prompt("Product Title")
var c=prompt("Quantity")
document.write(a+" "+"ordered"+" "+c+" "+b+" "+"on XYZclothings.com")     //Question4







//{chapter4}
var a=prompt("Enter Name")
var b=prompt("Enter Your work")
var c=prompt("Enter Wish")
document.write("My name is "+" "+a+" "+"i  am a"+" "+b+" "+"i want to become a"+" "+c)//Question 1

  



















































//{chapter5}

var a=parseInt(prompt("Enter first number "))
var b=parseInt(prompt("Enter second number "))
var c=a+b;
document.write("Sum of"+" "+a+" "+"and"+" "+ b+" "+"is"+" "+c                                                    )//Question1

















var a=parseInt(prompt("Enter first number "))
var b=parseInt(prompt("Enter second number "))
var c=a-b;
document.write("Subtract of"+" "+a+" "+"and"+" "+ b+" "+"is"+" "+c)




var a=parseInt(prompt("Enter first number "))
var b=parseInt(prompt("Enter second number "))
var c=a/b;
document.write("Division of"+" "+a+" "+"and"+" "+ b+" "+"is"+" "+c)


var a=parseInt(prompt("Enter first number "))
var b=parseInt(prompt("Enter second number "))
var c=a%b;
document.write("Modulus of"+" "+a+" "+"and"+" "+ b+" "+"is"+" "+c)



var a=parseInt(prompt("Enter first number "))
var b=parseInt(prompt("Enter second number "))
var c=a*b;
document.write("Multiplication of"+" "+a+" "+"and"+" "+ b+" "+"is"+" "+c)                          //Question2





















var a;
document.write("Value after variable declaration is Undefined"+"<br>")
a=5;
document.write("Initial value is" +" "+a+"<br>")

a=6;
b=a++;
document.write("Value after increament is" +" "+b +"<br>")
a=6;
b=a++;
c=a+b;
document.write("Value after addition is" +" "+c+"<br>")
c=13;
d=c-1;
document.write("Value after decreament is" +" "+d+"<br>")

d=12;
e=d%2;
document.write("Reminder  is" +" "+e+"<br>")                                      //Question3








var x=600;
var y=5;
var r=x*y;
document.write("Total Cost To Buy" +" "+y+" "+"tickets to a movie is "+" "+r+"PKR")                      //Question 4










var a=parseInt(prompt("Enter Number "))
for (var i=1; i<=10; i++){

    document.write(a+"x"+i+"="+a*i+"<br>")                                          //Question5
}









var c  = 25;
var f = (c * 9)/5 + 32;
document.write(c + '\u00B0 Celsious is ' + f + '\u00B0 Fahrenheit'+"<br>");

var f  = 70;
var c = (f- 32)/9 * 5;
document.write(f + '\u00B0 Fahrenheit is ' + c + '\u00B0 Celsious.');                     //Question6












var g=parseInt(prompt("Price of item 1 "))
document.write("Price of item 1 is "+" "+g+"<br>")


var h=parseInt(prompt("Price of item 2" ))
document.write("Price of item 2 is "+" "+h+"<br>")


var o=parseInt(prompt("Order Quantity of item 1"))
document.write("Order Quantity of item 1 is "+" "+o+"<br>")


var j=parseInt(prompt("order Quantity of item 2 "))
document.write("Oredr Quantity of item 2 is "+" "+j+"<br>")


var k=parseInt(prompt("Shipping Charges  "))
document.write("Shipping Charges is  "+" "+k+"<br>"+"<br>")


var l=g*o;
var m=h*j;
var total=l+m+k;
document.write("Total cost of your order is "+" "+total+"<br>")             //Question7











var total=parseInt(prompt("Enter Total Marks"))
document.write("Total Marks is "+" "+total+"<br>"+"<br>")
var obt=parseInt(prompt("Enter obtanined marks"))
document.write("Obtained Marks is "+""+obt+"<br>"+"<br>")

var per=(obt/total)*100;
document.write("Percentage is"+" "+per+"%")                                       //Question8
















var u=104.80;
var s=28;
var t=(u*10)+(28*25);
document.write("Total  Currency in PKR:"+" "+t)                                     //Question9

















var un = 30;
var um=((un+5)+(un*10))/2;
document.write(" Total Number is"+" "+um);                                            //Question10
















var cy=parseInt(prompt("Enter Current Year"));
document.write("Current year is"+"  " +cy+"<br>"+"<br>")
var by=parseInt(prompt("Enter Birth Year"));
document.write("Birth year is"+"  " +by+"<br>"+"<br>")
var yg=cy-by;
document.write("Your Age is "+" "+yg)                                            //Question11
 
















var rad=parseInt(prompt("Enter Circle Radius"))
document.write("Radius of Circle is :"+" "+rad+"<br>")
var cf=(2*3.142)*rad;
document.write("Cercumference  of  Circle is :"+" "+cf+"<br>")

var ar=(rad*rad)*3.142;
document.write("Area of Circle is :"+" "+ar)                                         //Question12











var fs=("Enter Favroute Snack");
document.write("Favourite Snack is"+" "+fs+"<br>")



var ca=parseInt(prompt("Enter current age"))
document.write("current Age is"+" "+ca +"<br>")




var ma=parseInt(prompt(" Enter Maximum Age "))
document.write("Estimated Maximum"+" "+ma +"<br>")




var as=parseInt(prompt("Enter Amount of Snack "))
document.write("Amount of snack per day"+" "+as+"<br>")



document.write("You will need 150 "+" "+fs+" "+"to last you until the ripe old age of"+" "+ma+"<br>")                    //Question13








































//{cahpter6-9}
var a=10;
document.write("The Value of a is ="+" "+a+"<br>"+"<br>"+"<br>")




var a=++a;
document.write("The Value of ++a is ="+" "+a+"<br>")
document.write("Now the Value of a is ="+" "+a+"<br>"+"<br>"+"<br>")




var b= a;
c=b++;

document.write("The Value of a++ is ="+" "+c+"<br>")
document.write(" Now The Value of a++ is ="+" "+b +"<br>"+"<br>"+"<br>")



var d=c;
document.write("The Value of --a is ="+" "+d+"<br>")
document.write("Now The Value of --a is ="+" "+d+"<br>"+"<br>"+"<br>")


var f=d;
g=f--;
document.write("The Value of a-- is ="+" "+g+"<br>")
document.write("Now The Value of a-- is ="+" "+f+"<br>"+"<br>"+"<br>")                   //Question1
















var a=2;
document.write("a is = "+" "+a+"<br>")

var b=1;
document.write("b is  ="+" "+b+"<br>")
var result =  --a - --b + ++b + b--;
        //    1 -   0 +   1  + 1  = 3
        
document.write("Result is ="+" "+result);                                                           //Question2









    var s= prompt("Enter Your Name");
    document.write("Welcome "+" "+s)                                                         //Question3














var t;
if( t=parseInt(prompt("Enter Number "))){
    for (var i=1; i<=10; i++){

        document.write(t+"x"+i+"="+t*i+"<br>")                                          
    }
}
else{
    for (var i=1; i<=10; i++){

        document.write(5+"x"+i+"="+5*i+"<br>")                                          
    }
}                                             //Question 4






var sub1 =  prompt("Enter first Subject name ")
var sub2 =  prompt("Enter second Subject name ")
var sub3 =  prompt("Enter tirst Subject name ")

var totalMarksForEach = 100 ;


var obtain1 =parseInt( prompt("Enter Obtained marks of "+sub1))
var obtain2 = parseInt(prompt("Enter Obtained marks of "+sub2))
var obtain3 = parseInt(prompt("Enter Obtained marks of "+sub3))

var percen1 = (obtain1/totalMarksForEach)*100 ;
var percen2 = (obtain2/totalMarksForEach)*100;
var percen3 = (obtain3/totalMarksForEach)*100;

var sumOfAllSubject = 300;
var sum = obtain1 + obtain2 + obtain3 ;
var avgPercen = (percen1 + percen2 + percen3)/3;



 document.write("<table> <tbody><tr><th> Subject</th><th>Total Marks </th><th>Obtained Marks</th> <th> Percentag</th></tr><tr><td>"+ sub1 +"</td><td>"+totalMarksForEach+"</td><td>"+ obtain1+"</td><td>"+percen1+"%</td></tr>"+"<br>"
 +"<tr><td>"+ sub2+"</td><td>"+totalMarksForEach+"</td><td>"+ obtain2+"</td><td>"+ percen2+"%</td></tr>"+ " <br>"
 +"<tr><td>"+ sub3+"</td><td>"+totalMarksForEach+"</td><td>"+ obtain3+"</td><td>"+ percen3+"%</td></tr>"+ " <br>"
 +"<tr><th> </th> <th> "+ sumOfAllSubject+"</th><th>"+ sum+"</th><th>"+ avgPercen+"</th></tr>"
 +"</tbody></table>")





















































































 //{chapter9-11}
 var city=prompt("Enter City Name");
a="karachi";
if(city===a){
    document.write("Welcome to the city of light")
}
else{
    document.write("Welcome")
}                                                             //Question 1












var gender=prompt("Enter Your Gender")

if(gender==="Male"){
    document.write("Good Morning Sir!!")
}
else
{
    document.write("Good Morning Ma'am!!")
}                                                                           //Question2











var color=prompt("Take Color of Road From Red,Yellow,Green")
if(color==="Red"){
    alert("Must Stop")
}
else if(color==="Yellow"){
    alert("Ready to Move")
}
else{
    alert("Move Now")
}                                                                               //Question3








var car= prompt("Enter Your fuel of car in liter");
if(car<0.25){
alert("Please Refill the fuel in your car")

}
else{

    alert(" Dont Worry")                                                          //Question4
}












var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
 if("car" < "cat"){
    alert("car is smaller than cat");
    }                                                                         //Question5



















document.write("<h2>MARK SHEET</h2>"+"<br>"+"<br>"+"<br>")
document.write("Total Marks :"+" "+300+"<br>"+"<br>")

var s1=parseInt(prompt("Enter Your Marks"));
var s2=parseInt(prompt("Enter Your Marks"));
var s3=parseInt(prompt("Enter Your Marks"));

var st=s1+s2+s3;
document.write("Obtained Marks :"+" "+st+"<br>"+"<br>")

var per=(st/300)*100;
document.write("Percentage  :"+" "+per+"<br>"+"<br>")

if(per>=80){
    document.write("Grade  : A-one")
    document.write("Remarks : Excellent")

}
else if(per>=70){
    document.write("Grade  : A"+"<br>"+"<br>")
    document.write("Remarks : Good"+"<br>"+"<br>")

}else if(per>=60){
    document.write("Grade  : B"+"<br>"+"<br>")
    document.write("Remarks : You need to improve"+"<br>"+"<br>")

}
else{
    document.write("Grade  : Fail"+"<br>"+"<br>")
    document.write("Remarks : Sorry"+"<br>"+"<br>")
}                                                                                    //Question6








var guest=parseInt(prompt("Enter Your Guest Number"));
var m=7;
if(guest<m){
    alert("lower than guest")
}else if(guest++>m){
    alert("Close enough to the correct answer")
} 
else{
    alert("Bingo! Correct Answer")
}                                                                                         //Question7
 














var div=parseInt(prompt("Enter Number"));

if(div%3===0){
    document.write("Divisible by 3")
}
else{
document.write("Not divisible by 3")
}                                                                                        //Question8
















var ev=parseInt(prompt("Enter Number"));

if(ev%2===0){
    document.write("Even number")
}
else{
document.write("Odd Number")
}                                                                                        //Question9











var tem=parseInt(prompt("Enter Temperature"));

if(tem>40){
   
        alert("It is to hot outside")
    
    }
    else if(tem>30){
    
        alert("The Weather Today is normal")
    
    } else if(tem>20){
    
        alert("Today's weather is Cool")
    
    }
    else{
       
        alert("OMG todays Weather is so cool!")
    }                                                                                    //Question10
    






var a=parseInt(prompt("Enter first number"));
var b=parseInt(prompt("Enter second number"));
var c=parseInt(prompt("Enter Operator"));
if(c==="+"){
    alert(a+b);

}else  if(c==="-"){
    alert(a-b);

} else if(c==="*"){
    alert(a*b);

} else if(c==="%"){
    alert(a%b);

}
else{
    alert(a/b);
}                                                                          //Question11











































































//{chapter12-13}


var ch=prompt("Enter any alphabet");
if(ch>="a" && ch<= "z"){
    alert("Small Letter");
}
else if (ch>="A" && ch<="Z")
{
    alert("Capital Letter")
}
else{
    alert("it is not alphabets")
}                                                         //Question1





var a=parseInt(prompt("Enter value 1"));
var b=parseInt(prompt("Enter value 2"));
if(a>b){
    alert("A is greater than B")
}
else if(b>a){
    alert("B is greater than A")
}
else{
    alert("Both are equal")
}                                                             //Question2



var c=parseInt(prompt("Enter number"));

if(c=== -neg){
    alert("Negative")
}
else
 if(c===pos){
    alert("Positive")
}
else
{
    alert("Negative")
}







var d= prompt("Enter any character")

if(d==="a"){
    alert(true)
}
else if(d==="i"){
    alert(true)
} else 
if(d==="o"){
    alert(true)
}
else if(d==="u"){
    alert(true)
} else if(d==="v"){
    alert(true);
}
else{
    alert(false)
}                                                                 //Question4












var pas="Jawwad";
var r=prompt(" Please Enter Password")
var k =prompt(" Please Re-Enter your password")
if(r===pas && k===pas){
alert("Correct! The password you entered matches the original password")
}
else{
    alert("Incorrect passowrd!")
}                                                                   //Question5







var greeting="Good day";
var hour = parseInt(prompt("Times in hours in office"));
if (hour < 12) {

document.write(greeting)
}
else{

document.write("Good evening");
}                                                                    //Question6













var t=parseInt(prompt("What times is in 24hours formats?"))
if(t===1){
    alert("1 am")
}else if(t===2){
    alert("2 am")
}
else if(t===3){
    alert("3 am")
}else if(t===4){
    alert("4 am")
}
else
if(t===5){
    alert("5 am")
}else if(t===6){
    alert("6 am")
}
else
if(t===7){
    alert("7 am")
}else if(t===8){
    alert("8 am")
}
else if(t===9){
    alert("9 am")
}else if(t===10){
    alert("10 am")
}
else
if(t===11){
    alert("11 am")
}else if(t===12){
    alert("12 am")
}
else
if(t===13){
    alert("1 pm")
}else if(t===14){
    alert("2 pm")
}
else if(t===15){
    alert("3 pm")
}else if(t===16){
    alert("4 pm")
}
else
if(t===17){
    alert("5 pm")
}else if(t===18){
    alert("6 pm")
}
else
if(t===19){
    alert("7 pm")
}else if(t===20){
    alert("8 pm")
}
else if(t===21){
    alert("9 pm")
}else if(t===22){
    alert("10 pm")
}
else
if(t===23){
    alert("11 pm")
}
else 
{
    alert("12 pm")
}                                                                       //Question7
























































//{chapter14-16}
var arr1=[]                       //Question1 Declare Literall Array



var arr2=("");                      //Question2 Declare Object Array



var a=["jawwad","akhter","rehman"]          //Question3 Declare String Array





var a=["14","13","12"]                      //Question4 Declare Number Array








var a=[true,false];                                //Question5 Declare Boolean Array







var a=[false,true,"98","Jawwad"]                         //Question6 Declare mix Array





document.write("<h2>Qualifications: </h2>")
var arr3=["SSC","Hsc","Bscs","Bsc","B.com","MS","M.Phil","P.H.D"];
document.write("01)"+arr3[0]+"<br>")
document.write("02)"+arr3[1]+"<br>")
document.write("03"+arr3[2]+"<br>")
document.write("04)"+arr3[3]+"<br>")
document.write("05)"+arr3[4]+"<br>")
document.write("06)"+arr3[5]+"<br>")
document.write("07)"+arr3[6]+"<br>")
document.write("08)"+arr3[7]+"<br>")                          //Question 7




var std=["Mickel","John","Tony"]
var sc =["320","230","480"]
var per1=(sc[0]/500)*100;
var per2=(sc[1]/500)*100;
var per3=(sc[2]/500)*100;
document.write("Score of "+std[0]+"is"+sc[0]+"."+"Percentage:"+per1+"<br>")
document.write("Score of "+std[1]+"is"+sc[1]+"."+"Percentage:"+per2+"<br>")
document.write("Score of "+std[2]+"is"+sc[2]+"."+"Percentage:"+per3+"<br>")                      //Question 8








var first=["Red","Green","Yellow","Blue","Purpule"]

var ask=prompt("Enter color which you want to add in this list")
first.unshift(ask)                                                 //if we enter any value from start
first.push(ask)                                                    //if we insert any value from end
document.write(first)                                                  //if we add two more array

first.push("orange","pink")  
first.pop()                                                              //if we remove any array from the last
first.shift()                                                               //if we remove any array from the start

var user=prompt(" you want to add the color")
var user1=parseInt(prompt("which position you want to add the color"))
first.splice(user1,0,user)                                                   //if user add any array in any position


var user=parseInt(prompt(" what color you want to remove please enter index number"))
var user1=parseInt(prompt("how many colors you want to remove "))
first.splice(user,user1)                                                   //if user remove any array in any position



document.write(first)                  //Question9










var ascend =[320,230,480,120]
document.write("Scores of students :"+ascend+"<br>")

ascend.sort((a, b) => a - b)
document.write("Orderes Scores of students :"+ascend)                          //Question10








var cities=["karachi","Lahore","islamabad","Quetta","Peshawar"]
document.write(cities+"<br>")

var cities2=cities.slice(2,4)
document.write(cities2)                                                   //Question11





var arrs = ["This","is", "my","cat"];
var hand=" ";
for(var i=0; i<arrs.length; i++){
  hand +=arrs[i];
}


document.write("<h2>Array:</h2>")
document.write(arrs)
document.write("<h2>String:</h2>")                                   //Question12
document.write(hand)





document.write("<h2>Device</h2>")
var dev=["Keyboard","Mouse","Printer","Moniter"]
document.write(dev+"<br>"+"<br>")

document.write("<h2>Output</h2>")
var ice=["Keyboard","Mouse","Printer","Moniter"]
ice.splice(1,4)
document.write(ice+"<br>"+"<br>")

document.write("<h2>Output</h2>")
var ice=["Mouse","Printer","Moniter"]
ice.splice(1,3)
document.write(ice+"<br>"+"<br>")

document.write("<h2>Output</h2>")
var ice=["Printer","Moniter"]
ice.splice(1,2)
document.write(ice+"<br>"+"<br>")

document.write("<h2>Output</h2>")
var ice=["Moniter"]
ice.splice(1,1)
document.write(ice+"<br>"+"<br>")                                            //Question13
                                                                       



















document.write("<h2>Device</h2>")
var dev=["Keyboard","Mouse","Printer","Moniter"]
document.write(dev+"<br>"+"<br>")

document.write("<h2>Output</h2>")
var ice=["Keyboard","Mouse","Printer","Moniter"]
ice.splice(0,3)
document.write(ice+"<br>"+"<br>")

document.write("<h2>Output</h2>")
var ice=["Keyboard","Mouse","Printer"]
ice.splice(0,2)
document.write(ice+"<br>"+"<br>")

document.write("<h2>Output</h2>")
var ice=["Keyboard","Mouse"]
ice.splice(0,1)
document.write(ice+"<br>"+"<br>")

document.write("<h2>Output</h2>")
var ice=["Keyboard"]
ice.splice(0,0)
document.write(ice+"<br>"+"<br>")                                            //Question14





var mobile=["Apple", "Samsung", "Motorola", "Nokia","Sony","Haier"]
document.write("<select><option>"+mobile[0] 
+"</option><br><option>"+mobile[1] 
+"</option><br><option>"+mobile[2]
 +"</option><br><option>"+mobile[3]
  +"</option><br><option>"+mobile[4] 
+"</option><br><option>"+mobile[5] 
+"</option></select>")                                                                       //Question15


  























































//{chapter17-20}
var arr1 = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];                                     //Question1





var arr1 = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1],
    
];


document.write(arr1[0]+"<br>"+arr1[1]+"<br>"+arr1[2]+"<br>")                    //Question2






var i;
for(i=0; i<=10; i++){
    document.write(i+"<br>")
}                                                                           //Question3




var t=parseInt(prompt("Enter a number to show its multiplication"))
document.write("Multiplication Table of "+t+"<br>")
var u=parseInt(prompt("Enter table length"))
document.write("length "+u+"<br>")
for(var i=1; i<=u; i++)
{
    document.write(t+"x"+i+"="+t*i+"<br>")                                           //Question4
}






var fruits = ["apple", "banana", "mango", "orange",
    "strawberry"];


    for(var i=0; i<fruits.length; i++){
        document.write(fruits[i]+"<br>")
        

        
    }
    for( var j=0; j<fruits.length; j++){
        document.write("Element at index "+j+"  is  "+fruits[j]+"<br>")
    }                                                                              //Question5










document.write("<h2>Counting</h2>")
for(var i=0; i<=15; i++){
    document.write(i+" ")
}
   

document.write("<h2>Reverse Counting</h2>")
for (var j = 15; j > 0; j--){
    document.write(j+" ");
  }
   
document.write("<h2>Even</h2>")
for(var i=0; i<=15; i=i+2){
    document.write(i+" ")
}
document.write("<h2>ODD</h2>")
for(var i=0; i<=15; i=i+3){
    document.write(i+" ")
}
document.write("<h2>Series</h2>")
for(var i=2; i<=20; i=i+2){
    document.write(i+"k"+" ")
}                                                                    //Question6




var arr2=["cake","applepie","cookies","chips","patties"]
var user=prompt("Welcome to all in one bakery: what do you want to order sir/ma'am")


if(user==="cake"){
    alert(user+" is available at index"+ 0+" in our bakery")
    
}
else if(user==="applepie"){
    alert(user+" is available at index"+1 +" in our bakery")
    
}
else if(user==="cookies"){
    alert(user+" is available at index"+2 +" in our bakery")
    
}
else if(user==="chips"){
    alert(user+" is available at index"+3 +" in our bakery")
    
}else if(user==="patties"){
    alert(user+" is available at index"+4 +" in our bakery")
    
}

else{
    alert("we are sorry  "+user+"  is not available in our bakery")
}                                                                           //Question7


var items=["biryani","burger","tikka","cake"];
var search=prompt("Enter search value");
if(items.indexOf(search) !==-1){
    alert("Yes " + search +"is Availbe")
}
else{
    alert("NO " + search +"is Not availbe")
}


var numbers = [24, 53, 78, 91, 12];
 
var maxValue = Math.max.apply(null, numbers);
document.write("Array items" + numbers +"<br><br>" )
document.write( "The largest number is"+ maxValue +"<br> <br>");                   //Question8



var minValue = Math.min.apply(null, numbers);
document.write("The minimum number is" + minValue);                               //Question9
  






var i;
for(i=5; i<=100; i=i+5){
    document.write(i+",")
}                                             //Question10



   

