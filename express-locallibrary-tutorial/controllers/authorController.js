const Author = require("../models/author");

author_list = function (req, res, next) { 
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
author_detail = (req, res) => {
   res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
};
author_create_get = (req, res) => {
   res.send("NOT IMPLEMENTED: Author create Get");
};
author_create_post = (req, res) => {
   res.send("NOT IMPLEMENTED: Author create POST");
};
author_delete_get = (req, res) => {
   res.send("NOT IMPLEMENTED: Author delete GET");
};
author_delete_post = (req, res) => {
   res.send("NOT IMPLEMENTED: Author update GET");
};
author_update_get = (req, res) => {
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