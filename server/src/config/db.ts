const sqlite3 = require('sqlite3').verbose();
import path from 'path';

const dbPath = path.resolve(__dirname, '../../database.sqlite');

const db = new sqlite3.Database(dbPath, (err: Error | null) => {
    if (err) {
        console.error('Could not connect to SQLite database', err);
    } else {
        console.log('Connected to SQLite database');
    }
});

export const query = (text: string, params: any[] = []) => {
    return new Promise<any>((resolve, reject) => {
        const method = text.trim().toLowerCase().startsWith('select') ? 'all' : 'run';

        if (method === 'all') {
            db.all(text, params, (err: Error | null, rows: any[]) => {
                if (err) reject(err);
                else resolve({ rows });
            });
        } else {
            db.run(text, params, function (this: any, err: Error | null) {
                if (err) reject(err);
                else resolve({ rows: [], rowCount: this.changes });
            });
        }
    });
};

export default db;
