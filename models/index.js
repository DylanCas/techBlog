const User= require('./User')
const Blogs= require('./Blogs')
const Comments= require('./Comments')

// user has many: blogs, comments
// blogs has many: comments
// blogs belongs to: users
// comments belong to: ... users and blogs?
// TODO: set up primary key and associations between models
User.hasMany(Blogs, {

});

User.hasMany(Comments, {

});

Blogs.belongsTo(User, {

})

Comments.belongsTo(Blogs, {

});

Comments.belongsTo(User, {

});