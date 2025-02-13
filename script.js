async function fetchCatImage() {
    const API_URL = "https://api.thecatapi.com/v1/images/search";
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        document.getElementById("cat-img").src = data[0].url;
    } catch (error) {
        console.error("Error fetching cat image:", error);
    }
}

fetchCatImage();