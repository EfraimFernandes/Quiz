import QuestaoModel from "../../../model/questao";
import RespostaModel from "../../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(201, "Qual bicho transmite a Doença de chagas?", [
        RespostaModel.errada("Abelha"),
        RespostaModel.errada("Barata"),
        RespostaModel.errada("Pulga"),
        RespostaModel.certa("Barbeiro"),      
    ], false),
    new QuestaoModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "Jerimun"?', [
        RespostaModel.errada("Caju"),
        RespostaModel.errada("Côco"),
        RespostaModel.errada("Chuchu"),
        RespostaModel.certa("Abóbora"),      
    ], false),
    new QuestaoModel(203, "Qual é o coletivo de cães?", [
        RespostaModel.errada("Manada"),
        RespostaModel.errada("Alcateia"),
        RespostaModel.errada("Rebanho"),
        RespostaModel.certa("Matilha"),      
    ], false),
    new QuestaoModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        RespostaModel.errada("Equilátero"),
        RespostaModel.errada("Isóceles"),
        RespostaModel.errada("Trapézio"),
        RespostaModel.certa("Escaleno"),      
    ], false),
]

export default questoes