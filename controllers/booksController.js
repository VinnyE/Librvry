const googleApi =
  "https://www.googleapis.com/books/v1/volumes?maxResults=40&printType=books&q=";
const googleApiKey = process.env.GOOGLE_API_KEY;

exports.search = (req, res, next) => {
  const { searchTerm } = req.body;
  console.log(req.body);

  res.json({ success: true });
};
