# scrapeNews

scrapeNews page is a page where you can check newest articles from different countries. You can choose from 21 countries. Data is from [newsapi.org](https://newsapi.org/). Inspiration for doing this project is [this simple task](https://github.com/gn-studio-pl/gnNews). App is build in Next with Typescript, tailwind is used for styling, state management is done with Redux.

## Technologies

```typescript
"next": "^13.4.3",
"react": "18.2.0",
"typescript": "^5.0.2"
"tailwindcss": "^3.2.7",
"axios": "^1.1.3",
"react-redux": "^8.0.5",
"@emotion/react": "^11.10.5",
"@emotion/styled": "^11.10.5",
"@mui/icons-material": "^5.11.0",
"@mui/material": "^5.10.14",
"jest": "^29.5.0",
"ts-jest": "^29.0.5",
```

## Installation

If you want to reproduce this project in your code editor

```bash
git clone https://github.com/jkielbaska/scrapeNews.git
cd ./scrapeNews
npm install
npm run dev
```

Remember that you need to put your own APIKEY (src/services/api.ts line 5)

## URLs

On every subpage there is a header and footer. In the header you can click on scrapeNews to be redirected to home page, menu button to open countries (when you click on country - you are redirected to this country subpage), change view type (block or list) and change language (ENG/PL). In the footer is a clock and when you click on country/[id] subpage footer displays how much articles there displayed.

- home page - You can click on country to be redirected to this country subpage

- country/[id] - articles from this country are displayed. When you are in the block view, every 'card' contains an article image (if provided by api), header, source, date and description (if provided by api). When in list view there is only a title, source and date. Both in block and list there is a 'SEE ARTICLE' button which opens popup to details of article. Popup contains title, authors, link to article and if possible - content scraped from link. If scraping is blocked, there is displayed content from api. If content from api is null, apoligize message is displayed.

## TODO

&check; Add scraping

&check; Add translation

&cross; Change styling to be more modern

&cross; Improve page UX (add onhover, loading, etc.)
