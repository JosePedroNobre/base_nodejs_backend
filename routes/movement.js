const { Movement } = require('../app/models');
const router = require('express').Router();
const verify = require('./verifyToken');

router.post('/', verify, async (req, res) => {

    try {
        const movement = await Movement.create(req.body);
        res.json(movement);
    } catch (error) {
        console.log(error)
        res.status(400).json({ Error: "Error while creating the movement" });
    }
});

module.exports = router;