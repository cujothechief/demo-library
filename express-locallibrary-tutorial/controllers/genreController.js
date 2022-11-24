const Genre = require("../models/genre");

genre_list = (req, res) => {
   res.send("NOT IMPLEMENTED: Genre list");
};
genre_detail = (req, res) => {
   res.send(`NOT IMPLEMENTED: Genre detail: ${req.params.id}`);
};
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