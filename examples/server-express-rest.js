var express=require('express');
var app=express();

app.route('/accounts').get(function(req, res)
{
    res.send('Accounts table');
});

app.route('/contacts').get(function(req, res)
{
    res.send('Contacts table');
});

app.get('/',function(req, res)
{
        res.send('The first express app');
});

var server=app.listen(3000,function() {});