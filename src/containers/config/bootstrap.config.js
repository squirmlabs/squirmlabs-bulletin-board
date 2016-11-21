'use strict';
// ## bootstrap-webpack Configuration

module.exports = {
  // ### Scripts
  // Any scripts here set to false will never
  // make it to the client, its not packaged
  // by webpack.
  scripts: {
    transition: true,
    alert: false,
    button: false,
    carousel: false,
    collapse: false,
    dropdown: false,
    modal: false,
    tooltip: false,
    popover: false,
    scrollspy: false,
    tab: false,
    affix: false
  },
  // ### Styles
  // Enable or disable certain less components and thus remove
  // the css for them from the build.
  styles: {
    mixins: true,

    normalize: true,
    print: true,

    scaffolding: true,
    type: true,
    code: false,
    grid: true,
    tables: true,
    forms: true,
    buttons: true,
    'component-animations': true,
    glyphicons: false,
    dropdowns: false,
    'button-groups': true,
    'input-groups': false,
    navs: true,
    navbar: true,
    breadcrumbs: false,
    pagination: false,
    pager: false,
    labels: false,
    badges: false,
    jumbotron: false,
    thumbnails: false,
    alerts: false,
    'progress-bars': false,
    media: true,
    'list-group': true,
    panels: false,
    wells: false,
    close: false,
    modals: false,
    tooltip: false,
    popovers: false,
    carousel: false,
    utilities: true,
    'responsive-utilities': true,
  },
};
