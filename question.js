// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


function getDay(){

    let today = new Date();
    console.log(today);
    
    let todayDayNum = today.getDay();
    console.log(todayDayNum);
    
    let dayArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    for(let i = 0; i<7; i++){
        if(i == todayDayNum-1){
            return dayArr[i];
            break;
        }
    }

}


function getCurrentTime(){

    let today = new Date();
    console.log(today);

    let hour = today.getHours();

    if(hour)

    if(hour>12){
        hour = hour - 12;
    }

    console.log(hour);
    let minute = today.getMinutes();
    console.log(minute);
    let second = today.getSeconds();
    console.log(second);

    if(hour>=12){
        return `${hour} PM : ${minute} : ${second}`;
    }
    else{
        return `${hour} AM : ${minute} : ${second}`;
    }

}

console.log(getCurrentTime());


