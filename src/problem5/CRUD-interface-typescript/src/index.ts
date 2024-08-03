import express from 'express';
import dbOpen from '../src/models/databaseModel';
import resourceRoutes from '../src/routes/resourceRoutes';


const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', resourceRoutes);

dbOpen.then(db => {
    db.run('CREATE TABLE IF NOT EXISTS resources (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, category TEXT').then(() => {
        app.listen(PORT, () => {
            console.log('Server is running on port http://localhost:' + PORT);
        });
    });
}).catch(err => {
    console.error('Failed to inizialize database. Error: ', err);
});