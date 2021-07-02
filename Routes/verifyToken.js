import jwt from "jsonwebtoken";

// check user if token is availiable
export default function (req, res, next) {
	const token = req.header("auth-token");
	if (!token) return res.status(401).send("Access Denied");

	try {
		const verified = jwt.verify(token, process.env.SECRET);
		req.user = verified;
		next();
	} catch (error) {
		res.status(400).send("Invalid Token");
	}
}
