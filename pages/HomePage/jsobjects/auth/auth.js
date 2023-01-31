export default {
	
	signIn: ()=>{
		return user_signin.run()
		.then(data=>{
			delete data.user;
			Object.keys(data).forEach(i=>{
				storeValue(i,data[i]);
			});
			})
		.then(()=>navigateTo('HomePage'));
	
},
	continue: async () => {
		//use async-await or promises
		if (!appsmith.URL.fullPath.includes('#access_token')) return;
		appsmith.URL.fullPath.split('#')[1].split('&').forEach(i=>{
			const [key, value]=i.split('=');
			storeValue(key,value);
		});
		navigateTo('HomePage');
	},
	logout : ()=>{
		Object.keys(appsmith.store)
		.map(key => storeValue(key, undefined));
		navigateTo('logInPage');
	}
}