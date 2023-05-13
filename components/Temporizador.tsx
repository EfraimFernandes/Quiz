import { CountdownCircleTimer } from "react-countdown-circle-timer"
import styles from "../src/styles/Temporizador.module.css"

interface TemporizadorProps {
    key: any
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer 
                duration= {props.duracao} 
                size= {120} 
                isPlaying= {true}
                onComplete= {props.tempoEsgotado}
                colors= "#bce596"
            >
            {({remainingTime}) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}