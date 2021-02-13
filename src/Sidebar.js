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
      <SidebarRow  src ="" title ="Ian" />
      <SidebarRow  Icon = {LocalHospitalIcon} title ="COVID-19 Information Center" />
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
