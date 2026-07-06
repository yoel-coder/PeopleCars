using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PeopleCars.Data
{
    public class PeoplecarsRespository
    {
        private readonly string _connectionString;
        public PeoplecarsRespository(string ConnectionString)
        {
            _connectionString = ConnectionString;
        }
        public List<Person> GetPeople()
        {
            var db = new yesDataContext(_connectionString);
            var peopleWithCars = db.People.Select(p => new Person
            {
                Id = p.Id,
                FirstName = p.FirstName,
                LastName = p.LastName,
                Age = p.Age,
                CarsCount = db.Cars.Count(c => c.PersonId == p.Id)
            }).ToList();
            return peopleWithCars;
        }
        public void Deletecars(int personId)
        {
            var db = new yesDataContext(_connectionString);
            var carsToDelete = db.Cars.Where(c => c.PersonId == personId).ExecuteDelete();
        }
        public void AddPerson(Person person)
        {
            var db = new yesDataContext(_connectionString);
            db.People.Add(person);
            db.SaveChanges();

        }
        public Person GetPersonById(int personId)
        {
            var db = new yesDataContext(_connectionString);
            return db.People.FirstOrDefault(p => p.Id == personId);
        }
        public void AddCar(Car car)
        {
            var db = new yesDataContext(_connectionString);
            db.Cars.Add(car);
            db.SaveChanges();
        }
    }
}
