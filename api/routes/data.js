const express = require("express");
const router = express.Router();
const { checkAuth } = require("../middlewares/authentication.js");

//models import
import User from "../models/user.js";



router.get("/data", checkAuth, async (req, res) =>{

    const userId = req.userData._id;
    console.log(userId);

    console.log(req.query.itemId);



    const toSend = {
        status: "success",
        testing:1234
    }

    res.json(toSend);

});

module.exports = router;