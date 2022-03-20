import React from "react";
import UserCard from "../usersCard";
import { getNineDaysBeforeAndSevenDaysAfterDate } from "../../lib/utils/dateTime";
import { WorkTicket } from "../../lib/types";

interface TaskChartProps {
    workTickets: WorkTicket[]
}

const TaskChart = ({ workTickets }: TaskChartProps) => {

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

            {
                workTickets.map(({ staff, task }, idx) => (
                    <section
                        key={staff.id}
                        className="task-row"
                        style={{ top: `${100 * (idx + 1)}px` }}
                    >
                        <div
                            className="user-card-wrapper flex align-center"
                        >
                            <UserCard
                                iconName="fas fa-ellipsis-v"
                                user={staff}
                            />
                        </div>
                        <div
                            className="progress-bar flex align-center"
                            style={{
                                backgroundColor: task.colorScheme.light,
                                width: `calc(100% / 17 * ${task.durationInDays})`,
                                color: task.colorScheme.dark,
                                left: `calc(100% / 17 * ${task.startDayIndex})`
                            }}
                        >
                            <div
                                className="thumb flex align-center"
                                style={{
                                    backgroundColor: task.colorScheme.dark,
                                    width: `${task.progressInPercent}%`,
                                    color: "#ffffff",
                                }}
                            >
                                <div className="flex align-center m-x-12">
                                    <span className="dot-wrp flex align-center justify-center">
                                        <span className="dot"></span>
                                    </span>
                                </div>
                                <span className="title-txt font-s-14 font-w-700">
                                    {task.title}
                                </span>
                                {task.progressInPercent >= 90 && (
                                    <span className="completion-txt font-s-14 font-w-700">
                                        {`${task.progressInPercent}%`}
                                    </span>
                                )}

                            </div>

                            {task.progressInPercent < 90 && (
                                <span className="progress-txt font-s-14 font-w-700">
                                    {`${task.progressInPercent}%`}
                                </span>
                            )}
                        </div>
                    </section>
                ))
            }

        </section>
    )
}

export default TaskChart
