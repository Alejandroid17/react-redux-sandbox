import React from 'react';
import Sidebar from "react-sidebar";
import './style.css'

function AppSidebar(props) {

    const {
        content,
        sidebarState,
        onSetSidebarOpen
    } = props;

    return (
        <Sidebar
            sidebarClassName="sidebar"
            sidebar={<b>Sidebar</b>}
            open={sidebarState}
            onSetOpen={onSetSidebarOpen}
            styles={{ sidebar: { background: "white" } }}
        >
            {content}
        </Sidebar>
    );
}

export default AppSidebar;