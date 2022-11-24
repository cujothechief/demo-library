const Author = require("../models/author");

author_list = (req, res) => {
   res.send("NOT IMPLEMENTED: Author list");
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