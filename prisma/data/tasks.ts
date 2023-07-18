import { Stage } from '@prisma/client'

export const taskData = [
    {
        id: '41',
        title: 'Summer Flyers',
        description: 'Create print PDF of flyer.',
        stage: Stage.backlog,
        effort: 4,
        project: {
            connect: {
                id: '31',
            },
        },
        createdBy: {
            connect: {
                id: '2',
            },
        },
        assignedTo: {
            connect: {
                id: '2',
            },
        },
    },
    {
        id: '42',
        title: 'Update content',
        description: 'Put revised copy on website.',
        stage: Stage.completed,
        effort: 2,
        project: {
            connect: {
                id: '32',
            },
        },
        createdBy: {
            connect: {
                id: '4',
            },
        },
        assignedTo: {
            connect: {
                id: '4',
            },
        },
    },
    {
        id: '43',
        title: 'Alumni posts',
        description: 'Create videos for the posts.',
        stage: Stage.completed,
        effort: 1,
        project: {
            connect: {
                id: '33',
            },
        },
        createdBy: {
            connect: {
                id: '6',
            },
        },
        assignedTo: {
            connect: {
                id: '6',
            },
        },
    },

    {
        id: '44',
        title: 'Upgrade firewall',
        description: 'Get latest secuirty updates.',
        stage: Stage.inProgress,
        effort: 2,
        project: {
            connect: {
                id: '34',
            },
        },
        createdBy: {
            connect: {
                id: '8',
            },
        },
        assignedTo: {
            connect: {
                id: '8',
            },
        },
    },
    {
        id: '45',
        title: 'Migrate DB',
        description: 'Test migrations.',
        stage: Stage.inProgress,
        effort: 4,
        project: {
            connect: {
                id: '35',
            },
        },
        createdBy: {
            connect: {
                id: '10',
            },
        },
        assignedTo: {
            connect: {
                id: '10',
            },
        },
    },
]
