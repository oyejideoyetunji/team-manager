import React from "react";
import images from "../../assets/images";
import { dashboardRoutes } from "../../lib/routes";
import UserCard from "../usersCard";

interface SideBarProps {
    setRoute(label: string): void
    currentRoute: string
    collapsed: boolean
    onToggleCollapse(): void
}

const SideBar = ({ setRoute, currentRoute, collapsed, onToggleCollapse }: SideBarProps) => {

    const isCurrentRoute = (label: string) => label.toLowerCase() === currentRoute.toLowerCase() 

    return (
        <aside className={`side-bar ${collapsed && "collapsed"}`}>
            <div
                className={`brand-column w-100 flex align-center justify-between ${collapsed && "brand-column-cllp"}`}
            >
                <div
                    className="w-fit flex align-center brand-logo"
                >
                    <span
                        className={`blue-circle-icon ${
                            collapsed
                            ? "avatar-small" : "avatar"
                        } flex align-center justify-center font-s-16 m-r-12`}
                    >
                        <i className="fas fa-layer-group" />
                    </span>
                    <span
                        className={`dark-blue font-s-24 font-w-600 ${collapsed && "collapse-hide collapse-transition"}`}>
                        PJ
                    </span>
                </div>

                <span
                    className="font-s-18 dark-blue collapse-icon cursor-pointer collapse-transition"
                    onClick={onToggleCollapse}
                >
                    <i className={`fas fa-arrow-${collapsed ? "right" : "left"}`} />
                </span>
            </div>
        
            {
                dashboardRoutes.map(route => (
                    <div
                        key={route.label}
                        className={
                            `side-menu-item flex align-center p-y-12 m-y-12 cursor-pointer ${
                                isCurrentRoute(route.label)
                                    ? "active" : ""
                                }`
                        }
                        onClick={() => setRoute(route.label)}
                    >
                        <span
                            className={
                                `m-r-12 font-s-14 ${isCurrentRoute(route.label) ? "primary-blue" : "grey2"}`
                            }
                        >
                            <i className={route.icon} />
                        </span>
                        <span className={
                            `font-s-14 font-w-500 ${
                                isCurrentRoute(route.label) ? "primary-blue" : "dark-blue"
                            } ${collapsed && "collapse-hide collapse-transition"}`
                        }>
                            {route.label}
                        </span>
                    </div>
                ))
            }

            <div
                className={
                    `create-task-tab flex align-center justify-between ${collapsed && "create-task-tab-cllp"}`
                }
            >
                <span
                    className={`font-s-14 f-w-700 dark-blue ${collapsed && "collapse-hide"}`}
                >
                    Create new task
                </span>
                <span
                    className={`blue-circle-icon ${collapsed ? "avatar-small" : "avatar"} flex align-center justify-center font-s-16`}
                >
                    <i className="fas fa-plus" />
                </span>
            </div>

            <section className="user-column">
                <UserCard
                    minimize={collapsed}
                    iconName="fas fa-angle-up"
                    user={{ name: "Fiana A.", email: "fianna@mail.com", avatarUrl: images.user1 }}
                />
            </section>
        </aside>
    )
}

export default SideBar
