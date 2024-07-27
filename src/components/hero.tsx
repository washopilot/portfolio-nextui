'use client'

import { Card } from '@nextui-org/card'
import { CardFooter, Spinner } from '@nextui-org/react'
import { BakeShadows, Effects, OrbitControls, OrthographicCamera } from '@react-three/drei'
import { Canvas, extend, ReactThreeFiber } from '@react-three/fiber'
import { Suspense } from 'react'
import { UnrealBloomPass } from 'three-stdlib'
import { Tower } from './tower'

extend({ UnrealBloomPass })
declare global {
    namespace JSX {
        interface IntrinsicElements {
            unrealBloomPass: ReactThreeFiber.Object3DNode<UnrealBloomPass, typeof UnrealBloomPass>
        }
    }
}
const Hero = () => {
    return (
        <Card
            isFooterBlurred
            radius='lg'
            className='relative border-none h-96 hover:drop-shadow-[0_6px_6px_hsl(var(--nextui-foreground))]'
            shadow='none'>
            <Suspense
                fallback={
                    <Spinner
                        label='Cargando...'
                        className='absolute inset-0 flex items-center justify-center scale-[2]'
                    />
                }>
                <Canvas shadows gl={{ antialias: false }}>
                    <color attach='background' args={['#202030']} />
                    <fog attach='fog' args={['#202030', 10, 25]} />
                    <hemisphereLight intensity={0.2} color='#eaeaea' groundColor='blue' />
                    <directionalLight
                        castShadow
                        intensity={0.2}
                        shadow-mapSize={[1024, 1024]}
                        shadow-bias={-0.0001}
                        position={[10, 10, -10]}
                    />
                    <Tower position={[0, -3.25, 0]} />
                    <Effects disableGamma>
                        <unrealBloomPass threshold={1} strength={1.0} radius={0.5} />
                    </Effects>
                    <BakeShadows />
                    <OrthographicCamera makeDefault far={100} near={0.1} position={[-10, 2, -10]} zoom={50} />
                    <OrbitControls autoRotate enableZoom={true} />
                </Canvas>
            </Suspense>
            <CardFooter className='justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
                <p className='text-tiny text-white/80'>Bloom - React Three Fiber</p>
            </CardFooter>
        </Card>
    )
}

export default Hero
