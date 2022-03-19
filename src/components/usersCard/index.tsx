import React from "react";
import { User } from "../../lib/types";

interface UserCardProps {
    user: User
    iconName: string
    minimize?: boolean
}

const UserCard = ({ user, iconName, minimize }: UserCardProps) => {
    
    return (
        <div
            className="flex align-center justify-between"
        >
            <span className="avatar" style={{ backgroundImage: `url(${user.avatarUrl})` }} />
            <div className={`flex-col m-x-12 ${minimize ? "hide" : "flex"}`}>
                <span className="font-s-14 dark-blue f-w-700">
                    {user.name}
                </span>
                <span className="font-s-14 grey2 f-w-700">
                    {user.email}
                </span>
            </div>
            <span className={`font-s-20 grey2 ${minimize && "hide"}`}>
                <i className={iconName} />
            </span>
        </div>
    )
}

export default UserCard
