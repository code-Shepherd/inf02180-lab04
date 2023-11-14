document.addEventListener("DOMContentLoaded", function () {
    // Listen for click event on the search button
    document.getElementById("searchButton").addEventListener("click", function () {
        // Get the search query from the input field
        var searchQuery = document.getElementById("searchInput").value;

        // Create a new XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Configure it: GET-request for the superheroes.php file with the search query as a parameter
        xhr.open('GET', 'superheroes.php?query=' + encodeURIComponent(searchQuery), true);

        // Send the request
        xhr.send();

        // This function will be called when the response is received
        xhr.onload = function () {
            // Parse the JSON response
            var superhero = JSON.parse(xhr.responseText);

            // Get the result div
            var resultDiv = document.getElementById("result");

            // Clear previous results
            resultDiv.innerHTML = "";

            // Check if a superhero was found
            if (superhero) {
                // Display the superhero information in the result div
                resultDiv.innerHTML = "<h3>" + superhero.alias + "</h3><h4>" + superhero.name + "</h4><p>" + superhero.biography + "</p>";
            } else {
                // Display a message if the superhero is not found
                resultDiv.innerHTML = "<p>Superhero not found</p>";
            }
        };
    });
});
