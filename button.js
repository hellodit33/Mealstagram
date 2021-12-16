
// like button function

function like(bnum){
    if (bnum==1){
        var like = document.getElementById("niceLike").innerHTML
        like++
        document.getElementById("niceLike").innerHTML= like
        document.getElementById("niceButton").disabled = true;
    }else if(bnum==2){
        var like2 = document.getElementById("tastyLike").innerHTML
        like2++
        document.getElementById("tastyLike").innerHTML= like2
        document.getElementById("tastyButton").disabled = true;
    } else if(bnum==3){
        var like3 = document.getElementById("wowLike").innerHTML
        like3++
        document.getElementById("wowLike").innerHTML= like3
        document.getElementById("wowButton").disabled = true;
    }
}