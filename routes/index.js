import { Router } from "express";
import postsRoutes from "./posts.js"
const router = Router();


router.get('/', (req, res) => res.send("This is the api root!"))
router.use("/", postsRoutes)


export default router;