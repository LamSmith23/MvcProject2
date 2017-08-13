using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MvcProject2.Models;
using System.Data.Entity.Validation;

namespace MvcProject2.Controllers
{
    public class MoviesController : Controller
    {
        private Movies db = new Movies();

        // GET: Movies
        public ActionResult Index()
        {
            return View("~/Views/Movies/Index.cshtml");
        }

        public ActionResult GetMovies(string movieGenre, string searchString)
        {
            var GenreLst = new List<string>();

            var GenreQry = from d in db.Movie
                           orderby d.Genre
                           select d.Genre;

            GenreLst.AddRange(GenreQry.Distinct());
            ViewBag.movieGenre = new SelectList(GenreLst);

            var movies = from m in db.Movie
                         select m;

            if (!String.IsNullOrEmpty(searchString))
            {
                movies = movies.Where(s => s.Title.Contains(searchString));
            }

            if (!string.IsNullOrEmpty(movieGenre))
            {
                movies = movies.Where(x => x.Genre == movieGenre);
            }
            return Json(movies, JsonRequestBehavior.AllowGet);



        }

        // GET: Movies/Details/5

        public ActionResult Details(int? id)
        {
            return View("~/Views/Movies/Details.cshtml");
        }


        public ActionResult GetDetails(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Movy movy = db.Movie.Find(id);
            if (movy == null)
            {
                return HttpNotFound();
            }
            return Json(movy , JsonRequestBehavior.AllowGet);
        }

        // GET: Movies/Create
        public ActionResult Create()
        {
            if (!User.Identity.IsAuthenticated)
            {
                return View("~/Views/Shared/Error.cshtml");
            }
            return View("~/Views/Movies/Create.cshtml");
        }

        // POST: Movies/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
     
        public ActionResult CreateMovie( Movy movy)
        {
            if (ModelState.IsValid)
            {
                db.Movie.Add(movy);
                db.SaveChanges();
            }  
            return View("~/Views/Movies/Index.cshtml");
        }

            

        // GET: Movies/Edit/5

        public ActionResult Edit(int? id)
        {

            if (!User.Identity.IsAuthenticated)
            {
                return View("~/Views/Shared/Error.cshtml");
            }

                return View("~/Views/Movies/Edit.cshtml");
         }
        public ActionResult EditDetails(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Movy movy = db.Movie.Find(id);
            if (movy == null)
            {
                return HttpNotFound();
            }
            return Json(movy, JsonRequestBehavior.AllowGet);

            
        }

        // POST: Movies/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]

        
        public ActionResult EditPost( Movy movy)
        {
            try
            {
                db.Movie.Add(movy);
                db.SaveChanges();
            }
            catch (DbEntityValidationException dbEx)
            {
                foreach (var validationErrors in dbEx.EntityValidationErrors)
                {
                    foreach (var validationError in validationErrors.ValidationErrors)
                    {
                        System.Console.WriteLine("Property: {0} Error: {1}", validationError.PropertyName, validationError.ErrorMessage);
                    }
                }
            }
            //db.Movie.Add(movy);
            //    db.SaveChanges();
            return View("~/Views/Movies/Index.cshtml");

        }

        // GET: Movies/Delete/5

        public ActionResult Delete(int id)
        {

            if (!User.Identity.IsAuthenticated)
            {
                return View("~/Views/Shared/Error.cshtml");
            }

            return View("~/Views/Movies/Delete.cshtml");
        }
        public ActionResult DeleteDetails(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Movy movy = db.Movie.Find(id);
            if (movy == null)
            {
                return HttpNotFound();
            }
            return Json(movy, JsonRequestBehavior.AllowGet);
        }

        // POST: Movies/Delete/5
        [HttpPost, ActionName("Delete")]

        public ActionResult Delete(int? id)
        {
            return View("~/Views/Movies/Delete.cshtml");
        }



        public ActionResult RemoveMovie(int? id)
        {

            
                Movy movy = db.Movie.Find(id);
                db.Movie.Remove(movy);
                db.SaveChanges();
            
            
            return RedirectToAction("Index");

        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
