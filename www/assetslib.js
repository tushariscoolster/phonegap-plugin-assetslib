var assetslib = {
	
	getAllPhotoThumbnails:function(startval,endval,successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "AssetsLib", "getAllPhotoThumbnails", [startval, endval]);
	},

	getFullScreenPhotos:function(urlList, successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "AssetsLib", "getFullScreenPhotos", [urlList]);
	}
}	

module.exports = assetslib;
