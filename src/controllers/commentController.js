const Comment = require("../models/commentModel");

const addComment = async (req, res) => {

    try {

        const { userId, serviceId, comment } = req.body;

        const newComment = new Comment({
            userId,
            serviceId,
            comment
        })

        const cmnt = await newComment.save();

        res.json({
            success: true,
            message: "Comment added successfully!",
            cmnt,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
}

const getComments = async (req, res) => {

    try {

        const comment = await Comment.find().populate("serviceId").populate("userId");

        res.json({
            success: true,
            message: "All comments",
            comment,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
}




const updateComment = async (req, res) => {

}



module.exports = { addComment, getComments, updateComment };