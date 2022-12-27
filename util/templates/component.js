module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";

import { ${componentName}Props } from "./${componentName}.types";

import "./${componentName}.css";

const ${componentName}: React.FC<${componentName}Props> = ({ }) => (
    <div data-testid="${componentName}" className="container"></div>
);

export default ${componentName};

`,
  extension: `.tsx`
});
