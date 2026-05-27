const express = require("express");
const { pcGamesValidationRules } = require("../middleware/pcGames-validator");
const {
  consoleGamesValidationRules,
} = require("../middleware/consoleGames-validator");

const router = express.Router();

const AdminController = require("../controller/admin-controller");

router.post("/singleGame", AdminController.postSingleGame);

router.post(
  "/addPcGames/:userId",
  pcGamesValidationRules,
  AdminController.postPcGames
);

router.post(
  "/addConsoleGames/:userId",
  consoleGamesValidationRules,
  AdminController.postConsoleGames
);

module.exports = router;
