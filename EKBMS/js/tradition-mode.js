// If absolute URL from the remote server is provided, configure the CORS
// header on that server.
var url = 'file/jie.pdf';

// Loaded via <script> tag, create shortcut to access PDF.js exports.
var pdfjsLib = window['pdfjs-dist/build/pdf'];

// The workerSrc property shall be specified.
pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

var PDF=null;

// Asynchronous download of PDF
pdfjsLib.getDocument(url).promise.then(function(pdf) {
  // Fetch the first page
  PDF=pdf;
  var pageNumber = 1;
  var overPage=3;
  if(overPage>pdf.numPages){
  	overPage=pdf.numPages;
  }
  for(var pageNumber=1;pageNumber<=overPage;pageNumber++){
  pdf.getPage(pageNumber).then(function(page) {
    var scale = 1.5;
    var viewport = page.getViewport(scale);
    // Prepare canvas using PDF page dimensions
    var $canvas=$("<canvas class='word-canvas'></canvas>");
    $("#showWordDiv").append($canvas);
    var canvas = $canvas.get(0);
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Render PDF page into canvas context
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    var renderTask = page.render(renderContext);
    renderTask.then(function () {
      console.log('Page rendered');
    });
  });
  }
  if(pdf.numPages<=3){
  	$("#addMore").replaceWith("<p class='word-over-message'>阅读已结束，感谢观看</p>");
  }
}, function (reason) {
  // PDF loading error
  console.error(reason);
});
function showAllPage(){
	for(var pageNumber=4;pageNumber<=PDF.numPages;pageNumber++){
  PDF.getPage(pageNumber).then(function(page) {
    var scale = 1.5;
    var viewport = page.getViewport(scale);
    // Prepare canvas using PDF page dimensions
    var $canvas=$("<canvas class='word-canvas'></canvas>");
    $("#showWordDiv").append($canvas);
    var canvas = $canvas.get(0);
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Render PDF page into canvas context
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    var renderTask = page.render(renderContext);
    renderTask.then(function () {
      console.log('Page rendered');
    });
  });
  $("#addMore").replaceWith("<p class='word-over-message'>阅读已结束，感谢观看</p>");
 }
}
document.getElementById("addMore").addEventListener('click',showAllPage);