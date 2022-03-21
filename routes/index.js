const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./api/homeRoutes');
const userRoutes = require('./api/userRoutes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/api/user', userRoutes);



module.exports = router;