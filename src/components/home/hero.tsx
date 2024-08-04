'use client'

import { Card } from '@nextui-org/card'
import { CardFooter, Spinner } from '@nextui-org/react'
import { BakeShadows, Effects, OrbitControls, OrthographicCamera } from '@react-three/drei'
import { Canvas, ReactThreeFiber, extend } from '@react-three/fiber'
import { Suspense } from 'react'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
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
        <section className='md:w-2/3 w-4/5 pt-5 self-center'>
            <Card isFooterBlurred radius='lg' className='relative h-72 bg-secondary-50' shadow='lg'>
                <Suspense
                    fallback={
                        <Spinner
                            label='Cargando...'
                            className='absolute inset-0 flex items-center justify-center'
                            size='lg'
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
                        <OrthographicCamera makeDefault far={100} near={0.1} position={[-10, 2, -10]} zoom={40} />
                        <OrbitControls autoRotate enableZoom={true} />
                    </Canvas>
                </Suspense>
                <CardFooter className='absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100'>
                    <div>
                        <p className='text-tiny text-white/60 font-bold'>Bloom - GLTFLoader</p>
                    </div>
                </CardFooter>
            </Card>
        </section>
    )
}

export default Hero
