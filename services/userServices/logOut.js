export const logOut = async (req, res) => {
  try {
    return res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    console.error("Logout error:", err.message);
    return res.status(500).json({ message: "Server error during logout" });
  }
};
