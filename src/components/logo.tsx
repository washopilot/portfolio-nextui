'use client'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import { LogoOnly, LogoText } from './icons'

const Logo = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
            <NextLink className='flex justify-start items-center gap-1' href='/'>
                <LogoOnly />
                <LogoText />
                {/* <p className='font-bold tracking-tighter text-inherit'>FERNANDO CHICAIZA</p> */}
            </NextLink>
        </motion.div>
    )
}

export default Logo
