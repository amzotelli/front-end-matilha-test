import propTypes from 'prop-types';

import styles from '../../styles/subcomponents/Title.module.css';

export default function Title(props) {
  const { title } = props;
  return (
    <section>
      <h5 className={styles.subtitle}>VIKENDI WONDERLAND GIVEAWAY</h5>
      <h3 className={styles.title}>{title}</h3>
    </section>
  );
}

Title.propTypes = {
  title: propTypes.string.isRequired,
};
