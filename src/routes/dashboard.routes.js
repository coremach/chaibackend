import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
    getChannelVideos,
    getChannelStats,
} from './../controllers/dashboard.controller.js'

const router = Router();
router.use(verifyJWT)

router.route("/stats").get(getChannelStats);
router.route("/videos").get(getChannelVideos)

export default router;