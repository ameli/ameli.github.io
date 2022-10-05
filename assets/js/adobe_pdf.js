const clientId = "becbabeb5d0d4204b5b99689751e71ef";

const viewerOptionsForText = {
    // embedMode: "IN_LINE",
    embedMode: "LIGHT_BOX",
    // embedMode: "SIZED_CONTAINER",
    // embedMode: "FULL_WINDOW",
    defaultViewMode: "FIT_PAGE",
    // showDownloadPDF: false,
    // showPrintPDF: false,
    enableFormFilling: false,
    // showZoomControl: false,
    showThumbnails: false,
    showBookmarks: false,
    showAnnotationTools: false,
    showFullScreen: true,
    // enableLinearization: true,
};

const viewerOptionsForSlide = {
    // embedMode: "IN_LINE",
    embedMode: "LIGHT_BOX",
    // embedMode: "SIZED_CONTAINER",
    // embedMode: "FULL_WINDOW",
    defaultViewMode: "FIT_PAGE",
    // defaultViewMode: "FIT_WIDTH",
    // showDownloadPDF: false,
    // showPrintPDF: false,
    enableFormFilling: false,
    showZoomControl: false,
    showThumbnails: false,
    showBookmarks: false,
    showAnnotationTools: false,
    showFullScreen: true,
    // enableLinearization: true,
};

function fetchPDF(urlToPDF) {
    return new Promise((resolve) => {
        fetch(urlToPDF)
            .then((resolve) => resolve.blob())
            .then((blob) => {
                resolve(blob.arrayBuffer());
            })
    })
}

function showPDF(urlToPDF, slide=false) {
    var adobeDCView = new AdobeDC.View({
            clientId: clientId
        });

    var viewerOptions = null;
    if (slide == true) {
        viewerOptions = viewerOptionsForSlide;
    } else {
        viewerOptions = viewerOptionsForText;
    }


    var previewFilePromise = adobeDCView.previewFile(
        {
            content: { promise: fetchPDF(urlToPDF) },
            metaData: { fileName: urlToPDF.split("/").slice(-1)[0] }
        },
        viewerOptions
    );
}

// document.addEventListener("adobe_dc_view_sdk.ready", function () {
//
//     document.getElementById("showPDF-thesis-text").addEventListener("click", function () {
//         showPDF("http://transport.me.berkeley.edu/nas/public/files/thesis_text.pdf")
//     });
//
//     document.getElementById("showPDF-thesis-slides").addEventListener("click", function () {
//         showPDF("http://transport.me.berkeley.edu/nas/public/files/thesis_slides.pdf", true)
//         // showPDF("https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:6cbc754c-b4c6-4e09-97f0-eb3722ae5468", true)
//         // showPDF("https://berkeley.box.com/s/zjjlltw8qpjsrdxlrwb146cn72xobbss", true)
//         // showPDF("https://docdro.id/LIcvxAF", true)
//         // showPDF("https://www.docdroid.net/LIcvxAF/paper-pdf", true)
//         // showPDF("https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Survey.pdf", true)
//         // showPDF("https://sia-test.tiiny.site/", true)
//     });
//
//     document.getElementById("showPDF-dissertation-text").addEventListener("click", function () {
//         showPDF("http://transport.me.berkeley.edu/nas/public/files/dissertation_text.pdf")
//     });
//
//     document.getElementById("showPDF-dissertation-slides").addEventListener("click", function () {
//         showPDF("http://transport.me.berkeley.edu/nas/public/files/dissertation_slides.pdf", true)
//     });
// });

// Add arrayBuffer if necessary i.e. Safari
(function () {
    if (Blob.arrayBuffer != "function") {
        Blob.prototype.arrayBuffer = myArrayBuffer;
    }

    function myArrayBuffer() {
        return new Promise((resolve) => {
            let fileReader = new FileReader();
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.readAsArrayBuffer(this);
        });
    }
})();


// document.addEventListener("adobe_dc_view_sdk.ready", function()
// {
//     var adobeDCView = new AdobeDC.View({clientId: "becbabeb5d0d4204b5b99689751e71ef", divId: "adobe-dc-view"});
//     adobeDCView.previewFile(
//         {
//             content:{location: {url: "https://arxiv.org/pdf/2009.07385.pdf"}},
//             // content:{location: {promise: filePromise}},
//             // metaData:{fileName: "Bodea Brochure.pdf"}
//             metaData:{fileName: ""}
//         },
//         {
//             // embedMode: "IN_LINE",
//             // embedMode: "LIGHT_BOX",
//             // embedMode: "SIZED_CONTAINER",
//             embedMode: "FULL_WINDOW",
//             showDownloadPDF: false,
//             showPrintPDF: false,
//             enableFormFilling: false,
//             showZoomControl: false,
//             showThumbnails: false,
//             showBookmarks: false,
//             showAnnotationTools: false,
//             showFullScreen: true,
//             enableLinearization: true,
//         }
//     );
// });
