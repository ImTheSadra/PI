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

let now = new Date(Date.now());

if (now.getMonth()+1 == 3 && now.getDate() == 14){
    document.getElementById("date").innerHTML = "happy PI day 🎉";
    document.getElementById("description").content = "happy PI day 🎉";
} else {
    let days = (now.getMonth()+1)*30+now.getDate();
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