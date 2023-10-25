const express = require("express");
const gigController = require("../controllers/gig-controller");

const router = express.Router();

router.get("/:gid", gigController.getGigById);
router.get('/', gigController.getAllGigs)

router.post('/', gigController.createGig)


module.exports = router;