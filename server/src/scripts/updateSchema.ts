import { query } from '../config/db';

const updateSchema = async () => {
    try {
        console.log('Updating schema...');

        // Add columns if they don't exist. SQLite doesn't support IF NOT EXISTS in ALTER TABLE,
        // so we wrap in try-catch or check first. For simplicity in this dev script, we'll try adding them.
        // Note: SQLite ALTER TABLE ADD COLUMN is limited.

        const columns = [
            "ALTER TABLE users ADD COLUMN shipping_purpose TEXT",
            "ALTER TABLE users ADD COLUMN address TEXT",
            "ALTER TABLE users ADD COLUMN phone TEXT",
            "ALTER TABLE users ADD COLUMN unique_code TEXT UNIQUE",
            "ALTER TABLE users ADD COLUMN google_id TEXT",
            "ALTER TABLE users ADD COLUMN facebook_id TEXT"
        ];

        for (const sql of columns) {
            try {
                await query(sql);
                console.log(`Executed: ${sql}`);
            } catch (err: any) {
                if (err.message.includes('duplicate column name')) {
                    console.log(`Column already exists (skipped): ${sql}`);
                } else {
                    console.error(`Error executing ${sql}:`, err.message);
                }
            }
        }

        console.log('Schema update complete.');
    } catch (error) {
        console.error('Error updating schema:', error);
    }
};

updateSchema();
