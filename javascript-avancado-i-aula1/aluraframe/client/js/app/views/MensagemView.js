class MensagemView extends View {

    constructor(elemento) {
        super(elemento); //esse super está se referindo ao pai, lá na página view
    }

    template(model) {

        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }

}