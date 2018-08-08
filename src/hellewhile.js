/**
 *An awesome while loop implementation for promises.
 *
 * @module hellewhile
 */

/**
 * Predicate function to be applied to the results of the asyncFunc.
 * @function predicate
 * @param {*} results - results returned from the asyncFn
 * @param {Object|null} context - the context object, null if not passed in.
 * @returns {Boolean} if true, ends the loop.
 */

/**
 * Asynchronous function to loop over.
 * @function asyncFn
 * @param {Object|null} context - the context object, null if not passed in.
 * @returns {Promise<*>} results of the asynchronous call
 */

/**
 * While loop implementation for an asynchronous function.
 * @param {asyncFn} asyncFn - the asynchronous function run with the context object.
 * @param {predicate} predicate - the predicate function to be used as the while loop conditional.
 * @param {Object} [context=null] - optional context object to be passed into the asyncFn and predicate functions.
 * @param {String} [tracker=null] - optional property to be set on the context object that will store the results of each individual asyncFn call.
 */
export const hellewhile = (
  asyncFn,
  predicate,
  context = null,
  tracker = null
) => {
  if (context && tracker && !context[tracker]) {
    context = Object.assign({}, context, { [tracker]: [] });
  }

  return asyncFn(context).then(res => {
    if (context && tracker) {
      context[tracker] = [...context[tracker], res];
    }

    return predicate(res, context)
      ? Promise.resolve(context)
      : hellewhile(asyncFn, predicate, context, tracker);
  });
};

export default hellewhile;
