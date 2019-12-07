import { TWindow }from "../native/awtk"
import { TWindowBaseProps } from "./baseTypes"
import { nodeMixins } from "../utils/nodeMixins"

export interface WindowProps extends TWindowBaseProps{
  // 是否全屏
  fullscreen? :boolean;
}

class t_window_base extends TWindow{
  constructor(props:WindowProps){
    super({});
    console.log("super(window_create(null,0,0,0,0))", props);
  }
}

export const t_window = nodeMixins( t_window_base );