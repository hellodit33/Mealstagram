

/* class for profile objects */
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
let names = ['Swedish Chef'];
let diets = ['Omnivore'];
let ages = ['61'];
let foods = ['Meatballs'];
let imgs = ['img/profile pic.jpg']

/* array for objects */
let profiles = [];

/* for loop to create objects */
for (let i = 0; i <1; i++) {
    profiles.push(new Profile(names[i], diets[i], ages[i], foods[i], imgs[i]));
}

/* displays object properties in img and p tags */
window.addEventListener('load', (event) => {

        /* displays object properties in p tag */
        nameDisplay = document.getElementById('nameDisplay');
        nameDisplay.innerHTML = names.toString();

        /* displays object properties in p tag  */
        dietDisplay = document.getElementById('dietDisplay');
        dietDisplay.innerHTML = diets.toString();

        /* displays object properties in p tag  */
        ageDisplay = document.getElementById('ageDisplay');
        ageDisplay.innerHTML = ages.toString();

        /* displays object properties in p tag  */
        foodDisplay = document.getElementById('foodDisplay');
        foodDisplay.innerHTML = foods.toString();

        /* displays object properties in img tag with variable */
        var profilePics = document.getElementById('profilePics');
        profilePics.src = imgs.toString();
       
    });

// var btn = document.getElementById('btn');
// btn.addEventListener('click', function newProfile() {

//     let name = document.getElementById('nameInput').value;
//     let age = document.getElementById('ageInput').value;
//     let food = document.getElementById('foodInput').value;
//     let diet = document.getElementById('browser').value;

//     profiles.push(new Profile (name, age, food, diet));
// });
    
    
    
    
    