window.addEventListener('load', function () {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
        if (this.files && this.files[0]) {
            var img = document.querySelector('#myImg');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }

            img.src = URL.createObjectURL(this.files[0]); // set src to blob url

            document.querySelector('#myImg').style.display = "block";
        }
    });
});

//skapar en klass meal
class Meal {
    constructor(postname, img, diet, food, recipe) {
        /*this.image = image;*/
        this.postname = postname;
        this.img = img;
        this.diet = diet;
        this.food = food;
        this.recipe = recipe;

    }


    /*en toString metod som returnerar info om objektet

    toString() {
        if (this.image)
            return this.image + this.diet + this.food;
        else
            return "Please upload an image";
    }*/

    toString() {

        return this.postname + " " + this.img + " " + this.diet + " " + this.food + " " + this.recipe;


    }


}

//skapa en array meal för att lägga alla måltidsobjekt i den

let meal = [];
let postname = document.getElementById('postnameInput').value;
let img = document.getElementById('imageInput').value;
let diet = document.getElementById("dietInput").value;
let food = document.getElementById("foodInput").value;
let recipe = document.getElementById("recipeInput").value;

//for loop to create objects
for (let i = 0; i < 1; i++) {
    meal.push(new Meal(postname[i], img[i], diet[i], food[i], recipe[i]));
}



//göra en lista av info om maten
function addImageToTheFeed() {
    /*let newImage = document.getElementById("image").img.src;*/
    let postname = document.getElementById('postnameInput').value;
    let img = document.getElementById('imageInput').value;
    let diet = document.getElementById("dietInput").value;
    let food = document.getElementById("foodInput").value;
    let recipe = document.getElementById("recipeInput").value;





    /*varna användaren att vi behöver bilden, dieten, och typen av mat
    if (!newImage || !newDiet || !newFood) {
        output.innerHTML = "Please upload an image, and choose a diet as well as a type of food.";
        return;
    }*/


    //pusha infon i ett objekt literal för varje måltid
    meal.push(new Meal(postname, img, diet, food, recipe));


    document.getElementById('foodInput').value = '';
    document.getElementById('dietInput').value = '';
    document.getElementById('imageInput').value = '';
    document.getElementById('recipeInput').value = '';


    //anropa funktionen writeAllMeals()
    writeAllMeals();


}

//skriva ut infon om måltiden

function writeAllMeals() {
    let postname = document.getElementById('postnameInput').value;

    let img = document.getElementById('imageInput').value;
    let diet = document.getElementById("dietInput").value;
    let food = document.getElementById("foodInput").value;
    let recipe = document.getElementById("recipeInput").value;




    document.getElementById("output").innerHTML = "";




    for (let i = 0; i < meal.length; i++) {
        document.getElementById("output").innerHTML += meal[i].toString() + "<br>";
    }

}





