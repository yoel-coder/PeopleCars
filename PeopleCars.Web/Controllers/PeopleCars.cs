using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PeopleCars.Data;
namespace PeopleCars.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCarsController : ControllerBase
    {
        private readonly string _connectionstring;
        public PeopleCarsController(IConfiguration configuration)
        {
            _connectionstring = configuration.GetConnectionString("ConStr");
        }
        [Route("getall")]
        [HttpGet]
        public List<Person> GetAll()
        {
           var repo = new PeoplecarsRespository(_connectionstring);
            return repo.GetPeople();
        }
        [Route("DeleteCars")]
            [HttpPost]
            public void DeleteCars(int Id)
        {
            var repo = new PeoplecarsRespository(_connectionstring);
            repo.Deletecars(Id);

        }
        [Route("addperson")]
        [HttpPost]
        public void AddPerson(Person person)
        {
            var repo = new PeoplecarsRespository(_connectionstring);
            repo.AddPerson(person);
        }
        [Route("addcar")]
        [HttpPost]
        public void AddCar(Car car)
        {
            var repo = new PeoplecarsRespository(_connectionstring);
            repo.AddCar(car);
        }
        [Route("getPersonById")]
        [HttpGet]
        public Person GetPersonById(int Id)
        {
            var repo = new PeoplecarsRespository(_connectionstring);
            return repo.GetPersonById(Id);
        }
    }
}
