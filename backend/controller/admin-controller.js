const Games = require("../models/Games");
const consoleGames = require("../models/ConsoleGames");
const AdminUser = require("../models/AdminUser");

exports.postSingleGame = async (req, res, next) => {
  const {
    image,
    image1,
    image2,
    image3,
    title,
    description,
    downloadDescription,
    minimumSystemRequirement,
    recommendedSystemRequirement,
    platform,
  } = req.body;

  const game = new Games({
    image,
    image1,
    image2,
    image3,
    title,
    description,
    downloadDescription,
    minimumSystemRequirement,
    recommendedSystemRequirement,
    platform,
    creator: req.userId,
  });

  try {
    const adminUser = await AdminUser.findById(req.userId);

    if (!adminUser) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    const result = await game.save();

    adminUser.games.push(game);

    await adminUser.save();

    return res.status(200).json({
      message: "Game created successfully",
      game: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.postPcGames = async (req, res, next) => {
  const GamesArray = req.body;
  const userId = req.params.userId;

  const adminUser = await AdminUser.findById(userId);

  if (!adminUser) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  try {
    const savedGames = await Promise.all(
      GamesArray.map(async (gameData) => {
        const {
          image,
          image1,
          image2,
          image3,
          title,
          description,
          downloadDescription,
          minimumSystemRequirement,
          recommendedSystemRequirement,
          platform,
        } = gameData;

        const games = new Games({
          image,
          image1,
          image2,
          image3,
          title,
          description,
          downloadDescription,
          minimumSystemRequirement,
          recommendedSystemRequirement,
          platform,
          creator: userId,
        });
        const savedGame = await games.save();
        return savedGame;
      })
    );

    adminUser.games.push(...savedGames);

    await adminUser.save();

    return res.status(201).json({
      message: "PC Games created successfully",
      games: savedGames,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.postConsoleGames = async (req, res, next) => {
  const GamesArray = req.body;
  const userId = req.params.userId;

  const adminUser = await AdminUser.findById(userId);

  if (!adminUser) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  try {
    const savedGames = await Promise.all(
      GamesArray.map(async (gameData) => {
        const {
          image,
          image1,
          image2,
          image3,
          title,
          description,
          downloadDescription,
          platform,
        } = gameData;

        const games = new consoleGames({
          image,
          image1,
          image2,
          image3,
          title,
          description,
          downloadDescription,
          platform,
          creator: userId,
        });

        return await games.save();
      })
    );

    adminUser.games.push(...savedGames);

    await adminUser.save();

    return res.status(201).json({
      message: "Console Games created successfully",
      games: savedGames,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
