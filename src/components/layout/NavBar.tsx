import MobileMenuButton from '@/components/layout/MobileMenuButton'
import NavButtons from '@/components/layout/NavButtons'
import ProfileButton from '@/components/layout/ProfileButton'
import SearchInput from '@/components/layout/SearchInput'
import ToggleThemeButton from '@/components/layout/ToggleThemeButton'
import WorkspaceDropdown from '@/components/layout/WorkspaceDropdown'

const NavBar = () => {
    return (
        <>
            <nav className='fixed top-0 z-50 w-full border-b border-zinc-300 bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 transition-colors'>
                <div className='px-3 py-3 lg:px-5 lg:pl-3'>
                    <div className='flex items-center justify-between gap-4 sm:gap-8 lg:gap-6 sm:grid sm:grid-cols-[auto_1fr] sm:justify-normal'>
                        <div className='flex items-center justify-between sm:w-56 lg:w-[232px]'>
                            <MobileMenuButton />
                            <div className='hidden sm:block w-full'>
                                <WorkspaceDropdown />
                            </div>
                        </div>

                        <div className='flex w-full items-center justify-between gap-4'>
                            <NavButtons />
                            <SearchInput />
                            <div className='flex items-center gap-4'>
                                <ToggleThemeButton />
                                <ProfileButton />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
