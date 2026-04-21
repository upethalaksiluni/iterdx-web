const servicesData = [
    {
        id: 1,
        slug: 'the-virtual-employee',
        title: 'The Virtual Employee',
        subtitle: 'AI Workflow Automation',
        shortDescription:
            'A custom-integrated AI operative that automates back-office operations, repetitive communication, and customer interactions with structured workflows.',
        detailDescription:
            'A specialized AI workflow layer that operates around the clock to manage recurring business tasks, support responses, and internal routing with speed and consistency.',
        imageUrl:
            'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
        steps: [
            {
                step: 'Step 1',
                title: 'Process Logic Mapping',
                content:
                    'We audit repetitive operational tasks, define automation triggers, and identify the best workflow opportunities across sales, service, and admin.'
            },
            {
                step: 'Step 2',
                title: 'API Bridge Construction',
                content:
                    'We connect your communication and productivity tools, allowing the system to move information securely between email, WhatsApp, forms, and dashboards.'
            },
            {
                step: 'Step 3',
                title: 'Knowledge Training',
                content:
                    'We structure your FAQs, policies, pricing, and service rules so the assistant can respond with consistent business-aware answers.'
            },
            {
                step: 'Step 4',
                title: 'Safety Deployment',
                content:
                    'We define human handoff conditions, escalation routes, and approval checkpoints so complex conversations always stay under control.'
            }
        ]
    },
    {
        id: 2,
        slug: 'the-business-check-up',
        title: 'The Business Check-Up',
        subtitle: 'Digital Diagnostic Audit',
        shortDescription:
            'A strategic technology audit that surfaces operational bottlenecks, wasted tooling, hidden costs, and digital risks across your business.',
        detailDescription:
            'A comprehensive diagnostic review of your systems, workflows, and tools to expose friction points and produce a focused roadmap for digital improvement.',
        imageUrl:
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
        steps: [
            {
                step: 'Step 1',
                title: 'System Intake',
                content:
                    'We document your current software stack, handoff patterns, recurring tasks, and reporting flows to understand how work is actually happening.'
            },
            {
                step: 'Step 2',
                title: 'Gap Analysis',
                content:
                    'We identify inefficiencies, duplicated effort, manual dependencies, and missing controls that reduce speed, accuracy, and profitability.'
            },
            {
                step: 'Step 3',
                title: 'Roadmap Design',
                content:
                    'We prioritize the most valuable upgrades and sequence them into a practical implementation plan based on urgency, impact, and cost.'
            },
            {
                step: 'Step 4',
                title: 'Leadership Briefing',
                content:
                    'We translate the findings into clear business language so leadership can make confident technology decisions without technical guesswork.'
            }
        ]
    },
    {
        id: 3,
        slug: 'the-digital-guard',
        title: 'The Digital Guard',
        subtitle: 'Cyber Security & Data Vault',
        shortDescription:
            'Security hardening for growing teams, including access reviews, MFA enforcement, credential management, encrypted storage, and backup resilience.',
        detailDescription:
            'A practical security foundation that protects access, secures credentials, and keeps your critical business data recoverable in the event of failure or attack.',
        imageUrl:
            'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
        steps: [
            {
                step: 'Step 1',
                title: 'Identity Audit',
                content:
                    'We review user access, permissions, shadow accounts, and shared credentials to identify weak points across your operating environment.'
            },
            {
                step: 'Step 2',
                title: 'Security Hardening',
                content:
                    'We enforce stronger authentication, structured credential handling, and access restrictions that reduce exposure to avoidable threats.'
            },
            {
                step: 'Step 3',
                title: 'Backup Automation',
                content:
                    'We establish dependable cloud backup routines and vault architecture so essential files and records remain protected and recoverable.'
            },
            {
                step: 'Step 4',
                title: 'Recovery Validation',
                content:
                    'We simulate restoration scenarios to confirm that business-critical data can be restored quickly and accurately when needed.'
            }
        ]
    },
    {
        id: 4,
        slug: 'the-intelligence-portal',
        title: 'The Intelligence Portal',
        subtitle: 'Real-Time Business Intelligence',
        shortDescription:
            'A unified reporting experience that transforms fragmented business data into live dashboards, KPI visibility, and mobile-ready performance views.',
        detailDescription:
            'A decision dashboard that consolidates operational data into clear visuals, giving leadership instant access to business performance, movement, and opportunity.',
        imageUrl:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        steps: [
            {
                step: 'Step 1',
                title: 'Data Pipeline Setup',
                content:
                    'We collect information from sales, finance, operations, and spreadsheets, then clean and structure it for reliable reporting.'
            },
            {
                step: 'Step 2',
                title: 'Visualization Layer',
                content:
                    'We design a branded dashboard experience with focused charts, scorecards, and trend indicators that leadership can understand instantly.'
            },
            {
                step: 'Step 3',
                title: 'Automated Reporting',
                content:
                    'We schedule recurring summaries and performance digests so stakeholders receive key updates without chasing multiple systems.'
            },
            {
                step: 'Step 4',
                title: 'Decision Enablement',
                content:
                    'We help your team interpret the numbers, identify patterns, and turn live visibility into better operational and strategic decisions.'
            }
        ]
    },
    {
        id: 5,
        slug: 'tuti-pro-lms',
        title: 'Tuti-Pro LMS',
        subtitle: 'Education Management System',
        shortDescription:
            'A private learning platform for educators and institutions to host, protect, manage, and deliver premium course content at scale.',
        detailDescription:
            'A secure digital learning environment that allows educators to distribute lessons, manage learners, and protect intellectual property across video and downloadable content.',
        imageUrl:
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
        steps: [
            {
                step: 'Step 1',
                title: 'Platform Foundation',
                content:
                    'We set up the core learning infrastructure, hosting environment, and branded delivery experience for your academic or commercial program.'
            },
            {
                step: 'Step 2',
                title: 'Secure Media Layer',
                content:
                    'We protect video lessons, downloadable resources, and premium materials with controlled access and theft-resistant delivery settings.'
            },
            {
                step: 'Step 3',
                title: 'Enrollment Systems',
                content:
                    'We configure student onboarding, access permissions, payment flows, and course segmentation for clean administration.'
            },
            {
                step: 'Step 4',
                title: 'Launch Readiness',
                content:
                    'We test the learner journey end to end and prepare your team to operate, support, and scale the platform confidently.'
            }
        ]
    },
    {
        id: 6,
        slug: 'the-scale-engine',
        title: 'The Scale Engine',
        subtitle: 'Integrated Digital Transformation',
        shortDescription:
            'A full-stack digital transformation engagement that combines automation, security, reporting, and systems design into a unified business operating model.',
        detailDescription:
            'A structured multi-phase transformation program that modernizes the way your business works, secures its operations, and prepares it for scale.',
        imageUrl:
            'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
        steps: [
            {
                step: 'Step 1',
                title: 'Foundation Reset',
                content:
                    'We stabilize the basics by correcting core workflow issues, reducing friction, and securing the systems that keep daily operations moving.'
            },
            {
                step: 'Step 2',
                title: 'Automation Rollout',
                content:
                    'We introduce workflow automation and digital assistants where they deliver the fastest measurable operational return.'
            },
            {
                step: 'Step 3',
                title: 'Visibility Buildout',
                content:
                    'We establish performance dashboards and reporting structures so growth can be monitored and managed with clarity.'
            },
            {
                step: 'Step 4',
                title: 'Operational Stabilization',
                content:
                    'We monitor the new ecosystem, refine handoffs, and ensure the upgraded operating model stays reliable as the business expands.'
            }
        ]
    }
]

export default servicesData