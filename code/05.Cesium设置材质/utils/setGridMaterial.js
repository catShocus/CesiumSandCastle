/**
 * @brief 给图片设置网格
 * @param {Entity} entity 实体
 * @param {Cesium} Cesium 
 */
function setStripe(entity, Cesium) {
    entity.ellipse.material = new Cesium.GridMaterialProperty({
        color: Cesium.Color.YELLOW,
        cellAlpha: 0,/*网格线的透明度 */
        lineCount: new Cesium.Cartesian2(19, 19),/* 网格线的行数和列数 */
        lineThickness: new Cesium.Cartesian2(1.0, 1.0)/* 横纵网格线的厚度 */
    })
}
export default setStripe    