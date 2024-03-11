A prototype SaaS that scrapes stock news and gives users:
* Overall sentiment of S&P 500 stocks
* Stocks' overall news sentiments based on news articles
* News summaries for all stocks
* Number of news articles mentioning each ticker in the last 2 days

Main dashboard consists of 4 sections in a grid, these are:
1. News sentiments, summaries and mentions of highest valued stocks
2. News sentiments, summaries and mentions of custom stocks picked by user
3. News sentiments, summaries and mentions of top stocks by sentiment
4. News sentiments, summaries and mentions of lowest stocks by sentiment
![demo image overall](overall_demo.png)
![demo image](demomac.png)

This is just a prototype. Security vulnerabilities, backend infrastructure and other more technical aspects aren't taken into account.

This project uses the following libraries, frameworks and APIs:
1. Stripe NodeJS API
2. Firebase SDK
3. Alphavantage financial data API
4. Polygon financial data API
