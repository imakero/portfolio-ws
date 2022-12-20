import TagIcon from "./TagIcon";

type TagListProps = {
  tags: string[];
};

const TagList = ({ tags }: TagListProps) => {
  return (
    <div className="flex flex-wrap justify-start space-x-2 align-middle">
      {tags.map((tag) => (
        <TagIcon tag={tag} key={tag} />
      ))}
    </div>
  );
};

export default TagList;
