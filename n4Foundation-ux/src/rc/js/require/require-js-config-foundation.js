 function reactConfig(require, modulePrefix, isWebDevJs) {
	require.paths.foundation = modulePrefix + "n4Foundation/rc/js/vendor/foundation" + (isWebDevJs ? "" : ".min");
	require.shim.foundation = { deps: ['jquery'], exports: 'Foundation' };
}