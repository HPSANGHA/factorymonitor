/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewTechnology.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.REF_TECHNOLOGY.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.REF_TECHNOLOGY." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

