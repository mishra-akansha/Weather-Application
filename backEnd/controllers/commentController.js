import Comment from '../models/Comment.js';

export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find().populate('author', 'name').populate('postId', 'title');
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createComment = async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};