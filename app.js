

/* ------- post page ------- */

//upload image function
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

//create a class Meal for adding a meal post 
class Meal {
    constructor(postname, img, diet, food, recipe) {
        this.postname = postname;
        this.img = img;
        this.diet = diet;
        this.food = food;
        this.recipe = recipe;

    }





}

//create the array meal to store all the meal objects in it 

let meal = [];





//make a list of the information about the food
function addImageToTheFeed() {
    let postname = document.getElementById('postnameInput').value;
    let img = document.getElementById('imageInput').value;
    let diet = document.getElementById("dietInput").value;
    let food = document.getElementById("foodInput").value;
    let recipe = document.getElementById("recipeInput").value;
    //push the info in an object literal for each meal
    meal.push(new Meal(postname, img, diet, food, recipe));

    document.getElementById('postnameInput').value = '';
    document.getElementById('imageInput').value = '';
    document.getElementById('dietInput').value = '';
    document.getElementById('foodInput').value = '';
    document.getElementById('recipeInput').value = '';


}

/*skriva ut infon om måltiden

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
*/

/* ------ navbar toggle dropdown ------- */
const toggleDropdown = document.querySelector(".sub-links.container");
console.log(toggleDropdown);
const menu = document.querySelector(".drop-down.icon");

menu.addEventListener("click", () => {
    toggleDropdown.classList.toggle("show");
});


/* ------ profile page: function to change stylesheet and css styling with button ------- */
function toggleTheme() {
    // obtain an array of all <link> elements.
    var theme = document.getElementsByTagName("link")[0];
    var img = document.getElementById("profile");

    // changes value of link href to change stylesheet
    if (theme.getAttribute("href") == "synkcss.css") {
        theme.setAttribute("href", "stylechange.css");
        img.src = "img/profile2.png";
    } else {
        theme.setAttribute("href", "synkcss.css");
        img.src = "img/profile.png";
    }
}



/* ------ profile page: class for profile objects ------ */
class Profile {
    constructor(name, diet, age, food, img) {
        this.name = name;
        this.diet = diet;
        this.age = age;
        this.food = food;
        this.img = img;
    }
}

/* arrays for object properties */
let names = ["Swedish Chef"];
let diets = ["Omnivore"];
let ages = ["61"];
let foods = ["Meatballs"];
let imgs = ["img/profile pic.jpg"];

/* array for objects */
let profiles = [];

/* for loop to create objects */
for (let i = 0; i < 1; i++) {
    profiles.push(new Profile(names[i], diets[i], ages[i], foods[i], imgs[i]));
}

/* displays object properties in img and p tags */
window.addEventListener("load", (event) => {
    /* displays object properties in p tag */
    nameDisplay = document.getElementById("nameDisplay");
    nameDisplay.innerHTML = names.toString();

    /* displays object properties in p tag  */
    dietDisplay = document.getElementById("dietDisplay");
    dietDisplay.innerHTML = diets.toString();

    /* displays object properties in p tag  */
    ageDisplay = document.getElementById("ageDisplay");
    ageDisplay.innerHTML = ages.toString();

    /* displays object properties in p tag  */
    foodDisplay = document.getElementById("foodDisplay");
    foodDisplay.innerHTML = foods.toString();

    /* displays object properties in img tag with variable */
    var profilePics = document.getElementById("profilePics");
    profilePics.src = imgs.toString();
});

/* function to create new Profile object from input fiels */
function newProfile() {
    var name = document.getElementById('nameInput').value;
    var age = document.getElementById('ageInput').value;
    var food = document.getElementById('foodInput').value;
    var diet = document.getElementById('browser').value;
    var img = document.getElementById('imageInput').value;

    profiles.push(new Profile(name, age, food, diet, img));

    document.getElementById('nameInput').value = '';
    document.getElementById('ageInput').value = '';
    document.getElementById('foodInput').value = '';
    document.getElementById('browser').value = '';
    document.getElementById('imageInput').value = '';

};

/* ------ profile page: function to change stylesheet and css styling with button ------- */
function toggleTheme() {
    // obtain an array of all <link> elements.
    var theme = document.getElementsByTagName("link")[0];
    var img = document.getElementById("profile");

    // changes value of link href to change stylesheet
    if (theme.getAttribute("href") == "synkcss.css") {
        theme.setAttribute("href", "stylechange.css");
        img.src = "img/profile2.png";
    } else {
        theme.setAttribute("href", "synkcss.css");
        img.src = "img/profile.png";
    }
}

/* Removes object from array on profile */

function remove() {
    profiles.pop();
    console.log("Profile Deleted")
    nameDisplay.innerHTML = "";
    dietDisplay.innerHTML = "";
    ageDisplay.innerHTML = "";
    foodDisplay.innerHTML = "";
    profilePics.src = "";
}

/* -------- feed ------- */
// like button function

function like(bnum) {
    if (bnum == 1) {
        var like = document.getElementById("niceLike").innerHTML
        like++
        document.getElementById("niceLike").innerHTML = like
        document.getElementById("niceButton").disabled = true;
    } else if (bnum == 2) {
        var like2 = document.getElementById("tastyLike").innerHTML
        like2++
        document.getElementById("tastyLike").innerHTML = like2
        document.getElementById("tastyButton").disabled = true;
    } else if (bnum == 3) {
        var like3 = document.getElementById("wowLike").innerHTML
        like3++
        document.getElementById("wowLike").innerHTML = like3
        document.getElementById("wowButton").disabled = true;
    }
}
