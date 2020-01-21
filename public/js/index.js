const newBurger = document.querySelector("#newBurger");


// send POST request
// **************************************************

// define the data to be posted (sent)
// Must be an object, replace newObject with your data
const data = {};

// define options for request
const options = {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json"
  }
};

fetch("/api/burger", options)
.then(() => {
  console.log(`added new burger: ${burgerName}`)
  location.reload();
});
// now in the server we will receive a request object
// access with req.body
// In order to read this the server needs to be able to understand json
// to do this use app.use(express.json());

// need to make requests







