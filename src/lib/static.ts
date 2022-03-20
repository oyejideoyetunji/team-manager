import images from "../assets/images";
import { User } from "./types";

export const tasksTitles = [
    "A task here",
    "Task it is",
    "Another staff task",
    "Oh just some task",
    "great tasking task",
    "Task for next setup",
    "Peopl's team task",
    "Engineering task",
    "Management task",
    "Top tier task"
]

export const taskColorSchemes = [
    {
        dark: "#a116a3",
        light: "#f4d2f5",
    },
    {
        dark: "#d88588",
        light: "#fae9e9",
    },
    {
        dark: "#5c5856",
        light: "#f1e3dc",
    },
    {
        dark: "#530200",
        light: "#eed7d6",
    },
    {
        dark: "#1695f2",
        light: "#c5e2f7",
    },
    {
        dark: "#1e0e36",
        light: "#e1d4f5",
    },
    {
        dark: "#802029",
        light: "#faeaec",
    },
    {
        dark: "#7e25f4",
        light: "#ede4f8",
    },
    {
        dark: "#153e09",
        light: "#d6f3cd",
    },
    {
        dark: "#b8a14b",
        light: "#f8f6f0",
    }
]

export const staffs: User[] = [
    {
        id: 1,
        name: "Prescott Grayshon",
        email: "pgrayshon0@dion.ne.jp",
        role: "Pharmacist",
        avatarUrl: images.user1,
    },
    {
        id: 2,
        name: "Burg Tether",
        email: "btether1@youtu.be",
        role: "Programmer Analyst I",
        avatarUrl: images.user2,
    },
    {
        id: 3,
        name: "Bradley Gookey",
        email: "bgookey2@thetimes.co.uk",
        role: "Environmental Tech",
        avatarUrl: images.user3,
    },
    {
        id: 4,
        name: "Scottie Bollis",
        email: "sbollis3@icq.com",
        role: "Quality Control Specialist",
        avatarUrl: images.user4,
    },
    {
        id: 5,
        name: "Gary Capper",
        email: "gcapper4@netlog.com",
        role: "VP Quality Control",
        avatarUrl: images.user5,
    },
    {
        id: 6,
        name: "Verile Seamark",
        email: "vseamark5@elpais.com",
        role: "Developer II",
        avatarUrl: images.user6,
    },
    {
        id: 7,
        name: "Kinny Fosdyke",
        email: "kfosdyke6@timesonline.co.uk",
        role: "Automation Specialist I",
        avatarUrl: images.user7,
    },
    {
        id: 8,
        name: "Johnathon Drewett",
        email: "jdrewett7@creativecommons.org",
        role: "Recruiting Manager",
        avatarUrl: images.user8,
    },
    {
        id: 9,
        name: "Tadd Abramovic",
        email: "tabramovic8@oracle.com",
        role: "Health Coach II",
        avatarUrl: images.user9,
    },
    {
        id: 10,
        name: "Lenard Biddlestone",
        email: "lbiddlestone9@newyorker.com",
        role: "Research Assistant III",
        avatarUrl: images.user10,
    },
];
