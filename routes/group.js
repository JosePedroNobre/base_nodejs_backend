const { Group, Movement } = require('../app/models');
const router = require('express').Router();
const verify = require('./verifyToken');
const sequelize = require('sequelize');

router.post('/', verify, async (req, res) => {

    req.body.user_id = req.userId;

    try {
        await Group.create(req.body);
        res.json({ success: "Group Created" });
    } catch (error) {
        console.log(error)
        res.status(400).json({ Error: "Error while creating the group" });
    }
});

router.get('/', verify, async (req, res) => {
    try {
        const group = await Group.findAll({
            attributes: [
                'id',
                'name',
                'limit',
                [sequelize.fn('SUM', sequelize.col('Movements.value')), 'total_spent'],
            ],
            include: [{
                attributes: [], // this is empty because I want to hide the Movement object in this query (if I want to show the object just remove this)
                model: Movement,
                required: true
            }],
            group: ['id'],
            where: {
                user_id: req.userId
            }
        });

        if (group.length === 0) return res.status(400).json({ error: "This user has no groups" })

        res.status(200).json({ groups: group }) //TODO see why this is onyl return one row

    } catch (error) {
        console.log(error)
        res.status(400).json({ Error: "Error while fetching the groups" });
    }
});

module.exports = router;