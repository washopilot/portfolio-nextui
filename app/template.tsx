'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const variants = {
    hidden: { opacity: 0, x: -200 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 200 }
}

const Template = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()

    return (
        <AnimatePresence mode='wait'>
            <motion.section
                key={pathname}
                initial='hidden'
                animate='enter'
                exit='exit'
                variants={variants}
                transition={{ type: 'spring', duration: 0.6 }}
                className='md:w-1/2 w-4/5 pt-5 self-center'>
                {children}
            </motion.section>
        </AnimatePresence>
    )
}

export default Template