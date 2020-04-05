using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace VNGraphiteCore.Controllers
{
    [Route("thong-tin-chung")]
    public class GeneralInfoController : BaseController
    {
        [Route("~/thong-tin-chung/{moduleName?}")]
        public IActionResult Index(string moduleName = "")
        {
            var isMobile = (bool)ViewData["IsMobile"];

            if (isMobile)
            {
                return View("Index.Mobile");
            }

            return View();
        }
    }
}