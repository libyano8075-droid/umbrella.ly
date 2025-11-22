import { Request, Response } from 'express';
import { query } from '../config/db';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const result = await query('SELECT id, name, email, role, created_at FROM users');
        res.json(result.rows);
    } catch (error: any) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await query('SELECT id, name, email, role, created_at FROM users WHERE id = ?', [id]);
        if (result.rows.length === 0) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.json(result.rows[0]);
    } catch (error: any) {
        res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
};
