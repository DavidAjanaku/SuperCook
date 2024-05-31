import { Tag } from "./Tag";
import { TagType } from "./TagType";

interface TagsProps {
  tags: TagType[];
  onTagClick: (tagId: string) => void;
}

export const Tags = ({ tags, onTagClick }: TagsProps) => {
  const handleTagClick = (tagId: string) => {
    onTagClick(tagId);
  };

  return (
    <div
      style={{
        margin: "10px",
        padding: "5px",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        cursor:"pointer"
      }}
    >
      {tags.map((obj) => (
        <Tag key={obj.id} tag={obj} onTagClick={handleTagClick} />
      ))}
    </div>
  );
};