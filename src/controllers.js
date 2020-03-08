export const postUpload = async (req, res) => {
  const {
    file: { location }
  } = req;

  if (!location) {
    res.status(400);
    res.send();
    return;
  }

  res.status(200).send({ url: location });
};
