'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import FrozenRoute from './frozen-route'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 }
}

const AnimateLayout = ({ children }: { children: React.ReactNode }) => {
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
                transition={{ duration: 0.2, type: 'easeInOut' }}>
                <FrozenRoute>{children}</FrozenRoute>
            </motion.section>
        </AnimatePresence>
    ) : (
        <section>{children}</section>
    )
}

export default AnimateLayout
