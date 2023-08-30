import styles from "@/styles/ui/badge/badge.module.css";

const Badge = ({lebel, value}) => {
  return (
    <span className={styles.container}>
      <span className={styles.text}>
        {lebel} <span className={styles.value}>{value}</span>
      </span>
    </span>
  );
};

export default Badge;
