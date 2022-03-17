import React from "react";

interface TopBarProps {
    currentRoute: string
}

const TopBar = ({currentRoute}: TopBarProps) => {
    return (
        <section
            className="top-bar w-100 flex align-center justify-between p-t-28 p-b-22 p-l-32 p-r-22"
        >
            <div className="flex align-center">
                <span className="font-s-16 dark-blue f-w-600 m-r-10">
                    {currentRoute}
                </span>
                <span className="font-s-18 grey1 m-r-10">
                    <i className="fas fa-angle-right" />
                </span>
                <span className="font-s-16 grey1 f-w-700">
                    GSE Banking App
                </span>
            </div>

            <div className="flex align-center justify-end">
                <div className="notification-wrp flex align-center justify-end">
                    <span className="font-s-16 dark-blue">
                        <i className="fas fa-comment-alt" />
                    </span>
                    <span className="font-s-16 dark-blue m-x-22">
                        <i className="fas fa-bell" />
                    </span>
                </div>

                <div className="flex align-center justify-end">
                    <span className="top-bar-avatar avatar m-l-22">
                    </span>

                    <span className="font-s-14 dark-blue f-w-700 m-l-22">
                        RonasIT
                    </span>
                    <span className="font-s-16 grey1 m-l-22">
                        <i className="fas fa-angle-down" />
                    </span>
                </div>
            </div>
        </section>
    )
}

export default TopBar
