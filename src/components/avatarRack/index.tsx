import React from "react";

interface AvatarRackProps {
    avatars: string[]
}

const AvatarRack = ({ avatars }: AvatarRackProps) => {
    const minIndex = 0
    const avatarLeftPositionFactor = 20
    const rackLength = 3
    const avatarsLeft = avatars.length - rackLength

    const rackAvatars = avatars.slice(minIndex, rackLength)

    return (
        <section className="avatar-rack">
            {
                rackAvatars.map((itm, idx) => (
                    <div
                        className="avatar-wrp"
                        style={{
                            zIndex: idx,
                            left: `${idx * avatarLeftPositionFactor}px`
                        }}
                        key={`${itm}${idx}`}
                    >
                        <div
                            className="avatar-small"
                            style={{
                                backgroundImage: `url(${itm})`
                            }}
                        />
                    </div>
                ))
            }
            <div
                className="avatar-wrp"
                style={{
                    zIndex: rackLength,
                    left: `${rackLength * avatarLeftPositionFactor}px`
                }}
            >
                <div className="avatar-small avatar-count flex align-center justify-center font-s-12">
                    +{avatarsLeft < minIndex ? minIndex : avatarsLeft}
                </div>
            </div>
        </section>
    )
}

export default AvatarRack

