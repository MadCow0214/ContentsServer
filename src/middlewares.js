import multer from "multer";
import multerS3 from "multer-s3";
import S3 from "aws-sdk/clients/s3";

const s3 = new S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET,
  region: "ap-northeast-2"
});

const multerVideo = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "sonhansung-contents/video"
  })
});
const multerImage = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "sonhansung-contents/image"
  })
});

export const uploadVideoMiddleware = multerVideo.single("video");
export const uploadImageMiddleware = multerImage.single("image");
