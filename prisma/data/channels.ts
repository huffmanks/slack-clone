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
                    content: 'Hello Everyone! Welcome to the channel.',
                    senderId: '3',
                },
            ],
        },
    },
]
