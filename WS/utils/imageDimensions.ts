import { SbImageType } from "../types/Types";

export const imageDimensions = (image: SbImageType) => ({
  width: parseInt(image.filename.split("/")[5].split("x")[0]),
  height: parseInt(image.filename.split("/")[5].split("x")[1]),
});
