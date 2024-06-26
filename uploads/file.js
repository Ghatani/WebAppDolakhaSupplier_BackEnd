const multer = require('multer');

const storage = multer.diskStorage({
destination : function(req,file,cb){
cb(null, "./view/images");
},
filename : function(req,file,cb){
cb(null,Date.now() + file.originalname);
}
});

//filter profile images only accepting valid files - png, jpg, gif
const filter = function(req,file,cb){
if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg'){
cb(null,true);

}else{
cb(null,false);
}
};

const upload = multer({
storage : storage,
fileFilter : filter
})

module.exports = upload;