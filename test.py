import requests


url = 'https://companiesmarketcap.com/?download=csv'
r = requests.get(url, allow_redirects=True)

open('stocks.csv', 'wb').write(r.content)