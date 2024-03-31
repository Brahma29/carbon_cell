import React from "react";
import { PopulationGraph } from "./PopulationGraph.icon";
import { MenuIcon } from "./Menu.icon";
import { Cryptocurrency } from "./Cryptocurrency.icon";
import { Metamask } from "./Metamask.icon";
import { Notification } from "./Notification.icon";
import { Support } from "./Support.icon";
import { Cog } from "./Cog.icon";

export const Icons = ({ children }) => {
  return <div className="w-6 h-7">{children}</div>;
};

Icons.PopulationGraph = PopulationGraph;
Icons.MenuIcon = MenuIcon;
Icons.Cryptocurrency = Cryptocurrency;
Icons.Metamask = Metamask;
Icons.Notification = Notification;
Icons.Support = Support;
Icons.Cog = Cog;
