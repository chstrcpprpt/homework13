const express = require("express");

const router = express.Router();

// import model
const burger = require("../models/burgers");

// create routes

// GET (display burgers)
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

// PUT (devour burger)
router.put("/api/burger/:id/devour", (req, res) => {
  const id = req.params.id
  burger.update(id, () => {

    res.send(id);
    res.status(200).end();
  });
});

// POST (create new burger)
router.post("/api/burger/new", (req, res) => {
  const newBurger = req.body.burger;
  console.log(newBurger);

  burger.create(newBurger, res => {
    res.status(200).send(newBurger);
  });
});



module.exports = router;

