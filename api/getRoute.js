const express = require('express');
const getRoutes = express.Router();
const passport = require('passport');
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const config = require("./db.js");
const db = mysql.createConnection(config);

getRoutes.get('/isLoggedIn', function (req, res, next) {
    if (req.isAuthenticated()) {
        return res.send({ success: true, message: 'user login', name: req.user.full_name });
    }
    return res.send({ success: false, message: 'user login' });
});

getRoutes.get('/logout', function (req, res, next) {
    req.logOut();
    return res.send({ success: true, message: 'user logout' });
});

getRoutes.get('/MyHomeProjects', function (req, res, next) {
    var id = req.user.id_user;
    var projectList = [];
    var i = 0;
    db.query("SELECT project.id_project,project.name FROM project WHERE project.id_project IN (SELECT id_project FROM bioblocks.user_belongs_project "
        + "WHERE id_user=?) LIMIT 3", [id], function (err, rows, fields) {
            if (err) throw err;
            if (rows.length > 0) {
                while (rows[i] != null) {
                    projectList.push(rows[i])
                    i++;
                }
            }

            return res.send(projectList);
        });
});

getRoutes.get('/MyHomeGroups', function (req, res, next) {
    var id = req.user.id_user;
    var groupList = [];
    var i = 0;
    db.query("SELECT name,id_group FROM projects_group WHERE id_group IN (SELECT DISTINCT id_group FROM project_belongs_group "
        + "WHERE id_project IN (SELECT id_project FROM user_belongs_project WHERE id_user=?)) LIMIT 3" , [id], function (err, rows, fields) {
            if (err) throw err;
            if (rows.length > 0) {
                while (rows[i] != null) {
                    groupList.push(rows[i])
                    i++;
                }
            }
            return res.send(groupList);
        });
});

getRoutes.get('/project/:id', function (req, res, next) {
    var id = req.params.id;
    var i = 0;
    db.query("SELECT project.name, project.public FROM project WHERE project.id_project=?", [id], function (err, rows, fields) {
        if (err) throw err;
        if (rows.length > 0)
            return res.send(rows[0])
            else
            return res.send(null)
    });
});

getRoutes.get('/group/:id', function (req, res, next) {
    var id = req.params.id;
    var i = 0;
    db.query("SELECT projects_group.name FROM projects_group WHERE projects_group.id_group=?", [id], function (err, rows, fields) {
        if (err) throw err;
        if (rows.length > 0)
            return res.send(rows[0])
            else
            return res.send(null)
    });
});

module.exports = getRoutes;