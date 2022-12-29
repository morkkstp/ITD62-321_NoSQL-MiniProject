const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`)
})

const { MongoClient, ObjectId } = require('mongodb');
const uri = "mongodb://127.0.0.1:27017/";

const connectDB = async() => {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        console.log('MongoDB is now conneted.')

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

connectDB();

app.get('/lcplist', async (req, res) => {
    let { skip, limit } = req.query;
    // console.log(skip, limit);
    const client = new MongoClient(uri);
    await client.connect();
    // const objects = await client.db('lcpDB').collection('lcpData').aggregate([{ $sample: { size: 2000 } }]).sort({ _id: 1 }).toArray();
    const objects = await client.db('lcpDB').collection('lcpData').find({}).skip(Number(skip)).limit(Number(limit)).sort({ _id: 1 }).toArray();
    await client.close();
    res.status(200).send(objects);
})

app.post('/lcplist/create', async (req, res) => {
    const object = req.body;
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('lcpDB').collection('lcpData').insertOne({
        "PatientID": object['PatientID'],
        "Age": object['Age'],
        "Gender": object['Gender'],
        "AirPollution": object['AirPollution'],
        "AlcoholUse": object['AlcoholUse'],
        "DustAllergy": object['DustAllergy'],
        "OccuPationalHazards": object['OccuPationalHazards'],
        "Smoking": object['Smoking'],
        "PassiveSmoker": object['PassiveSmoker'],
        "Created_Date": new Date().toISOString().slice(0, 10),
    });

    await client.close();
    res.status(200).send({
        "status": "ok",
        "message": "Object is created",
        "ID": object['PatientID']
    })
})

app.put('/lcplist/update', async (req, res) => {
    const object = req.body;
    const id = object._id;
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('lcpDB').collection('lcpData').updateOne({ '_id': ObjectId(id) },
        {
            "$set": {
                "PatientID": object['PatientID'],
                "Age": object['Age'],
                "Gender": object['Gender'],
                "AirPollution": object['AirPollution'],
                "AlcoholUse": object['AlcoholUse'],
                "DustAllergy": object['DustAllergy'],
                "OccuPationalHazards": object['OccuPationalHazards'],
                "Smoking": object['Smoking'],
                "PassiveSmoker": object['PassiveSmoker']
            }
        });
    await client.close();
    res.status(200).send({
        'status': "ok",
        'message': "Object with ID : " + object['PatientID'] + " is updated.",
        'ID': object
    });
})

app.delete('/lcplist/delete', async (req, res) => {
    const id = req.body._id;
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('lcpDB').collection('lcpData').deleteOne({ "_id": ObjectId(id) });
    await client.close();
    res.status(200).send({
        "status": "ok",
        "message": "Object with ID : " + id + " is deleted."
    });
})


app.get('/lcplist/field/:searchText', async (req, res) => {
    const { params } = req;
    const searchText = params.searchText
    const client = new MongoClient(uri);
    await client.connect();
    const objects = await client.db('lcpDB').collection('lcpData').find({ $text: { $search: searchText } }).sort({ "Date received": -1 }).limit(5).toArray();
    await client.close();
    res.status(200).send({
        "status": "ok",
        "searchText": searchText,
        "Complaint": objects
    });
})

app.get('/lcplist/:id', async (req, res) => {
    const id = req.params.id;
    const client = new MongoClient(uri);
    await client.connect();
    const object = await client.db('lcpDB').collection('lcpData').findOne({ "_id": ObjectId(id) });
    await client.close();
    res.status(200).send({
        "status": "ok",
        "ID": id,
        "Complaint": object
    });
})