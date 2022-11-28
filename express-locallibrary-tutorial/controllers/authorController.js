const async = require("async");
const Book = require("../models/book");
const Author = require("../models/author");

let author_list = function (req, res, next) { 
   Author.find()
      .sort([["family_name", "ascending"]])
      .exec(function (err, list_authors) {
         if (err) {
            return next(err);
         };
         res.render("author_list", {
            title: "Author List",
            author_list: list_authors,
         });
      });
};
let author_detail = (req, res, next) => {
   async.parallel({
      author(callback) {
         Author.findById(req.params.id).exec(callback);
      },
      authors_books(callback) {
         Book.find({ author: req.params.id }, "title summary").exec(callback);
      },
   },
      (err, results) => {
         if (err) {
            return next(err);
         }
         if (results.author == null) {
            const err = new Error("Author not found");
            err.status = 404;
            return next(err);
         }
         res.render("author_detail", {
            title: "Author Detail",
            author: results.author,
            author_books: results.authors_books,
         });
      }
   );
}
let author_create_get = (req, res) => {
   res.send("NOT IMPLEMENTED: Author create Get");
};
let author_create_post = (req, res) => {
   res.send("NOT IMPLEMENTED: Author create POST");
};
let author_delete_get = (req, res) => {
   res.send("NOT IMPLEMENTED: Author delete GET");
};
let author_delete_post = (req, res) => {
   res.send("NOT IMPLEMENTED: Author update GET");
};
let author_update_get = (req, res) => {
   res.send("NOT IMPLEMENTED: Author update GET");
};
author_update_post = (req, res) => {
   res.send("NOT IMPLEMENTED: Author update POST");
};
module.exports = {
   author_list, 
   author_detail,
   author_create_get,
   author_create_post,
   author_delete_get, 
   author_delete_post,
   author_update_get, 
   author_update_post
}