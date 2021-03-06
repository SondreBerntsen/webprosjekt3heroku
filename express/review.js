const express = require('express')
var db = require('./db')
const review = express.Router()


review.get("/", (req, res) => {
  const { year } = req.query
  var json = {}

  const review_query = _ => {
    let QUERY = `SELECT id, year, text FROM review`
    let specificYear = ` WHERE year = ${year}`
    req.query !== 'all' && QUERY.concat(specificYear)

    db.query(QUERY, (err, results) => {
      if (err) {
        return res.send(err)
      } else {
        json.reviewData = results
        slider_query()
      }
    })
  }
  const slider_query = _ => {
    let QUERY = `SELECT * FROM images`
    let specificYear = ` WHERE r_id = (SELECT id FROM review WHERE year = '${year}')`
    req.query !== 'all' && QUERY.concat(specificYear)
    db.query(QUERY, (err, results2) => {
      if (err) {
        return res.send(err)
      } else {
        json.slides = results2
        recordings_query()
      }
    })
  }
  const recordings_query = _ => {
    let QUERY = `SELECT * FROM video_links`
    let specificYear = ` WHERE r_id = (SELECT id FROM review WHERE year = '${year}')`
    req.query !== 'all' && QUERY.concat(specificYear)
    db.query(QUERY, (err, results3) => {
      if (err) {
        return res.send(err)
      } else {
        json.recordings = results3
        return res.send({data: json})
      }
    })
  }
  review_query()
})

review.post('/update', (req, res) => {
  const {id, year, text} = req.body
  let QUERY = `
    UPDATE events
    SET 
      year = '${year}', 
      text =  '${text}'
    WHERE id = ${id}
  `
  db.query(QUERY, (err, results) => {
    if (err) res.send(err);
    return res.json(results);
  });
})

review.post("/newRecording", (req, res) => {
  const {id, link, name, r_id} = req.body
  let QUERY = `
    INSERT INTO 'video_links' (id, link, name, r_id)
    VALUES (${id}, ${link}, ${name}, ${r_id})
  `
  db.query(QUERY, (err, results) => {
    if (err) res.send(err);
    return res.json(results);
  });
})

review.post("/newImage", (req, res) => {
  const {id, title, caption, r_id} = req.body
  let QUERY = `
    INSERT INTO images (id, title, caption, r_id) 
    VALUES (${id}, ${title}, ${caption}, ${r_id})
  `
  db.query(QUERY, (err, results) => {
    if (err) res.send(err);
    return res.json(results);
  });
})

review.post("/deleteRecording", (req, res) => {
  const {id} = req.body
  let QUERY = `
    DELETE FROM 'video_links'
    WHERE id = ${id}
  `
  db.query(QUERY, (err, results) => {
    if (err) res.send(err);
    return res.json(results);
  });
})

review.post("/deleteImage", (req, res) => {
  const {id} = req.body
  let QUERY = `
    DELETE FROM 'images'
    WHERE id = ${id}
  `
  db.query(QUERY, (err, results) => {
    if (err) res.send(err);
    return res.json(results);
  });
})

module.exports = review