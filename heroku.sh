read -p "Enter the heroku project name: " remote
read -p "Enter the commit message: " commit

cd ../
mkdir ../co-code-production
cp -r co-code/* ../co-code-production
cd ../co-code-production
npm i
nest build
git init
git add .
git add /dist
git commit -m '$commit'
heroku git:remote -a $remote
git push heroku master
cd ../
rm -rf co-code-production