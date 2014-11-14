/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditApplicationType(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditApplicationType screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_APPLICATION_TYPE" type="msls.application.REF_APPLICATION_TYPE">
        /// Gets or sets the rEF_APPLICATION_TYPE for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditApplicationType.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditApplicationType", parameters);
    }

    function BrowseApplicationTypes(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseApplicationTypes screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_APPLICATION_TYPEs" type="msls.VisualCollection" elementType="msls.application.REF_APPLICATION_TYPE">
        /// Gets the rEF_APPLICATION_TYPEs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseApplicationTypes.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseApplicationTypes", parameters);
    }

    function ViewApplicationType(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewApplicationType screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_APPLICATION_TYPE" type="msls.application.REF_APPLICATION_TYPE">
        /// Gets or sets the rEF_APPLICATION_TYPE for this screen.
        /// </field>
        /// <field name="TPs" type="msls.VisualCollection" elementType="msls.application.TP">
        /// Gets the tPs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewApplicationType.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewApplicationType", parameters);
    }

    function AddEditComplexity(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditComplexity screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_COMPLEXITY" type="msls.application.REF_COMPLEXITY">
        /// Gets or sets the rEF_COMPLEXITY for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditComplexity.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditComplexity", parameters);
    }

    function BrowseComplexities(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseComplexities screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_COMPLEXITies" type="msls.VisualCollection" elementType="msls.application.REF_COMPLEXITY">
        /// Gets the rEF_COMPLEXITies for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseComplexities.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseComplexities", parameters);
    }

    function ViewComplexity(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewComplexity screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_COMPLEXITY" type="msls.application.REF_COMPLEXITY">
        /// Gets or sets the rEF_COMPLEXITY for this screen.
        /// </field>
        /// <field name="TPs" type="msls.VisualCollection" elementType="msls.application.TP">
        /// Gets the tPs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewComplexity.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewComplexity", parameters);
    }

    function AddEditGap(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditGap screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_GAP" type="msls.application.REF_GAP">
        /// Gets or sets the rEF_GAP for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditGap.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditGap", parameters);
    }

    function BrowseGaps(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseGaps screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_GAPs" type="msls.VisualCollection" elementType="msls.application.REF_GAP">
        /// Gets the rEF_GAPs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseGaps.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseGaps", parameters);
    }

    function ViewGap(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewGap screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_GAP" type="msls.application.REF_GAP">
        /// Gets or sets the rEF_GAP for this screen.
        /// </field>
        /// <field name="TPs" type="msls.VisualCollection" elementType="msls.application.TP">
        /// Gets the tPs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewGap.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewGap", parameters);
    }

    function AddEditPhase(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPhase screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_PHASE" type="msls.application.REF_PHASE">
        /// Gets or sets the rEF_PHASE for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditPhase.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPhase", parameters);
    }

    function BrowsePhases(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowsePhases screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_PHASEs" type="msls.VisualCollection" elementType="msls.application.REF_PHASE">
        /// Gets the rEF_PHASEs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowsePhases.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowsePhases", parameters);
    }

    function ViewPhase(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewPhase screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_PHASE" type="msls.application.REF_PHASE">
        /// Gets or sets the rEF_PHASE for this screen.
        /// </field>
        /// <field name="TP_PHASEs" type="msls.VisualCollection" elementType="msls.application.TP_PHASE">
        /// Gets the tP_PHASEs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewPhase.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewPhase", parameters);
    }

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

    function AddEditTechnologyStack(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditTechnologyStack screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_TECHNOLOGY_STACK" type="msls.application.REF_TECHNOLOGY_STACK">
        /// Gets or sets the rEF_TECHNOLOGY_STACK for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditTechnologyStack.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTechnologyStack", parameters);
    }

    function BrowseTechnologyStacks(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTechnologyStacks screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_TECHNOLOGY_STACKs" type="msls.VisualCollection" elementType="msls.application.REF_TECHNOLOGY_STACK">
        /// Gets the rEF_TECHNOLOGY_STACKs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTechnologyStacks.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTechnologyStacks", parameters);
    }

    function ViewTechnologyStack(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewTechnologyStack screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_TECHNOLOGY_STACK" type="msls.application.REF_TECHNOLOGY_STACK">
        /// Gets or sets the rEF_TECHNOLOGY_STACK for this screen.
        /// </field>
        /// <field name="TPs" type="msls.VisualCollection" elementType="msls.application.TP">
        /// Gets the tPs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewTechnologyStack.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewTechnologyStack", parameters);
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

    function AddEditTp(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditTp screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TP" type="msls.application.TP">
        /// Gets or sets the tP for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditTp.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTp", parameters);
    }

    function ViewTp(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewTp screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TP" type="msls.application.TP">
        /// Gets or sets the tP for this screen.
        /// </field>
        /// <field name="TP_APPLICATIONs" type="msls.VisualCollection" elementType="msls.application.TP_APPLICATION">
        /// Gets the tP_APPLICATIONs for this screen.
        /// </field>
        /// <field name="TP_DOCUMENT_LINKs" type="msls.VisualCollection" elementType="msls.application.TP_DOCUMENT_LINK">
        /// Gets the tP_DOCUMENT_LINKs for this screen.
        /// </field>
        /// <field name="TP_PHASEs" type="msls.VisualCollection" elementType="msls.application.TP_PHASE">
        /// Gets the tP_PHASEs for this screen.
        /// </field>
        /// <field name="TP_RESOURCE_ALLOCATIONs" type="msls.VisualCollection" elementType="msls.application.TP_RESOURCE_ALLOCATION">
        /// Gets the tP_RESOURCE_ALLOCATIONs for this screen.
        /// </field>
        /// <field name="TP_STAKEHOLDERs" type="msls.VisualCollection" elementType="msls.application.TP_STAKEHOLDER">
        /// Gets the tP_STAKEHOLDERs for this screen.
        /// </field>
        /// <field name="TP_VENDORs" type="msls.VisualCollection" elementType="msls.application.TP_VENDOR">
        /// Gets the tP_VENDORs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewTp.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewTp", parameters);
    }

    function BrowseTps(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTps screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TPs" type="msls.VisualCollection" elementType="msls.application.TP">
        /// Gets the tPs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTps.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTps", parameters);
    }

    function AddEditApp(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditApp screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="APP" type="msls.application.APP">
        /// Gets or sets the aPP for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditApp.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditApp", parameters);
    }

    function ViewApp(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewApp screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="APP" type="msls.application.APP">
        /// Gets or sets the aPP for this screen.
        /// </field>
        /// <field name="TP_APPLICATIONs" type="msls.VisualCollection" elementType="msls.application.TP_APPLICATION">
        /// Gets the tP_APPLICATIONs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewApp.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewApp", parameters);
    }

    function BrowseApps(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseApps screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="APPLICATIONs" type="msls.VisualCollection" elementType="msls.application.APP">
        /// Gets the aPPLICATIONs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseApps.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseApps", parameters);
    }

    function AddEditTPApps(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditTPApps screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TP_APPLICATION" type="msls.application.TP_APPLICATION">
        /// Gets or sets the tP_APPLICATION for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditTPApps.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTPApps", parameters);
    }

    function ViewTPApps(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewTPApps screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TP_APPLICATION" type="msls.application.TP_APPLICATION">
        /// Gets or sets the tP_APPLICATION for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewTPApps.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewTPApps", parameters);
    }

    function BrowseTPAppsSet(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTPAppsSet screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TP_APPLICATIONs" type="msls.VisualCollection" elementType="msls.application.TP_APPLICATION">
        /// Gets the tP_APPLICATIONs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTPAppsSet.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTPAppsSet", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditApplicationType: $defineScreen(AddEditApplicationType, [
            { name: "REF_APPLICATION_TYPE", kind: "local", type: lightSwitchApplication.REF_APPLICATION_TYPE }
        ], [
        ]),

        BrowseApplicationTypes: $defineScreen(BrowseApplicationTypes, [
            {
                name: "REF_APPLICATION_TYPEs", kind: "collection", elementType: lightSwitchApplication.REF_APPLICATION_TYPE,
                createQuery: function () {
                    return this.dataWorkspace.FMData.REF_APPLICATION_TYPEs;
                }
            }
        ], [
        ]),

        ViewApplicationType: $defineScreen(ViewApplicationType, [
            { name: "REF_APPLICATION_TYPE", kind: "local", type: lightSwitchApplication.REF_APPLICATION_TYPE },
            {
                name: "TPs", kind: "collection", elementType: lightSwitchApplication.TP,
                getNavigationProperty: function () {
                    if (this.owner.REF_APPLICATION_TYPE) {
                        return this.owner.REF_APPLICATION_TYPE.details.properties.TPs;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        AddEditComplexity: $defineScreen(AddEditComplexity, [
            { name: "REF_COMPLEXITY", kind: "local", type: lightSwitchApplication.REF_COMPLEXITY }
        ], [
        ]),

        BrowseComplexities: $defineScreen(BrowseComplexities, [
            {
                name: "REF_COMPLEXITies", kind: "collection", elementType: lightSwitchApplication.REF_COMPLEXITY,
                createQuery: function () {
                    return this.dataWorkspace.FMData.REF_COMPLEXITies;
                }
            }
        ], [
        ]),

        ViewComplexity: $defineScreen(ViewComplexity, [
            { name: "REF_COMPLEXITY", kind: "local", type: lightSwitchApplication.REF_COMPLEXITY },
            {
                name: "TPs", kind: "collection", elementType: lightSwitchApplication.TP,
                getNavigationProperty: function () {
                    if (this.owner.REF_COMPLEXITY) {
                        return this.owner.REF_COMPLEXITY.details.properties.TPs;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        AddEditGap: $defineScreen(AddEditGap, [
            { name: "REF_GAP", kind: "local", type: lightSwitchApplication.REF_GAP }
        ], [
        ]),

        BrowseGaps: $defineScreen(BrowseGaps, [
            {
                name: "REF_GAPs", kind: "collection", elementType: lightSwitchApplication.REF_GAP,
                createQuery: function () {
                    return this.dataWorkspace.FMData.REF_GAPs;
                }
            }
        ], [
        ]),

        ViewGap: $defineScreen(ViewGap, [
            { name: "REF_GAP", kind: "local", type: lightSwitchApplication.REF_GAP },
            {
                name: "TPs", kind: "collection", elementType: lightSwitchApplication.TP,
                getNavigationProperty: function () {
                    if (this.owner.REF_GAP) {
                        return this.owner.REF_GAP.details.properties.TPs;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        AddEditPhase: $defineScreen(AddEditPhase, [
            { name: "REF_PHASE", kind: "local", type: lightSwitchApplication.REF_PHASE }
        ], [
        ]),

        BrowsePhases: $defineScreen(BrowsePhases, [
            {
                name: "REF_PHASEs", kind: "collection", elementType: lightSwitchApplication.REF_PHASE,
                createQuery: function () {
                    return this.dataWorkspace.FMData.REF_PHASEs;
                }
            }
        ], [
        ]),

        ViewPhase: $defineScreen(ViewPhase, [
            { name: "REF_PHASE", kind: "local", type: lightSwitchApplication.REF_PHASE },
            {
                name: "TP_PHASEs", kind: "collection", elementType: lightSwitchApplication.TP_PHASE,
                getNavigationProperty: function () {
                    if (this.owner.REF_PHASE) {
                        return this.owner.REF_PHASE.details.properties.TP_PHASEs;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

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

        AddEditTechnology: $defineScreen(AddEditTechnology, [
            { name: "REF_TECHNOLOGY", kind: "local", type: lightSwitchApplication.REF_TECHNOLOGY }
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

        AddEditTechnologyStack: $defineScreen(AddEditTechnologyStack, [
            { name: "REF_TECHNOLOGY_STACK", kind: "local", type: lightSwitchApplication.REF_TECHNOLOGY_STACK }
        ], [
        ]),

        BrowseTechnologyStacks: $defineScreen(BrowseTechnologyStacks, [
            {
                name: "REF_TECHNOLOGY_STACKs", kind: "collection", elementType: lightSwitchApplication.REF_TECHNOLOGY_STACK,
                createQuery: function () {
                    return this.dataWorkspace.FMData.REF_TECHNOLOGY_STACKs;
                }
            }
        ], [
        ]),

        ViewTechnologyStack: $defineScreen(ViewTechnologyStack, [
            { name: "REF_TECHNOLOGY_STACK", kind: "local", type: lightSwitchApplication.REF_TECHNOLOGY_STACK },
            {
                name: "TPs", kind: "collection", elementType: lightSwitchApplication.TP,
                getNavigationProperty: function () {
                    if (this.owner.REF_TECHNOLOGY_STACK) {
                        return this.owner.REF_TECHNOLOGY_STACK.details.properties.TPs;
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

        AddEditTp: $defineScreen(AddEditTp, [
            { name: "TP", kind: "local", type: lightSwitchApplication.TP }
        ], [
        ]),

        ViewTp: $defineScreen(ViewTp, [
            { name: "TP", kind: "local", type: lightSwitchApplication.TP },
            {
                name: "TP_APPLICATIONs", kind: "collection", elementType: lightSwitchApplication.TP_APPLICATION,
                getNavigationProperty: function () {
                    if (this.owner.TP) {
                        return this.owner.TP.details.properties.TP_APPLICATIONs;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            {
                name: "TP_DOCUMENT_LINKs", kind: "collection", elementType: lightSwitchApplication.TP_DOCUMENT_LINK,
                getNavigationProperty: function () {
                    if (this.owner.TP) {
                        return this.owner.TP.details.properties.TP_DOCUMENT_LINKs;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            {
                name: "TP_PHASEs", kind: "collection", elementType: lightSwitchApplication.TP_PHASE,
                getNavigationProperty: function () {
                    if (this.owner.TP) {
                        return this.owner.TP.details.properties.TP_PHASEs;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            {
                name: "TP_RESOURCE_ALLOCATIONs", kind: "collection", elementType: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
                getNavigationProperty: function () {
                    if (this.owner.TP) {
                        return this.owner.TP.details.properties.TP_RESOURCE_ALLOCATIONs;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            {
                name: "TP_STAKEHOLDERs", kind: "collection", elementType: lightSwitchApplication.TP_STAKEHOLDER,
                getNavigationProperty: function () {
                    if (this.owner.TP) {
                        return this.owner.TP.details.properties.TP_STAKEHOLDERs;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            {
                name: "TP_VENDORs", kind: "collection", elementType: lightSwitchApplication.TP_VENDOR,
                getNavigationProperty: function () {
                    if (this.owner.TP) {
                        return this.owner.TP.details.properties.TP_VENDORs;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        BrowseTps: $defineScreen(BrowseTps, [
            {
                name: "TPs", kind: "collection", elementType: lightSwitchApplication.TP,
                createQuery: function () {
                    return this.dataWorkspace.FMData.TPs;
                }
            }
        ], [
        ]),

        AddEditApp: $defineScreen(AddEditApp, [
            { name: "APP", kind: "local", type: lightSwitchApplication.APP }
        ], [
        ]),

        ViewApp: $defineScreen(ViewApp, [
            { name: "APP", kind: "local", type: lightSwitchApplication.APP },
            {
                name: "TP_APPLICATIONs", kind: "collection", elementType: lightSwitchApplication.TP_APPLICATION,
                getNavigationProperty: function () {
                    if (this.owner.APP) {
                        return this.owner.APP.details.properties.TP_APPLICATIONs;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("TP");
                }
            }
        ], [
        ]),

        BrowseApps: $defineScreen(BrowseApps, [
            {
                name: "APPLICATIONs", kind: "collection", elementType: lightSwitchApplication.APP,
                createQuery: function () {
                    return this.dataWorkspace.FMData.APPLICATIONs.expand("REF_TECHNOLOGY");
                }
            }
        ], [
        ]),

        AddEditTPApps: $defineScreen(AddEditTPApps, [
            { name: "TP_APPLICATION", kind: "local", type: lightSwitchApplication.TP_APPLICATION }
        ], [
        ]),

        ViewTPApps: $defineScreen(ViewTPApps, [
            { name: "TP_APPLICATION", kind: "local", type: lightSwitchApplication.TP_APPLICATION }
        ], [
        ]),

        BrowseTPAppsSet: $defineScreen(BrowseTPAppsSet, [
            {
                name: "TP_APPLICATIONs", kind: "collection", elementType: lightSwitchApplication.TP_APPLICATION,
                createQuery: function () {
                    return this.dataWorkspace.FMData.TP_APPLICATIONs.expand("TP").expand("APP");
                }
            }
        ], [
        ]),

        showAddEditApplicationType: $defineShowScreen(function showAddEditApplicationType(REF_APPLICATION_TYPE, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditApplicationType screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditApplicationType", parameters, options);
        }),

        showBrowseApplicationTypes: $defineShowScreen(function showBrowseApplicationTypes(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseApplicationTypes screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseApplicationTypes", parameters, options);
        }),

        showViewApplicationType: $defineShowScreen(function showViewApplicationType(REF_APPLICATION_TYPE, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewApplicationType screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewApplicationType", parameters, options);
        }),

        showAddEditComplexity: $defineShowScreen(function showAddEditComplexity(REF_COMPLEXITY, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditComplexity screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditComplexity", parameters, options);
        }),

        showBrowseComplexities: $defineShowScreen(function showBrowseComplexities(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseComplexities screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseComplexities", parameters, options);
        }),

        showViewComplexity: $defineShowScreen(function showViewComplexity(REF_COMPLEXITY, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewComplexity screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewComplexity", parameters, options);
        }),

        showAddEditGap: $defineShowScreen(function showAddEditGap(REF_GAP, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditGap screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditGap", parameters, options);
        }),

        showBrowseGaps: $defineShowScreen(function showBrowseGaps(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseGaps screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseGaps", parameters, options);
        }),

        showViewGap: $defineShowScreen(function showViewGap(REF_GAP, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewGap screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewGap", parameters, options);
        }),

        showAddEditPhase: $defineShowScreen(function showAddEditPhase(REF_PHASE, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPhase screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditPhase", parameters, options);
        }),

        showBrowsePhases: $defineShowScreen(function showBrowsePhases(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowsePhases screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowsePhases", parameters, options);
        }),

        showViewPhase: $defineShowScreen(function showViewPhase(REF_PHASE, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewPhase screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewPhase", parameters, options);
        }),

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

        showAddEditTechnologyStack: $defineShowScreen(function showAddEditTechnologyStack(REF_TECHNOLOGY_STACK, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTechnologyStack screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditTechnologyStack", parameters, options);
        }),

        showBrowseTechnologyStacks: $defineShowScreen(function showBrowseTechnologyStacks(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTechnologyStacks screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTechnologyStacks", parameters, options);
        }),

        showViewTechnologyStack: $defineShowScreen(function showViewTechnologyStack(REF_TECHNOLOGY_STACK, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewTechnologyStack screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewTechnologyStack", parameters, options);
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

        showAddEditTp: $defineShowScreen(function showAddEditTp(TP, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTp screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditTp", parameters, options);
        }),

        showViewTp: $defineShowScreen(function showViewTp(TP, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewTp screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewTp", parameters, options);
        }),

        showBrowseTps: $defineShowScreen(function showBrowseTps(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTps screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTps", parameters, options);
        }),

        showAddEditApp: $defineShowScreen(function showAddEditApp(APP, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditApp screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditApp", parameters, options);
        }),

        showViewApp: $defineShowScreen(function showViewApp(APP, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewApp screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewApp", parameters, options);
        }),

        showBrowseApps: $defineShowScreen(function showBrowseApps(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseApps screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseApps", parameters, options);
        }),

        showAddEditTPApps: $defineShowScreen(function showAddEditTPApps(TP_APPLICATION, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTPApps screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditTPApps", parameters, options);
        }),

        showViewTPApps: $defineShowScreen(function showViewTPApps(TP_APPLICATION, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewTPApps screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewTPApps", parameters, options);
        }),

        showBrowseTPAppsSet: $defineShowScreen(function showBrowseTPAppsSet(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTPAppsSet screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTPAppsSet", parameters, options);
        })

    });

}(msls.application));
