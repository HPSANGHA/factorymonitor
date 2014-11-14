/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewTPApps.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.TP_APPLICATION.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.TP_APPLICATION." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

