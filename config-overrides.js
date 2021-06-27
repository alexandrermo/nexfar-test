const {
  addBabelPlugin,
  override,
  addWebpackModuleRule,
} = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /(\.woff$|\.eot$|icomoon\.svg|\.ttf$)/,
    loader:
      'D:\\alexa\\Documents\\Teste-emprego\\nexfar-test\\node_modules\\file-loader\\dist\\cjs.js',
    options: { name: 'static/fonts/[name].[hash:8].[ext]' },
  })
);

// function override(config, env) {
//   const arrOneOf = config.module.rules[1].oneOf;
//   const options = arrOneOf[arrOneOf.length - 1].options;
//   options.name = options.name.replace('.[hash:8]', 'contenthash');
//   options.name = (data) => {
//     console.log('data',data);
//     return
//   }
//   console.log('config.module.rules', config.module.rules[1].oneOf);
//   throw new Error('parou');
//   return config;
// };
