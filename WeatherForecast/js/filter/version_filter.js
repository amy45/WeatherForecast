'use strict';

define(function () {
    return ['VersionService', function(versionService) {
    	 return function(input, start) {
    	        start = +start; //parse to int
    	        return input.slice(start);
    	    }
    }];
});

