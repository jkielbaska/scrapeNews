const axios = require("axios");
const { JSDOM } = require("jsdom");
const { Readability } = require("@mozilla/readability");

export default async function handler(req, res) {
  const { url } = req.query;
  const decodedUrl = decodeURIComponent(url);
  let isPending = true;

  try {
    isPending = true;
    const r1 = await axios.get(decodedUrl);
    const dom = new JSDOM(r1.data, {
      url: decodedUrl,
    });
    const article = new Readability(dom.window.document).parse();
    content = article.content;
    res.status(200).send({ isPending, content }); // or .textContent
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(
        "Can't load this page due to security polisy. If you want to see whole article, click on 'Link to article'"
      );
    res.status(404).json({ error: "page not found" });
  } finally {
    isPending = false;
  }
}
