import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <Sidebar />
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <Header />
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
