var axios = require("axios");

async function fetchData() {
    try {
     var response = await axios.get("http://fakestoreapi.com/products");
        console.log(response.data); 
    } catch (error) {
        console.log("Error fetching data:", error.message);
    }
}

fetchData(); 

