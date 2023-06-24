const { Schema, model } = require("mongoose");

const tvSchema = new Schema(
  {
    id: {
      type: Number,
    },
    url: {
      type: String,
      required: [true, "Please add a URL"],
      unique: [true, "URL already exists"],
    },
    name: {
      type: String,
      trim: true,
      maxlength: 200,
      minlength: 3,
    },
    type: {
      type: String,
    },
    language: {
      type: String,
    },
    genres: {
      type: [String],
    },
    status: {
      type: String,
    },
    runtime: {
      type: Number,
      default: null,
    },
    premiered: {
      type: Date,
      default: new Date(),
    },
    officialSite: {
      type: String,
      required: "Please enter a website url",
    },
    schedule: {
      type: Object,
      time: {
        type: String,
      },
      days: {
        type: Array,
        enum: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
    },
    rating: {
      type: Object,
      average: {
        type: Number,
      },
    },
    weight: {
      type: Number,
    },
    network: {
      type: Object,
      id: {
        type: Number,
      },
      name: {
        type: String,
      },
      country: {
        type: Object,
        name: {
          type: String,
        },
        code: {
          type: String,
        },
        timezone: {
          type: String,
        },
      },
    },
    webChannel: {
      type: String,
      default: null,
    },
    externals: {
      type: Object,
      tvrage: {
        type: Number,
      },
      thetvdb: {
        type: Number,
      },
      imdb: {
        type: String,
      },
    },
    image: {
      type: Object,
      medium: {
        type: String,
      },
      original: {
        type: String,
      },
    },
    summary: {
      type: String,
    },
    updated: {
      type: Number,
    },
    links: {
      type: Object,
      self: {
        type: Object,
        href: {
          type: String,
        },
      },
      previousepisode: {
        type: Object,
        href: {
          type: String,
        },
      },
      nextepisode: {
        type: Object,
        href: {
          type: String,
        },
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("Tvshow", tvSchema);
