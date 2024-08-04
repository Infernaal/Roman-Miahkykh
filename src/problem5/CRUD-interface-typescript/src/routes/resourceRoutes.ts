import { Router } from 'express';
import { create, read, getInfoFromId, update, deleteRes } from "../controllers/resourceController";

const router = Router();

router.post('/resources', create);
router.get('/resources', read);
router.get('/resources/:id', getInfoFromId);
router.put('/resources/:id', update);
router.delete('/resources/:id', deleteRes);

export default router;