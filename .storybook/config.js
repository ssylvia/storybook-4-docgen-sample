import { configure, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { checkA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

// Set global  options
setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: "Story Maps",
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url:
    "https://devtopia.esri.com/WebGIS/arcgis-storymaps/tree/develop/packages/storymaps-client",
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  goFullScreen: false,
  /**
   * display panel that shows a list of stories
   * @type {Boolean}
   */
  showStoriesPanel: true,
  /**
   * display panel that shows addon configurations
   * @type {Boolean}
   */
  showAddonPanel: true,
  /**
   * display floating search box to search through stories
   * @type {Boolean}
   */
  showSearchBox: false,
  /**
   * show addon panel as a vertical panel on the right
   * @type {Boolean}
   */
  addonPanelInRight: false,
  /**
   * sorts stories
   * @type {Boolean}
   */
  sortStoriesByKind: false,
  /**
   * regex for finding the hierarchy separator
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   * @type {Regex}
   */
  hierarchySeparator: /\//,
  /**
   * regex for finding the hierarchy root separator
   * @example:
   *   null - turn off multiple hierarchy roots
   *   /\|/ - split by `|`
   * @type {Regex}
   */
  hierarchyRootSeparator: /\|/,
  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: true,
  /**
   * id to select an addon panel
   * @type {String}
   */
  selectedAddonPanel: undefined // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
});

// Add TypeScript info to all supported stories
addDecorator(
  withInfo({
    header: false,
    styles: defaultStyles => {
      // Change button background so it doesn't fail a11y tests.
      defaultStyles.button.base.background = "#017ac3";
      return defaultStyles;
    }
  })
);
// addDecorator((story, context) => {
//   console.log(story(), context);
//   return withInfo({
//     styles: defaultStyles => {
//       // Change button background so it doesn't fail a11y tests.
//       defaultStyles.button.base.background = "#017ac3";
//       return defaultStyles;
//     }
//   })(story)(context);
// });

// Add knobs support
addDecorator(withKnobs);

// a11y Tests
addDecorator(checkA11y);

function importAll(req) {
  req.keys().forEach(filename => req(filename));
}

function loadStories() {
  let req;
  req = require.context("../src", true, /\.stories\.tsx$/);
  importAll(req);
}

configure(loadStories, module);
