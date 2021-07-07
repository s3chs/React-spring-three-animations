import React, { useState } from "react";
import "./Scroll.css";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";
import { log } from "loglevel";

export default function Scroll() {
  const [toggleTxt, setToggleTxt] = useState(false);

  const animation = useSpring({
    opacity: toggleTxt ? 1 : 0,
    transform: toggleTxt ? "translateX(0)" : "translateX(-300px)",
  });

  return (
    <div>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        repudiandae praesentium modi consequatur veritatis earum! Sequi, neque
        ipsum sapiente autem, blanditiis magni deserunt laborum fugit quidem
        eligendi veritatis aspernatur sit quaerat dolorem molestiae nobis ex
        nisi architecto beatae! Harum labore, expedita soluta qui illum saepe
        necessitatibus molestias quisquam eligendi ipsa odio commodi modi
        obcaecati dolor quae, in officiis eveniet. Doloremque quidem delectus
        ea, iste tempora expedita omnis explicabo quaerat, modi corrupti quam
        iure excepturi accusantium quibusdam odio vel reiciendis, velit
        voluptate voluptates. Delectus, quis nulla distinctio magnam, maiores
        placeat nemo dicta quas sit numquam corrupti nam, pariatur omnis soluta
        itaque odit dolore! Accusantium, quisquam expedita recusandae
        voluptatibus rem aliquam unde earum, accusamus laboriosam atque non
        sequi ut quaerat molestias quas magnam fugit placeat eaque a, voluptas
        libero maxime. Provident cumque voluptas impedit nulla quibusdam
        pariatur neque sed quasi, inventore, laudantium amet molestiae! Ipsa
        iusto, consectetur repellat rerum quae nisi hic atque pariatur rem,
        ipsam maiores saepe quam deserunt fugit voluptas eveniet voluptate nihil
        reprehenderit sint animi, delectus neque odit deleniti minus. Suscipit
        ipsum praesentium ratione rem magnam facere laudantium ipsa ipsam
        deleniti voluptatibus dignissimos error expedita, repellendus ducimus
        optio eum, commodi distinctio nisi libero obcaecati quae vel. A, quae
        nulla.
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        repudiandae praesentium modi consequatur veritatis earum! Sequi, neque
        ipsum sapiente autem, blanditiis magni deserunt laborum fugit quidem
        eligendi veritatis aspernatur sit quaerat dolorem molestiae nobis ex
        nisi architecto beatae! Harum labore, expedita soluta qui illum saepe
        necessitatibus molestias quisquam eligendi ipsa odio commodi modi
        obcaecati dolor quae, in officiis eveniet. Doloremque quidem delectus
        ea, iste tempora expedita omnis explicabo quaerat, modi corrupti quam
        iure excepturi accusantium quibusdam odio vel reiciendis, velit
        voluptate voluptates. Delectus, quis nulla distinctio magnam, maiores
        placeat nemo dicta quas sit numquam corrupti nam, pariatur omnis soluta
        itaque odit dolore! Accusantium, quisquam expedita recusandae
        voluptatibus rem aliquam unde earum, accusamus laboriosam atque non
        sequi ut quaerat molestias quas magnam fugit placeat eaque a, voluptas
        libero maxime. Provident cumque voluptas impedit nulla quibusdam
        pariatur neque sed quasi, inventore, laudantium amet molestiae! Ipsa
        iusto, consectetur repellat rerum quae nisi hic atque pariatur rem,
        ipsam maiores saepe quam deserunt fugit voluptas eveniet voluptate nihil
        reprehenderit sint animi, delectus neque odit deleniti minus. Suscipit
        ipsum praesentium ratione rem magnam facere laudantium ipsa ipsam
        deleniti voluptatibus dignissimos error expedita, repellendus ducimus
        optio eum, commodi distinctio nisi libero obcaecati quae vel. A, quae
        nulla.
      </p>

      <Waypoint
        bottomOffset="30%"
        onEnter={() => {
          if (!toggleTxt) {
            setToggleTxt(true);
          }
          console.log("trigger");
        }}
      />
      <animated.div style={animation} className="cta-section">
        <h2>N'en ratez pas une miette !</h2>
        <form>
          <label htmlFor="email">Inscrivez-vous à la newsletter</label>
          <input type="email" id="email" />
        </form>
      </animated.div>

      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        repudiandae praesentium modi consequatur veritatis earum! Sequi, neque
        ipsum sapiente autem, blanditiis magni deserunt laborum fugit quidem
        eligendi veritatis aspernatur sit quaerat dolorem molestiae nobis ex
        nisi architecto beatae! Harum labore, expedita soluta qui illum saepe
        necessitatibus molestias quisquam eligendi ipsa odio commodi modi
        obcaecati dolor quae, in officiis eveniet. Doloremque quidem delectus
        ea, iste tempora expedita omnis explicabo quaerat, modi corrupti quam
        iure excepturi accusantium quibusdam odio vel reiciendis, velit
        voluptate voluptates. Delectus, quis nulla distinctio magnam, maiores
        placeat nemo dicta quas sit numquam corrupti nam, pariatur omnis soluta
        itaque odit dolore! Accusantium, quisquam expedita recusandae
        voluptatibus rem aliquam unde earum, accusamus laboriosam atque non
        sequi ut quaerat molestias quas magnam fugit placeat eaque a, voluptas
        libero maxime. Provident cumque voluptas impedit nulla quibusdam
        pariatur neque sed quasi, inventore, laudantium amet molestiae! Ipsa
        iusto, consectetur repellat rerum quae nisi hic atque pariatur rem,
        ipsam maiores saepe quam deserunt fugit voluptas eveniet voluptate nihil
        reprehenderit sint animi, delectus neque odit deleniti minus. Suscipit
        ipsum praesentium ratione rem magnam facere laudantium ipsa ipsam
        deleniti voluptatibus dignissimos error expedita, repellendus ducimus
        optio eum, commodi distinctio nisi libero obcaecati quae vel. A, quae
        nulla.
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        repudiandae praesentium modi consequatur veritatis earum! Sequi, neque
        ipsum sapiente autem, blanditiis magni deserunt laborum fugit quidem
        eligendi veritatis aspernatur sit quaerat dolorem molestiae nobis ex
        nisi architecto beatae! Harum labore, expedita soluta qui illum saepe
        necessitatibus molestias quisquam eligendi ipsa odio commodi modi
        obcaecati dolor quae, in officiis eveniet. Doloremque quidem delectus
        ea, iste tempora expedita omnis explicabo quaerat, modi corrupti quam
        iure excepturi accusantium quibusdam odio vel reiciendis, velit
        voluptate voluptates. Delectus, quis nulla distinctio magnam, maiores
        placeat nemo dicta quas sit numquam corrupti nam, pariatur omnis soluta
        itaque odit dolore! Accusantium, quisquam expedita recusandae
        voluptatibus rem aliquam unde earum, accusamus laboriosam atque non
        sequi ut quaerat molestias quas magnam fugit placeat eaque a, voluptas
        libero maxime. Provident cumque voluptas impedit nulla quibusdam
        pariatur neque sed quasi, inventore, laudantium amet molestiae! Ipsa
        iusto, consectetur repellat rerum quae nisi hic atque pariatur rem,
        ipsam maiores saepe quam deserunt fugit voluptas eveniet voluptate nihil
        reprehenderit sint animi, delectus neque odit deleniti minus. Suscipit
        ipsum praesentium ratione rem magnam facere laudantium ipsa ipsam
        deleniti voluptatibus dignissimos error expedita, repellendus ducimus
        optio eum, commodi distinctio nisi libero obcaecati quae vel. A, quae
        nulla.
      </p>
      <p className="scroll-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        repudiandae praesentium modi consequatur veritatis earum! Sequi, neque
        ipsum sapiente autem, blanditiis magni deserunt laborum fugit quidem
        eligendi veritatis aspernatur sit quaerat dolorem molestiae nobis ex
        nisi architecto beatae! Harum labore, expedita soluta qui illum saepe
        necessitatibus molestias quisquam eligendi ipsa odio commodi modi
        obcaecati dolor quae, in officiis eveniet. Doloremque quidem delectus
        ea, iste tempora expedita omnis explicabo quaerat, modi corrupti quam
        iure excepturi accusantium quibusdam odio vel reiciendis, velit
        voluptate voluptates. Delectus, quis nulla distinctio magnam, maiores
        placeat nemo dicta quas sit numquam corrupti nam, pariatur omnis soluta
        itaque odit dolore! Accusantium, quisquam expedita recusandae
        voluptatibus rem aliquam unde earum, accusamus laboriosam atque non
        sequi ut quaerat molestias quas magnam fugit placeat eaque a, voluptas
        libero maxime. Provident cumque voluptas impedit nulla quibusdam
        pariatur neque sed quasi, inventore, laudantium amet molestiae! Ipsa
        iusto, consectetur repellat rerum quae nisi hic atque pariatur rem,
        ipsam maiores saepe quam deserunt fugit voluptas eveniet voluptate nihil
        reprehenderit sint animi, delectus neque odit deleniti minus. Suscipit
        ipsum praesentium ratione rem magnam facere laudantium ipsa ipsam
        deleniti voluptatibus dignissimos error expedita, repellendus ducimus
        optio eum, commodi distinctio nisi libero obcaecati quae vel. A, quae
        nulla.
      </p>
    </div>
  );
}
