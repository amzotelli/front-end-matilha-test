import styles from '../styles/Title.module.css';

export default function Title(props) {
  return (
    <section>
      <div>
        <h5 className={ styles.subtitle }>VIKENDI WONDERLAND GIVEAWAY</h5>
        <h3 className={ styles.title }>{ props.title }</h3>
      </div>
    </section>
  )
}
