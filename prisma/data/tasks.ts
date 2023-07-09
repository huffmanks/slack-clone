import { Stage } from '@prisma/client'

export const taskData = [
    {
        id: '69ddf5e1-30f3-4558-a8a4-ff4024a68b97',
        title: 'Summer Flyers',
        description: 'Extirpation of Matter from Coccygeal Joint, Perc Approach',
        stage: Stage.backlog,
        effort: 4,
        project: {
            connect: {
                id: 'e8422e11-bbc2-455c-86d7-2f079cf96c02',
            },
        },
        createdBy: {
            connect: {
                id: '6563aec4-e124-4a05-b493-29d1fa25c764',
            },
        },
        assignedTo: {
            connect: {
                id: '6563aec4-e124-4a05-b493-29d1fa25c764',
            },
        },
    },
    {
        id: '6fbeee3c-81cf-4d46-b948-eaf478be67e1',
        title: 'Update content',
        description: 'Revision of Ext Fix in L Hip Jt, Perc Approach',
        stage: Stage.completed,
        effort: 2,
        project: {
            connect: {
                id: '3e33f26f-19dc-494c-90fe-c55a26f7577c',
            },
        },
        createdBy: {
            connect: {
                id: '38a566c7-2db1-4eca-a0ff-0845f6273f89',
            },
        },
        assignedTo: {
            connect: {
                id: '38a566c7-2db1-4eca-a0ff-0845f6273f89',
            },
        },
    },
    {
        id: '9a318ccf-04fd-4cad-835e-abf45ac748ae',
        title: 'Alumni posts',
        description: 'Occlusion R Com Iliac Art w Intralum Dev, Perc Endo',
        stage: Stage.completed,
        effort: 1,
        project: {
            connect: {
                id: '1f1a5a80-3e6f-436b-bb9f-8dba53a987b7',
            },
        },
        createdBy: {
            connect: {
                id: '4be00b78-2eeb-48ce-950b-876bf2507d3a',
            },
        },
        assignedTo: {
            connect: {
                id: '4be00b78-2eeb-48ce-950b-876bf2507d3a',
            },
        },
    },
    {
        id: '678a891b-d0ab-4023-bf72-b80750d475be',
        title: 'Migrate DB',
        description: 'Change Drain Dev in Vagina & Cul-de-sac, Extern Approach',
        stage: Stage.inProgress,
        effort: 4,
        project: {
            connect: {
                id: '4f5fb4d7-589e-4ba8-b68d-fd215e7fb661',
            },
        },
        createdBy: {
            connect: {
                id: '9778f2be-d776-423d-b5c4-a39688556be7',
            },
        },
        assignedTo: {
            connect: {
                id: '9778f2be-d776-423d-b5c4-a39688556be7',
            },
        },
    },
    {
        id: 'ce47f526-29b8-4d62-939a-b6a59b98324a',
        title: 'Upgrade firewall',
        description: 'Insertion of Diaphragm Lead into R Diaphragm, Perc Approach',
        stage: Stage.inProgress,
        effort: 2,
        project: {
            connect: {
                id: '945a8caf-4bc1-4ae9-82d0-6f25a9052310',
            },
        },
        createdBy: {
            connect: {
                id: '727cbda4-e79f-4eb6-a0a5-0a9e15aa44a5',
            },
        },
        assignedTo: {
            connect: {
                id: '727cbda4-e79f-4eb6-a0a5-0a9e15aa44a5',
            },
        },
    },
]
