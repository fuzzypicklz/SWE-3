var request = require('supertest'),
    app = require('../../app');

describe("homepage", function(){
   it("welcomes the user", function(done){
       request(app).get("/")
           .expect(200)
           .expect(/Hello fine user/, done);
   })
});

describe("homepage", function(){
    it("thanks the user after they fill out the contact form", function(done){
        request(app).post("/contact")
            .send({name: "Jeff"})
            .expect(302)
            .expect('Location', /\/thank-you/, function(){//redirect function
                request(app).get('/thank-you')
                    .expect(200)
                    .expect(/Thank you/, done);
            });
    })
});