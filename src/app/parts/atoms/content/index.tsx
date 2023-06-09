import React from "react";
type ContentProps = {
  content: string;
};
export const Content = (Props: ContentProps) => {
  const { content } = Props;
  return (
    <>
      <div className="whitespace-pre-line">
        <h3>タスク内容</h3>
        <p className="ml-2">{content}</p>
      </div>
    </>
  );
};
