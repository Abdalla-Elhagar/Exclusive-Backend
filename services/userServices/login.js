export const handleLogin = async (req, res) => {
  try {
    const cookieOptions = req.app.locals.getCookieOptions();

    const clearOptions = {
      httpOnly: true,
      path: "/",
    };

    if (process.env.NODE_ENV === "production") {
      clearOptions.secure = true;
      clearOptions.sameSite = "none";
    }

    res.clearCookie("token", clearOptions);

    return res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    console.error("Logout error:", err.message);
    return res.status(500).json({ message: "Server error during logout" });
  }
};
