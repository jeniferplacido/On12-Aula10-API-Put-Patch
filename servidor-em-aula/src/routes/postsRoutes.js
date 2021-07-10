const express = require("express");
const router = express.Router();

const controller = require ("../controllers/postsControllers");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);

router.post("/create", controller.createPost);

// router.delete("/:id", controller.deletePost);

router.put("/:id", controller.replacePost);

router.patch("/update/:id", controller.updateTitle);
// router.patch("/updade/:id", controller.updateAnything);

 module.exports = router;