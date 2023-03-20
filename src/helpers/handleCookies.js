const cookieHelper = (res, cookieName, cookieValue) => {
  const options = {
    httpOnly: true,
    maxAge: 3600000,
    secure: true,
  };

  res.cookie(cookieName, cookieValue, options);
}
module.exports =  cookieHelper 