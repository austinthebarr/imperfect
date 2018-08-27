# Imperfect Produce (re·im·ag·ine)

A web app, built with Angular.
Live Version:
https://imperfect-934e6.firebaseapp.com/

## Created
Epicodus Independent Project 08/17/2018 & 08/24/2018
Austin Barr

## Installation
(if you do not have node)

```
brew install node
```
```
node -v
v6.2.0
```
```
npm -v
3.10.5
```

( Install TypeScript)
```
npm install typescript -g
```

(Install Angular)
```
npm install -g @angular/cli@1.6.5
```

1. Clone this repository.


 ```
NPM Install
 ```

2. Set Up Firebase
  * Create Account
  * select option 'Create a New Project'
  * Create a project named 'imperfect' and  select your region
  * Select 'add Firebase to your web App'
  * Copy code from Modal 
  * Example:
    ```
    export const masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
    };
    ```

  * Create a new file 'src/app/api-keys.ts'
  * Paste code from Modal in file

3. Run App on local server
  ```
  ng serve --open
  ```
## Specifications

1. App is will look similar to Imperfect Produce.
2. App will be able to allow user to log in.
3. App will allow user to modify their information.
4. App will allow user to change delivery date of their produce.
5. App will allow user to change their subscription.

### Technologies Used

* Node.JS
* ANGULAR
* HTML
* CSS
* TYPESCRIPT
* BOOTSTRAP

### Support and Contact Details
If you encounter any bugs or would like to make suggestions regarding this project, please feel free to contact austinbarr@protonmail.com.



### License

This project is distributed under the MIT License
