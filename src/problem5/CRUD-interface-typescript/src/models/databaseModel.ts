import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const dbOpen = open({
    filename: 'sqlite.db',
    driver: sqlite3.Database
});

export default dbOpen;