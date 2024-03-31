import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

//Assets
import carbonCellLogo from "../assets/images/carbon_cell_logo.png";
import { Icons } from "./Icons";

const commonNavLinkClasses =
  "flex items-center font-medium transition-colors p-1";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`sidebar h-full flex flex-col bg-bg-secondary p-4 rounded-r-lg ${
        isCollapsed ? "w-auto" : "w-64"
      }`}
    >
      <div className="logo my-8 flex items-center justify-between">
        {!isCollapsed && (
          <Link to="/" className="w-3/5">
            <img src={carbonCellLogo} alt="carbon cell" />
          </Link>
        )}

        <button onClick={() => setIsCollapsed(!isCollapsed)} className="px-2">
          <Icons.MenuIcon className="text-white w-8" />
        </button>
      </div>

      {!isCollapsed && (
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded-lg bg-accent w-full mb-8"
        />
      )}

      <div className="flex-grow flex flex-col justify-between">
        <ul>
          {sidebarMenuData.map((item) => (
            <NavLinkItem
              icon={item.icon}
              link={item.link}
              title={item.title}
              key={item.title}
              isCollapsed={isCollapsed}
              disabled={item.disabled}
            />
          ))}
        </ul>

        <div>
          <ul>
            {bottomMenuData.map((item) => (
              <NavLinkItem
                title={item.title}
                icon={item.icon}
                link={item.link}
                isCollapsed={isCollapsed}
                disabled={item.disabled}
              />
            ))}
          </ul>

          <div className="bg-accent p-2 mt-6 rounded-lg gap-2 flex items-center">
            <img
              src="https://api.dicebear.com/8.x/adventurer/svg?seed=Missy&backgroundType=solid,gradientLinear&backgroundColor=b6e3f4"
              alt="avatar"
              className="w-8 h-auto rounded-full"
            />

            {!isCollapsed && (
              <div>
                <p className="font-medium text-white leading-tight text-sm">
                  James Simson
                </p>
                <p className="text-sm text-gray-300">james@simson.com</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const NavLinkItem = ({ title, icon, link, isCollapsed, disabled }) => (
  <li>
    <NavLink
      to={link}
      style={{
        pointerEvents: disabled ? "none" : "all",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      className={({ isActive }) =>
        isActive
          ? `${commonNavLinkClasses} text-primary`
          : `${commonNavLinkClasses} hover:text-primary text-white`
      }
    >
      {icon}
      {!isCollapsed && <p>{title}</p>}
    </NavLink>
  </li>
);

const sidebarMenuData = [
  {
    title: "Population Graph",
    link: "/",
    icon: <Icons.PopulationGraph className="w-10" />,
    disabled: false,
  },
  {
    title: "Cryptocurrency",
    link: "/cryptocurrency",
    icon: <Icons.Cryptocurrency className="w-10" />,
    disabled: false,
  },
];

const bottomMenuData = [
  {
    title: "Notifications",
    link: "/notifications",
    icon: <Icons.Notification className="w-10" />,
    disabled: true,
  },
  {
    title: "Support",
    link: "/support",
    icon: <Icons.Support className="w-10" />,
    disabled: true,
  },
  {
    title: "Settings",
    link: "/settings",
    icon: <Icons.Cog className="w-10" />,
    disabled: true,
  },
];
