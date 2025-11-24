
import { query } from './config/db';

async function checkColumns() {
    try {
        const result = await query("PRAGMA table_info(users)");
        console.log('Columns:', result.rows);
    } catch (error) {
        console.error('Error:', error);
    }
}

checkColumns();
