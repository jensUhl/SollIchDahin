const express = require('express');
const router = express.Router();
const UserModules = require('../models/userModules')

//Add new module to user
router.post('/addModuleToUser', (req, res, next) => {
    let newUserModule = {
        username: req.body.username,
        newModule: req.body.newModule
    }
    console.log(req.user);
    console.log(newUserModule);
    UserModules.addModuleToUser(newUserModule, (err, userModules) => {
        if (err) console.log(err)
        res.json({ msg: "Modul wurde erfolgreich hinzugefügt" });
    })

});

//Get modules of user
router.post('/getUserModules', (req, res, next) => {
    let username = req.body.username;
    UserModules.getUserModules(username, (err, userModules) => {
        if (err) { console.log(err) }
        else {
            console.log(userModules);
            res.json({ modules: userModules });
        }
    })
})

module.exports = router