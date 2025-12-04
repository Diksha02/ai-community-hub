"use client";

import { useState } from "react";
import Link from "next/link";

export default function DashboardContent() {
  const [habits] = useState([
    {
      id: 1,
      icon: "🧘",
      name: "Meditation",
      frequency: "Daily",
      status: "completed",
      streak: 7,
      lastCheckIn: "Today, 7:30 AM",
    },
    {
      id: 2,
      icon: "💪",
      name: "Workout",
      frequency: "Daily",
      status: "completed",
      streak: 3,
      lastCheckIn: "Today, 6:15 AM",
    },
    {
      id: 3,
      icon: "📚",
      name: "Reading",
      frequency: "Daily",
      status: "pending",
      streak: 0,
      lastCheckIn: "Yesterday, 8 PM",
    },
    {
      id: 4,
      icon: "🗓️",
      name: "Journaling",
      frequency: "Daily",
      status: "completed",
      streak: 5,
      lastCheckIn: "Today, 9 PM",
    },
    {
      id: 5,
      icon: "💧",
      name: "Stay Hydrated",
      frequency: "Daily",
      status: "completed",
      streak: 1,
      lastCheckIn: "Today, 2:30 PM",
    },
  ]);

  const completedCount = habits.filter((h) => h.status === "completed").length;
  const completionPercentage = Math.round(
    (completedCount / habits.length) * 100
  );

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {/* Welcome */}
      <div className="card" style={{ marginBottom: "32px" }}>
        <h2>👋 Good morning, Alex!</h2>
        <p>You're crushing it this week. Keep going! 💪</p>
      </div>

      {/* Metrics */}
      <div className="grid-2">
        <div className="card">
          <h3>📊 TODAY'S PROGRESS</h3>
          <p>
            {completedCount} of {habits.length} completed
          </p>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
          <p style={{ fontWeight: "bold", color: "#059669" }}>
            {completionPercentage}% Complete
          </p>
        </div>

        <div className="card">
          <h3>📈 THIS WEEK</h3>
          <p>18 of 25 habits done</p>
          <div className="progress-bar">
            <div className="progress-fill blue" style={{ width: "72%" }}></div>
          </div>
          <p style={{ fontWeight: "bold", color: "#2563eb" }}>72% Complete</p>
        </div>
      </div>

      {/* AI Actions */}
      <div style={{ marginBottom: "32px" }}>
        <h2>🤖 AI ACTIONS</h2>
        <div className="grid-3">
          <AIActionCard
            title="SUGGEST"
            description="Get personalized habit ideas"
            icon="💡"
            color="purple"
            href="/suggest"
          />
          <AIActionCard
            title="PLAN"
            description="Define your goals for today"
            icon="📋"
            color="blue"
            href="/plan"
          />
          <AIActionCard
            title="REFLECT"
            description="Review progress & get insights"
            icon="💭"
            color="cyan"
            href="/reflect"
          />
        </div>
      </div>

      {/* Habits */}
      <div className="card">
        <h2>📌 YOUR HABITS ({habits.length} active)</h2>
        <table>
          <thead>
            <tr>
              <th>Habit</th>
              <th>Frequency</th>
              <th>Status</th>
              <th>Streak</th>
              <th>Last Check-in</th>
            </tr>
          </thead>
          <tbody>
            {habits.map((habit) => (
              <tr key={habit.id}>
                <td>
                  {habit.icon} {habit.name}
                </td>
                <td>{habit.frequency}</td>
                <td>
                  {habit.status === "completed" ? "✅ Done" : "⏳ Pending"}
                </td>
                <td>🔥 {habit.streak}</td>
                <td>{habit.lastCheckIn}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn-primary" style={{ marginTop: "16px" }}>
          + ADD NEW HABIT
        </button>
      </div>
    </div>
  );
}

function AIActionCard({ title, description, icon, color, href }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div className={`action-card ${color}`}>
        <div style={{ marginBottom: "16px" }}>
          <span style={{ fontSize: "32px", marginRight: "8px" }}>{icon}</span>
          <h3 style={{ display: "inline", color: "white" }}>{title}</h3>
        </div>
        <p style={{ color: "rgba(255,255,255,0.9)", marginBottom: "16px" }}>
          {description}
        </p>
        <button
          className="btn-primary"
          style={{ width: "100%", backgroundColor: "white", color: "#1f2937" }}
        >
          → {title} NOW
        </button>
      </div>
    </Link>
  );
}
