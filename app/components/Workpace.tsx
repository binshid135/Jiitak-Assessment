"use client";
import Sidebar from "./SideBar";
import Header from "./Header";

export default function Workspace({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">          
            <Sidebar />        
            <div className="ml-64 flex-1 min-h-screen">              
                <Header />          
                <main className="p-5">{children}</main>
            </div>
        </div>
    );
}
