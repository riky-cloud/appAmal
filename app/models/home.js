
//app/models/user.js
//load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

//define the schema for our user model
var userSchema = mongoose.Schema({
	// _id:{ type: Number, default: 1 },
	name: String,
	mail: String,
	password: String,
	status: String,
	created_date: Date,
	updated_date: Date,
	active_hash: String,
	role_id: { type: Number, default: 2 }
});

var member = mongoose.Schema({
	name				: String,
	email				: String,
	password		: String,
	gender			: String,
	alamat			: Text,
	no_tlpn			: String,
	tgl_lahir		: Date,
	status			: String,
	created_date: Date,
	updated_date: Date,
	active_hash	: String
});

var masjid = mongoose.Schema({
	kode_masjid = String,
	nama_masjid = String,
	alamat 			= Text,
	longs 			= String,
	lats 				= String,
	id_pengurus = String,
	img 				= String
})
//methods ======================
//generating a hash
userSchema.methods.generateHash = function(password) {
 return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//checking if password is valid
userSchema.methods.validPassword = function(password) {
 return bcrypt.compareSync(password, this.password);
};

//create the model for users and expose it to our app
// module.exports = mongoose.model('ex_users', userSchema);
module.exports = {
  ex_user: function() {
    return mongoose.model('ex_users', userSchema);
  },

  member: function() {
    return mongoose.model('member', member);
  },

	masjid: function() {
    return mongoose.model('masjid', masjid);
  },
};
