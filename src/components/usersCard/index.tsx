import React from "react";
import { User } from "../../lib/types";

interface UserCardProps {
    user: User
    iconName: string
}

const UserCard = ({ user, iconName }: UserCardProps) => {
    
    return (
        <div
            className="flex align-center justify-between"
        >
            <span className="avatar" style={{ backgroundImage: `url(${user.avatarUrl})` }} />
            <div className="flex flex-col m-x-12">
                <span className="font-s-14 dark-blue f-w-700">
                    {user.name}
                </span>
                <span className="font-s-14 grey2 f-w-700">
                    {user.email}
                </span>
            </div>
            <span className="font-s-20 grey2">
                <i className={iconName} />
            </span>
        </div>
    )
}

export default UserCard
