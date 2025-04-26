for syscall error  : 
1 npm cache clean --force
2 npm install
3 cry and felt like a failure
4 rename some shit in the node module : .acorn-dynamic-import-6VTlYv6U'


## NOTES 
Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps.

## fixes
run this `npm config set registry http://registry.npmjs.org/` to make npm install faster 
try to install n 
try to install node lts 
try to `npm install --nodedir=/node/src/`
try `npm i -g node-gyp@latest`
try `npm i <module> --legacy-peer-deps` 
give up and cry ! :)

come back and try to change the npm registry 
. npm config set registry http://registry.npmjs.org/ --- using this now and showing possitive result 
. npm config set registry http://registry.npmjs.cf/ -- tried this and it didnt go well 
. npm config set registry https://registry.npmmirror.com



try to check if the node version would work for your project 
use nvm and install the version that would work for your project 

xss payload : <img src/onerror=prompt(document.cookie)>

## things to add 
1 login / signin modal for Authentication 



platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    providers: [
      provideKinde({
        clientId: "119b841e7870437c9ab2c18736855baa",
        authDomain: "https://urservices.kinde.com",
        redirectURL: "http://localhost:4200/", //where user gets dumped after succefully login
        logoutRedirectURL: "http://localhost:4200/", //this is where the user is sent after logging out.It often points to a landing page, login page, or home page.
      }),
    ],
  })















