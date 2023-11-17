/**
 * @brief 设置棋盘纹理
 * @param {Entity} entity Cesium中加载的实体
 * @param {Cesium} Cesium 
 */
function setCheckerBoard(entity, Cesium) {
    entity.ellipse.material = new Cesium.CheckerboardMaterialProperty({
        evenColor: Cesium.Color.WHITE,
        oddColor: Cesium.Color.BLACK,
        repeat: new Cesium.Cartesian2(4, 4)
    })
}
export default setCheckerBoard