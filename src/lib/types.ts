export interface User {
    id: string | number
    name: string
    email: string
    avatarUrl?: string
    role?: string
}

export type TaskColorScheme = {
    light: string
    dark: string
}

export interface Task {
    title: string
    startDayIndex: number
    durationInDays: number
    progressInPercent: number
    colorScheme: TaskColorScheme
}

export interface WorkTicket {
    staff: User
    task: Task
}
