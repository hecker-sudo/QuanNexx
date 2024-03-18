// proxy search handleing and validation JS

const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  try {
    const url = validateAndNormalizeUrl(input.value);
    const encodedUrl = encodeUrl(url);
    storeEncodedUrl(encodedUrl);
    redirectTo("./student.html");
  } catch (error) {
    console.error("Error processing URL:", error.message);
    displayErrorMessage(error.message);
  }
}

function validateAndNormalizeUrl(url) {
  // Trim leading/trailing whitespace (idk what this function does)
  url = url.trim();

  // Validate URL format and URL validation
  try {
    const urlObject = new URL(url);
    if (!["http:", "https:"].includes(urlObject.protocol)) {
      throw new Error("Your URL is invalid. Please enter a valid HTTP or HTTPS URL.");
    }
    return urlObject.href;
  } catch (error) {
    throw new Error("Invalid URL format. Please enter a valid URL.");
  }
}

function encodeUrl(url) {
  return encodeURIComponent(url);
}

function storeEncodedUrl(encodedUrl) {
  localStorage.setItem("encodedUrl", encodedUrl);
}

function redirectTo(path) {
  window.location.href = path;
}

function displayErrorMessage(message) {
  // Display error message to the client using alert functions
  alert(message);
}
