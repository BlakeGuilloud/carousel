'use strict';

const AWS = require('aws-sdk');
const S3 = new AWS.S3();

module.exports.uploadFile = (event, context, callback) => {
  const buf = new Buffer(event.body.replace(/^data:image\/\w+;base64,/, ""),'base64')

  const data = {
    Bucket: 'blakeguilloud',
    Key: 'Hellomoto.jpeg',
    Body: buf,
    ContentEncoding: 'base64',
    ContentType: 'image/jpeg'
  };

  S3.putObject(data, function(err, data){
      if (err) { 
        console.log(err);
        console.log('Error uploading data: ', data); 
      } else {
        console.log('succesfully uploaded the image!');
      }
  });

  const response = {
    statusCode: 200,
    body: {
      message: 'Heres a sample image. process it and stuff..',
      file: event,
    },
  };

  callback(null, response);
};
