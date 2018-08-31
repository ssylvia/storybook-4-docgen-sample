module.exports = (baseConfig, env, defaultConfig) => {
  // Add Typescript Files
  defaultConfig.resolve.extensions.push(".ts", ".tsx");

  // Find Babel Loader
  const babelRules = defaultConfig.module.rules.filter(rule => {
    let isBabelLoader = false;

    if (rule.loader && rule.loader.includes("babel-loader")) {
      isBabelLoader = true;
    }

    if (rule.use) {
      rule.use.forEach(use => {
        if (typeof use === "string" && use.includes("babel-loader")) {
          isBabelLoader = true;
        } else if (
          typeof use === "object" &&
          use.loader &&
          use.loader.includes("babel-loader")
        ) {
          isBabelLoader = true;
        }
      });
    }

    return isBabelLoader;
  });
  // Add Typescript to Babel Loader Test
  // Add react-docgen-typescript-loader to rule
  babelRules.forEach(rule => {
    rule.test = /\.(jsx|tsx)$/;
    rule.use.push({
      loader: require.resolve("react-docgen-typescript-loader")
    });
  });

  console.log(JSON.stringify(defaultConfig.module.rules, null, 2));

  return defaultConfig;
};
