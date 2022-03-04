import * as THREE from 'three'
import {
    AxesHelper,
    BoxGeometry,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer
} from 'three'

window.THREE = THREE
let boxWidth = 600,
    boxHeight = 400
let scene, renderer, camera
//1. 创建renderer和场景
const setRendererAndScene = () => {
    scene = new Scene()
    window.scene = scene
    console.log(scene)
    renderer = new WebGLRenderer({ alpha: true })
    renderer.setSize(boxWidth, boxHeight)
    const dom = document.getElementById('model-box')
    //先清空dom，再插入，防止测试情况下插入多个dom元素
    dom.innerHTML = ''
    dom.appendChild(renderer.domElement)
}
//2. 创建相机
let defaultMap = {
    //相机的默认位置,近大远小
    x: 10,
    y: 10,
    z: 10
}
const setCamera = () => {
    const { x, y, z } = defaultMap
    camera = new PerspectiveCamera(45, boxWidth / boxHeight, 0.1, 1000)
    camera.position.set(x, y, z)
    camera.lookAt(scene.position)
}
//3. 设置灯光
const setLight = () => {}

//4. 添加元素
const addMesh = async () => {
    //添加个正方体测试下
    addCube()
    //添加辅助的刻度尺
    addAxis()
}
const addCube = () => {
    let cubeGeometry = new BoxGeometry(2, 2, 2)
    let cubeMaterial = new MeshBasicMaterial({
        color: 0xff00ff
    })
    const cube = new Mesh(cubeGeometry, cubeMaterial)
    cube.position.x = 0
    cube.position.y = 0
    cube.position.y = 0
    cube.name = 'cube'
    scene.add(cube)
}
const addAxis = () => {
    //添加辅助线，红色是x轴，绿色是y轴，蓝色是z轴
    scene.add(new AxesHelper(20))
}

const loop = () => {
    //渲染场景
    renderer.render(scene, camera)
}
//执行所有的初始化操作
export const init = async () => {
    setRendererAndScene()
    setCamera()
    setLight()
    await addMesh()
    loop()
}
