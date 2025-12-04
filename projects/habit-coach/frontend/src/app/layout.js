import "./globals.css";

export const metadata = {
  title: "Habit Coach",
  description: "AI-powered habit tracking application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          {/* Sidebar */}
          <aside className="app-sidebar">
            <h1>🎯 Habit Coach</h1>
            <nav>
              <a href="/">🏠 Dashboard</a>
              <a href="/suggest">💡 AI Suggest</a>
              <a href="/plan">📋 AI Plan</a>
              <a href="/reflect">💭 AI Reflect</a>
              <a href="/analytics">📊 Analytics</a>
              <a href="/settings">⚙️ Settings</a>
            </nav>
          </aside>

          {/* Main */}
          <div className="main-wrapper">
            <header className="app-header">
              <h1>Habit Coach</h1>
            </header>
            <main className="main-content">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
