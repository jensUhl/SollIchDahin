const express = require('express');
const router = express.Router();
const Module = require('../models/module');

//Add Module
router.post('/addModule', (req, res, next) => {
    let newModule = new Module({
        id: req.body.id,
        name: req.body.name
    });
    console.log(newModule);
    Module.addModule(newModule, (err, module) => {
        if (err) {
            console.log(`Modul ${newModule.name} wurde NICHT hinzugefügt`);
            res.json({ success: false, msg: 'Failed to add Module' })
        } else {
            console.log(`Modul ${newModule.name} wurde hinzugefügt`);
            res.json({ success: true, msg: 'Module added', result: module });
        }
    })
});

router.get('/getModule', (req, res, next) => {
    //const id = req.headers['id'];
    //console.log(id);
    //Module.findById(id, res => console.log(res),
    //error => console.log(error));
    //var id = parseInt(req.headers.id);
    var name = req.headers.name;
    console.log(name);
    Module.getModuleByName(name, (err, module) => {
        if (err) return res.json({ success: false });
        res.json(module);

    });
});

router.get('/getAllModules', (req, res, next) => {
    var query = {}
    Module.getAllModules(query, (err, modules) => {
        if (err) return res.json({ success: false, msg: "Error when retreiving data from backend" });
        res.json({ msg: "Data retrieved successfully", modules: modules });
    })
})


module.exports = router;