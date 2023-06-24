const Tvshow = require("../models/tvshows.model");

exports.getTvs = async (req, res) => {
  try {
    const tvshows = await Tvshow.find();
    if (!tvshows) {
      return res.status(404).json({ message: "No tv found" });
    }
    res.status(200).json(tvshows);
  } catch (error) {
    return res.status(400).send({ error });
  }
};

exports.getTvsByGenre = async (req, res) => {
  try {
    const { genre } = req.body;
    const tvshows = await Tvshow.find();
    if (!tvshows) {
      return res.status(404).json({ message: "No tv found" });
    }
    let arr = [];
    for (const key in tvshows) {
      if (tvshows[key].genres.includes(genre)) {
        arr.push(tvshows[key]);
      }
    }
    res.status(200).json(arr);
  } catch (error) {
    return res.status(400).send({ error });
  }
};
exports.getTvsByGenreAndRate = async (req, res) => {
  try {
    const { genre } = req.body;
    const tvshows = await Tvshow.find();
    if (!tvshows) {
      return res.status(404).json({ message: "No tv found" });
    }
    let arr = new Object();
    for (const key in tvshows) {
      if (tvshows[key].genres.includes(genre)) {
        arr[tvshows[key].name] = tvshows[key].rating.average;
      }
    }
    res.status(200).json(arr);
  } catch (error) {
    return res.status(400).send({ error });
  }
};
exports.getTvsByCountry = async (req, res) => {
  try {
    const { country } = req.body;
    const tvshows = await Tvshow.find();
    if (!tvshows) {
      return res.status(404).json({ message: "No tv found" });
    }
    let arr = new Object();
    for (const key in tvshows) {
      if (tvshows[key].network?.country.name == country) {
        arr[tvshows[key].name] = tvshows[key].network.country;
      }
    }
    res.status(200).send(arr);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};
exports.getTvsByCountryAndWeight = async (req, res) => {
  try {
    const { country } = req.body;
    const tvshows = await Tvshow.find();
    if (!tvshows) {
      return res.status(404).json({ message: "No tv found" });
    }
    let a = 0;
    for (const key in tvshows) {
      if (tvshows[key].network?.country.name == country) {
        a += tvshows[key].weight;
      }
    }
    res.status(200).send({ "umumiy weight": a });
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};
exports.getTvsByNetwork = async (req, res) => {
  try {
    let a = await Tvshow.aggregate([
      {
        $group: {
          _id: "$network.name",
          films: { $push: "$name" },
        },
      },
    ]);

    res.status(200).send(a);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

exports.getHighRating = async (req, res) => {
  try {
    let a = await Tvshow.aggregate([
      {
        $group: {
          _id: "$network.name",
          films: { $push: "$name" },
        },
      },
    ]);

    res.status(200).send(a);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};
