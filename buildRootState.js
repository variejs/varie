// TODO - this has to be replaced with generics
const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const rootStateDirectory = './storage/framework';

let store = {};
let imports = [];

if (!fs.existsSync(rootStateDirectory)) {
	fs.mkdirSync(rootStateDirectory);
}

/*
 |--------------------------------------------------------------------------
 | Build the root state to a TS file
 |--------------------------------------------------------------------------
 |
 */

buildStore();

writeToFile(_.uniq(imports).join('\n'), 'writeFile');

writeToFile('\n\nexport default interface rootState { \n');

_.each(store, (data, store) => {
	writeRootStore(data, store);
});

writeToFile('\n}');

/*
 |--------------------------------------------------------------------------
 | Functions to build the store
 |--------------------------------------------------------------------------
 |
 */

function writeRootStore(data, storeName) {
	writeToFile(
		`
  ${storeName.replace('-', '_')} : {
    ${buildTypings(data)}
  } 
`
	);
}

function buildTypings(store) {
	let typings = store.typings;
	_.each(store.modules, (data, storeName) => {
		if (typings === undefined) {
			typings = '';
		}

		typings =
			typings +
			`
  ${storeName.replace('-', '_')} : { 
    ${buildTypings(data)}
  }
`;
	});

	return typings;
}

function buildStore() {
	findFiles('app/store', /.*stateInterface\.ts/, filename => {
		createStore(
			store,
			getNamespace(filename),
			fs.readFileSync(`./${filename}`, 'utf-8')
		);
	});

	findFiles('framework', /.*stateInterface\.ts/, filename => {
		let namespace = getNamespace(filename);
		namespace.unshift('_ui_framework');
		createStore(store, namespace, fs.readFileSync(`./${filename}`, 'utf-8'));
	});
}

function createStore(tempStore, namespaces, data) {
	if (namespaces.length > 1) {
		let namespace = namespaces.shift();
		if (!tempStore[namespace]) {
			tempStore[namespace] = {
				data: null,
				modules: {},
			};
		}
		return createStore(tempStore[namespace].modules, namespaces, data);
	}

	if (!tempStore[namespaces[0]]) {
		tempStore[namespaces[0]] = {
			data: null,
		};
	}

	_.each(data.match(/(import.*)/g), match => {
		imports.push(match);
	});

	tempStore[namespaces[0]].typings = data.match(/{([\s\S]*)}/)[1];
}

function getNamespace(filename) {
	let namespace = filename
		.replace(/^\.\//, '')
		.replace(/index\.ts/, '')
		.replace(/\/$/, '')
		.replace(/modules\//g, '')
		.replace('app/store/', '')
		.replace('app/framework/', '')
		.split('/');

	namespace = namespace.slice(namespace.indexOf('store') + 1);
	namespace.splice(-1);

	return namespace;
}

function writeToFile(data, action = 'appendFile') {
	fs[action + 'Sync'](`${rootStateDirectory}/rootState.ts`, data, function(
		error
	) {
		if (error) {
			console.info(error);
		}
	});
}

function findFiles(startPath, filter, callback) {
	let files = fs.readdirSync(startPath);

	for (let i = 0; i < files.length; i++) {
		let filename = path.join(startPath, files[i]);
		let stat = fs.lstatSync(filename);
		if (stat.isDirectory()) {
			findFiles(filename, filter, callback);
		} else if (filter.test(filename)) {
			return callback(filename);
		}
	}
}
