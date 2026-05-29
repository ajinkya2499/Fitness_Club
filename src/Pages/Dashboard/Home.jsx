import React from "react";
import styles from "./Home.module.css";

// import gymImage from "../../assets/ImagPM.png";

function Home() {
  return (
    <div className={styles.home}>

      {/* HERO IMAGE */}
      <div className={styles.heroSection}>
        {/* <img
          src={gymImage}
          alt="gym"
          className={styles.heroImage}
        /> */}
      </div>

      {/* CONTENT SECTION */}
      <div className={styles.contentSection}>
        <h1 className={styles.heading}>
          Welcome To TheFitFlex
        </h1>

        <p className={styles.description}>
          Train harder, stay healthier, and transform your body with our
          premium fitness programs, expert trainers, and nutrition guidance.
        </p>
      </div>

      {/* CARD SECTION */}
      <div className={styles.cardContainer}>

        {/* CARD 1 */}
        <div className={styles.card}>
          <h2>Trainer</h2>

          <p>
            Professional trainers to guide your fitness journey and build
            strength.
          </p>
        </div>



        {/* CARD 3 */}
        <div className={styles.card}>
          <h2>Membership</h2>

          <p>
            Flexible membership plans with premium gym facilities and support.
          </p>
        </div>

                {/* CARD 2 */}
        <div className={styles.card}>
          <h2>Diet & Protein</h2>

          <p>
            Personalized diet plans and supplements for better performance.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;