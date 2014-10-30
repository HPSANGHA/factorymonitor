/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewResourceDetail.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.RESOURCE.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.RESOURCE." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

