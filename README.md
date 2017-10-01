## Carousel

Carousel is an image library that allows a user to upload images from their computer or mobile device and view them in a full screen slideshow.

## Front

Carousel's front end is a react based application with three views:

1. Slideshow
- When slideshow is selected, the images that are currently stored in Carousel will be displayed in automated rotating fashion that will take up the full web page.
- This is designed for use with a Raspberry Pi + external monitor that will serve as a picture frame.

2. Upload Image
- The upload image interface will access the device's local files and allow a user to upload an image to an S3 bucket directly from their device.

3. Manage Images
- The manage images view will allow a user to remove unwanted images from their slideshow.
- In a future iteration, a user will be able to sort their images into different slideshows, and select which slideshow will be the primary display.

## API

Carousel's API is hosted with serverless architecture on AWS. The resources include:

1. S3
- Carousel utilizes AWS's Simple Storage Service to host all of the uploaded image files.

2. Lambda
- Carousel uses a collection of Lambda functions to process, upload, and manage images.
- Lambda functions are the only means of interacting with the management of Carousel's designated S3 bucket.

3. API Gateway
- In order to expose Lambda functions to the front end, Carousel uses API Gateway as a host to make routes publically available.

