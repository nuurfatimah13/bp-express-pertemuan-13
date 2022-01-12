// Import Student Controller
const StudentsController = require("../controllers/StudentsController");

// Import Express
const express = require("express");

// Buat object router
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello KAK HAN & IMAH");
});

router.get("/students", StudentsController.index);
router.post("/students", StudentsController.store);
router.put("/students/:id", StudentsController.update);
router.delete("/students/:id", StudentsController.destroy);

// Export router
module.exports = router;