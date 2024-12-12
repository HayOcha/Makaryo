import Header from "@/components/layout/dashboard/utilities/Header";
import Dashboard from "@/components/layout/dashboard/utilities/Dashboard";
import Image from "next/image";
import { Sidebar } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen px-8 lg:px-0">
      <Header />
      <Dashboard />
    </main>
  );
}
