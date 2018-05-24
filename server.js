const cv = require('opencv');

cv.readImage('./img/image.jpg', function(err, im){
    if (err) throw err;
    // if (im.width() || im.height()) throw new Error('Image has no size');

    console.log(im);
  
    im.detectObject('./node_modules/opencv/data/haarcascade_frontalface_alt2.xml', {}, function(err, faces){
      if (err) throw err;
  
      for (var i = 0; i < faces.length; i++){
        var face = faces[i];
        im.ellipse(face.x + face.width / 2, face.y + face.height / 2, face.width / 1.5, face.height / 1.5, [234, 57, 0], 3);
      }
  
      im.save('./img/face-detection.jpg');
      console.log('Image saved.');
    });
  });