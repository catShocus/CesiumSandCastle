/**
 * @brief Cesium中的相机视角
 */
class ViewerCamera {
    constructor(viewer, Cesium) {
        this.viewer = viewer;
        this.Cesium = Cesium
    }

    /* Camera的第一种方法：setView */
    //cartesian3的方式
    setCameraByCartesian3(lon, lat, height, heading, pitch, roll) {
        this.viewer.camera.setView({
            destination: this.Cesium.Cartesian3.fromDegrees(lon, lat, height),
            orientation: {
                heading: this.Cesium.Math.toRadians(heading),
                pitch: this.Cesium.Math.toRadians(pitch),
                roll: roll
            }
        })
    }
}
export default ViewerCamera