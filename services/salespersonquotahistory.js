module.exports = app => {

    const { Sucesso, Falha, Finalizar } = app.helpers.results;

    const getAll = async (req, res) => {
        try {
            const resposta = await app.db('salespersonquotahistory')
                .select()
                .then(salespersonquotahistorys => Sucesso(salespersonquotahistorys))
                .catch(erro => Falha(erro));

            return res.status(200).send({ status: true, data: Finalizar(resposta) });
        } catch (erro) {
            console.log(erro)
            return res.status(400).send({ status: false, erros: erro });
        }
    }

    const get = async (req, res) => {
        const { SalesPersonID } = req.params;
        try {
            const resposta = await app.db('salespersonquotahistory')
                .select()
                .where({ SalesPersonID })
                .then(salespersonquotahistorys => Sucesso(salespersonquotahistorys))
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