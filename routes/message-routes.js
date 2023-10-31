const express = require("express");
const messageController = require("../controllers/message-controller");

const router = express.Router();


router.get("/message/:mid", messageController.getMessageById);
router.get("/chair/:cid", messageController.getMessagesByChair);
router.get("/player/:pid", messageController.getMessagesByPlayer);
router.get("/cancellations", messageController.getAllGigCancellations);
router.get("/offers", messageController.getAllOffersMade);

router.get('/', messageController.getAllMessages);

router.post('/', messageController.makeGigOffer)
router.post('/', messageController.acceptGig)
router.post('/', messageController.declineGig)
router.post('/', messageController.cancelGig)


module.exports = router;