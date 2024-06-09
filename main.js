let pi = "";

let req = new XMLHttpRequest();
req.open("get", "./pi.txt");
req.onload = (ev)=>{
    if (![404, 501, 500].includes(req.status)){
        pi = req.responseText;
        document.getElementById("piShow").textContent = pi;
        console.log(req.responseText);
    } else {
        document.write("error "+req.status.toString());
        return
    }
}
req.send();

function daysLeftUntilPiDay() {
    const currentDate = new Date();
    const piDay = new Date(currentDate.getFullYear(), 2, 14); // March 14th
  
    // If the current date is after PI Day, set PI Day to next year
    if (currentDate > piDay) {
      piDay.setFullYear(currentDate.getFullYear() + 1);
    }
  
    const differenceInMs = piDay.getTime() - currentDate.getTime();
    return Math.floor(differenceInMs / (1000 * 3600 * 24));
}

let now = new Date(Date.now());

let days = daysLeftUntilPiDay();
if (days == 0){
    document.getElementById("date").innerHTML = "happy PI day 🎉";
    document.getElementById("description").content = "happy PI day 🎉";
} else {
    document.getElementById("date").innerHTML = days.toString()+" days left until the PI day";
    document.getElementById("description").content = days.toString()+" days left until the PI day";
}

document.getElementById("search").addEventListener("click", (ev)=>{
    let textarea = document.getElementById("piShow");
    let text = textarea.textContent;
    let q = document.getElementById("q").value;

    let start = text.indexOf(q);
    let end = start+q.length;
    if (start == -1){
        let alert = "im so sorry, i cant find your date of birth in PI number (the first "+(text.length-1).toString()+" number of PI)";
        document.getElementById("alert").innerText = alert;
        return;
    }
    textarea.select();
    textarea.setSelectionRange(start, end);

    document.getElementById("alert").innerText = q.toString()+" is the "+start.toString()+"th number of pi (the first "+(text.length-1).toString()+" number of PI)"
})