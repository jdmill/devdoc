const fs = require('fs');
const path = require('path');
const router = require('express').Router();

router.get('/app/package', async (req,res) => {
    try {
        fs.writeFile('', req.body)
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/app/package', async (req,res) => {
    try {
        fs.writeFile('/Users/rowe2ry/Desktop/test.txt', req.body, err => {
            if (err) {
                throw new Error('Something went horribly wrong');
            };
        })
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;