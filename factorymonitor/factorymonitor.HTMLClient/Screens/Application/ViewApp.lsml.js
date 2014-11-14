/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewApp.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.APP.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.APP." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

