import tensorflow as tf
from tensorflow.python.keras import Sequential
from tensorflow.python.keras.layers import Dense, LSTM, Dropout


class PredictionModel:
    def __init__(self):
        self.INPUT_SHAPE = (500,500) # TODO: CHANGE INPUT SHAPE ~Ege

        self.model = Sequential()

        self.model.add(LSTM(units=50, activation='relu', return_sequences=True, input_shape=self.INPUT_SHAPE))

        self.model.add(Dropout(0.2))
        self.model.add(LSTM(units=60, activation='relu', return_sequences=True))

        self.model.add(Dropout(0.3))
        self.model.add(LSTM(units=80, activation='relu', return_sequences=True))

        self.model.add(Dropout(0.4))
        self.model.add(LSTM(units=120, activation='relu', return_sequences=True))

        self.model.add(Dropout(0.5))
        self.model.add(Dense(units=1))

        self.model.summary()


    def fit(self):
        pass

    def predict(self):
        pass
