import AdminHome from '@/components/Admin/Home/page'
import React from 'react'

const page = async () => {
    const stats = await getInsightsData();

    return (
        <AdminHome stats={stats} />
    )
}

// Replace with real DB queries or API calls
async function getInsightsData() {
    // Mock example
    return {
        totalUsers: 1523,
        currentlyOnlineUsers: 89, // Renamed key
        pageViews: {
            today: 320,
            thisWeek: 1980,
            thisMonth: 8123,
        },
        signupStats: {
            today: 12,
            thisWeek: 75,
            thisMonth: 304,
        },
        dailyVisitors: 289,
    };
}


export default page