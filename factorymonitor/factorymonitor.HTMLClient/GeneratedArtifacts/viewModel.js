/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditRole(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditRole screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_ROLE" type="msls.application.REF_ROLE">
        /// Gets or sets the rEF_ROLE for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditRole.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditRole", parameters);
    }

    function BrowseRoles(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseRoles screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_ROLEs" type="msls.VisualCollection" elementType="msls.application.REF_ROLE">
        /// Gets the rEF_ROLEs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseRoles.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseRoles", parameters);
    }

    function ViewRole(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewRole screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_ROLE" type="msls.application.REF_ROLE">
        /// Gets or sets the rEF_ROLE for this screen.
        /// </field>
        /// <field name="RESOURCEs" type="msls.VisualCollection" elementType="msls.application.RESOURCE">
        /// Gets the rESOURCEs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewRole.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewRole", parameters);
    }

    function AddEditStatus(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditStatus screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_STATUS" type="msls.application.REF_STATUS">
        /// Gets or sets the rEF_STATUS for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditStatus.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditStatus", parameters);
    }

    function BrowseStatusSet(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseStatusSet screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_STATUS" type="msls.VisualCollection" elementType="msls.application.REF_STATUS">
        /// Gets the rEF_STATUS for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseStatusSet.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseStatusSet", parameters);
    }

    function ViewStatus(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewStatus screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_STATUS" type="msls.application.REF_STATUS">
        /// Gets or sets the rEF_STATUS for this screen.
        /// </field>
        /// <field name="RESOURCEs" type="msls.VisualCollection" elementType="msls.application.RESOURCE">
        /// Gets the rESOURCEs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewStatus.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewStatus", parameters);
    }

    function AddEditResourceDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditResourceDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="RESOURCE" type="msls.application.RESOURCE">
        /// Gets or sets the rESOURCE for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditResourceDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditResourceDetail", parameters);
    }

    function BrowseResourceDetails(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseResourceDetails screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="RESOURCEs" type="msls.VisualCollection" elementType="msls.application.RESOURCE">
        /// Gets the rESOURCEs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseResourceDetails.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseResourceDetails", parameters);
    }

    function ViewResourceDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewResourceDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="RESOURCE" type="msls.application.RESOURCE">
        /// Gets or sets the rESOURCE for this screen.
        /// </field>
        /// <field name="TP_RESOURCE_ALLOCATIONs" type="msls.VisualCollection" elementType="msls.application.TP_RESOURCE_ALLOCATION">
        /// Gets the tP_RESOURCE_ALLOCATIONs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewResourceDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewResourceDetail", parameters);
    }

    function AddEditTechnology(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditTechnology screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_TECHNOLOGY" type="msls.application.REF_TECHNOLOGY">
        /// Gets or sets the rEF_TECHNOLOGY for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditTechnology.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTechnology", parameters);
    }

    function ViewTechnology(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewTechnology screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_TECHNOLOGY" type="msls.application.REF_TECHNOLOGY">
        /// Gets or sets the rEF_TECHNOLOGY for this screen.
        /// </field>
        /// <field name="APPLICATIONs" type="msls.VisualCollection" elementType="msls.application.APP">
        /// Gets the aPPLICATIONs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewTechnology.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewTechnology", parameters);
    }

    function BrowseTechnologies(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTechnologies screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_TECHNOLOGies" type="msls.VisualCollection" elementType="msls.application.REF_TECHNOLOGY">
        /// Gets the rEF_TECHNOLOGies for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTechnologies.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTechnologies", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditRole: $defineScreen(AddEditRole, [
            { name: "REF_ROLE", kind: "local", type: lightSwitchApplication.REF_ROLE }
        ], [
        ]),

        BrowseRoles: $defineScreen(BrowseRoles, [
            {
                name: "REF_ROLEs", kind: "collection", elementType: lightSwitchApplication.REF_ROLE,
                createQuery: function () {
                    return this.dataWorkspace.FMData.REF_ROLEs;
                }
            }
        ], [
        ]),

        ViewRole: $defineScreen(ViewRole, [
            { name: "REF_ROLE", kind: "local", type: lightSwitchApplication.REF_ROLE },
            {
                name: "RESOURCEs", kind: "collection", elementType: lightSwitchApplication.RESOURCE,
                getNavigationProperty: function () {
                    if (this.owner.REF_ROLE) {
                        return this.owner.REF_ROLE.details.properties.RESOURCEs;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        AddEditStatus: $defineScreen(AddEditStatus, [
            { name: "REF_STATUS", kind: "local", type: lightSwitchApplication.REF_STATUS }
        ], [
        ]),

        BrowseStatusSet: $defineScreen(BrowseStatusSet, [
            {
                name: "REF_STATUS", kind: "collection", elementType: lightSwitchApplication.REF_STATUS,
                createQuery: function () {
                    return this.dataWorkspace.FMData.REF_STATUS;
                }
            }
        ], [
        ]),

        ViewStatus: $defineScreen(ViewStatus, [
            { name: "REF_STATUS", kind: "local", type: lightSwitchApplication.REF_STATUS },
            {
                name: "RESOURCEs", kind: "collection", elementType: lightSwitchApplication.RESOURCE,
                getNavigationProperty: function () {
                    if (this.owner.REF_STATUS) {
                        return this.owner.REF_STATUS.details.properties.RESOURCEs;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        AddEditResourceDetail: $defineScreen(AddEditResourceDetail, [
            { name: "RESOURCE", kind: "local", type: lightSwitchApplication.RESOURCE }
        ], [
        ]),

        BrowseResourceDetails: $defineScreen(BrowseResourceDetails, [
            {
                name: "RESOURCEs", kind: "collection", elementType: lightSwitchApplication.RESOURCE,
                createQuery: function () {
                    return this.dataWorkspace.FMData.RESOURCEs;
                }
            }
        ], [
        ]),

        ViewResourceDetail: $defineScreen(ViewResourceDetail, [
            { name: "RESOURCE", kind: "local", type: lightSwitchApplication.RESOURCE },
            {
                name: "TP_RESOURCE_ALLOCATIONs", kind: "collection", elementType: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
                getNavigationProperty: function () {
                    if (this.owner.RESOURCE) {
                        return this.owner.RESOURCE.details.properties.TP_RESOURCE_ALLOCATIONs;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        AddEditTechnology: $defineScreen(AddEditTechnology, [
            { name: "REF_TECHNOLOGY", kind: "local", type: lightSwitchApplication.REF_TECHNOLOGY }
        ], [
        ]),

        ViewTechnology: $defineScreen(ViewTechnology, [
            { name: "REF_TECHNOLOGY", kind: "local", type: lightSwitchApplication.REF_TECHNOLOGY },
            {
                name: "APPLICATIONs", kind: "collection", elementType: lightSwitchApplication.APP,
                getNavigationProperty: function () {
                    if (this.owner.REF_TECHNOLOGY) {
                        return this.owner.REF_TECHNOLOGY.details.properties.APPLICATIONs;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        BrowseTechnologies: $defineScreen(BrowseTechnologies, [
            {
                name: "REF_TECHNOLOGies", kind: "collection", elementType: lightSwitchApplication.REF_TECHNOLOGY,
                createQuery: function () {
                    return this.dataWorkspace.FMData.REF_TECHNOLOGies;
                }
            }
        ], [
        ]),

        showAddEditRole: $defineShowScreen(function showAddEditRole(REF_ROLE, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditRole screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditRole", parameters, options);
        }),

        showBrowseRoles: $defineShowScreen(function showBrowseRoles(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseRoles screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseRoles", parameters, options);
        }),

        showViewRole: $defineShowScreen(function showViewRole(REF_ROLE, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewRole screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewRole", parameters, options);
        }),

        showAddEditStatus: $defineShowScreen(function showAddEditStatus(REF_STATUS, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditStatus screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditStatus", parameters, options);
        }),

        showBrowseStatusSet: $defineShowScreen(function showBrowseStatusSet(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseStatusSet screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseStatusSet", parameters, options);
        }),

        showViewStatus: $defineShowScreen(function showViewStatus(REF_STATUS, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewStatus screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewStatus", parameters, options);
        }),

        showAddEditResourceDetail: $defineShowScreen(function showAddEditResourceDetail(RESOURCE, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditResourceDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditResourceDetail", parameters, options);
        }),

        showBrowseResourceDetails: $defineShowScreen(function showBrowseResourceDetails(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseResourceDetails screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseResourceDetails", parameters, options);
        }),

        showViewResourceDetail: $defineShowScreen(function showViewResourceDetail(RESOURCE, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewResourceDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewResourceDetail", parameters, options);
        }),

        showAddEditTechnology: $defineShowScreen(function showAddEditTechnology(REF_TECHNOLOGY, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTechnology screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditTechnology", parameters, options);
        }),

        showViewTechnology: $defineShowScreen(function showViewTechnology(REF_TECHNOLOGY, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewTechnology screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewTechnology", parameters, options);
        }),

        showBrowseTechnologies: $defineShowScreen(function showBrowseTechnologies(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTechnologies screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTechnologies", parameters, options);
        })

    });

}(msls.application));
