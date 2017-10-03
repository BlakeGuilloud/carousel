'use strict';

const AWS = require('aws-sdk');
const S3 = new AWS.S3();

module.exports.uploadFile = (event, context, callback) => {
  const { fileName, fileData, fileType } = JSON.parse(event.body);

  const formattedFile = fileData.replace(/^data:image\/\w+;base64,/, '');
  const buf = new Buffer(formattedFile, 'base64');

  const data = {
    Bucket: 'blakeguilloud', // This will be an env variable for the proper bucket
    Key: fileName,
    Body: buf,
    ContentEncoding: 'base64',
    ContentType: fileType,
  };

  S3.putObject(data, function(err, data){
    if (err) { 
      console.log(err);
      console.log('Error uploading data: ', data); 
    } else {
      console.log('Image was upload successfully!!!');
    }
  });

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Here\'s a sample image. process it and stuff..',
      file: event,
    }),
  };

  callback(null, response);
};
