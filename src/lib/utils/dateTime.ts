const zeroIndexOffset = 1

export const getXdaysFromDate = (X: number, date: Date) => new Date(
    `${new Date(
            new Date(date)
            .setDate(new Date(date).getDate() + X),
        ).getMonth() + zeroIndexOffset
    }/${new Date(
            new Date(date)
            .setDate(new Date(date).getDate() + X),
        ).getDate()
    }/${new Date(
            new Date(date)
            .setDate(new Date(date).getDate() + X),
        ).getFullYear()
    }`,
)

export const getXdaysBeforeDate = (X: number, date: Date) => new Date(
    `${new Date(
        new Date(date)
            .setDate(new Date(date).getDate() - X),
    ).getMonth() + zeroIndexOffset
    }/${new Date(
        new Date(date)
            .setDate(new Date(date).getDate() - X),
    ).getDate()
    }/${new Date(
        new Date(date)
            .setDate(new Date(date).getDate() - X),
    ).getFullYear()
    }`,
)

export function getNineDaysBeforeAndSevenDaysAfterDate(date: Date) {
    return Array.from({ length: 17 }).map((_, itm) => itm < 10
        ? getXdaysBeforeDate(10 - (itm + zeroIndexOffset), date)
        : getXdaysFromDate((itm + zeroIndexOffset) - 10, date)
    )
}

