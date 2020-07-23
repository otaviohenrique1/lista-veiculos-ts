export default class Veiculo {
    private id?: number;
    private nome?: string;
    private paisOrigem?: string;
    private tipo?: string;
    private imagem?: string;
    // private imagem2?: File;
    private fabricante?: string;
    private utilizadores?: string;
    private quantidadeProduzida?: number;
    private peridoServico?: Date;
    private massa?: number;
    private comprimento?: number;
    private altura?: number;
    private largura?: number;
    private tripulacao?: number;
    private custoUnitario?: number;
    private armamento?: string | [];

    constructor(id?: number, nome?: string, paisOrigem?: string, tipo?: string, imagem?: string, fabricante?: string, utilizadores?: string, quantidadeProduzida?: number, peridoServico?: Date, massa?: number, comprimento?: number, altura?: number, largura?: number, tripulacao?: number, custoUnitario?: number, armamento?: string | []) {
        this.id = id;
        this.nome = nome;
        this.paisOrigem = paisOrigem;
        this.tipo = tipo;
        this.imagem = imagem;
        this.fabricante = fabricante;
        this.utilizadores = utilizadores;
        this.quantidadeProduzida = quantidadeProduzida;
        this.peridoServico = peridoServico;
        this.massa = massa;
        this.comprimento = comprimento;
        this.altura = altura;
        this.largura = largura;
        this.tripulacao = tripulacao;
        this.custoUnitario = custoUnitario;
        this.armamento = armamento;
    }

    public setId(id?: number) {
        this.id = id;
    }

    public setNome(nome?: string) {
        this.nome = nome;
    }

    public setPaisOrigem(paisOrigem?: string) {
        this.paisOrigem = paisOrigem;
    }

    public setTipo(tipo?: string) {
        this.tipo = tipo;
    }

    public setImagem(imagem?: string) {
        this.imagem = imagem;
    }

    public setFabricante(fabricante?: string) {
        this.fabricante = fabricante;
    }

    public setUtilizadores(utilizadores?: string) {
        this.utilizadores = utilizadores;
    }

    public setQuantidadeProduzida(quantidadeProduzida?: number) {
        this.quantidadeProduzida = quantidadeProduzida;
    }

    public setPeridoServico(peridoServico?: Date) {
        this.peridoServico = peridoServico;
    }

    public setMassa(massa?: number) {
        this.massa = massa;
    }

    public setComprimento(comprimento?: number) {
        this.comprimento = comprimento;
    }

    public setAltura(altura?: number) {
        this.altura = altura;
    }

    public setLargura(largura?: number) {
        this.largura = largura;
    }

    public setTripulacao(tripulacao?: number) {
        this.tripulacao = tripulacao;
    }

    public setCustoUnitario(custoUnitario?: number) {
        this.custoUnitario = custoUnitario;
    }

    public setArmamento(armamento?: string | []) {
        this.armamento = armamento;
    }

    public getId() {
        return this.id;
    }

    public getNome() {
        return this.nome;
    }

    public getPaisOrigem() {
        return this.paisOrigem;
    }
    
    public getTipo() {
        return this.tipo;
    }

    public getImagem() {
        return this.imagem;
    }

    public getFabricante() {
        return this.fabricante;
    }

    public getUtilizadores() {
        return this.utilizadores;
    }

    public getQuantidadeProduzida() {
        return this.quantidadeProduzida;
    }

    public getPeridoServico() {
        return this.peridoServico;
    }

    public getMassa() {
        return this.massa;
    }

    public getComprimento() {
        return this.comprimento;
    }

    public getAltura() {
        return this.altura;
    }

    public getLargura() {
        return this.largura;
    }

    public getTripulacao() {
        return this.tripulacao;
    }

    public getCustoUnitario() {
        return this.custoUnitario;
    }

    public getArmamento() {
        return this.armamento;
    }
}