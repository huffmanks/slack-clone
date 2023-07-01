'use client'

// import { useRouter } from 'next/router'

const Navbar = () => {
    // const router = useRouter()
    return (
        <nav className='grid grid-cols-[1fr_auto] items-center  gap-8 bg-zinc-200 px-5 py-2 dark:bg-zinc-800 sm:grid-cols-[auto_1fr_auto]'>
            {/* <nav className='flex items-center gap-8 bg-zinc-200 px-5 py-2 dark:bg-zinc-800'> */}
            <div className='hidden gap-4 sm:flex'>
                <button
                // onClick={() => router.back}
                >
                    &larr;
                </button>
                <button
                // onClick={() => router.forward}
                >
                    &rarr;
                </button>
            </div>

            <div className='bg-zinc mx-auto flex w-1/2 items-center gap-2 rounded-md bg-white px-2 py-1.5 text-zinc-900 dark:bg-zinc-900 dark:text-slate-50'>
                <svg className='fill-current' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                    <g>
                        <path fill='none' d='M0 0h24v24H0z'></path>
                        <path d='M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z'></path>
                    </g>
                </svg>
                <input type='text' className='bg-transparent outline-none' />
            </div>
            <button aria-label='Profile'>
                <div className='h-9 w-9 rounded-lg bg-green-700'></div>
            </button>
        </nav>
    )
}

export default Navbar
