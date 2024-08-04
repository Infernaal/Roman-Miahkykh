import { Request, Response } from 'express';
import { createResource, readResource, getInfoFromResourceId, updateResource, deleteResource } from '../models/resourceModel';

export async function create(req: Request, res: Response) {
    try {
        const resource = await createResource(req.body);
        res.status(201).json(resource);
    } catch(error) {
        res.status(500).json({ error: 'Failed to create resource.' });
    }
}

export async function read(res: Response) {
    try {
        const resource = await readResource();
        res.json(resource);
    } catch(error) {
        res.status(500).json({ error: 'Failed to read resource database.' })
    }
}

export async function getInfoFromId(req: Request, res: Response) {
    try {
        const resource = await getInfoFromResourceId(parseInt(req.params.id, 10));
        if(resource) {
            res.json(resource);
        } else {
            res.status(404).json({ error: 'Resource not found.' });
        }
    } catch(error) {
        res.status(500).json({ error: 'Failed to get resource.' });
    }
}

export async function update(req: Request, res: Response) {
    try {
        const resource = await updateResource(parseInt(req.params.id, 10), req.body);
        if(resource) {
            res.json(resource);
        } else {
            res.status(404).json({ error: 'Resource not found.' });
        }
    } catch(error) {
        res.status(500).json({ error: 'Failed to update resource.' });
    }
}

export async function deleteRes(req: Request, res: Response) {
    try {
        await deleteResource(parseInt(req.params.id, 10));
        res.status(204).send();
    } catch(error) {
        res.status(500).json({ error: 'Failed to delete resource.' });
    }
}