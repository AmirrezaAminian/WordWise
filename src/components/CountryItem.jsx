import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span className={styles.img}><img  src={country.emoji} alt="ss"/></span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
