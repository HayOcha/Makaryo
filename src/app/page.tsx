"use client";

import Header from "@/components/layout/dashboard/utilities/Header";
import Dashboard from "@/components/layout/dashboard/utilities/Dashboard";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open); // Toggle state in parent
  };

  const handleDataFromChild = (data: boolean) => {
    console.log("Data received from child:", data);
    setOpen(data); // Update parent state based on child input
  };

  return (
    <main className="min-h-screen px-8 lg:px-0">
      <Header sendDataToParent={handleDataFromChild} isOpen={open} />
      <Dashboard isOpen={open} />
    </main>
  );
}
