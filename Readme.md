
npm install -g expo-cli

Ruths-MacBook-Pro:reactnativedemoapp ruthapollos$ ~/.profile
-bash: /Users/ruthapollos/.profile: No such file or directory
Ruths-MacBook-Pro:reactnativedemoapp ruthapollos$ cd ~/D
Desktop/   Documents/ Downloads/ 
Ruths-MacBook-Pro:reactnativedemoapp ruthapollos$ mkdir ~/npm-global

Ruths-MacBook-Pro:reactnativedemoapp ruthapollos$ npm config set prefix '~/npm-global'
Ruths-MacBook-Pro:reactnativedemoapp ruthapollos$ touch ~/.profile

Ruths-MacBook-Pro:reactnativedemoapp ruthapollos$ vi ~/.profile 
Ruths-MacBook-Pro:reactnativedemoapp ruthapollos$ vi ~/.profile 
Ruths-MacBook-Pro:reactnativedemoapp ruthapollos$ source ~/.profile 
Ruths-MacBook-Pro:reactnativedemoapp ruthapollos$ npm install -g expo-cli

Ruths-MacBook-Pro:reactnativedemoapp ruthapollos$ expo init helloproject

Ruths-MacBook-Pro:helloproject ruthapollos$ npm start