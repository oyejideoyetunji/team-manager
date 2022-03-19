import React, { ReactNode, useState } from "react";
import SideBar from "../sideBar";
import TopBar from "../topBar";

interface LayoutProps  {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {

    const [currentRoute, setCurrentRoute] = useState("Projects")
    const [collapseSidebar, setCollapseSidebar] = useState(false)

    return (
        <main className="w-100 container-layout">

            <SideBar
                currentRoute={currentRoute}
                setRoute={setCurrentRoute}
                collapsed={collapseSidebar}
                onToggleCollapse={() => setCollapseSidebar(!collapseSidebar)}
            />

            <section
                className={`main-content p-l-40 p-r-28 ${collapseSidebar && "expanded"}`}
            >
                <TopBar currentRoute={currentRoute} />
                <>
                    {children}
                </>
            </section>
        </main>
    )
}


export default Layout
