const express = require("express");

const router = express.Router();

// import model
const burger = require("../models/burgers");

// create routes

// GET route
router.get("/", (req, res) => {
  burger.all((data) => {
    const burgerObj = {
      burger: data
    };
    console.log(burgerObj);
    console.log("this is the get route");
    res.render("index", burgerObj);
  });
});

// PUT
router.put("/api/burger/:id/devour", (req, res) => {
  const id = req.params.id
  burger.update(id, () => {

    // not 100% sure what goes here either
    res.send(id);
    res.status(200).end();
  });
});

// POST
router.post("/api/burger", (req, res) => {
  burger.create(req.body.burger, res => {
    res.status(204).end();
  });
});



module.exports = router;

