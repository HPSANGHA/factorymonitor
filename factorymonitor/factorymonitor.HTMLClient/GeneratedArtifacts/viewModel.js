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

    msls._addToNamespace("msls.application", {

        AddEditRole: $defineScreen(AddEditRole, [
            { name: "REF_ROLE", kind: "local", type: lightSwitchApplication.REF_ROLE }
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

        BrowseRoles: $defineScreen(BrowseRoles, [
            {
                name: "REF_ROLEs", kind: "collection", elementType: lightSwitchApplication.REF_ROLE,
                createQuery: function () {
                    return this.dataWorkspace.FMData.REF_ROLEs;
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
        })

    });

}(msls.application));
