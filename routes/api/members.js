const express = require("express");
const router = express.Router();
const uuid = require("uuid"); 
const members = require("../../Members");


// get all members
router.get("/", (req, res) => {
    res.json(members);
})

// get single member

router.get("/:id", (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        res.json(members.filter(member =>  member.id === parseInt(req.params.id)))
    }else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}`});
    } 
})


// creata Member
router.post("/", (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: "active",
    }

    if(!newMember.name || !newMember.email){
        return res.status(400).json({ msg: "please make sure that you have added name and email."})
    }
    members.push(newMember);
    res.json(members)
})


// update Member


router.put("/:id", (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        const upMember = req.body;
        members.forEach((member) => {
            if(member.id === parseInt(req.params.id)) {
                member.name = upMember.name ? upMember.name : member.name;
                member.email = upMember.email ? upMember.email : member.email;

                res.json({ msg: "Member updated", member })
            }
        })
    }else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}`});
    } 
})

// Delete member
router.delete("/:id", (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        res.json({
            msg: "member deleted",
            members: members.filter(member =>  member.id !== parseInt(req.params.id))
        });
    }else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}`});
    } 
});


module.exports = router;
