/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewComplexity.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.REF_COMPLEXITY.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.REF_COMPLEXITY." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

