import propTypes from 'prop-types';

import styles from '../../styles/StepLine.module.css';

export default function StepLine(props) {
  const { step, text } = props;
  return (
    <section className={styles.border}>
      <span><h5 className={ styles.item }>STEP { step }</h5></span>
      <span><h3 className={styles.line}>{text}</h3></span>
    </section>
  );
}

StepLine.propTypes = {
  step: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};
