import express from 'express';
import { register, login, Dashboard } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/dashboard', Dashboard);

export default router;




