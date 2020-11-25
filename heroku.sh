read -p "Enter the heroku project name: " remote
read -p "Enter the commit message: " commit

cd ../
mkdir ./co-code-production
cp -r co-code/* ./co-code-production
cp co-code/.gitignore ./co-code-production
cd ./co-code-production
npm i
nest build
git init
git add .
git add -f dist
cd ./public
npm run build
cd ../
git add -f public/build
git commit -m '$commit'
heroku git:remote -a $remote
git push -f heroku master
cd ../
rm -rf co-code-production