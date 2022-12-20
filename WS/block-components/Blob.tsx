import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Blok, SbBlob } from "../types/Types";
import { default as BlobWrapper } from "../components/Blob";

type BlobProps = {
  blok: Blok<SbBlob>;
};

const Blob = ({ blok }: BlobProps) => {
  const blobId = parseInt(blok.blob_id) as 1 | 2 | 3;

  return (
    <div {...storyblokEditable(blok)}>
      <BlobWrapper id={blobId}>
        {blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </BlobWrapper>
    </div>
  );
};

export default Blob;
