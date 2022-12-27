require("colors");
const fs = require("fs");
const templates = require("./templates");
const componentName = process.argv[2];

if (!componentName) {
  console.error(
    "Please supply a valid component name".red
  );

  process.exit(1);
}

console.log(
  "Creating Component Templates with name: " +
    componentName
);


const componentDirectory = `./src/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(
    `Component ${componentName} already exists.`.red
  );

  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map(
  (template) => template(componentName)
);

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${componentDirectory}/${componentName}${template.extension}`,
    template.content
  );
});

  fs.writeFileSync(
    `${componentDirectory}/index.ts`,
    `export {default} from "./${componentName}"`
  );
function getDirectories(path) {
  return fs
    .readdirSync(path)
    .filter(function (file) {
      return fs
        .statSync(path + "/" + file)
        .isDirectory();
    });
}

const makeIndex = () => {
  let export_files = `\n export {`;
  let index = `import './index.css'\n`;
  const a_dir_name = getDirectories("src");
  for (let i = 0; i < a_dir_name.length; i++) {
    index += `import ${a_dir_name[i]} from "./${a_dir_name[i]}" \r`;
    export_files += `${a_dir_name[i]},`;
  }
  export_files += `}`;
  return index + export_files;
};

// const writeStream = fs.createWriteStream('src/index.ts');
// makeIndex().pipe(writeStream)
fs.writeFileSync("./src/index.ts", makeIndex());

console.log(
  "Successfully created component under: " +
    componentDirectory.green
);
