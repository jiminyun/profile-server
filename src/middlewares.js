import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
  region: "ap-northeast-1"
});

const multerVideo = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "j-profile/project"
  })
});

export const multerImage = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "j-profile/project"
  })
});

//const image = multer({ dest: "uploads/image" });

export const uploadVideo = multerVideo.single("video");
export const uploadImage = multerImage.single("filepond");
