export function loadMedia(folderName) {
  // Grab everything under /src/assets with these extensions
  const context = require.context(
    "../assets",
    true, // search subfolders
    /\.(png|jpe?g|svg|gif|mp4|mov|webm)$/i
  );

  const fileMap = {};
  const prefix = `./${folderName}/`; // e.g. "./lightly/"

  context.keys().forEach((key) => {
    // key examples:
    // "./lightly/Cover.svg"
    // "./lightly/Lamp01.png"
    // "./amc/cover.png"
    if (key.startsWith(prefix)) {
      const fileName = key.replace(prefix, ""); // "Cover.svg"
      fileMap[fileName] = context(key);
    }
  });

  // Main accessor: lightly("Cover.svg")
  const getFile = (name) => fileMap[name];

  // Convenience helpers
  getFile.all = Object.values(fileMap); // array of urls
  getFile.map = fileMap;                // { "Cover.svg": url, ... }

  return getFile;
}
