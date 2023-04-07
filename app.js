// declaration of the required modules
const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const path = require("path");
const app = express();
const fs = require("fs");
const postData = require("./data/data.json");
const posts = postData.posts;
const multer = require("multer");

const upload = multer({ dest: 'public/uploads/' });

let uploads = [];

// Fetching images from images.json
const imagesJson = fs.readFileSync("./data/images.json", "utf-8");
const images = {};
JSON.parse(imagesJson).images.forEach((image) => {
  images[image.id] = image.src;
});

// Fetching photos from photos.json
const photosJson = fs.readFileSync("./data/photos.json", "utf-8");
const photos = {};
JSON.parse(photosJson).photos.forEach((photo) => {
  photos[photo.id] = photo.src;
});

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.render("index", { active: "index", images: images });
});

app.get("/about", function (req, res) {
  res.render("about", { active: "about" });
});

app.get("/portfolio", function (req, res) {
  res.render("portfolio", { active: "portfolio", photos: photos });
});

app.get("/contact", function (req, res) {
  res.render("contact", { active: "contact" });
});

app.get("/submit", function (req, res) {
  res.render("submit", { active: "submit" });
});

app.get("/posts", function (req, res) {
  res.render("posts", { active: "posts", posts: posts });
});

app.use('/uploads', express.static('uploads'));

app.post('/submit', upload.single('image'), (req, res) => {
  const file = req.file;
  const name = req.body.name;
  const uploadData = { name, filename: file.filename };
  uploads.push(uploadData);
  res.redirect('/images');
});

app.get("/images", (req, res) => {
  res.render('images', { uploads, active: "images" });
});

app.get("/posts/:postName", (req, res) => {
  const requestedTitle = _.lowerCase(req.params.postName);

  posts.forEach(function (post) {
    const storedTitle = _.lowerCase(post.title);

    if (storedTitle === requestedTitle) {
      res.render("blog-post", {
        id: post.id,
        title: post.title,
        content: post.content,
        image: post.image,
        description: post.description,
        active: "Post",
      });
    }
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("http://localhost:3000");
});

module.exports = app
