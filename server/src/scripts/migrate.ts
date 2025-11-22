import { query } from '../config/db';
import fs from 'fs';
import path from 'path';

const migrate = async () => {
    try {
        const schemaPath = path.join(__dirname, '../db/schema.sql');
        const schemaSql = fs.readFileSync(schemaPath, 'utf8');

        console.log('Running migration...');
        // SQLite executes one statement at a time usually, but let's try the block.
        // If it fails, we might need to split by semicolon.
        await query(schemaSql);
        console.log('Migration completed successfully');
        process.exit(0);
    } catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    }
};

migrate();
