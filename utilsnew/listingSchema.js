const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    location: Joi.string().required(),
    category: Joi.string()
      .valid(
        "Trending",
        "Rooms",
        "Iconic_Cities",
        "Mountains",
        "Castles",
        "Amazing_Pool",
        "Camping",
        "Farms",
        "Arctic",
        "Domes",
        "House_Boats"
      )
      .required(),
    // ... add all other fields you expect ...
  })
    .required()
    .unknown(true), // <-- add this
});
