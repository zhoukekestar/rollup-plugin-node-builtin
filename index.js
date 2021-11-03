const resolve = require('resolve');
const { debuglog } = require('util');

const log = debuglog('rollup-plugin-node-builtin');

module.exports = () => {
  return {
    name: 'rollup-plugin-node-builtin',
    async resolveId(source) {
      try {
        const realPath = resolve.sync(`@jspm/core/nodelibs/browser/${source}`, {
          basedir: __dirname,
        });
        log(
          `[node-built-in] ${source} => @jspm/core/nodelibs/browser/${source}`
        );
        return realPath;
      } catch (err) {}
      return null;
    },
  };
};
