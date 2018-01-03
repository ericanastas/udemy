using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyFirstCoreApp.Models;

namespace MyFirstCoreApp.Controllers
{
    public class EmployeeController : Controller
    {
        public ActionResult Index()
        {
            var e = new Employee();
            e.Eid = 69;
            e.EmpName = "John Smith";

            return View(e);
        }
    }
}