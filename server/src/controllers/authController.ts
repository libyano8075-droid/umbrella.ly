import { Request, Response } from 'express';
import { query } from '../config/db';

export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    try {
        // TODO: Hash password
        // TODO: Check if user exists
        const sql = `INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)`;
        await query(sql, [name, email, password]);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error: any) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const sql = `SELECT * FROM users WHERE email = ?`;
        const result = await query(sql, [email]);
        const user = result.rows[0];

        if (!user || user.password_hash !== password) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        // TODO: Generate JWT
        res.json({ message: 'Login successful', user: { id: user.id, name: user.name, email: user.email } });
    } catch (error: any) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};
