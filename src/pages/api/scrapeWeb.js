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
    res.status(200).send(article.content); // or .textContent, it is rendered as just text. Can't decide which one to use
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

//   try {
//     const r1 = await axios.get(decodedUrl);
//     const firstResult = r1.data.articles[0];
//     // const r2 = await axios.get(firstResult.decodedUrl);\
//     const r2 = await axios.get(decodedUrl);
//     const dom = new JSDOM(r2.data, {
//       url: firstResult.decodedUrl,
//     });
//     const article = new Readability(dom.window.document).parse();
//     res.status(200).json({ content: article.textContent });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Can't load this page because of security polisy. If you want to see whole article, click on "Click to see original article"" });
//   }
// }
