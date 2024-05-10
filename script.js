document.getElementById("specialsTile").addEventListener("click", function() {
    var category = getRandomCategoryShortName();
    window.location.href = category + ".html";
});

// Function to handle click event on the Menu tile
document.getElementById("menuTile").addEventListener("click", function() {
    window.location.href = "menu.html";
});

// Function to generate a random category short name
function getRandomCategoryShortName() {
    var categories = ["lunch", "dinner", "sushi"];
    var randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}
function showSelectedItem(itemName) {
    alert("You selected: " + itemName);
}