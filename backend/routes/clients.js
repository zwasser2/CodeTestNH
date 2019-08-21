var express = require('express');
var router = express.Router();

const dictionaryClients = {
    '24601': [{fname: 'Homer', lname: 'Simpson', time: '7:00AM', kind: "New Patient"}, {fname: 'Marge', lname: 'Simpson', time: '8:00AM', kind: "New Patient"}],
    '10303': [{fname: 'Sterling', lname: 'Archer', time: '8:00AM', kind: "New Patient"}, {fname: 'Cyril', lname: 'Figis', time: '8:30AM', kind: "Follow-up"}, {fname: 'Ray', lname: 'Gilette', time: '9:00AM', kind: "Follow-up"}],
    '00000': []
}

router.get('/', function(req, res, next) {
    let query = req._parsedOriginalUrl.query
    query = query.split('id=')[1]
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send(dictionaryClients[query]);
});

module.exports = router;