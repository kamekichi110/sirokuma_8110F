function edit_html(fname,furl) {

    var randomLeft = Math.floor( Math.random() * 11 )*10+20;
    var randomTop = Math.floor( Math.random() * 11 )*10+70;
  
    var frameWidth;
    var frameHeight;
    if (window.innerWidth > 700) {
      frameWidth = Math.floor(window.innerWidth/2);
    } else {
      frameWidth = 320;
    };
    if (window.innerHeight > 500) {
      frameHeight = Math.floor(window.innerHeight/2);
    } else {
      frameHeight = 220;
    };
  
    var frameparm;
    frameparm = frameWidth+" "+frameHeight;
  
  
    jsPanel.create({
      headerTitle: fname,
      panelSize: frameparm,
      position: {
            my:      "left-top",
            at:      "left-top",
            offsetX: randomLeft,
            offsetY: randomTop
      },
      content: '<iframe src="../app/edit/html/index.html" style="width: 100%; height: 100%;"></iframe>',
    });
  
  }