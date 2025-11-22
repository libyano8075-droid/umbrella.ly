
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h2 className="text-gray-500 text-sm font-medium uppercase">Total Users</h2>
                    <p className="text-3xl font-bold text-gray-800 mt-2">12</p>
                    <Link to="/users" className="text-blue-500 text-sm mt-4 inline-block hover:underline">View all users</Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                    <h2 className="text-gray-500 text-sm font-medium uppercase">Total Sales</h2>
                    <p className="text-3xl font-bold text-gray-800 mt-2">$12,450</p>
                    <span className="text-green-500 text-sm mt-4 inline-block">+15% from last month</span>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                    <h2 className="text-gray-500 text-sm font-medium uppercase">Active Services</h2>
                    <p className="text-3xl font-bold text-gray-800 mt-2">5</p>
                    <span className="text-purple-500 text-sm mt-4 inline-block">Running smoothly</span>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Recent Activity</h2>
                <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-4">
                        <div>
                            <p className="font-medium text-gray-800">New user registered</p>
                            <p className="text-sm text-gray-500">John Doe joined the platform</p>
                        </div>
                        <span className="text-sm text-gray-400">2 mins ago</span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-4">
                        <div>
                            <p className="font-medium text-gray-800">New order #1234</p>
                            <p className="text-sm text-gray-500">Shipping to Cairo, Egypt</p>
                        </div>
                        <span className="text-sm text-gray-400">1 hour ago</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-gray-800">System Update</p>
                            <p className="text-sm text-gray-500">Server maintenance completed</p>
                        </div>
                        <span className="text-sm text-gray-400">5 hours ago</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
