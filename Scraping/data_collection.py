from errno import ESTALE
import json
import os
from datetime import datetime
import sys
import pandas as pd
import numpy as np

json_files = os.listdir(".")
data_list = []
counter = 0
file_names = []
for file in os.listdir("jsons/before"):
    file_names.append(str(file)[:-5])
    if file.endswith(".json"):
        with open("jsons/before/" + str(file), 'r') as json_file:
            data_list.append(json.load(json_file))


def preprocess_json(json_dict):
    df = pd.DataFrame(
        columns=["DATE", "VOLUME", "SOCIAL_VOLUME", "SOCIAL_DOMINANCE", "TWITTER_VOLUME", "BEARISH_SENTIMENT",
                 "BULLISH_SENTIMENT", "MARKET_DOMINANCE", "MARKET_CAP"])

    for dict in json_dict['data'][0]['timeSeries']:

        if 'social_dominance' in dict.keys():
            social_dom = dict['social_dominance']
        else:
            social_dom = np.NaN

        if 'social_volume' in dict.keys():
            social_volume = dict['social_volume']
        else:
            social_volume = np.NaN

        if 'tweets' in dict.keys():
            twitter_volume = dict['tweets']
        else:
            twitter_volume = np.NaN

        if 'tweet_sentiment1' in dict.keys() and 'tweet_sentiment2' in dict.keys():
            try:
                bearish_sent = dict['tweet_sentiment1'] + dict['tweet_sentiment2']
            except:
                bearish_sent = np.NaN

        else:
            bearish_sent = np.NaN

        if 'tweet_sentiment4' in dict.keys() and 'tweet_sentiment5' in dict.keys():
            try:
                bullish_sent = dict['tweet_sentiment4'] + dict['tweet_sentiment5']
            except:
                bullish_sent = np.NaN
        else:
            bullish_sent = np.NaN

        if 'market_cap' in dict.keys():
            market_cap = dict['market_cap']
        else:
            market_cap = np.NaN

        if 'market_dominance' in dict.keys():
            market_dom = dict['market_dominance']
        else:
            market_dom = np.NaN
        # market_dom = dict['market_dominance']

        volume = dict['volume']
        date = dict['time']
        date = datetime.utcfromtimestamp(date).strftime('%Y-%m-%d')

        dict_ = {"DATE": date,
                 "VOLUME": volume,
                 "SOCIAL_VOLUME": social_volume,
                 "SOCIAL_DOMINANCE": social_dom,
                 "TWITTER_VOLUME": twitter_volume,
                 "BEARISH_SENTIMENT": bearish_sent,
                 "BULLISH_SENTIMENT": bullish_sent,
                 "MARKET_DOMINANCE": market_dom,
                 "MARKET_CAP": market_cap,
                 }

        df = df.append(dict_, ignore_index=True)
    return df


if __name__ == '__main__':
    df = pd.DataFrame()
    for idx, data in enumerate(data_list):
        df = preprocess_json(data)
        df.to_csv(file_names[idx] + str(idx) + ".csv")