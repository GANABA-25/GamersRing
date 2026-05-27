const { body } = require("express-validator");

const pcGamesValidationRules = [
  body("image")
    .trim()
    .isURL()
    .withMessage("image url is required")
    .custom((value) => {
      if (!/\.(jpg|jpeg|png|gif)$/i.test(value)) {
        throw new Error(
          "URL must point to an image file (jpg, jpeg, png, gif)"
        );
      }
      return true;
    }),
  body("image1")
    .trim()
    .isURL()
    .withMessage("image url is required")
    .custom((value) => {
      if (!/\.(jpg|jpeg|png|gif)$/i.test(value)) {
        throw new Error(
          "URL must point to an image file (jpg, jpeg, png, gif)"
        );
      }
      return true;
    }),
  body("image2")
    .trim()
    .isURL()
    .withMessage("image url is required")
    .custom((value) => {
      if (!/\.(jpg|jpeg|png|gif)$/i.test(value)) {
        throw new Error(
          "URL must point to an image file (jpg, jpeg, png, gif)"
        );
      }
      return true;
    }),
  body("image3")
    .trim()
    .isURL()
    .withMessage("image url is required")
    .custom((value) => {
      if (!/\.(jpg|jpeg|png|gif)$/i.test(value)) {
        throw new Error(
          "URL must point to an image file (jpg, jpeg, png, gif)"
        );
      }
      return true;
    }),
  body("title")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Game title is required"),

  body("description")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Game title is required"),

  body("downloadDescription")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Game title is required"),

  body("minimumSystemRequirement")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Game title is required"),

  body("recommendedSystemRequirement")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Game title is required"),
  body("platform")
    .trim()
    .isLength({ max: 2 })
    .withMessage("Game title is required"),
];

module.exports = { pcGamesValidationRules };
