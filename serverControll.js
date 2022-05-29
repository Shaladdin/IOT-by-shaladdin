// common var
const { db, ask, style } = require('./common.js');


// class for each command line
class cmd {
	constructor(name, desc, func) {
		this.name = name;
		this.func = func;
		this.desc = desc;
	}
}


const serverControll = {
	//the turn on and off
	isIdle: true,



	commands: [

		new cmd("clearAccount", 'clear all account for debuggin', async () => {
			if(ask(`${style.blue(`Confirmation needed:`)} ${style.red(`You are about to delete all account data, are you sure about this?`)} ${style.green('(Y/N)')}`).toLowerCase() == 'y'){
				// clear all account data
				console.log(await db.get((await db.list('user:'))[1]));
				}
		}),

		new cmd('cls', 'clearTerminal', async () => { console.clear(); })
	],



	init: () => {
		console.log('serverControll activated.');
		process.stdin.on('data', input => {
			input = input.toString().trim();
			if (input == '') return;
			if (serverControll.isIdle) {
				var cmndFound = false;
				serverControll.commands.forEach(commnd => {
					if (commnd.name == input) {
						serverControll.isIdle = false;
						commnd.func();
						serverControll.isIdle = true;
						cmndFound = true;
					}
				});if(!cmndFound) console.log(
					`${style.yellow(`no command matched: `)}${style.red.underline(input)}
${style.green(`if you need help enter the command`)} ${style.blue.underline(`'help'`)}`)
			}
		});
	}
}



module.exports = serverControll;