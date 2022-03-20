import { useMemo } from "react"
import { TaskColorScheme, User, WorkTicket } from "../types"

const getRandomIntInRange = (min: number, max: number) =>
    min + Math.round(Math.random() * (max - min))

const pickRandomItemWithoutReplacement = (list: any[]) => {
    const [item] = list.splice(getRandomIntInRange(0, list.length - 1), 1)
    return item
}

const initWorkTickets = (
    users: User[], tasks: string[], colors: TaskColorScheme[]
): WorkTicket[] => {

    let taskItems = [...tasks]
    let taskColors = [...colors]
    const durationInDays = getRandomIntInRange(6, 15)

    const tickets = users.map(user => ({
        staff: user,
        task: {
            title: pickRandomItemWithoutReplacement(taskItems),
            durationInDays,
            startDayIndex: getRandomIntInRange(0, 17 - durationInDays),
            progressInPercent: 0,
            colorScheme: pickRandomItemWithoutReplacement(taskColors)
        }
    }))
    return tickets
}

export const useInitWorkTickets = (
    users: User[], tasks: string[], colors: TaskColorScheme[]
) => {
    const workTickets = useMemo(
        () => initWorkTickets(users, tasks, colors),
        [users, tasks, colors]
    )

    return [workTickets]
}

export const updateTicketsProgress = (tickets: WorkTicket[]): WorkTicket[] =>
    tickets.map(({ staff, task }) => {
        if (task.progressInPercent < 100) {
            const progressUpdate = task.progressInPercent + getRandomIntInRange(10, 30)
            return {
                staff,
                task: {
                    ...task,
                    progressInPercent: progressUpdate >= 100 ? 100 : progressUpdate
                }
            }
        } else {
            return { staff, task }
        }
    })

const getCumulativeProgress = (tickets: WorkTicket[]) =>
    tickets.reduce((prev, curr) => prev += curr.task.progressInPercent, 0) / tickets.length

export const useCumulativeProgress = (tickets: WorkTicket[]) => {
    const cumulativeProgress = useMemo(
        () => getCumulativeProgress(tickets),
        [tickets]
    )

    return [cumulativeProgress]
}