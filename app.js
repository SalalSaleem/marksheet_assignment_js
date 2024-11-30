var english = prompt('Enter English Subject Marks Here',0);
var urdu = prompt('Enter Urdu Subject Marks Here',0);
var islamiyat = prompt('Enter Islamiyat Subject Marks Here',0);
var math = prompt('Enter Math Subject Marks Here',0);
var physics = prompt('Enter Physics Subject Marks Here',0);

var obtainedMarks = (+english)+(+urdu)+(+islamiyat)+(+math)+(+physics);
var totalMarks = 500;
var fail = 'you are fail !'
var percentage = obtainedMarks / totalMarks * 100 
var alert2 = 'your percentage is ' + percentage +'%'

if(obtainedMarks>=450){
    alert('congratulations Your Grade is A+')
    fail= alert2
}
if(obtainedMarks<450 && obtainedMarks>=400){
    alert('congratulations Your Grade is A')
    fail= alert2
}
if(obtainedMarks<400 && obtainedMarks>=350){
    alert('congratulations Your Grade is B')
    fail= alert2
}
if(obtainedMarks<350 && obtainedMarks>=300){
    alert('congratulations Your Grade is C')
    fail= alert2
}
if(obtainedMarks<300 && obtainedMarks>=250){
    alert('Your Grade is D')
    fail= alert2
}
else{
    alert(fail)
}
