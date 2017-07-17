using System;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;

public class GlobalExceptionFilter : IExceptionFilter, IDisposable
{
    private readonly Serilog.ILogger _logger;

    public GlobalExceptionFilter(Serilog.ILogger  logger)
    {
        this._logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }

    public void OnException(ExceptionContext context)
    {
       _logger.Error(context.Exception,"");
        //var response = new ErrorResponse()
        //{
        //    Message = context.Exception.Message,
        //    StackTrace = context.Exception.StackTrace
        //};

        //context.Result = new ObjectResult(response)
        //{
        //    StatusCode = 500,
        //    DeclaredType = typeof(ErrorResponse)
        //};

        //this._logger.LogError("GlobalExceptionFilter", context.Exception);
    }

    public void Dispose()
    {
    }
}
