import { Stage, Impact, Confidence } from '@prisma/client'

const now = new Date()

export const projectData = [
    {
        id: '31',
        title: 'Summer School promotions',
        slug: 'summer-school-promotions',
        description: 'Flyers and emails for summer school.',
        isArchived: false,
        stage: Stage.incoming,
        tasksCompleted: 4,
        reach: 556,
        impact: Impact.minimal,
        confidence: Confidence.low,
        effort: 8,
        rice: 8.6875,
        progress: 0.46,
        neededBy: new Date(now.setDate(now.getDate() + 10 * 7)),
        willMeetDeadline: true,
        messages: {
            create: [
                {
                    content: 'Opening this project to get started! Let me know if you have any questions.',
                    senderId: '1',
                },
            ],
        },
        teams: {
            connect: [{ id: '21' }, { id: '22' }],
        },
        createdBy: {
            connect: {
                id: '1',
            },
        },
    },
    {
        id: '32',
        title: 'New landing page',
        slug: 'new-landing-page',
        description: 'Create new landing page for office.',
        isArchived: false,
        stage: Stage.backlog,
        tasksCompleted: 1,
        reach: 374,
        impact: Impact.low,
        confidence: Confidence.medium,
        effort: 8,
        rice: 18.7,
        progress: 0.053,
        neededBy: new Date(now.setDate(now.getDate() + 12 * 7)),
        willMeetDeadline: true,
        teams: {
            connect: [
                {
                    id: '22',
                },
            ],
        },
        clients: {
            connect: [{ id: '11' }],
        },
        createdBy: {
            connect: {
                id: '3',
            },
        },
    },
    {
        id: '33',
        title: 'Alumni Instagram',
        slug: 'alumni-instagram',
        description: 'Make some social posts.',
        isArchived: false,
        stage: Stage.inProgress,
        tasksCompleted: 2,
        reach: 983,
        impact: Impact.medium,
        confidence: Confidence.medium,
        effort: 5,
        rice: 157.28,
        progress: 0.013,
        neededBy: new Date(now.setDate(now.getDate() + 3 * 7)),
        willMeetDeadline: false,
        teams: {
            connect: { id: '23' },
        },
        clients: {
            connect: [{ id: '12' }],
        },
        createdBy: {
            connect: {
                id: '5',
            },
        },
    },
    {
        id: '34',
        title: 'Campus network upgrades',
        slug: 'campus-network-upgrades',
        description: 'Upgrade network to fiber and upgrade system.',
        isArchived: false,
        stage: Stage.inProgress,
        tasksCompleted: 3,
        reach: 227,
        impact: Impact.high,
        confidence: Confidence.medium,
        effort: 10,
        rice: 36.32,
        progress: 0.083,
        neededBy: new Date(now.setDate(now.getDate() + 15 * 7)),
        willMeetDeadline: true,
        teams: {
            connect: { id: '24' },
        },
        createdBy: {
            connect: {
                id: '7',
            },
        },
    },
    {
        id: '35',
        title: 'Student record data',
        slug: 'student-record-data',
        description: 'Add new students into database.',
        isArchived: true,
        stage: Stage.completed,
        tasksCompleted: 0,
        reach: 343,
        impact: Impact.medium,
        confidence: Confidence.low,
        effort: 10,
        rice: 17.15,
        progress: 0,
        neededBy: new Date(now.setDate(now.getDate() + 15 * 7)),
        willMeetDeadline: true,
        teams: {
            connect: { id: '25' },
        },
        clients: {
            connect: [{ id: '13' }],
        },
        createdBy: {
            connect: {
                id: '9',
            },
        },
    },
]
