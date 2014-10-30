/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

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
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditRole().findContentItem("Description"); }]
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
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewRole,
            data: lightSwitchApplication.REF_ROLE,
            value: lightSwitchApplication.REF_ROLE
        },
        RESOURCEs1: {
            _$class: msls.ContentItem,
            _$name: "RESOURCEs1",
            _$parentName: "right",
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
        CreatedBy1: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy1",
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
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewRole().findContentItem("right"); }],
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
        EmailId_postRender: [$element, function () { return new lightSwitchApplication.ViewRole().findContentItem("EmailId"); }],
        /// <field>
        /// Called after the CreatedBy1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy1_postRender: [$element, function () { return new lightSwitchApplication.ViewRole().findContentItem("CreatedBy1"); }]
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

}(msls.application));