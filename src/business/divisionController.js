let main = (factors) => {
    factors = factors.reduce((previous, current) => previous/current);
    factors = roundNumber(factors, decimalsNumber);
    if (factors) {
        return {code:  httpOk, body: {result: factors}};
    } else {
        log.error('divisionController /','semantics errors were found');
        return {code:  httpUnprocessableEntity, body: {message: 'Check request, semantics errors were found'}};
    }
};

module.exports = { main };