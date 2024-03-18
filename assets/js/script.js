function search() {
    var query = document.getElementById('searchInput').value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/" + encodeURIComponent("https://www.google.com/search?q=" + query), true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = xhr.responseText;
            displayResults(response);
        }
    };
    xhr.send();
}

function displayResults(results) {
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = results;
}
