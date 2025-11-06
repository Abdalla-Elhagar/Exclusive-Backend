export const logOut = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
    maxAge: 86400000,
  });

  return res.status(200).json({ message: "User logged out successfully" });
};
