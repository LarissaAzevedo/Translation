import { withTranslation } from "../i18n";

import styles from "../styles/Home.module.css";

const About = ({ t }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{t("about:title")}</h1>
      </main>
    </div>
  );
};

export default withTranslation()(About);
