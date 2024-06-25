import React, { useRef, useEffect } from 'react';
import './mobilemenu.css';
import $ from 'jquery';
import * as THREE from 'three';

const Menu = ({ isOpen, toggleMenu }) => {
  const menuRef = useRef(null);
  const mainmenucursorRef = useRef(null);
  let scene, camera, renderer, rainGeo, rain, flash, cloudParticles = [];
  const rainCount = 15000, mouse = { x: 0, y: 0 }, halfSize = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  useEffect(() => {
    init();
    return () => {
      cleanup();
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  }, [isOpen]);

  useEffect(() => {
    const cursor = mainmenucursorRef.current;

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out'
      });
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const init = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;
    camera.rotation.set(1.16, -0.12, 0.27);

    scene.add(new THREE.AmbientLight(0x555555));
    const directionalLight = new THREE.DirectionalLight(0xffeedd);
    directionalLight.position.set(0, 0, 1);
    scene.add(directionalLight);

    flash = new THREE.PointLight(0x062d89, 30, 500, 1.7);
    flash.position.set(200, 300, 100);
    scene.add(flash);

    renderer = new THREE.WebGLRenderer({ canvas: menuRef.current });
    scene.fog = new THREE.FogExp2(0x11111f, 0.002);
    renderer.setClearColor(scene.fog.color);
    renderer.setSize(window.innerWidth, window.innerHeight);

    rainGeo = new THREE.BufferGeometry();
    const positions = [], sizes = [];
    for (let i = 0; i < rainCount; i++) {
      positions.push(
        Math.random() * 400 - 200,
        Math.random() * 500 - 250,
        Math.random() * 400 - 200
      );
      sizes.push(Math.random() * 30);
    }
    rainGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
    rainGeo.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
    rain = new THREE.Points(rainGeo, new THREE.PointsMaterial({ color: 0xaaaaaa, size: 0.1, transparent: true, sizeAttenuation: true }));
    scene.add(rain);

    new THREE.TextureLoader().load(
      'https://static.vecteezy.com/system/resources/previews/010/884/548/original/dense-fluffy-puffs-of-white-smoke-and-fog-on-transparent-background-abstract-smoke-clouds-movement-blurred-out-of-focus-smoking-blows-from-machine-dry-ice-fly-fluttering-in-air-effect-texture-png.png',
      function (texture) {
        const cloudGeo = new THREE.PlaneGeometry(500, 500); // Updated to PlaneGeometry
        const cloudMaterial = new THREE.MeshLambertMaterial({ map: texture, transparent: true });
        for (let p = 0; p < 100; p++) {
          const cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
          cloud.position.set(Math.random() * 800 - 400, 500, Math.random() * 500 - 450);
          const scale = THREE.MathUtils.randFloat(0.1, 1);
          cloud.scale.set(scale, scale, scale);
          cloud.rotation.set(1.16, -0.12, Math.random() * 360);
          cloud.material.opacity = THREE.MathUtils.randFloat(0.2, 1);
          cloudParticles.push(cloud); // Push cloud to cloudParticles array
          scene.add(cloud);
        }
        animate();
      }
    );

    window.addEventListener('resize', onWindowResize);
    document.addEventListener('mousemove', onDocumentMouseMove);
    document.querySelectorAll('.project').forEach(project => {
      project.addEventListener('mouseover', handleProjectMouseOver);
    });
  };

  const cleanup = () => {
    window.removeEventListener('resize', onWindowResize);
    document.removeEventListener('mousemove', onDocumentMouseMove);
    document.querySelectorAll('.project').forEach(project => {
      project.removeEventListener('mouseover', handleProjectMouseOver);
    });
  };

  const onDocumentMouseMove = (event) => {
    mouse.x = (event.clientX - halfSize.x) / 5;
    mouse.y = (event.clientY - halfSize.y) / 5;
  };

  const animate = () => {
    cloudParticles.forEach(p => p.rotation.z -= 0.0002);
    const positions = rainGeo.attributes.position.array;
    for (let i = 1; i < positions.length; i += 3) {
      positions[i] -= 0.1;
      if (positions[i] < -200) positions[i] = 200;
    }
    rainGeo.attributes.position.needsUpdate = true;

    camera.position.x += (mouse.x - camera.position.x) * 0.02;
    camera.position.y += (-mouse.y - camera.position.y) * 0.02;
    camera.lookAt(scene.position);

    if (Math.random() > 0.93 || flash.power > 100) {
      if (flash.power < 100) flash.position.set(Math.random() * 400, 300 + Math.random() * 200, 100);
      flash.power = 50 + Math.random() * 500;
    }
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  const onWindowResize = () => {
    halfSize.x = window.innerWidth / 2;
    halfSize.y = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  const wrapTextInSpan = (element) => {
    const text = element.innerText;
    element.innerHTML = text.split('').map(letter => `<span>${letter}</span>`).join('');
  };

  useEffect(() => {
    document.querySelectorAll('.project a span').forEach(span => wrapTextInSpan(span));
  }, []);

  const openMenu = () => {
    // Check if the viewport width is greater than 768px
    if (window.innerWidth <= 768) {
      return;
    }
  
    // Implement GSAP animations for the mobile loader circles
    gsap.timeline()
      .to(".mobileloader", { duration: 1, height: '2vh', width: '100vw', borderRadius: '0%' }, 0)
      .to(".mobileloader", { duration: 2, height: '100vh' }, 1)
      .to("#firstcircle", { duration: 3, top: '50%', left: '0%', x: '0%', y: '0%', height: '100vh', ease: 'power2.out' }, 3)
      .to("#secondcircle", { duration: 3, top: '50%', left: '69%', x: '0%', y: '0%', height: '100vh', ease: 'power2.out' }, 3)
      .to(".mobileloader", { duration: 2, opacity: '0', zIndex: -50 }, 5)
      .to("#main-menu", { duration: 0, opacity: '1' }, 5)
      .to("#main-menu a span span", { duration: 2, opacity: '1', y: 0, stagger: 0.1 }, 6);
  
    console.log('Menu Opened');
  };
  
  const closeMenu = () => {
    // Check if the viewport width is greater than 768px
    if (window.innerWidth <= 768) {
      return;
    }
  
    gsap.set("#main-menu", { opacity: '0' });
    gsap.set("#main-menu a span span", { opacity: '0', y: -100 });
    gsap.set(".mobileloader", { height: '0vh', width: '0vw', borderRadius: '50%' });
    gsap.set("#firstcircle", { top: '100%', left: '40%', x: '-50%', y: '-50%', height: '100vh', borderRadius: '0%' });
    gsap.set("#secondcircle", { top: '100%', left: '60%', x: '-50%', y: '-50%', height: '100vh', borderRadius: '0%' });
    gsap.set(".mobileloader", { opacity: '1', zIndex: 99999 });
    console.log('Menu Closed');
  };
  

  const moveCircle = (e) => {
    gsap.to(mainmenucursorRef.current, { duration: 0.5, left: e.pageX, top: e.pageY });
  };

  const handleProjectMouseOver = function () {
    mainmenucursorRef.current.style.backgroundImage = `url(${this.getAttribute('data-img')})`;
  };


  return (
    <>
    <div className="mobileloader">
        <span id='firstcircle'>
            <img src="img/solder.webp" className='img-fluid' />
        </span>
        <span id='secondcircle'>
            <img src="img/solder.webp" className='img-fluid' />
        </span>
      </div>
    <div id="main-menu" className={isOpen ? 'open' : 'closed'}>
      <canvas ref={menuRef} id="menu-background" className="b-canvas"></canvas>
      <ul>
      <div className="mainmenucursor" ref={mainmenucursorRef}></div>
        <li className="project p-1" data-img="https://res.cloudinary.com/du25cd0bj/image/upload/v1579694456/driveImages/drive1_fkkxso.jpg">
          <a href="#"><span>HOME</span><div className="project-overlay"></div></a>
        </li>
        <li className="project p-2" data-img="https://res.cloudinary.com/du25cd0bj/image/upload/v1579694456/driveImages/drive2_gcrxje.jpg">
          <a href="#"><span>About</span><div className="project-overlay"></div></a>
        </li>
        <li className="project p-3" data-img="https://res.cloudinary.com/du25cd0bj/image/upload/v1579694456/driveImages/drive3_mfhw4e.jpg">
          <a href="#"><span>Services</span><div className="project-overlay"></div></a>
        </li>
        <li className="project p-4" data-img="https://res.cloudinary.com/du25cd0bj/image/upload/v1579694456/driveImages/drive4_ztkutp.jpg">
          <a href="#"><span>CONTACT</span><div className="project-overlay"></div></a>
        </li>
      </ul>
    </div>
    </>
  );
};

export default Menu;
