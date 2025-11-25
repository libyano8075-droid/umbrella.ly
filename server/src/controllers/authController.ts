import { Request, Response } from 'express';
import { query } from '../config/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // In production, use .env

export const register = async (req: Request, res: Response) => {
    const { name, email, password, shipping_purpose, address, phone } = req.body;
    try {
        // Check if user exists
        const checkUserSql = `SELECT * FROM users WHERE email = ?`;
        const existingUser = await query(checkUserSql, [email]);
        if (existingUser.rows.length > 0) {
            res.status(400).json({ message: 'User already exists' });
            return;
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // Generate Unique Code (e.g., UMB-TIMESTAMP-RANDOM)
        const uniqueCode = `UMB-${Date.now().toString().slice(-6)}-${Math.floor(1000 + Math.random() * 9000)}`;

        const sql = `INSERT INTO users (name, email, password_hash, role, shipping_purpose, address, phone, unique_code) VALUES (?, ?, ?, 'user', ?, ?, ?, ?)`;
        await query(sql, [name, email, passwordHash, shipping_purpose, address, phone, uniqueCode]);

        res.status(201).json({ message: 'User registered successfully', uniqueCode });
    } catch (error: any) {
        console.error("Registration error:", error);
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const sql = `SELECT * FROM users WHERE email = ?`;
        const result = await query(sql, [email]);
        const user = result.rows[0];

        if (!user) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        // Generate JWT
        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({
            message: 'Login successful',
            token,
            user: { id: user.id, name: user.name, email: user.email, role: user.role }
        });
    } catch (error: any) {
        console.error("Login error:", error);
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};
