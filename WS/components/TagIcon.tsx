import { tagToIcon } from "../utils/tagToIcon";

type TagIconProps = {
  tag: string;
};

const TagIcon = ({ tag }: TagIconProps) => {
  return <div className="text-4xl text-primary-light">{tagToIcon(tag)}</div>;
};

export default TagIcon;
