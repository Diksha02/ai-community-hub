"use client";

import dynamic from "next/dynamic";

const DashboardContent = dynamic(() => import("./dashboard-content"), {
  ssr: false,
  loading: () => (
    <div style={{ padding: "32px", textAlign: "center" }}>Loading...</div>
  ),
});

export default function Page() {
  return <DashboardContent />;
}
