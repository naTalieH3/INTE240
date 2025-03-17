var today=new Date();
var hourNow=today.getHours();
var greeting;
var hour;
if(hourNow >18){
    greeting='Good evening';
    hour = hourNow - 12;
}
else if (hourNow > 12){
    greeting='Good afternoon';
    hour = hourNow - 12;
}
else if(hourNow > 0){
    greeting='Good morning';
    hour = hourNow;
}
else{
    greeting = 'Welcome';
}
document.write(greeting);
document.write("<br>");
document.write(hour);
document.write(":");
document.write(today.getMinutes());