const express = require("express");

const router = express.Router();

// import model
const burger = require("../models/burgers");

// create routes

// GET
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

// POST
router.post("/api/burger", (req, res) => {
  burger.create(req.body.burger, res => {
    res.status(204).end();
  });
});



module.exports = router;

