import { Workspace } from '@prisma/client'
import Link from 'next/link'

const Sidebar = (workspace: Workspace) => {
    return (
        <aside className='h-full w-56 bg-zinc-200 px-5 pb-2 dark:bg-zinc-800'>
            <div className='mb-4 flex h-[54px] items-center justify-between gap-2 border-b-2 border-zinc-300 dark:border-zinc-600'>
                <div className='flex items-center gap-2'>
                    <div className='flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-zinc-900'>
                        <svg className='p-1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='#5b21b6'>
                            <path d='M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z' />
                        </svg>
                    </div>
                    <div>{workspace.title}</div>
                </div>
                <div>v</div>
            </div>
            <div className='mb-4 flex flex-col gap-2 border-b-2 border-zinc-300 px-1 pb-4 text-sm text-zinc-600 dark:border-zinc-600 dark:text-zinc-300'>
                <Link href='#'>Tasks</Link>
                <Link href='#'>Mentions</Link>
                <Link href='#'>Direct Messages</Link>
                <Link href='#'>People & Teams</Link>
            </div>

            <div className='mb-8 flex items-center justify-between gap-2 text-xs'>
                <div className='flex items-center gap-2'>
                    <div>v</div>
                    {/* Workspace channels, i.e. #general */}
                    <div className='font-bold'>Channels</div>
                </div>
                <button>+</button>
            </div>
            <div className='flex items-center justify-between gap-2 text-xs'>
                <div className='flex items-center gap-2'>
                    <div>v</div>
                    <div className='font-bold'>Projects</div>
                </div>
                <button>+</button>
            </div>
        </aside>
    )
}

export default Sidebar
