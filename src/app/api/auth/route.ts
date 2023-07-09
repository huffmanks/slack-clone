import { NextResponse } from 'next/server'
import { WebhookEvent } from '@clerk/nextjs/dist/types/server'

import { prisma } from '@/lib/prisma'

export async function handler(request: Request) {
    const body = await request.json()

    const event = body.evt as WebhookEvent
    const { id, ...attributes } = event.data

    const { email_addresses, username, first_name, last_name, image_url, created_at, updated_at } = JSON.parse(attributes.object)

    let user

    if (event.type === 'user.created') {
        user = await prisma.user.create({
            data: {
                externalId: id || '',
                email: email_addresses[0].email_address,
                username,
                image: image_url,
                createdAt: created_at,
                updatedAt: updated_at,
            },
        })
    }

    if (event.type === 'user.updated') {
        user = await prisma.user.update({
            where: { externalId: id },
            data: {
                email: email_addresses[0].email_address,
                username,
                firstName: first_name,
                lastName: last_name,
                image: image_url,
                updatedAt: updated_at,
            },
        })
    }

    if (event.type === 'user.deleted') {
        user = await prisma.user.delete({
            where: { externalId: id },
        })
    }

    return NextResponse.json(user)
}
