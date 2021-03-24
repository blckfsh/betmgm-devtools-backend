const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/betmgm/nj/api', (req, res) => {
    request(
        { url: 'https://casino.nj.betmgm.com/en/games/api/content/GetGameMetaDataFromLMTAsync' },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: error.message });
            }
            res.json(JSON.parse(body));
        }
    )
})

router.get('/betmgm/mi/api', (req, res) => {
    request(
        { url: 'https://casino.mi.betmgm.com/en/games/api/content/GetGameMetaDataFromLMTAsync' },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: error.message });
            }
            res.json(JSON.parse(body));
        }
    )
})

router.get('/betmgm/pa/api', (req, res) => {
    request(
        { url: 'https://casino.pa.betmgm.com/en/games/api/content/GetGameMetaDataFromLMTAsync' },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: error.message });
            }
            res.json(JSON.parse(body));
        }
    )
})

router.get('/betmgm/wv/api', (req, res) => {
    request(
        { url: 'https://casino.wv.betmgm.com/en/games/api/content/GetGameMetaDataFromLMTAsync' },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: error.message });
            }
            res.json(JSON.parse(body));
        }
    )
})

router.get('/borgata/nj/api', (req, res) => {
    request(
        { url: 'https://casino.borgataonline.com/en/games/api/content/GetGameMetaDataFromLMTAsync' },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: error.message });
            }
            res.json(JSON.parse(body));
        }
    )
})

router.get('/borgata/pa/api', (req, res) => {
    request(
        { url: 'https://casino.pa.borgataonline.com/en/games/api/content/GetGameMetaDataFromLMTAsync' },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: error.message });
            }
            res.json(JSON.parse(body));
        }
    )
})

module.exports = router