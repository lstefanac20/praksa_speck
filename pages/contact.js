import Head from 'next/head';
import React, {useState} from 'react';
// import { Resend } from 'resend';
import styles from '../styles/Contact.module.css'; 

const Contact = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [selectedBudget, setSelectedBudget] = useState('');


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const handleBudgetClick = (budget) => {
    setSelectedBudget(budget); 
  };

  return (
    <>
    <div style={{ fontFamily: "'heywow', sans-serif", overflow:'hidden',  margin: 0, padding: 0 }}>
      <Head>
        <title>Contact Us | Speck</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className={styles.navLeft}>
        <button className={styles.getInTouch}>Get In Touch</button>
        <button className={styles.navToggle} aria-label="Open navigation menu" onClick={toggleMenu}>
          &#9776;
        </button>
        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <a href="#">Services</a>
          <a href="#">Our Work</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
        </div>
        </div>
      </nav>
      <header className={styles.header}>
        <div>
          <h1 className={styles.h1}>Let's Collaborate.</h1>
          <div>
            <h2 className={styles.h2}>Let's Collaborate<span className={styles.redDot}>.</span></h2>
          </div>
        </div>
      </header>
      <section className={styles.section}>
        <form method="post" className={styles.form}>
          <div className={styles.formGroup}>
            <input className={styles.formInput} type="text" id="first_name" name="first_name" placeholder="First name*" required />
            <input className={styles.formInput} type="text" id="last_name" name="last_name" placeholder="Last name*" required />
          </div>
          <div className={styles.formGroup}>
            <input type="tel" id="phone" name="phone" placeholder="Phone number*" required className={styles.formInput}/>
            <input type="text" id="company" name="company" placeholder="Company*" required className={styles.formInput}/>
          </div>
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <select name="hear_about" id="hear_about" className={styles.formSelect}>
              <option value="" disabled selected hidden>How did you hear about us?</option>
              <option value="social_media">Social media (Facebook, Instagram, LinkedIn)</option>
              <option value="word_of_mouth">Word of mouth</option>
              <option value="google">Google</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <select name="challenge" id="challenge" className={styles.formSelect}>
              <option value="" disabled selected hidden>What challenge are you trying to solve</option>
              <option value="new_product">Creating a new digital product</option>
              <option value="scaling_business">Scaling my business</option>
              <option value="digital_transformation">Stepping into digital transformation</option>
              <option value="optimizing">Auditing and optimizing my infrastructure/processes</option>
              <option value="building_team">Building a team of experts</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <label className={`${styles.label} ${styles.budget}`}>What is your budget?*</label>
          <div className={styles.budgetOptions}>
          <button>Up to 50.000 eur</button>
              <button>50.000 - 100.000 eur</button>
              <button>100.000 - 250.000 eur</button>
              <button>Over 250.000 eur</button>
              <button>Not sure yet</button>
          </div>
        </div>
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <textarea className={styles.formTextArea} name="project_scope" placeholder="Tell us more about your project and scope*" required ></textarea>
          </div>
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <div className={styles.uploadBox}>
              Feel free to attach any additional documents!
              <input type="file" name="file_upload" id="file_upload"/>
            </div>
          </div>
          <div className={`${styles.formGroup} ${styles.fullWidth} ${styles.checkboxGroup}`}>
            <label htmlFor="newsletter">
              <input type="checkbox" name="newsletter" id="newsletter" />
              <span className={styles.checkmark}></span>
              <span>Stay up to date with the latest software development and design trends brought to you by Speck experts</span>
            </label>
          </div>
          <div className={`${styles.formGroup} ${styles.fullWidth} ${styles.checkboxGroup}`}>
            <label htmlFor="privacy_policy">
              <input type="checkbox" name="privacy_policy" id="privacy_policy" required/>
              <span className={styles.checkmark}></span>
              <span>I agree to the <a href="#">Privacy policy</a></span>
            </label>
          </div>
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <button type="submit" className={styles.submitButton}>Send</button>
          </div>
        </form>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>
            <h3>Our Offices</h3>
            <div className={styles.office}>
              <h4>Indiana</h4>
              <p>55 Monument Circle<br />Indianapolis 46204<br /><a href="tel:+13175365585">+1 (317) 536-5585</a></p>
            </div>
            <div className={styles.office}>
              <h4>Croatia</h4>
              <p>Petračićeva 6<br />10000 Zagreb<br /><a href="tel:+385953587050">+385 95 3587 050</a></p>
            </div>
          </div>
          <div className={styles.footerSection}>
            <h3>Contact</h3>
            <div className={styles.socialIcons}>
              <a href="#"><img src="/facebook.png" alt="Facebook" /></a>
              <a href="#"><img src="/linkedin.png" alt="LinkedIn" /></a>
              <a href="#"><img src="/clutch_small_logo.png" alt="Clutch" /></a>
            </div>
            <p><a href="mailto:hello@speck.agency">hello@speck.agency</a></p>
            <p><a href="mailto:career@speck.agency">career@speck.agency</a></p>
          </div>
          <div className={styles.footerSection}>
            <h3>Legal</h3>
            <div className={styles.footerSectionA}>
            <p><a href="#">Privacy Policy</a></p>
            <p><a href="#">Company</a></p>
            <p><a href="#">EU Project</a></p>
            </div>
            <p>© 2021 Speck d.o.o.</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
};

export default Contact;