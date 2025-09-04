import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BarChart, Bar } from "recharts";
import RazorpayLogo from "../assets/white.png";

const earningsData = [
  { name: "Mon", earning: 3350 },
  { name: "Tue", earning: 1800 },
  { name: "Wed", earning: 2200 },
  { name: "Thu", earning: 2600 },
  { name: "Fri", earning: 2800 },
  { name: "Sat", earning: 3100 },
  { name: "Sun", earning: 3700 },
];

const totalEarningData = [
  { month: "Jan", value: 100 },
  { month: "Feb", value: 150 },
  { month: "Mar", value: 200 },
  { month: "Apr", value: 250 },
  { month: "May", value: 400 },
  { month: "Jun", value: 500 },
  { month: "Jul", value: 300 },
  { month: "Aug", value: 350 },
  { month: "Sep", value: 330 },
  { month: "Oct", value: 280 },
  { month: "Nov", value: 260 },
  { month: "Dec", value: 220 },
];

const sidebarItems = [
  "Dashboard",
  "Earnings",
  "Tiers",
  "M-Tools",
  "Trainings",
  "KYC",
  "LeadLink",
  "Refino",
  "Qualify",
  "Rewards",
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-800 pr-3 flex flex-col space-y-4">
        <img src={RazorpayLogo} alt="Razorpay Logo" className="mb-6" />
        <ul className="space-y-4">
          {sidebarItems.map((item, idx) => (
            <li
              key={idx}
              className={`p-3 w-full cursor-pointer ${
                idx === 0
                  ? "text-black bg-[#a9dfd8] font-bold rounded-tr-[10px] rounded-br-[10px]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl">
            Hello, <span className="text-[#a9dfd8]">Piyush Patyal</span> 👋
          </h1>
          <Avatar alt="User" src="/profile.jpg" />
        </header>

        {/* Timer */}
        <div
          className="mb-6 text-white-300 p-2 bg-transparent"
          style={{
            opacity: 0.9,
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 4px 30px rgba(81, 139, 156, 0.1)",
            backdropFilter: "blur(5px)",
            borderRadius: "16px",
          }}
        >
          <p>
            <span className="font-bold text-lg">6</span> Days{" "}
            <span className="font-bold text-lg">11</span> Hr{" "}
            <span className="font-bold text-lg">59</span> Min{" "}
            <span className="font-bold text-lg">09</span> Sec
            <span className="text-sm ml-50">
              Your next level is just one click away...
            </span>
          </p>
        </div>

        {/* Insights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card
            style={{
              opacity: 0.9,
              backgroundColor: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 4px 30px rgba(81, 139, 156, 0.1)",
              backdropFilter: "blur(5px)",
              borderRadius: "16px",
            }}
          >
            <CardContent className="p-4">
              <h2 className="text-lg text-white">₹ 51,060</h2>
              <p className="text-sm text-gray-400">All Time</p>
            </CardContent>
          </Card>

          <Card
            style={{
              opacity: 0.9,
              backgroundColor: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 4px 30px rgba(81, 139, 156, 0.1)",
              backdropFilter: "blur(5px)",
              borderRadius: "16px",
            }}
          >
            <CardContent className="p-4">
              <h2 className="text-lg text-white">₹ 21,340</h2>
              <p className="text-sm text-gray-400">All time paid</p>
            </CardContent>
          </Card>

          <Card
            style={{
              opacity: 0.9,
              backgroundColor: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 4px 30px rgba(81, 139, 156, 0.1)",
              backdropFilter: "blur(5px)",
              borderRadius: "16px",
            }}
          >
            <CardContent className="p-4">
              <h2 className="text-lg text-white">10,162</h2>
              <p className="text-sm text-gray-400">In last 30 Days</p>
            </CardContent>
          </Card>

          <Card
            style={{
              opacity: 0.9,
              backgroundColor: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 4px 30px rgba(81, 139, 156, 0.1)",
              backdropFilter: "blur(5px)",
              borderRadius: "16px",
            }}
          >
            <CardContent className="p-4">
              <h2 className="text-lg text-white">₹ 3,890</h2>
              <p className="text-sm text-gray-400">In last 7 Days</p>
            </CardContent>
          </Card>
        </div>

        {/* Earnings Level & Rankings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card
            // className="bg-gray-800"
            style={{
              backgroundColor: "transparent",
              opacity: 0.9,
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              borderRadius: "16px",
            }}
          >
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-4 text-[#fff]">
                Earning Level
              </h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={earningsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="name" stroke="#aaa" />
                  <YAxis stroke="#aaa" />
                  <Tooltip />
                  <Bar
                    dataKey="earning"
                    fill="#a9dfd8"
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card
            className="bg-gray-800"
            style={{
              backgroundColor: "transparent",
              opacity: 0.9,
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              borderRadius: "16px",
            }}
          >
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-4 text-[#fff]">
                Your Rank
              </h2>
              <p className="text-gray-400">#6987 Among other affiliates</p>
              <ul className="mt-2 space-y-2">
                <li className="flex justify-between">
                  <span className="text-[#fff]">Taniya Patyal</span>{" "}
                  <span className="text-[#a9dfd8]">#6986</span>
                </li>
                <li className="flex justify-between font-bold">
                  <span className="text-[#fff]">Piyush Patyal</span>{" "}
                  <span className="text-[#fff]">#6987</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#fff]">Utkarsh Singh</span>{" "}
                  <span className="text-[#a9dfd8]">#6988</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Total Earning Graph */}
        <Card
          style={{
            opacity: 0.9,
            backgroundColor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 4px 30px rgba(81, 139, 156, 0.1)",
            backdropFilter: "blur(5px)",
            borderRadius: "16px",
          }}
        >
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4 text-white">
              Total Earning
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={totalEarningData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#fff" />
                <XAxis dataKey="month" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#a9dfd8"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
