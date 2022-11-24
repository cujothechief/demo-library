const Book = require("../models/book");

index = (req, res) => {
   res.send("NOT IMPLEMENTED: Site Home Papge");
};
book_list = (req, res) => {
   res.send("NOT IMPLEMENTED: Book list");
};
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