using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace VNGraphiteCore.Controllers
{
    [Route("lien-he")]
    public class ContactController : BaseController
    {
        public IActionResult Index()
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