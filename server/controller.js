module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db')
        db.getHouses().then((response) => {
            res.status(200).send(response)
        }).catch(err => {
            res.send(err)
        })
    },
    addHouse: (req, res) => {
        const db = req.app.get('db')
        const {name, address, city, stateName, zip, image, mortgage, rent} = req.body
        // console.log(req.body)
        db.addHouse({name, address, city, state: stateName, zip, image, mortgage, rent}).then((response) =>{
            res.setStatus(200)
        }).catch(err => {
            res.send(err)
        })
    },
    deleteHouse: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        // console.log(req.params)
        db.deleteHouse({id}).then((response) => {
            res.setStatus(200)
        }).catch(err => {
            res.send(err)
        })
    }
}