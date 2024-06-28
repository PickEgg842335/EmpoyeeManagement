const express = require('express');
const empdatamodel = require('../models/EmpDataManageModel');

exports.OpenNewEmpPage = (req, res) => {
    res.render('./DisplayPage/NewEmpTable');
};

exports.GetNewEmpSubmitResult = (req, res) => {
    res.render('./DisplayPage/NewEmpResult/NewEmpResult',{emp : empdatamodel.appendOne(req.body)});
};

exports.OpenSearchEmpPage = (req, res) => {
    res.render('./DisplayPage/EmpSearchPage');
};

exports.GetSearchAllEmp = (req, res) => {
    res.render('./DisplayPage/SearchDisplay/SearchEmpAll', {emps : empdatamodel.getAll()});
};

exports.GetSearchOneEmp = (req, res) => {
    res.render('./DisplayPage/SearchDisplay/SearchEmpOne', { emp: empdatamodel.getOne(req.params.empno)});
};