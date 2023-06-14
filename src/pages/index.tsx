import { useEffect, useState } from 'react'
import Questao from '../../components/Questao'
import QuestaoModel from '../../model/questao'
import RespostaModel from '../../model/resposta'
import Botao from '../../components/Botao'
import Questionario from '../../components/Questionario'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from  "../styles/Inicio.module.css"


export default function Home() {
const jogoURL = "/jogo"
  return (
    <div className={styles.at}> 
      <div className={styles.att}>
        <div className={styles.enunciado}>
            <span className={styles.texto}>Este quiz foi desenvolvido pelos alunos:</span>
        </div>

        <div className={styles.texto2}>
          <ul>
            Efraim Quintunda Fernandes -  323103429
          </ul>
          <ul>
            Gabriel Yochio De Oliveira -  320102724
          </ul>
          <ul>
            Giovana Lopes Venancio -  323101131
          </ul>
          <ul>
            Henrique Reis de Oliveira -  320107691
          </ul>
          <ul>
            Mateus Matos Xavier -  323101020
          </ul>
          <ul>
            Richard Marco Mamani Huanca -  317109163
          </ul>
        </div>
        
      </div>

      <Link href="/jogo"><button className={styles.botao}>Iniciar Quiz</button></Link>
    </div>
  )
}
