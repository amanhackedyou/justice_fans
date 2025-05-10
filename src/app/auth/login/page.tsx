'use client';

import { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simple validation
        if (!email || !password) {
            setError('Both email and password are required.');
            return;
        }

        setError('');
        console.log('Login successful', { email, password });
        // Proceed with backend logic (e.g., send data to the server)
    };

    const handleSignupRedirect = () => {
        router.push('/auth/signup'); // Redirect to signup page
    };

    return (
        <div className="h-full bg-white w-full flex items-center justify-center px-4">
            {/* Container with animation */}
            <motion.div
                className="w-full max-w-md bg-gray-900 text-white p-8 rounded-2xl shadow-xl"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-pink-500 mb-6 text-center">Login to Your Account</h2>

                {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email */}
                    <motion.div
                        className="flex items-center bg-gray-800 px-4 py-3 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <FaEnvelope className="text-gray-400 mr-3" />
                        <input
                            type="email"
                            className="bg-transparent w-full outline-none text-white placeholder-gray-400"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </motion.div>

                    {/* Password */}
                    <motion.div
                        className="flex items-center bg-gray-800 px-4 py-3 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <FaLock className="text-gray-400 mr-3" />
                        <input
                            type="password"
                            className="bg-transparent w-full outline-none text-white placeholder-gray-400"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </motion.div>

                    <motion.button
                        type="submit"
                        className="w-full bg-pink-500 hover:bg-pink-600 transition-all text-white py-3 rounded-lg font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        Login
                    </motion.button>
                </form>

                {/* Don't have an account? */}
                <motion.div
                    className="mt-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                >
                    <p className="text-sm text-gray-400">
                        Don't have an account?{' '}
                        <button
                            onClick={handleSignupRedirect}
                            className="text-pink-500 hover:underline"
                        >
                            Sign Up
                        </button>
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
