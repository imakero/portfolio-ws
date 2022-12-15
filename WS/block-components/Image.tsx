import { Blok, SbImage } from "../types/Types";
import { default as NextImage } from "next/image";

type ImageProps = {
  blok: Blok<SbImage>;
};

const Image = ({ blok }: ImageProps) => {
  const { x, y, image } = blok;
  return (
    <NextImage
      src={image.filename}
      width={x}
      height={y}
      alt={image.alt}
      className="rounded-full"
    />
  );
};

export default Image;
