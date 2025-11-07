
import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from "recharts";

 function Adminpage() {
  
  const summary = {
    todayRevenue: 15600,
    todayOrders: 120,
    avgOrderValue: 130,
    lowStockCount: 2,
  };

  const revenueData = [
    { date: "Mon", revenue: 12000 },
    { date: "Tue", revenue: 14500 },
    { date: "Wed", revenue: 11000 },
    { date: "Thu", revenue: 17800 },
    { date: "Fri", revenue: 19000 },
    { date: "Sat", revenue: 21000 },
    { date: "Sun", revenue: 16000 },
  ];

  const topItems = [
    { name: "Pizza", sold: 90 },
    { name: "Burger", sold: 70 },
    { name: "Pasta", sold: 50 },
    { name: "Sandwich", sold: 45 },
  ];

  const orderType = [
    { type: "Dine-in", value: 45 },
    { type: "Takeaway", value: 30 },
    { type: "Delivery", value: 25 },
  ];

  const COLORS = ["#3b82f6", "#10b981", "#facc15"];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
     
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
         Admin Dashboard
      </h1>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow rounded-2xl p-4 text-center">
          <p className="text-gray-500 text-sm">Today’s Revenue</p>
          <h2 className="text-2xl font-semibold text-green-600">
            ₹{summary.todayRevenue}
          </h2>
        </div>
        <div className="bg-white shadow rounded-2xl p-4 text-center">
          <p className="text-gray-500 text-sm">Total Orders</p>
          <h2 className="text-2xl font-semibold text-blue-600">
            {summary.todayOrders}
          </h2>
        </div>
        <div className="bg-white shadow rounded-2xl p-4 text-center">
          <p className="text-gray-500 text-sm">Avg Order Value</p>
          <h2 className="text-2xl font-semibold text-purple-600">
            ₹{summary.avgOrderValue}
          </h2>
        </div>
        <div className="bg-white shadow rounded-2xl p-4 text-center">
          <p className="text-gray-500 text-sm">Low Stock</p>
          <h2 className="text-2xl font-semibold text-red-600">
            {summary.lowStockCount}
          </h2>
        </div>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="font-medium mb-2">Revenue (Weekly)</h3>
          <div style={{ width: "100%", height: 220 }}>
            <ResponsiveContainer>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="font-medium mb-2">Top Selling Items</h3>
          <div style={{ width: "100%", height: 220 }}>
            <ResponsiveContainer>
              <BarChart data={topItems}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sold" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="font-medium mb-2">Order Type Split</h3>
          <div style={{ width: "100%", height: 220 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={orderType}
                  dataKey="value"
                  nameKey="type"
                  outerRadius={70}
                  label
                >
                  {orderType.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Adminpage;
