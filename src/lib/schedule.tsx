
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
    content : ContentType[];
};

const SaturdayEvents: EventType[] = [
    {
        start_time: "TBD",
        content: [
            {
                title: "Schedule coming soon",
                description: "Saturday's events will be posted closer to the hackathon.",
            },
        ],
    },
];

const SundayEvents: EventType[] = [
    {
        start_time: "TBD",
        content: [
            {
                title: "Schedule coming soon",
                description: "Sunday's events will be posted closer to the hackathon.",
            },
        ],
    },
];

export {
    SundayEvents,
    SaturdayEvents,
};

export type { EventType };
