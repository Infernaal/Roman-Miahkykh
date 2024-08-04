import express from 'express';
import { create, read, getInfoFromId, update, deleteRes } from "../controllers/resourceController";

export const router = express.Router();

router.post('/api/v1/resources', create);
router.get('/api/v1/resources', read);
router.get('/api/v1/resources/:id', getInfoFromId);
router.put('/api/v1/resources/:id', update);
router.delete('/api/v1/resources/:id', deleteRes);

export default router;