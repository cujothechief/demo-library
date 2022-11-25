const Genre = require("../models/genre");
const Book = require("../models/book");
const async = require("async");

genre_list = function (req, res, next) { 
   Genre.find()
      .exec(function (err, list_genre) {
         if (err) {
            return next(err);
         };
         res.render("genre_list", {
            title: "Genre List",
            genre_list: list_genre,
         });
      });
};
genre_detail = (req, res, next) => {
   async.parallel({
      genre(callback) {
         Genre.findById(req.params.id).exec(callback);
      },
      genre_books(callback) {
         Book.find({ genre: req.params.id }).exec(callback);
      },
   },
   (err, results) => {
      if (err) {
         return next(err);
      }
      if (results.genre == null) {
         const err = new Error("Genre not found");
         err.status = 404
         return next(err)
      }
      res.render("genre_detail", {
         title: "Genre Detail",
         genre: results.genre,
         genre_books: results.genre_books,
      })
   },
   )
}
genre_create_get = (req, res) => {
   res.send("NOT IMPLEMENTED: Genre create Get");
};
genre_create_post = (req, res) => {
   res.send("NOT IMPLEMENTED: Genre create POST");
};
genre_delete_get = (req, res) => {
   res.send("NOT IMPLEMENTED: Genre delete GET");
};
genre_delete_post = (req, res) => {
   res.send("NOT IMPLEMENTED: Genre update GET");
};
genre_update_get = (req, res) => {
   res.send("NOT IMPLEMENTED: Genre update GET");
};
genre_update_post = (req, res) => {
   res.send("NOT IMPLEMENTED: Genre update POST");
};
module.exports = {
   genre_list,
   genre_detail,
   genre_create_get,
   genre_create_post,
   genre_delete_get,
   genre_delete_post,
   genre_update_get,
   genre_update_post
}