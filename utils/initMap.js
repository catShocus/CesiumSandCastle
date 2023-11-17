/**
 * @brief 地球初始化
 * @param {Object} Cesium 地球初始化开始  
 */
function initMap(Cesium) {
    Cesium.Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZjY5M2UwNi1kODhmLTQzZTItYjc4Ni0yMzlmNTBlYmIxYjgiLCJpZCI6MTU3NTE3LCJpYXQiOjE2OTQ1MDMyOTl9.PSElCoyLF_ecNszBWrrOmB9JH7yPxrSLo-Tx4DIm1LU";
    var viewer = new Cesium.Viewer("cesiumContainer", {
        infoBox: false,
        selectionIndicator: false,
        shadows: true,
        shouldAnimate: true
    });
    return viewer
}
export default initMap