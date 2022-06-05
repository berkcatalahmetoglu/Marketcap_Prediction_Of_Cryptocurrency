import json

import requests

INTERVAL = "2y"
DATA_POINTS = "730"

if __name__ == '__main__':

    crypto_list = [""]
    temp_dict = {}

    for crypto_name in crypto_list:
        url = f"https://api2.lunarcrush.com/v2?data=assets&symbol={crypto_name}&data_points={DATA_POINTS}&interval=day&change={INTERVAL}"

        res = requests.get(url=url)
        temp_dict = res.text
        print(type(res.content))
        with open(f"jsons/before/{crypto_name}_social_data.json", "w+") as data_file:
            #json.dump(temp_dict, data_file, indent=2)
            json.dump(json.JSONDecoder().decode(temp_dict), data_file)

    print(res.content)

