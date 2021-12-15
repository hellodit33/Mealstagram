
// like button function

function like(){
    var a = document.getElementById("smileLike").innerHTML
    a++
    document.getElementById("smileLike").innerHTML=a
    document.getElementById("smileButton").disabled = true;
}


function sadLike(){
    var a = document.getElementById("sadLike").innerHTML
    a++
    document.getElementById("sadLike").innerHTML=a
    document.getElementById("sadButton").disabled = true;
}


function mehLike(){
    var a = document.getElementById("mehLike").innerHTML
    a++
    document.getElementById("mehLike").innerHTML=a
    document.getElementById("mehButton").disabled = true;
}