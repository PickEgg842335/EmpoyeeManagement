const express = require('express');

exports.GetEmpsysIndexPage = (req, res) => {
    res.render('EmpSys',{ PageIndex : 0});
};

exports.GetEmpsysFirstPage = (req, res) => {
    res.render('./DisplayPage/FirstPage');
};

exports.GetEmpsysErrorPage = (req, res) => {
    res.send('網頁錯誤');
};
