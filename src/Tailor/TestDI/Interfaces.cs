using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tailor.TestDI
{
    public interface IOperation
    {
        Guid OperationId { get; }
    }

    public class Operation : IOperationTransient, IOperationScoped , IOperationSingleton, IOperationInstance
    {
        private Guid _operationId = Guid.NewGuid();
        public Guid OperationId
        {
            get
            {
                return _operationId;
            }
        }
    }

    public interface IOperationTransient : IOperation
    {
    }
    public interface IOperationScoped : IOperation
    {
    }
    public interface IOperationSingleton : IOperation
    {
    }
    public interface IOperationInstance : IOperation
    {
    }
}
