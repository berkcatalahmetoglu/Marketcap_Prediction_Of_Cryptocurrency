from flask import request, Flask, render_template
import pandas as pd
import numpy as np
import pickle

app = Flask(__name__,template_folder='template')

model1 = pickle.load(open('model.pkl', 'rb'))


@app.route('/predictV2', methods=['POST'])

def predictV2():
    features = request.json
    volume = features['volume']
    social_volume = features['socialVolume']
    social_dominance = features['socialDominance']
    twitter_volume = features['twitterVolume']
    bearish_sentiment = features['bearishSentiment']
    bullish_sentiment = features['bullishSentiment']
    market_dominance = features['marketDominance']

    user_input = {'VOLUME':[volume],'SOCIAL_VOLUME':[social_volume],'SOCIAL_DOMINANCE':[social_dominance],'TWITTER_VOLUME':[twitter_volume],'BEARISH_SENTIMENT':[bearish_sentiment],'BULLISH_SENTIMENT':[bullish_sentiment],'MARKET_DOMINANCE':[market_dominance]}

    test_df = pd.DataFrame(user_input)

    prediction = model1.predict(test_df)
    output = float(np.round(prediction[0], 2))

    return {"Output":output}
    #return render_template('result.html', prediction_text='Predicted Market Cap of Cryptocurrency $ {}'.format(output))


if __name__ == "__main__":
    app.run(debug=True)