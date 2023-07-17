import Link from 'next/link'

import { AiOutlinePlus } from 'react-icons/ai'
import { MdExpandMore } from 'react-icons/md'

import IconButton from '../ui/IconButton'

interface Props {
    title: string
}

const SidebarAccordion = ({ title }: Props) => {
    return (
        <div className='mb-4'>
            <div className='flex items-center justify-between gap-2 mb-2'>
                <IconButton className='flex items-center p-1 gap-2 bg-transparent rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700' onClick={handleChannelCollapse}>
                    <MdExpandMore className={`w-5 h-5 transition-transform ${channelIsExpanded ? 'rotate-0' : '-rotate-90'}`} />
                    {/* Workspace channels, i.e. #general */}
                    <div className='px-1'>{title}</div>
                </IconButton>

                <IconButton className='bg-transparent rounded-full p-1 hover:bg-zinc-100 dark:hover:bg-zinc-700' onClick={() => console.log('hello')}>
                    <AiOutlinePlus className='w-3.5 h-3.5' />
                </IconButton>
            </div>
            {channelIsExpanded && (
                <div className='mb-2 pb-2 px-6 overflow-y-auto max-h-64 border-b border-zinc-300 dark:border-zinc-700'>
                    <div className='flex items-center gap-1 mb-1'>
                        <span>#</span>
                        <Link href='#'>general</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SidebarAccordion
