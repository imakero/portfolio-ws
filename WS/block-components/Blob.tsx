import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import BlobBackdrop from "../components/BlobBackdrop";
import { Blok, SbBlob } from "../types/Types";

type BlobProps = {
  blok: Blok<SbBlob>;
};

const Blob = ({ blok }: BlobProps) => {
  const blobId = parseInt(blok.blob_id) as 1 | 2 | 3;

  return (
    <div {...storyblokEditable(blok)}>
      <div className="relative w-fit max-w-[460px]">
        <div>
          {blok.body.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
        <BlobBackdrop id={blobId} />
      </div>
    </div>
  );
};

export default Blob;
