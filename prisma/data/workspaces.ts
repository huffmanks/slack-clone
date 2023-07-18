export const workspaceData = [
    {
        id: '51',
        title: 'Marketing',
        logo: 'https://dummyimage.com/64x64/5656ff/5656ff.png',
        teams: {
            create: [
                {
                    id: '21',
                    title: 'Design',
                    completedProjects: 166,
                    users: {
                        connect: [{ id: '1' }, { id: '2' }],
                    },
                },
                {
                    id: '22',
                    title: 'Web',
                    completedProjects: 58,
                    users: {
                        connect: [{ id: '3' }, { id: '4' }, { id: '14' }],
                    },
                },
                {
                    id: '23',
                    title: 'Social',
                    completedProjects: 155,
                    users: {
                        connect: [{ id: '5' }, { id: '6' }],
                    },
                },
            ],
        },
        users: {
            connect: [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }, { id: '14' }],
        },
    },
    {
        id: '52',
        title: 'ITS',
        logo: 'https://dummyimage.com/64x64/ad2c14/ad2c14.png',
        teams: {
            create: [
                {
                    id: '24',
                    title: 'Network',
                    completedProjects: 166,
                    users: {
                        connect: [{ id: '7' }, { id: '8' }],
                    },
                },
                {
                    id: '25',
                    title: 'Database',
                    completedProjects: 123,
                    users: {
                        connect: [{ id: '9' }, { id: '10' }],
                    },
                },
            ],
        },
        users: {
            connect: [{ id: '7' }, { id: '8' }, { id: '9' }, { id: '10' }],
        },
    },
]
