const {
    addDecoratorsLegacy,
    disableEsLint,
    override,
    addLessLoader,
} = require("customize-cra");
const { alias } = require('react-app-rewire-alias');

module.exports = override(
    addDecoratorsLegacy(),
    disableEsLint(),
    addLessLoader({
        javascriptEnabled: true,
    }),
    alias({
        '@': 'src',
        '@resource': 'src/resource',
        '@shared': 'src/shared'
    })
)
