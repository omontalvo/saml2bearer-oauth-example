var fs = require('fs');
var colors = require('colors');

const defaultConfg = {
		security: {
			privateKeyPath: './certs/server-key.pem',
			certificatePath: './certs/server-crt.pem'
		},
		pureCloud: {
			environment: 'login.usw2.pure.cloud',
			orgName: 'omontalvodev',
			clientId: 'a8b20ecf-c2f9-4858-9210-5268a6ddc846',
			clientSecret: 'tvXDuoGPHM3rZiVksd5VpUNONsbkcTGp62p-yCs7JFU'
		},
		disableHttp: false,
		httpPort: 8000,
		disableHttps: false,
		httpsPort: 8443
	};

function loadConfig() {
	var configFilePath = './config.json';

	try {
		// Throws error if file doesn't exist
		fs.statSync(configFilePath);
	} catch(err) {
		// Write the default config
		console.log('Writing default config file to ' + configFilePath + ' Please edit it to configure this server!'.bold);
		fs.writeFileSync(configFilePath, JSON.stringify(defaultConfg, null, 2));
	}

	try {
		// Read and parse
		var configRaw = fs.readFileSync(configFilePath, 'UTF-8');
		var config =  JSON.parse(configRaw);

		if (JSON.stringify(config) == JSON.stringify(defaultConfg))
			console.log(('[WARNING] Using default config file. THIS WILL NOT WORK CORRECTLY! Edit the file at ' + configFilePath).yellow.bold);

		return config;
	} catch(err) {
		console.log(('[ERROR] Error loading config from ' + configFilePath + '! Server cannot be configured!').red.bold)
		throw err;
	}
	console.log(clientId);
}

module.exports = loadConfig();
