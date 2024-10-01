
type ContentType = {
    title: string;
    description?: string;
    guest?: string;
    type?: string;
};

type EventType = {
    start_time: string;
    content : ContentType[];
};

const SaturdayEvents: EventType[] = [
    {
        start_time: "8:00 AM",
        content: [
            {
                title: "Check in and Breakfast",
                description: "Check in, grab some breakfast, and get ready for a day of hacking!",
            },

        ]
    },
    {
        start_time: "9:00 AM",
        content: [
            {
                title: "Opening Ceremony",
                description: "Welcome to OwlHacks 2024! Join us for the opening ceremony to kick off the event.",
            },
        ]
    },
    {
        start_time: "10:00 AM",
        content: [
            {
                title: "Career Fair Booths Open",
                description: "Check out the career fair booths to learn more about our sponsors and their opportunities.",
            },
            {
                title: "OwlHacks Project Help Booth Open",
                description: "Need help with your project? Stop by the OwlHacks Project Help Booth to get assistance.",
            },
        ]
    },
    {
        start_time: "10:30 AM",
        content: [
            {
                title: "Team Formation",
                description: "Looking for a team? Join us for team formation to find your perfect team!",
            },
        ]
    },
    {
        start_time: "11:00 AM",
        content: [
            {
                type: "workshop",
                title: "Rewriting the Code",
                description: "RTC something something something",
                guest: "Kristin Austin",
            },
        ],
    },
    {
        start_time: "12:30 PM",
        content: [
            {
                type: "break",
                title: "Lunch Break",
                description: "Enjoy some lunch and take a break from hacking.",
            },
        ],
    },
    {
        start_time: "1:30 PM",
        content: [
            {
                title: "Ethical Hacking",
                guest: "Dalain",
            },
        ],
    },
    {
        start_time: "2:30 PM",
        content: [
            {
                title: "Khrys",
            },
        ],
    },
    {
        start_time: "4:00 PM",
        content: [
            {
                title: "MLH Github Copilot",
            },
        ]
    },
    {
        start_time: "5:00 PM",
        content: [
            {
                title: "Workshop Title",
                guest: "Hannah Strayline",
            },
        ]
    },
    {
        start_time: "6:30 PM",
        content: [
            {
                type: "break",
                title: "Dinner",
                description: "Enjoy some dinner and take a break from hacking.",
            },
        ]
    },
    {
        start_time: "7:30 PM",
        content: [
            {
                title: "Game/Activity with MLH",
                description: "MS Paint Bob Ross + SQL Murder Mystery",
            },
        ]
    },
    {
        start_time: "10:00 PM",
        content: [
            {
                title: "Social Event",
                description: "Powerpoint Roulette + Tech-related Charades",
            },
        ]
    },
    {
        start_time: "12:00 AM",
        content: [
            {
                title: "Midnight Movie",
                description: "Hmmmmm.....",
            },
        ]
    },
];

const SundayEvents: EventType[] = [
    {
        start_time: "9:00 AM",
        content: [
            {
                title: "Breakfast / Soft Deadline",
            },
        ]
    },
    {
        start_time: "10:00 AM",
        content: [
            {
                title: "Project Submission Hard Deadline",
                description: ""
            },
            {
                title: "Get Involved!"
            }
        ]
    },
    {
        start_time: "11:00 AM",
        content: [
            {
                title: "Personal Branding Workshop with Blackstone",
            },
        ]
    },
    {
        start_time: "12:00 PM",
        content: [
            {
                title: "Lunch / Judging Begins",
            },
        ]
    },
    {
        start_time: "1:30 PM",
        content: [
            {
                title: "Closing Ceremony / Awards",
            }
        ]
    }
]

export {
    SundayEvents,
    SaturdayEvents,
};

export type { EventType };