const Bookinstance = require("../models/bookinstance");

bookinstance_list = (req, res) => {
   res.send("NOT IMPLEMENTED: Bookinstance list");
};
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