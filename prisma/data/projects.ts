import { Stage, Impact, Confidence } from '@prisma/client'

export const projectData = [
    {
        id: 'e8422e11-bbc2-455c-86d7-2f079cf96c02',
        title: 'Summer School promotions',
        description: 'Osteopathic Treatment of Pelvis w L Velocity H Ampl',
        isArchived: false,
        stage: Stage.incoming,
        tasksCompleted: 4,
        reach: 556,
        impact: Impact.minimal,
        confidence: Confidence.low,
        effort: 8,
        rice: 8.6875,
        progress: 0.46,
        neededBy: new Date('7/16/2023'),
        willMeetDeadline: true,
        teams: {
            connect: [{ id: 'fa5b1008-75c6-4675-874d-69942bd4d8ce' }, { id: '33b52128-5d5b-44fd-967f-df77d8af429a' }],
        },
        createdBy: {
            connect: {
                id: '6563aec4-e124-4a05-b493-29d1fa25c764',
            },
        },
    },
    {
        id: '3e33f26f-19dc-494c-90fe-c55a26f7577c',
        title: 'New landing page',
        description: 'Removal of Drainage Device from Skull, Open Approach',
        isArchived: false,
        stage: Stage.completed,
        tasksCompleted: 1,
        reach: 374,
        impact: Impact.low,
        confidence: Confidence.medium,
        effort: 8,
        rice: 18.7,
        progress: 0.053,
        neededBy: new Date('7/24/2023'),
        willMeetDeadline: true,
        teams: {
            connect: {
                id: '572ed1bb-9f8e-4c89-b9d7-a460ba7a31b6',
            },
        },
        createdBy: {
            connect: {
                id: '38a566c7-2db1-4eca-a0ff-0845f6273f89',
            },
        },
    },
    {
        id: '1f1a5a80-3e6f-436b-bb9f-8dba53a987b7',
        title: 'Alumni Instagram',
        description: 'Bypass Common Bile Duct to Caud Duct, Perc Endo Approach',
        isArchived: false,
        stage: Stage.completed,
        tasksCompleted: 2,
        reach: 983,
        impact: Impact.medium,
        confidence: Confidence.medium,
        effort: 5,
        rice: 157.28,
        progress: 0.013,
        neededBy: new Date('8/25/2023'),
        willMeetDeadline: false,
        teams: {
            connect: { id: '33b52128-5d5b-44fd-967f-df77d8af429a' },
        },
        createdBy: {
            connect: {
                id: '4be00b78-2eeb-48ce-950b-876bf2507d3a',
            },
        },
    },
    {
        id: '4f5fb4d7-589e-4ba8-b68d-fd215e7fb661',
        title: 'Fall student records',
        description: 'Immobilization of Right Upper Leg using Brace',
        isArchived: true,
        stage: Stage.backlog,
        tasksCompleted: 0,
        reach: 343,
        impact: Impact.medium,
        confidence: Confidence.low,
        effort: 10,
        rice: 17.15,
        progress: 0,
        neededBy: new Date('8/31/2023'),
        willMeetDeadline: true,
        teams: {
            connect: { id: '6892367c-ef89-469d-a5cc-db4e7ab0b26f' },
        },
        createdBy: {
            connect: {
                id: '9778f2be-d776-423d-b5c4-a39688556be7',
            },
        },
    },
    {
        id: '945a8caf-4bc1-4ae9-82d0-6f25a9052310',
        title: 'Campus network upgrades',
        description: 'Reposition Left Maxilla with Ext Fix, Perc Approach',
        isArchived: false,
        stage: Stage.inProgress,
        tasksCompleted: 3,
        reach: 227,
        impact: Impact.high,
        confidence: Confidence.medium,
        effort: 10,
        rice: 36.32,
        progress: 0.083,
        neededBy: new Date('7/28/2023'),
        willMeetDeadline: true,
        teams: {
            connect: { id: 'b0222dc5-39d5-4d84-a658-5a4c9ee8e917' },
        },
        createdBy: {
            connect: {
                id: '727cbda4-e79f-4eb6-a0a5-0a9e15aa44a5',
            },
        },
    },
]