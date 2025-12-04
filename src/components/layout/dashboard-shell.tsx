import Sidebar from "./sidebar";
import Header from "./header";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-neutral-50 text-black">
      
      {/* SIDEBAR FIXED HEIGHT */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="flex flex-col flex-1 min-h-screen">
        <Header />

        <main className="p-6 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
