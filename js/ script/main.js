require.config({
    baseUrl: '../js',
    paths: {
        jquery: 'lib/jquery-3.3.1',
		a:"script/a",
		b:"script/b",
		c:"script/c",
    }
});
 
require(['jquery','a']);
