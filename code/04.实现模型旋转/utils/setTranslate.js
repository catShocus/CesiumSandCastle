/**
 * @brief 将以地球球心为原点转换成以模型中心为原点
 * @param {Matrix3} transformin 传送一个表示放大/平移的3 * 3矩阵
 * @param {Object} Cesium Cesium类
 * @param {Matrix4} m 瓦片的位置矩阵
 * @param {Cartesian3} pcenter 瓦片的球中心点
 * @param {Object} tileset 加载的3D瓦片
 */

function translate(tileset,pcenter, m, Cesium, transformin) {
    //Cesium.Matrix4.fromArray(m)从一个数组创建一个4*4的矩阵
    var transformMat = Cesium.Matrix4.fromArray(m);
    //Cesium.Matrix4.getMatrix3()从一个4*4矩阵中提取对应的3*3的旋转矩阵
    var matRotation = Cesium.Matrix4.getMatrix3(transformMat, new Cesium.Matrix3())
    //Cesium.Matrix3.inverse()用于计算3*3矩阵的逆矩阵
    var inverseMatRotation = Cesium.Matrix3.inverse(matRotation, new Cesium.Matrix3());
    //Cesium.Matrix4.getTranslation()从4*4矩阵中提取出平移部分，返回一个三维的笛卡尔坐标
    var matTranslation = Cesium.Matrix4.getTranslation(transformMat, new Cesium.Cartesian3())

    var transformation = Cesium.Transforms.eastNorthUpToFixedFrame(pcenter);
    var transformRotation = Cesium.Matrix4.getMatrix3(transformation, new Cesium.Matrix3());
    var transformTranslation = Cesium.Matrix4.getTranslation(transformation, new Cesium.Cartesian3())

    var matToTranslation = Cesium.Cartesian3.subtract(matTranslation, transformTranslation, new Cesium.Cartesian3())
    matToTranslation = Cesium.Matrix4.fromTranslation(matToTranslation, new Cesium.Matrix4());

    var matToTransformation = Cesium.Matrix3.multiply(inverseMatRotation, transformRotation, new Cesium.Matrix3())
    matToTransformation = Cesium.Matrix3.inverse(matToTransformation, new Cesium.Matrix3());
    //创建一个4*4矩阵，表示旋转和平移的组合变换，该方法接受一个旋转矩阵和一个平移向量
    matToTransformation = Cesium.Matrix4.fromRotationTranslation(matToTransformation)

    var rotationTranslation = Cesium.Matrix4.fromRotationTranslation(transformin);

    Cesium.Matrix4.multiply(transformation, rotationTranslation, transformation);
    Cesium.Matrix4.multiply(transformation, matToTransformation, transformation);
    Cesium.Matrix4.multiply(transformation, matToTranslation, transformation);
    tileset.modelMatrix = transformation
}
export default translate
