let express =require('express');
let app = express();
let path =require('path');
let port = 3031;

app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')))
app.get('/cafetera.jpg',(req,res) => res.sendFile(path.join(__dirname,'views','cafetera.jpg')))
app.get('/macbook.jpg',(req,res) => res.sendFile(path.join(__dirname,'views','macbook.jpg')))
app.get('/tv samsung.jpg',(req,res) => res.sendFile(path.join(__dirname,'views','tv samsung.jpg')))
app.get('/samsung galaxy.jpg',(req,res) => res.sendFile(path.join(__dirname,'views','samsung galaxy.jpg')))
app.get('/home banner.jpg',(req,res) => res.sendFile(path.join(__dirname,'views','home banner.jpg')))

app.get('/Ayuda',(req,res) => res.sendFile(path.join(__dirname,'views','Ayuda.html')))
app.get('/Crea tu cuenta',(req,res) => res.sendFile(path.join(__dirname,'views','Crea tu cuenta.html')))
app.get('/Ingresa',(req,res) => res.sendFile(path.join(__dirname,'views','Ingresa.html')))
app.get('/Mis compras',(req,res) => res.sendFile(path.join(__dirname,'views','Mis compras.html')))
app.get('/Ofertas',(req,res) => res.sendFile(path.join(__dirname,'views','Ofertas.html')))
app.get('/Vender',(req,res) => res.sendFile(path.join(__dirname,'views','Vender.html')))
app.get('/Tiendas Oficiales',(req,res) => res.sendFile(path.join(__dirname,'views','Tiendas Oficiales.html')))






app.listen(port,()=> console.log('Servidor corriendo en http://localhost:' + port ));

