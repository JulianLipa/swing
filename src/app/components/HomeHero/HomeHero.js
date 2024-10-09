import Image from "next/image";
import styles from "@/app/components/HomeHero/HomeHero.module.css";

const HomeHero = () => {
  return (
    <section className={styles["hero"]}>
      <div className={styles["textos"]}>
         <h1>DONDE LA MÚ SICA NUNCA MUERE</h1>
      <p>
        Swing Club te trae una cuidada selección artículos perfectos para todos
        los amantes de la música. Cada producto está diseñado para llevarte en
        un viaje sonoro único. ¡Explorá nuestra colección y reviví la magia de
        la música en formato físico!
      </p>
      <button>Comprá ya</button>
      </div>
      <div className={styles["divimg"]}>
        <Image
        src='/imgs/miles-davis.svg'
        alt='Trumpet Player'
        width={200}
        height={200}
        className={styles["img"]}
      />
      </div>
      
    </section>
  );
};

export default HomeHero;
