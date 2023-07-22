'use client'

import { useDashboard } from '@/providers/DashboardProvider'
import useIsMounted from '@/hooks/useIsMounted'

import SiderbarLinks from './SiderbarLinks'
import SidebarCollapsible from './SidebarCollapsible'

const Sidebar = () => {
    const { isOpen, projects, channels } = useDashboard()

    if (!useIsMounted()) return null

    return (
        <aside
            className={`fixed left-0 top-0 z-40 h-screen w-64 border-r border-zinc-300 bg-zinc-200 pt-16 transition-all dark:border-zinc-700 dark:bg-zinc-800 sm:translate-x-0 ${
                isOpen.sidebarMobileMenu ? 'transform-none' : '-translate-x-full'
            }`}
            aria-label='sidebar'>
            <div className='h-full overflow-y-auto px-3 pb-4 font-medium text-sm'>
                <ul className='py-4 mb-4 px-1 border-b border-zinc-300 dark:border-zinc-700 transition-colors'>
                    <SiderbarLinks />
                </ul>

                {channels && <SidebarCollapsible id='channelCollapsible' title='Channels' basePath='/dashboard/channels/' items={channels} />}
                {projects && <SidebarCollapsible id='projectCollapsible' title='Projects' basePath='/dashboard/projects/' items={projects} />}
            </div>
        </aside>
    )
}

export default Sidebar
