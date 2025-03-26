(async () => {
  const __vite__wasmUrl = "/elm-rust-tutorial/www/dist/assets/elm_rust_tutorial_bg-DumdhX1S.wasm";
  const __vite__initWasm = async (opts = {}, url) => {
    let result;
    if (url.startsWith("data:")) {
      const urlContent = url.replace(/^data:.*?base64,/, "");
      let bytes;
      if (typeof Buffer === "function" && typeof Buffer.from === "function") {
        bytes = Buffer.from(urlContent, "base64");
      } else if (typeof atob === "function") {
        const binaryString = atob(urlContent);
        bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
      } else {
        throw new Error("Cannot decode base64-encoded data URL");
      }
      result = await WebAssembly.instantiate(bytes, opts);
    } else {
      const response = await fetch(url);
      const contentType = response.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && contentType.startsWith("application/wasm")) {
        result = await WebAssembly.instantiateStreaming(response, opts);
      } else {
        const buffer = await response.arrayBuffer();
        result = await WebAssembly.instantiate(buffer, opts);
      }
    }
    return result.instance.exports;
  };
  URL = globalThis.URL;
  const __vite__wasmModule = await __vite__initWasm({}, __vite__wasmUrl);
  const memory = __vite__wasmModule.memory;
  const fibonacci$1 = __vite__wasmModule.fibonacci;
  const wasm$1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    fibonacci: fibonacci$1,
    memory
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  let wasm;
  function __wbg_set_wasm(val) {
    wasm = val;
  }
  function fibonacci(nth) {
    const ret = wasm.fibonacci(nth);
    return ret;
  }
  __wbg_set_wasm(wasm$1);
  (function(scope) {
    function F(arity, fun, wrapper) {
      wrapper.a = arity;
      wrapper.f = fun;
      return wrapper;
    }
    function F2(fun) {
      return F(2, fun, function(a) {
        return function(b) {
          return fun(a, b);
        };
      });
    }
    function F3(fun) {
      return F(3, fun, function(a) {
        return function(b) {
          return function(c) {
            return fun(a, b, c);
          };
        };
      });
    }
    function F4(fun) {
      return F(4, fun, function(a) {
        return function(b) {
          return function(c) {
            return function(d) {
              return fun(a, b, c, d);
            };
          };
        };
      });
    }
    function F5(fun) {
      return F(5, fun, function(a) {
        return function(b) {
          return function(c) {
            return function(d) {
              return function(e) {
                return fun(a, b, c, d, e);
              };
            };
          };
        };
      });
    }
    function F6(fun) {
      return F(6, fun, function(a) {
        return function(b) {
          return function(c) {
            return function(d) {
              return function(e) {
                return function(f) {
                  return fun(a, b, c, d, e, f);
                };
              };
            };
          };
        };
      });
    }
    function F7(fun) {
      return F(7, fun, function(a) {
        return function(b) {
          return function(c) {
            return function(d) {
              return function(e) {
                return function(f) {
                  return function(g) {
                    return fun(a, b, c, d, e, f, g);
                  };
                };
              };
            };
          };
        };
      });
    }
    function F8(fun) {
      return F(8, fun, function(a) {
        return function(b) {
          return function(c) {
            return function(d) {
              return function(e) {
                return function(f) {
                  return function(g) {
                    return function(h) {
                      return fun(a, b, c, d, e, f, g, h);
                    };
                  };
                };
              };
            };
          };
        };
      });
    }
    function F9(fun) {
      return F(9, fun, function(a) {
        return function(b) {
          return function(c) {
            return function(d) {
              return function(e) {
                return function(f) {
                  return function(g) {
                    return function(h) {
                      return function(i) {
                        return fun(a, b, c, d, e, f, g, h, i);
                      };
                    };
                  };
                };
              };
            };
          };
        };
      });
    }
    function A2(fun, a, b) {
      return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
    }
    function A3(fun, a, b, c) {
      return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
    }
    function A4(fun, a, b, c, d) {
      return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
    }
    function A5(fun, a, b, c, d, e) {
      return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
    }
    function A6(fun, a, b, c, d, e, f) {
      return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
    }
    function A7(fun, a, b, c, d, e, f, g) {
      return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
    }
    function A8(fun, a, b, c, d, e, f, g, h) {
      return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
    }
    function _Utils_eq(x, y) {
      for (var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)) {
      }
      return isEqual;
    }
    function _Utils_eqHelp(x, y, depth, stack) {
      if (x === y) {
        return true;
      }
      if (typeof x !== "object" || x === null || y === null) {
        typeof x === "function" && _Debug_crash(5);
        return false;
      }
      if (depth > 100) {
        stack.push(_Utils_Tuple2(x, y));
        return true;
      }
      if (x.$ < 0) {
        x = $elm$core$Dict$toList(x);
        y = $elm$core$Dict$toList(y);
      }
      for (var key in x) {
        if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack)) {
          return false;
        }
      }
      return true;
    }
    F2(_Utils_eq);
    F2(function(a, b) {
      return !_Utils_eq(a, b);
    });
    function _Utils_cmp(x, y, ord) {
      if (typeof x !== "object") {
        return x === y ? 0 : x < y ? -1 : 1;
      }
      if (typeof x.$ === "undefined") {
        return (ord = _Utils_cmp(x.a, y.a)) ? ord : (ord = _Utils_cmp(x.b, y.b)) ? ord : _Utils_cmp(x.c, y.c);
      }
      for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {
      }
      return ord || (x.b ? 1 : y.b ? -1 : 0);
    }
    F2(function(a, b) {
      return _Utils_cmp(a, b) < 0;
    });
    F2(function(a, b) {
      return _Utils_cmp(a, b) < 1;
    });
    F2(function(a, b) {
      return _Utils_cmp(a, b) > 0;
    });
    F2(function(a, b) {
      return _Utils_cmp(a, b) >= 0;
    });
    F2(function(x, y) {
      var n = _Utils_cmp(x, y);
      return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
    });
    var _Utils_Tuple0 = 0;
    function _Utils_Tuple2(a, b) {
      return {
        a,
        b
      };
    }
    function _Utils_chr(c) {
      return c;
    }
    function _Utils_update(oldRecord, updatedFields) {
      var newRecord = {};
      for (var key in oldRecord) {
        newRecord[key] = oldRecord[key];
      }
      for (var key in updatedFields) {
        newRecord[key] = updatedFields[key];
      }
      return newRecord;
    }
    F2(_Utils_ap);
    function _Utils_ap(xs, ys) {
      if (typeof xs === "string") {
        return xs + ys;
      }
      if (!xs.b) {
        return ys;
      }
      var root = _List_Cons(xs.a, ys);
      xs = xs.b;
      for (var curr = root; xs.b; xs = xs.b) {
        curr = curr.b = _List_Cons(xs.a, ys);
      }
      return root;
    }
    var _List_Nil = {
      $: 0
    };
    function _List_Cons(hd, tl) {
      return {
        $: 1,
        a: hd,
        b: tl
      };
    }
    var _List_cons = F2(_List_Cons);
    function _List_fromArray(arr) {
      var out = _List_Nil;
      for (var i = arr.length; i--; ) {
        out = _List_Cons(arr[i], out);
      }
      return out;
    }
    function _List_toArray(xs) {
      for (var out = []; xs.b; xs = xs.b) {
        out.push(xs.a);
      }
      return out;
    }
    var _List_map2 = F3(function(f, xs, ys) {
      for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) {
        arr.push(A2(f, xs.a, ys.a));
      }
      return _List_fromArray(arr);
    });
    F4(function(f, xs, ys, zs) {
      for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) {
        arr.push(A3(f, xs.a, ys.a, zs.a));
      }
      return _List_fromArray(arr);
    });
    F5(function(f, ws, xs, ys, zs) {
      for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
        arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
      }
      return _List_fromArray(arr);
    });
    F6(function(f, vs, ws, xs, ys, zs) {
      for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
        arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
      }
      return _List_fromArray(arr);
    });
    F2(function(f, xs) {
      return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
        return _Utils_cmp(f(a), f(b));
      }));
    });
    F2(function(f, xs) {
      return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
        var ord = A2(f, a, b);
        return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
      }));
    });
    var _JsArray_empty = [];
    function _JsArray_length(array) {
      return array.length;
    }
    var _JsArray_initialize = F3(function(size, offset, func) {
      var result = new Array(size);
      for (var i = 0; i < size; i++) {
        result[i] = func(offset + i);
      }
      return result;
    });
    var _JsArray_initializeFromList = F2(function(max, ls) {
      var result = new Array(max);
      for (var i = 0; i < max && ls.b; i++) {
        result[i] = ls.a;
        ls = ls.b;
      }
      result.length = i;
      return _Utils_Tuple2(result, ls);
    });
    F2(function(index, array) {
      return array[index];
    });
    F3(function(index, value, array) {
      var length = array.length;
      var result = new Array(length);
      for (var i = 0; i < length; i++) {
        result[i] = array[i];
      }
      result[index] = value;
      return result;
    });
    F2(function(value, array) {
      var length = array.length;
      var result = new Array(length + 1);
      for (var i = 0; i < length; i++) {
        result[i] = array[i];
      }
      result[length] = value;
      return result;
    });
    F3(function(func, acc, array) {
      var length = array.length;
      for (var i = 0; i < length; i++) {
        acc = A2(func, array[i], acc);
      }
      return acc;
    });
    var _JsArray_foldr = F3(function(func, acc, array) {
      for (var i = array.length - 1; i >= 0; i--) {
        acc = A2(func, array[i], acc);
      }
      return acc;
    });
    F2(function(func, array) {
      var length = array.length;
      var result = new Array(length);
      for (var i = 0; i < length; i++) {
        result[i] = func(array[i]);
      }
      return result;
    });
    F3(function(func, offset, array) {
      var length = array.length;
      var result = new Array(length);
      for (var i = 0; i < length; i++) {
        result[i] = A2(func, offset + i, array[i]);
      }
      return result;
    });
    F3(function(from, to, array) {
      return array.slice(from, to);
    });
    F3(function(n, dest, source) {
      var destLen = dest.length;
      var itemsToCopy = n - destLen;
      if (itemsToCopy > source.length) {
        itemsToCopy = source.length;
      }
      var size = destLen + itemsToCopy;
      var result = new Array(size);
      for (var i = 0; i < destLen; i++) {
        result[i] = dest[i];
      }
      for (var i = 0; i < itemsToCopy; i++) {
        result[i + destLen] = source[i];
      }
      return result;
    });
    F2(function(tag, value) {
      return value;
    });
    F2(function(tag, value) {
      console.log(tag + ": " + _Debug_toString());
      return value;
    });
    function _Debug_toString(value) {
      return "<internals>";
    }
    function _Debug_crash(identifier) {
      throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md");
    }
    F2(function(a, b) {
      return a + b;
    });
    F2(function(a, b) {
      return a - b;
    });
    F2(function(a, b) {
      return a * b;
    });
    F2(function(a, b) {
      return a / b;
    });
    F2(function(a, b) {
      return a / b | 0;
    });
    F2(Math.pow);
    F2(function(b, a) {
      return a % b;
    });
    F2(function(modulus, x) {
      var answer = x % modulus;
      return modulus === 0 ? _Debug_crash(11) : answer > 0 && modulus < 0 || answer < 0 && modulus > 0 ? answer + modulus : answer;
    });
    F2(Math.atan2);
    var _Basics_ceiling = Math.ceil;
    var _Basics_floor = Math.floor;
    var _Basics_log = Math.log;
    F2(function(a, b) {
      return a && b;
    });
    F2(function(a, b) {
      return a || b;
    });
    F2(function(a, b) {
      return a !== b;
    });
    F2(function(chr, str) {
      return chr + str;
    });
    function _String_uncons(string) {
      var word = string.charCodeAt(0);
      return !isNaN(word) ? $elm$core$Maybe$Just(55296 <= word && word <= 56319 ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2)) : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))) : $elm$core$Maybe$Nothing;
    }
    F2(function(a, b) {
      return a + b;
    });
    function _String_length(str) {
      return str.length;
    }
    F2(function(func, string) {
      var len = string.length;
      var array = new Array(len);
      var i = 0;
      while (i < len) {
        var word = string.charCodeAt(i);
        if (55296 <= word && word <= 56319) {
          array[i] = func(_Utils_chr(string[i] + string[i + 1]));
          i += 2;
          continue;
        }
        array[i] = func(_Utils_chr(string[i]));
        i++;
      }
      return array.join("");
    });
    F2(function(isGood, str) {
      var arr = [];
      var len = str.length;
      var i = 0;
      while (i < len) {
        var char = str[i];
        var word = str.charCodeAt(i);
        i++;
        if (55296 <= word && word <= 56319) {
          char += str[i];
          i++;
        }
        if (isGood(_Utils_chr(char))) {
          arr.push(char);
        }
      }
      return arr.join("");
    });
    F3(function(func, state, string) {
      var len = string.length;
      var i = 0;
      while (i < len) {
        var char = string[i];
        var word = string.charCodeAt(i);
        i++;
        if (55296 <= word && word <= 56319) {
          char += string[i];
          i++;
        }
        state = A2(func, _Utils_chr(char), state);
      }
      return state;
    });
    F3(function(func, state, string) {
      var i = string.length;
      while (i--) {
        var char = string[i];
        var word = string.charCodeAt(i);
        if (56320 <= word && word <= 57343) {
          i--;
          char = string[i] + char;
        }
        state = A2(func, _Utils_chr(char), state);
      }
      return state;
    });
    var _String_split = F2(function(sep, str) {
      return str.split(sep);
    });
    var _String_join = F2(function(sep, strs) {
      return strs.join(sep);
    });
    var _String_slice = F3(function(start, end, str) {
      return str.slice(start, end);
    });
    F2(function(isGood, string) {
      var i = string.length;
      while (i--) {
        var char = string[i];
        var word = string.charCodeAt(i);
        if (56320 <= word && word <= 57343) {
          i--;
          char = string[i] + char;
        }
        if (isGood(_Utils_chr(char))) {
          return true;
        }
      }
      return false;
    });
    var _String_all = F2(function(isGood, string) {
      var i = string.length;
      while (i--) {
        var char = string[i];
        var word = string.charCodeAt(i);
        if (56320 <= word && word <= 57343) {
          i--;
          char = string[i] + char;
        }
        if (!isGood(_Utils_chr(char))) {
          return false;
        }
      }
      return true;
    });
    var _String_contains = F2(function(sub, str) {
      return str.indexOf(sub) > -1;
    });
    F2(function(sub, str) {
      return str.indexOf(sub) === 0;
    });
    F2(function(sub, str) {
      return str.length >= sub.length && str.lastIndexOf(sub) === str.length - sub.length;
    });
    var _String_indexes = F2(function(sub, str) {
      var subLen = sub.length;
      if (subLen < 1) {
        return _List_Nil;
      }
      var i = 0;
      var is = [];
      while ((i = str.indexOf(sub, i)) > -1) {
        is.push(i);
        i = i + subLen;
      }
      return _List_fromArray(is);
    });
    function _String_fromNumber(number) {
      return number + "";
    }
    function _String_toInt(str) {
      var total = 0;
      var code0 = str.charCodeAt(0);
      var start = code0 == 43 || code0 == 45 ? 1 : 0;
      for (var i = start; i < str.length; ++i) {
        var code = str.charCodeAt(i);
        if (code < 48 || 57 < code) {
          return $elm$core$Maybe$Nothing;
        }
        total = 10 * total + code - 48;
      }
      return i == start ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(code0 == 45 ? -total : total);
    }
    function _Char_toCode(char) {
      var code = char.charCodeAt(0);
      if (55296 <= code && code <= 56319) {
        return (code - 55296) * 1024 + char.charCodeAt(1) - 56320 + 65536;
      }
      return code;
    }
    function _Json_succeed(msg) {
      return {
        $: 0,
        a: msg
      };
    }
    function _Json_decodePrim(decoder) {
      return {
        $: 2,
        b: decoder
      };
    }
    var _Json_decodeInt = _Json_decodePrim(function(value) {
      return typeof value !== "number" ? _Json_expecting("an INT", value) : -2147483647 < value && value < 2147483647 && (value | 0) === value ? $elm$core$Result$Ok(value) : isFinite(value) && !(value % 1) ? $elm$core$Result$Ok(value) : _Json_expecting("an INT", value);
    });
    F2(function(field, decoder) {
      return {
        $: 6,
        d: field,
        b: decoder
      };
    });
    F2(function(index, decoder) {
      return {
        $: 7,
        e: index,
        b: decoder
      };
    });
    function _Json_mapMany(f, decoders) {
      return {
        $: 9,
        f,
        g: decoders
      };
    }
    F2(function(callback, decoder) {
      return {
        $: 10,
        b: decoder,
        h: callback
      };
    });
    var _Json_map1 = F2(function(f, d1) {
      return _Json_mapMany(f, [
        d1
      ]);
    });
    var _Json_map2 = F3(function(f, d1, d2) {
      return _Json_mapMany(f, [
        d1,
        d2
      ]);
    });
    F4(function(f, d1, d2, d3) {
      return _Json_mapMany(f, [
        d1,
        d2,
        d3
      ]);
    });
    F5(function(f, d1, d2, d3, d4) {
      return _Json_mapMany(f, [
        d1,
        d2,
        d3,
        d4
      ]);
    });
    F6(function(f, d1, d2, d3, d4, d5) {
      return _Json_mapMany(f, [
        d1,
        d2,
        d3,
        d4,
        d5
      ]);
    });
    F7(function(f, d1, d2, d3, d4, d5, d6) {
      return _Json_mapMany(f, [
        d1,
        d2,
        d3,
        d4,
        d5,
        d6
      ]);
    });
    F8(function(f, d1, d2, d3, d4, d5, d6, d7) {
      return _Json_mapMany(f, [
        d1,
        d2,
        d3,
        d4,
        d5,
        d6,
        d7
      ]);
    });
    F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8) {
      return _Json_mapMany(f, [
        d1,
        d2,
        d3,
        d4,
        d5,
        d6,
        d7,
        d8
      ]);
    });
    F2(function(decoder, string) {
      try {
        var value = JSON.parse(string);
        return _Json_runHelp(decoder, value);
      } catch (e) {
        return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "This is not valid JSON! " + e.message, _Json_wrap(string)));
      }
    });
    var _Json_run = F2(function(decoder, value) {
      return _Json_runHelp(decoder, _Json_unwrap(value));
    });
    function _Json_runHelp(decoder, value) {
      switch (decoder.$) {
        case 2:
          return decoder.b(value);
        case 5:
          return value === null ? $elm$core$Result$Ok(decoder.c) : _Json_expecting("null", value);
        case 3:
          if (!_Json_isArray(value)) {
            return _Json_expecting("a LIST", value);
          }
          return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);
        case 4:
          if (!_Json_isArray(value)) {
            return _Json_expecting("an ARRAY", value);
          }
          return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);
        case 6:
          var field = decoder.d;
          if (typeof value !== "object" || value === null || !(field in value)) {
            return _Json_expecting("an OBJECT with a field named `" + field + "`", value);
          }
          var result = _Json_runHelp(decoder.b, value[field]);
          return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));
        case 7:
          var index = decoder.e;
          if (!_Json_isArray(value)) {
            return _Json_expecting("an ARRAY", value);
          }
          if (index >= value.length) {
            return _Json_expecting("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
          }
          var result = _Json_runHelp(decoder.b, value[index]);
          return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));
        case 8:
          if (typeof value !== "object" || value === null || _Json_isArray(value)) {
            return _Json_expecting("an OBJECT", value);
          }
          var keyValuePairs = _List_Nil;
          for (var key in value) {
            if (value.hasOwnProperty(key)) {
              var result = _Json_runHelp(decoder.b, value[key]);
              if (!$elm$core$Result$isOk(result)) {
                return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
              }
              keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
            }
          }
          return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));
        case 9:
          var answer = decoder.f;
          var decoders = decoder.g;
          for (var i = 0; i < decoders.length; i++) {
            var result = _Json_runHelp(decoders[i], value);
            if (!$elm$core$Result$isOk(result)) {
              return result;
            }
            answer = answer(result.a);
          }
          return $elm$core$Result$Ok(answer);
        case 10:
          var result = _Json_runHelp(decoder.b, value);
          return !$elm$core$Result$isOk(result) ? result : _Json_runHelp(decoder.h(result.a), value);
        case 11:
          var errors = _List_Nil;
          for (var temp = decoder.g; temp.b; temp = temp.b) {
            var result = _Json_runHelp(temp.a, value);
            if ($elm$core$Result$isOk(result)) {
              return result;
            }
            errors = _List_Cons(result.a, errors);
          }
          return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));
        case 1:
          return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));
        case 0:
          return $elm$core$Result$Ok(decoder.a);
      }
    }
    function _Json_runArrayDecoder(decoder, value, toElmValue) {
      var len = value.length;
      var array = new Array(len);
      for (var i = 0; i < len; i++) {
        var result = _Json_runHelp(decoder, value[i]);
        if (!$elm$core$Result$isOk(result)) {
          return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
        }
        array[i] = result.a;
      }
      return $elm$core$Result$Ok(toElmValue(array));
    }
    function _Json_isArray(value) {
      return Array.isArray(value) || typeof FileList !== "undefined" && value instanceof FileList;
    }
    function _Json_toElmArray(array) {
      return A2($elm$core$Array$initialize, array.length, function(i) {
        return array[i];
      });
    }
    function _Json_expecting(type, value) {
      return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "Expecting " + type, _Json_wrap(value)));
    }
    function _Json_equality(x, y) {
      if (x === y) {
        return true;
      }
      if (x.$ !== y.$) {
        return false;
      }
      switch (x.$) {
        case 0:
        case 1:
          return x.a === y.a;
        case 2:
          return x.b === y.b;
        case 5:
          return x.c === y.c;
        case 3:
        case 4:
        case 8:
          return _Json_equality(x.b, y.b);
        case 6:
          return x.d === y.d && _Json_equality(x.b, y.b);
        case 7:
          return x.e === y.e && _Json_equality(x.b, y.b);
        case 9:
          return x.f === y.f && _Json_listEquality(x.g, y.g);
        case 10:
          return x.h === y.h && _Json_equality(x.b, y.b);
        case 11:
          return _Json_listEquality(x.g, y.g);
      }
    }
    function _Json_listEquality(aDecoders, bDecoders) {
      var len = aDecoders.length;
      if (len !== bDecoders.length) {
        return false;
      }
      for (var i = 0; i < len; i++) {
        if (!_Json_equality(aDecoders[i], bDecoders[i])) {
          return false;
        }
      }
      return true;
    }
    var _Json_encode = F2(function(indentLevel, value) {
      return JSON.stringify(_Json_unwrap(value), null, indentLevel) + "";
    });
    function _Json_wrap(value) {
      return value;
    }
    function _Json_unwrap(value) {
      return value;
    }
    F3(function(key, value, object) {
      object[key] = _Json_unwrap(value);
      return object;
    });
    function _Scheduler_succeed(value) {
      return {
        $: 0,
        a: value
      };
    }
    function _Scheduler_fail(error) {
      return {
        $: 1,
        a: error
      };
    }
    function _Scheduler_binding(callback) {
      return {
        $: 2,
        b: callback,
        c: null
      };
    }
    var _Scheduler_andThen = F2(function(callback, task) {
      return {
        $: 3,
        b: callback,
        d: task
      };
    });
    F2(function(callback, task) {
      return {
        $: 4,
        b: callback,
        d: task
      };
    });
    function _Scheduler_receive(callback) {
      return {
        $: 5,
        b: callback
      };
    }
    var _Scheduler_guid = 0;
    function _Scheduler_rawSpawn(task) {
      var proc = {
        $: 0,
        e: _Scheduler_guid++,
        f: task,
        g: null,
        h: []
      };
      _Scheduler_enqueue(proc);
      return proc;
    }
    function _Scheduler_spawn(task) {
      return _Scheduler_binding(function(callback) {
        callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
      });
    }
    function _Scheduler_rawSend(proc, msg) {
      proc.h.push(msg);
      _Scheduler_enqueue(proc);
    }
    var _Scheduler_send = F2(function(proc, msg) {
      return _Scheduler_binding(function(callback) {
        _Scheduler_rawSend(proc, msg);
        callback(_Scheduler_succeed(_Utils_Tuple0));
      });
    });
    var _Scheduler_working = false;
    var _Scheduler_queue = [];
    function _Scheduler_enqueue(proc) {
      _Scheduler_queue.push(proc);
      if (_Scheduler_working) {
        return;
      }
      _Scheduler_working = true;
      while (proc = _Scheduler_queue.shift()) {
        _Scheduler_step(proc);
      }
      _Scheduler_working = false;
    }
    function _Scheduler_step(proc) {
      while (proc.f) {
        var rootTag = proc.f.$;
        if (rootTag === 0 || rootTag === 1) {
          while (proc.g && proc.g.$ !== rootTag) {
            proc.g = proc.g.i;
          }
          if (!proc.g) {
            return;
          }
          proc.f = proc.g.b(proc.f.a);
          proc.g = proc.g.i;
        } else if (rootTag === 2) {
          proc.f.c = proc.f.b(function(newRoot) {
            proc.f = newRoot;
            _Scheduler_enqueue(proc);
          });
          return;
        } else if (rootTag === 5) {
          if (proc.h.length === 0) {
            return;
          }
          proc.f = proc.f.b(proc.h.shift());
        } else {
          proc.g = {
            $: rootTag === 3 ? 0 : 1,
            b: proc.f.b,
            i: proc.g
          };
          proc.f = proc.f.d;
        }
      }
    }
    function _Process_sleep(time) {
      return _Scheduler_binding(function(callback) {
        var id = setTimeout(function() {
          callback(_Scheduler_succeed(_Utils_Tuple0));
        }, time);
        return function() {
          clearTimeout(id);
        };
      });
    }
    F4(function(impl, flagDecoder, debugMetadata, args) {
      return _Platform_initialize(flagDecoder, args, impl.av, impl.aD, impl.aB, function() {
        return function() {
        };
      });
    });
    function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
      var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args["flags"] : void 0));
      $elm$core$Result$isOk(result) || _Debug_crash(2);
      var managers = {};
      var initPair = init(result.a);
      var model = initPair.a;
      var stepper = stepperBuilder(sendToApp, model);
      var ports = _Platform_setupEffects(managers, sendToApp);
      function sendToApp(msg, viewMetadata) {
        var pair = A2(update, msg, model);
        stepper(model = pair.a, viewMetadata);
        _Platform_enqueueEffects(managers, pair.b, subscriptions(model));
      }
      _Platform_enqueueEffects(managers, initPair.b, subscriptions(model));
      return ports ? {
        ports
      } : {};
    }
    var _Platform_effectManagers = {};
    function _Platform_setupEffects(managers, sendToApp) {
      var ports;
      for (var key in _Platform_effectManagers) {
        var manager = _Platform_effectManagers[key];
        if (manager.a) {
          ports = ports || {};
          ports[key] = manager.a(key, sendToApp);
        }
        managers[key] = _Platform_instantiateManager(manager, sendToApp);
      }
      return ports;
    }
    function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
      return {
        b: init,
        c: onEffects,
        d: onSelfMsg,
        e: cmdMap,
        f: subMap
      };
    }
    function _Platform_instantiateManager(info, sendToApp) {
      var router = {
        g: sendToApp,
        h: void 0
      };
      var onEffects = info.c;
      var onSelfMsg = info.d;
      var cmdMap = info.e;
      var subMap = info.f;
      function loop(state) {
        return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg) {
          var value = msg.a;
          if (msg.$ === 0) {
            return A3(onSelfMsg, router, value, state);
          }
          return cmdMap && subMap ? A4(onEffects, router, value.i, value.j, state) : A3(onEffects, router, cmdMap ? value.i : value.j, state);
        }));
      }
      return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
    }
    var _Platform_sendToApp = F2(function(router, msg) {
      return _Scheduler_binding(function(callback) {
        router.g(msg);
        callback(_Scheduler_succeed(_Utils_Tuple0));
      });
    });
    F2(function(router, msg) {
      return A2(_Scheduler_send, router.h, {
        $: 0,
        a: msg
      });
    });
    function _Platform_leaf(home) {
      return function(value) {
        return {
          $: 1,
          k: home,
          l: value
        };
      };
    }
    function _Platform_batch(list) {
      return {
        $: 2,
        m: list
      };
    }
    F2(function(tagger, bag) {
      return {
        $: 3,
        n: tagger,
        o: bag
      };
    });
    var _Platform_effectsQueue = [];
    var _Platform_effectsActive = false;
    function _Platform_enqueueEffects(managers, cmdBag, subBag) {
      _Platform_effectsQueue.push({
        p: managers,
        q: cmdBag,
        r: subBag
      });
      if (_Platform_effectsActive) return;
      _Platform_effectsActive = true;
      for (var fx; fx = _Platform_effectsQueue.shift(); ) {
        _Platform_dispatchEffects(fx.p, fx.q, fx.r);
      }
      _Platform_effectsActive = false;
    }
    function _Platform_dispatchEffects(managers, cmdBag, subBag) {
      var effectsDict = {};
      _Platform_gatherEffects(true, cmdBag, effectsDict, null);
      _Platform_gatherEffects(false, subBag, effectsDict, null);
      for (var home in managers) {
        _Scheduler_rawSend(managers[home], {
          $: "fx",
          a: effectsDict[home] || {
            i: _List_Nil,
            j: _List_Nil
          }
        });
      }
    }
    function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
      switch (bag.$) {
        case 1:
          var home = bag.k;
          var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
          effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
          return;
        case 2:
          for (var list = bag.m; list.b; list = list.b) {
            _Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
          }
          return;
        case 3:
          _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
            s: bag.n,
            t: taggers
          });
          return;
      }
    }
    function _Platform_toEffect(isCmd, home, taggers, value) {
      function applyTaggers(x) {
        for (var temp = taggers; temp; temp = temp.t) {
          x = temp.s(x);
        }
        return x;
      }
      var map = isCmd ? _Platform_effectManagers[home].e : _Platform_effectManagers[home].f;
      return A2(map, applyTaggers, value);
    }
    function _Platform_insert(isCmd, newEffect, effects) {
      effects = effects || {
        i: _List_Nil,
        j: _List_Nil
      };
      isCmd ? effects.i = _List_Cons(newEffect, effects.i) : effects.j = _List_Cons(newEffect, effects.j);
      return effects;
    }
    function _Platform_checkPortName(name) {
      if (_Platform_effectManagers[name]) {
        _Debug_crash(3);
      }
    }
    function _Platform_outgoingPort(name, converter) {
      _Platform_checkPortName(name);
      _Platform_effectManagers[name] = {
        e: _Platform_outgoingPortMap,
        u: converter,
        a: _Platform_setupOutgoingPort
      };
      return _Platform_leaf(name);
    }
    var _Platform_outgoingPortMap = F2(function(tagger, value) {
      return value;
    });
    function _Platform_setupOutgoingPort(name) {
      var subs = [];
      var converter = _Platform_effectManagers[name].u;
      var init = _Process_sleep(0);
      _Platform_effectManagers[name].b = init;
      _Platform_effectManagers[name].c = F3(function(router, cmdList, state) {
        for (; cmdList.b; cmdList = cmdList.b) {
          var currentSubs = subs;
          var value = _Json_unwrap(converter(cmdList.a));
          for (var i = 0; i < currentSubs.length; i++) {
            currentSubs[i](value);
          }
        }
        return init;
      });
      function subscribe(callback) {
        subs.push(callback);
      }
      function unsubscribe(callback) {
        subs = subs.slice();
        var index = subs.indexOf(callback);
        if (index >= 0) {
          subs.splice(index, 1);
        }
      }
      return {
        subscribe,
        unsubscribe
      };
    }
    function _Platform_incomingPort(name, converter) {
      _Platform_checkPortName(name);
      _Platform_effectManagers[name] = {
        f: _Platform_incomingPortMap,
        u: converter,
        a: _Platform_setupIncomingPort
      };
      return _Platform_leaf(name);
    }
    var _Platform_incomingPortMap = F2(function(tagger, finalTagger) {
      return function(value) {
        return tagger(finalTagger(value));
      };
    });
    function _Platform_setupIncomingPort(name, sendToApp) {
      var subs = _List_Nil;
      var converter = _Platform_effectManagers[name].u;
      var init = _Scheduler_succeed(null);
      _Platform_effectManagers[name].b = init;
      _Platform_effectManagers[name].c = F3(function(router, subList, state) {
        subs = subList;
        return init;
      });
      function send(incomingValue) {
        var result = A2(_Json_run, converter, _Json_wrap(incomingValue));
        $elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);
        var value = result.a;
        for (var temp = subs; temp.b; temp = temp.b) {
          sendToApp(temp.a(value));
        }
      }
      return {
        send
      };
    }
    function _Platform_export(exports) {
      scope["Elm"] ? _Platform_mergeExportsProd(scope["Elm"], exports) : scope["Elm"] = exports;
    }
    function _Platform_mergeExportsProd(obj, exports) {
      for (var name in exports) {
        name in obj ? name == "init" ? _Debug_crash(6) : _Platform_mergeExportsProd(obj[name], exports[name]) : obj[name] = exports[name];
      }
    }
    var _VirtualDom_divertHrefToApp;
    var _VirtualDom_doc = typeof document !== "undefined" ? document : {};
    function _VirtualDom_appendChild(parent, child) {
      parent.appendChild(child);
    }
    F4(function(virtualNode, flagDecoder, debugMetadata, args) {
      var node = args["node"];
      node.parentNode.replaceChild(_VirtualDom_render(virtualNode, function() {
      }), node);
      return {};
    });
    function _VirtualDom_text(string) {
      return {
        $: 0,
        a: string
      };
    }
    var _VirtualDom_nodeNS = F2(function(namespace, tag) {
      return F2(function(factList, kidList) {
        for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) {
          var kid = kidList.a;
          descendantsCount += kid.b || 0;
          kids.push(kid);
        }
        descendantsCount += kids.length;
        return {
          $: 1,
          c: tag,
          d: _VirtualDom_organizeFacts(factList),
          e: kids,
          f: namespace,
          b: descendantsCount
        };
      });
    });
    var _VirtualDom_node = _VirtualDom_nodeNS(void 0);
    var _VirtualDom_keyedNodeNS = F2(function(namespace, tag) {
      return F2(function(factList, kidList) {
        for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) {
          var kid = kidList.a;
          descendantsCount += kid.b.b || 0;
          kids.push(kid);
        }
        descendantsCount += kids.length;
        return {
          $: 2,
          c: tag,
          d: _VirtualDom_organizeFacts(factList),
          e: kids,
          f: namespace,
          b: descendantsCount
        };
      });
    });
    _VirtualDom_keyedNodeNS(void 0);
    F2(function(tagger, node) {
      return {
        $: 4,
        j: tagger,
        k: node,
        b: 1 + (node.b || 0)
      };
    });
    function _VirtualDom_thunk(refs, thunk) {
      return {
        $: 5,
        l: refs,
        m: thunk,
        k: void 0
      };
    }
    F2(function(func, a) {
      return _VirtualDom_thunk([
        func,
        a
      ], function() {
        return func(a);
      });
    });
    F3(function(func, a, b) {
      return _VirtualDom_thunk([
        func,
        a,
        b
      ], function() {
        return A2(func, a, b);
      });
    });
    F4(function(func, a, b, c) {
      return _VirtualDom_thunk([
        func,
        a,
        b,
        c
      ], function() {
        return A3(func, a, b, c);
      });
    });
    F5(function(func, a, b, c, d) {
      return _VirtualDom_thunk([
        func,
        a,
        b,
        c,
        d
      ], function() {
        return A4(func, a, b, c, d);
      });
    });
    F6(function(func, a, b, c, d, e) {
      return _VirtualDom_thunk([
        func,
        a,
        b,
        c,
        d,
        e
      ], function() {
        return A5(func, a, b, c, d, e);
      });
    });
    F7(function(func, a, b, c, d, e, f) {
      return _VirtualDom_thunk([
        func,
        a,
        b,
        c,
        d,
        e,
        f
      ], function() {
        return A6(func, a, b, c, d, e, f);
      });
    });
    F8(function(func, a, b, c, d, e, f, g) {
      return _VirtualDom_thunk([
        func,
        a,
        b,
        c,
        d,
        e,
        f,
        g
      ], function() {
        return A7(func, a, b, c, d, e, f, g);
      });
    });
    F9(function(func, a, b, c, d, e, f, g, h) {
      return _VirtualDom_thunk([
        func,
        a,
        b,
        c,
        d,
        e,
        f,
        g,
        h
      ], function() {
        return A8(func, a, b, c, d, e, f, g, h);
      });
    });
    var _VirtualDom_on = F2(function(key, handler) {
      return {
        $: "a0",
        n: key,
        o: handler
      };
    });
    var _VirtualDom_style = F2(function(key, value) {
      return {
        $: "a1",
        n: key,
        o: value
      };
    });
    F2(function(key, value) {
      return {
        $: "a2",
        n: key,
        o: value
      };
    });
    var _VirtualDom_attribute = F2(function(key, value) {
      return {
        $: "a3",
        n: key,
        o: value
      };
    });
    F3(function(namespace, key, value) {
      return {
        $: "a4",
        n: key,
        o: {
          f: namespace,
          o: value
        }
      };
    });
    F2(function(func, attr) {
      return attr.$ === "a0" ? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o)) : attr;
    });
    function _VirtualDom_mapHandler(func, handler) {
      var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);
      return {
        $: handler.$,
        a: !tag ? A2($elm$json$Json$Decode$map, func, handler.a) : A3($elm$json$Json$Decode$map2, tag < 3 ? _VirtualDom_mapEventTuple : _VirtualDom_mapEventRecord, $elm$json$Json$Decode$succeed(func), handler.a)
      };
    }
    var _VirtualDom_mapEventTuple = F2(function(func, tuple) {
      return _Utils_Tuple2(func(tuple.a), tuple.b);
    });
    var _VirtualDom_mapEventRecord = F2(function(func, record) {
      return {
        p: func(record.p),
        L: record.L,
        I: record.I
      };
    });
    function _VirtualDom_organizeFacts(factList) {
      for (var facts = {}; factList.b; factList = factList.b) {
        var entry = factList.a;
        var tag = entry.$;
        var key = entry.n;
        var value = entry.o;
        if (tag === "a2") {
          key === "className" ? _VirtualDom_addClass(facts, key, _Json_unwrap(value)) : facts[key] = _Json_unwrap(value);
          continue;
        }
        var subFacts = facts[tag] || (facts[tag] = {});
        tag === "a3" && key === "class" ? _VirtualDom_addClass(subFacts, key, value) : subFacts[key] = value;
      }
      return facts;
    }
    function _VirtualDom_addClass(object, key, newClass) {
      var classes = object[key];
      object[key] = classes ? classes + " " + newClass : newClass;
    }
    function _VirtualDom_render(vNode, eventNode) {
      var tag = vNode.$;
      if (tag === 5) {
        return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
      }
      if (tag === 0) {
        return _VirtualDom_doc.createTextNode(vNode.a);
      }
      if (tag === 4) {
        var subNode = vNode.k;
        var tagger = vNode.j;
        while (subNode.$ === 4) {
          typeof tagger !== "object" ? tagger = [
            tagger,
            subNode.j
          ] : tagger.push(subNode.j);
          subNode = subNode.k;
        }
        var subEventRoot = {
          j: tagger,
          p: eventNode
        };
        var domNode = _VirtualDom_render(subNode, subEventRoot);
        domNode.elm_event_node_ref = subEventRoot;
        return domNode;
      }
      if (tag === 3) {
        var domNode = vNode.h(vNode.g);
        _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
        return domNode;
      }
      var domNode = vNode.f ? _VirtualDom_doc.createElementNS(vNode.f, vNode.c) : _VirtualDom_doc.createElement(vNode.c);
      if (_VirtualDom_divertHrefToApp && vNode.c == "a") {
        domNode.addEventListener("click", _VirtualDom_divertHrefToApp(domNode));
      }
      _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
      for (var kids = vNode.e, i = 0; i < kids.length; i++) {
        _VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
      }
      return domNode;
    }
    function _VirtualDom_applyFacts(domNode, eventNode, facts) {
      for (var key in facts) {
        var value = facts[key];
        key === "a1" ? _VirtualDom_applyStyles(domNode, value) : key === "a0" ? _VirtualDom_applyEvents(domNode, eventNode, value) : key === "a3" ? _VirtualDom_applyAttrs(domNode, value) : key === "a4" ? _VirtualDom_applyAttrsNS(domNode, value) : (key !== "value" && key !== "checked" || domNode[key] !== value) && (domNode[key] = value);
      }
    }
    function _VirtualDom_applyStyles(domNode, styles) {
      var domNodeStyle = domNode.style;
      for (var key in styles) {
        domNodeStyle[key] = styles[key];
      }
    }
    function _VirtualDom_applyAttrs(domNode, attrs) {
      for (var key in attrs) {
        var value = attrs[key];
        typeof value !== "undefined" ? domNode.setAttribute(key, value) : domNode.removeAttribute(key);
      }
    }
    function _VirtualDom_applyAttrsNS(domNode, nsAttrs) {
      for (var key in nsAttrs) {
        var pair = nsAttrs[key];
        var namespace = pair.f;
        var value = pair.o;
        typeof value !== "undefined" ? domNode.setAttributeNS(namespace, key, value) : domNode.removeAttributeNS(namespace, key);
      }
    }
    function _VirtualDom_applyEvents(domNode, eventNode, events) {
      var allCallbacks = domNode.elmFs || (domNode.elmFs = {});
      for (var key in events) {
        var newHandler = events[key];
        var oldCallback = allCallbacks[key];
        if (!newHandler) {
          domNode.removeEventListener(key, oldCallback);
          allCallbacks[key] = void 0;
          continue;
        }
        if (oldCallback) {
          var oldHandler = oldCallback.q;
          if (oldHandler.$ === newHandler.$) {
            oldCallback.q = newHandler;
            continue;
          }
          domNode.removeEventListener(key, oldCallback);
        }
        oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
        domNode.addEventListener(key, oldCallback, _VirtualDom_passiveSupported && {
          passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2
        });
        allCallbacks[key] = oldCallback;
      }
    }
    var _VirtualDom_passiveSupported;
    try {
      window.addEventListener("t", null, Object.defineProperty({}, "passive", {
        get: function() {
          _VirtualDom_passiveSupported = true;
        }
      }));
    } catch (e) {
    }
    function _VirtualDom_makeCallback(eventNode, initialHandler) {
      function callback(event) {
        var handler = callback.q;
        var result = _Json_runHelp(handler.a, event);
        if (!$elm$core$Result$isOk(result)) {
          return;
        }
        var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);
        var value = result.a;
        var message = !tag ? value : tag < 3 ? value.a : value.p;
        var stopPropagation = tag == 1 ? value.b : tag == 3 && value.L;
        var currentEventNode = (stopPropagation && event.stopPropagation(), (tag == 2 ? value.b : tag == 3 && value.I) && event.preventDefault(), eventNode);
        var tagger;
        var i;
        while (tagger = currentEventNode.j) {
          if (typeof tagger == "function") {
            message = tagger(message);
          } else {
            for (var i = tagger.length; i--; ) {
              message = tagger[i](message);
            }
          }
          currentEventNode = currentEventNode.p;
        }
        currentEventNode(message, stopPropagation);
      }
      callback.q = initialHandler;
      return callback;
    }
    function _VirtualDom_equalEvents(x, y) {
      return x.$ == y.$ && _Json_equality(x.a, y.a);
    }
    function _VirtualDom_diff(x, y) {
      var patches = [];
      _VirtualDom_diffHelp(x, y, patches, 0);
      return patches;
    }
    function _VirtualDom_pushPatch(patches, type, index, data) {
      var patch = {
        $: type,
        r: index,
        s: data,
        t: void 0,
        u: void 0
      };
      patches.push(patch);
      return patch;
    }
    function _VirtualDom_diffHelp(x, y, patches, index) {
      if (x === y) {
        return;
      }
      var xType = x.$;
      var yType = y.$;
      if (xType !== yType) {
        if (xType === 1 && yType === 2) {
          y = _VirtualDom_dekey(y);
          yType = 1;
        } else {
          _VirtualDom_pushPatch(patches, 0, index, y);
          return;
        }
      }
      switch (yType) {
        case 5:
          var xRefs = x.l;
          var yRefs = y.l;
          var i = xRefs.length;
          var same = i === yRefs.length;
          while (same && i--) {
            same = xRefs[i] === yRefs[i];
          }
          if (same) {
            y.k = x.k;
            return;
          }
          y.k = y.m();
          var subPatches = [];
          _VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
          subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
          return;
        case 4:
          var xTaggers = x.j;
          var yTaggers = y.j;
          var nesting = false;
          var xSubNode = x.k;
          while (xSubNode.$ === 4) {
            nesting = true;
            typeof xTaggers !== "object" ? xTaggers = [
              xTaggers,
              xSubNode.j
            ] : xTaggers.push(xSubNode.j);
            xSubNode = xSubNode.k;
          }
          var ySubNode = y.k;
          while (ySubNode.$ === 4) {
            nesting = true;
            typeof yTaggers !== "object" ? yTaggers = [
              yTaggers,
              ySubNode.j
            ] : yTaggers.push(ySubNode.j);
            ySubNode = ySubNode.k;
          }
          if (nesting && xTaggers.length !== yTaggers.length) {
            _VirtualDom_pushPatch(patches, 0, index, y);
            return;
          }
          if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers) {
            _VirtualDom_pushPatch(patches, 2, index, yTaggers);
          }
          _VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
          return;
        case 0:
          if (x.a !== y.a) {
            _VirtualDom_pushPatch(patches, 3, index, y.a);
          }
          return;
        case 1:
          _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
          return;
        case 2:
          _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
          return;
        case 3:
          if (x.h !== y.h) {
            _VirtualDom_pushPatch(patches, 0, index, y);
            return;
          }
          var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
          factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
          var patch = y.i(x.g, y.g);
          patch && _VirtualDom_pushPatch(patches, 5, index, patch);
          return;
      }
    }
    function _VirtualDom_pairwiseRefEqual(as, bs) {
      for (var i = 0; i < as.length; i++) {
        if (as[i] !== bs[i]) {
          return false;
        }
      }
      return true;
    }
    function _VirtualDom_diffNodes(x, y, patches, index, diffKids) {
      if (x.c !== y.c || x.f !== y.f) {
        _VirtualDom_pushPatch(patches, 0, index, y);
        return;
      }
      var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
      factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
      diffKids(x, y, patches, index);
    }
    function _VirtualDom_diffFacts(x, y, category) {
      var diff;
      for (var xKey in x) {
        if (xKey === "a1" || xKey === "a0" || xKey === "a3" || xKey === "a4") {
          var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
          if (subDiff) {
            diff = diff || {};
            diff[xKey] = subDiff;
          }
          continue;
        }
        if (!(xKey in y)) {
          diff = diff || {};
          diff[xKey] = !category ? typeof x[xKey] === "string" ? "" : null : category === "a1" ? "" : category === "a0" || category === "a3" ? void 0 : {
            f: x[xKey].f,
            o: void 0
          };
          continue;
        }
        var xValue = x[xKey];
        var yValue = y[xKey];
        if (xValue === yValue && xKey !== "value" && xKey !== "checked" || category === "a0" && _VirtualDom_equalEvents(xValue, yValue)) {
          continue;
        }
        diff = diff || {};
        diff[xKey] = yValue;
      }
      for (var yKey in y) {
        if (!(yKey in x)) {
          diff = diff || {};
          diff[yKey] = y[yKey];
        }
      }
      return diff;
    }
    function _VirtualDom_diffKids(xParent, yParent, patches, index) {
      var xKids = xParent.e;
      var yKids = yParent.e;
      var xLen = xKids.length;
      var yLen = yKids.length;
      if (xLen > yLen) {
        _VirtualDom_pushPatch(patches, 6, index, {
          v: yLen,
          i: xLen - yLen
        });
      } else if (xLen < yLen) {
        _VirtualDom_pushPatch(patches, 7, index, {
          v: xLen,
          e: yKids
        });
      }
      for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++) {
        var xKid = xKids[i];
        _VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
        index += xKid.b || 0;
      }
    }
    function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex) {
      var localPatches = [];
      var changes = {};
      var inserts = [];
      var xKids = xParent.e;
      var yKids = yParent.e;
      var xLen = xKids.length;
      var yLen = yKids.length;
      var xIndex = 0;
      var yIndex = 0;
      var index = rootIndex;
      while (xIndex < xLen && yIndex < yLen) {
        var x = xKids[xIndex];
        var y = yKids[yIndex];
        var xKey = x.a;
        var yKey = y.a;
        var xNode = x.b;
        var yNode = y.b;
        var newMatch = void 0;
        var oldMatch = void 0;
        if (xKey === yKey) {
          index++;
          _VirtualDom_diffHelp(xNode, yNode, localPatches, index);
          index += xNode.b || 0;
          xIndex++;
          yIndex++;
          continue;
        }
        var xNext = xKids[xIndex + 1];
        var yNext = yKids[yIndex + 1];
        if (xNext) {
          var xNextKey = xNext.a;
          var xNextNode = xNext.b;
          oldMatch = yKey === xNextKey;
        }
        if (yNext) {
          var yNextKey = yNext.a;
          var yNextNode = yNext.b;
          newMatch = xKey === yNextKey;
        }
        if (newMatch && oldMatch) {
          index++;
          _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
          _VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
          index += xNode.b || 0;
          index++;
          _VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
          index += xNextNode.b || 0;
          xIndex += 2;
          yIndex += 2;
          continue;
        }
        if (newMatch) {
          index++;
          _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
          _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
          index += xNode.b || 0;
          xIndex += 1;
          yIndex += 2;
          continue;
        }
        if (oldMatch) {
          index++;
          _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
          index += xNode.b || 0;
          index++;
          _VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
          index += xNextNode.b || 0;
          xIndex += 2;
          yIndex += 1;
          continue;
        }
        if (xNext && xNextKey === yNextKey) {
          index++;
          _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
          _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
          index += xNode.b || 0;
          index++;
          _VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
          index += xNextNode.b || 0;
          xIndex += 2;
          yIndex += 2;
          continue;
        }
        break;
      }
      while (xIndex < xLen) {
        index++;
        var x = xKids[xIndex];
        var xNode = x.b;
        _VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
        index += xNode.b || 0;
        xIndex++;
      }
      while (yIndex < yLen) {
        var endInserts = endInserts || [];
        var y = yKids[yIndex];
        _VirtualDom_insertNode(changes, localPatches, y.a, y.b, void 0, endInserts);
        yIndex++;
      }
      if (localPatches.length > 0 || inserts.length > 0 || endInserts) {
        _VirtualDom_pushPatch(patches, 8, rootIndex, {
          w: localPatches,
          x: inserts,
          y: endInserts
        });
      }
    }
    var _VirtualDom_POSTFIX = "_elmW6BL";
    function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts) {
      var entry = changes[key];
      if (!entry) {
        entry = {
          c: 0,
          z: vnode,
          r: yIndex,
          s: void 0
        };
        inserts.push({
          r: yIndex,
          A: entry
        });
        changes[key] = entry;
        return;
      }
      if (entry.c === 1) {
        inserts.push({
          r: yIndex,
          A: entry
        });
        entry.c = 2;
        var subPatches = [];
        _VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
        entry.r = yIndex;
        entry.s.s = {
          w: subPatches,
          A: entry
        };
        return;
      }
      _VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
    }
    function _VirtualDom_removeNode(changes, localPatches, key, vnode, index) {
      var entry = changes[key];
      if (!entry) {
        var patch = _VirtualDom_pushPatch(localPatches, 9, index, void 0);
        changes[key] = {
          c: 1,
          z: vnode,
          r: index,
          s: patch
        };
        return;
      }
      if (entry.c === 0) {
        entry.c = 2;
        var subPatches = [];
        _VirtualDom_diffHelp(vnode, entry.z, subPatches, index);
        _VirtualDom_pushPatch(localPatches, 9, index, {
          w: subPatches,
          A: entry
        });
        return;
      }
      _VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
    }
    function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode) {
      _VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
    }
    function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode) {
      var patch = patches[i];
      var index = patch.r;
      while (index === low) {
        var patchType = patch.$;
        if (patchType === 1) {
          _VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
        } else if (patchType === 8) {
          patch.t = domNode;
          patch.u = eventNode;
          var subPatches = patch.s.w;
          if (subPatches.length > 0) {
            _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
          }
        } else if (patchType === 9) {
          patch.t = domNode;
          patch.u = eventNode;
          var data = patch.s;
          if (data) {
            data.A.s = domNode;
            var subPatches = data.w;
            if (subPatches.length > 0) {
              _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
            }
          }
        } else {
          patch.t = domNode;
          patch.u = eventNode;
        }
        i++;
        if (!(patch = patches[i]) || (index = patch.r) > high) {
          return i;
        }
      }
      var tag = vNode.$;
      if (tag === 4) {
        var subNode = vNode.k;
        while (subNode.$ === 4) {
          subNode = subNode.k;
        }
        return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
      }
      var vKids = vNode.e;
      var childNodes = domNode.childNodes;
      for (var j = 0; j < vKids.length; j++) {
        low++;
        var vKid = tag === 1 ? vKids[j] : vKids[j].b;
        var nextLow = low + (vKid.b || 0);
        if (low <= index && index <= nextLow) {
          i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
          if (!(patch = patches[i]) || (index = patch.r) > high) {
            return i;
          }
        }
        low = nextLow;
      }
      return i;
    }
    function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode) {
      if (patches.length === 0) {
        return rootDomNode;
      }
      _VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
      return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
    }
    function _VirtualDom_applyPatchesHelp(rootDomNode, patches) {
      for (var i = 0; i < patches.length; i++) {
        var patch = patches[i];
        var localDomNode = patch.t;
        var newNode = _VirtualDom_applyPatch(localDomNode, patch);
        if (localDomNode === rootDomNode) {
          rootDomNode = newNode;
        }
      }
      return rootDomNode;
    }
    function _VirtualDom_applyPatch(domNode, patch) {
      switch (patch.$) {
        case 0:
          return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);
        case 4:
          _VirtualDom_applyFacts(domNode, patch.u, patch.s);
          return domNode;
        case 3:
          domNode.replaceData(0, domNode.length, patch.s);
          return domNode;
        case 1:
          return _VirtualDom_applyPatchesHelp(domNode, patch.s);
        case 2:
          if (domNode.elm_event_node_ref) {
            domNode.elm_event_node_ref.j = patch.s;
          } else {
            domNode.elm_event_node_ref = {
              j: patch.s,
              p: patch.u
            };
          }
          return domNode;
        case 6:
          var data = patch.s;
          for (var i = 0; i < data.i; i++) {
            domNode.removeChild(domNode.childNodes[data.v]);
          }
          return domNode;
        case 7:
          var data = patch.s;
          var kids = data.e;
          var i = data.v;
          var theEnd = domNode.childNodes[i];
          for (; i < kids.length; i++) {
            domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
          }
          return domNode;
        case 9:
          var data = patch.s;
          if (!data) {
            domNode.parentNode.removeChild(domNode);
            return domNode;
          }
          var entry = data.A;
          if (typeof entry.r !== "undefined") {
            domNode.parentNode.removeChild(domNode);
          }
          entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
          return domNode;
        case 8:
          return _VirtualDom_applyPatchReorder(domNode, patch);
        case 5:
          return patch.s(domNode);
        default:
          _Debug_crash(10);
      }
    }
    function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode) {
      var parentNode = domNode.parentNode;
      var newNode = _VirtualDom_render(vNode, eventNode);
      if (!newNode.elm_event_node_ref) {
        newNode.elm_event_node_ref = domNode.elm_event_node_ref;
      }
      if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode);
      }
      return newNode;
    }
    function _VirtualDom_applyPatchReorder(domNode, patch) {
      var data = patch.s;
      var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);
      domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);
      var inserts = data.x;
      for (var i = 0; i < inserts.length; i++) {
        var insert = inserts[i];
        var entry = insert.A;
        var node = entry.c === 2 ? entry.s : _VirtualDom_render(entry.z, patch.u);
        domNode.insertBefore(node, domNode.childNodes[insert.r]);
      }
      if (frag) {
        _VirtualDom_appendChild(domNode, frag);
      }
      return domNode;
    }
    function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch) {
      if (!endInserts) {
        return;
      }
      var frag = _VirtualDom_doc.createDocumentFragment();
      for (var i = 0; i < endInserts.length; i++) {
        var insert = endInserts[i];
        var entry = insert.A;
        _VirtualDom_appendChild(frag, entry.c === 2 ? entry.s : _VirtualDom_render(entry.z, patch.u));
      }
      return frag;
    }
    function _VirtualDom_virtualize(node) {
      if (node.nodeType === 3) {
        return _VirtualDom_text(node.textContent);
      }
      if (node.nodeType !== 1) {
        return _VirtualDom_text("");
      }
      var attrList = _List_Nil;
      var attrs = node.attributes;
      for (var i = attrs.length; i--; ) {
        var attr = attrs[i];
        var name = attr.name;
        var value = attr.value;
        attrList = _List_Cons(A2(_VirtualDom_attribute, name, value), attrList);
      }
      var tag = node.tagName.toLowerCase();
      var kidList = _List_Nil;
      var kids = node.childNodes;
      for (var i = kids.length; i--; ) {
        kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
      }
      return A3(_VirtualDom_node, tag, attrList, kidList);
    }
    function _VirtualDom_dekey(keyedNode) {
      var keyedKids = keyedNode.e;
      var len = keyedKids.length;
      var kids = new Array(len);
      for (var i = 0; i < len; i++) {
        kids[i] = keyedKids[i].b;
      }
      return {
        $: 1,
        c: keyedNode.c,
        d: keyedNode.d,
        e: kids,
        f: keyedNode.f,
        b: keyedNode.b
      };
    }
    var _Browser_element = F4(function(impl, flagDecoder, debugMetadata, args) {
      return _Platform_initialize(flagDecoder, args, impl.av, impl.aD, impl.aB, function(sendToApp, initialModel) {
        var view = impl.aE;
        var domNode = args["node"];
        var currNode = _VirtualDom_virtualize(domNode);
        return _Browser_makeAnimator(initialModel, function(model) {
          var nextNode = view(model);
          var patches = _VirtualDom_diff(currNode, nextNode);
          domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
          currNode = nextNode;
        });
      });
    });
    F4(function(impl, flagDecoder, debugMetadata, args) {
      return _Platform_initialize(flagDecoder, args, impl.av, impl.aD, impl.aB, function(sendToApp, initialModel) {
        var divertHrefToApp = impl.J && impl.J(sendToApp);
        var view = impl.aE;
        var title = _VirtualDom_doc.title;
        var bodyNode = _VirtualDom_doc.body;
        var currNode = _VirtualDom_virtualize(bodyNode);
        return _Browser_makeAnimator(initialModel, function(model) {
          _VirtualDom_divertHrefToApp = divertHrefToApp;
          var doc = view(model);
          var nextNode = _VirtualDom_node("body")(_List_Nil)(doc.ao);
          var patches = _VirtualDom_diff(currNode, nextNode);
          bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
          currNode = nextNode;
          _VirtualDom_divertHrefToApp = 0;
          title !== doc.aC && (_VirtualDom_doc.title = title = doc.aC);
        });
      });
    });
    var _Browser_requestAnimationFrame = typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : function(callback) {
      return setTimeout(callback, 1e3 / 60);
    };
    function _Browser_makeAnimator(model, draw) {
      draw(model);
      var state = 0;
      function updateIfNeeded() {
        state = state === 1 ? 0 : (_Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1);
      }
      return function(nextModel, isSync) {
        model = nextModel;
        isSync ? (draw(model), state === 2 && (state = 1)) : (state === 0 && _Browser_requestAnimationFrame(updateIfNeeded), state = 2);
      };
    }
    F2(function(key, n) {
      return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
        n && history.go(n);
        key();
      }));
    });
    F2(function(key, url) {
      return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
        history.pushState({}, "", url);
        key();
      }));
    });
    F2(function(key, url) {
      return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
        history.replaceState({}, "", url);
        key();
      }));
    });
    var _Browser_fakeNode = {
      addEventListener: function() {
      },
      removeEventListener: function() {
      }
    };
    var _Browser_window = typeof window !== "undefined" ? window : _Browser_fakeNode;
    F3(function(node, eventName, sendToSelf) {
      return _Scheduler_spawn(_Scheduler_binding(function(callback) {
        function handler(event) {
          _Scheduler_rawSpawn(sendToSelf(event));
        }
        node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && {
          passive: true
        });
        return function() {
          node.removeEventListener(eventName, handler);
        };
      }));
    });
    F2(function(decoder, event) {
      var result = _Json_runHelp(decoder, event);
      return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
    });
    function _Browser_withNode(id, doStuff) {
      return _Scheduler_binding(function(callback) {
        _Browser_requestAnimationFrame(function() {
          var node = document.getElementById(id);
          callback(node ? _Scheduler_succeed(doStuff(node)) : _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id)));
        });
      });
    }
    function _Browser_withWindow(doStuff) {
      return _Scheduler_binding(function(callback) {
        _Browser_requestAnimationFrame(function() {
          callback(_Scheduler_succeed(doStuff()));
        });
      });
    }
    F2(function(functionName, id) {
      return _Browser_withNode(id, function(node) {
        node[functionName]();
        return _Utils_Tuple0;
      });
    });
    F2(function(x, y) {
      return _Browser_withWindow(function() {
        _Browser_window.scroll(x, y);
        return _Utils_Tuple0;
      });
    });
    F3(function(id, x, y) {
      return _Browser_withNode(id, function(node) {
        node.scrollLeft = x;
        node.scrollTop = y;
        return _Utils_Tuple0;
      });
    });
    var $elm$core$Basics$EQ = 1;
    var $elm$core$Basics$GT = 2;
    var $elm$core$Basics$LT = 0;
    var $elm$core$List$cons = _List_cons;
    var $elm$core$Dict$foldr = F3(function(func, acc, t) {
      foldr: while (true) {
        if (t.$ === -2) {
          return acc;
        } else {
          var key = t.b;
          var value = t.c;
          var left = t.d;
          var right = t.e;
          var $temp$func = func, $temp$acc = A3(func, key, value, A3($elm$core$Dict$foldr, func, acc, right)), $temp$t = left;
          func = $temp$func;
          acc = $temp$acc;
          t = $temp$t;
          continue foldr;
        }
      }
    });
    var $elm$core$Dict$toList = function(dict) {
      return A3($elm$core$Dict$foldr, F3(function(key, value, list) {
        return A2($elm$core$List$cons, _Utils_Tuple2(key, value), list);
      }), _List_Nil, dict);
    };
    var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
    F3(function(func, baseCase, _v0) {
      var tree = _v0.c;
      var tail = _v0.d;
      var helper = F2(function(node, acc) {
        if (!node.$) {
          var subTree = node.a;
          return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
        } else {
          var values = node.a;
          return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
        }
      });
      return A3($elm$core$Elm$JsArray$foldr, helper, A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail), tree);
    });
    var $elm$core$Result$Err = function(a) {
      return {
        $: 1,
        a
      };
    };
    var $elm$json$Json$Decode$Failure = F2(function(a, b) {
      return {
        $: 3,
        a,
        b
      };
    });
    var $elm$json$Json$Decode$Field = F2(function(a, b) {
      return {
        $: 0,
        a,
        b
      };
    });
    var $elm$json$Json$Decode$Index = F2(function(a, b) {
      return {
        $: 1,
        a,
        b
      };
    });
    var $elm$core$Result$Ok = function(a) {
      return {
        $: 0,
        a
      };
    };
    var $elm$json$Json$Decode$OneOf = function(a) {
      return {
        $: 2,
        a
      };
    };
    var $elm$core$Maybe$Just = function(a) {
      return {
        $: 0,
        a
      };
    };
    var $elm$core$Maybe$Nothing = {
      $: 1
    };
    var $elm$core$String$all = _String_all;
    var $elm$json$Json$Encode$encode = _Json_encode;
    var $elm$core$String$fromInt = _String_fromNumber;
    var $elm$core$String$join = F2(function(sep, chunks) {
      return A2(_String_join, sep, _List_toArray(chunks));
    });
    var $elm$core$String$split = F2(function(sep, string) {
      return _List_fromArray(A2(_String_split, sep, string));
    });
    var $elm$json$Json$Decode$indent = function(str) {
      return A2($elm$core$String$join, "\n    ", A2($elm$core$String$split, "\n", str));
    };
    var $elm$core$List$foldl = F3(function(func, acc, list) {
      foldl: while (true) {
        if (!list.b) {
          return acc;
        } else {
          var x = list.a;
          var xs = list.b;
          var $temp$func = func, $temp$acc = A2(func, x, acc), $temp$list = xs;
          func = $temp$func;
          acc = $temp$acc;
          list = $temp$list;
          continue foldl;
        }
      }
    });
    var $elm$core$List$length = function(xs) {
      return A3($elm$core$List$foldl, F2(function(_v0, i) {
        return i + 1;
      }), 0, xs);
    };
    var $elm$core$List$map2 = _List_map2;
    var $elm$core$List$rangeHelp = F3(function(lo, hi, list) {
      rangeHelp: while (true) {
        if (_Utils_cmp(lo, hi) < 1) {
          var $temp$lo = lo, $temp$hi = hi - 1, $temp$list = A2($elm$core$List$cons, hi, list);
          lo = $temp$lo;
          hi = $temp$hi;
          list = $temp$list;
          continue rangeHelp;
        } else {
          return list;
        }
      }
    });
    var $elm$core$List$range = F2(function(lo, hi) {
      return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
    });
    var $elm$core$List$indexedMap = F2(function(f, xs) {
      return A3($elm$core$List$map2, f, A2($elm$core$List$range, 0, $elm$core$List$length(xs) - 1), xs);
    });
    var $elm$core$Char$toCode = _Char_toCode;
    var $elm$core$Char$isLower = function(_char) {
      var code = $elm$core$Char$toCode(_char);
      return 97 <= code && code <= 122;
    };
    var $elm$core$Char$isUpper = function(_char) {
      var code = $elm$core$Char$toCode(_char);
      return code <= 90 && 65 <= code;
    };
    var $elm$core$Char$isAlpha = function(_char) {
      return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
    };
    var $elm$core$Char$isDigit = function(_char) {
      var code = $elm$core$Char$toCode(_char);
      return code <= 57 && 48 <= code;
    };
    var $elm$core$Char$isAlphaNum = function(_char) {
      return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
    };
    var $elm$core$List$reverse = function(list) {
      return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
    };
    var $elm$core$String$uncons = _String_uncons;
    var $elm$json$Json$Decode$errorOneOf = F2(function(i, error) {
      return "\n\n(" + ($elm$core$String$fromInt(i + 1) + (") " + $elm$json$Json$Decode$indent($elm$json$Json$Decode$errorToString(error))));
    });
    var $elm$json$Json$Decode$errorToString = function(error) {
      return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
    };
    var $elm$json$Json$Decode$errorToStringHelp = F2(function(error, context) {
      errorToStringHelp: while (true) {
        switch (error.$) {
          case 0:
            var f = error.a;
            var err = error.b;
            var isSimple = function() {
              var _v1 = $elm$core$String$uncons(f);
              if (_v1.$ === 1) {
                return false;
              } else {
                var _v2 = _v1.a;
                var _char = _v2.a;
                var rest = _v2.b;
                return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
              }
            }();
            var fieldName = isSimple ? "." + f : "['" + (f + "']");
            var $temp$error = err, $temp$context = A2($elm$core$List$cons, fieldName, context);
            error = $temp$error;
            context = $temp$context;
            continue errorToStringHelp;
          case 1:
            var i = error.a;
            var err = error.b;
            var indexName = "[" + ($elm$core$String$fromInt(i) + "]");
            var $temp$error = err, $temp$context = A2($elm$core$List$cons, indexName, context);
            error = $temp$error;
            context = $temp$context;
            continue errorToStringHelp;
          case 2:
            var errors = error.a;
            if (!errors.b) {
              return "Ran into a Json.Decode.oneOf with no possibilities" + function() {
                if (!context.b) {
                  return "!";
                } else {
                  return " at json" + A2($elm$core$String$join, "", $elm$core$List$reverse(context));
                }
              }();
            } else {
              if (!errors.b.b) {
                var err = errors.a;
                var $temp$error = err, $temp$context = context;
                error = $temp$error;
                context = $temp$context;
                continue errorToStringHelp;
              } else {
                var starter = function() {
                  if (!context.b) {
                    return "Json.Decode.oneOf";
                  } else {
                    return "The Json.Decode.oneOf at json" + A2($elm$core$String$join, "", $elm$core$List$reverse(context));
                  }
                }();
                var introduction = starter + (" failed in the following " + ($elm$core$String$fromInt($elm$core$List$length(errors)) + " ways:"));
                return A2($elm$core$String$join, "\n\n", A2($elm$core$List$cons, introduction, A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
              }
            }
          default:
            var msg = error.a;
            var json = error.b;
            var introduction = function() {
              if (!context.b) {
                return "Problem with the given value:\n\n";
              } else {
                return "Problem with the value at json" + (A2($elm$core$String$join, "", $elm$core$List$reverse(context)) + ":\n\n    ");
              }
            }();
            return introduction + ($elm$json$Json$Decode$indent(A2($elm$json$Json$Encode$encode, 4, json)) + ("\n\n" + msg));
        }
      }
    });
    var $elm$core$Array$branchFactor = 32;
    var $elm$core$Array$Array_elm_builtin = F4(function(a, b, c, d) {
      return {
        $: 0,
        a,
        b,
        c,
        d
      };
    });
    var $elm$core$Elm$JsArray$empty = _JsArray_empty;
    var $elm$core$Basics$ceiling = _Basics_ceiling;
    var $elm$core$Basics$logBase = F2(function(base, number) {
      return _Basics_log(number) / _Basics_log(base);
    });
    var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
    var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
    var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
    var $elm$core$Array$Leaf = function(a) {
      return {
        $: 1,
        a
      };
    };
    F2(function(f, x) {
      return f(x);
    });
    F2(function(x, f) {
      return f(x);
    });
    var $elm$core$Basics$floor = _Basics_floor;
    var $elm$core$Elm$JsArray$length = _JsArray_length;
    var $elm$core$Basics$max = F2(function(x, y) {
      return _Utils_cmp(x, y) > 0 ? x : y;
    });
    var $elm$core$Array$SubTree = function(a) {
      return {
        $: 0,
        a
      };
    };
    var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
    var $elm$core$Array$compressNodes = F2(function(nodes, acc) {
      compressNodes: while (true) {
        var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
        var node = _v0.a;
        var remainingNodes = _v0.b;
        var newAcc = A2($elm$core$List$cons, $elm$core$Array$SubTree(node), acc);
        if (!remainingNodes.b) {
          return $elm$core$List$reverse(newAcc);
        } else {
          var $temp$nodes = remainingNodes, $temp$acc = newAcc;
          nodes = $temp$nodes;
          acc = $temp$acc;
          continue compressNodes;
        }
      }
    });
    var $elm$core$Array$treeFromBuilder = F2(function(nodeList, nodeListSize) {
      treeFromBuilder: while (true) {
        var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
        if (newNodeSize === 1) {
          return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
        } else {
          var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil), $temp$nodeListSize = newNodeSize;
          nodeList = $temp$nodeList;
          nodeListSize = $temp$nodeListSize;
          continue treeFromBuilder;
        }
      }
    });
    var $elm$core$Array$builderToArray = F2(function(reverseNodeList, builder) {
      if (!builder.a) {
        return A4($elm$core$Array$Array_elm_builtin, $elm$core$Elm$JsArray$length(builder.c), $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, builder.c);
      } else {
        var treeLen = builder.a * $elm$core$Array$branchFactor;
        var depth = $elm$core$Basics$floor(A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
        var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.d) : builder.d;
        var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.a);
        return A4($elm$core$Array$Array_elm_builtin, $elm$core$Elm$JsArray$length(builder.c) + treeLen, A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep), tree, builder.c);
      }
    });
    var $elm$core$Array$initializeHelp = F5(function(fn, fromIndex, len, nodeList, tail) {
      initializeHelp: while (true) {
        if (fromIndex < 0) {
          return A2($elm$core$Array$builderToArray, false, {
            d: nodeList,
            a: len / $elm$core$Array$branchFactor | 0,
            c: tail
          });
        } else {
          var leaf = $elm$core$Array$Leaf(A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
          var $temp$fn = fn, $temp$fromIndex = fromIndex - $elm$core$Array$branchFactor, $temp$len = len, $temp$nodeList = A2($elm$core$List$cons, leaf, nodeList), $temp$tail = tail;
          fn = $temp$fn;
          fromIndex = $temp$fromIndex;
          len = $temp$len;
          nodeList = $temp$nodeList;
          tail = $temp$tail;
          continue initializeHelp;
        }
      }
    });
    var $elm$core$Array$initialize = F2(function(len, fn) {
      if (len <= 0) {
        return $elm$core$Array$empty;
      } else {
        var tailLen = len % $elm$core$Array$branchFactor;
        var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
        var initialFromIndex = len - tailLen - $elm$core$Array$branchFactor;
        return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
      }
    });
    var $elm$core$Result$isOk = function(result) {
      if (!result.$) {
        return true;
      } else {
        return false;
      }
    };
    var $elm$json$Json$Decode$map = _Json_map1;
    var $elm$json$Json$Decode$map2 = _Json_map2;
    var $elm$json$Json$Decode$succeed = _Json_succeed;
    var $elm$virtual_dom$VirtualDom$toHandlerInt = function(handler) {
      switch (handler.$) {
        case 0:
          return 0;
        case 1:
          return 1;
        case 2:
          return 2;
        default:
          return 3;
      }
    };
    var $elm$core$Basics$identity = function(x) {
      return x;
    };
    var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
    var $elm$url$Url$Url = F6(function(protocol, host, port_, path, query, fragment) {
      return {
        R: fragment,
        T: host,
        X: path,
        Z: port_,
        ab: protocol,
        ac: query
      };
    });
    var $elm$core$String$contains = _String_contains;
    var $elm$core$String$length = _String_length;
    var $elm$core$String$slice = _String_slice;
    var $elm$core$String$dropLeft = F2(function(n, string) {
      return n < 1 ? string : A3($elm$core$String$slice, n, $elm$core$String$length(string), string);
    });
    var $elm$core$String$indexes = _String_indexes;
    var $elm$core$String$isEmpty = function(string) {
      return string === "";
    };
    var $elm$core$String$left = F2(function(n, string) {
      return n < 1 ? "" : A3($elm$core$String$slice, 0, n, string);
    });
    var $elm$core$String$toInt = _String_toInt;
    var $elm$url$Url$chompBeforePath = F5(function(protocol, path, params, frag, str) {
      if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, "@", str)) {
        return $elm$core$Maybe$Nothing;
      } else {
        var _v0 = A2($elm$core$String$indexes, ":", str);
        if (!_v0.b) {
          return $elm$core$Maybe$Just(A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
        } else {
          if (!_v0.b.b) {
            var i = _v0.a;
            var _v1 = $elm$core$String$toInt(A2($elm$core$String$dropLeft, i + 1, str));
            if (_v1.$ === 1) {
              return $elm$core$Maybe$Nothing;
            } else {
              var port_ = _v1;
              return $elm$core$Maybe$Just(A6($elm$url$Url$Url, protocol, A2($elm$core$String$left, i, str), port_, path, params, frag));
            }
          } else {
            return $elm$core$Maybe$Nothing;
          }
        }
      }
    });
    var $elm$url$Url$chompBeforeQuery = F4(function(protocol, params, frag, str) {
      if ($elm$core$String$isEmpty(str)) {
        return $elm$core$Maybe$Nothing;
      } else {
        var _v0 = A2($elm$core$String$indexes, "/", str);
        if (!_v0.b) {
          return A5($elm$url$Url$chompBeforePath, protocol, "/", params, frag, str);
        } else {
          var i = _v0.a;
          return A5($elm$url$Url$chompBeforePath, protocol, A2($elm$core$String$dropLeft, i, str), params, frag, A2($elm$core$String$left, i, str));
        }
      }
    });
    var $elm$url$Url$chompBeforeFragment = F3(function(protocol, frag, str) {
      if ($elm$core$String$isEmpty(str)) {
        return $elm$core$Maybe$Nothing;
      } else {
        var _v0 = A2($elm$core$String$indexes, "?", str);
        if (!_v0.b) {
          return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
        } else {
          var i = _v0.a;
          return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Just(A2($elm$core$String$dropLeft, i + 1, str)), frag, A2($elm$core$String$left, i, str));
        }
      }
    });
    F2(function(protocol, str) {
      if ($elm$core$String$isEmpty(str)) {
        return $elm$core$Maybe$Nothing;
      } else {
        var _v0 = A2($elm$core$String$indexes, "#", str);
        if (!_v0.b) {
          return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
        } else {
          var i = _v0.a;
          return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Just(A2($elm$core$String$dropLeft, i + 1, str)), A2($elm$core$String$left, i, str));
        }
      }
    });
    var $elm$core$Basics$never = function(_v0) {
    };
    var $elm$core$Task$succeed = _Scheduler_succeed;
    var $elm$core$Task$init = $elm$core$Task$succeed(0);
    var $elm$core$List$foldrHelper = F4(function(fn, acc, ctr, ls) {
      if (!ls.b) {
        return acc;
      } else {
        var a = ls.a;
        var r1 = ls.b;
        if (!r1.b) {
          return A2(fn, a, acc);
        } else {
          var b = r1.a;
          var r2 = r1.b;
          if (!r2.b) {
            return A2(fn, a, A2(fn, b, acc));
          } else {
            var c = r2.a;
            var r3 = r2.b;
            if (!r3.b) {
              return A2(fn, a, A2(fn, b, A2(fn, c, acc)));
            } else {
              var d = r3.a;
              var r4 = r3.b;
              var res = ctr > 500 ? A3($elm$core$List$foldl, fn, acc, $elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
              return A2(fn, a, A2(fn, b, A2(fn, c, A2(fn, d, res))));
            }
          }
        }
      }
    });
    var $elm$core$List$foldr = F3(function(fn, acc, ls) {
      return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
    });
    var $elm$core$List$map = F2(function(f, xs) {
      return A3($elm$core$List$foldr, F2(function(x, acc) {
        return A2($elm$core$List$cons, f(x), acc);
      }), _List_Nil, xs);
    });
    var $elm$core$Task$andThen = _Scheduler_andThen;
    var $elm$core$Task$map = F2(function(func, taskA) {
      return A2($elm$core$Task$andThen, function(a) {
        return $elm$core$Task$succeed(func(a));
      }, taskA);
    });
    var $elm$core$Task$map2 = F3(function(func, taskA, taskB) {
      return A2($elm$core$Task$andThen, function(a) {
        return A2($elm$core$Task$andThen, function(b) {
          return $elm$core$Task$succeed(A2(func, a, b));
        }, taskB);
      }, taskA);
    });
    var $elm$core$Task$sequence = function(tasks) {
      return A3($elm$core$List$foldr, $elm$core$Task$map2($elm$core$List$cons), $elm$core$Task$succeed(_List_Nil), tasks);
    };
    var $elm$core$Platform$sendToApp = _Platform_sendToApp;
    var $elm$core$Task$spawnCmd = F2(function(router, _v0) {
      var task = _v0;
      return _Scheduler_spawn(A2($elm$core$Task$andThen, $elm$core$Platform$sendToApp(router), task));
    });
    var $elm$core$Task$onEffects = F3(function(router, commands, state) {
      return A2($elm$core$Task$map, function(_v0) {
        return 0;
      }, $elm$core$Task$sequence(A2($elm$core$List$map, $elm$core$Task$spawnCmd(router), commands)));
    });
    var $elm$core$Task$onSelfMsg = F3(function(_v0, _v1, _v2) {
      return $elm$core$Task$succeed(0);
    });
    var $elm$core$Task$cmdMap = F2(function(tagger, _v0) {
      var task = _v0;
      return A2($elm$core$Task$map, tagger, task);
    });
    _Platform_effectManagers["Task"] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
    var $elm$core$Task$command = _Platform_leaf("Task");
    var $elm$core$Task$perform = F2(function(toMessage, task) {
      return $elm$core$Task$command(A2($elm$core$Task$map, toMessage, task));
    });
    var $elm$browser$Browser$element = _Browser_element;
    var $elm$core$Platform$Cmd$batch = _Platform_batch;
    var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
    var $author$project$Main$initialModel = function(_v0) {
      return _Utils_Tuple2({
        l: 0,
        F: 1
      }, $elm$core$Platform$Cmd$none);
    };
    var $author$project$Main$ReceiveFibonacci = function(a) {
      return {
        $: 2,
        a
      };
    };
    var $elm$json$Json$Decode$int = _Json_decodeInt;
    var $author$project$Main$receiveFibonacci = _Platform_incomingPort("receiveFibonacci", $elm$json$Json$Decode$int);
    var $author$project$Main$subscriptions = function(_v0) {
      return $author$project$Main$receiveFibonacci($author$project$Main$ReceiveFibonacci);
    };
    var $elm$json$Json$Encode$int = _Json_wrap;
    var $author$project$Main$calculateFibonacci = _Platform_outgoingPort("calculateFibonacci", $elm$json$Json$Encode$int);
    var $author$project$Main$update = F2(function(msg, model) {
      switch (msg.$) {
        case 0:
          return _Utils_Tuple2(_Utils_update(model, {
            l: model.l + 1
          }), $author$project$Main$calculateFibonacci(model.l + 1));
        case 1:
          return _Utils_Tuple2(_Utils_update(model, {
            l: model.l - 1
          }), $author$project$Main$calculateFibonacci(model.l - 1));
        default:
          var newFibonacci = msg.a;
          return _Utils_Tuple2(_Utils_update(model, {
            F: newFibonacci
          }), $elm$core$Platform$Cmd$none);
      }
    });
    var $author$project$Main$Decrement = {
      $: 1
    };
    var $author$project$Main$Increment = {
      $: 0
    };
    var $elm$html$Html$button = _VirtualDom_node("button");
    var $elm$html$Html$div = _VirtualDom_node("div");
    var $elm$html$Html$h1 = _VirtualDom_node("h1");
    var $elm$virtual_dom$VirtualDom$Normal = function(a) {
      return {
        $: 0,
        a
      };
    };
    var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
    var $elm$html$Html$Events$on = F2(function(event, decoder) {
      return A2($elm$virtual_dom$VirtualDom$on, event, $elm$virtual_dom$VirtualDom$Normal(decoder));
    });
    var $elm$html$Html$Events$onClick = function(msg) {
      return A2($elm$html$Html$Events$on, "click", $elm$json$Json$Decode$succeed(msg));
    };
    var $elm$html$Html$span = _VirtualDom_node("span");
    var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
    var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
    var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
    var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
    var $author$project$Main$view = function(model) {
      var buttonStyles = _List_fromArray([
        A2($elm$html$Html$Attributes$style, "padding", "4px 12px"),
        A2($elm$html$Html$Attributes$style, "background", "#e8e7e2"),
        A2($elm$html$Html$Attributes$style, "border-radius", "28px"),
        A2($elm$html$Html$Attributes$style, "font-size", "0.8em"),
        A2($elm$html$Html$Attributes$style, "border", "2px solid grey"),
        A2($elm$html$Html$Attributes$style, "margin-right", "10px")
      ]);
      return A2($elm$html$Html$div, _List_fromArray([
        A2($elm$html$Html$Attributes$style, "width", "100%"),
        A2($elm$html$Html$Attributes$style, "height", "100%"),
        A2($elm$html$Html$Attributes$style, "font-family", "Helvetica, sans-serif"),
        A2($elm$html$Html$Attributes$style, "line-height", "3.5em"),
        A2($elm$html$Html$Attributes$style, "width", "50vw"),
        A2($elm$html$Html$Attributes$style, "min-width", "350px"),
        A2($elm$html$Html$Attributes$style, "margin", "auto")
      ]), _List_fromArray([
        A2($elm$html$Html$h1, _List_fromArray([
          A2($elm$html$Html$Attributes$style, "color", "grey")
        ]), _List_fromArray([
          A2($elm$html$Html$span, _List_Nil, _List_fromArray([
            $elm$html$Html$text("Congrats! You can now use ")
          ])),
          A2($elm$html$Html$div, _List_fromArray([
            A2($elm$html$Html$Attributes$style, "color", "#60b5cc")
          ]), _List_fromArray([
            $elm$html$Html$text("Elm: " + ("n = " + $elm$core$String$fromInt(model.l)))
          ])),
          A2($elm$html$Html$span, _List_Nil, _List_fromArray([
            $elm$html$Html$text(" and ")
          ])),
          A2($elm$html$Html$button, A2($elm$core$List$cons, $elm$html$Html$Events$onClick($author$project$Main$Increment), buttonStyles), _List_fromArray([
            $elm$html$Html$text("+1")
          ])),
          A2($elm$html$Html$button, A2($elm$core$List$cons, $elm$html$Html$Events$onClick($author$project$Main$Decrement), buttonStyles), _List_fromArray([
            $elm$html$Html$text("-1")
          ])),
          A2($elm$html$Html$div, _List_fromArray([
            A2($elm$html$Html$Attributes$style, "color", "#f74c00")
          ]), _List_fromArray([
            $elm$html$Html$text("Rust: " + ("fibonacci(n) = " + $elm$core$String$fromInt(model.F)))
          ])),
          A2($elm$html$Html$span, _List_Nil, _List_fromArray([
            $elm$html$Html$text(" together!")
          ]))
        ]))
      ]));
    };
    var $author$project$Main$main = $elm$browser$Browser$element({
      av: $author$project$Main$initialModel,
      aB: $author$project$Main$subscriptions,
      aD: $author$project$Main$update,
      aE: $author$project$Main$view
    });
    _Platform_export({
      "Main": {
        "init": $author$project$Main$main($elm$json$Json$Decode$succeed(0))(0)
      }
    });
  })(window);
  var app = Elm.Main.init({
    node: document.querySelector("main")
  });
  app.ports.calculateFibonacci.subscribe(function(nth) {
    app.ports.receiveFibonacci.send(fibonacci(nth));
  });
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").then((registration) => {
        console.log("SW registered: ", registration);
      }).catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
    });
  }
})();
