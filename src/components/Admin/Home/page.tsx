'use client';

import React from 'react';

interface Stats {
    totalUsers: number;
    currentlyOnlineUsers: number;
    pageViews: {
        today: number;
        thisWeek: number;
        thisMonth: number;
    };
    signupStats: {
        today: number;
        thisWeek: number;
        thisMonth: number;
    };
    dailyVisitors: number;
}

interface InsightsClientProps {
    stats: Stats;
}

const HomePage: React.FC<InsightsClientProps> = ({ stats }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-white text-black px-6 py-10">
            <h1 className="text-4xl font-extrabold text-pink-500 mb-10 tracking-tight">
                Admin Insights Dashboard
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <StatCard title="Total Users" value={stats.totalUsers} />
                <StatCard
                    title="Currently Online Users"
                    value={stats.currentlyOnlineUsers}
                    indicator
                />
                <StatCard title="Daily Visitors" value={stats.dailyVisitors} />

                <StatCard title="Page Views Today" value={stats.pageViews.today} />
                <StatCard title="Page Views This Week" value={stats.pageViews.thisWeek} />
                <StatCard title="Page Views This Month" value={stats.pageViews.thisMonth} />

                <StatCard title="Signups Today" value={stats.signupStats.today} />
                <StatCard title="Signups This Week" value={stats.signupStats.thisWeek} />
                <StatCard title="Signups This Month" value={stats.signupStats.thisMonth} />
            </div>
        </div>
    );
};

interface StatCardProps {
    title: string;
    value: number;
    indicator?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, indicator }) => (
    <div className="relative bg-white/70 border border-gray-200 rounded-2xl shadow-lg backdrop-blur-md p-6 hover:shadow-xl transition duration-300">
        <h2 className="text-sm font-semibold text-gray-500 mb-1 flex items-center">
            {title}
            {indicator && (
                <span className="ml-2 inline-flex items-center">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75 ml-1" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500 ml-1" />
                </span>
            )}
        </h2>
        <p className="text-3xl font-bold text-black">{value.toLocaleString()}</p>
    </div>
);

export default HomePage;
