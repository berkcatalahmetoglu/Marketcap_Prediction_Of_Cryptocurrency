import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import warnings
import pickle


warnings.filterwarnings("ignore")

data = pd.read_csv("Dataset/Data/NewData.csv")

data_train = data.copy()

data_train = data_train.drop(['SYMBOL'], axis=1)
data_train = data_train.drop(['DATE'], axis=1)
data_train = data_train.drop(['Unnamed: 0'], axis=1)

data_train_output = data_train[data_train.columns[-1]]
data_train_input = data_train[data_train.columns[:-1]]

data_train_output = np.array(data_train_output)
data_train_input = np.array(data_train_input)


X_train, X_test, y_train, y_test = train_test_split(data_train_input, data_train_output, test_size=0.2, random_state=42)

X_train = np.array(X_train)
y_train = np.array(y_train)

rf = RandomForestRegressor(n_estimators=100, max_depth=20, random_state=42)
rf.fit(X_train, y_train.ravel())


pickle.dump(rf, open('model.pkl','wb'))
pickle.load(open('model.pkl','rb'))





