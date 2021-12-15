
// like button function

function like(bnum){
    if (bnum==1){
        var like = document.getElementById("smileLike").innerHTML
        like++
        document.getElementById("smileLike").innerHTML=like
        document.getElementById("smileButton").disabled = true;
    }else if(bnum==2){
        var like2 = document.getElementById("sadLike").innerHTML
        like2++
        document.getElementById("sadLike").innerHTML=like2
        document.getElementById("sadButton").disabled = true;
    } else if(bnum==3){
        var like3 = document.getElementById("mehLike").innerHTML
        like3++
        document.getElementById("mehLike").innerHTML=like3
        document.getElementById("mehButton").disabled = true;
    }
}