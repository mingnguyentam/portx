using System;
using System.Linq;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using JetBrains.Annotations;

using Volo.Abp;

namespace PortX.TransportationSetSupplierViewTemplates
{
    public abstract class TransportationSetSupplierViewTemplateBase : FullAuditedAggregateRoot<Guid>, IMultiTenant
    {
        public virtual Guid? TenantId { get; set; }

        public virtual Guid? SupplierTenantId { get; set; }

        public virtual Guid? TransportationSetViewTemplateRootId { get; set; }

        public virtual Guid? SupplierId { get; set; }

        public virtual Guid? RootId { get; set; }

        public virtual Guid? ShippingRootId { get; set; }

        protected TransportationSetSupplierViewTemplateBase()
        {

        }

        public TransportationSetSupplierViewTemplateBase(Guid id, Guid? supplierTenantId = null, Guid? transportationSetViewTemplateRootId = null, Guid? supplierId = null, Guid? rootId = null, Guid? shippingRootId = null)
        {

            Id = id;
            SupplierTenantId = supplierTenantId;
            TransportationSetViewTemplateRootId = transportationSetViewTemplateRootId;
            SupplierId = supplierId;
            RootId = rootId;
            ShippingRootId = shippingRootId;
        }

    }
}