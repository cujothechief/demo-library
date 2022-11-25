const Book = require("../models/book");
const Author = require("../models/author");
const Genre = require("../models/genre");
const BookInstance = require("../models/bookinstance");
const async = require("async");

let index = (req, res) => {
   async.parallel({
      book_count(callback) {
         Book.countDocuments({}, callback);
      },
      book_instance_count(callback) {
         BookInstance.countDocuments({}, callback);
      },
      book_instance_available_count(callback) {
         BookInstance.countDocuments({status: "Available"}, callback);
      },
      author_count(callback) {
         Author.countDocuments({}, callback);
      },
      genre_count(callback) {
         Genre.countDocuments({}, callback);
      },
   },
      (err, results) => {
         res.render("index", {
            title: "Local Library Home",
            error: err,
            data: results,
         })
      }
   )
}
let book_list = function (req, res, next) {
   Book.find({}, "title author")
      .sort({ title: 1 })
      .populate("author")
      .exec(function (err, list_books) {
         if (err) {
            return next(err);
         }
         res.render("book_list", { title: "Book List", book_list: list_books });
      });
}
book_detail = (req, res) => {
   res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
};
book_create_get = (req, res) => {
   res.send("NOT IMPLEMENTED: Book create Get");
};
book_create_post = (req, res) => {
   res.send("NOT IMPLEMENTED: Book create POST");
};
book_delete_get = (req, res) => {
   res.send("NOT IMPLEMENTED: Book delete GET");
};
book_delete_post = (req, res) => {
   res.send("NOT IMPLEMENTED: Book update GET");
};
book_update_get = (req, res) => {
   res.send("NOT IMPLEMENTED: Book update GET");
};
book_update_post = (req, res) => {
   res.send("NOT IMPLEMENTED: Book update POST");
};
module.exports = {
   index,
   book_list,
   book_detail,
   book_create_get,
   book_create_post,
   book_delete_get,
   book_delete_post,
   book_update_get,
   book_update_post
}
// book_detail = (req, res) => {
//    res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
// };
// book_create_get = (req, res) => {
//    res.send("NOT IMPLEMENTED: Book create Get");
// };
// book_create_post = (req, res) => {
//    res.send("NOT IMPLEMENTED: Book create POST");
// };
// book_delete_get = (req, res) => {
//    res.send("NOT IMPLEMENTED: Book delete GET");
// };
// book_delete_post = (req, res) => {
//    res.send("NOT IMPLEMENTED: Book update GET");
// };
// book_update_get = (req, res) => {
//    res.send("NOT IMPLEMENTED: Book update GET");
// };
// book_update_post = (req, res) => {
//    res.send("NOT IMPLEMENTED: Book update POST");
// };
// module.exports = {
//    index,
//    book_list,
//    book_detail,
//    book_create_get,
//    book_create_post,
//    book_delete_get,
//    book_delete_post,
//    book_update_get,
//    book_update_post
// }