import { SbImageType } from "../types/Types";

export const imageDimensions = (image: SbImageType) =>
  sbImageDimensions(image.filename);

export const sbImageDimensions = (src: string) => ({
  width: parseInt(src.split("/")[5].split("x")[0]),
  height: parseInt(src.split("/")[5].split("x")[1]),
});
