import dbOpen from "./databaseModel";

export interface Resource {
    id?: number,
    name: string,
    description: string,
    category: string
};

export async function createResource(resource : Resource) {
    const db = await dbOpen;
    const resultCreate = await db.run('INSERT INTO resources (name, description, category) VALUES (?, ?, ?)', resource.name, resource.description, resource.category);
    return {id: resultCreate.lastID, ...resource};
}

export async function readResource() {
    const db = await dbOpen;
    const resultRead = await db.all('SELECT * FROM resources');
    return resultRead;
}

export async function getInfoFromResourceId(id: number) {
    const db = await dbOpen;
    const resultGetId = await db.get('SELECT * FROM resources WHERE id = ?', id);
    return resultGetId;
}

export async function updateResource(id: number, resource : Resource) {
    const db = await dbOpen;
    await db.run('UPDATE resources SET name = ?, description = ?, category = ? WHERE id = ?', resource.name, resource.description, resource.category, id);
    return {id, ...resource};
}

export async function deleteResource(id: number) {
    const db = await dbOpen;
    await db.run('DELETE FROM resources WHERE id = ?', id);
}