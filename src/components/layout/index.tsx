import React, { useState } from "react";
import SideBar from "../sideBar";
import TopBar from "../topBar";

const Layout = () => {

    const [currentRoute, setCurrentRoute] = useState("Projects")

    return (
        <main className="w-100 container-layout">

            <SideBar currentRoute={currentRoute} setRoute={setCurrentRoute} />

            <section className="main-content">
                <TopBar currentRoute={currentRoute} />
            </section>
        </main>
    )
}


export default Layout
