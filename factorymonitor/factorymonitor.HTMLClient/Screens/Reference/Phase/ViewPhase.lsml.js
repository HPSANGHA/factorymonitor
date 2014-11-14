/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewPhase.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.REF_PHASE.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.REF_PHASE." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

