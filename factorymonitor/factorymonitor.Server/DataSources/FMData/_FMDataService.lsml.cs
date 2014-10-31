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
        public string UserName { get{return this.Application.User.FullName;}}
        partial void REF_ROLEs_Inserting(REF_ROLE entity)
        {
            entity.CreatedBy = UserName;
            entity.CreatedDate = DateTime.Now;
        }

        partial void REF_ROLEs_Updating(REF_ROLE entity)
        {
            entity.ModifiedBy = UserName;
            entity.ModifiedDate = DateTime.Now;
        }

        partial void REF_STATUS_Inserting(REF_STATUS entity)
        {
            entity.CreatedBy = UserName;
            entity.CreatedDate = DateTime.Now;
        }

        partial void REF_STATUS_Updating(REF_STATUS entity)
        {
            entity.ModifiedBy = UserName;
            entity.ModifiedDate = DateTime.Now;
        }

        partial void RESOURCEs_Inserting(RESOURCE entity)
        {
            entity.CreatedBy = UserName;
            entity.CreatedDate = DateTime.Now;
        }

        partial void RESOURCEs_Updating(RESOURCE entity)
        {
            entity.ModifiedBy = UserName;
            entity.ModifiedDate = DateTime.Now;
        }

        partial void REF_TECHNOLOGies_Inserting(REF_TECHNOLOGY entity)
        {
            entity.CreatedBy = UserName;
            entity.CreatedDate = DateTime.Now;
        }

        partial void REF_TECHNOLOGies_Updating(REF_TECHNOLOGY entity)
        {
            entity.ModifiedBy = UserName;
            entity.ModifiedDate = DateTime.Now;
        }

        partial void REF_APPLICATION_TYPEs_Inserting(REF_APPLICATION_TYPE entity)
        {
            entity.CreatedBy = UserName;
            entity.CreatedTime = DateTime.Now;
        }

        partial void REF_APPLICATION_TYPEs_Updating(REF_APPLICATION_TYPE entity)
        {
            entity.ModifiedBy = UserName;
            entity.ModifiedDate = DateTime.Now;
        }
    }
}
