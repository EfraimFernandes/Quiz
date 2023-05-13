import styles from '../src/styles/Estatistica.module.css'

interface EstatisticaProps {
    valor: any
    texto: string
    corFundo?: string
    corFornte?: string
}

export default function Estatistica(props) {
    return (
        <div className={styles.Estatistica}>
            <div className={styles.valor} style={{
                backgroundColor: props.corFundo ?? "#fdd60f",
                color: props.corFornte ?? "#333"
            }}>
                {props.valor}
            </div>
            <div className={styles.texto}>
                {props.texto}
            </div>
        </div>
    )
}