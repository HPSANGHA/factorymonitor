using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
namespace LightSwitchApplication
{
    public partial class FMDataService
    {
        partial void REF_ROLEs_Inserting(REF_ROLE entity)
        {
            entity.CreatedDate = DateTime.Now;
            entity.CreatedBy = this.Application.User.FullName;
        }

        partial void REF_ROLEs_Updating(REF_ROLE entity)
        {
            entity.ModifiedDate = DateTime.Now;
            entity.ModifiedBy = this.Application.User.FullName;
        }
    }
}
