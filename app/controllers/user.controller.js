const text = "This is a demo web application implemented with MEARN stack (Node.js + Typescript + Express.js for routing on the backend, MongoDB as a persistence level, and React + Redux library on the frontend)";

exports.allAccess = (req, res) => {
  res.status(200).send(text);
};

exports.userPage = (req, res) => {
  res.status(200).send("user details");
};

exports.adminPage = (req, res) => {
  res.status(200).send("admin area");
};
