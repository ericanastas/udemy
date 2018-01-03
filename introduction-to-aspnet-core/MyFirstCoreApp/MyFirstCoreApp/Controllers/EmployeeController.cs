using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyFirstCoreApp.Controllers
{
    public class EmployeeController : Controller
    {
        public string Index()
        {
            return "This is from MVC Controller";
        }
    }
}