import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../lib/api';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        shipping_purpose: 'personal',
        address: '',
        phone: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await api.post('/auth/register', formData);
            navigate('/login');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
            <div className="bg-black/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md border border-red-900/50 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-black"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-red-600/10 rounded-full blur-xl"></div>

                <div className="text-center mb-8 relative z-10">
                    <h1 className="text-4xl font-bold text-white mb-2 tracking-wider">UMBRELLA</h1>
                    <p className="text-red-500 font-medium">Join the Elite</p>
                </div>

                {error && (
                    <div className="bg-red-900/30 border-l-4 border-red-600 p-4 mb-6 rounded backdrop-blur-sm">
                        <p className="text-red-200 text-sm">{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-400 text-xs font-bold mb-1 uppercase tracking-wide" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                className="w-full px-4 py-2 bg-gray-900/50 text-white rounded border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-none placeholder-gray-600"
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-xs font-bold mb-1 uppercase tracking-wide" htmlFor="phone">
                                Phone
                            </label>
                            <input
                                className="w-full px-4 py-2 bg-gray-900/50 text-white rounded border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-none placeholder-gray-600"
                                id="phone"
                                type="tel"
                                placeholder="+1 234..."
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-400 text-xs font-bold mb-1 uppercase tracking-wide" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            className="w-full px-4 py-2 bg-gray-900/50 text-white rounded border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-none placeholder-gray-600"
                            id="email"
                            type="email"
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-400 text-xs font-bold mb-1 uppercase tracking-wide" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full px-4 py-2 bg-gray-900/50 text-white rounded border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-none placeholder-gray-600"
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-400 text-xs font-bold mb-1 uppercase tracking-wide" htmlFor="shipping_purpose">
                            Shipping Purpose
                        </label>
                        <select
                            className="w-full px-4 py-2 bg-gray-900/50 text-white rounded border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-none"
                            id="shipping_purpose"
                            value={formData.shipping_purpose}
                            onChange={handleChange}
                        >
                            <option value="personal">Personal Use</option>
                            <option value="commercial">Commercial / Business</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-400 text-xs font-bold mb-1 uppercase tracking-wide" htmlFor="address">
                            Address
                        </label>
                        <input
                            className="w-full px-4 py-2 bg-gray-900/50 text-white rounded border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-none placeholder-gray-600"
                            id="address"
                            type="text"
                            placeholder="123 Street, City..."
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        className={`w-full bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white font-bold py-3 px-4 rounded shadow-lg hover:shadow-red-900/50 transition-all transform hover:-translate-y-0.5 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : 'REGISTER NOW'}
                    </button>

                    <div className="relative flex py-2 items-center">
                        <div className="flex-grow border-t border-gray-700"></div>
                        <span className="flex-shrink-0 mx-4 text-gray-500 text-xs">OR CONTINUE WITH</span>
                        <div className="flex-grow border-t border-gray-700"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button type="button" className="flex items-center justify-center px-4 py-2 border border-gray-700 rounded bg-gray-900/50 text-white hover:bg-gray-800 transition-colors">
                            <span className="font-medium text-sm">Google</span>
                        </button>
                        <button type="button" className="flex items-center justify-center px-4 py-2 border border-gray-700 rounded bg-gray-900/50 text-white hover:bg-gray-800 transition-colors">
                            <span className="font-medium text-sm">Facebook</span>
                        </button>
                    </div>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        Already a member?{' '}
                        <Link to="/login" className="text-red-500 hover:text-red-400 font-semibold hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
