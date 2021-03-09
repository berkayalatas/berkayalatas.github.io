import Particles from "react-tsparticles";
import React from "react";
import "./animation.css";

const Animation = () => {
  return (
    <div>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#1C1D25",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 150,
                duration: 3,
              },
            },
          },
          particles: {
            color: {
              value: ["#00e8e8", "#074b89", "#00e8e8"],
            },
            links: {
              color: "#33cccc",
              distance: 180,
              enable: true,
              opacity: 0.6,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 1400,
              },
              value: 90,
            },
            opacity: {
              value: 0.4,
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Animation;
