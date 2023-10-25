const express = require("express");
const gigController = require("../controllers/gig-controller");

const router = express.Router();

router.get('/', gigController.getAllGigs)

router.post('/', gigController.createGig)

router.get("/:gid", gigController.getGigById);

module.exports = router;