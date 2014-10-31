/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewApplicationType.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.REF_APPLICATION_TYPE.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.REF_APPLICATION_TYPE." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

