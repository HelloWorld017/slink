const express = require('express');
const links = require('./links.json');

const app = express();
const port = parseInt(process.env.PORT || '3008');

app.get('/:link', (req, res) => {
	const link = req.params.link;
	if(links.hasOwnProperty(link)) {
		res.redirect(links[link]);
		return;
	}

	res.status(404).send('404 Not Found T_T');
});

app.use((err, req, res, next) => {
	res.status(500).send('500ISE T_T');
});

app.listen(port);
console.log("Listening!");

