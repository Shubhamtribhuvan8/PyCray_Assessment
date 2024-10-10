import React from "react";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Headphones,
  Settings,
} from "lucide-react";

const NavItem = ({ icon: Icon, label, isActive }) => (
  <a
    href="#"
    className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors ${
      isActive
        ? "text-[#4318FF] bg-[#F4F7FE]"
        : "text-[#A3AED0] hover:text-[#4318FF] hover:bg-[#F4F7FE]"
    }`}
  >
    <Icon size={20} strokeWidth={1.5} />
    <span className="font-medium text-sm">{label}</span>
  </a>
);

const SideBar = () => {
  return (
    <aside className="w-[250px] bg-white p-6 shadow-lg flex flex-col h-screen">
      <div className="mb-8">
        <h1 className="text-[16px] font-medium text-[#2B3674] ml-4">
          PyCray_Assessment
        </h1>
      </div>

      <nav className="flex-grow space-y-6">
        <div>
          <p className="text-xs font-bold text-[#A3AED0] mb-4 px-4">
            MAIN MENU
          </p>
          <div className="space-y-1">
            <NavItem icon={LayoutDashboard} label="Dashboard" isActive={true} />
            <NavItem icon={Users} label="Create Portfolio" />
            <NavItem icon={ClipboardList} label="Property List" />
          </div>
        </div>

        <div>
          <p className="text-xs font-bold text-[#A3AED0] mb-4 px-4">OTHER</p>
          <div className="space-y-1">
            <NavItem icon={Headphones} label="Support" />
            <NavItem icon={Settings} label="Settings" />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
