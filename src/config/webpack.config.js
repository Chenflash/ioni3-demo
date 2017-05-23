/**
 * Created by juanvelezballesteros on 19/05/17.
 */
var path = require('path');
var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

module.exports = function () {
  useDefaultConfig.resolve.alias = {
    "@app/config": path.resolve('./src/config/environment.' + process.env.IONIC_ENV + '.ts')
  };

  return useDefaultConfig;
}
