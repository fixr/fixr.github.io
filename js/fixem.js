/* Author: 

*/

var canvas, p1, p2, p3, p4, p5, p6, p7, p8, p9;

$(function() {

  var barsAttr = {
    fill: "#fff",
    stroke: "#fff"
  };
  
  var svgWidth = 959;
  var svgHeight = 800;
  canvas = new Raphael('strength-bars', '100%', '100%');
  canvas.setViewBox(0, 0, svgWidth, svgHeight, false);

  p1 = canvas.rect(0, 0, 50, 800).attr(barsAttr);
  p2 = canvas.rect(50, 0, 50, 700).attr(barsAttr);
  p3 = canvas.rect(100, 0, 50, 600).attr(barsAttr);
  p4 = canvas.rect(150, 0, 50, 492).attr(barsAttr);
  p5 = canvas.rect(200, 0, 50, 390).attr(barsAttr);
  p6 = canvas.rect(250, 0, 50, 280).attr(barsAttr);
  p7 = canvas.rect(300, 0, 50, 190).attr(barsAttr);
  p8 = canvas.rect(350, 0, 50, 120).attr(barsAttr);
  p9 = canvas.rect(400, 0, 50, 60).attr(barsAttr);

  $("#twitter").bind('mouseover', function() {
    doFlickr();
  });
  
  $("#flickr").bind('mouseover', function() {
    doTwitter();
  });
  
  $("#gplus").bind('mouseover', function() {
    doGplus();
  });
  
  $("#github").bind('mouseover', function() {
    doGithub();
  });

  $("#instagram").bind('mouseover', function() {
    doInstagram();
  });

  $("#lastfm").bind('mouseover', function() {
    doLastfm();
  });

  $("#youtube").bind('mouseover', function() {
    doYoutube();
  });

});


function doFlickr() {
  p1.animate({fill: '#FF0084'}, 300, "<>");
  p2.animate({fill: '#FF0084'}, 600, "<>");
  p3.animate({fill: '#0063DC'}, 900, "<>");
  p4.animate({fill: '#0063DC'}, 1200, "<>");
  p5.animate({fill: '#0063DC'}, 1500, "<>");
  p6.animate({fill: '#0063DC'}, 1800, "<>");
  p7.animate({fill: '#0063DC'}, 2100, "<>");
  p8.animate({fill: '#0063DC'}, 2400, "<>");
  p9.animate({fill: '#0063DC'}, 2700, "<>");
}

function doTwitter() {
  p1.animate({fill: '#5CD6FF'}, 300, "<>");
  p2.animate({fill: '#5CD6FF'}, 600, "<>");
  p3.animate({fill: '#5CD6FF'}, 900, "<>");
  p4.animate({fill: '#5CD6FF'}, 1200, "<>");
  p5.animate({fill: '#5CD6FF'}, 1500, "<>");
  p6.animate({fill: '#5CD6FF'}, 1800, "<>");
  p7.animate({fill: '#5CD6FF'}, 2100, "<>");
  p8.animate({fill: '#5CD6FF'}, 2400, "<>");
  p9.animate({fill: '#5CD6FF'}, 2700, "<>");
}

function doGplus() {
  p1.animate({fill: '#ECB617'}, 300, "<>");
  p2.animate({fill: '#ECB617'}, 600, "<>");
  p3.animate({fill: '#DA2825'}, 900, "<>");
  p4.animate({fill: '#DA2825'}, 1200, "<>");
  p5.animate({fill: '#4B79EB'}, 1500, "<>");
  p6.animate({fill: '#4B79EB'}, 1800, "<>");
  p7.animate({fill: '#24A639'}, 2100, "<>");
  p8.animate({fill: '#24A639'}, 2400, "<>");
  p9.animate({fill: '#24A639'}, 2700, "<>");
}

function doGithub() {
  p1.animate({fill: '#000000'}, 300, "<>");
  p2.animate({fill: '#000000'}, 600, "<>");
  p3.animate({fill: '#000000'}, 900, "<>");
  p4.animate({fill: '#000000'}, 1200, "<>");
  p5.animate({fill: '#000000'}, 1500, "<>");
  p6.animate({fill: '#000000'}, 1800, "<>");
  p7.animate({fill: '#62E3FF'}, 2100, "<>");
  p8.animate({fill: '#62E3FF'}, 2400, "<>");
  p9.animate({fill: '#62E3FF'}, 2700, "<>");
}

function doInstagram() {
  p1.animate({fill: '#D6C9B8'}, 300, "<>");
  p2.animate({fill: '#D6C9B8'}, 600, "<>");
  p3.animate({fill: '#D6C9B8'}, 900, "<>");
  p4.animate({fill: '#A07759'}, 1200, "<>");
  p5.animate({fill: '#A07759'}, 1500, "<>");
  p6.animate({fill: '#FF3958'}, 1800, "<>");
  p7.animate({fill: '#FDCB34'}, 2100, "<>");
  p8.animate({fill: '#75CF9B'}, 2400, "<>");
  p9.animate({fill: '#4895FF'}, 2700, "<>");
}

function doLastfm() {
  p1.animate({fill: '#DD1303'}, 300, "<>");
  p2.animate({fill: '#DD1303'}, 600, "<>");
  p3.animate({fill: '#DD1303'}, 900, "<>");
  p4.animate({fill: '#DD1303'}, 1200, "<>");
  p5.animate({fill: '#DD1303'}, 1500, "<>");
  p6.animate({fill: '#DD1303'}, 1800, "<>");
  p7.animate({fill: '#DD1303'}, 2100, "<>");
  p8.animate({fill: '#DD1303'}, 2400, "<>");
  p9.animate({fill: '#DD1303'}, 2700, "<>");
}

function doYoutube() {
  p1.animate({fill: '#333333'}, 300, "<>");
  p2.animate({fill: '#333333'}, 600, "<>");
  p3.animate({fill: '#333333'}, 900, "<>");
  p4.animate({fill: '#333333'}, 1200, "<>");
  p5.animate({fill: '#FF3333'}, 1500, "<>");
  p6.animate({fill: '#FF3333'}, 1800, "<>");
  p7.animate({fill: '#FF3333'}, 2100, "<>");
  p8.animate({fill: '#FF3333'}, 2400, "<>");
  p9.animate({fill: '#FF3333'}, 2700, "<>");
}