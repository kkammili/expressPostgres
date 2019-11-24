const Router = require('express').Router;
const pool = require('../db');
const router = Router();

router.get('/', (request, response, next)=>{
    pool.query('SELECT * FROM monsters ORDER BY id DESC', (err, res)=>{
        if(err) return next(err);
        response.json(res.rows);
    })
})

router.get('/:id', (request, response, next)=>{
    const id = request.params.id
    pool.query('SELECT * FROM monsters WHERE id = $1',[id], (err, res)=>{
        if(err) return next(err);
        response.json(res.rows);
    })
})

router.post('/', (request, response, next)=>{
    const name = request.body.name
    const personality = request.body.personality
    pool.query('INSERT INTO monsters(name, personality) VALUES($1, $2)', [name, personality], (err, res)=>{
        if(err) return next(err);
        response.redirect('/monsters');
    })
})

//update ?

router.put('/:id', (request, response, next) =>{
    const id = request.params.id
    let size = 0

    const keys = Object.keys(request.body)
    keys.forEach((key, index)=>{
        pool.query(
            `UPDATE monsters SET ${key} = ($1) WHERE id=($2)`,
            [request.body[key], id],
            (err, res) =>{
                if (err) return next(err)
                if(index === keys.length - 1) response.redirect('/monsters')
            }
        )
    })

})


router.delete('/:id', (request, response)=>{
    const id = request.params.id
    pool.query('DELETE FROM monsters WHERE id = $1', [id], (err, res)=>{
        if(err) return next(err);
        response.redirect('/monsters')
    })
})

module.exports = router;