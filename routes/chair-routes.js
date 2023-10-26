const express = require("express");
const chairController = require("../controllers/chair-controller");

const router = express.Router();

router.get('/by_gig_and_num', chairController.getChairsByGigPieceNum)
router.get('/', chairController.getAllChairs)

router.post('/', chairController.createChair)

router.get("/:iid", chairController.getChairById);

module.exports = router;