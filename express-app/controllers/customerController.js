const DB = require("./../models/customerModel");
const customerDB = DB.customer;

exports.getTotalCustomerData = (req, res) => {
  customerDB.countDocuments((err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
};

exports.getCustomerData = (req, res, next) => {
  customerDB.find({}, (err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
};

exports.getCustomerDataById = (req, res, next) => {
  const id = parseInt(req.params.id);
  customerDB.find({ CustomerID: id }, (err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
};

exports.editCustomerDataById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  customerDB.updateOne({ CustomerID: id }, { $set: data }, (err, result) => {
    if (err) throw new Error(err);
    customerDB.find({}, (err, result) => {
      if (err) throw new Error(err);
      res.json(result);
    });
  });
};

exports.postCustomerData = (req, res) => {
  customerDB.create(
    {
      _id: req.body.CustomerID,
      City: req.body.City,
      CustomerID: req.body.CustomerID,
      Zone: req.body.Zone,
      CustomerName: req.body.CustomerName,
    },
    (err) => {
      if (err) throw new Error(err);
      else {
        customerDB.find({}, (err, result) => {
          if (err) throw new Error(err);
          res.json(result);
        });
      }
    }
  );
};

exports.deleteCustomerDataById = (req, res) => {
  const id = parseInt(req.params.id);
  customerDB.deleteOne({ CustomerID: id }, (err, result) => {
    if (err) throw new Error(err);
    customerDB.find({}, (err, result) => {
      if (err) throw new Error(err);
      res.json(result);
    });
  });
};
