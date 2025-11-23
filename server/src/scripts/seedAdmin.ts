import { query } from '../config/db';
import bcrypt from 'bcryptjs';

const seedAdmin = async () => {
    try {
        const email = 'admin@umbrella.com';
        const password = 'admin123';
        const name = 'Admin Manager';

        // Check if admin exists
        const checkSql = `SELECT * FROM users WHERE email = ?`;
        const existing = await query(checkSql, [email]);

        if (existing.rows.length > 0) {
            console.log('Admin user already exists.');
            return;
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // Insert admin
        const insertSql = `INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, 'admin')`;
        await query(insertSql, [name, email, passwordHash]);

        console.log('Admin user created successfully.');
        console.log('Email: admin@umbrella.com');
        console.log('Password: admin123');

    } catch (error) {
        console.error('Error seeding admin:', error);
    }
};

seedAdmin();
