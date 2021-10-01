const mapper = new Map();
mapper.set('fdr_posted', 'Posted');
mapper.set('return_fdr_sent', 'Returned');
mapper.set('scheduled', 'Scheduled');
mapper.set('treasury_prepared', 'Pending');
mapper.set('treasury_processed', 'Pending');
mapper.set('fdr_prepared', 'Pending');
mapper.set('fdr_sent', 'Pending');
mapper.set('fdr_posted', 'Posted');
mapper.set('return_fdr_prepared', 'Returned');
mapper.set('return_fdr_posted', 'Returned');
mapper.set('canceled', 'Canceled');

module.exports = {
	mapper
}