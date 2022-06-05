import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import matplotlib.pyplot as plt
from sklearn.metrics import r2_score
from sklearn.metrics import mean_absolute_percentage_error
from sklearn.metrics import mean_absolute_error
from sklearn.ensemble import ExtraTreesRegressor
data = pd.read_csv("Dataset/Data/NewData.csv")
data_train = data.copy()
data_train = data_train.drop(['DATE'], axis=1)
data_train = data_train.drop(['SYMBOL'], axis=1)

input_scaler = MinMaxScaler()
output_scaler = MinMaxScaler()
data_train_output = data_train[data_train.columns[-1]]
data_train_input = data_train[data_train.columns[:-1]]

data_train_output = np.array(data_train_output)
data_train_input = np.array(data_train_input)

data_train_input = input_scaler.fit_transform(data_train_input)
data_train_output = data_train_output.reshape(-1, 1)
data_train_output = output_scaler.fit_transform(data_train_output)

X_train, X_test, y_train, y_test = train_test_split(data_train_input, data_train_output, test_size=0.2, random_state=42)

X_train = np.array(X_train)
y_train = np.array(y_train)

ext_reg = ExtraTreesRegressor(n_estimators=100, max_depth=20, random_state=0)
ext_reg.fit(X_train, y_train.ravel())

score = ext_reg.score(X_train, y_train)
print(score)

y_pred = ext_reg.predict(X_test)
y_pred = np.array(y_pred)
y_pred = y_pred.reshape(-1, 1)
y_pred = output_scaler.inverse_transform(y_pred)
y_test = output_scaler.inverse_transform(y_test)

print("********************************************")

print("\t\tError Table for ExtraTrees Regression Algorithm - Ethereum Data")
print('Mean Absolute Error      : ', mean_absolute_error(y_test, y_pred))
print('Mean Squared  Error      : ', mean_squared_error(y_test, y_pred))
print('Root Mean Squared  Error : ', np.sqrt(mean_squared_error(y_test, y_pred)))
print('Mean Absolute Percentage Error      : ', mean_absolute_percentage_error(y_test, y_pred))
print('R Squared           : ', r2_score(y_test, y_pred))


x_ax = range(len(y_test))
plt.plot(x_ax, y_test, label="Actual")
plt.plot(x_ax, y_pred, label="Predicted")
plt.legend()
plt.title("ExtraTrees Regression Algorithm - Actual vs. Predicted Graph for Ethereum Data")
plt.show()

