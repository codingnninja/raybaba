const { createEndpoint } = require('../src/index');
var assert = require('assert');
var should = require('chai').should();
const expect = require('chai').expect;
const url = 'https://jsonplaceholder.typicode.com';

describe('Entity creation test:', () => {
    it('should create a working entity', async () => {       
        let endpoints = createEndpoint({name:'posts'});               
        assert.ok(endpoints);
        endpoints.should.have.property('posts');
        endpoints.posts.getAll;
    });
 
    it('should convert hypenated words to camelCase', async () => {       
        const name = 'posts-feedbacks'
        const endpoints = createEndpoint({name}); 
        endpoints.should.have.property('postsFeedbacks');
        endpoints.postsFeedbacks.getAll;
    });

    it('should get items from the provided url', async () => {  
        const name = 'posts';
        const endpoints = createEndpoint({name}, url); 
        const expected = endpoints.posts.getAll({})
        .then(({data})=> console.log(data))
        .catch(err => console.log(err))

    }); 

    it('should get an item for the id provided', async () => {  
        const name = 'posts';
        const endpoints = createEndpoint({name}, url); 
        const expected = endpoints.posts.getOne({id:1})
        .then(({data})=> console.log(data))
        .catch(err => console.log(err))

    });

    it('should create a post', async () => {  
        const name = 'posts';
        const data = {
                method: 'POST',
                body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            })
        };

        const config = {
            headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }

        const endpoints = createEndpoint({name}, url); 
        const expected = endpoints.posts.create(data, config)
        .then(({data})=> console.log(data))
        .catch(err => console.log(err))
    });
    

    it('should update a post', async () => {  
        const name = 'posts';
        const data = {
                method: 'PUT',
                id:100,
                title: 'this is updated',
                body: 'this is updated',
                userId: 10
        };

        const config = {
            headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }

        const endpoints = createEndpoint({name}, url); 
        const expected = endpoints.posts.update(data, config)
        .then(({data})=> console.log(data))
        .catch(err => console.log(err))
    });

    it('should delete the item of the given id', async () => {  
        const name = 'posts';
        const endpoints = createEndpoint({name}, url); 
        const expected = endpoints.posts.delete({ id: 99})
        .then(({data})=> console.log(data))
        .catch(err => console.log(err))

    });
})
