var express=require('express');
var app=express();

app.set('view engine','pug');

app.get('/',function(req, res)
{
    res.render('index',
        {title:'Main page', body:'Welcome'}
    )
});

var server=app.listen(3000,function() {});