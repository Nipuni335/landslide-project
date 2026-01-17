module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  // Simple admin check (temporary)
  if (!token || token !== "admin123") {
    return res.status(401).json({
      message: "Admin access only",
    });
  }

  next();
};
