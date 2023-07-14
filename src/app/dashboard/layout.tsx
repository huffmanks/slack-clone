import Link from 'next/link'

import { Project } from '@prisma/client'

const layout = async ({ children }: { children: React.ReactNode }) => {
    const res = await fetch('http://localhost:3000/api/projects')
    const projects = await res.json()

    return (
        <div className='flex h-full'>
            <aside className='h-full w-64 bg-zinc-800 p-8'>
                <div className='mb-2'>
                    <Link href='/' className='text-purple-500'>
                        Home
                    </Link>
                </div>
                <div className='mb-1'>Projects</div>
                <div className='flex flex-col gap-1'>
                    {projects &&
                        projects.map((project: Project) => (
                            <Link key={project.id} href={`/dashboard/projects/${project.id}`} className='text-sm text-purple-500'>
                                <span className='mr-2'>#</span>
                                <span>{project.title}</span>
                            </Link>
                        ))}
                </div>
            </aside>

            <main className='w-full max-w-lg p-8'>{children}</main>
        </div>
    )
}

export default layout
