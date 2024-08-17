var express = require('express');
var router = express.Router();
const USER = require('../model/user');
const CAR = require('../model/car');
const inqq = require('../model/inquiry');
const RETING = require('../model/reting');
const bcrypt = require('bcrypt');
const multer = require('multer');
const feedback = require('../model/feedback')
const sell_car = require('../model/sell_car');
const car_sell = require('../model/sell_car');
const slider1 = require('../model/slider_car1');
const slider2 = require('../model/slider_car2');
const slider3 = require('../model/slider_car3');
const slider4 = require('../model/slider_car4');
const slider5 = require('../model/slider_car5');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})
// signin
const upload = multer({ storage: storage })

/* GET home page. */
router.get('/', async function (req, res, next) {
  let car_infoo = await CAR.find()
  let fedbck = await feedback.find()
  let carsell = await car_sell.find()
  res.render('home', { c: car_infoo ,d:fedbck ,cs :carsell});
});

router.post('/inquiryy', async function (req, res, next) {
  // console.log(req.body);
  await inqq.create(req.body);
  res.redirect('/inquiry')
});

// router.get('home', async function (req, res, next) {
//   res.render('/', {});
// });

router.get('/sell_car', async function (req, res, next) {
  res.render('sell_car', {});
});

const storag = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})

const uploa = multer({ storage: storag })

router.post('/sell_car', uploa.single('car_photos'), async function (req, res, next) {
  if (req.file && req.file.filename) {
    req.body.car_photos = req.file.filename
  }
  // console.log(req.body);
  const users = await USER.findOne({ username: req.body.username })
  if (users) {
    // console.log(req.body);
    await sell_car.create(req.body);
    res.redirect('/homeuser');
  } else {
    return res.send('Please enter valid username');
  }
});

router.post('retin', async function (req, res, next) {
  res.redirect('/')
});

router.get('/login', async function (req, res, next) {
  res.render('login', {});
});
router.get('/shop', async function (req, res, next) {
  res.render('shop', {});
});

router.get('/new_car', async function (req, res, next) {
  let slider1_ = await slider1.find()
  let slider2_ = await slider2.find()
  let slider3_ = await slider3.find()
  let slider4_ = await slider4.find()
  let slider5_ = await slider5.find()
  res.render('new_car', { sli:slider1_,a: slider2_,b:slider3_,c:slider4_,d:slider5_});
});


//

const storag_ = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})

const uploadslid = multer({ storage: storag_ })

router.post('/slider1',uploadslid.single('photo_'), async function (req, res, next) {
  req.body.photo_ = req.file.filename
  // console.log(req.body);
  await slider1.create(req.body)
  res.redirect('/darshan/italiya/8585/admin')
});

// 
const storag_2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})

const uploadslid2 = multer({ storage: storag_2 })

router.post('/slider2',uploadslid2.single('photo2'), async function (req, res, next) {
  req.body.photo2 = req.file.filename
  // console.log(req.body);
  await slider2.create(req.body)
  res.redirect('/darshan/italiya/8585/admin')
});
// 

const storag_3 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})

const uploadslid3 = multer({ storage: storag_3 })

router.post('/slider3',uploadslid3.single('photo3'), async function (req, res, next) {
  req.body.photo3 = req.file.filename
  // console.log(req.body);
  await slider3.create(req.body)
  res.redirect('/darshan/italiya/8585/admin')
});
//4

const storag_4 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})

const uploadslid4 = multer({ storage: storag_4 })

router.post('/slider4',uploadslid4.single('photo4'), async function (req, res, next) {
  req.body.photo4 = req.file.filename
  // console.log(req.body);
  await slider4.create(req.body)
  res.redirect('/darshan/italiya/8585/admin')
});
//
const storag_5 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})

const uploadslid5 = multer({ storage: storag_5 })

router.post('/slider5',uploadslid5.single('photo5'), async function (req, res, next) {
  req.body.photo5 = req.file.filename
  // console.log(req.body);
  await slider5.create(req.body)
  res.redirect('/darshan/italiya/8585/admin')
});
//
router.get('/signup', async function (req, res, next) {
  res.render('signup', {});
});

router.post('/signin', async function (req, res, next) {
  if(!req.body.mobile || !req.body.username){
    return res.send('Please enter fields');
  }

  const checkuser = await USER.findOne({username: req.body.username})
  if(!checkuser ){
    // res.send('Please enter valid email')
    return res.send('Please enter valid username');
  }

  const checkPass = req.body.mobile == checkuser.mobile
  if(!checkPass){
    return res.send('Please enter valid mobile Number');
  }else{
    res.redirect('/homeuser')
  }
});

