import requests
import json
import csv
import random
import time
import os
import sys
import pandas as pd
import datetime


f = open("sind.txt", "r")
sind = int(f.read())
print(sind)
if int(sind) > 1000:
    print("restarting")
    f = open("sind.txt", "w")
    f.write("0")
    f.close()
    sind = 0

df = pd.read_csv('stocks.csv')

tickers = df["Symbol"]
names = df["Name"]


#tickers = ["AAPL", "MSFT", "AMZN", "GOOG", "BRK-A", "NVDA", "V", "PG", "HD", "META", "IBM", "XOM", "UNH", "JPM", "WMT", "MA", "CVX"]
#names = ["apple", "microsoft", "amazon", "google", "berkshire", "nvidia", "visa", "procter", "home depot", "facebook", "ibm", "exxon", "unitedhealth", "jpmorgan chase", "walmart", "mastercard", "chevron"]
for ti in range(5):
    try:

        info = f'https://api.polygon.io/v3/reference/tickers/{tickers[ti]}?apiKey=Tpc_z20cPjvf71l5RypUDnLx1eEb20Pr'
        inr = requests.get(info)
        comp_inc = inr.json()

        comp_inc = comp_inc["results"]

        image_url = comp_inc["branding"]
        image_url = image_url["icon_url"]
        image_url = image_url+"?apiKey=Tpc_z20cPjvf71l5RypUDnLx1eEb20Pr"


        img_data = requests.get(image_url).content
        with open(f'logos/{tickers[ti]}.jpg', 'wb') as handler:
            handler.write(img_data)

        time.sleep(33)
    
    except:
        print("can't get stock")

