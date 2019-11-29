import React, { Component } from 'react';
import { Window, Button, AwtkRender, setParentWidget } from "../src"

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
    console.log('APP DID MOUNT!');
    console.log("global: " + TGlobal.getPointerX() + " " + TGlobal.getPointerY() + " " + TGlobal.isPointerPressed());
  }

  onClick(evt) {
    const dlg = TDialog.createSimple(null, 0, 0, 240, 160);

    dlg.setTitle('TDialog');

    const ok = TButton.create(dlg.getClient(), 20, 80, 80, 30);
    ok.setText('Go');

    const cancel = TButton.create(dlg.getClient(), 140, 80, 80, 30);
    cancel.setText('Cancel');

    const label = TLabel.create(dlg.getClient(), 10, 30, 200, 30);
    label.setText('AWTK is cool!');

    ok.on(TEventType.CLICK, function(evt) {
      dlg.quit(1);
      return TRet.OK;
    })

    cancel.on(TEventType.CLICK, function(evt) {
      dlg.quit(2);
      return TRet.OK;
    })

    const code = dlg.modal();
    console.log('code=' + (code));
  }

  render() {
    return (
      <Window
        ref = {
          (ref) => setParentWidget(ref, "win1")
        }
      >
        <Button
          parent = { "win1" }
          text = { "Show TDialog" }
          style = {{
            selfLayout:{
              x:"center",
              y:"middle:-60",
              w:"50%",
              h:"30"
            },
          }}
          onClick = { this.onClick }
        />
        <Button
          parent = { "win1" }
          text = { "Show Info" }
          style = {{
            selfLayout:{
              x:"center",
              y:"middle",
              w:"50%",
              h:"30"
            },
          }}
          onClick = { ()=>{
            TDialog.info("Work is done!");
          }}
        />
        <Button
          parent = { "win1" }
          text = { "Show Confirm" }
          style = {{
            selfLayout:{
              x:"center",
              y:"middle:60",
              w:"50%",
              h:"30"
            },
          }}
          onClick = { ()=>{
            TDialog.info("Are you sure to quit?");
          }}
        />
      </Window>
    )
  }
}


AwtkRender(<App />, () => {
  console.log(' 渲染成功 AWTK ');
});


