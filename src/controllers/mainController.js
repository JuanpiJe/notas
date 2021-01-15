const express = require ('express')
const db = require ('../database/models')

module.exports = {
    index : {
        view : (req, res) => {
            db.Notas.findAll()
                .then ((results)=> {
                    res.render ('index', {notas : results})
                 })
        },
        create : (req, res) => {
            db.Notas.create ({
                title : req.body.title,
                description : req.body.description
            })
                .then ((results) => {res.redirect('/')})
        },
        delete : (req,res) => {
            db.Notas.destroy({
                where : {
                    id: req.params.id
                }
            })
            .then ((results) => {res.redirect('/')})
        }
    },
    detail : {
        view : (req, res) => {
            db.Notas.findByPk(req.params.id)
                .then((results) => { res.render('detail', { notita : results })})
        },
        edit : (req,res) => {
            db.Notas.update({
                title : req.body.title,
                description : req.body.description
            },
            {
                where : {
                    id : req.params.id
                }
            })
                res.redirect('/')
        }
    }
}

