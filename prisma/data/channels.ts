export const channelData = [
    {
        id: '61',
        title: 'General',
        slug: 'general',
        description: 'Put any useful information here.',
        isArchived: false,
        workspace: {
            connect: {
                id: '51',
            },
        },
        users: {
            connect: [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }, { id: '14' }],
        },
        createdBy: {
            connect: {
                id: '1',
            },
        },
        messages: {
            create: [
                {
                    content: 'Hello Everyone! Welcome to the Marketing & Communications general channel.',
                    senderId: '3',
                },
            ],
        },
    },
    {
        id: '62',
        title: 'General',
        slug: 'general',
        description: 'Put any useful information here.',
        isArchived: false,
        workspace: {
            connect: {
                id: '52',
            },
        },
        users: {
            connect: [{ id: '7' }, { id: '8' }, { id: '9' }, { id: '10' }, { id: '14' }],
        },
        createdBy: {
            connect: {
                id: '7',
            },
        },
        messages: {
            create: [
                {
                    content: 'Hello Everyone! Welcome to the Information Technology general channel.',
                    senderId: '9',
                },
            ],
        },
    },
]
