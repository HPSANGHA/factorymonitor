/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditApplicationType.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditApplicationType
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditApplicationType,
            data: lightSwitchApplication.AddEditApplicationType,
            value: lightSwitchApplication.AddEditApplicationType
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditApplicationType,
            data: lightSwitchApplication.AddEditApplicationType,
            value: lightSwitchApplication.REF_APPLICATION_TYPE
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditApplicationType,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: lightSwitchApplication.REF_APPLICATION_TYPE
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditApplicationType,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditApplicationType,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditApplicationType
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditApplicationType, {
        /// <field>
        /// Called when a new AddEditApplicationType screen is created.
        /// <br/>created(msls.application.AddEditApplicationType screen)
        /// </field>
        created: [lightSwitchApplication.AddEditApplicationType],
        /// <field>
        /// Called before changes on an active AddEditApplicationType screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditApplicationType screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditApplicationType],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditApplicationType().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditApplicationType().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditApplicationType().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditApplicationType().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditApplicationType().findContentItem("Description"); }]
    });

    lightSwitchApplication.BrowseApplicationTypes.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseApplicationTypes
        },
        ApplicationTypeList: {
            _$class: msls.ContentItem,
            _$name: "ApplicationTypeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseApplicationTypes,
            data: lightSwitchApplication.BrowseApplicationTypes,
            value: lightSwitchApplication.BrowseApplicationTypes
        },
        REF_APPLICATION_TYPEs: {
            _$class: msls.ContentItem,
            _$name: "REF_APPLICATION_TYPEs",
            _$parentName: "ApplicationTypeList",
            screen: lightSwitchApplication.BrowseApplicationTypes,
            data: lightSwitchApplication.BrowseApplicationTypes,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseApplicationTypes,
                _$entry: {
                    elementType: lightSwitchApplication.REF_APPLICATION_TYPE
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "REF_APPLICATION_TYPEs",
            screen: lightSwitchApplication.BrowseApplicationTypes,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: lightSwitchApplication.REF_APPLICATION_TYPE
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseApplicationTypes,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseApplicationTypes,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseApplicationTypes
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseApplicationTypes, {
        /// <field>
        /// Called when a new BrowseApplicationTypes screen is created.
        /// <br/>created(msls.application.BrowseApplicationTypes screen)
        /// </field>
        created: [lightSwitchApplication.BrowseApplicationTypes],
        /// <field>
        /// Called before changes on an active BrowseApplicationTypes screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseApplicationTypes screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseApplicationTypes],
        /// <field>
        /// Called after the ApplicationTypeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ApplicationTypeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseApplicationTypes().findContentItem("ApplicationTypeList"); }],
        /// <field>
        /// Called after the REF_APPLICATION_TYPEs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_APPLICATION_TYPEs_postRender: [$element, function () { return new lightSwitchApplication.BrowseApplicationTypes().findContentItem("REF_APPLICATION_TYPEs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseApplicationTypes().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseApplicationTypes().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseApplicationTypes().findContentItem("Description"); }]
    });

    lightSwitchApplication.ViewApplicationType.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewApplicationType
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewApplicationType,
            data: lightSwitchApplication.ViewApplicationType,
            value: lightSwitchApplication.ViewApplicationType
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewApplicationType,
            data: lightSwitchApplication.ViewApplicationType,
            value: lightSwitchApplication.REF_APPLICATION_TYPE
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewApplicationType,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: lightSwitchApplication.REF_APPLICATION_TYPE
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewApplicationType,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewApplicationType,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewApplicationType,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: String
        },
        CreatedTime: {
            _$class: msls.ContentItem,
            _$name: "CreatedTime",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewApplicationType,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewApplicationType,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: String
        },
        ModifiedDate: {
            _$class: msls.ContentItem,
            _$name: "ModifiedDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewApplicationType,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: Date
        },
        TPs: {
            _$class: msls.ContentItem,
            _$name: "TPs",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewApplicationType,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: lightSwitchApplication.REF_APPLICATION_TYPE
        },
        TPs1: {
            _$class: msls.ContentItem,
            _$name: "TPs1",
            _$parentName: "TPs",
            screen: lightSwitchApplication.ViewApplicationType,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewApplicationType,
                _$entry: {
                    elementType: lightSwitchApplication.TP
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "TPs1",
            screen: lightSwitchApplication.ViewApplicationType,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.TP
        },
        Name1: {
            _$class: msls.ContentItem,
            _$name: "Name1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewApplicationType,
            data: lightSwitchApplication.TP,
            value: String
        },
        Number: {
            _$class: msls.ContentItem,
            _$name: "Number",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewApplicationType,
            data: lightSwitchApplication.TP,
            value: Number
        },
        Description1: {
            _$class: msls.ContentItem,
            _$name: "Description1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewApplicationType,
            data: lightSwitchApplication.TP,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewApplicationType
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewApplicationType, {
        /// <field>
        /// Called when a new ViewApplicationType screen is created.
        /// <br/>created(msls.application.ViewApplicationType screen)
        /// </field>
        created: [lightSwitchApplication.ViewApplicationType],
        /// <field>
        /// Called before changes on an active ViewApplicationType screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewApplicationType screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewApplicationType],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewApplicationType().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewApplicationType().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewApplicationType().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ViewApplicationType().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ViewApplicationType().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewApplicationType().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the CreatedTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedTime_postRender: [$element, function () { return new lightSwitchApplication.ViewApplicationType().findContentItem("CreatedTime"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewApplicationType().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the ModifiedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedDate_postRender: [$element, function () { return new lightSwitchApplication.ViewApplicationType().findContentItem("ModifiedDate"); }],
        /// <field>
        /// Called after the TPs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TPs_postRender: [$element, function () { return new lightSwitchApplication.ViewApplicationType().findContentItem("TPs"); }],
        /// <field>
        /// Called after the TPs1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TPs1_postRender: [$element, function () { return new lightSwitchApplication.ViewApplicationType().findContentItem("TPs1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ViewApplicationType().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name1_postRender: [$element, function () { return new lightSwitchApplication.ViewApplicationType().findContentItem("Name1"); }],
        /// <field>
        /// Called after the Number content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Number_postRender: [$element, function () { return new lightSwitchApplication.ViewApplicationType().findContentItem("Number"); }],
        /// <field>
        /// Called after the Description1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description1_postRender: [$element, function () { return new lightSwitchApplication.ViewApplicationType().findContentItem("Description1"); }]
    });

    lightSwitchApplication.AddEditComplexity.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditComplexity
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditComplexity,
            data: lightSwitchApplication.AddEditComplexity,
            value: lightSwitchApplication.AddEditComplexity
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditComplexity,
            data: lightSwitchApplication.AddEditComplexity,
            value: lightSwitchApplication.REF_COMPLEXITY
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditComplexity,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: lightSwitchApplication.REF_COMPLEXITY
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditComplexity,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditComplexity
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditComplexity, {
        /// <field>
        /// Called when a new AddEditComplexity screen is created.
        /// <br/>created(msls.application.AddEditComplexity screen)
        /// </field>
        created: [lightSwitchApplication.AddEditComplexity],
        /// <field>
        /// Called before changes on an active AddEditComplexity screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditComplexity screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditComplexity],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditComplexity().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditComplexity().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditComplexity().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditComplexity().findContentItem("Name"); }]
    });

    lightSwitchApplication.BrowseComplexities.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseComplexities
        },
        ComplexityList: {
            _$class: msls.ContentItem,
            _$name: "ComplexityList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseComplexities,
            data: lightSwitchApplication.BrowseComplexities,
            value: lightSwitchApplication.BrowseComplexities
        },
        REF_COMPLEXITies: {
            _$class: msls.ContentItem,
            _$name: "REF_COMPLEXITies",
            _$parentName: "ComplexityList",
            screen: lightSwitchApplication.BrowseComplexities,
            data: lightSwitchApplication.BrowseComplexities,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseComplexities,
                _$entry: {
                    elementType: lightSwitchApplication.REF_COMPLEXITY
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "REF_COMPLEXITies",
            screen: lightSwitchApplication.BrowseComplexities,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: lightSwitchApplication.REF_COMPLEXITY
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseComplexities,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseComplexities,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseComplexities
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseComplexities, {
        /// <field>
        /// Called when a new BrowseComplexities screen is created.
        /// <br/>created(msls.application.BrowseComplexities screen)
        /// </field>
        created: [lightSwitchApplication.BrowseComplexities],
        /// <field>
        /// Called before changes on an active BrowseComplexities screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseComplexities screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseComplexities],
        /// <field>
        /// Called after the ComplexityList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ComplexityList_postRender: [$element, function () { return new lightSwitchApplication.BrowseComplexities().findContentItem("ComplexityList"); }],
        /// <field>
        /// Called after the REF_COMPLEXITies content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_COMPLEXITies_postRender: [$element, function () { return new lightSwitchApplication.BrowseComplexities().findContentItem("REF_COMPLEXITies"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseComplexities().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseComplexities().findContentItem("Name"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseComplexities().findContentItem("CreatedDate"); }]
    });

    lightSwitchApplication.ViewComplexity.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewComplexity
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewComplexity,
            data: lightSwitchApplication.ViewComplexity,
            value: lightSwitchApplication.ViewComplexity
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewComplexity,
            data: lightSwitchApplication.ViewComplexity,
            value: lightSwitchApplication.REF_COMPLEXITY
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewComplexity,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: lightSwitchApplication.REF_COMPLEXITY
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewComplexity,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewComplexity,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewComplexity,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewComplexity,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: String
        },
        ModifiedDate: {
            _$class: msls.ContentItem,
            _$name: "ModifiedDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewComplexity,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewComplexity,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: lightSwitchApplication.REF_COMPLEXITY
        },
        TPs1: {
            _$class: msls.ContentItem,
            _$name: "TPs1",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewComplexity,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewComplexity,
                _$entry: {
                    elementType: lightSwitchApplication.TP
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "TPs1",
            screen: lightSwitchApplication.ViewComplexity,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.TP
        },
        Name1: {
            _$class: msls.ContentItem,
            _$name: "Name1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewComplexity,
            data: lightSwitchApplication.TP,
            value: String
        },
        Number: {
            _$class: msls.ContentItem,
            _$name: "Number",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewComplexity,
            data: lightSwitchApplication.TP,
            value: Number
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewComplexity,
            data: lightSwitchApplication.TP,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewComplexity
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewComplexity, {
        /// <field>
        /// Called when a new ViewComplexity screen is created.
        /// <br/>created(msls.application.ViewComplexity screen)
        /// </field>
        created: [lightSwitchApplication.ViewComplexity],
        /// <field>
        /// Called before changes on an active ViewComplexity screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewComplexity screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewComplexity],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewComplexity().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewComplexity().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewComplexity().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ViewComplexity().findContentItem("Name"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewComplexity().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.ViewComplexity().findContentItem("CreatedDate"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewComplexity().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the ModifiedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedDate_postRender: [$element, function () { return new lightSwitchApplication.ViewComplexity().findContentItem("ModifiedDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewComplexity().findContentItem("right"); }],
        /// <field>
        /// Called after the TPs1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TPs1_postRender: [$element, function () { return new lightSwitchApplication.ViewComplexity().findContentItem("TPs1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ViewComplexity().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name1_postRender: [$element, function () { return new lightSwitchApplication.ViewComplexity().findContentItem("Name1"); }],
        /// <field>
        /// Called after the Number content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Number_postRender: [$element, function () { return new lightSwitchApplication.ViewComplexity().findContentItem("Number"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ViewComplexity().findContentItem("Description"); }]
    });

    lightSwitchApplication.AddEditGap.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditGap
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditGap,
            data: lightSwitchApplication.AddEditGap,
            value: lightSwitchApplication.AddEditGap
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditGap,
            data: lightSwitchApplication.AddEditGap,
            value: lightSwitchApplication.REF_GAP
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditGap,
            data: lightSwitchApplication.REF_GAP,
            value: lightSwitchApplication.REF_GAP
        },
        GapID: {
            _$class: msls.ContentItem,
            _$name: "GapID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditGap,
            data: lightSwitchApplication.REF_GAP,
            value: Number
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditGap,
            data: lightSwitchApplication.REF_GAP,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditGap,
            data: lightSwitchApplication.REF_GAP,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditGap,
            data: lightSwitchApplication.REF_GAP,
            value: lightSwitchApplication.REF_GAP
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditGap
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditGap, {
        /// <field>
        /// Called when a new AddEditGap screen is created.
        /// <br/>created(msls.application.AddEditGap screen)
        /// </field>
        created: [lightSwitchApplication.AddEditGap],
        /// <field>
        /// Called before changes on an active AddEditGap screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditGap screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditGap],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditGap().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditGap().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditGap().findContentItem("left"); }],
        /// <field>
        /// Called after the GapID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GapID_postRender: [$element, function () { return new lightSwitchApplication.AddEditGap().findContentItem("GapID"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditGap().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditGap().findContentItem("Description"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditGap().findContentItem("right"); }]
    });

    lightSwitchApplication.BrowseGaps.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseGaps
        },
        GapList: {
            _$class: msls.ContentItem,
            _$name: "GapList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseGaps,
            data: lightSwitchApplication.BrowseGaps,
            value: lightSwitchApplication.BrowseGaps
        },
        REF_GAPs: {
            _$class: msls.ContentItem,
            _$name: "REF_GAPs",
            _$parentName: "GapList",
            screen: lightSwitchApplication.BrowseGaps,
            data: lightSwitchApplication.BrowseGaps,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseGaps,
                _$entry: {
                    elementType: lightSwitchApplication.REF_GAP
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "REF_GAPs",
            screen: lightSwitchApplication.BrowseGaps,
            data: lightSwitchApplication.REF_GAP,
            value: lightSwitchApplication.REF_GAP
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseGaps,
            data: lightSwitchApplication.REF_GAP,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseGaps,
            data: lightSwitchApplication.REF_GAP,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseGaps
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseGaps, {
        /// <field>
        /// Called when a new BrowseGaps screen is created.
        /// <br/>created(msls.application.BrowseGaps screen)
        /// </field>
        created: [lightSwitchApplication.BrowseGaps],
        /// <field>
        /// Called before changes on an active BrowseGaps screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseGaps screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseGaps],
        /// <field>
        /// Called after the GapList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GapList_postRender: [$element, function () { return new lightSwitchApplication.BrowseGaps().findContentItem("GapList"); }],
        /// <field>
        /// Called after the REF_GAPs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_GAPs_postRender: [$element, function () { return new lightSwitchApplication.BrowseGaps().findContentItem("REF_GAPs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseGaps().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseGaps().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseGaps().findContentItem("Description"); }]
    });

    lightSwitchApplication.ViewGap.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewGap
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewGap,
            data: lightSwitchApplication.ViewGap,
            value: lightSwitchApplication.ViewGap
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewGap,
            data: lightSwitchApplication.ViewGap,
            value: lightSwitchApplication.REF_GAP
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewGap,
            data: lightSwitchApplication.REF_GAP,
            value: lightSwitchApplication.REF_GAP
        },
        GapID: {
            _$class: msls.ContentItem,
            _$name: "GapID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewGap,
            data: lightSwitchApplication.REF_GAP,
            value: Number
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewGap,
            data: lightSwitchApplication.REF_GAP,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewGap,
            data: lightSwitchApplication.REF_GAP,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewGap,
            data: lightSwitchApplication.REF_GAP,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewGap,
            data: lightSwitchApplication.REF_GAP,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewGap,
            data: lightSwitchApplication.REF_GAP,
            value: String
        },
        ModifiedDate: {
            _$class: msls.ContentItem,
            _$name: "ModifiedDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewGap,
            data: lightSwitchApplication.REF_GAP,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewGap,
            data: lightSwitchApplication.REF_GAP,
            value: lightSwitchApplication.REF_GAP
        },
        TPs1: {
            _$class: msls.ContentItem,
            _$name: "TPs1",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewGap,
            data: lightSwitchApplication.REF_GAP,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewGap,
                _$entry: {
                    elementType: lightSwitchApplication.TP
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "TPs1",
            screen: lightSwitchApplication.ViewGap,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.TP
        },
        Name1: {
            _$class: msls.ContentItem,
            _$name: "Name1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewGap,
            data: lightSwitchApplication.TP,
            value: String
        },
        Number: {
            _$class: msls.ContentItem,
            _$name: "Number",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewGap,
            data: lightSwitchApplication.TP,
            value: Number
        },
        Description1: {
            _$class: msls.ContentItem,
            _$name: "Description1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewGap,
            data: lightSwitchApplication.TP,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewGap
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewGap, {
        /// <field>
        /// Called when a new ViewGap screen is created.
        /// <br/>created(msls.application.ViewGap screen)
        /// </field>
        created: [lightSwitchApplication.ViewGap],
        /// <field>
        /// Called before changes on an active ViewGap screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewGap screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewGap],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewGap().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewGap().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewGap().findContentItem("left"); }],
        /// <field>
        /// Called after the GapID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GapID_postRender: [$element, function () { return new lightSwitchApplication.ViewGap().findContentItem("GapID"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ViewGap().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ViewGap().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewGap().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.ViewGap().findContentItem("CreatedDate"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewGap().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the ModifiedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedDate_postRender: [$element, function () { return new lightSwitchApplication.ViewGap().findContentItem("ModifiedDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewGap().findContentItem("right"); }],
        /// <field>
        /// Called after the TPs1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TPs1_postRender: [$element, function () { return new lightSwitchApplication.ViewGap().findContentItem("TPs1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ViewGap().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name1_postRender: [$element, function () { return new lightSwitchApplication.ViewGap().findContentItem("Name1"); }],
        /// <field>
        /// Called after the Number content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Number_postRender: [$element, function () { return new lightSwitchApplication.ViewGap().findContentItem("Number"); }],
        /// <field>
        /// Called after the Description1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description1_postRender: [$element, function () { return new lightSwitchApplication.ViewGap().findContentItem("Description1"); }]
    });

    lightSwitchApplication.AddEditPhase.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPhase
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPhase,
            data: lightSwitchApplication.AddEditPhase,
            value: lightSwitchApplication.AddEditPhase
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPhase,
            data: lightSwitchApplication.AddEditPhase,
            value: lightSwitchApplication.REF_PHASE
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPhase,
            data: lightSwitchApplication.REF_PHASE,
            value: lightSwitchApplication.REF_PHASE
        },
        PhaseID: {
            _$class: msls.ContentItem,
            _$name: "PhaseID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPhase,
            data: lightSwitchApplication.REF_PHASE,
            value: Number
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPhase,
            data: lightSwitchApplication.REF_PHASE,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPhase,
            data: lightSwitchApplication.REF_PHASE,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPhase
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPhase, {
        /// <field>
        /// Called when a new AddEditPhase screen is created.
        /// <br/>created(msls.application.AddEditPhase screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPhase],
        /// <field>
        /// Called before changes on an active AddEditPhase screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPhase screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPhase],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditPhase().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditPhase().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditPhase().findContentItem("left"); }],
        /// <field>
        /// Called after the PhaseID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PhaseID_postRender: [$element, function () { return new lightSwitchApplication.AddEditPhase().findContentItem("PhaseID"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditPhase().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditPhase().findContentItem("Description"); }]
    });

    lightSwitchApplication.BrowsePhases.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePhases
        },
        PhaseList: {
            _$class: msls.ContentItem,
            _$name: "PhaseList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowsePhases,
            data: lightSwitchApplication.BrowsePhases,
            value: lightSwitchApplication.BrowsePhases
        },
        REF_PHASEs: {
            _$class: msls.ContentItem,
            _$name: "REF_PHASEs",
            _$parentName: "PhaseList",
            screen: lightSwitchApplication.BrowsePhases,
            data: lightSwitchApplication.BrowsePhases,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowsePhases,
                _$entry: {
                    elementType: lightSwitchApplication.REF_PHASE
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "REF_PHASEs",
            screen: lightSwitchApplication.BrowsePhases,
            data: lightSwitchApplication.REF_PHASE,
            value: lightSwitchApplication.REF_PHASE
        },
        PhaseID: {
            _$class: msls.ContentItem,
            _$name: "PhaseID",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowsePhases,
            data: lightSwitchApplication.REF_PHASE,
            value: Number
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowsePhases,
            data: lightSwitchApplication.REF_PHASE,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowsePhases,
            data: lightSwitchApplication.REF_PHASE,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePhases
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowsePhases, {
        /// <field>
        /// Called when a new BrowsePhases screen is created.
        /// <br/>created(msls.application.BrowsePhases screen)
        /// </field>
        created: [lightSwitchApplication.BrowsePhases],
        /// <field>
        /// Called before changes on an active BrowsePhases screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowsePhases screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowsePhases],
        /// <field>
        /// Called after the PhaseList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PhaseList_postRender: [$element, function () { return new lightSwitchApplication.BrowsePhases().findContentItem("PhaseList"); }],
        /// <field>
        /// Called after the REF_PHASEs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_PHASEs_postRender: [$element, function () { return new lightSwitchApplication.BrowsePhases().findContentItem("REF_PHASEs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowsePhases().findContentItem("rows"); }],
        /// <field>
        /// Called after the PhaseID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PhaseID_postRender: [$element, function () { return new lightSwitchApplication.BrowsePhases().findContentItem("PhaseID"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowsePhases().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowsePhases().findContentItem("Description"); }]
    });

    lightSwitchApplication.ViewPhase.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewPhase
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewPhase,
            data: lightSwitchApplication.ViewPhase,
            value: lightSwitchApplication.ViewPhase
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewPhase,
            data: lightSwitchApplication.ViewPhase,
            value: lightSwitchApplication.REF_PHASE
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewPhase,
            data: lightSwitchApplication.REF_PHASE,
            value: lightSwitchApplication.REF_PHASE
        },
        PhaseID: {
            _$class: msls.ContentItem,
            _$name: "PhaseID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewPhase,
            data: lightSwitchApplication.REF_PHASE,
            value: Number
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewPhase,
            data: lightSwitchApplication.REF_PHASE,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewPhase,
            data: lightSwitchApplication.REF_PHASE,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewPhase,
            data: lightSwitchApplication.REF_PHASE,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewPhase,
            data: lightSwitchApplication.REF_PHASE,
            value: String
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewPhase,
            data: lightSwitchApplication.REF_PHASE,
            value: String
        },
        ModifiedDate: {
            _$class: msls.ContentItem,
            _$name: "ModifiedDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewPhase,
            data: lightSwitchApplication.REF_PHASE,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewPhase,
            data: lightSwitchApplication.REF_PHASE,
            value: lightSwitchApplication.REF_PHASE
        },
        TP_PHASEs1: {
            _$class: msls.ContentItem,
            _$name: "TP_PHASEs1",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewPhase,
            data: lightSwitchApplication.REF_PHASE,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewPhase,
                _$entry: {
                    elementType: lightSwitchApplication.TP_PHASE
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "TP_PHASEs1",
            screen: lightSwitchApplication.ViewPhase,
            data: lightSwitchApplication.TP_PHASE,
            value: lightSwitchApplication.TP_PHASE
        },
        Duration: {
            _$class: msls.ContentItem,
            _$name: "Duration",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewPhase,
            data: lightSwitchApplication.TP_PHASE,
            value: String
        },
        TpPhaseID: {
            _$class: msls.ContentItem,
            _$name: "TpPhaseID",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewPhase,
            data: lightSwitchApplication.TP_PHASE,
            value: Number
        },
        PlannedStartDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedStartDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewPhase,
            data: lightSwitchApplication.TP_PHASE,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewPhase
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewPhase, {
        /// <field>
        /// Called when a new ViewPhase screen is created.
        /// <br/>created(msls.application.ViewPhase screen)
        /// </field>
        created: [lightSwitchApplication.ViewPhase],
        /// <field>
        /// Called before changes on an active ViewPhase screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewPhase screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewPhase],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewPhase().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewPhase().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewPhase().findContentItem("left"); }],
        /// <field>
        /// Called after the PhaseID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PhaseID_postRender: [$element, function () { return new lightSwitchApplication.ViewPhase().findContentItem("PhaseID"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ViewPhase().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ViewPhase().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.ViewPhase().findContentItem("CreatedDate"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewPhase().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewPhase().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the ModifiedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedDate_postRender: [$element, function () { return new lightSwitchApplication.ViewPhase().findContentItem("ModifiedDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewPhase().findContentItem("right"); }],
        /// <field>
        /// Called after the TP_PHASEs1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_PHASEs1_postRender: [$element, function () { return new lightSwitchApplication.ViewPhase().findContentItem("TP_PHASEs1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ViewPhase().findContentItem("rows"); }],
        /// <field>
        /// Called after the Duration content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Duration_postRender: [$element, function () { return new lightSwitchApplication.ViewPhase().findContentItem("Duration"); }],
        /// <field>
        /// Called after the TpPhaseID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TpPhaseID_postRender: [$element, function () { return new lightSwitchApplication.ViewPhase().findContentItem("TpPhaseID"); }],
        /// <field>
        /// Called after the PlannedStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedStartDate_postRender: [$element, function () { return new lightSwitchApplication.ViewPhase().findContentItem("PlannedStartDate"); }]
    });

    lightSwitchApplication.AddEditRole.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditRole
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditRole,
            data: lightSwitchApplication.AddEditRole,
            value: lightSwitchApplication.AddEditRole
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditRole,
            data: lightSwitchApplication.AddEditRole,
            value: lightSwitchApplication.REF_ROLE
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditRole,
            data: lightSwitchApplication.REF_ROLE,
            value: lightSwitchApplication.REF_ROLE
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditRole,
            data: lightSwitchApplication.REF_ROLE,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditRole,
            data: lightSwitchApplication.REF_ROLE,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditRole,
            data: lightSwitchApplication.REF_ROLE,
            value: lightSwitchApplication.REF_ROLE
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditRole
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditRole, {
        /// <field>
        /// Called when a new AddEditRole screen is created.
        /// <br/>created(msls.application.AddEditRole screen)
        /// </field>
        created: [lightSwitchApplication.AddEditRole],
        /// <field>
        /// Called before changes on an active AddEditRole screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditRole screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditRole],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditRole().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditRole().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditRole().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditRole().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditRole().findContentItem("Description"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditRole().findContentItem("right"); }]
    });

    lightSwitchApplication.BrowseRoles.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseRoles
        },
        RoleList: {
            _$class: msls.ContentItem,
            _$name: "RoleList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseRoles,
            data: lightSwitchApplication.BrowseRoles,
            value: lightSwitchApplication.BrowseRoles
        },
        REF_ROLEs: {
            _$class: msls.ContentItem,
            _$name: "REF_ROLEs",
            _$parentName: "RoleList",
            screen: lightSwitchApplication.BrowseRoles,
            data: lightSwitchApplication.BrowseRoles,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseRoles,
                _$entry: {
                    elementType: lightSwitchApplication.REF_ROLE
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "REF_ROLEs",
            screen: lightSwitchApplication.BrowseRoles,
            data: lightSwitchApplication.REF_ROLE,
            value: lightSwitchApplication.REF_ROLE
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseRoles,
            data: lightSwitchApplication.REF_ROLE,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseRoles,
            data: lightSwitchApplication.REF_ROLE,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseRoles,
            data: lightSwitchApplication.REF_ROLE,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseRoles
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseRoles, {
        /// <field>
        /// Called when a new BrowseRoles screen is created.
        /// <br/>created(msls.application.BrowseRoles screen)
        /// </field>
        created: [lightSwitchApplication.BrowseRoles],
        /// <field>
        /// Called before changes on an active BrowseRoles screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseRoles screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseRoles],
        /// <field>
        /// Called after the RoleList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RoleList_postRender: [$element, function () { return new lightSwitchApplication.BrowseRoles().findContentItem("RoleList"); }],
        /// <field>
        /// Called after the REF_ROLEs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_ROLEs_postRender: [$element, function () { return new lightSwitchApplication.BrowseRoles().findContentItem("REF_ROLEs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseRoles().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseRoles().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseRoles().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseRoles().findContentItem("CreatedDate"); }]
    });

    lightSwitchApplication.ViewRole.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewRole
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewRole,
            data: lightSwitchApplication.ViewRole,
            value: lightSwitchApplication.ViewRole
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewRole,
            data: lightSwitchApplication.ViewRole,
            value: lightSwitchApplication.REF_ROLE
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewRole,
            data: lightSwitchApplication.REF_ROLE,
            value: lightSwitchApplication.REF_ROLE
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewRole,
            data: lightSwitchApplication.REF_ROLE,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewRole,
            data: lightSwitchApplication.REF_ROLE,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewRole,
            data: lightSwitchApplication.REF_ROLE,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewRole,
            data: lightSwitchApplication.REF_ROLE,
            value: String
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewRole,
            data: lightSwitchApplication.REF_ROLE,
            value: String
        },
        ModifiedDate: {
            _$class: msls.ContentItem,
            _$name: "ModifiedDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewRole,
            data: lightSwitchApplication.REF_ROLE,
            value: Date
        },
        RESOURCEs: {
            _$class: msls.ContentItem,
            _$name: "RESOURCEs",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewRole,
            data: lightSwitchApplication.REF_ROLE,
            value: lightSwitchApplication.REF_ROLE
        },
        RESOURCEs1: {
            _$class: msls.ContentItem,
            _$name: "RESOURCEs1",
            _$parentName: "RESOURCEs",
            screen: lightSwitchApplication.ViewRole,
            data: lightSwitchApplication.REF_ROLE,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewRole,
                _$entry: {
                    elementType: lightSwitchApplication.RESOURCE
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "RESOURCEs1",
            screen: lightSwitchApplication.ViewRole,
            data: lightSwitchApplication.RESOURCE,
            value: lightSwitchApplication.RESOURCE
        },
        Name1: {
            _$class: msls.ContentItem,
            _$name: "Name1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewRole,
            data: lightSwitchApplication.RESOURCE,
            value: String
        },
        EmailId: {
            _$class: msls.ContentItem,
            _$name: "EmailId",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewRole,
            data: lightSwitchApplication.RESOURCE,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewRole
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewRole, {
        /// <field>
        /// Called when a new ViewRole screen is created.
        /// <br/>created(msls.application.ViewRole screen)
        /// </field>
        created: [lightSwitchApplication.ViewRole],
        /// <field>
        /// Called before changes on an active ViewRole screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewRole screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewRole],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewRole().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewRole().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewRole().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ViewRole().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ViewRole().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.ViewRole().findContentItem("CreatedDate"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewRole().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewRole().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the ModifiedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedDate_postRender: [$element, function () { return new lightSwitchApplication.ViewRole().findContentItem("ModifiedDate"); }],
        /// <field>
        /// Called after the RESOURCEs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RESOURCEs_postRender: [$element, function () { return new lightSwitchApplication.ViewRole().findContentItem("RESOURCEs"); }],
        /// <field>
        /// Called after the RESOURCEs1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RESOURCEs1_postRender: [$element, function () { return new lightSwitchApplication.ViewRole().findContentItem("RESOURCEs1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ViewRole().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name1_postRender: [$element, function () { return new lightSwitchApplication.ViewRole().findContentItem("Name1"); }],
        /// <field>
        /// Called after the EmailId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmailId_postRender: [$element, function () { return new lightSwitchApplication.ViewRole().findContentItem("EmailId"); }]
    });

    lightSwitchApplication.AddEditStatus.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditStatus
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditStatus,
            data: lightSwitchApplication.AddEditStatus,
            value: lightSwitchApplication.AddEditStatus
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditStatus,
            data: lightSwitchApplication.AddEditStatus,
            value: lightSwitchApplication.REF_STATUS
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditStatus,
            data: lightSwitchApplication.REF_STATUS,
            value: lightSwitchApplication.REF_STATUS
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditStatus,
            data: lightSwitchApplication.REF_STATUS,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditStatus,
            data: lightSwitchApplication.REF_STATUS,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditStatus,
            data: lightSwitchApplication.REF_STATUS,
            value: lightSwitchApplication.REF_STATUS
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditStatus
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditStatus, {
        /// <field>
        /// Called when a new AddEditStatus screen is created.
        /// <br/>created(msls.application.AddEditStatus screen)
        /// </field>
        created: [lightSwitchApplication.AddEditStatus],
        /// <field>
        /// Called before changes on an active AddEditStatus screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditStatus screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditStatus],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditStatus().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditStatus().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditStatus().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditStatus().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditStatus().findContentItem("Description"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditStatus().findContentItem("right"); }]
    });

    lightSwitchApplication.BrowseStatusSet.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseStatusSet
        },
        StatusList: {
            _$class: msls.ContentItem,
            _$name: "StatusList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseStatusSet,
            data: lightSwitchApplication.BrowseStatusSet,
            value: lightSwitchApplication.BrowseStatusSet
        },
        REF_STATUS: {
            _$class: msls.ContentItem,
            _$name: "REF_STATUS",
            _$parentName: "StatusList",
            screen: lightSwitchApplication.BrowseStatusSet,
            data: lightSwitchApplication.BrowseStatusSet,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseStatusSet,
                _$entry: {
                    elementType: lightSwitchApplication.REF_STATUS
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "REF_STATUS",
            screen: lightSwitchApplication.BrowseStatusSet,
            data: lightSwitchApplication.REF_STATUS,
            value: lightSwitchApplication.REF_STATUS
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseStatusSet,
            data: lightSwitchApplication.REF_STATUS,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseStatusSet,
            data: lightSwitchApplication.REF_STATUS,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseStatusSet,
            data: lightSwitchApplication.REF_STATUS,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseStatusSet
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseStatusSet, {
        /// <field>
        /// Called when a new BrowseStatusSet screen is created.
        /// <br/>created(msls.application.BrowseStatusSet screen)
        /// </field>
        created: [lightSwitchApplication.BrowseStatusSet],
        /// <field>
        /// Called before changes on an active BrowseStatusSet screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseStatusSet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseStatusSet],
        /// <field>
        /// Called after the StatusList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatusList_postRender: [$element, function () { return new lightSwitchApplication.BrowseStatusSet().findContentItem("StatusList"); }],
        /// <field>
        /// Called after the REF_STATUS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_STATUS_postRender: [$element, function () { return new lightSwitchApplication.BrowseStatusSet().findContentItem("REF_STATUS"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseStatusSet().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseStatusSet().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseStatusSet().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseStatusSet().findContentItem("CreatedDate"); }]
    });

    lightSwitchApplication.ViewStatus.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewStatus
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewStatus,
            data: lightSwitchApplication.ViewStatus,
            value: lightSwitchApplication.ViewStatus
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewStatus,
            data: lightSwitchApplication.ViewStatus,
            value: lightSwitchApplication.REF_STATUS
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewStatus,
            data: lightSwitchApplication.REF_STATUS,
            value: lightSwitchApplication.REF_STATUS
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewStatus,
            data: lightSwitchApplication.REF_STATUS,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewStatus,
            data: lightSwitchApplication.REF_STATUS,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewStatus,
            data: lightSwitchApplication.REF_STATUS,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewStatus,
            data: lightSwitchApplication.REF_STATUS,
            value: lightSwitchApplication.REF_STATUS
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewStatus,
            data: lightSwitchApplication.REF_STATUS,
            value: String
        },
        ModifiedDate: {
            _$class: msls.ContentItem,
            _$name: "ModifiedDate",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewStatus,
            data: lightSwitchApplication.REF_STATUS,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewStatus,
            data: lightSwitchApplication.REF_STATUS,
            value: String
        },
        RESOURCEs: {
            _$class: msls.ContentItem,
            _$name: "RESOURCEs",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewStatus,
            data: lightSwitchApplication.ViewStatus,
            value: lightSwitchApplication.ViewStatus
        },
        RESOURCEs1: {
            _$class: msls.ContentItem,
            _$name: "RESOURCEs1",
            _$parentName: "RESOURCEs",
            screen: lightSwitchApplication.ViewStatus,
            data: lightSwitchApplication.ViewStatus,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewStatus,
                _$entry: {
                    elementType: lightSwitchApplication.RESOURCE
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "RESOURCEs1",
            screen: lightSwitchApplication.ViewStatus,
            data: lightSwitchApplication.RESOURCE,
            value: lightSwitchApplication.RESOURCE
        },
        Name1: {
            _$class: msls.ContentItem,
            _$name: "Name1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewStatus,
            data: lightSwitchApplication.RESOURCE,
            value: String
        },
        EmailId: {
            _$class: msls.ContentItem,
            _$name: "EmailId",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewStatus,
            data: lightSwitchApplication.RESOURCE,
            value: String
        },
        CreatedBy1: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewStatus,
            data: lightSwitchApplication.RESOURCE,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewStatus
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewStatus, {
        /// <field>
        /// Called when a new ViewStatus screen is created.
        /// <br/>created(msls.application.ViewStatus screen)
        /// </field>
        created: [lightSwitchApplication.ViewStatus],
        /// <field>
        /// Called before changes on an active ViewStatus screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewStatus screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewStatus],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewStatus().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewStatus().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewStatus().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ViewStatus().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ViewStatus().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.ViewStatus().findContentItem("CreatedDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewStatus().findContentItem("right"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewStatus().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the ModifiedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedDate_postRender: [$element, function () { return new lightSwitchApplication.ViewStatus().findContentItem("ModifiedDate"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewStatus().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the RESOURCEs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RESOURCEs_postRender: [$element, function () { return new lightSwitchApplication.ViewStatus().findContentItem("RESOURCEs"); }],
        /// <field>
        /// Called after the RESOURCEs1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RESOURCEs1_postRender: [$element, function () { return new lightSwitchApplication.ViewStatus().findContentItem("RESOURCEs1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ViewStatus().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name1_postRender: [$element, function () { return new lightSwitchApplication.ViewStatus().findContentItem("Name1"); }],
        /// <field>
        /// Called after the EmailId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmailId_postRender: [$element, function () { return new lightSwitchApplication.ViewStatus().findContentItem("EmailId"); }],
        /// <field>
        /// Called after the CreatedBy1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy1_postRender: [$element, function () { return new lightSwitchApplication.ViewStatus().findContentItem("CreatedBy1"); }]
    });

    lightSwitchApplication.AddEditTechnology.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTechnology
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTechnology,
            data: lightSwitchApplication.AddEditTechnology,
            value: lightSwitchApplication.AddEditTechnology
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditTechnology,
            data: lightSwitchApplication.AddEditTechnology,
            value: lightSwitchApplication.REF_TECHNOLOGY
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTechnology,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: lightSwitchApplication.REF_TECHNOLOGY
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTechnology,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTechnology,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTechnology,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: lightSwitchApplication.REF_TECHNOLOGY
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTechnology
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditTechnology, {
        /// <field>
        /// Called when a new AddEditTechnology screen is created.
        /// <br/>created(msls.application.AddEditTechnology screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTechnology],
        /// <field>
        /// Called before changes on an active AddEditTechnology screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTechnology screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTechnology],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditTechnology().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditTechnology().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditTechnology().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditTechnology().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditTechnology().findContentItem("Description"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditTechnology().findContentItem("right"); }]
    });

    lightSwitchApplication.BrowseTechnologies.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTechnologies
        },
        TechnologyList: {
            _$class: msls.ContentItem,
            _$name: "TechnologyList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTechnologies,
            data: lightSwitchApplication.BrowseTechnologies,
            value: lightSwitchApplication.BrowseTechnologies
        },
        REF_TECHNOLOGies: {
            _$class: msls.ContentItem,
            _$name: "REF_TECHNOLOGies",
            _$parentName: "TechnologyList",
            screen: lightSwitchApplication.BrowseTechnologies,
            data: lightSwitchApplication.BrowseTechnologies,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTechnologies,
                _$entry: {
                    elementType: lightSwitchApplication.REF_TECHNOLOGY
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "REF_TECHNOLOGies",
            screen: lightSwitchApplication.BrowseTechnologies,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: lightSwitchApplication.REF_TECHNOLOGY
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTechnologies,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTechnologies,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTechnologies,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTechnologies
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTechnologies, {
        /// <field>
        /// Called when a new BrowseTechnologies screen is created.
        /// <br/>created(msls.application.BrowseTechnologies screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTechnologies],
        /// <field>
        /// Called before changes on an active BrowseTechnologies screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTechnologies screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTechnologies],
        /// <field>
        /// Called after the TechnologyList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TechnologyList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTechnologies().findContentItem("TechnologyList"); }],
        /// <field>
        /// Called after the REF_TECHNOLOGies content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_TECHNOLOGies_postRender: [$element, function () { return new lightSwitchApplication.BrowseTechnologies().findContentItem("REF_TECHNOLOGies"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseTechnologies().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseTechnologies().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseTechnologies().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTechnologies().findContentItem("CreatedDate"); }]
    });

    lightSwitchApplication.ViewTechnology.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewTechnology
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewTechnology,
            data: lightSwitchApplication.ViewTechnology,
            value: lightSwitchApplication.ViewTechnology
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewTechnology,
            data: lightSwitchApplication.ViewTechnology,
            value: lightSwitchApplication.REF_TECHNOLOGY
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewTechnology,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: lightSwitchApplication.REF_TECHNOLOGY
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTechnology,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTechnology,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTechnology,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTechnology,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: String
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTechnology,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: String
        },
        ModifiedDate: {
            _$class: msls.ContentItem,
            _$name: "ModifiedDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTechnology,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewTechnology,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: lightSwitchApplication.REF_TECHNOLOGY
        },
        APPLICATIONs1: {
            _$class: msls.ContentItem,
            _$name: "APPLICATIONs1",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTechnology,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewTechnology,
                _$entry: {
                    elementType: lightSwitchApplication.APP
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "APPLICATIONs1",
            screen: lightSwitchApplication.ViewTechnology,
            data: lightSwitchApplication.APP,
            value: lightSwitchApplication.APP
        },
        Name1: {
            _$class: msls.ContentItem,
            _$name: "Name1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewTechnology,
            data: lightSwitchApplication.APP,
            value: String
        },
        CreatedBy1: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewTechnology,
            data: lightSwitchApplication.APP,
            value: String
        },
        CreatedDate1: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewTechnology,
            data: lightSwitchApplication.APP,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewTechnology
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewTechnology, {
        /// <field>
        /// Called when a new ViewTechnology screen is created.
        /// <br/>created(msls.application.ViewTechnology screen)
        /// </field>
        created: [lightSwitchApplication.ViewTechnology],
        /// <field>
        /// Called before changes on an active ViewTechnology screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewTechnology screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewTechnology],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnology().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnology().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnology().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnology().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnology().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnology().findContentItem("CreatedDate"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnology().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnology().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the ModifiedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedDate_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnology().findContentItem("ModifiedDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnology().findContentItem("right"); }],
        /// <field>
        /// Called after the APPLICATIONs1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        APPLICATIONs1_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnology().findContentItem("APPLICATIONs1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnology().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name1_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnology().findContentItem("Name1"); }],
        /// <field>
        /// Called after the CreatedBy1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy1_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnology().findContentItem("CreatedBy1"); }],
        /// <field>
        /// Called after the CreatedDate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate1_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnology().findContentItem("CreatedDate1"); }]
    });

    lightSwitchApplication.AddEditTechnologyStack.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTechnologyStack
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTechnologyStack,
            data: lightSwitchApplication.AddEditTechnologyStack,
            value: lightSwitchApplication.AddEditTechnologyStack
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditTechnologyStack,
            data: lightSwitchApplication.AddEditTechnologyStack,
            value: lightSwitchApplication.REF_TECHNOLOGY_STACK
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTechnologyStack,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: lightSwitchApplication.REF_TECHNOLOGY_STACK
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTechnologyStack,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTechnologyStack,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTechnologyStack,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: lightSwitchApplication.REF_TECHNOLOGY_STACK
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTechnologyStack
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditTechnologyStack, {
        /// <field>
        /// Called when a new AddEditTechnologyStack screen is created.
        /// <br/>created(msls.application.AddEditTechnologyStack screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTechnologyStack],
        /// <field>
        /// Called before changes on an active AddEditTechnologyStack screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTechnologyStack screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTechnologyStack],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditTechnologyStack().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditTechnologyStack().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditTechnologyStack().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditTechnologyStack().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditTechnologyStack().findContentItem("Description"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditTechnologyStack().findContentItem("right"); }]
    });

    lightSwitchApplication.BrowseTechnologyStacks.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTechnologyStacks
        },
        TechnologyStackList: {
            _$class: msls.ContentItem,
            _$name: "TechnologyStackList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTechnologyStacks,
            data: lightSwitchApplication.BrowseTechnologyStacks,
            value: lightSwitchApplication.BrowseTechnologyStacks
        },
        REF_TECHNOLOGY_STACKs: {
            _$class: msls.ContentItem,
            _$name: "REF_TECHNOLOGY_STACKs",
            _$parentName: "TechnologyStackList",
            screen: lightSwitchApplication.BrowseTechnologyStacks,
            data: lightSwitchApplication.BrowseTechnologyStacks,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTechnologyStacks,
                _$entry: {
                    elementType: lightSwitchApplication.REF_TECHNOLOGY_STACK
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "REF_TECHNOLOGY_STACKs",
            screen: lightSwitchApplication.BrowseTechnologyStacks,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: lightSwitchApplication.REF_TECHNOLOGY_STACK
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTechnologyStacks,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTechnologyStacks,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTechnologyStacks,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTechnologyStacks
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTechnologyStacks, {
        /// <field>
        /// Called when a new BrowseTechnologyStacks screen is created.
        /// <br/>created(msls.application.BrowseTechnologyStacks screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTechnologyStacks],
        /// <field>
        /// Called before changes on an active BrowseTechnologyStacks screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTechnologyStacks screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTechnologyStacks],
        /// <field>
        /// Called after the TechnologyStackList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TechnologyStackList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTechnologyStacks().findContentItem("TechnologyStackList"); }],
        /// <field>
        /// Called after the REF_TECHNOLOGY_STACKs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_TECHNOLOGY_STACKs_postRender: [$element, function () { return new lightSwitchApplication.BrowseTechnologyStacks().findContentItem("REF_TECHNOLOGY_STACKs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseTechnologyStacks().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseTechnologyStacks().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseTechnologyStacks().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTechnologyStacks().findContentItem("CreatedDate"); }]
    });

    lightSwitchApplication.ViewTechnologyStack.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewTechnologyStack
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewTechnologyStack,
            data: lightSwitchApplication.ViewTechnologyStack,
            value: lightSwitchApplication.ViewTechnologyStack
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewTechnologyStack,
            data: lightSwitchApplication.ViewTechnologyStack,
            value: lightSwitchApplication.REF_TECHNOLOGY_STACK
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewTechnologyStack,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: lightSwitchApplication.REF_TECHNOLOGY_STACK
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTechnologyStack,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTechnologyStack,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTechnologyStack,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTechnologyStack,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: String
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTechnologyStack,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: String
        },
        ModifiedDate: {
            _$class: msls.ContentItem,
            _$name: "ModifiedDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTechnologyStack,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: Date
        },
        TPs: {
            _$class: msls.ContentItem,
            _$name: "TPs",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewTechnologyStack,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: lightSwitchApplication.REF_TECHNOLOGY_STACK
        },
        TPs1: {
            _$class: msls.ContentItem,
            _$name: "TPs1",
            _$parentName: "TPs",
            screen: lightSwitchApplication.ViewTechnologyStack,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewTechnologyStack,
                _$entry: {
                    elementType: lightSwitchApplication.TP
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "TPs1",
            screen: lightSwitchApplication.ViewTechnologyStack,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.TP
        },
        Name1: {
            _$class: msls.ContentItem,
            _$name: "Name1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewTechnologyStack,
            data: lightSwitchApplication.TP,
            value: String
        },
        Number: {
            _$class: msls.ContentItem,
            _$name: "Number",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewTechnologyStack,
            data: lightSwitchApplication.TP,
            value: Number
        },
        Description1: {
            _$class: msls.ContentItem,
            _$name: "Description1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewTechnologyStack,
            data: lightSwitchApplication.TP,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewTechnologyStack
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewTechnologyStack, {
        /// <field>
        /// Called when a new ViewTechnologyStack screen is created.
        /// <br/>created(msls.application.ViewTechnologyStack screen)
        /// </field>
        created: [lightSwitchApplication.ViewTechnologyStack],
        /// <field>
        /// Called before changes on an active ViewTechnologyStack screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewTechnologyStack screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewTechnologyStack],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnologyStack().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnologyStack().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnologyStack().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnologyStack().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnologyStack().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnologyStack().findContentItem("CreatedDate"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnologyStack().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnologyStack().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the ModifiedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedDate_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnologyStack().findContentItem("ModifiedDate"); }],
        /// <field>
        /// Called after the TPs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TPs_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnologyStack().findContentItem("TPs"); }],
        /// <field>
        /// Called after the TPs1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TPs1_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnologyStack().findContentItem("TPs1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnologyStack().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name1_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnologyStack().findContentItem("Name1"); }],
        /// <field>
        /// Called after the Number content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Number_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnologyStack().findContentItem("Number"); }],
        /// <field>
        /// Called after the Description1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description1_postRender: [$element, function () { return new lightSwitchApplication.ViewTechnologyStack().findContentItem("Description1"); }]
    });

    lightSwitchApplication.AddEditResourceDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditResourceDetail
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditResourceDetail,
            data: lightSwitchApplication.AddEditResourceDetail,
            value: lightSwitchApplication.AddEditResourceDetail
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditResourceDetail,
            data: lightSwitchApplication.AddEditResourceDetail,
            value: lightSwitchApplication.RESOURCE
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditResourceDetail,
            data: lightSwitchApplication.RESOURCE,
            value: lightSwitchApplication.RESOURCE
        },
        Photo: {
            _$class: msls.ContentItem,
            _$name: "Photo",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditResourceDetail,
            data: lightSwitchApplication.RESOURCE,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditResourceDetail,
            data: lightSwitchApplication.RESOURCE,
            value: String
        },
        EmailId: {
            _$class: msls.ContentItem,
            _$name: "EmailId",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditResourceDetail,
            data: lightSwitchApplication.RESOURCE,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditResourceDetail,
            data: lightSwitchApplication.RESOURCE,
            value: lightSwitchApplication.RESOURCE
        },
        REF_ROLE: {
            _$class: msls.ContentItem,
            _$name: "REF_ROLE",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditResourceDetail,
            data: lightSwitchApplication.RESOURCE,
            value: lightSwitchApplication.REF_ROLE
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "REF_ROLE",
            screen: lightSwitchApplication.AddEditResourceDetail,
            data: lightSwitchApplication.REF_ROLE,
            value: lightSwitchApplication.REF_ROLE
        },
        REF_STATUS: {
            _$class: msls.ContentItem,
            _$name: "REF_STATUS",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditResourceDetail,
            data: lightSwitchApplication.RESOURCE,
            value: lightSwitchApplication.REF_STATUS
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "REF_STATUS",
            screen: lightSwitchApplication.AddEditResourceDetail,
            data: lightSwitchApplication.REF_STATUS,
            value: lightSwitchApplication.REF_STATUS
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditResourceDetail
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditResourceDetail, {
        /// <field>
        /// Called when a new AddEditResourceDetail screen is created.
        /// <br/>created(msls.application.AddEditResourceDetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditResourceDetail],
        /// <field>
        /// Called before changes on an active AddEditResourceDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditResourceDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditResourceDetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourceDetail().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourceDetail().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourceDetail().findContentItem("left"); }],
        /// <field>
        /// Called after the Photo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Photo_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourceDetail().findContentItem("Photo"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourceDetail().findContentItem("Name"); }],
        /// <field>
        /// Called after the EmailId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmailId_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourceDetail().findContentItem("EmailId"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourceDetail().findContentItem("right"); }],
        /// <field>
        /// Called after the REF_ROLE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_ROLE_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourceDetail().findContentItem("REF_ROLE"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourceDetail().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the REF_STATUS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_STATUS_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourceDetail().findContentItem("REF_STATUS"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditResourceDetail().findContentItem("RowTemplate1"); }]
    });

    lightSwitchApplication.BrowseResourceDetails.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseResourceDetails
        },
        ResourceDetailList: {
            _$class: msls.ContentItem,
            _$name: "ResourceDetailList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseResourceDetails,
            data: lightSwitchApplication.BrowseResourceDetails,
            value: lightSwitchApplication.BrowseResourceDetails
        },
        RESOURCEs: {
            _$class: msls.ContentItem,
            _$name: "RESOURCEs",
            _$parentName: "ResourceDetailList",
            screen: lightSwitchApplication.BrowseResourceDetails,
            data: lightSwitchApplication.BrowseResourceDetails,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseResourceDetails,
                _$entry: {
                    elementType: lightSwitchApplication.RESOURCE
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "RESOURCEs",
            screen: lightSwitchApplication.BrowseResourceDetails,
            data: lightSwitchApplication.RESOURCE,
            value: lightSwitchApplication.RESOURCE
        },
        Photo: {
            _$class: msls.ContentItem,
            _$name: "Photo",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseResourceDetails,
            data: lightSwitchApplication.RESOURCE,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseResourceDetails,
            data: lightSwitchApplication.RESOURCE,
            value: String
        },
        EmailId: {
            _$class: msls.ContentItem,
            _$name: "EmailId",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseResourceDetails,
            data: lightSwitchApplication.RESOURCE,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseResourceDetails,
            data: lightSwitchApplication.RESOURCE,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseResourceDetails
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseResourceDetails, {
        /// <field>
        /// Called when a new BrowseResourceDetails screen is created.
        /// <br/>created(msls.application.BrowseResourceDetails screen)
        /// </field>
        created: [lightSwitchApplication.BrowseResourceDetails],
        /// <field>
        /// Called before changes on an active BrowseResourceDetails screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseResourceDetails screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseResourceDetails],
        /// <field>
        /// Called after the ResourceDetailList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ResourceDetailList_postRender: [$element, function () { return new lightSwitchApplication.BrowseResourceDetails().findContentItem("ResourceDetailList"); }],
        /// <field>
        /// Called after the RESOURCEs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RESOURCEs_postRender: [$element, function () { return new lightSwitchApplication.BrowseResourceDetails().findContentItem("RESOURCEs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseResourceDetails().findContentItem("rows"); }],
        /// <field>
        /// Called after the Photo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Photo_postRender: [$element, function () { return new lightSwitchApplication.BrowseResourceDetails().findContentItem("Photo"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseResourceDetails().findContentItem("Name"); }],
        /// <field>
        /// Called after the EmailId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmailId_postRender: [$element, function () { return new lightSwitchApplication.BrowseResourceDetails().findContentItem("EmailId"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseResourceDetails().findContentItem("CreatedBy"); }]
    });

    lightSwitchApplication.ViewResourceDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewResourceDetail
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewResourceDetail,
            data: lightSwitchApplication.ViewResourceDetail,
            value: lightSwitchApplication.ViewResourceDetail
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewResourceDetail,
            data: lightSwitchApplication.ViewResourceDetail,
            value: lightSwitchApplication.RESOURCE
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewResourceDetail,
            data: lightSwitchApplication.RESOURCE,
            value: lightSwitchApplication.RESOURCE
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewResourceDetail,
            data: lightSwitchApplication.RESOURCE,
            value: String
        },
        EmailId: {
            _$class: msls.ContentItem,
            _$name: "EmailId",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewResourceDetail,
            data: lightSwitchApplication.RESOURCE,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewResourceDetail,
            data: lightSwitchApplication.RESOURCE,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewResourceDetail,
            data: lightSwitchApplication.RESOURCE,
            value: Date
        },
        ModifiedDate: {
            _$class: msls.ContentItem,
            _$name: "ModifiedDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewResourceDetail,
            data: lightSwitchApplication.RESOURCE,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewResourceDetail,
            data: lightSwitchApplication.RESOURCE,
            value: String
        },
        REF_ROLE: {
            _$class: msls.ContentItem,
            _$name: "REF_ROLE",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewResourceDetail,
            data: lightSwitchApplication.RESOURCE,
            value: lightSwitchApplication.REF_ROLE
        },
        REF_STATUS: {
            _$class: msls.ContentItem,
            _$name: "REF_STATUS",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewResourceDetail,
            data: lightSwitchApplication.RESOURCE,
            value: lightSwitchApplication.REF_STATUS
        },
        TP_RESOURCE_ALLOCATIONs: {
            _$class: msls.ContentItem,
            _$name: "TP_RESOURCE_ALLOCATIONs",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewResourceDetail,
            data: lightSwitchApplication.RESOURCE,
            value: lightSwitchApplication.RESOURCE
        },
        TP_RESOURCE_ALLOCATIONs1: {
            _$class: msls.ContentItem,
            _$name: "TP_RESOURCE_ALLOCATIONs1",
            _$parentName: "TP_RESOURCE_ALLOCATIONs",
            screen: lightSwitchApplication.ViewResourceDetail,
            data: lightSwitchApplication.RESOURCE,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewResourceDetail,
                _$entry: {
                    elementType: lightSwitchApplication.TP_RESOURCE_ALLOCATION
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "TP_RESOURCE_ALLOCATIONs1",
            screen: lightSwitchApplication.ViewResourceDetail,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: lightSwitchApplication.TP_RESOURCE_ALLOCATION
        },
        CreatedBy1: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewResourceDetail,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: String
        },
        Percentage: {
            _$class: msls.ContentItem,
            _$name: "Percentage",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewResourceDetail,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Number
        },
        PlannedStartDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedStartDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewResourceDetail,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewResourceDetail
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewResourceDetail, {
        /// <field>
        /// Called when a new ViewResourceDetail screen is created.
        /// <br/>created(msls.application.ViewResourceDetail screen)
        /// </field>
        created: [lightSwitchApplication.ViewResourceDetail],
        /// <field>
        /// Called before changes on an active ViewResourceDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewResourceDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewResourceDetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewResourceDetail().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewResourceDetail().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewResourceDetail().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ViewResourceDetail().findContentItem("Name"); }],
        /// <field>
        /// Called after the EmailId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmailId_postRender: [$element, function () { return new lightSwitchApplication.ViewResourceDetail().findContentItem("EmailId"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewResourceDetail().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.ViewResourceDetail().findContentItem("CreatedDate"); }],
        /// <field>
        /// Called after the ModifiedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedDate_postRender: [$element, function () { return new lightSwitchApplication.ViewResourceDetail().findContentItem("ModifiedDate"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewResourceDetail().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the REF_ROLE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_ROLE_postRender: [$element, function () { return new lightSwitchApplication.ViewResourceDetail().findContentItem("REF_ROLE"); }],
        /// <field>
        /// Called after the REF_STATUS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_STATUS_postRender: [$element, function () { return new lightSwitchApplication.ViewResourceDetail().findContentItem("REF_STATUS"); }],
        /// <field>
        /// Called after the TP_RESOURCE_ALLOCATIONs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_RESOURCE_ALLOCATIONs_postRender: [$element, function () { return new lightSwitchApplication.ViewResourceDetail().findContentItem("TP_RESOURCE_ALLOCATIONs"); }],
        /// <field>
        /// Called after the TP_RESOURCE_ALLOCATIONs1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_RESOURCE_ALLOCATIONs1_postRender: [$element, function () { return new lightSwitchApplication.ViewResourceDetail().findContentItem("TP_RESOURCE_ALLOCATIONs1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ViewResourceDetail().findContentItem("rows"); }],
        /// <field>
        /// Called after the CreatedBy1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy1_postRender: [$element, function () { return new lightSwitchApplication.ViewResourceDetail().findContentItem("CreatedBy1"); }],
        /// <field>
        /// Called after the Percentage content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Percentage_postRender: [$element, function () { return new lightSwitchApplication.ViewResourceDetail().findContentItem("Percentage"); }],
        /// <field>
        /// Called after the PlannedStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedStartDate_postRender: [$element, function () { return new lightSwitchApplication.ViewResourceDetail().findContentItem("PlannedStartDate"); }]
    });

    lightSwitchApplication.AddEditTp.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTp
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.AddEditTp,
            value: lightSwitchApplication.AddEditTp
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.AddEditTp,
            value: lightSwitchApplication.TP
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.TP
        },
        Number: {
            _$class: msls.ContentItem,
            _$name: "Number",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: Number
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: String
        },
        WorkOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderNumber",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: String
        },
        WorkOrderStatus: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderStatus",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: Number
        },
        WorkOrderIssuedOn: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderIssuedOn",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: Date
        },
        PlannedEffort: {
            _$class: msls.ContentItem,
            _$name: "PlannedEffort",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: String
        },
        EstimatedCost: {
            _$class: msls.ContentItem,
            _$name: "EstimatedCost",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: String
        },
        IssueDateToHP: {
            _$class: msls.ContentItem,
            _$name: "IssueDateToHP",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: Date
        },
        EffortDateProvidedByHP: {
            _$class: msls.ContentItem,
            _$name: "EffortDateProvidedByHP",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: Date
        },
        ApprovedDateByDL: {
            _$class: msls.ContentItem,
            _$name: "ApprovedDateByDL",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: Date
        },
        PlannedStartDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedStartDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: Date
        },
        PlannedEndDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedEndDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: Date
        },
        ActualStartDate: {
            _$class: msls.ContentItem,
            _$name: "ActualStartDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: Date
        },
        ActualEndDate: {
            _$class: msls.ContentItem,
            _$name: "ActualEndDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.TP
        },
        ApplicationSize: {
            _$class: msls.ContentItem,
            _$name: "ApplicationSize",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: String
        },
        HasInputDocument: {
            _$class: msls.ContentItem,
            _$name: "HasInputDocument",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: Boolean
        },
        HasFeasibilityStudy: {
            _$class: msls.ContentItem,
            _$name: "HasFeasibilityStudy",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: Boolean
        },
        HasUnderstandingDocument: {
            _$class: msls.ContentItem,
            _$name: "HasUnderstandingDocument",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: Boolean
        },
        HasEstimation: {
            _$class: msls.ContentItem,
            _$name: "HasEstimation",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: Boolean
        },
        REF_APPLICATION_TYPE: {
            _$class: msls.ContentItem,
            _$name: "REF_APPLICATION_TYPE",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.REF_APPLICATION_TYPE
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "REF_APPLICATION_TYPE",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: lightSwitchApplication.REF_APPLICATION_TYPE
        },
        REF_COMPLEXITY: {
            _$class: msls.ContentItem,
            _$name: "REF_COMPLEXITY",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.REF_COMPLEXITY
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "REF_COMPLEXITY",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: lightSwitchApplication.REF_COMPLEXITY
        },
        REF_COMPLEXITY1: {
            _$class: msls.ContentItem,
            _$name: "REF_COMPLEXITY1",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.REF_COMPLEXITY
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "REF_COMPLEXITY1",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: lightSwitchApplication.REF_COMPLEXITY
        },
        REF_GAP: {
            _$class: msls.ContentItem,
            _$name: "REF_GAP",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.REF_GAP
        },
        RowTemplate3: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate3",
            _$parentName: "REF_GAP",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.REF_GAP,
            value: lightSwitchApplication.REF_GAP
        },
        REF_GAP1: {
            _$class: msls.ContentItem,
            _$name: "REF_GAP1",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.REF_GAP
        },
        RowTemplate4: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate4",
            _$parentName: "REF_GAP1",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.REF_GAP,
            value: lightSwitchApplication.REF_GAP
        },
        REF_TECHNOLOGY_STACK: {
            _$class: msls.ContentItem,
            _$name: "REF_TECHNOLOGY_STACK",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.REF_TECHNOLOGY_STACK
        },
        RowTemplate5: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate5",
            _$parentName: "REF_TECHNOLOGY_STACK",
            screen: lightSwitchApplication.AddEditTp,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: lightSwitchApplication.REF_TECHNOLOGY_STACK
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTp
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditTp, {
        /// <field>
        /// Called when a new AddEditTp screen is created.
        /// <br/>created(msls.application.AddEditTp screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTp],
        /// <field>
        /// Called before changes on an active AddEditTp screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTp screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTp],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("left"); }],
        /// <field>
        /// Called after the Number content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Number_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("Number"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("Description"); }],
        /// <field>
        /// Called after the WorkOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("WorkOrderNumber"); }],
        /// <field>
        /// Called after the WorkOrderStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("WorkOrderStatus"); }],
        /// <field>
        /// Called after the WorkOrderIssuedOn content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderIssuedOn_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("WorkOrderIssuedOn"); }],
        /// <field>
        /// Called after the PlannedEffort content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedEffort_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("PlannedEffort"); }],
        /// <field>
        /// Called after the EstimatedCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EstimatedCost_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("EstimatedCost"); }],
        /// <field>
        /// Called after the IssueDateToHP content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueDateToHP_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("IssueDateToHP"); }],
        /// <field>
        /// Called after the EffortDateProvidedByHP content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EffortDateProvidedByHP_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("EffortDateProvidedByHP"); }],
        /// <field>
        /// Called after the ApprovedDateByDL content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ApprovedDateByDL_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("ApprovedDateByDL"); }],
        /// <field>
        /// Called after the PlannedStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedStartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("PlannedStartDate"); }],
        /// <field>
        /// Called after the PlannedEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedEndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("PlannedEndDate"); }],
        /// <field>
        /// Called after the ActualStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualStartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("ActualStartDate"); }],
        /// <field>
        /// Called after the ActualEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualEndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("ActualEndDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("right"); }],
        /// <field>
        /// Called after the ApplicationSize content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ApplicationSize_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("ApplicationSize"); }],
        /// <field>
        /// Called after the HasInputDocument content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HasInputDocument_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("HasInputDocument"); }],
        /// <field>
        /// Called after the HasFeasibilityStudy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HasFeasibilityStudy_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("HasFeasibilityStudy"); }],
        /// <field>
        /// Called after the HasUnderstandingDocument content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HasUnderstandingDocument_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("HasUnderstandingDocument"); }],
        /// <field>
        /// Called after the HasEstimation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HasEstimation_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("HasEstimation"); }],
        /// <field>
        /// Called after the REF_APPLICATION_TYPE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_APPLICATION_TYPE_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("REF_APPLICATION_TYPE"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the REF_COMPLEXITY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_COMPLEXITY_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("REF_COMPLEXITY"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the REF_COMPLEXITY1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_COMPLEXITY1_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("REF_COMPLEXITY1"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the REF_GAP content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_GAP_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("REF_GAP"); }],
        /// <field>
        /// Called after the RowTemplate3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate3_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("RowTemplate3"); }],
        /// <field>
        /// Called after the REF_GAP1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_GAP1_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("REF_GAP1"); }],
        /// <field>
        /// Called after the RowTemplate4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate4_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("RowTemplate4"); }],
        /// <field>
        /// Called after the REF_TECHNOLOGY_STACK content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_TECHNOLOGY_STACK_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("REF_TECHNOLOGY_STACK"); }],
        /// <field>
        /// Called after the RowTemplate5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate5_postRender: [$element, function () { return new lightSwitchApplication.AddEditTp().findContentItem("RowTemplate5"); }]
    });

    lightSwitchApplication.ViewTp.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewTp
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.ViewTp,
            value: lightSwitchApplication.ViewTp
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.ViewTp,
            value: lightSwitchApplication.TP
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.TP
        },
        Number: {
            _$class: msls.ContentItem,
            _$name: "Number",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: Number
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: String
        },
        WorkOrderNumber: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderNumber",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: String
        },
        WorkOrderStatus: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderStatus",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: Number
        },
        WorkOrderIssuedOn: {
            _$class: msls.ContentItem,
            _$name: "WorkOrderIssuedOn",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: Date
        },
        PlannedEffort: {
            _$class: msls.ContentItem,
            _$name: "PlannedEffort",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: String
        },
        EstimatedCost: {
            _$class: msls.ContentItem,
            _$name: "EstimatedCost",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: String
        },
        IssueDateToHP: {
            _$class: msls.ContentItem,
            _$name: "IssueDateToHP",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: Date
        },
        EffortDateProvidedByHP: {
            _$class: msls.ContentItem,
            _$name: "EffortDateProvidedByHP",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: Date
        },
        ApprovedDateByDL: {
            _$class: msls.ContentItem,
            _$name: "ApprovedDateByDL",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: Date
        },
        PlannedStartDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedStartDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: Date
        },
        PlannedEndDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedEndDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: Date
        },
        ActualStartDate: {
            _$class: msls.ContentItem,
            _$name: "ActualStartDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: Date
        },
        ActualEndDate: {
            _$class: msls.ContentItem,
            _$name: "ActualEndDate",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.TP
        },
        ApplicationSize: {
            _$class: msls.ContentItem,
            _$name: "ApplicationSize",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: String
        },
        HasInputDocument: {
            _$class: msls.ContentItem,
            _$name: "HasInputDocument",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: Boolean
        },
        HasFeasibilityStudy: {
            _$class: msls.ContentItem,
            _$name: "HasFeasibilityStudy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: Boolean
        },
        HasUnderstandingDocument: {
            _$class: msls.ContentItem,
            _$name: "HasUnderstandingDocument",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: Boolean
        },
        HasEstimation: {
            _$class: msls.ContentItem,
            _$name: "HasEstimation",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: Boolean
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: String
        },
        ModifiedDate: {
            _$class: msls.ContentItem,
            _$name: "ModifiedDate",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: String
        },
        REF_APPLICATION_TYPE: {
            _$class: msls.ContentItem,
            _$name: "REF_APPLICATION_TYPE",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.REF_APPLICATION_TYPE
        },
        REF_COMPLEXITY: {
            _$class: msls.ContentItem,
            _$name: "REF_COMPLEXITY",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.REF_COMPLEXITY
        },
        REF_COMPLEXITY1: {
            _$class: msls.ContentItem,
            _$name: "REF_COMPLEXITY1",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.REF_COMPLEXITY
        },
        REF_GAP: {
            _$class: msls.ContentItem,
            _$name: "REF_GAP",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.REF_GAP
        },
        REF_GAP1: {
            _$class: msls.ContentItem,
            _$name: "REF_GAP1",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.REF_GAP
        },
        REF_TECHNOLOGY_STACK: {
            _$class: msls.ContentItem,
            _$name: "REF_TECHNOLOGY_STACK",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.REF_TECHNOLOGY_STACK
        },
        TP_APPLICATIONs: {
            _$class: msls.ContentItem,
            _$name: "TP_APPLICATIONs",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.ViewTp,
            value: lightSwitchApplication.ViewTp
        },
        TP_APPLICATIONs1: {
            _$class: msls.ContentItem,
            _$name: "TP_APPLICATIONs1",
            _$parentName: "TP_APPLICATIONs",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.ViewTp,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewTp,
                _$entry: {
                    elementType: lightSwitchApplication.TP_APPLICATION
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "TP_APPLICATIONs1",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_APPLICATION,
            value: lightSwitchApplication.TP_APPLICATION
        },
        CreatedBy1: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_APPLICATION,
            value: String
        },
        CreatedDate1: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_APPLICATION,
            value: Date
        },
        ModifiedBy1: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_APPLICATION,
            value: String
        },
        TP_DOCUMENT_LINKs: {
            _$class: msls.ContentItem,
            _$name: "TP_DOCUMENT_LINKs",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.ViewTp,
            value: lightSwitchApplication.ViewTp
        },
        TP_DOCUMENT_LINKs1: {
            _$class: msls.ContentItem,
            _$name: "TP_DOCUMENT_LINKs1",
            _$parentName: "TP_DOCUMENT_LINKs",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.ViewTp,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewTp,
                _$entry: {
                    elementType: lightSwitchApplication.TP_DOCUMENT_LINK
                }
            }
        },
        rows1: {
            _$class: msls.ContentItem,
            _$name: "rows1",
            _$parentName: "TP_DOCUMENT_LINKs1",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_DOCUMENT_LINK,
            value: lightSwitchApplication.TP_DOCUMENT_LINK
        },
        Name1: {
            _$class: msls.ContentItem,
            _$name: "Name1",
            _$parentName: "rows1",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_DOCUMENT_LINK,
            value: String
        },
        TpDocumentLinkID: {
            _$class: msls.ContentItem,
            _$name: "TpDocumentLinkID",
            _$parentName: "rows1",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_DOCUMENT_LINK,
            value: Number
        },
        Description1: {
            _$class: msls.ContentItem,
            _$name: "Description1",
            _$parentName: "rows1",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_DOCUMENT_LINK,
            value: String
        },
        TP_PHASEs: {
            _$class: msls.ContentItem,
            _$name: "TP_PHASEs",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.ViewTp,
            value: lightSwitchApplication.ViewTp
        },
        TP_PHASEs1: {
            _$class: msls.ContentItem,
            _$name: "TP_PHASEs1",
            _$parentName: "TP_PHASEs",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.ViewTp,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewTp,
                _$entry: {
                    elementType: lightSwitchApplication.TP_PHASE
                }
            }
        },
        rows2: {
            _$class: msls.ContentItem,
            _$name: "rows2",
            _$parentName: "TP_PHASEs1",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_PHASE,
            value: lightSwitchApplication.TP_PHASE
        },
        Duration: {
            _$class: msls.ContentItem,
            _$name: "Duration",
            _$parentName: "rows2",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_PHASE,
            value: String
        },
        TpPhaseID: {
            _$class: msls.ContentItem,
            _$name: "TpPhaseID",
            _$parentName: "rows2",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_PHASE,
            value: Number
        },
        PlannedStartDate1: {
            _$class: msls.ContentItem,
            _$name: "PlannedStartDate1",
            _$parentName: "rows2",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_PHASE,
            value: Date
        },
        TP_RESOURCE_ALLOCATIONs: {
            _$class: msls.ContentItem,
            _$name: "TP_RESOURCE_ALLOCATIONs",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.ViewTp,
            value: lightSwitchApplication.ViewTp
        },
        TP_RESOURCE_ALLOCATIONs1: {
            _$class: msls.ContentItem,
            _$name: "TP_RESOURCE_ALLOCATIONs1",
            _$parentName: "TP_RESOURCE_ALLOCATIONs",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.ViewTp,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewTp,
                _$entry: {
                    elementType: lightSwitchApplication.TP_RESOURCE_ALLOCATION
                }
            }
        },
        rows3: {
            _$class: msls.ContentItem,
            _$name: "rows3",
            _$parentName: "TP_RESOURCE_ALLOCATIONs1",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: lightSwitchApplication.TP_RESOURCE_ALLOCATION
        },
        CreatedBy2: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy2",
            _$parentName: "rows3",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: String
        },
        Percentage: {
            _$class: msls.ContentItem,
            _$name: "Percentage",
            _$parentName: "rows3",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Number
        },
        PlannedStartDate2: {
            _$class: msls.ContentItem,
            _$name: "PlannedStartDate2",
            _$parentName: "rows3",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        TP_STAKEHOLDERs: {
            _$class: msls.ContentItem,
            _$name: "TP_STAKEHOLDERs",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.ViewTp,
            value: lightSwitchApplication.ViewTp
        },
        TP_STAKEHOLDERs1: {
            _$class: msls.ContentItem,
            _$name: "TP_STAKEHOLDERs1",
            _$parentName: "TP_STAKEHOLDERs",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.ViewTp,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewTp,
                _$entry: {
                    elementType: lightSwitchApplication.TP_STAKEHOLDER
                }
            }
        },
        rows4: {
            _$class: msls.ContentItem,
            _$name: "rows4",
            _$parentName: "TP_STAKEHOLDERs1",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_STAKEHOLDER,
            value: lightSwitchApplication.TP_STAKEHOLDER
        },
        CreatedBy3: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy3",
            _$parentName: "rows4",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_STAKEHOLDER,
            value: String
        },
        TpStakeholderID: {
            _$class: msls.ContentItem,
            _$name: "TpStakeholderID",
            _$parentName: "rows4",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_STAKEHOLDER,
            value: Number
        },
        CreatedDate2: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate2",
            _$parentName: "rows4",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_STAKEHOLDER,
            value: Date
        },
        TP_VENDORs: {
            _$class: msls.ContentItem,
            _$name: "TP_VENDORs",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.ViewTp,
            value: lightSwitchApplication.ViewTp
        },
        TP_VENDORs1: {
            _$class: msls.ContentItem,
            _$name: "TP_VENDORs1",
            _$parentName: "TP_VENDORs",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.ViewTp,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewTp,
                _$entry: {
                    elementType: lightSwitchApplication.TP_VENDOR
                }
            }
        },
        rows5: {
            _$class: msls.ContentItem,
            _$name: "rows5",
            _$parentName: "TP_VENDORs1",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_VENDOR,
            value: lightSwitchApplication.TP_VENDOR
        },
        CreatedBy4: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy4",
            _$parentName: "rows5",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_VENDOR,
            value: String
        },
        TpVendorID: {
            _$class: msls.ContentItem,
            _$name: "TpVendorID",
            _$parentName: "rows5",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_VENDOR,
            value: Number
        },
        CreatedDate3: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate3",
            _$parentName: "rows5",
            screen: lightSwitchApplication.ViewTp,
            data: lightSwitchApplication.TP_VENDOR,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewTp
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewTp, {
        /// <field>
        /// Called when a new ViewTp screen is created.
        /// <br/>created(msls.application.ViewTp screen)
        /// </field>
        created: [lightSwitchApplication.ViewTp],
        /// <field>
        /// Called before changes on an active ViewTp screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewTp screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewTp],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("left"); }],
        /// <field>
        /// Called after the Number content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Number_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("Number"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("Description"); }],
        /// <field>
        /// Called after the WorkOrderNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderNumber_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("WorkOrderNumber"); }],
        /// <field>
        /// Called after the WorkOrderStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderStatus_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("WorkOrderStatus"); }],
        /// <field>
        /// Called after the WorkOrderIssuedOn content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkOrderIssuedOn_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("WorkOrderIssuedOn"); }],
        /// <field>
        /// Called after the PlannedEffort content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedEffort_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("PlannedEffort"); }],
        /// <field>
        /// Called after the EstimatedCost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EstimatedCost_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("EstimatedCost"); }],
        /// <field>
        /// Called after the IssueDateToHP content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueDateToHP_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("IssueDateToHP"); }],
        /// <field>
        /// Called after the EffortDateProvidedByHP content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EffortDateProvidedByHP_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("EffortDateProvidedByHP"); }],
        /// <field>
        /// Called after the ApprovedDateByDL content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ApprovedDateByDL_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("ApprovedDateByDL"); }],
        /// <field>
        /// Called after the PlannedStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedStartDate_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("PlannedStartDate"); }],
        /// <field>
        /// Called after the PlannedEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedEndDate_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("PlannedEndDate"); }],
        /// <field>
        /// Called after the ActualStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualStartDate_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("ActualStartDate"); }],
        /// <field>
        /// Called after the ActualEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualEndDate_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("ActualEndDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("right"); }],
        /// <field>
        /// Called after the ApplicationSize content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ApplicationSize_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("ApplicationSize"); }],
        /// <field>
        /// Called after the HasInputDocument content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HasInputDocument_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("HasInputDocument"); }],
        /// <field>
        /// Called after the HasFeasibilityStudy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HasFeasibilityStudy_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("HasFeasibilityStudy"); }],
        /// <field>
        /// Called after the HasUnderstandingDocument content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HasUnderstandingDocument_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("HasUnderstandingDocument"); }],
        /// <field>
        /// Called after the HasEstimation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HasEstimation_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("HasEstimation"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("CreatedDate"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the ModifiedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedDate_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("ModifiedDate"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the REF_APPLICATION_TYPE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_APPLICATION_TYPE_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("REF_APPLICATION_TYPE"); }],
        /// <field>
        /// Called after the REF_COMPLEXITY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_COMPLEXITY_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("REF_COMPLEXITY"); }],
        /// <field>
        /// Called after the REF_COMPLEXITY1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_COMPLEXITY1_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("REF_COMPLEXITY1"); }],
        /// <field>
        /// Called after the REF_GAP content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_GAP_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("REF_GAP"); }],
        /// <field>
        /// Called after the REF_GAP1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_GAP1_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("REF_GAP1"); }],
        /// <field>
        /// Called after the REF_TECHNOLOGY_STACK content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_TECHNOLOGY_STACK_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("REF_TECHNOLOGY_STACK"); }],
        /// <field>
        /// Called after the TP_APPLICATIONs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_APPLICATIONs_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("TP_APPLICATIONs"); }],
        /// <field>
        /// Called after the TP_APPLICATIONs1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_APPLICATIONs1_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("TP_APPLICATIONs1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("rows"); }],
        /// <field>
        /// Called after the CreatedBy1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy1_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("CreatedBy1"); }],
        /// <field>
        /// Called after the CreatedDate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate1_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("CreatedDate1"); }],
        /// <field>
        /// Called after the ModifiedBy1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy1_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("ModifiedBy1"); }],
        /// <field>
        /// Called after the TP_DOCUMENT_LINKs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_DOCUMENT_LINKs_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("TP_DOCUMENT_LINKs"); }],
        /// <field>
        /// Called after the TP_DOCUMENT_LINKs1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_DOCUMENT_LINKs1_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("TP_DOCUMENT_LINKs1"); }],
        /// <field>
        /// Called after the rows1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows1_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("rows1"); }],
        /// <field>
        /// Called after the Name1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name1_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("Name1"); }],
        /// <field>
        /// Called after the TpDocumentLinkID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TpDocumentLinkID_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("TpDocumentLinkID"); }],
        /// <field>
        /// Called after the Description1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description1_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("Description1"); }],
        /// <field>
        /// Called after the TP_PHASEs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_PHASEs_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("TP_PHASEs"); }],
        /// <field>
        /// Called after the TP_PHASEs1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_PHASEs1_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("TP_PHASEs1"); }],
        /// <field>
        /// Called after the rows2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows2_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("rows2"); }],
        /// <field>
        /// Called after the Duration content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Duration_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("Duration"); }],
        /// <field>
        /// Called after the TpPhaseID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TpPhaseID_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("TpPhaseID"); }],
        /// <field>
        /// Called after the PlannedStartDate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedStartDate1_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("PlannedStartDate1"); }],
        /// <field>
        /// Called after the TP_RESOURCE_ALLOCATIONs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_RESOURCE_ALLOCATIONs_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("TP_RESOURCE_ALLOCATIONs"); }],
        /// <field>
        /// Called after the TP_RESOURCE_ALLOCATIONs1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_RESOURCE_ALLOCATIONs1_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("TP_RESOURCE_ALLOCATIONs1"); }],
        /// <field>
        /// Called after the rows3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows3_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("rows3"); }],
        /// <field>
        /// Called after the CreatedBy2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy2_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("CreatedBy2"); }],
        /// <field>
        /// Called after the Percentage content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Percentage_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("Percentage"); }],
        /// <field>
        /// Called after the PlannedStartDate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedStartDate2_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("PlannedStartDate2"); }],
        /// <field>
        /// Called after the TP_STAKEHOLDERs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_STAKEHOLDERs_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("TP_STAKEHOLDERs"); }],
        /// <field>
        /// Called after the TP_STAKEHOLDERs1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_STAKEHOLDERs1_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("TP_STAKEHOLDERs1"); }],
        /// <field>
        /// Called after the rows4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows4_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("rows4"); }],
        /// <field>
        /// Called after the CreatedBy3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy3_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("CreatedBy3"); }],
        /// <field>
        /// Called after the TpStakeholderID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TpStakeholderID_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("TpStakeholderID"); }],
        /// <field>
        /// Called after the CreatedDate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate2_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("CreatedDate2"); }],
        /// <field>
        /// Called after the TP_VENDORs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_VENDORs_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("TP_VENDORs"); }],
        /// <field>
        /// Called after the TP_VENDORs1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_VENDORs1_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("TP_VENDORs1"); }],
        /// <field>
        /// Called after the rows5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows5_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("rows5"); }],
        /// <field>
        /// Called after the CreatedBy4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy4_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("CreatedBy4"); }],
        /// <field>
        /// Called after the TpVendorID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TpVendorID_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("TpVendorID"); }],
        /// <field>
        /// Called after the CreatedDate3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate3_postRender: [$element, function () { return new lightSwitchApplication.ViewTp().findContentItem("CreatedDate3"); }]
    });

    lightSwitchApplication.BrowseTps.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTps
        },
        TpList: {
            _$class: msls.ContentItem,
            _$name: "TpList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTps,
            data: lightSwitchApplication.BrowseTps,
            value: lightSwitchApplication.BrowseTps
        },
        TPs: {
            _$class: msls.ContentItem,
            _$name: "TPs",
            _$parentName: "TpList",
            screen: lightSwitchApplication.BrowseTps,
            data: lightSwitchApplication.BrowseTps,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTps,
                _$entry: {
                    elementType: lightSwitchApplication.TP
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "TPs",
            screen: lightSwitchApplication.BrowseTps,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.TP
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTps,
            data: lightSwitchApplication.TP,
            value: String
        },
        Number: {
            _$class: msls.ContentItem,
            _$name: "Number",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTps,
            data: lightSwitchApplication.TP,
            value: Number
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTps,
            data: lightSwitchApplication.TP,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTps
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTps, {
        /// <field>
        /// Called when a new BrowseTps screen is created.
        /// <br/>created(msls.application.BrowseTps screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTps],
        /// <field>
        /// Called before changes on an active BrowseTps screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTps screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTps],
        /// <field>
        /// Called after the TpList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TpList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTps().findContentItem("TpList"); }],
        /// <field>
        /// Called after the TPs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TPs_postRender: [$element, function () { return new lightSwitchApplication.BrowseTps().findContentItem("TPs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseTps().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseTps().findContentItem("Name"); }],
        /// <field>
        /// Called after the Number content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Number_postRender: [$element, function () { return new lightSwitchApplication.BrowseTps().findContentItem("Number"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseTps().findContentItem("Description"); }]
    });

}(msls.application));