/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewRole.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.REF_ROLE.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.REF_ROLE." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

