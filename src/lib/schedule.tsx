
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
                description: "Welcome to OwlHacks 2025! Join us for the opening ceremony to kick off the event.",
            },
        ]
    },
    {
        start_time: "10:00 AM",
        content: [
            {
                title: "Intro GitHub Copilot Workshop hosted by MLH",
                description: "Learn how to use GitHub Copilot to help you with your projects.",
            },
            {
                title: "Start Hacking + OwlHacks Project Help Booth Open",
                description: "Need help with your project? Stop by the OwlHacks Project Help Booth to get assistance.",
            },
        ]
    },
    {
        start_time: "10:30 AM",
        content: [
            {
                title: "Intro to Google AI Studio Workshop hosted by MLH",
                description: "Learn how to use Google AI Studio to help you with your projects.",
            },
        ]
    },
    {
        start_time: "11:00 AM",
        content: [
        {
            type: "workshop",
            title: "Secure Your Code: Hands-On Static Analysis Workshop",
            description: "Join Derek Fisher, for a one-hour, instructor-led workshop on integrating and running open-source static analysis tools. Participants will clone a GitHub repo, install a lightweight SAST tool, execute scans, and interpret findings. By the end of the session, you’ll have hands-on experience automating code security checks and the confidence to replicate the workflow in your own projects.",
            photo_src: "/guest_speaker/derekfisher.jpg",
            guest: "Derek Fisher,  CISSP, CSSLP, Director of Temple University’s Cyber Defense and Information Assurance Program",
            linkedin_url: "https://www.linkedin.com/in/derek-fisher-sec-arch/",
        },
        ],
    },
    {
        start_time: "12:00 PM",
        content: [
            {
                type: "break",
                title: "Lunch sponsored by SAP America, Inc.",
                description: "Enjoy some lunch and take a break from hacking.",
            },
        ],
    },
    {
        start_time: "1:00 PM",
        content: [
            {
              type: "workshop",
              title: "Web Jam Starter Pack Workshop",
              description: "Join David Loder, for a front-end focused session on getting a basic website up and running fast. You’ll start with a simple template, customize it with HTML, CSS, and JavaScript, and learn tips for adding interactivity and making it your own — perfect for hackathon participants who want to build a polished site quickly.",
              photo_src: "/guest_speaker/davidloder.jpg",
              guest: "David Loder, President of TUDev and Web Developer for Temple's ACM chapter",
              linkedin_url: "https://www.linkedin.com/in/daveloder/",
            },
          ],
    },
    {
        start_time: "2:00 PM",
        content: [
            {
              
              title: "Mini Club + Donor Fair. Get Involved!",
              description: "Come meet the Temple tech community! Clubs that have endorsed the hackathon and donors. They will be sharing what they do, how you can get involved, and the opportunities they offer to students. A great chance to network, discover new communities, and pick up some cool swag.",
            },
          ],
    },
    {
        start_time: "3:00 PM",
        content: [
            {
              type: "workshop",
              title: "Power Up Your Backend with Python",
              description: "Join Byron Jenkins, Senior Software Engineer, Adjunct Instructor, and Content Creator, for a beginner-friendly backend workshop using Python. Learn how to add server-side functionality to your hackathon project and explore what goes into powering your app beyond the front end. Specific tools and frameworks will be announced closer to the event.",
              photo_src: "/guest_speaker/byronjenkins.png",
              guest: "Byron Jenkins, Senior Software Engineer @ Capital One & Adjunct Instructor @ Temple University",
              linkedin_url: "https://www.linkedin.com/in/byron-jenkins/",
            },
        ],
    },
    {
        start_time: "4:00 PM",
        content: [
            {
                title: "Social Event Sponsored by HCI Lab",
                description: "Type Racing Tournament — go head-to-head in a fast-paced typing showdown! Advance through rounds, race fellow hackers for the top spot, and win prizes for the fastest finishers.",
            },
        ]
    },
    {
        start_time: "5:00 PM",
        content: [
            {
              type: "workshop",
              title: "Don’t Wait, Deploy Now! Deploying Frontend Apps",
              description: "Join Prof. Ian Applebaum, for a practical session on taking your frontend app live. Learn how to prepare your project for deployment, use modern hosting platforms, and avoid common pitfalls so you can ship your hackathon project with confidence and speed.",
              photo_src: "/guest_speaker/ianapplebaum.jpg",
              guest: "Ian Applebaum, Computer Science Instructor and HCI Lab researcher at Temple University",
              linkedin_url: "https://www.linkedin.com/in/ian-applebaum-82b824a0/",
            },
          ],
    },
    {
        start_time: "6:00 PM",
        content: [
            {
                type: "break",
                title: "Dinner sponsored by Blackstone Launchpad",
                description: "Enjoy some dinner and take a break from hacking.",
            },
        ]
    },
    {
        start_time: "09:00 PM",
        content: [
            {
                title: "Bob Ross Painting Social Event Sponsored by Blackstone Launchpad",
                description: "Paint like Bob Ross but in an ancient version of Windows Paint while watching Bob Ross on Twitch. It’s funny AND impressive!",
            },
        ]
    },
    {
        start_time: "12:00 AM",
        content: [
            {
                title: "Midnight Movie/Game Break Sponsored by HCI Lab",
                description: "Hmmmmm.....",
            },
        ]
    },
];

const SundayEvents: EventType[] = [
    {
        start_time: "09:00 AM",
        content: [
            {
                title: "Breakfast + Soft Deadline",
                description: "",
            },
        ]
    },
    {
        start_time: "10:00 AM",
        content: [
            {
                title: "Project Submission Hard Deadline",
                description: "Submit on Devpost"
            }
        ]
    },
    {
        start_time: "10:15 AM",
        content: [
            {
                title: "Carrer Panel Sponsored by HCI Lab",
                description: "Don't miss this chance to ask engineers from NVIDIA, Microsoft, Capital One, and AWS about careers, growth, and breaking into the industry."
            }
        ]
    },
    {
        start_time: "11:00 AM",
        content: [
            {
                title: "Sponsors Booth Open",
                description: "Visit the sponsors booths to learn more about their companies and opportunities."
            },
        ]
    },
    {
        start_time: "12:00 PM",
        content: [
            {
                title: "Lunch Sponsored by EZ Cater",
                description: "Lunch will be served"
            },
        ]
    },
    {
        start_time: "1:00 PM",
        content: [
            {
                title: "Judging Begins..",
                description: "Judging will begin"
            }
        ]
    },
    {
        start_time: "02:30 PM",
        content: [
            {
                title: "Closing Ceremony",
                description: "Join us for the closing ceremony to celebrate the end of OwlHacks 2025 and announce the winners of the hackathon."
            }
        ]
    },
    {
        start_time: "04:00 PM",
        content: [
            {
                title: "That's all, folks!",
                description: "Thank you so much for participating and we hope to see you again next year!"
            }
        ]
    }
]

export {
    SundayEvents,
    SaturdayEvents,
};

export type { EventType };