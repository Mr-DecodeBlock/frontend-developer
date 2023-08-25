"use client";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
extend({ OrbitControls })

// DESCOMENTAR EN CASO DE NECESITAR EL COMPONENTE CON MANEJO DE EVENTOS DE CAMARA

//  function CameraControls(){
//   const {
//     camera,
//     gl: {domElement}
//   } = useThree();

//   const controlsRef = useRef();
//   useFrame(() => controlsRef.current.update())

//   return (
//     <orbitControls
//       ref={controlsRef}
//       args={[camera, domElement]}
//       autoRotate
//       autoRotateSpeed={-0.2}
//     />
//   );
// }

function PointsComponent() {
  const imgTex = useLoader(THREE.TextureLoader, './assets/img/wave-point/circle.png');
  const bufferRef = useRef();
  const materialRef = useRef(); // Referencia al material de los puntos
  const [particleSize, setParticleSize] = useState(1)

  useEffect(() => {

    const handleResize = () => {
      const size = window.innerWidth > 2500 ? 3 : 1
      setParticleSize(size)
    };

    handleResize();

  }, []);


  let t = 0;
  let f = 0.0006;
  let a = 8;

  const graph = useCallback((x, z) => {
    const movementSpeed = 0.001; // Velocidad de movimiento de la onda
    const offsetX = t * movementSpeed; // Desplazamiento en el eje x
    return Math.sin(f * ((x + offsetX) ** 2 + z ** 2 + t)) * a;
  }, [t, f, a]);

  const count = 250
  const sep = 1

  // MEMORIA DE PROCESO DE CALCULO PARA ONDAS

  let positions = useMemo(() => {
    let positions = []

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph])

  useFrame(() => {
    t += 15

    const positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);

        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  })

  // Interpolación lineal entre dos colores
  const colorA = new THREE.Color(0xC0C0C0); // Color plateado
  const colorB = new THREE.Color(0xFFFFFF);
  const color = new THREE.Color(); // Variable para almacenar el color actual

  useFrame(() => {
    // Calcula el factor de interpolación basado en el tiempo
    const interpolationFactor = (Math.sin(t / 2000) + 1) / 2;

    // Interpola entre los dos colores utilizando el factor de interpolación
    color.copy(colorA).lerp(colorB, interpolationFactor);

    // Actualiza el color del material de los puntos
    materialRef.current.color = color;
  });


  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          usage={THREE.DynamicDrawUsage}
          ref={bufferRef}
          attach='attributes-position'
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        ref={materialRef} // Asigna la referencia al material de los puntos
        attach="material"
        map={imgTex}
        color={color} // Utiliza el color calculado
        size={particleSize}
        sizeAttenuation={false}
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}

function Waves() {
  return (
    <div
      style={{
        backgroundColor: 'transparent',
        width: '100vw',
        height: '100vh',
      }}
      className="anim">
      <Canvas
        camera={{ position: [80, 50, 30], fov: 35 }}  >
        <PointsComponent />
        { /* CONTORLADOR DE CAMARA DE ONDAS */}
        {/* <CameraControls/>  */}
      </Canvas>

    </div>
  );
}

export default Waves;