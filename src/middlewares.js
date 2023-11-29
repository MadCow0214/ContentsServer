import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";
import path from 'path';

const s3 = new S3Client({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET,
  region: process.env.S3_REGION,
});

const multerVideo = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: process.env.S3_BUCKET_NAME,
    key: function (req, file, cb) {
      cb(null, `video/${Date.now()}_${path.basename(file.originalname)}`)
    },
  })
});
const multerImage = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: process.env.S3_BUCKET_NAME,
    key: function (req, file, cb) {
      cb(null, `image/${Date.now()}_${path.basename(file.originalname)}`)
    },
  })
});

export const uploadVideoMiddleware = multerVideo.single("video");
export const uploadImageMiddleware = multerImage.single("image");
