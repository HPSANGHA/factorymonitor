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

}(msls.application));