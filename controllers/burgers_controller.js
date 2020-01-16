const express = require("express");

const router = express.Router();

// import model
const burger = require("../models/burgers");

// create routes
router.post("/api/burger", (req, res) => {
  burger.create(req.body.burger, res => {
    res.status(204).end();
  });
});

