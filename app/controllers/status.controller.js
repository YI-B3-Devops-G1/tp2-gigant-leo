exports.get = (req, res) => {
    res.json({
		status: "OK",
		postgresUptime: String,
		redisConnectedClients: Number
	})
};