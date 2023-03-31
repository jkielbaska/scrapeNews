const axios = require("axios");
const { JSDOM } = require("jsdom");
const { Readability } = require("@mozilla/readability");

export default async function handler(req, res) {
  const { url } = req.query;
  const decodedUrl = decodeURIComponent(url);
  let isPending = true;
  let content;

  const session = axios.create({
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
      "Content-Type": "text/html",
    },
  });

  try {
    isPending = true;
    const r1 = await session.get(decodedUrl);
    const dom = new JSDOM(r1.data, {
      url: decodedUrl,
    });
    const article = new Readability(dom.window.document).parse();
    content = article?.content;
    res.status(200).send(content); // or .textContent
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(
        "Can't load this page due to security polisy. If you want to see whole article, click on 'Link to article'"
      );
  } finally {
    isPending = false;
  }
}
