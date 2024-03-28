// Step 0: Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Step 1: Define function to generate random category short name
    function getRandomCategoryShortName() {
        var categories = ['L', 'D', 'S', 'A', 'J']; // Example categories: Lunch, Dinner, Sushi, Appetizers, Juice
        var randomIndex = Math.floor(Math.random() * categories.length);
        return categories[randomIndex];
    }

    // Step 2: Update onclick event to use random category short name
    var specialsTile = document.getElementById('specials-tile');
    specialsTile.addEventListener('click', function () {
        var randomCategoryShortName = getRandomCategoryShortName();
        $dc.loadMenuItems(randomCategoryShortName);
    });

    // Step 3: Add functionality to restaurant logo to go back to home page
    var restaurantLogo = document.getElementById('restaurant-logo');
    restaurantLogo.addEventListener('click', function () {
        window.location.href = 'home-snippet.html';
    });

});
