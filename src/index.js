import Query from "./query.js";
import Condition from "./condition.js";
import Serializer from "./serializer.js";


export var query = new Query();

export function equals(a, b) {
  return new Condition('eq', a, b);
}

export function notEquals(a, b) {
  return new Condition('neq', a, b);
}

export function present(a) {
  return new Condition('present', a);
}

export function fromJSON(json) {
  return Serializer.fromJSON(Query.__schema, json);
}

