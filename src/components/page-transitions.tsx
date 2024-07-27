'use client'
// src/components/PageTransition.js
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const variants = {
    hidden: { opacity: 0, x: -200 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 200 }
}

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()

    return (
        <AnimatePresence mode='wait' initial={false}>
            <motion.section
                key={pathname}
                initial='hidden'
                animate='enter'
                exit='exit'
                variants={variants}
                transition={{ type: 'linear', duration: 0.4 }}
                className='md:w-1/2 w-4/5 pt-5 self-center'>
                {children}
            </motion.section>
        </AnimatePresence>
    )
}

export default PageTransition
