const express = require('express');
const app = express();

app.use('/healthcheck', require('express-healthcheck')());


app.use(function (req, res, next) {
    if (req.header('Authorization')
        && req.header('Authorization') === `Token ${process.env.NODE_API_PASS}`) {
        return next();
    }

    return res.status(401).json({ error: 'Header de autorização não informada ou inválido.' });
});

app.use('/', function (req, res) {
    res.json({ data: 'Opaa!! Sua aplicação está rodando com sucesso!' });
});

app.listen(3000, function () {
    console.log('Application running in 3000!');
});
