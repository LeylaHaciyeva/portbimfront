import React, { useEffect, useRef } from 'react'
import * as THREE from 'three';
import './BimThree.css'
import bimimage from '../../images/glb.GLB'
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, OrbitControls } from "@react-three/drei";
function Model(props) {
    const { scene } = useGLTF(bimimage);
    return <primitive object={scene} {...props} />
}
function handleClick() {
}
const BimThree = () => {
    return (
        <div style={{position:"relative !important"}}>
            <div style={{position:"relative !important"}}>
                <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{"height": "600px" }}>
                    <OrbitControls autoRotate
                        speed={2} global zoom={.1} polar={[-0.1, Math.PI / 4]}
                        enableZoom={false} enablePan={false} />
                    <color attach="background" args={["#101010"]} />
                    {/* <PresentationControls  speed={2} global zoom={.1} polar={[-0.1, Math.PI / 4]}> */}
                    <Stage>
                        <Model/>
                    </Stage>
                    {/* </PresentationControls> */}
                </Canvas>
            </div>
            <div>
                <button onClick={handleClick} className='heating'>test1</button>
                <button onClick={handleClick} className='watersupply'>test2</button>
            </div>
        </div>
    )
}

export default BimThree
