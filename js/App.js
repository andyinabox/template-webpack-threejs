import * as dat from 'dat.gui';
import { timingSafeEqual } from 'crypto';

// params used for the gui
const _default_params = {

};

// costructor options
const _default_options = {
  container2dId: 'svg-container',
  container3dId: '3d-container'
}


export default class App {
  constructor(params={}, options={}) {
    this.params = Object.assign({}, _default_params, params);
    this.opts = Object.assign({}, _default_options, options);

    this.setupGui();
    this.update();
  }

  setupGui() {
    this.gui = new dat.GUI();

    // set gui controls
    // this.gui.add(this.params, 'example', 4, 12).step(0.25);

    // automatically set listener for all params
    this.gui.__controllers.forEach((controller, index) => {
      controller.listen().onChange(this.update.bind(this));
    });
  }


  update() {
    // update view
  }

};
