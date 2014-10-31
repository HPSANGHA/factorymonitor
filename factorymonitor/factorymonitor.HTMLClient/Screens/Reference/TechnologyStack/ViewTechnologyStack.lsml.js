/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewTechnologyStack.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.REF_TECHNOLOGY_STACK.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.REF_TECHNOLOGY_STACK." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

