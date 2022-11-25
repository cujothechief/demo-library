const BookInstance = require("../models/bookinstance");

const bookinstance_list = function (req, res, next) {
   BookInstance.find()
      .populate("book")
      .exec(function (err, list_bookinstances) {
         if (err) {
            return next(err);
         }
         res.render("bookinstance_list", {
            title: "Book Instance List",
            bookinstance_list: list_bookinstances,
         });
      });
}
bookinstance_detail = (req, res) => {
   res.send(`NOT IMPLEMENTED: Bookinstance detail: ${req.params.id}`);
};
bookinstance_create_get = (req, res) => {
   res.send("NOT IMPLEMENTED: Bookinstance create Get");
};
bookinstance_create_post = (req, res) => {
   res.send("NOT IMPLEMENTED: Bookinstance create POST");
};
bookinstance_delete_get = (req, res) => {
   res.send("NOT IMPLEMENTED: Bookinstance delete GET");
};
bookinstance_delete_post = (req, res) => {
   res.send("NOT IMPLEMENTED: Bookinstance update GET");
};
bookinstance_update_get = (req, res) => {
   res.send("NOT IMPLEMENTED: Bookinstance update GET");
};
bookinstance_update_post = (req, res) => {
   res.send("NOT IMPLEMENTED: Bookinstance update POST");
};
module.exports = {
   bookinstance_list,
   bookinstance_detail,
   bookinstance_create_get,
   bookinstance_create_post,
   bookinstance_delete_get,
   bookinstance_delete_post,
   bookinstance_update_get,
   bookinstance_update_post
}