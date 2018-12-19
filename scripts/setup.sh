#*******************************************
 # © 2019 Charlie Hay
 # ---------------------
 # Redux | Global State
#******************************************/

echo "Install yarn globally."
npm i -g yarn

echo "Navigate to the client folder."
cd ./client

echo "Install dependencies."
yarn install

echo "Navigate to the api folder."
cd ../server

echo "Install dependencies"
yarn install
