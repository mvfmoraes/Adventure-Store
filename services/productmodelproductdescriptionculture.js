module.exports = app => {

    const { Sucesso, Falha, Finalizar } = app.helpers.results;

    const getAll = async (req, res) => {
        try {
            const resposta = await app.db('productmodelproductdescriptionculture')
                .select()
                .then(productmodelproductdescriptioncultures => Sucesso(productmodelproductdescriptioncultures))
                .catch(erro => Falha(erro));

            return res.status(200).send({ status: true, data: Finalizar(resposta) });
        } catch (erro) {
            console.log(erro)
            return res.status(400).send({ status: false, erros: erro });
        }
    }

    const get = async (req, res) => {
        const { ProductModelID } = req.params;
        try {
            const resposta = await app.db('productmodelproductdescriptionculture')
                .select()
                .where({ ProductModelID })
                .then(productmodelproductdescriptioncultures => Sucesso(productmodelproductdescriptioncultures))
                .catch(erro => Falha(erro));

            return res.status(200).send({ status: true, data: Finalizar(resposta) });
        } catch (erro) {
            console.log(erro)
            return res.status(400).send({ status: false, erros: erro });
        }
    }

    return {
        getAll,
        get
    }
}