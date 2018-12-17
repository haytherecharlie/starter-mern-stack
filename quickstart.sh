#*******************************************
 # © 2019 Charlie Hay
 # ---------------------
 # Quickstart | Bash Script
 #*****************************************/

echo 'Installing Global Dependencies'
npm install

echo 'Installing Client Dependencies'
cd ./client && npm install

echo 'Installing Server Dependencies'
cd ../server && npm install
