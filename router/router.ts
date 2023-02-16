import { Router } from "express";
import {
  createStore,
  getStore,
  getOneStore,
} from "../controller/shoreController";
const router = Router();

router.route("/newstore").post(createStore);
router.route("/stores").get(getStore);
router.route("/onestore/:id").get(getOneStore);

export default router;
