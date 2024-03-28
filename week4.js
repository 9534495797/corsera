// Define an array of names
var names = ["John", "Jane", "Jerry", "Jacob", "Maria"];

// Loop through the array and print messages to the console
for (var i = 0; i < names.length; i++) {
    // Get the current name
    var currentName = names[i];

    // Check if the name starts with 'J' or 'j'
    if (currentName.charAt(0) === 'J' || currentName.charAt(0) === 'j') {
        console.log("Goodbye " + currentName);
    } else {
        console.log("Hello " + currentName);
    }
}
