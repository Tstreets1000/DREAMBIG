module.exports = function (req, res, next) {
	if (!req.student) return res.status(401).json('Unauthorized');
	next();
};