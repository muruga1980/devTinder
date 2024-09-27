const adminAuth = (req, res, next) => {
  const tocken = "xyz";
  const isAdminAuthrosized = tocken === "xyz";
  if (!isAdminAuthrosized) {
    res.send("admin access provided for admin");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  const tocken = "xyzxxxxxxxx";
  const isAdminAuthrosized = tocken === "xyz";
  if (!isAdminAuthrosized) {
    res.send("user authondication check");
  } else {
    next();
  }
};

module.exports = { adminAuth, userAuth };
