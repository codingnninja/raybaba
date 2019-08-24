const axios = require('axios');

const kebabCaseToCamelCase = (str) => str.replace( /(\-\w)/g, (matches) => matches[1].toUpperCase());

//Makes a global endpoint for axios
const createEndpoint = (entity, url=null) => {
    const basicCRUDEndpoints = {};
    const handledURL = (url ? url 
                           : entity.url ? entity.url 
                           : 'You must include a url');
      
    const camelCasedName = kebabCaseToCamelCase(entity.name);
    const resourceURL = `${ handledURL }/${camelCasedName}`;

    basicCRUDEndpoints[camelCasedName] = {

        getAll : ({ params={}}, config={} ) =>  axios.get(resourceURL, { params }, config),
        getOne : ({ id }, config={}) =>  axios.get(`${resourceURL}/${id}`, config),
        create : (toCreate, config={}) =>  axios.post(resourceURL, toCreate, config),
        update : (toUpdate, config={}) => axios.put(`${resourceURL}/${toUpdate.id}`, toUpdate, config),
        patch  : ({id}, toPatch, config={}) => axios.patch(`${resourceURL}/${id}`, toPatch, config),
        delete : ({ id }, config={}) => axios.delete(`${resourceURL}/${id}`, config),

    };

    return basicCRUDEndpoints; 
}


const loadMore = (callback) => callback;

module.exports = { createEndpoint };

// getAll : axios ? ({ params={}}, config={} ) => axios.get(resourceURL, { params }, config)
//                        : ({ params={}}, config={} ) => fetch(resourceURL, { params }, config),
