/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewStatus.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.REF_STATUS.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.REF_STATUS." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

