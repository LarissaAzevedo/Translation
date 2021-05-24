import useTranslation from "next-translate/useTranslation";

import styles from "../styles/Home.module.css";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{t("about:title")}</h1>
      </main>
    </div>
  );
}
