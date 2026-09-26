type ContentType = {
    title: string;
    description?: string;
    guest?: string;
    photo_src?: string;
    linkedin_url?: string;
    type?: string;
    room?: string;
};

type EventType = {
    start_time: string;
    content: ContentType[];
};

const SaturdayEvents: EventType[] = [
    {
        start_time: "8:00 AM",
        content: [
            {
                title: "Check-In + Breakfast",
                description: "T-shirt & merch distribution.",
            },
        ],
    },
    {
        start_time: "9:00 AM",
        content: [
            {
                title: "Opening Ceremony",
            },
        ],
    },
    {
        start_time: "10:00 AM",
        content: [
            {
                title: "Hacking Starts!",
            },
            {
                title: "Team Matching Mixer",
                description: "Find teammates and form your hackathon squad.",
            },
        ],
    },
    {
        start_time: "11:00 AM",
        content: [
            {
                title: "How to Turn Your Project Into a Job Offer",
                description: "11:00 AM \u2013 12:00 PM",
                guest: "Andrew Tran",
                photo_src: "/guest_speaker/andrew_tran.png",
                type: "workshop",
                room: "SERC 110AB",
            },
        ],
    },
    {
        start_time: "11:30 AM",
        content: [
            {
                title: "My Journey in Industry: LegalTech via EDRM + Owl-to-Owl Program",
                description: "11:30 AM \u2013 12:30 PM",
                guest: "Dean Athanasopoulos",
                photo_src: "/guest_speaker/dean_athanasopoulos.jpg",
                room: "Engineering Fishbowl",
            },
            {
                title: "Navigating the Corporate World",
                description: "11:30 AM \u2013 12:30 PM",
                guest: "Hannah Strayline",
                photo_src: "/guest_speaker/hannah_strayline.png",
                room: "SERC 116",
            },
        ],
    },
    {
        start_time: "12:00 PM",
        content: [
            {
                title: "Intro to Google AI Studio",
                description: "12:00 \u2013 12:30 PM",
                guest: "MLH",
                photo_src: "https://static.mlh.io/brand-assets/logo/official/mlh-logo-white.svg",
                type: "workshop",
                room: "SERC 110AB",
            },
        ],
    },
    {
        start_time: "12:30 PM",
        content: [
            {
                title: "Lunch",
            },
        ],
    },
    {
        start_time: "1:30 PM",
        content: [
            {
                title: "Networking Fair / Career + Club Fair",
                description: "1:30 \u2013 3:00 PM. Robotics, Adobe, Celsius, Monster, Red Bull, NSBE, Hacker Organization, Student Success Center.",
                room: "Main Lobby",
            },
        ],
    },
    {
        start_time: "3:00 PM",
        content: [
            {
                title: "Hacking w/ GitHub Copilot",
                description: "3:00 \u2013 3:30 PM",
                guest: "MLH",
                photo_src: "https://static.mlh.io/brand-assets/logo/official/mlh-logo-white.svg",
                type: "workshop",
                room: "SERC 116",
            },
            {
                title: "AI Research and the Changing Industry",
                description: "2:30 \u2013 3:00 PM",
                guest: "Ian DeGonia",
                photo_src: "/guest_speaker/ian_degonia.png",
                room: "SERC 110AB",
            },
        ],
    },
    {
        start_time: "3:30 PM",
        content: [
            {
                title: "Social Event: Kahoot Buzzer Trivia",
                description: "3:30 \u2013 4:30 PM. Team trivia \u2014 solo hackers can form teams for trivia\u2019s sake!",
                room: "SERC 110AB",
            },
        ],
    },
    {
        start_time: "4:30 PM",
        content: [
            {
                title: "How AI Has Changed, and Will Continue to Change, the Workplace Experience",
                description: "4:30 \u2013 5:00 PM",
                guest: "Tim Dodd",
                photo_src: "/guest_speaker/tim_dodd.jpg",
                room: "SERC 110AB",
            },
        ],
    },
    {
        start_time: "5:00 PM",
        content: [
            {
                title: "Deploy Now",
                description: "5:00 \u2013 6:00 PM",
                guest: "Ian Applebaum",
                photo_src: "/guest_speaker/ianapplebaum.jpg",
                type: "workshop",
                room: "Engineering Fishbowl",
            },
            {
                title: "MLH Bob Ross Painting",
                description: "5:00 \u2013 6:00 PM",
                guest: "MLH",
                photo_src: "https://static.mlh.io/brand-assets/logo/official/mlh-logo-white.svg",
                room: "SERC 110AB",
            },
            {
                title: "AI-Assisted Building in a Weekend",
                description: "5:00 \u2013 6:00 PM",
                type: "workshop",
                room: "SERC 116",
            },
        ],
    },
    {
        start_time: "6:00 PM",
        content: [
            {
                title: "Dinner",
            },
        ],
    },
    {
        start_time: "12:00 AM",
        content: [
            {
                title: "Midnight Activity",
                description: "Roblox, Scavenger Hunt, and movie night.",
                room: "SERC 110AB",
            },
        ],
    },
];

const SundayEvents: EventType[] = [
    {
        start_time: "8:00 AM",
        content: [
            {
                title: "Breakfast",
            },
        ],
    },
    {
        start_time: "9:00 AM",
        content: [
            {
                title: "Wrap Up Projects",
                description: "Last touches to your projects before submission.",
            },
        ],
    },
    {
        start_time: "10:00 AM",
        content: [
            {
                title: "Projects DUE",
                description: "Judges arrive and judging orientation begins.",
            },
        ],
    },
    {
        start_time: "10:30 AM",
        content: [
            {
                title: "Career + Club Expo",
                description: "10:00 AM \u2013 12:00 PM. SAP, ACM-W/ACM, and OwlHack Recruiting.",
                room: "Main Lobby",
            },
        ],
    },
    {
        start_time: "11:00 AM",
        content: [
            {
                title: "Demo-ing!",
                description: "Show off your project to judges and fellow hackers.",
            },
        ],
    },
    {
        start_time: "11:30 AM",
        content: [
            {
                title: "Lunch",
            },
        ],
    },
    {
        start_time: "12:30 PM",
        content: [
            {
                title: "Career + Alumni Panel",
                description: "12:30 \u2013 1:30 PM. Featuring Hannah S, Yashi, Seth, Megha, Kathryn, Caitlyn, and Andriy.",
                room: "SERC 116",
            },
            {
                title: "Judging",
                description: "Judges finalize their decisions.",
            },
        ],
    },
    {
        start_time: "2:00 PM",
        content: [
            {
                title: "Closing Ceremony & Winners Announced",
            },
        ],
    },
];

export {
    SaturdayEvents, SundayEvents
};

    export type { EventType };

