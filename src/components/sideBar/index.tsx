import React from "react";
import { dashboardRoutes } from "../../lib/routes";
import demoAvatar from "../../assets/images/demo-avatar.png";

interface SideBarProps {
    setRoute(label: string): void
    currentRoute: string
}

const SideBar = ({ setRoute, currentRoute }: SideBarProps) => {

    const isCurrentRoute = (label: string) => label.toLowerCase() === currentRoute.toLowerCase() 

    return (
        <aside className="side-bar ">
            <div
                className="brand-column w-100 flex align-center justify-between"
            >
                <div
                    className="w-fit flex align-center"
                >
                    <span
                        className="blue-circle-icon avatar flex align-center justify-center font-s-16 m-r-12"
                    >
                        <i className="fas fa-layer-group" />
                    </span>
                    <span className="dark-blue font-s-24 font-w-600">
                        PJ
                    </span>
                </div>

                <span className="font-s-18 dark-blue">
                    <i className="fas fa-arrow-left" />
                </span>
            </div>
        
            {
                dashboardRoutes.map(route => (
                    <div
                        key={route.label}
                        className="flex align-center m-y-28 cursor-pointer"
                        onClick={() => setRoute(route.label)}
                    >
                        <span
                            className={
                                `m-r-12 font-s-14 ${isCurrentRoute(route.label) ? "primary-blue" : "grey1"}`
                            }
                        >
                            <i className={route.icon} />
                        </span>
                        <span className={
                            `font-s-14 f-w-700 ${isCurrentRoute(route.label) ? "primary-blue" : "dark-blue"}`
                        }>
                            {route.label}
                        </span>
                    </div>
                ))
            }

            <div
                className="create-task-tab flex align-center justify-between"
            >
                <span className="font-s-14 f-w-700 dark-blue">
                    Create new task
                </span>
                <span
                    className="blue-circle-icon avatar flex align-center justify-center font-s-16"
                >
                    <i className="fas fa-plus" />
                </span>
            </div>

            <div
                className="user-column flex align-center justify-between"
            >
                <span className="side-bar-avatar avatar" style={{backgroundImage: `url(${demoAvatar})`}} />
                <div className="flex flex-col m-x-12">
                    <span className="font-s-14 dark-blue f-w-700">
                        Fianna A.
                    </span>
                    <span className="font-s-14 grey1 f-w-700">
                        fianna@gmail.com
                    </span>
                </div>
                <span className="font-s-20 grey1">
                    <i className="fas fa-angle-up" />
                </span>
            </div>
        </aside>
    )
}

export default SideBar
