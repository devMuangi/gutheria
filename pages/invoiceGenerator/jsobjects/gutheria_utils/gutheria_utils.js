export default {
	getData:()=>({
		customerName:appsmith.URL.queryParams.NAME,
		designation:appsmith.URL.queryParams.DESIGNATION,
		amount:appsmith.URL.queryParams.AMOUNT,
		prepDate:moment().format('LL'),
		expDate:moment().add('month',1).format('LL')
	}),
	renderPdf:async () => {
         await render_pdf.run(
              () => {
                 storeValue("renderId", render_pdf.data.data);
                 }
        )
        showAlert("Success, Store value set: " + appsmith.store.data);
    }

}