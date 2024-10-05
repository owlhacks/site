
type ContentType = {
    title: string;
    description?: string;
    guest?: string;
    photo_src?: string;
    linkedin_url?: string;
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
                description: "Join Dr. Kristin Austin, VP of I.D.E.As. at Rewriting the Code, to explore how we can reimagine inclusivity by questioning Who is at the table, who is missing, and for whom was it built?' Let's build equitable spaces in tech together.",
                photo_src: "/guest_speaker/kristin_austin.jpg",
                guest: "Dr. Kristin Austin @ Rewriting the Code",
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
                type: "workshop",
                title: "Impact of Technology Outcomes that make for Equitable Global Products",
                description: "Learn what Google's Product Inclusion and Equity team are deploying to help identify and measure inclusion and equity within products. We will review frameworks and approaches, in addition to understanding publicly available tools such as Skin Tone Research with MST Scale.",
                photo_src: "/guest_speaker/dalain_williams.png",
                linkedin_url: "https://www.linkedin.com/in/dalain/",
                guest: "Dalain Williams @ Google",

            },
        ],
    },
    {
        start_time: "2:30 PM",
        content: [
            {
                type: "workshop",
                title: "Design Thinking and Product Innovation",
                description: "Learn about the foundations of design thinking- a vital UX framework for creating products for human beings. We will jump into the 'Ideation' section by nailing down the scope for your own project and will cover how to whittle down on your MVP scenarios. Lastly, we will chat about UX career topics such as building out soft skills, developing yourself as a young career professional, and how to create blueprints for yourself if you choose to pivot or explore new fields/jobs/concentrations.",
                photo_src: "/guest_speaker/khrys_oros.png",
                guest: "Khrys Oros @ Ford",
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
                type: "workshop",
                title: "Figma Foundations: Youtube Recreation",
                guest: "Hannah Strayline @ Microsoft",
                photo_src: "/guest_speaker/hannah_strayline.png"
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
                description: "",
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
                description: "Lunch will be served and judging will begin."
            },
        ]
    },
    {
        start_time: "1:30 PM",
        content: [
            {
                title: "Closing Ceremony / Awards",
                description: "Join us for the closing ceremony to celebrate the end of OwlHacks 2024 and announce the winners of the hackathon."
            }
        ]
    }
]

export {
    SundayEvents,
    SaturdayEvents,
};

export type { EventType };