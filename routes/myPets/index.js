const express = require("express");
const router = express.Router();
//CRUD
router.get("/get_pets", (req, res) => {
  res.send("/get_pets");
});
router.post("/post_pets", (req, res) => {
  res.send("/post_pets");
});
router.put("/put_pets", (req, res) => {
  res.send("/put_pets");
});
router.delete("/delete_pets", (req, res) => {
  res.send("/delete_pets");
});

module.exports = router;
