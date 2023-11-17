/**
 * @brief 设置图片纹理
 * @param {Entity} entity 加载的实体数据
 * @param {Cesium} Cesium Cesium实例
 * @param {String} url 图片路径地址
 */
function setImage(entity, Cesium, url) {
    entity.ellipse.material = new Cesium.ImageMaterialProperty({
        image: url,
        color: Cesium.Color.BLUE,
        repeat: new Cesium.Cartesian2(4, 4),
        // transparent:false
    })
}
export default setImage