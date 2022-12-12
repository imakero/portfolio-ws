import { SbBlokData } from "@storyblok/react";

type Props = {
  blok: SbBlokData & {
    headline: string;
  };
};

const Teaser = ({ blok }: Props) => {
  return <h2 className="text-2xl mb-10">{blok.headline}</h2>;
};

export default Teaser;
