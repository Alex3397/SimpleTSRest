/** source/routes/posts.ts */
import express from "express";
import controller from "../controller/posts";
const router = express.Router();

router.get("/me", controller.getMyLinkedInData);

export = router;
