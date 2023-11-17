/**
 * @brief 加载Cesium数据的方法类
 * @param {Object} viewer Cesium中的、一切API的开始
 * @param {Float} lon 经度
 * @param {Float} lat 维度
 * @param {Number} height 高度
 */
class LoadData {
    constructor(viewer, Cesium) {
        this.viewer = viewer
        this.Cesium = Cesium
    }

    //加载glb数据（通过图元加载）
    loadGlb(url, lon, lat, height) {
        let origin = this.Cesium.Cartesian3.fromDegrees(lon, lat, height);
        let modelMatrix = this.Cesium.Transforms.eastNorthUpToFixedFrame(origin);
        //控制双轴旋转
        let quaternion = this.Cesium.Quaternion.fromAxisAngle(this.Cesium.Cartesian3.UNIT_Z, this.Cesium.Math.toRadians(-90)); // 绕Z轴旋转-90度
        let quaternion2 = this.Cesium.Quaternion.fromAxisAngle(this.Cesium.Cartesian3.UNIT_Y, this.Cesium.Math.toRadians(0)); // 绕Y轴旋转45度
        let combinedQuaternion = this.Cesium.Quaternion.multiply(quaternion, quaternion2, new this.Cesium.Quaternion());
        let rotation = new this.Cesium.Matrix3();
        this.Cesium.Matrix3.fromQuaternion(combinedQuaternion, rotation);
        let newModelMatrix = this.Cesium.Matrix4.multiplyByMatrix3(modelMatrix, rotation, new this.Cesium.Matrix4());
        //通过fromGltf加载
        let model = this.Cesium.Model.fromGltf({
            url: `${url}`,
            modelMatrix: newModelMatrix,
            minimumPixelSize: 128,
            scale: 0.95
        });
        this.viewer.scene.primitives.add(model);
    }
}
export default LoadData