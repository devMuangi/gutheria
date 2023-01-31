export default {
	addCustomer: async ()=>{
		const CID = this.generateRandom();
		await add_customer_details.run({id:CID});
		await fetch_customers.run();
		await resetWidget('add_customer_modal');
		return closeModal('add_customer_modal');
	},
	generateRandom:()=>{
		return '_' + Math.random().toString(36).substr(2,9);
		}

}