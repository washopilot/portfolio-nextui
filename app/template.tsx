'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const variants = {
    hidden: { opacity: 0, x: -200 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 200 }
}

const Template = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return isClient ? (
        <AnimatePresence mode='wait' initial={true}>
            <motion.section
                key={pathname}
                initial='hidden'
                animate='enter'
                exit='exit'
                variants={variants}
                transition={{ type: 'spring', duration: 0.6 }}>
                {children}
            </motion.section>
        </AnimatePresence>
    ) : (
        <section>{children}</section>
    )
}

export default Template
