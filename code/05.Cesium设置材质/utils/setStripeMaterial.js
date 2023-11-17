/**
 * @brief 给图片设置条纹纹理
 * @param {Entity} entity 实体
 * @param {Cesium} Cesium 
 */
function setStripe(entity, Cesium) {
    entity.ellipse.material = new Cesium.StripeMaterialProperty({
        evenColor: Cesium.Color.WHITE,
        oddColor: Cesium.Color.YELLOW,
        repeat: 32,
        offset: 20,
        orientation: Cesium.StripeOrientation.VERTICAL
    })
}
export default setStripe    