import React from "react";
import UserCard from "../usersCard";
import images from "../../assets/images";
import { getNineDaysBeforeAndSevenDaysAfterDate } from "../../lib/utils/dateTime";


const TaskChart = () => {
    return (
        <section className="task-chart w-100 m-y-18 p-y-32 overflow-x-auto">
            <section className="w-100 flex align-center">
                {
                    getNineDaysBeforeAndSevenDaysAfterDate(new Date()).map(date => (
                        <div key={date.toDateString()} className="date-col">
                            <div
                                className=
                                {`date-cell w-100 flex align-center justify-center ${
                                    date.toDateString() === new Date().toDateString()
                                        ? "active" : ""}`
                                }
                            >
                                <span className="grey2 font-s-14 font-w-400 active">
                                    {date.toDateString().slice(0, 1).toUpperCase()}
                                </span>
                                <span className="dark-blue font-s-14 font-w-400 active">
                                    {date.getDate()}
                                </span>
                            </div>
                            <div className="date-bar w-100 flex justify-center">
                                {date.toDateString() === new Date().toDateString() && (
                                    <div className="highlight" />
                                )}
                            </div>
                        </div>
                    ))
                }
            </section>

            <section
                className="task-row"
                style={{ top: `${110}px` }}
            >
                <div
                    className="user-card-wrapper flex align-center"
                >
                    <UserCard
                        iconName="fas fa-ellipsis-v"
                        user={{ name: "Fiana A.", email: "fianna@mail.com", avatarUrl: images.user4 }}
                    />
                </div>
                <div
                    className="progress-bar flex align-center justify-between"
                    style={{
                        backgroundColor: "#e3fafa",
                        width: "calc(100% / 17 * 8)",
                        color: "#39CDCC",
                        left: "calc(100% / 17 * 4)"
                    }}
                >
                    <div
                        className="thumb flex align-center justify-between"
                        style={{
                            backgroundColor: "#39CDCC",
                            width: "60%",
                            color: "#ffffff",
                        }}
                    >
                        <div className="flex align-center">
                            <span className="dot-wrp flex align-center justify-center m-r-12">
                                <span className="dot"></span>
                            </span>
                            <span></span>
                        </div>
                    </div>

                    <span className="font-s-14 font-w-700 m-r-12">
                        60%
                    </span>
                </div>
            </section>
        </section>
    )
}

export default TaskChart
