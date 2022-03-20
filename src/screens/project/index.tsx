import React, { useEffect, useState } from "react"
import Button from "../../components/button"
import DropDownBtn from "../../components/dropDownBtn"
import AvatarRack from "../../components/avatarRack"
import images from "../../assets/images"
import TaskChart from "../../components/taskChart"
import { updateTicketsProgress, useCumulativeProgress, useInitWorkTickets } from "../../lib/utils/workTicket";
import { staffs, taskColorSchemes, tasksTitles } from "../../lib/static";


const Project = () => {

    const [initialWorkTickets] = useInitWorkTickets(staffs, tasksTitles, taskColorSchemes)

    const [workTickets, setWorkTickets] = useState(initialWorkTickets)
    const [cumulativeProgress] = useCumulativeProgress(workTickets)

    useEffect(() => {
        let isMounted = true

        const x = setInterval(() => {
            if (isMounted && cumulativeProgress < 100) {
                setWorkTickets(prevTickets => updateTicketsProgress(prevTickets))
            }
        }, 10000)

        return () => {
            isMounted = false
            clearInterval(x)
        }
    }, [cumulativeProgress])

    return (
        <section className="w-100 project-page">
            <section className="w-100 flex align-center justify-between m-y-18">
                <section>
                    <h2 className="font-s-22 font-w-500 dark-blue">
                        GSE Banking App
                    </h2>
                    <div className="flex align-center m-y-4">
                        <span className="font-s-14 font-w-500 grey2">
                            {`${cumulativeProgress}%`}
                        </span>
                        <span className="cumul-progress-bar m-l-8">
                            <span
                                style={{ width: `${cumulativeProgress}%`}}
                            />
                        </span>
                    </div>
                </section>

                <section className="flex align-center justify-end">
                    <Button className="dashed plain">
                        <span className="m-r-8">
                            <i className="fas fa-plus" />
                        </span>
                        <span>
                            Invite
                        </span>
                    </Button>
                    <section className="avatar-rack-wrapper m-l-20">
                        <AvatarRack avatars={Object.values(images)} />
                    </section>
                </section>
            </section>

            <section className="w-100 flex align-center justify-between m-y-16">
                <div className="flex align-center">
                    <h5 className="font-s-16 dark-blue font-w-500 m-r-22">
                        March 2022
                    </h5>
                    <span className="font-s-16 grey1 m-r-10">
                        <i className="fas fa-angle-left" />
                    </span>
                    <span className="font-s-16 grey1">
                        <i className="fas fa-angle-right" />
                    </span>
                </div>

                <div className="flex align-center justify-end">
                    <span className="dark-blue font-s-16 m-r-22 cursor-pointer">
                        <i className="fas fa-search" />
                    </span>
                    <DropDownBtn />
                </div>
            </section>

            <TaskChart workTickets={workTickets} />
        </section>
    )
}

export default Project
