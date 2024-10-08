import fs from "fs";
import matter from "gray-matter";

export const getSinglePage = (filePath) => {
  const readFileContents = fs.readFileSync(filePath, "utf8", () => {});
  const { data: frontMatter, content } = matter(readFileContents);

  return {
    frontMatter,
    content,
  };
};
