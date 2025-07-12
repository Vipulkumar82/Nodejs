// import express from 'express'
// const router = express.Router();

import { Router } from "express";
import { createUser, getAllUser, updateUser } from "../controller/userController.js";

const router =Router();
router.post('/create-user',createUser);
router.get('/', getAllUser);
router.put('/update-user',updateUser)
export default router;