import fs from "fs/promises";
import path from "path";

const IMAGE_EXT = [".png", ".jpg", ".jpeg", ".webp", ".gif"];

export const readImages = async (relativeDir: string, dir: string) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries
    .filter(
      (e) =>
        e.isFile() && IMAGE_EXT.includes(path.extname(e.name).toLowerCase())
    )
    .map((e) => ({
      name: e.name,
      src: `${relativeDir}/${e.name}`,
    }));
};
