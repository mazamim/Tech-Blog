const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require('../utils/auth');

router.get("/", withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });

    
        const user = userData.get({ plain: true });

    
        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get("/newPost", withAuth, async (req, res) => {
    try {
        res.render("addnewpost", {
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Renders the edit post page where you can edit a post
router.get("/editPost/:id", withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        // Serialize data so the template can read it
        const post = postData.get({ plain: true });

        // Pass serialized data and session flag into template
        res.render('editpost', {
            post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Renders the edit comment page where you can edit a comment
router.get("/editComment/:id", withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        // Serialize data so the template can read it
        const comment = commentData.get({ plain: true });

        // Pass serialized data and session flag into template
        res.render('edit-comment', {
            comment,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;