
import csv
import random
import time
import os
import pandas as pd
import re
import nltk
import requests
import json
import re
import traceback

import sumy
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lex_rank import LexRankSummarizer



key1 = "QW1YQQJ566COH9HQ"
key2 = "IJ32C5TYJDFRYREI"
key3 = "5YXMNQTP6EJGUZYZ"


f = open("sind.txt", "r")
sind = int(f.read())
print(sind)
if int(sind) > 2000:
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
for ti in range(sind, sind+5, 1):
    print(tickers[ti])
    try:


        url = f'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers={tickers[ti].lower()}&apikey=5YXMNQTP6EJGUZYZ'
        r = requests.get(url)
        data3 = r.json()
        scores = []

        fo = data3["feed"]
        for i1 in range(len(fo)):
            to = fo[i1]["ticker_sentiment"]

            for i2 in range(len(to)):

                if to[i2]["ticker"] == tickers[ti] and float(to[i2]["relevance_score"]) > 0.15:
                    scores.append((float(to[i2]["ticker_sentiment_score"]) * float(to[i2]["relevance_score"])))


        if 1 > 0:

                    sr = []
                    si = []

                    soup = ""

                    fo = data3["feed"]
                    
                    for i1 in range(len(fo)):
                        ts = fo[i1]["ticker_sentiment"]
                        for i2 in range(len(ts)):

                            if( ts[i2]["ticker"] == tickers[ti] and float(ts[i2]["relevance_score"]) > 0.25 ):
                                try:
                                    to = fo[i1]["summary"]
                                    if (tickers[ti] in str(to.lower())) or (names[ti].lower() in str(to.lower())) and to not in soup:

                                        soup += to+" "
                                        #si.append(ti)
                                except:
                                    e1 = 1

            

                    raw_data = soup

                    import re
                    def clean_data(data):
                        text = re.sub(r"\[[0-9]*\]"," ",data)
                        text = text.lower()
                        text = re.sub(r'\s+'," ",text)
                        text = re.sub(r","," ",text)
                        return text
                    cleaned_article_content = clean_data(raw_data)

                    # For Strings
                    parser = PlaintextParser.from_string(cleaned_article_content,Tokenizer("english"))

                    summarizer = LexRankSummarizer()
                    #Summarize the document with 2 sentences
                    summary = summarizer(parser.document, 6)

                    fst = ""

                    for st in summary:
                        fst += ((str(st).split("<Sentence:")[0]))


                    print("\n\n\n")
                    print(fst)
                    print("\n\n\n")
                    f.write(fst)
                    f.close()





        time.sleep(30)





    except Exception as e: 
        #print(traceback.format_exc())
        e3 = 1

f = open("sind.txt", "w")
f.write(str(sind+5))
f.close()





