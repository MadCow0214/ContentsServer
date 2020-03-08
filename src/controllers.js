export const postUpload = async (req, res) => {
  const {
    file: { location }
  } = req;

  if (!location) {
    res.status(400);
    return;
  }

  res.status(200);
  res.json({ url: location });
};
