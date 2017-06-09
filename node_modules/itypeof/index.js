var getClassName = function(klass) {
  var funcNameRegex = /function (.{1,})\(/;
   var results = (funcNameRegex).exec((klass).constructor.toString());
   return (results && results.length > 1) ? results[1] : "";
}
var itypeof = function(val){
  return Object.prototype.toString.call(val).replace(/(\[|object|\s|\])/g, '').toLowerCase();
}
module.exports = function (val, strict) {
  var resultType = itypeof(val);
  if(strict === true && resultType === 'object' ){
    var result = getClassName(val);
    if(result !== 'Object'){ return result };
    return result.toLowerCase();
  }
  return resultType;
};
