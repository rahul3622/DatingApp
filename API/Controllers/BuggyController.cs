using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseAPIController
    {
        private readonly DataContext _dataContext;
        public BuggyController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecret()
        {
            return "secret text";
        }

        [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound()
        {
            var user=_dataContext.Users.Find(-1);
            if(user==null) return NotFound();

            return Ok(user);
        }

        [HttpGet("server-error")]
        public ActionResult<string> GetServerError()
        {
            var thing= _dataContext.Users.Find(-1);

            var thingToReturn= thing.ToString();

            return thingToReturn;
        }

        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest()
        {
            return BadRequest("This was not a good request");
        }
    
    }
}