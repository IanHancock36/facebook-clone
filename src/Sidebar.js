import React from "react";
import "./Sidebar.css";
import SideBarRow from "./SideBarRow";
import ChatIcon from "@material-ui/icons/Chat";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import EmojiflagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People"
import StorefrontIcon from "@material-ui/icons/Storefront"
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined"

function Sidebar() {
  return (
    <div className="sidebar">
      <SideBarRow  src ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jesuschristsavior.net%2FJesus.html&psig=AOvVaw3VDy5tA54Z5v78SiNoS5PC&ust=1613274401407000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICEiM_55e4CFQAAAAAdAAAAABAD" title ="Ian Hancock" />
      <SideBarRow  Icon = {LocalHospitalIcon} title = "COVID-19 Information Center" />
      <SideBarRow  Icon = {EmojiflagsIcon} title="Pages" />
      <SideBarRow Icon = {PeopleIcon} title="Friends" />
      <SideBarRow Icon = {ChatIcon} title="Messenger" />
      <SideBarRow Icon = {StorefrontIcon} title="Marketpkace" />
      <SideBarRow Icon = {VideoLibraryIcon}title="Videos" />
      <SideBarRow Icon = {ExpandMoreOutlined}title="Marketplace" />

    </div>
  );
}

export default Sidebar;
