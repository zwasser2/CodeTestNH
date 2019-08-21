var express = require('express');
var router = express.Router();

/* GET users listing. */

const physician = function(id, fname, lname, email) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.email = email
}
const phys1 = new physician('24601', 'Julius', 'Hibert', 'Hibert@notablehealth.com')
const phys2 = new physician('10303', 'Algernop', 'Krieger', 'Kriegar@notablehealth.com')
const phys3 = new physician('00000', 'Nick', 'Riviera', 'Riviera@notablehealth.com')
const listOfPhysicians = [phys1, phys2, phys3]

router.get('/', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    res.send(listOfPhysicians);
});

module.exports = router;
