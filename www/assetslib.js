var assetslib = {
	
	getAllPhotoThumbnails:function(startval,endval,successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "AssetsLib", "getAllPhotoThumbnails", [{start: startval, end : endval}]);
	},

	getFullScreenPhotos:function(urlList, successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "AssetsLib", "getFullScreenPhotos", [urlList]);
	}
}	

module.exports = assetslib;
