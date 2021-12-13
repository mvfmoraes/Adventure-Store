module.exports = app => {

    const { Sucesso, Falha, Finalizar } = app.helpers.results;

    const getAll = async (req, res) => {
        try {
            const resposta = await app.db('errorlog')
                .select()
                .then(errorlogs => Sucesso(errorlogs))
                .catch(erro => Falha(erro));

            return res.status(200).send({ status: true, data: Finalizar(resposta) });
        } catch (erro) {
            console.log(erro)
            return res.status(400).send({ status: false, erros: erro });
        }
    }

    const get = async (req, res) => {
        const { ErrorLogID } = req.params;
        try {
            const resposta = await app.db('errorlog')
                .select()
                .where({ ErrorLogID })
                .then(errorlogs => Sucesso(errorlogs))
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