import express from 'express';
import { createResource, readResource, getInfoFromResourceId, updateResource, deleteResource } from "../controllers/resourceController";

export const router = express.Router();

router.post('/api/v1/resources', createResource);
router.get('/api/v1/resources', readResource);
router.get('/api/v1/resources/:id', getInfoFromResourceId);
router.put('/api/v1/resources/:id', updateResource);
router.delete('/api/v1/resources/:id', deleteResource);

export default router;