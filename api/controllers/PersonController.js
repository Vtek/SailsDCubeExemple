module.exports = {
  getAll : function(req, res){
      Person.find().exec(function(err, data){
        res.render('person/getAll', {persons : data})
    });
  },

  _config: {}
};
