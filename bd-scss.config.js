/** @type {import('bd-scss/lib/config').Config} */
export default {
    fileName: 'amoled-cord',
    baseImport: 'https://luckfire.github.io/amoled-cord-revised/src/amoled-cord.css',
	meta: {
        name: 'AMOLED-Cord',
        author: 'LuckFire',
        version: '4.0.0',
        description: 'A basically pitch black theme for Discord. Lights out, baby!',
        source: 'https://github.com/LuckFire/amoled-cord-revised',
        invite: 'vYdXbEzqDs',
        authorId: '399416615742996480'
	},
    dist: {
        target: 'src/source.scss',
        output: 'clients'
    },
    base: {
        target: 'src/source.scss',
        output: 'src'
    },
    dev: {
        target: 'src/source.scss',
        output: 'C:\\Users\\coltb\\AppData\\Roaming\\BetterDiscord\\themes'
    },
    addons: [
        ['./src/addons/_discolored.scss', './src/addons/discolored.css']
    ]
};