import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
//import { loadFull } from "tsparticles";

export default function ParticlesComponent() {
  const [ init, setInit ] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // const { particlesOptions, className, id } = props;

  // let isInitialized = false;

  // const particlesInit = useCallback(async (engine) => {
  //   if(!isInitialized) {
  //     await loadFull(engine);
  //     isInitialized = true;
  //   }

  // }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //     await container
  // }, []);

  return (
    <Particles
      id={id}
      className={className}
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};
