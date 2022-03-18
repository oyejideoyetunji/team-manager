import React from "react";
import Button from "../button";



const DropDownBtn = () => {
    return (
        <Button className="hollow plain round drp-dwn-btn">
            <span className="dark-blue placeholder m-r-8">
                Month
            </span>
            <span>
                <i className="fas fa-angle-down" />
            </span>
        </Button>
    )
}

export default DropDownBtn