router.get('/signin', async function (req, res, next) {

  res.render('signin', {});
});
// router.get('/inquiry', async function (req, res, next) {
//   res.render('inquiry', {});
// });
router.get('/about', async function (req, res, next) {
  res.render('about', {});
});
router.get('/homeuser', async function (req, res, next) {
  let fedbck = await feedback.find()
  let carsell = await car_sell.find()
  let car_infoo = await CAR.find()
  res.render('homeuser', { c: car_infoo,cs:carsell , d:fedbck ,username: req.cookies.username });
});
router.get('/inquiry', async function (req, res, next) {
  const carsdata = await CAR.find();
  // {}, { _id: 0, car_name: 1 }
  res.render('inquiry', { car:carsdata });
});

router.post('/inquiry', async function (req, res, next) {
  await inqq.create(req.body);
  res.cookie('name', req.body.name)
  res.redirect('/inquiry')
});

router.post('/feedback', async function (req, res, next) {
  // console.log(req.body);
  await feedback.create(req.body);
  res.redirect('/')
});

router.get('/signup', async function (req, res, next) {
  res.render('index', {});
});

router.get('/updatecar', async function (req, res, next) {
  let data = {}
  if (req.query.uid) {
    data = await CAR.findById(req.query.uid)
  }
  res.render('updatecar', { uid: req.query.uid, data: data });
});

router.post('/updatecar', upload.single('car_photo'), async function (req, res, next) {
  if (req.file && req.file.filename) {
    req.body.car_photo = req.file.filename
  }
  await CAR.findByIdAndUpdate(req.body.uid, req.body)
  let data = {}
  res.render('updatecar', { uid: req.query.uid, data: data });
});


router.post('/car_sell', upload.single('car_photo'), async function (req, res, next) {

  req.body.car_photo = req.file.filename
  await CAR.create(req.body)
  res.redirect('/darshan/italiya/8585/admin')
});

router.get('/darshan/italiya/8585/admin', async function (req, res, next) {
  let car_info = await CAR.find()
  let show = await USER.find()
  let inq = await inqq.find()
  let old_car = await car_sell.find()
  let fedbck = await feedback.find()
  let slider1_ = await slider1.find()
  let slider2_ = await slider2.find()
  let slider3_ = await slider3.find()
  let slider4_ = await slider4.find()
  let slider5_ = await slider5.find()
  
  if (req.query.mlidid) {
    // console.log(req.query.mlidid);
    await slider3.findByIdAndDelete(req.query.mlidid)
    return res.redirect('admin')
  }

  if (req.query.rtkslidid) {
    // console.log(req.query.rtkslidid);
    await slider4.findByIdAndDelete(req.query.rtkslidid)
    return res.redirect('admin')
  }

  if (req.query.lslidid) {
    // console.log(req.query.lslidid);
    await slider5.findByIdAndDelete(req.query.lslidid)
    return res.redirect('admin')
  }

  if (req.query.hslidid) {
    // console.log(req.query.hslidid);
    await slider2.findByIdAndDelete(req.query.hslidid)
    return res.redirect('admin')
  }

  if (req.query.slidid) {
    // console.log(req.query.slidid);
    await slider1.findByIdAndDelete(req.query.slidid)
    return res.redirect('admin')
  }

  if (req.query.fdbckid) {
    // console.log(req.query.fdbckid);
    await feedback.findByIdAndDelete(req.query.fdbckid)
    return res.redirect('admin')
  }

  if (req.query.rocid) {
    // console.log(req.query.rocid);
    await car_sell.findByIdAndDelete(req.query.rocid)
    return res.redirect('admin')
  }

  if (req.query.qqid) {
    await inqq.findByIdAndDelete(req.query.qqid)
    return res.redirect('admin')
  }

  if (req.query.did) {
    await CAR.findByIdAndDelete(req.query.did)
    return res.redirect('admin')
  }

  if (req.query.ddid) {
    await USER.findByIdAndDelete(req.query.ddid)
    return res.redirect('admin')
  }

  res.render('admin', { a: show, b: car_info, c: inq , d:old_car ,e:fedbck , g:slider1_,h:slider2_,m:slider3_ ,k:slider4_,l:slider5_});
});


router.post('/signup', async function (req, res, next) {
  await USER.create(req.body)
  res.cookie('username', req.body.name)
  res.redirect('/homeuser')
});

router.post('/signin', async function (req, res, next) {
  let user = await USER.findOne({ username: req.body.username, mobile: req.body.mobile })
  // console.log(user)
  if (user == null) {
    res.redirect('/signin')
  }
  else{
    res.cookie('username', req.body.username )
    res.redirect('/homeuser') 
  }
});


router.post('/login', async function (req, res, next) {
  try {
    if (req.body.email == "bdc@gmail.com" && req.body.password === "admin@1919") {
      res.redirect('/darshan/italiya/8585/admin')
    }
    else {
      res.redirect('/login')
    }
  } catch (err) {
    res.send(err.message)
  }
});

module.exports = router;


