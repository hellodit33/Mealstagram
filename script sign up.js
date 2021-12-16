
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

/* array for objects */
let profiles = [];

/* function to create new Profile object from input fiels */
    function newProfile () {
        var name = document.getElementById('nameInput').value;
        var age = document.getElementById('ageInput').value;
        var food = document.getElementById('foodInput').value;
        var diet = document.getElementById('browser').value;
        var img = document.getElementById('imageInput').value;
    
        profiles.push(new Profile (name, age, food, diet, img));
    
        document.getElementById('nameInput').value = '';
        document.getElementById('ageInput').value = '';
        document.getElementById('foodInput').value = '';
        document.getElementById('browser').value = ''
        document.getElementById('imageInput').value = ''

    };
    
    
    const toggleDropdown = document.querySelector(".sub-links.container");
    console.log(toggleDropdown);
    const menu = document.querySelector(".drop-down.icon");
    
    menu.addEventListener("click", () => {
      toggleDropdown.classList.toggle("show");
    });
