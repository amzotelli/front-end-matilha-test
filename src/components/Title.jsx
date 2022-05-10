import styles from '../styles/Container.module.css';

export default function Title(props) {
  return (
    <section>
      <div className={ styles.container }>
        <h5 className={ styles.subtitle }>VIKENDI WONDERLAND GIVEAWAY</h5>
        <h3 className={ styles.title }>{ props.title }</h3>
      </div>
    </section>
  )
}
