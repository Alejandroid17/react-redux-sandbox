#!/bin/bash

RED='\033[0;31m'
DEFAULT='\033[0m'
GREEN='\033[0;32m'

function okOrError {
    if [ $1 != 0 ]; then
        echo -e ${RED}===== ===== ===== ERROR ===== ===== ===== ${DEFAULT}
        exit
    fi
}

echo -e "\n${GREEN} => Checking if the remote repository exists ${DEFAULT}" 
git ls-remote
okOrError $?

echo -e "${GREEN} => Adding homepage, predeploy and deploy properties to package.json ${DEFAULT}" 
repositoryURL=$(git config --get remote.origin.url)
IFS='/' read -ra tokens <<< "$repositoryURL"
homepage="http://${tokens[3]}.github.io/${tokens[4]}"
homepage=${homepage%".git"}

if grep -q "homepage" ./package.json
then
    echo "Property: Homepage already exists."
else
    sed -i '/"private".*/a "homepage": "'$homepage'",' ./package.json
fi

if grep -q "deploy" ./package.json
then
    echo "Properties: predeploy and deploy already exists."
else
    sed -i '/"scripts".*/a "predeploy": "npm run build",\n      "deploy": "gh-pages -d build",' ./package.json
fi

echo -e "${GREEN} => Installing GH-PAGES ${DEFAULT}"
npm list | grep gh-pages || npm install gh-pages --save-dev
okOrError $?

echo -e "${GREEN} => Deploy it to GitHub Pages ${DEFAULT}"
npm run deploy
