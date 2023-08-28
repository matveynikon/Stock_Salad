import requests
import json
import csv
import random
import time
import os
import sys
import datetime



key1 = "QW1YQQJ566COH9HQ"
key2 = "IJ32C5TYJDFRYREI"
key3 = "5YXMNQTP6EJGUZYZ"


f = open("sind.txt", "r")
sind = int(f.read())
print(sind)
if int(sind) > 500:
    print("restarting")
    f = open("sind.txt", "w")
    f.write("0")
    f.close()
    sind = 0

from collections import defaultdict

columns = defaultdict(list) # each value in each column is appended to a list

with open('stocks.csv') as f:
    reader = csv.DictReader(f) # read rows into a dictionary format
    for row in reader: # read a row as {column1: value1, column2: value2,...}
        for (k,v) in row.items(): # go over each column name and value 
            columns[k].append(v) # append the value into the appropriate list
                                 # based on column name k


tickers = columns['Symbol']
names = columns['Name']

for ti in range(sind, sind+5, 1):
    try:
        tickers2i = tickers[ti]
        tickers3i = tickers[ti]
        tickers4i = tickers[ti]
        tickers5i = tickers[ti]
        if tickers[ti] == "BRK-B":
            tickers2i = "BRK-A"
            tickers3i = "brk-a"
            tickers4i = "BRK.A"
            tickers5i = "BRK"

        sr2d = []
        sr7d = []
        sr30d = []

        info = f'https://www.alphavantage.co/query?function=OVERVIEW&symbol={tickers2i}&apikey=5YXMNQTP6EJGUZYZ'
        inr = requests.get(info)
        info_data = inr.json()

        print(tickers2i)


        f = open(f"tickers_2days/info/{tickers5i.lower()}.txt", "w")
        f.write( info_data["Description"] )
        f.close()



        url = f'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers={tickers2i}&limit=200&apikey=5YXMNQTP6EJGUZYZ'
        r = requests.get(url)
        data3 = r.json()
        scores = []

        fo = data3["feed"]
        i2d = 0
        i7d = 0
        i30d = 0
        soup_arr = []
        check_d = ""

        rels = []
        
        for i1 in range(len(fo)):

                tp = fo[i1]["time_published"]
                nurl = fo[i1]["url"]
                source = fo[i1]["source"]

                tp = datetime.datetime(int(tp[:4]),int(tp[4:6]),int(tp[6:8]),int(tp[9:11]),int(tp[11:13]),int(tp[13:15]))
                pts = int(time.mktime(tp.timetuple()) / (3600*24) )
                #print(pts)
                #print(int( int(time.time())/(3600*24) )+2)

                if (pts > int( int(time.time())/(3600*24) )-5 ):

                    fo = data3["feed"]
                    ts = fo[i1]["ticker_sentiment"]
                    source_s = fo[i1]["source"]
                    for i2 in range(len(ts)):
                            rsc = float(ts[i2]["relevance_score"])
                            if( ts[i2]["ticker"] == tickers2i and float(ts[i2]["relevance_score"]) > 0.20 ):
                                scores.append(float(ts[i2]["ticker_sentiment_score"]))
                                i2d += 1
                                try:
                                    to = fo[i1]["title"]
                                    url = fo[i1]["url"]
                                    if to not in check_d:
                                        print(print(f"{tickers2i}: i2d "+str(i2d)))
                                        soup_arr.append(f"<a href='{url}'>{to} --{ source_s }</a><br></br>")
                                        print(to)
                                        rels.append(rsc)
                                        check_d += to
                                        #si.append(ti)
                                except:
                                    to = fo[i1]["title"]
                                    url = fo[i1]["url"]
                                    if to not in check_d:
                                        soup_arr.append(f"<a href='{url}'>{to} --{ source_s }</a><br></br>")
                                        print(to)
                                        check_d += to
                                        rels.append(rsc)
                                        print(print(f"{tickers2i}: i2d "+str(i2d)))
                                        #si.append(ti)
                
                try:
                    score = sum(scores)
                except:
                    score = 0

                f = open(f"tickers_2days/tickers/sent_{tickers5i}.txt", "w")
                print(f"{tickers2i}: "+str(score)+" i2d: "+str(i2d))
                f.write( str(round(score, 2)) )
                f.close()


                f = open(f"tickers_2days/pop/{tickers5i}.txt", "w")
                f.write(str(i2d))
                f.close() 


        soup_arr = [x for _,x in sorted(zip(rels,soup_arr))]

        fst = ""

        for i in range(len(list(reversed(soup_arr)))):
            if i > 0:
                fst += soup_arr[-i]
            else:
                e8 = 1
            

        if fst == "":
            fst = "No Relevant Summaries"

        f2 = open(f"tickers_2days/tickers/{tickers5i}.txt", "w")
        print(fst)
        f2.write(fst)
        f2.close()
        

        
    except Exception as e:
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        print(exc_type, fname, exc_tb.tb_lineno)

    
    try:

        info = f'https://api.polygon.io/v3/reference/tickers/{tickers4i}?apiKey=Tpc_z20cPjvf71l5RypUDnLx1eEb20Pr'
        inr = requests.get(info)
        comp_inc = inr.json()

        comp_inc = comp_inc["results"]

        image_url = comp_inc["branding"]
        image_url = image_url["icon_url"]
        image_url = image_url+"?apiKey=Tpc_z20cPjvf71l5RypUDnLx1eEb20Pr"


        img_data = requests.get(image_url).content
        with open(f'logos/{tickers5i}.jpg', 'wb') as handler:
            handler.write(img_data)

    
    except:
        print("can't get stock")

    time.sleep(31)

f = open("sind.txt", "w")
f.write(str(sind+5))
f.close()



