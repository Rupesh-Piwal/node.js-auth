import express from "express";

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/new", register);
router.route("/userid/:id").get(getUserDetails);

export default router;
