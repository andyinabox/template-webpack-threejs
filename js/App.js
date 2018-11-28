import * as dat from 'dat.gui';
import * as THREE from 'three';
import OrbitControls from "orbit-controls-es6";
import { OBJLoader } from '@calvinscofield/three-loaders';

// params used for the gui
const _default_params = {
  scale: 1.0
};

// costructor options
const _default_options = {
  clearColor: 0x000000,
  clearAlpha: 1.0,
  camFov: 45,
  camPosition: new THREE.Vector3(0, 0, 10)
}


export default class App {
  constructor(params={}, options={}) {
    this.params = Object.assign({}, _default_params, params);
    this.opts = Object.assign({}, _default_options, options);

    // this.app =  new OrbitControls(camera, rendstatuserer.domElement)
    this.geo = new THREE.TetrahedronGeometry();
    this.mat = new THREE.MeshBasicMaterial();
    this.mesh = new THREE.Mesh(geo, mat);

    this.app.scene.add(mesh);

    this.setupGui();
    this.update();
  }

  setupGui() {
    this.gui = new dat.GUI();

    // set gui controls
    this.gui.add(this.params, 'scale', 0.1, 5.0);

    // automatically set listener for all params
    this.gui.__controllers.forEach((controller, index) => {
      controller.listen().onChange(this.update.bind(this));
    });
  }


  update() {
    this.mesh.scale(this.params.scale);
  }

};
