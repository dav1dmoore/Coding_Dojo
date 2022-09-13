// const express = require("express");
import { faker } from '@faker-js/faker';
import express from 'express';
const app = express();
const port = 8000;



// const createProduct = () => {
//     const newFake = {
//         name: faker.commerce.productName(),
//         price: "$" + faker.commerce.price(),
//         department: faker.commerce.department()
//     };
//     return newFake;
// };
    
// const newFakeProduct = createProduct();
// console.log(newFakeProduct);

class User {
    constructor() {
      this.password = faker.internet.password();
      this.email = faker.internet.email();
      this.phoneNumber = faker.phone.number();
      this.lastName = faker.name.lastName();
      this.firstName = faker.name.firstName();
      this._id = faker.datatype.uuid();
    }
  }

  const randomUser = new User();
  console.log(randomUser);

  class Company {
    constructor() {
      this._id = faker.datatype.uuid();
      this.name = faker.company.name();
      this.address = {
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipcode: faker.address.zipCode(),
        country: faker.address.country(),
      }
    }
  }

  const randomCompany = new Company();
  console.log(randomCompany);


// zipCode
// country




// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/user/new", (req, res) => {
    res.json(randomUser);
});

app.get("/api/company/new", (req, res) => {
    res.json(randomCompany);
});

app.get("/api/user/company", (req, res) => {
    res.json([randomUser, randomCompany]);
});


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
