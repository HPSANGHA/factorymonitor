/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewGap.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.REF_GAP.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.REF_GAP." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

