const express = require("express");

const router = express.Router();

const gameController = require("../controller/game-controller");

router.get("/singleGame", gameController.getSingleGame);

router.get("/allGames", gameController.getAllGame);

router.get("/PcGames/:platform", gameController.getPcGames);

router.get("/ps3Games/:platform", gameController.getPs3Games);

router.get("/ps4Games/:platform", gameController.getPs4Games);

router.get("/ps5Games/:platform", gameController.getPs5Games);

router.get("/searchedGames", gameController.getSearchedGames);

module.exports = router;
