export default {		
 paymentDetails: async () => {
		//use async-await or promises
	 await storeValue('payment',payments_table.selectedRow);
	 await get_payments.run();
	 storeValue('tab','Sales');
	 showModal('payments_modal');
	},
	updatePayment:()=>{
		update_payment.run()
		.then (()=>closeModal('payment_update_modal'))
		.then(()=>get_payments.run())
	}
}