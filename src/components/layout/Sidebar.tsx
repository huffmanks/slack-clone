'use client'

import { useDashboard } from '@/providers/DashboardProvider'
import { sidebarLinks } from '@/constants/sidebarLinks'

import SiderbarLinks from './SiderbarLinks'
import SidebarAccordion from './SidebarAccordion'

const Sidebar = () => {
    const { projects, isOpen } = useDashboard()

    return (
        <aside
            className={`fixed left-0 top-0 z-40 h-screen w-64 border-r border-zinc-200 bg-zinc-100 pt-20 transition-transform dark:border-zinc-700 dark:bg-zinc-800 sm:translate-x-0 ${
                isOpen.sidebarMobileMenu ? 'transform-none' : '-translate-x-full'
            }`}
            aria-label='sidebar'>
            <div className='h-full overflow-y-auto bg-zinc-100 px-4 pb-4 dark:bg-zinc-800 font-medium text-sm'>
                <ul className='flex flex-col gap-2 pb-4 mb-4 border-b border-zinc-300 dark:border-zinc-700'>
                    {sidebarLinks.map((link) => (
                        <SiderbarLinks key={link.title} {...link} />
                    ))}
                </ul>

                {projects && <SidebarAccordion id='projectAccordion' title='Projects' basePath='/dashboard/projects/' items={projects} />}
            </div>
        </aside>
    )
}

export default Sidebar
