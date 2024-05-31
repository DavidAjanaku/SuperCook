import { useState } from "react";
import { TagType } from "./TagType";

interface TagProps {
  tag: TagType;
  onTagClick: (tagId: string) => void;
}

export const Tag = ({ tag, onTagClick }: TagProps) => {
  const [selectedTag, setSelectedTag] = useState("");
  
  const handleClick = () => {
    onTagClick(tag.id);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        margin: "10px",
        padding: "5px",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: `${tag.color}`
      }}
    >
      {tag.name.fr}
    </div>
  );
};
