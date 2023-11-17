/**
 * @brief 加载3DTileset数据
 * @param {String} url 3d瓦片的文件路径
 * @param {Object} viewer Cesium中一切API的开端
 * @param {Object} m 模型形状矩阵   
 */
function load3DTileset(url,viewer,m){
 var tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url:url,
    maximumScreenSpaceError:2,//最大的屏幕空间误差
    maximumNumberOfLoadedTiles:1000,//最大加载瓦片个数
    modelMatrix:m //形状矩阵
 }))

 return tileset
}
export default load3DTileset