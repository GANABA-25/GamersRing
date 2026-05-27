const Games = require("../models/Games");

exports.getSingleGame = async (req, res, next) => {
  const gameId = req.params.gameId;

  try {
    const game = await Games.findById(gameId);

    if (!game) {
      return res.status(404).json({
        message: "No game found",
      });
    }

    return res.status(200).json({
      message: "Game fetched successfully",
      game: game,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllGame = async (req, res, next) => {
  try {
    const games = await Games.find();

    if (games.length === 0) {
      return res.status(404).json({
        message: "No games found",
      });
    }

    return res.status(200).json({
      message: "Games fetched successfully",
      games: games,
    });
  } catch (error) {
    next(error);
  }
};

exports.getPcGames = async (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = 9;
  const platform = req.params.platform;

  try {
    if (!platform) {
      return res
        .status(400)
        .json({ message: "Platform parameter is required" });
    }
    const totalProducts = await Games.countDocuments({ platform: platform });

    const pcGames = await Games.find({ platform: platform })
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    if (pcGames.length === 0) {
      return res.status(404).json({
        message: "No games found",
      });
    }

    return res.status(200).json({
      message: "PC games fetched successfully",
      data: pcGames,
      totalProducts: totalProducts,
      totalPages: Math.ceil(totalProducts / perPage),
      currentPage: currentPage,
    });
  } catch (error) {
    next(error);
  }
};

exports.getPs3Games = async (req, res, next) => {
  const currentPage = parseInt(req.query.page) || 1;
  const perPage = 9;
  const platform = req.params.platform;

  try {
    if (!platform) {
      return res
        .status(400)
        .json({ message: "Platform parameter is required" });
    }
    const totalProducts = await Games.countDocuments({ platform: platform });

    const Ps3Games = await Games.find({ platform: platform })
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    if (Ps3Games.length === 0) {
      return res.status(404).json({
        message: "No games found",
      });
    }

    return res.status(200).json({
      message: "Ps3 Games fetched successfully",
      data: Ps3Games,
      totalProducts: totalProducts,
      totalPages: Math.ceil(totalProducts / perPage),
      currentPage: currentPage,
    });
  } catch (error) {
    next(error);
  }
};

exports.getPs4Games = async (req, res, next) => {
  const currentPage = parseInt(req.query.page) || 1;
  const perPage = 9;
  const platform = req.params.platform;

  try {
    if (!platform) {
      return res
        .status(400)
        .json({ message: "Platform parameter is required" });
    }
    const totalProducts = await Games.countDocuments({ platform: platform });

    const Ps4Games = await Games.find({ platform: platform })
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    if (Ps4Games.length === 0) {
      return res.status(404).json({
        message: "No games found",
      });
    }

    return res.status(200).json({
      message: "Ps4 Games fetched successfully",
      data: Ps4Games,
      totalProducts: totalProducts,
      totalPages: Math.ceil(totalProducts / perPage),
      currentPage: currentPage,
    });
  } catch (error) {
    next(error);
  }
};

exports.getPs5Games = async (req, res, next) => {
  const currentPage = parseInt(req.query.page) || 1;
  const perPage = 9;
  const platform = req.params.platform;

  try {
    if (!platform) {
      return res
        .status(400)
        .json({ message: "Platform parameter is required" });
    }
    const totalProducts = await Games.countDocuments({ platform: platform });

    const Ps5Games = await Games.find({ platform: platform })
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    if (Ps5Games.length === 0) {
      return res.status(404).json({
        message: "No games found",
      });
    }

    return res.status(200).json({
      message: "Ps5 Games fetched successfully",
      data: Ps5Games,
      totalProducts: totalProducts,
      totalPages: Math.ceil(totalProducts / perPage),
      currentPage: currentPage,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSearchedGames = async (req, res, next) => {
  const currentPage = parseInt(req.query.page) || 1;
  const perPage = 9;
  const { searchedTerm } = req.query;
  try {
    const totalGames = await Games.countDocuments({
      title: { $regex: searchedTerm, $options: "i" },
    });

    const searchedGames = await Games.find({
      title: { $regex: searchedTerm, $options: "i" },
    })
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    if (searchedGames.length === 0) {
      return res.status(404).json({
        message: "No Games match the searchedTerm",
        searchedTerm: searchedTerm,
      });
    }

    return res.status(200).json({
      message: "Games fetched successfully",
      searchedGames: searchedGames,
      totalGames: totalGames,
      totalPages: Math.ceil(totalGames / perPage),
      currentPage: currentPage,
    });
  } catch (error) {
    next(error);
  }
};
