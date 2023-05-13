import questoes from '../bancoDeQuestoes'
export default (req, res) => {
    const idSelecionado = +req.query.id

    const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

    if(unicaQuestaoOuNada.length === 1){
        const questaoSelecionado = unicaQuestaoOuNada[0].embaralharRespostas()
        res.status(200).json(questaoSelecionado.ConverterParaObjeto())
    } else {
        res.status(204).send()
    }
}