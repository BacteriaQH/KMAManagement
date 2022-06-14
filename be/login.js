app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body);
    db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, result) => {
        if (err) {
            console.log(err);
            res.send({
                err: err,
            });
        } else {
            if (result.length >= 1) {
                res.status(200).send({
                    result,
                    code: 200,
                });
            } else {
                console.log('no result');
                return res.status(200).send({ code: 404, message: 'email or password is incorrect' });
            }
        }
    });
});
