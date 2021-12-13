module.exports = app => {

    const { Sucesso, Falha, Finalizar } = app.helpers.results;

    const getAll = async (req, res) => {
        try {
            const resposta = await app.db('salesorderheadersalesreason')
                .select()
                .then(salesorderheadersalesreasons => Sucesso(salesorderheadersalesreasons))
                .catch(erro => Falha(erro));

            return res.status(200).send({ status: true, data: Finalizar(resposta) });
        } catch (erro) {
            console.log(erro)
            return res.status(400).send({ status: false, erros: erro });
        }
    }

    const get = async (req, res) => {
        const { SalesOrderID } = req.params;
        try {
            const resposta = await app.db('salesorderheadersalesreason')
                .select()
                .where({ SalesOrderID })
                .then(salesorderheadersalesreasons => Sucesso(salesorderheadersalesreasons))
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