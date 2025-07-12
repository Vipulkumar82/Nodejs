// import express from 'express'
// const router = express.Router();

import { Router } from "express";
import { createUser, getAllUser } from "../controller/userController.js";

const router =Router();
router.post('/create-user',createUser);
router.get('/', getAllUser);
export default router;