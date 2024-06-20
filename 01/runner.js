var CronJob = require('cron').CronJob;
const request = require('superagent-use')(require('superagent'));


/* 
    aqui configuramos un scheduled job q corre a cada segundo y ejecuta la funcion main
    dicha funcion hace un http get a la pagina de google.com y logueamos el resultado

    Aqui aprendemos como requerir liberias externas

    Las cuales instalamos a traves del comando 

    npm install cron
    npm install superagent
    npm install superagent-use

    esto nos genero un package.json y un package-lock.json 
    en el package.json se listan las dependencias de nuestro projectos 
    el package-lock.json contiene las versiones lockeadas q queremos q conservar cada vez q hacemos npm install

    Tambien vemos como se genero la carpeta node_modules q adentro esta todo el codigo de las dependencias externas q tenemos


*/

const job = CronJob.from({
	cronTime: '* * * * * *',
	onTick: main,
	start: true,
	timeZone: 'America/Los_Angeles'
});


async function main() {
    console.log('You will see this message every second');

    let res = await request.get(
        `www.google.com`
    )

    console.log("Res from google",res.text)
}