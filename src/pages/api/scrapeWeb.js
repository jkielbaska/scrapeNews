const axios = require("axios");
const { JSDOM } = require("jsdom");
const { Readability } = require("@mozilla/readability");

export default async function handler(req, res) {
  const { url } = req.query;
  const decodedUrl = decodeURIComponent(url);

  try {
    const r1 = await axios.get(decodedUrl);
    const dom = new JSDOM(r1.data, {
      url: decodedUrl,
    });
    const article = new Readability(dom.window.document).parse();
    res.status(200).send(article.content); // or .textContent
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(
        "Can't load this page due to security polisy. If you want to see whole article, click on 'Click to see original article'"
      );
    res.status(404).json({ error: "page not found" });
  }
}
