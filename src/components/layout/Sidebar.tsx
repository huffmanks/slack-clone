'use client'

import { useDashboard } from '@/providers/DashboardProvider'

import SidebarCollapsible from '@/components/layout/SidebarCollapsible'
import SiderbarLinks from '@/components/layout/SiderbarLinks'
import WorkspaceDropdown from '@/components/layout/WorkspaceDropdown'

const Sidebar = () => {
    const { isOpen } = useDashboard()

    return (
        <aside
            className={`fixed left-0 top-0 z-40 h-screen w-64 border-r border-zinc-300 bg-zinc-200 pt-16 transition-all dark:border-zinc-700 dark:bg-zinc-800 sm:translate-x-0 ${
                isOpen.sidebarMobileMenu ? 'transform-none' : '-translate-x-full'
            }`}
            aria-label='sidebar'>
            <div className='h-full overflow-y-auto px-3 pb-4 font-medium text-sm'>
                <div className='sm:hidden pt-4 mb-4 -ml-0.5 pr-3.5'>
                    <WorkspaceDropdown />
                </div>
                <ul className='sm:pt-4 pb-4 mb-4 px-1 border-b border-zinc-300 dark:border-zinc-700 transition-colors'>
                    <SiderbarLinks />
                </ul>

                <SidebarCollapsible title='Channels' basePath='/dashboard/channels/' isChannel />
                <SidebarCollapsible title='Projects' basePath='/dashboard/projects/' />
            </div>
        </aside>
    )
}

export default Sidebar
