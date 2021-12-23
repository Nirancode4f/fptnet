1. npm init (run this for the first times clone)

2. npm i express jsonwebtoken mongoose dotenv argon2 cors (this is all modules in project)

3. npm i --save-dev-nodemon (this command for import nodemon to dev server. this will reset when have a change )

4. npm start (run server on localhost)

//TTNhan
npm install express body-parser ejs uuidv4 multer sharp --save

*** Upload Image

POST /api/upload/image
Image upload into public/images/
Image resize to 500x500, can change in .\fptnet\server\upload\ResizeImage.js
