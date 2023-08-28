import finnhub
finnhub_client = finnhub.Client(api_key="c6nrkaaad3ibe15jev5g")

print(finnhub_client.stock_social_sentiment('WMT'))