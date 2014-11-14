/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewTp.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.TP.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.TP." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

