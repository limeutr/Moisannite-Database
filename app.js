const express = require('express');
const mysql = require('mysql2');
const multer = require('multer');
const path = require('path');
const app = express();

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// MySQL database connection
const connection = mysql.createConnection({
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'moissanite'
    // host: 'sql.freedb.tech',
    // user: 'freedb_intan nuraini',
    // password: 'MuUX$Et7v2fG3Uy',
    // database: 'moisannite'
    host: 'pro.freedb.tech',
    user:'qwerty',
    password: 'NSb@v5v4BN%7N4n',
    database:'qwerty'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Set up view engine
app.set('view engine', 'ejs');

// Enable static files
app.use(express.static('public'));

// Enable form processing
app.use(express.urlencoded({ extended: false }));

// Route to get all images
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM moisannite';
    connection.query(sql, (error, results) => {
        if (error) {
            console.error('Database query error:', error.message);
            return res.status(500).send('Error retrieving images');
        }
        console.log('Images retrieved:', results);
        res.render('index.ejs', { images: results });
    });
});

// Route to add a new image
app.get('/add', (req, res) => {
    res.render('addImage.ejs');
});

app.post('/add', upload.single('image'), (req, res) => {
    const { description } = req.body;
    const filename = req.file.filename;
    const sql = 'INSERT INTO moisannite (filename, description) VALUES (?, ?)';
    connection.query(sql, [filename, description], (error, results) => {
        if (error) {
            console.error('Error adding image:', error);
            return res.status(500).send('Error adding image');
        }
        res.redirect('/');
    });
});

// Route to view a single image
app.get('/image/:id', (req, res) => {
    const imageId = req.params.id;
    const sql = 'SELECT * FROM moisannite WHERE id = ?';
    connection.query(sql, [imageId], (error, results) => {
        if (error) {
            console.error('Database query error:', error.message);
            return res.status(500).send('Error retrieving image');
        }
        if (results.length > 0) {
            res.render('image', { image: results[0] });
        } else {
            res.status(404).send('Image not found');
        }
    });
});

// Route to download an image
app.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'public/images', filename);
    res.download(filePath);
});

// Route to delete an image
app.get('/delete/:id', (req, res) => {
    const imageId = req.params.id;
    const sql = 'DELETE FROM moisannite WHERE id = ?';
    connection.query(sql, [imageId], (error, results) => {
        if (error) {
            console.error('Error deleting image:', error);
            return res.status(500).send('Error deleting image');
        }
        res.redirect('/');
    });
});

// Route to update image 
app.get('/updateImage/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM moisannite WHERE id = ?";
    connection.query(sql, [id], (error, results) => {
        if (error) {
            console.error('Database query error:', error.message);
            return res.status(500).send("Error retrieving image by ID");
        }
        if (results.length > 0) {
            res.render('updateImage', { moisannite: results[0] });
        } else {
            res.status(404).send('Image not found');
        }
    });
});

// Route to update image 
app.post('/updateImage/:id', upload.single('image'), (req, res) => {
    const id = req.params.id;
    const { description, currentImage } = req.body;
    let filename = currentImage; 

    if (req.file) {
        filename = req.file.filename;
    }

    const sql = 'UPDATE moisannite SET filename = ?, description = ? WHERE id = ?';
    connection.query(sql, [filename, description, id], (error, results) => {
        if (error) {
            console.error("Error updating image:", error);
            return res.status(500).send('Error updating image');
        }
        res.redirect('/');
    });
});

const PORT = process.env.PORT || 3013;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
