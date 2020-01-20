const express = require("express");

const router = express.Router();

// import model
const burger = require("../models/burgers");

// create routes - CHECK
router.post("/api/burger", (req, res) => {
  burger.create(req.body.burger, res => {
    res.status(204).end();
  });
});

// GET
router.get("/burger", (req, res) => {
  burger.all((data) => {
    res.json(data);
  })
});

module.exports = router;

