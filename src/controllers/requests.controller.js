const cities = require('../data/cities');
const streets = require('../data/streets');

const getCities = async (req,res) => {
    const params = req.query;
    const limit = params.limit || 10;
    try {
        //check valid query
        if(!params.q || params.q === "") throw ({status:400,message:"Invalid query"});
        //filter by city name
        let data = cities.filter(city=>city.city.includes(params.q)||city.cityEnglish.includes(params.q));
        //check if any data exists
        if(data.length===0) {
            throw {status:404,message:"No cities found with these parameters"};
        }
        //send data by limit
        if(data.length<=limit) return res.status(200).send(data);
        else {
            data = data.slice(0,limit);
            return res.status(200).send(data);
        }
    } catch (err) {
        res.status(err.status).send(err.message);
    }
}

const getStreets = async (req,res) => {
    const params = req.query;
    const limit = params.limit || 10;
    try {
        //check valid query
        if(!params.q || params.q==="") throw {status:400,message:"Invalid query"};
        //filter by street name
        let data = streets.filter(street=>street.street.includes(params.q));
        //filter by city name
        if(params.city) {
            data = data.filter(street=>{
                for(let city of street.cities) 
                    if(city.trim()===params.city) return true;
                return false;
            });
        }
        //check if any data exists
        if(data.length===0) {
            throw {status:404,message:"No streets found with these parameters"};
        }
        //format the data for just the street name
        data = data.map(street=>street.street);
        //send data by limit
        if(data.length<=limit) return res.status(200).send(data);
        else {
            data = data.slice(0,limit);
            return res.status(200).send(data);
        }
    } catch (err) {
        console.log(err)
        res.status(err.status).send(err.message);
    }
}

module.exports = {
    getCities,
    getStreets,
}