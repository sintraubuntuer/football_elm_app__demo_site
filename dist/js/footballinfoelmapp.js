(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
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
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.0/optimize for better performance and smaller assets.');


var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File === 'function' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




/**/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? elm$core$Result$Ok(value)
		: (value instanceof String)
			? elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
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

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
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

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.expect.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done(elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done(elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.expect.b, xhr)); });
		elm$core$Maybe$isJust(request.tracker) && _Http_track(router, xhr, request.tracker.a);

		try {
			xhr.open(request.method, request.url, true);
		} catch (e) {
			return done(elm$http$Http$BadUrl_(request.url));
		}

		_Http_configureRequest(xhr, request);

		request.body.a && xhr.setRequestHeader('Content-Type', request.body.a);
		xhr.send(request.body.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.headers; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.timeout.a || 0;
	xhr.responseType = request.expect.d;
	xhr.withCredentials = request.allowCookiesFromOtherDomains;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? elm$http$Http$GoodStatus_ : elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		url: xhr.responseURL,
		statusCode: xhr.status,
		statusText: xhr.statusText,
		headers: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return elm$core$Dict$empty;
	}

	var headers = elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3(elm$core$Dict$update, key, function(oldValue) {
				return elm$core$Maybe$Just(elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2(elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, elm$http$Http$Sending({
			sent: event.loaded,
			size: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2(elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, elm$http$Http$Receiving({
			received: event.loaded,
			size: event.lengthComputable ? elm$core$Maybe$Just(event.total) : elm$core$Maybe$Nothing
		}))));
	});
}


function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2(elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
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


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
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


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
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
			if (x.h !== y.h)
			{
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

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
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

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
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

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
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

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

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

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
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
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
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




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}
var author$project$Main$FlagsDecoded = F4(
	function (apiUrl, language, standingsByCalc, fileOrDb) {
		return {apiUrl: apiUrl, fileOrDb: fileOrDb, language: language, standingsByCalc: standingsByCalc};
	});
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$EQ = {$: 'EQ'};
var elm$core$Basics$GT = {$: 'GT'};
var elm$core$Basics$LT = {$: 'LT'};
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$List$cons = _List_cons;
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0.a;
	return elm$core$Dict$keys(dict);
};
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var elm$core$Basics$False = {$: 'False'};
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var elm$core$Maybe$Nothing = {$: 'Nothing'};
var elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var elm$core$Basics$True = {$: 'True'};
var elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$append = _Utils_append;
var elm$core$Basics$or = _Basics_or;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 'Nothing') {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$json$Json$Decode$bool = _Json_decodeBool;
var elm$json$Json$Decode$field = _Json_decodeField;
var elm$json$Json$Decode$map4 = _Json_map4;
var elm$json$Json$Decode$string = _Json_decodeString;
var author$project$Main$flagsDecoder = A5(
	elm$json$Json$Decode$map4,
	author$project$Main$FlagsDecoded,
	A2(elm$json$Json$Decode$field, 'apiUrl', elm$json$Json$Decode$string),
	A2(elm$json$Json$Decode$field, 'language', elm$json$Json$Decode$string),
	A2(elm$json$Json$Decode$field, 'standingsByCalc', elm$json$Json$Decode$bool),
	A2(elm$json$Json$Decode$field, 'fileOrDb', elm$json$Json$Decode$string));
var elm$json$Json$Decode$map2 = _Json_map2;
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom = elm$json$Json$Decode$map2(elm$core$Basics$apR);
var elm$json$Json$Decode$andThen = _Json_andThen;
var elm$json$Json$Decode$decodeValue = _Json_run;
var elm$json$Json$Decode$fail = _Json_fail;
var elm$json$Json$Decode$null = _Json_decodeNull;
var elm$json$Json$Decode$oneOf = _Json_oneOf;
var elm$json$Json$Decode$succeed = _Json_succeed;
var elm$json$Json$Decode$value = _Json_decodeValue;
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder = F3(
	function (pathDecoder, valDecoder, fallback) {
		var nullOr = function (decoder) {
			return elm$json$Json$Decode$oneOf(
				_List_fromArray(
					[
						decoder,
						elm$json$Json$Decode$null(fallback)
					]));
		};
		var handleResult = function (input) {
			var _n0 = A2(elm$json$Json$Decode$decodeValue, pathDecoder, input);
			if (_n0.$ === 'Ok') {
				var rawValue = _n0.a;
				var _n1 = A2(
					elm$json$Json$Decode$decodeValue,
					nullOr(valDecoder),
					rawValue);
				if (_n1.$ === 'Ok') {
					var finalResult = _n1.a;
					return elm$json$Json$Decode$succeed(finalResult);
				} else {
					var finalErr = _n1.a;
					return elm$json$Json$Decode$fail(
						elm$json$Json$Decode$errorToString(finalErr));
				}
			} else {
				return elm$json$Json$Decode$succeed(fallback);
			}
		};
		return A2(elm$json$Json$Decode$andThen, handleResult, elm$json$Json$Decode$value);
	});
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional = F4(
	function (key, valDecoder, fallback, decoder) {
		return A2(
			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A3(
				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder,
				A2(elm$json$Json$Decode$field, key, elm$json$Json$Decode$value),
				valDecoder,
				fallback),
			decoder);
	});
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A2(elm$json$Json$Decode$field, key, valDecoder),
			decoder);
	});
var author$project$Types$Game = function (matchDate) {
	return function (homeTeamId) {
		return function (homeTeamName) {
			return function (homeTeam) {
				return function (goalsHomeTeam) {
					return function (awayTeamId) {
						return function (awayTeamName) {
							return function (awayTeam) {
								return function (goalsAwayTeam) {
									return function (weekNr) {
										return function (gameNrWeek) {
											return function (seasonId) {
												return function (leagueId) {
													return {awayTeam: awayTeam, awayTeamId: awayTeamId, awayTeamName: awayTeamName, gameNrWeek: gameNrWeek, goalsAwayTeam: goalsAwayTeam, goalsHomeTeam: goalsHomeTeam, homeTeam: homeTeam, homeTeamId: homeTeamId, homeTeamName: homeTeamName, leagueId: leagueId, matchDate: matchDate, seasonId: seasonId, weekNr: weekNr};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
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
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3(elm$core$List$foldr, elm$json$Json$Decode$field, decoder, fields);
	});
var elm$json$Json$Decode$int = _Json_decodeInt;
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$maybe = function (decoder) {
	return elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(elm$json$Json$Decode$map, elm$core$Maybe$Just, decoder),
				elm$json$Json$Decode$succeed(elm$core$Maybe$Nothing)
			]));
};
var author$project$FootballCalendar$gameDecoder = A3(
	NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'league',
	elm$json$Json$Decode$int,
	A3(
		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'season',
		elm$json$Json$Decode$int,
		A4(
			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
			'gameNrWeek',
			elm$json$Json$Decode$maybe(elm$json$Json$Decode$int),
			elm$core$Maybe$Nothing,
			A3(
				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
				'weekNr',
				elm$json$Json$Decode$int,
				A4(
					NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
					'goalsAwayTeam',
					elm$json$Json$Decode$maybe(elm$json$Json$Decode$int),
					elm$core$Maybe$Nothing,
					A2(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
						A2(
							elm$json$Json$Decode$at,
							_List_fromArray(
								['awayTeam', 'shortName']),
							elm$json$Json$Decode$string),
						A2(
							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
							A2(
								elm$json$Json$Decode$at,
								_List_fromArray(
									['awayTeam', 'teamName']),
								elm$json$Json$Decode$string),
							A2(
								NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
								A2(
									elm$json$Json$Decode$at,
									_List_fromArray(
										['awayTeam', 'id']),
									elm$json$Json$Decode$int),
								A4(
									NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
									'goalsHomeTeam',
									elm$json$Json$Decode$maybe(elm$json$Json$Decode$int),
									elm$core$Maybe$Nothing,
									A2(
										NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
										A2(
											elm$json$Json$Decode$at,
											_List_fromArray(
												['homeTeam', 'shortName']),
											elm$json$Json$Decode$string),
										A2(
											NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
											A2(
												elm$json$Json$Decode$at,
												_List_fromArray(
													['homeTeam', 'teamName']),
												elm$json$Json$Decode$string),
											A2(
												NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
												A2(
													elm$json$Json$Decode$at,
													_List_fromArray(
														['homeTeam', 'id']),
													elm$json$Json$Decode$int),
												A3(
													NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
													'matchDate',
													elm$json$Json$Decode$string,
													elm$json$Json$Decode$succeed(author$project$Types$Game))))))))))))));
var elm$json$Json$Decode$list = _Json_decodeList;
var author$project$FootballCalendar$payloadGameDecoder = A2(
	elm$json$Json$Decode$field,
	'results',
	elm$json$Json$Decode$list(author$project$FootballCalendar$gameDecoder));
var author$project$FootballCalendar$urlForMatches = function (apiUrl) {
	return apiUrl + 'weekfootballmatches/';
};
var elm$core$String$toLower = _String_toLower;
var author$project$FootballCalendar$urlForFilteredMatches = F5(
	function (apiUrl, leagueId, seasonId, mbweekId, fileOrDbSource) {
		if (mbweekId.$ === 'Nothing') {
			return ((elm$core$String$toLower(fileOrDbSource) === 'file') || (elm$core$String$toLower(fileOrDbSource) === 'fileSource')) ? (author$project$FootballCalendar$urlForMatches(apiUrl) + ('allseasonweeks_footballmatches__season_' + (elm$core$String$fromInt(seasonId) + ('__league_' + (elm$core$String$fromInt(leagueId) + '.json'))))) : (author$project$FootballCalendar$urlForMatches(apiUrl) + ('season/' + (elm$core$String$fromInt(seasonId) + ('/league/' + (elm$core$String$fromInt(leagueId) + ('/allWeeks/?ordering=weekNr' + '&format=json'))))));
		} else {
			var nr = mbweekId.a;
			return ((elm$core$String$toLower(fileOrDbSource) === 'file') || (elm$core$String$toLower(fileOrDbSource) === 'fileSource')) ? (author$project$FootballCalendar$urlForMatches(apiUrl) + ('weekfootballmatches__season_' + (elm$core$String$fromInt(seasonId) + ('__league_' + (elm$core$String$fromInt(leagueId) + ('__weekNr_' + (elm$core$String$fromInt(nr) + '.json'))))))) : (author$project$FootballCalendar$urlForMatches(apiUrl) + ('season/' + (elm$core$String$fromInt(seasonId) + ('/league/' + (elm$core$String$fromInt(leagueId) + ('/weekNr/' + (elm$core$String$fromInt(nr) + ('/?ordering=gameNrWeek' + '&format=json'))))))));
		}
	});
var author$project$Main$theHeaders = _List_Nil;
var author$project$Types$NewGamesForCalendar = function (a) {
	return {$: 'NewGamesForCalendar', a: a};
};
var elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var elm$core$Dict$Black = {$: 'Black'};
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Dict$Red = {$: 'Red'};
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1.$) {
				case 'LT':
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var lLeft = _n1.d;
			var lRight = _n1.e;
			var _n2 = dict.e;
			var rClr = _n2.a;
			var rK = _n2.b;
			var rV = _n2.c;
			var rLeft = _n2.d;
			var _n3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _n2.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n4 = dict.d;
			var lClr = _n4.a;
			var lK = _n4.b;
			var lV = _n4.c;
			var lLeft = _n4.d;
			var lRight = _n4.e;
			var _n5 = dict.e;
			var rClr = _n5.a;
			var rK = _n5.b;
			var rV = _n5.c;
			var rLeft = _n5.d;
			var rRight = _n5.e;
			if (clr.$ === 'Black') {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var _n2 = _n1.d;
			var _n3 = _n2.a;
			var llK = _n2.b;
			var llV = _n2.c;
			var llLeft = _n2.d;
			var llRight = _n2.e;
			var lRight = _n1.e;
			var _n4 = dict.e;
			var rClr = _n4.a;
			var rK = _n4.b;
			var rV = _n4.c;
			var rLeft = _n4.d;
			var rRight = _n4.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				elm$core$Dict$Red,
				lK,
				lV,
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n5 = dict.d;
			var lClr = _n5.a;
			var lK = _n5.b;
			var lV = _n5.c;
			var lLeft = _n5.d;
			var lRight = _n5.e;
			var _n6 = dict.e;
			var rClr = _n6.a;
			var rK = _n6.b;
			var rV = _n6.c;
			var rLeft = _n6.d;
			var rRight = _n6.e;
			if (clr.$ === 'Black') {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _n1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_n2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _n3 = right.a;
							var _n4 = right.d;
							var _n5 = _n4.a;
							return elm$core$Dict$moveRedRight(dict);
						} else {
							break _n2$2;
						}
					} else {
						var _n6 = right.a;
						var _n7 = right.d;
						return elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _n2$2;
				}
			}
			return dict;
		}
	});
var elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _n3 = lLeft.a;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					elm$core$Dict$removeMin(left),
					right);
			} else {
				var _n4 = elm$core$Dict$moveRedLeft(dict);
				if (_n4.$ === 'RBNode_elm_builtin') {
					var nColor = _n4.a;
					var nKey = _n4.b;
					var nValue = _n4.c;
					var nLeft = _n4.d;
					var nRight = _n4.e;
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _n4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _n6 = lLeft.a;
						return A5(
							elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2(elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _n7 = elm$core$Dict$moveRedLeft(dict);
						if (_n7.$ === 'RBNode_elm_builtin') {
							var nColor = _n7.a;
							var nKey = _n7.b;
							var nValue = _n7.c;
							var nLeft = _n7.d;
							var nRight = _n7.e;
							return A5(
								elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2(elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2(elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7(elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _n1 = elm$core$Dict$getMin(right);
				if (_n1.$ === 'RBNode_elm_builtin') {
					var minKey = _n1.b;
					var minValue = _n1.c;
					return A5(
						elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						elm$core$Dict$removeMin(right));
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2(elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var elm$core$Dict$remove = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$removeHelp, key, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _n0 = alter(
			A2(elm$core$Dict$get, targetKey, dictionary));
		if (_n0.$ === 'Just') {
			var value = _n0.a;
			return A3(elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2(elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var elm$core$Maybe$isJust = function (maybe) {
	if (maybe.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return elm$core$Result$Err(e);
		}
	});
var elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 'BadStatus_', a: a, b: b};
	});
var elm$http$Http$BadUrl_ = function (a) {
	return {$: 'BadUrl_', a: a};
};
var elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 'GoodStatus_', a: a, b: b};
	});
var elm$http$Http$NetworkError_ = {$: 'NetworkError_'};
var elm$http$Http$Receiving = function (a) {
	return {$: 'Receiving', a: a};
};
var elm$http$Http$Sending = function (a) {
	return {$: 'Sending', a: a};
};
var elm$http$Http$Timeout_ = {$: 'Timeout_'};
var elm$http$Http$emptyBody = _Http_emptyBody;
var elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return elm$core$Result$Err(
				f(e));
		}
	});
var elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			elm$core$Basics$identity,
			A2(elm$core$Basics$composeR, toResult, toMsg));
	});
var elm$http$Http$BadBody = function (a) {
	return {$: 'BadBody', a: a};
};
var elm$http$Http$BadStatus = function (a) {
	return {$: 'BadStatus', a: a};
};
var elm$http$Http$BadUrl = function (a) {
	return {$: 'BadUrl', a: a};
};
var elm$http$Http$NetworkError = {$: 'NetworkError'};
var elm$http$Http$Timeout = {$: 'Timeout'};
var elm$http$Http$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 'BadUrl_':
				var url = response.a;
				return elm$core$Result$Err(
					elm$http$Http$BadUrl(url));
			case 'Timeout_':
				return elm$core$Result$Err(elm$http$Http$Timeout);
			case 'NetworkError_':
				return elm$core$Result$Err(elm$http$Http$NetworkError);
			case 'BadStatus_':
				var metadata = response.a;
				return elm$core$Result$Err(
					elm$http$Http$BadStatus(metadata.statusCode));
			default:
				var body = response.b;
				return A2(
					elm$core$Result$mapError,
					elm$http$Http$BadBody,
					toResult(body));
		}
	});
var elm$json$Json$Decode$decodeString = _Json_runOnString;
var elm$http$Http$expectJson = F2(
	function (toMsg, decoder) {
		return A2(
			elm$http$Http$expectStringResponse,
			toMsg,
			elm$http$Http$resolve(
				function (string) {
					return A2(
						elm$core$Result$mapError,
						elm$json$Json$Decode$errorToString,
						A2(elm$json$Json$Decode$decodeString, decoder, string));
				}));
	});
var elm$http$Http$Request = function (a) {
	return {$: 'Request', a: a};
};
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$http$Http$State = F2(
	function (reqs, subs) {
		return {reqs: reqs, subs: subs};
	});
var elm$http$Http$init = elm$core$Task$succeed(
	A2(elm$http$Http$State, elm$core$Dict$empty, _List_Nil));
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Process$kill = _Scheduler_kill;
var elm$core$Process$spawn = _Scheduler_spawn;
var elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (cmd.$ === 'Cancel') {
					var tracker = cmd.a;
					var _n2 = A2(elm$core$Dict$get, tracker, reqs);
					if (_n2.$ === 'Nothing') {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _n2.a;
						return A2(
							elm$core$Task$andThen,
							function (_n3) {
								return A3(
									elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2(elm$core$Dict$remove, tracker, reqs));
							},
							elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						elm$core$Task$andThen,
						function (pid) {
							var _n4 = req.tracker;
							if (_n4.$ === 'Nothing') {
								return A3(elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _n4.a;
								return A3(
									elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3(elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			elm$core$Task$andThen,
			function (reqs) {
				return elm$core$Task$succeed(
					A2(elm$http$Http$State, reqs, subs));
			},
			A3(elm$http$Http$updateReqs, router, cmds, state.reqs));
	});
var elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _n0 = f(mx);
		if (_n0.$ === 'Just') {
			var x = _n0.a;
			return A2(elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _n0) {
		var actualTracker = _n0.a;
		var toMsg = _n0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? elm$core$Maybe$Just(
			A2(
				elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : elm$core$Maybe$Nothing;
	});
var elm$http$Http$onSelfMsg = F3(
	function (router, _n0, state) {
		var tracker = _n0.a;
		var progress = _n0.b;
		return A2(
			elm$core$Task$andThen,
			function (_n1) {
				return elm$core$Task$succeed(state);
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$filterMap,
					A3(elm$http$Http$maybeSend, router, tracker, progress),
					state.subs)));
	});
var elm$http$Http$Cancel = function (a) {
	return {$: 'Cancel', a: a};
};
var elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (cmd.$ === 'Cancel') {
			var tracker = cmd.a;
			return elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return elm$http$Http$Request(
				{
					allowCookiesFromOtherDomains: r.allowCookiesFromOtherDomains,
					body: r.body,
					expect: A2(_Http_mapExpect, func, r.expect),
					headers: r.headers,
					method: r.method,
					timeout: r.timeout,
					tracker: r.tracker,
					url: r.url
				});
		}
	});
var elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 'MySub', a: a, b: b};
	});
var elm$http$Http$subMap = F2(
	function (func, _n0) {
		var tracker = _n0.a;
		var toMsg = _n0.b;
		return A2(
			elm$http$Http$MySub,
			tracker,
			A2(elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager(elm$http$Http$init, elm$http$Http$onEffects, elm$http$Http$onSelfMsg, elm$http$Http$cmdMap, elm$http$Http$subMap);
var elm$http$Http$command = _Platform_leaf('Http');
var elm$http$Http$subscription = _Platform_leaf('Http');
var elm$http$Http$request = function (r) {
	return elm$http$Http$command(
		elm$http$Http$Request(
			{allowCookiesFromOtherDomains: false, body: r.body, expect: r.expect, headers: r.headers, method: r.method, timeout: r.timeout, tracker: r.tracker, url: r.url}));
};
var author$project$Main$getGames = F5(
	function (apiUrl, compId, seasonId, mbweekId, fileOrDbSource) {
		return elm$http$Http$request(
			{
				body: elm$http$Http$emptyBody,
				expect: A2(elm$http$Http$expectJson, author$project$Types$NewGamesForCalendar, author$project$FootballCalendar$payloadGameDecoder),
				headers: author$project$Main$theHeaders,
				method: 'GET',
				timeout: elm$core$Maybe$Nothing,
				tracker: elm$core$Maybe$Nothing,
				url: A5(author$project$FootballCalendar$urlForFilteredMatches, apiUrl, compId, seasonId, mbweekId, fileOrDbSource)
			});
	});
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var author$project$Main$getIfPossibleGames = F5(
	function (apiUrl, compId, mbseasonId, mbweekId, fileOrDbSource) {
		if (mbseasonId.$ === 'Nothing') {
			return elm$core$Platform$Cmd$none;
		} else {
			var sid = mbseasonId.a;
			return A5(author$project$Main$getGames, apiUrl, compId, sid, mbweekId, fileOrDbSource);
		}
	});
var author$project$Types$RankTableEntry = function (team) {
	return function (teamName) {
		return function (teamShortName) {
			return function (league) {
				return function (leagueName) {
					return function (season) {
						return function (seasonName) {
							return function (weekNr) {
								return function (weekRank) {
									return function (nrPoints) {
										return function (nrGamesPlayed) {
											return function (nrGamesWon) {
												return function (nrGamesDrawn) {
													return function (nrGamesLost) {
														return function (nrGoalsScored) {
															return function (nrGoalsSuffered) {
																return function (nrHomeGamesPlayed) {
																	return function (nrHomeGamesWon) {
																		return function (nrHomeGamesLost) {
																			return function (nrHomeGamesDrawn) {
																				return function (nrGoalsScoredHome) {
																					return function (nrGoalsSufferedHome) {
																						return function (nrAwayGamesPlayed) {
																							return function (nrAwayGamesWon) {
																								return function (nrAwayGamesLost) {
																									return function (nrAwayGamesDrawn) {
																										return function (nrGoalsScoredAway) {
																											return function (nrGoalsSufferedAway) {
																												return {league: league, leagueName: leagueName, nrAwayGamesDrawn: nrAwayGamesDrawn, nrAwayGamesLost: nrAwayGamesLost, nrAwayGamesPlayed: nrAwayGamesPlayed, nrAwayGamesWon: nrAwayGamesWon, nrGamesDrawn: nrGamesDrawn, nrGamesLost: nrGamesLost, nrGamesPlayed: nrGamesPlayed, nrGamesWon: nrGamesWon, nrGoalsScored: nrGoalsScored, nrGoalsScoredAway: nrGoalsScoredAway, nrGoalsScoredHome: nrGoalsScoredHome, nrGoalsSuffered: nrGoalsSuffered, nrGoalsSufferedAway: nrGoalsSufferedAway, nrGoalsSufferedHome: nrGoalsSufferedHome, nrHomeGamesDrawn: nrHomeGamesDrawn, nrHomeGamesLost: nrHomeGamesLost, nrHomeGamesPlayed: nrHomeGamesPlayed, nrHomeGamesWon: nrHomeGamesWon, nrPoints: nrPoints, season: season, seasonName: seasonName, team: team, teamName: teamName, teamShortName: teamShortName, weekNr: weekNr, weekRank: weekRank};
																											};
																										};
																									};
																								};
																							};
																						};
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var author$project$FootballStandings$rankTableEntryDecoder = A3(
	NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'nrGoalsSufferedAway',
	elm$json$Json$Decode$int,
	A3(
		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'nrGoalsScoredAway',
		elm$json$Json$Decode$int,
		A3(
			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'nrAwayGamesDrawn',
			elm$json$Json$Decode$int,
			A3(
				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
				'nrAwayGamesLost',
				elm$json$Json$Decode$int,
				A3(
					NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'nrAwayGamesWon',
					elm$json$Json$Decode$int,
					A3(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'nrAwayGamesPlayed',
						elm$json$Json$Decode$int,
						A3(
							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'nrGoalsSufferedHome',
							elm$json$Json$Decode$int,
							A3(
								NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
								'nrGoalsScoredHome',
								elm$json$Json$Decode$int,
								A3(
									NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
									'nrHomeGamesDrawn',
									elm$json$Json$Decode$int,
									A3(
										NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
										'nrHomeGamesLost',
										elm$json$Json$Decode$int,
										A3(
											NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
											'nrHomeGamesWon',
											elm$json$Json$Decode$int,
											A3(
												NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
												'nrHomeGamesPlayed',
												elm$json$Json$Decode$int,
												A3(
													NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
													'nrGoalsSuffered',
													elm$json$Json$Decode$int,
													A3(
														NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
														'nrGoalsScored',
														elm$json$Json$Decode$int,
														A3(
															NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
															'nrGamesLost',
															elm$json$Json$Decode$int,
															A3(
																NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																'nrGamesDrawn',
																elm$json$Json$Decode$int,
																A3(
																	NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																	'nrGamesWon',
																	elm$json$Json$Decode$int,
																	A3(
																		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																		'nrGamesPlayed',
																		elm$json$Json$Decode$int,
																		A3(
																			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																			'nrPoints',
																			elm$json$Json$Decode$int,
																			A3(
																				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																				'weekRank',
																				elm$json$Json$Decode$int,
																				A3(
																					NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																					'weekNr',
																					elm$json$Json$Decode$int,
																					A3(
																						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																						'seasonName',
																						elm$json$Json$Decode$string,
																						A3(
																							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																							'season',
																							elm$json$Json$Decode$int,
																							A3(
																								NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																								'leagueName',
																								elm$json$Json$Decode$string,
																								A3(
																									NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																									'league',
																									elm$json$Json$Decode$int,
																									A3(
																										NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																										'teamShortName',
																										elm$json$Json$Decode$string,
																										A3(
																											NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																											'teamName',
																											elm$json$Json$Decode$string,
																											A3(
																												NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																												'team',
																												elm$json$Json$Decode$int,
																												elm$json$Json$Decode$succeed(author$project$Types$RankTableEntry)))))))))))))))))))))))))))));
var author$project$FootballStandings$payloadRankTableDecoder = A2(
	elm$json$Json$Decode$field,
	'results',
	elm$json$Json$Decode$list(author$project$FootballStandings$rankTableEntryDecoder));
var author$project$FootballStandings$baseUrlForStandingsTable = function (apiUrl) {
	return apiUrl;
};
var author$project$FootballStandings$urlForStandingsTable = function (apiUrl) {
	return author$project$FootballStandings$baseUrlForStandingsTable(apiUrl) + 'weekstandings/';
};
var author$project$FootballStandings$urlForFilteredStandingsTable = F5(
	function (apiUrl, leagueId, seasonId, weekId, fileOrDbSource) {
		return ((elm$core$String$toLower(fileOrDbSource) === 'file') || (elm$core$String$toLower(fileOrDbSource) === 'fileSource')) ? (author$project$FootballStandings$urlForStandingsTable(apiUrl) + ('weekstandings__season_' + (elm$core$String$fromInt(seasonId) + ('__league_' + (elm$core$String$fromInt(leagueId) + ('__weekNr_' + (elm$core$String$fromInt(weekId) + '.json'))))))) : (author$project$FootballStandings$urlForStandingsTable(apiUrl) + ('season/' + (elm$core$String$fromInt(seasonId) + ('/league/' + (elm$core$String$fromInt(leagueId) + ('/weekNr/' + (elm$core$String$fromInt(weekId) + '/?ordering=weekRank&format=json')))))));
	});
var author$project$Types$NewRankTable = function (a) {
	return {$: 'NewRankTable', a: a};
};
var author$project$Main$getRankTable = F5(
	function (apiUrl, compId, seasonId, weekId, fileOrDbSource) {
		return elm$http$Http$request(
			{
				body: elm$http$Http$emptyBody,
				expect: A2(elm$http$Http$expectJson, author$project$Types$NewRankTable, author$project$FootballStandings$payloadRankTableDecoder),
				headers: author$project$Main$theHeaders,
				method: 'GET',
				timeout: elm$core$Maybe$Nothing,
				tracker: elm$core$Maybe$Nothing,
				url: A5(author$project$FootballStandings$urlForFilteredStandingsTable, apiUrl, compId, seasonId, weekId, fileOrDbSource)
			});
	});
var author$project$Main$getIfPossibleRankTable = F5(
	function (apiUrl, compId, mbseasonId, weekId, fileOrDbSource) {
		if (mbseasonId.$ === 'Nothing') {
			return elm$core$Platform$Cmd$none;
		} else {
			var sid = mbseasonId.a;
			return A5(author$project$Main$getRankTable, apiUrl, compId, sid, weekId, fileOrDbSource);
		}
	});
var author$project$LanguageFuncs$DisplayEnglish = {$: 'DisplayEnglish'};
var author$project$LanguageFuncs$DisplayPortuguese = {$: 'DisplayPortuguese'};
var author$project$Main$getDefaultLeagueId = 2;
var author$project$Types$Asc = {$: 'Asc'};
var author$project$Types$CurrentOrder = F2(
	function (a, b) {
		return {$: 'CurrentOrder', a: a, b: b};
	});
var author$project$Types$OrdRank = {$: 'OrdRank'};
var author$project$Main$initialcurrentorder = A2(author$project$Types$CurrentOrder, author$project$Types$OrdRank, author$project$Types$Asc);
var author$project$Types$CalendarTab = {$: 'CalendarTab'};
var author$project$Types$FullTable = {$: 'FullTable'};
var author$project$Types$League = F2(
	function (id, name) {
		return {id: id, name: name};
	});
var author$project$Types$NoData = {$: 'NoData'};
var author$project$Types$SingleWeek = {$: 'SingleWeek'};
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var author$project$Main$getInitialModel = F4(
	function (mbUrl, mbLanguage, mbStandingsByCalc, mbFileOrDbSource) {
		var lang = function () {
			if ((mbLanguage.$ === 'Just') && (mbLanguage.a === 'pt')) {
				return author$project$LanguageFuncs$DisplayPortuguese;
			} else {
				return author$project$LanguageFuncs$DisplayEnglish;
			}
		}();
		return {
			alertMessage: elm$core$Maybe$Nothing,
			apiUrl: A2(elm$core$Maybe$withDefault, '', mbUrl),
			cacheSeasonRanges: elm$core$Dict$empty,
			cacheWeekRange: elm$core$Dict$empty,
			currentTab: author$project$Types$CalendarTab,
			currentorder: author$project$Main$initialcurrentorder,
			fileOrDbSource: A2(elm$core$Maybe$withDefault, 'db', mbFileOrDbSource),
			games: _List_Nil,
			language: lang,
			leagues: _List_fromArray(
				[
					A2(author$project$Types$League, 1, 'League 1'),
					A2(author$project$Types$League, 2, 'League 2')
				]),
			nrInfoChars: 15,
			presentStatus: author$project$Types$NoData,
			rankTable: _List_Nil,
			seasonRange: _List_Nil,
			selectedLeague: author$project$Main$getDefaultLeagueId,
			selectedSeasonId: elm$core$Maybe$Nothing,
			showGameResults: true,
			standingsByCalc: A2(elm$core$Maybe$withDefault, false, mbStandingsByCalc),
			tablesize: author$project$Types$FullTable,
			teams: elm$core$Dict$empty,
			weekNr: 34,
			weekmode: author$project$Types$SingleWeek
		};
	});
var author$project$FootballCalendar$baseUrlForMatchTable = function (apiUrl) {
	return apiUrl;
};
var author$project$FootballCalendar$urlForSeasonRangeInMatchTable = F3(
	function (apiUrl, leagueId, fileOrDbSource) {
		return ((elm$core$String$toLower(fileOrDbSource) === 'file') || (elm$core$String$toLower(fileOrDbSource) === 'fileSource')) ? (author$project$FootballCalendar$baseUrlForMatchTable(apiUrl) + ('seasonsforleague/seasonsforleague__league_' + (elm$core$String$fromInt(leagueId) + '.json'))) : (author$project$FootballCalendar$baseUrlForMatchTable(apiUrl) + ('getSeasonsForLeague/?league=' + (elm$core$String$fromInt(leagueId) + '&format=json')));
	});
var author$project$FootballStandings$urlForSeasonRangeInRankTable = F3(
	function (apiUrl, leagueId, fileOrDbSource) {
		return ((elm$core$String$toLower(fileOrDbSource) === 'file') || (elm$core$String$toLower(fileOrDbSource) === 'fileSource')) ? (author$project$FootballStandings$baseUrlForStandingsTable(apiUrl) + ('seasonsforleague/seasonsforleague__league_' + (elm$core$String$fromInt(leagueId) + '.json'))) : (author$project$FootballStandings$baseUrlForStandingsTable(apiUrl) + ('getSeasonsForLeague/?league=' + (elm$core$String$fromInt(leagueId) + '&format=json')));
	});
var author$project$Types$Season = F2(
	function (seasonId, seasonName) {
		return {seasonId: seasonId, seasonName: seasonName};
	});
var author$project$Main$seasonsRangeDecoder = A3(
	elm$json$Json$Decode$map2,
	author$project$Types$Season,
	A2(elm$json$Json$Decode$field, 'season', elm$json$Json$Decode$int),
	A2(elm$json$Json$Decode$field, 'seasonName', elm$json$Json$Decode$string));
var author$project$Types$NewSeasonRange = function (a) {
	return {$: 'NewSeasonRange', a: a};
};
var author$project$Main$getSeasonRange = F4(
	function (apiUrl, leagueId, fileOrDbSource, currentTab) {
		var _n0 = function () {
			if (currentTab.$ === 'CalendarTab') {
				return _Utils_Tuple2(author$project$FootballCalendar$urlForSeasonRangeInMatchTable, author$project$Types$NewSeasonRange);
			} else {
				return _Utils_Tuple2(author$project$FootballStandings$urlForSeasonRangeInRankTable, author$project$Types$NewSeasonRange);
			}
		}();
		var theUrlFunc = _n0.a;
		var theMsg = _n0.b;
		return elm$http$Http$request(
			{
				body: elm$http$Http$emptyBody,
				expect: A2(
					elm$http$Http$expectJson,
					theMsg,
					elm$json$Json$Decode$list(author$project$Main$seasonsRangeDecoder)),
				headers: author$project$Main$theHeaders,
				method: 'GET',
				timeout: elm$core$Maybe$Nothing,
				tracker: elm$core$Maybe$Nothing,
				url: A3(theUrlFunc, apiUrl, leagueId, fileOrDbSource)
			});
	});
var author$project$Types$Team = F3(
	function (teamId, teamName, shortName) {
		return {shortName: shortName, teamId: teamId, teamName: teamName};
	});
var author$project$FootballCalendar$teamDecoder = A3(
	NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'shortName',
	elm$json$Json$Decode$string,
	A3(
		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'teamName',
		elm$json$Json$Decode$string,
		A3(
			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'club',
			elm$json$Json$Decode$int,
			elm$json$Json$Decode$succeed(author$project$Types$Team))));
var author$project$FootballCalendar$payloadTeamDecoder = A2(
	elm$json$Json$Decode$field,
	'results',
	elm$json$Json$Decode$list(author$project$FootballCalendar$teamDecoder));
var author$project$FootballCalendar$urlForTeams = F2(
	function (apiUrl, fileOrDbSource) {
		return ((elm$core$String$toLower(fileOrDbSource) === 'file') || (elm$core$String$toLower(fileOrDbSource) === 'fileSource')) ? (apiUrl + 'teams/teams.json') : (apiUrl + 'teams/?format=json');
	});
var author$project$Types$NewTeams = F2(
	function (a, b) {
		return {$: 'NewTeams', a: a, b: b};
	});
var author$project$Main$getTeams = F3(
	function (apiUrl, fileOrDbSource, lgamesToConvert) {
		return elm$http$Http$request(
			{
				body: elm$http$Http$emptyBody,
				expect: A2(
					elm$http$Http$expectJson,
					author$project$Types$NewTeams(lgamesToConvert),
					author$project$FootballCalendar$payloadTeamDecoder),
				headers: author$project$Main$theHeaders,
				method: 'GET',
				timeout: elm$core$Maybe$Nothing,
				tracker: elm$core$Maybe$Nothing,
				url: A2(author$project$FootballCalendar$urlForTeams, apiUrl, fileOrDbSource)
			});
	});
var author$project$Types$StandingsTab = {$: 'StandingsTab'};
var elm$core$Basics$not = _Basics_not;
var author$project$Main$initFunc = function (flagsToDec) {
	var initFuncHelper = F4(
		function (mbUrl, mbLanguage, mbStandingsByCalc, mbFileOrDbSource) {
			var initialModel = A4(author$project$Main$getInitialModel, mbUrl, mbLanguage, mbStandingsByCalc, mbFileOrDbSource);
			var fileOrDbSource = A2(elm$core$Maybe$withDefault, 'db', mbFileOrDbSource);
			var cmdBatch2 = function () {
				var _n3 = _Utils_Tuple2(initialModel.currentTab, mbUrl);
				if ((_n3.a.$ === 'StandingsTab') && (_n3.b.$ === 'Just')) {
					var _n4 = _n3.a;
					var theUrl = _n3.b.a;
					return _Utils_ap(
						_List_fromArray(
							[
								A3(author$project$Main$getTeams, theUrl, fileOrDbSource, _List_Nil),
								A4(author$project$Main$getSeasonRange, theUrl, initialModel.selectedLeague, fileOrDbSource, author$project$Types$StandingsTab)
							]),
						(!initialModel.standingsByCalc) ? _List_fromArray(
							[
								A5(author$project$Main$getIfPossibleRankTable, theUrl, initialModel.selectedLeague, initialModel.selectedSeasonId, initialModel.weekNr, fileOrDbSource)
							]) : _List_Nil);
				} else {
					return _List_Nil;
				}
			}();
			var cmdBatch1 = function () {
				var _n1 = _Utils_Tuple2(initialModel.currentTab, mbUrl);
				if ((_n1.a.$ === 'CalendarTab') && (_n1.b.$ === 'Just')) {
					var _n2 = _n1.a;
					var theUrl = _n1.b.a;
					return _List_fromArray(
						[
							A3(author$project$Main$getTeams, theUrl, fileOrDbSource, _List_Nil),
							A4(author$project$Main$getSeasonRange, theUrl, initialModel.selectedLeague, fileOrDbSource, author$project$Types$CalendarTab),
							A5(
							author$project$Main$getIfPossibleGames,
							theUrl,
							initialModel.selectedLeague,
							initialModel.selectedSeasonId,
							elm$core$Maybe$Just(initialModel.weekNr),
							fileOrDbSource)
						]);
				} else {
					return _List_Nil;
				}
			}();
			return _Utils_Tuple2(
				initialModel,
				elm$core$Platform$Cmd$batch(
					_Utils_ap(cmdBatch1, cmdBatch2)));
		});
	var _n0 = A2(elm$json$Json$Decode$decodeValue, author$project$Main$flagsDecoder, flagsToDec);
	if (_n0.$ === 'Err') {
		return A4(initFuncHelper, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing);
	} else {
		var flags = _n0.a;
		return A4(
			initFuncHelper,
			elm$core$Maybe$Just(flags.apiUrl),
			elm$core$Maybe$Just(flags.language),
			elm$core$Maybe$Just(flags.standingsByCalc),
			elm$core$Maybe$Just(flags.fileOrDb));
	}
};
var author$project$Types$FetchingData = {$: 'FetchingData'};
var author$project$Types$NewFetchingInfo = function (a) {
	return {$: 'NewFetchingInfo', a: a};
};
var elm$core$Platform$Sub$batch = _Platform_batch;
var elm$core$Platform$Sub$none = elm$core$Platform$Sub$batch(_List_Nil);
var elm$time$Time$Every = F2(
	function (a, b) {
		return {$: 'Every', a: a, b: b};
	});
var elm$time$Time$State = F2(
	function (taggers, processes) {
		return {processes: processes, taggers: taggers};
	});
var elm$time$Time$init = elm$core$Task$succeed(
	A2(elm$time$Time$State, elm$core$Dict$empty, elm$core$Dict$empty));
var elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _n0) {
				stepState:
				while (true) {
					var list = _n0.a;
					var result = _n0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _n2 = list.a;
						var lKey = _n2.a;
						var lValue = _n2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_n0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_n0 = $temp$_n0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _n3 = A3(
			elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _n3.a;
		var intermediateResult = _n3.b;
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n4, result) {
					var k = _n4.a;
					var v = _n4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var elm$time$Time$addMySub = F2(
	function (_n0, state) {
		var interval = _n0.a;
		var tagger = _n0.b;
		var _n1 = A2(elm$core$Dict$get, interval, state);
		if (_n1.$ === 'Nothing') {
			return A3(
				elm$core$Dict$insert,
				interval,
				_List_fromArray(
					[tagger]),
				state);
		} else {
			var taggers = _n1.a;
			return A3(
				elm$core$Dict$insert,
				interval,
				A2(elm$core$List$cons, tagger, taggers),
				state);
		}
	});
var elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var elm$time$Time$customZone = elm$time$Time$Zone;
var elm$time$Time$setInterval = _Time_setInterval;
var elm$time$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		if (!intervals.b) {
			return elm$core$Task$succeed(processes);
		} else {
			var interval = intervals.a;
			var rest = intervals.b;
			var spawnTimer = elm$core$Process$spawn(
				A2(
					elm$time$Time$setInterval,
					interval,
					A2(elm$core$Platform$sendToSelf, router, interval)));
			var spawnRest = function (id) {
				return A3(
					elm$time$Time$spawnHelp,
					router,
					rest,
					A3(elm$core$Dict$insert, interval, id, processes));
			};
			return A2(elm$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var elm$time$Time$onEffects = F3(
	function (router, subs, _n0) {
		var processes = _n0.processes;
		var rightStep = F3(
			function (_n6, id, _n7) {
				var spawns = _n7.a;
				var existing = _n7.b;
				var kills = _n7.c;
				return _Utils_Tuple3(
					spawns,
					existing,
					A2(
						elm$core$Task$andThen,
						function (_n5) {
							return kills;
						},
						elm$core$Process$kill(id)));
			});
		var newTaggers = A3(elm$core$List$foldl, elm$time$Time$addMySub, elm$core$Dict$empty, subs);
		var leftStep = F3(
			function (interval, taggers, _n4) {
				var spawns = _n4.a;
				var existing = _n4.b;
				var kills = _n4.c;
				return _Utils_Tuple3(
					A2(elm$core$List$cons, interval, spawns),
					existing,
					kills);
			});
		var bothStep = F4(
			function (interval, taggers, id, _n3) {
				var spawns = _n3.a;
				var existing = _n3.b;
				var kills = _n3.c;
				return _Utils_Tuple3(
					spawns,
					A3(elm$core$Dict$insert, interval, id, existing),
					kills);
			});
		var _n1 = A6(
			elm$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			processes,
			_Utils_Tuple3(
				_List_Nil,
				elm$core$Dict$empty,
				elm$core$Task$succeed(_Utils_Tuple0)));
		var spawnList = _n1.a;
		var existingDict = _n1.b;
		var killTask = _n1.c;
		return A2(
			elm$core$Task$andThen,
			function (newProcesses) {
				return elm$core$Task$succeed(
					A2(elm$time$Time$State, newTaggers, newProcesses));
			},
			A2(
				elm$core$Task$andThen,
				function (_n2) {
					return A3(elm$time$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var elm$time$Time$millisToPosix = elm$time$Time$Posix;
var elm$time$Time$now = _Time_now(elm$time$Time$millisToPosix);
var elm$time$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _n0 = A2(elm$core$Dict$get, interval, state.taggers);
		if (_n0.$ === 'Nothing') {
			return elm$core$Task$succeed(state);
		} else {
			var taggers = _n0.a;
			var tellTaggers = function (time) {
				return elm$core$Task$sequence(
					A2(
						elm$core$List$map,
						function (tagger) {
							return A2(
								elm$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						taggers));
			};
			return A2(
				elm$core$Task$andThen,
				function (_n1) {
					return elm$core$Task$succeed(state);
				},
				A2(elm$core$Task$andThen, tellTaggers, elm$time$Time$now));
		}
	});
var elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var elm$time$Time$subMap = F2(
	function (f, _n0) {
		var interval = _n0.a;
		var tagger = _n0.b;
		return A2(
			elm$time$Time$Every,
			interval,
			A2(elm$core$Basics$composeL, f, tagger));
	});
_Platform_effectManagers['Time'] = _Platform_createManager(elm$time$Time$init, elm$time$Time$onEffects, elm$time$Time$onSelfMsg, 0, elm$time$Time$subMap);
var elm$time$Time$subscription = _Platform_leaf('Time');
var elm$time$Time$every = F2(
	function (interval, tagger) {
		return elm$time$Time$subscription(
			A2(elm$time$Time$Every, interval, tagger));
	});
var author$project$Main$subscriptions = function (model) {
	return _Utils_eq(model.presentStatus, author$project$Types$FetchingData) ? A2(elm$time$Time$every, 200, author$project$Types$NewFetchingInfo) : elm$core$Platform$Sub$none;
};
var elm$core$Basics$neq = _Utils_notEqual;
var elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var author$project$FootballCalendar$appendToListofGames = F2(
	function (initialGames, lgames) {
		appendToListofGames:
		while (true) {
			if (!lgames.b) {
				return initialGames;
			} else {
				var head = lgames.a;
				var rest = lgames.b;
				var newinitial = A2(
					elm$core$List$filter,
					function (game) {
						return !_Utils_eq(game, head);
					},
					initialGames);
				var newini2 = _Utils_ap(
					_List_fromArray(
						[head]),
					newinitial);
				var $temp$initialGames = newini2,
					$temp$lgames = rest;
				initialGames = $temp$initialGames;
				lgames = $temp$lgames;
				continue appendToListofGames;
			}
		}
	});
var author$project$FootballCalendar$filterGamesbyMbSeasonLeague = F3(
	function (lgames, mbseasonid, leagueid) {
		if (mbseasonid.$ === 'Nothing') {
			return _List_Nil;
		} else {
			var seasonid = mbseasonid.a;
			return A2(
				elm$core$List$filter,
				function (game) {
					return _Utils_eq(game.seasonId, seasonid) && _Utils_eq(game.leagueId, leagueid);
				},
				lgames);
		}
	});
var elm$core$Basics$negate = function (n) {
	return -n;
};
var author$project$FootballCalendar$haveAllGamesInSeason = function (model) {
	var selSeason = A2(elm$core$Maybe$withDefault, -999, model.selectedSeasonId);
	var lgames = A3(author$project$FootballCalendar$filterGamesbyMbSeasonLeague, model.games, model.selectedSeasonId, model.selectedLeague);
	var nrWeekGames = function () {
		if (!lgames.b) {
			return 0;
		} else {
			var headg = lgames.a;
			var rest = lgames.b;
			return elm$core$List$length(
				A2(
					elm$core$List$filter,
					function (game) {
						return _Utils_eq(game.weekNr, headg.weekNr);
					},
					lgames));
		}
	}();
	var nrSeasonGames = (((nrWeekGames * 2) - 1) * 2) * nrWeekGames;
	var boolout = elm$core$List$length(lgames) && _Utils_eq(
		elm$core$List$length(lgames),
		nrSeasonGames);
	return boolout;
};
var author$project$FootballCalendar$weekNrGameNrWeekComparison = F2(
	function (g1, g2) {
		var _n0 = A2(elm$core$Basics$compare, g1.weekNr, g2.weekNr);
		switch (_n0.$) {
			case 'GT':
				return elm$core$Basics$GT;
			case 'LT':
				return elm$core$Basics$LT;
			default:
				var _n1 = _Utils_Tuple2(g1.gameNrWeek, g2.gameNrWeek);
				if ((_n1.a.$ === 'Just') && (_n1.b.$ === 'Just')) {
					var g1NrWeek = _n1.a.a;
					var g2NrWeek = _n1.b.a;
					return A2(elm$core$Basics$compare, g1NrWeek, g2NrWeek);
				} else {
					return A2(elm$core$Basics$compare, g1.matchDate, g2.matchDate);
				}
		}
	});
var author$project$FootballStandings$appendToListofRankEntries = F2(
	function (initialRankEntries, lranks) {
		appendToListofRankEntries:
		while (true) {
			if (!lranks.b) {
				return initialRankEntries;
			} else {
				var head = lranks.a;
				var rest = lranks.b;
				var newinitial = A2(
					elm$core$List$filter,
					function (entry) {
						return (!_Utils_eq(entry.weekNr, head.weekNr)) || ((!_Utils_eq(entry.season, head.season)) || ((!_Utils_eq(entry.league, head.league)) || (!_Utils_eq(entry.team, head.team))));
					},
					initialRankEntries);
				var newini2 = _Utils_ap(
					_List_fromArray(
						[head]),
					newinitial);
				var $temp$initialRankEntries = newini2,
					$temp$lranks = rest;
				initialRankEntries = $temp$initialRankEntries;
				lranks = $temp$lranks;
				continue appendToListofRankEntries;
			}
		}
	});
var author$project$FootballStandings$filterEntrybyWeekMbSeasonLeague = F4(
	function (lentries, weeknr, mbseasonid, leagueid) {
		if (mbseasonid.$ === 'Nothing') {
			return _List_Nil;
		} else {
			var seasonid = mbseasonid.a;
			return A2(
				elm$core$List$filter,
				function (entry) {
					return _Utils_eq(entry.weekNr, weeknr) && (_Utils_eq(entry.season, seasonid) && _Utils_eq(entry.league, leagueid));
				},
				lentries);
		}
	});
var author$project$FootballStandings$haveAllEntriesForWeek = function (model) {
	var lentries = A4(author$project$FootballStandings$filterEntrybyWeekMbSeasonLeague, model.rankTable, model.weekNr, model.selectedSeasonId, model.selectedLeague);
	var boolout = elm$core$List$length(lentries) > 0;
	return boolout;
};
var author$project$FootballStandingsCalc$nrPointsPerGameDrawn = 1;
var author$project$FootballStandingsCalc$nrPointsPerGameLost = 0;
var author$project$FootballStandingsCalc$nrPointsPerGameWon = 3;
var author$project$FootballStandingsCalc$addAwayGame = F3(
	function (goalsHomeTeam, goalsAwayTeam, rankTableEntry) {
		var newNrGamesPlayed = rankTableEntry.nrGamesPlayed + 1;
		var newNrAwayGamesPlayed = rankTableEntry.nrAwayGamesPlayed + 1;
		var goalsSufferedToAdd = goalsHomeTeam;
		var newNrGoalsSuffered = rankTableEntry.nrGoalsSuffered + goalsSufferedToAdd;
		var newNrGoalsSufferedAway = rankTableEntry.nrGoalsSufferedAway + goalsSufferedToAdd;
		var goalsScoredToAdd = goalsAwayTeam;
		var newNrGoalsScored = rankTableEntry.nrGoalsScored + goalsScoredToAdd;
		var newNrGoalsScoredAway = rankTableEntry.nrGoalsScoredAway + goalsScoredToAdd;
		var nrGamesDrawnToAdd = _Utils_eq(goalsScoredToAdd, goalsSufferedToAdd) ? 1 : 0;
		var nrGamesLostToAdd = (_Utils_cmp(goalsScoredToAdd, goalsSufferedToAdd) < 0) ? 1 : 0;
		var nrGamesWonToAdd = (_Utils_cmp(goalsScoredToAdd, goalsSufferedToAdd) > 0) ? 1 : 0;
		var nrPointsToAdd = ((nrGamesWonToAdd * author$project$FootballStandingsCalc$nrPointsPerGameWon) + (nrGamesDrawnToAdd * author$project$FootballStandingsCalc$nrPointsPerGameDrawn)) + (nrGamesLostToAdd * author$project$FootballStandingsCalc$nrPointsPerGameLost);
		var newNrPoints = rankTableEntry.nrPoints + nrPointsToAdd;
		var _n0 = _Utils_Tuple2(rankTableEntry.nrAwayGamesWon + nrGamesWonToAdd, rankTableEntry.nrGamesWon + nrGamesWonToAdd);
		var newNrAwayGamesWon = _n0.a;
		var newNrGamesWon = _n0.b;
		var _n1 = _Utils_Tuple2(rankTableEntry.nrAwayGamesLost + nrGamesLostToAdd, rankTableEntry.nrGamesLost + nrGamesLostToAdd);
		var newNrAwayGamesLost = _n1.a;
		var newNrGamesLost = _n1.b;
		var _n2 = _Utils_Tuple2(rankTableEntry.nrAwayGamesDrawn + nrGamesDrawnToAdd, rankTableEntry.nrGamesDrawn + nrGamesDrawnToAdd);
		var newNrAwayGamesDrawn = _n2.a;
		var newNrGamesDrawn = _n2.b;
		return _Utils_update(
			rankTableEntry,
			{nrAwayGamesDrawn: newNrAwayGamesDrawn, nrAwayGamesLost: newNrAwayGamesLost, nrAwayGamesPlayed: newNrAwayGamesPlayed, nrAwayGamesWon: newNrAwayGamesWon, nrGamesDrawn: newNrGamesDrawn, nrGamesLost: newNrGamesLost, nrGamesPlayed: newNrGamesPlayed, nrGamesWon: newNrGamesWon, nrGoalsScored: newNrGoalsScored, nrGoalsScoredAway: newNrGoalsScoredAway, nrGoalsSuffered: newNrGoalsSuffered, nrGoalsSufferedAway: newNrGoalsSufferedAway, nrPoints: newNrPoints});
	});
var author$project$FootballStandingsCalc$addHomeGame = F3(
	function (goalsHomeTeam, goalsAwayTeam, rankTableEntry) {
		var newNrHomeGamesPlayed = rankTableEntry.nrHomeGamesPlayed + 1;
		var newNrGamesPlayed = rankTableEntry.nrGamesPlayed + 1;
		var goalsSufferedToAdd = goalsAwayTeam;
		var newNrGoalsSuffered = rankTableEntry.nrGoalsSuffered + goalsSufferedToAdd;
		var newNrGoalsSufferedHome = rankTableEntry.nrGoalsSufferedHome + goalsSufferedToAdd;
		var goalsScoredToAdd = goalsHomeTeam;
		var newNrGoalsScored = rankTableEntry.nrGoalsScored + goalsScoredToAdd;
		var newNrGoalsScoredHome = rankTableEntry.nrGoalsScoredHome + goalsScoredToAdd;
		var nrGamesDrawnToAdd = _Utils_eq(goalsScoredToAdd, goalsSufferedToAdd) ? 1 : 0;
		var nrGamesLostToAdd = (_Utils_cmp(goalsScoredToAdd, goalsSufferedToAdd) < 0) ? 1 : 0;
		var nrGamesWonToAdd = (_Utils_cmp(goalsScoredToAdd, goalsSufferedToAdd) > 0) ? 1 : 0;
		var nrPointsToAdd = ((nrGamesWonToAdd * author$project$FootballStandingsCalc$nrPointsPerGameWon) + (nrGamesDrawnToAdd * author$project$FootballStandingsCalc$nrPointsPerGameDrawn)) + (nrGamesLostToAdd * author$project$FootballStandingsCalc$nrPointsPerGameLost);
		var newNrPoints = rankTableEntry.nrPoints + nrPointsToAdd;
		var _n0 = _Utils_Tuple2(rankTableEntry.nrHomeGamesWon + nrGamesWonToAdd, rankTableEntry.nrGamesWon + nrGamesWonToAdd);
		var newNrHomeGamesWon = _n0.a;
		var newNrGamesWon = _n0.b;
		var _n1 = _Utils_Tuple2(rankTableEntry.nrHomeGamesLost + nrGamesLostToAdd, rankTableEntry.nrGamesLost + nrGamesLostToAdd);
		var newNrHomeGamesLost = _n1.a;
		var newNrGamesLost = _n1.b;
		var _n2 = _Utils_Tuple2(rankTableEntry.nrHomeGamesDrawn + nrGamesDrawnToAdd, rankTableEntry.nrGamesDrawn + nrGamesDrawnToAdd);
		var newNrHomeGamesDrawn = _n2.a;
		var newNrGamesDrawn = _n2.b;
		return _Utils_update(
			rankTableEntry,
			{nrGamesDrawn: newNrGamesDrawn, nrGamesLost: newNrGamesLost, nrGamesPlayed: newNrGamesPlayed, nrGamesWon: newNrGamesWon, nrGoalsScored: newNrGoalsScored, nrGoalsScoredHome: newNrGoalsScoredHome, nrGoalsSuffered: newNrGoalsSuffered, nrGoalsSufferedHome: newNrGoalsSufferedHome, nrHomeGamesDrawn: newNrHomeGamesDrawn, nrHomeGamesLost: newNrHomeGamesLost, nrHomeGamesPlayed: newNrHomeGamesPlayed, nrHomeGamesWon: newNrHomeGamesWon, nrPoints: newNrPoints});
	});
var elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(
			A3(elm$core$List$foldl, elm$core$Basics$max, x, xs));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$FootballStandingsCalc$biggestGoalDifferenceInAllGamesComparison = F6(
	function (seasonid, leagueid, upToWeekNr, lgames, entry1, entry2) {
		var teamGoalsSufferedAgainstOtherTeams = F2(
			function (teamid, game) {
				return _Utils_eq(teamid, game.homeTeamId) ? A2(elm$core$Maybe$withDefault, 0, game.goalsAwayTeam) : (_Utils_eq(teamid, game.awayTeamId) ? A2(elm$core$Maybe$withDefault, 0, game.goalsHomeTeam) : 0);
			});
		var teamGoalsScoredAgainstOtherTeams = F2(
			function (teamid, game) {
				return _Utils_eq(teamid, game.homeTeamId) ? A2(elm$core$Maybe$withDefault, 0, game.goalsHomeTeam) : (_Utils_eq(teamid, game.awayTeamId) ? A2(elm$core$Maybe$withDefault, 0, game.goalsAwayTeam) : 0);
			});
		var goalDifferenceInGame = F2(
			function (teamid, game) {
				return A2(teamGoalsScoredAgainstOtherTeams, teamid, game) - A2(teamGoalsSufferedAgainstOtherTeams, teamid, game);
			});
		var maxGoalDifferenceForTeam = F2(
			function (teamid, thegames) {
				return A2(
					elm$core$Maybe$withDefault,
					0,
					elm$core$List$maximum(
						A2(
							elm$core$List$map,
							function (game) {
								return A2(goalDifferenceInGame, teamid, game);
							},
							thegames)));
			});
		var filteredGames = A2(
			elm$core$List$filter,
			function (game) {
				return _Utils_eq(game.seasonId, seasonid) && (_Utils_eq(game.leagueId, leagueid) && (_Utils_cmp(game.weekNr, upToWeekNr) < 1));
			},
			lgames);
		var relevantGamesForTeam1 = A2(
			elm$core$List$filter,
			function (game) {
				return _Utils_eq(game.homeTeamId, entry1.team) || _Utils_eq(game.awayTeamId, entry1.team);
			},
			filteredGames);
		var maxGoalDifferenceForTeam1 = A2(maxGoalDifferenceForTeam, entry1.team, relevantGamesForTeam1);
		var relevantGamesForTeam2 = A2(
			elm$core$List$filter,
			function (game) {
				return _Utils_eq(game.homeTeamId, entry2.team) || _Utils_eq(game.awayTeamId, entry2.team);
			},
			filteredGames);
		var maxGoalDifferenceForTeam2 = A2(maxGoalDifferenceForTeam, entry2.team, relevantGamesForTeam2);
		return A2(elm$core$Basics$compare, maxGoalDifferenceForTeam1, maxGoalDifferenceForTeam2);
	});
var author$project$FootballStandingsCalc$nrGoalsScoredInAllGamesComparison = F2(
	function (entry1, entry2) {
		return A2(elm$core$Basics$compare, entry1.nrGoalsScored, entry2.nrGoalsScored);
	});
var author$project$FootballStandingsCalc$nrGoalsSufferedInAllGamesComparison = F2(
	function (entry1, entry2) {
		return A2(elm$core$Basics$compare, -entry1.nrGoalsSuffered, -entry2.nrGoalsSuffered);
	});
var author$project$FootballStandingsCalc$nrPointsComparison = F2(
	function (entry1, entry2) {
		return A2(elm$core$Basics$compare, entry1.nrPoints, entry2.nrPoints);
	});
var author$project$FootballStandingsCalc$pointsWonAgainstAndGoalDifference = F6(
	function (seasonid, leagueid, upToWeekNr, lgames, team1id, team2id) {
		var team2GoalsScoredAgainstTeam1 = F3(
			function (t1id, t2id, game) {
				return (_Utils_eq(t1id, game.homeTeamId) && _Utils_eq(t2id, game.awayTeamId)) ? A2(elm$core$Maybe$withDefault, 0, game.goalsAwayTeam) : ((_Utils_eq(t2id, game.homeTeamId) && _Utils_eq(t1id, game.awayTeamId)) ? A2(elm$core$Maybe$withDefault, 0, game.goalsHomeTeam) : 0);
			});
		var team1GoalsScoredAgainstTeam2 = F3(
			function (t1id, t2id, game) {
				return (_Utils_eq(t1id, game.homeTeamId) && _Utils_eq(t2id, game.awayTeamId)) ? A2(elm$core$Maybe$withDefault, 0, game.goalsHomeTeam) : ((_Utils_eq(t2id, game.homeTeamId) && _Utils_eq(t1id, game.awayTeamId)) ? A2(elm$core$Maybe$withDefault, 0, game.goalsAwayTeam) : 0);
			});
		var relevantGames = A2(
			elm$core$List$filter,
			function (game) {
				return (!_Utils_eq(game.goalsHomeTeam, elm$core$Maybe$Nothing)) && (!_Utils_eq(game.goalsAwayTeam, elm$core$Maybe$Nothing));
			},
			A2(
				elm$core$List$filter,
				function (game) {
					return (_Utils_eq(game.homeTeamId, team1id) && _Utils_eq(game.awayTeamId, team2id)) || (_Utils_eq(game.homeTeamId, team2id) && _Utils_eq(game.awayTeamId, team1id));
				},
				A2(
					elm$core$List$filter,
					function (game) {
						return _Utils_eq(game.seasonId, seasonid) && (_Utils_eq(game.leagueId, leagueid) && (_Utils_cmp(game.weekNr, upToWeekNr) < 1));
					},
					lgames)));
		var pointsForTeamIds = F3(
			function (t1id, t2id, game) {
				return (_Utils_cmp(
					A3(team1GoalsScoredAgainstTeam2, t1id, t2id, game),
					A3(team2GoalsScoredAgainstTeam1, t1id, t2id, game)) > 0) ? _Utils_Tuple2(author$project$FootballStandingsCalc$nrPointsPerGameWon, author$project$FootballStandingsCalc$nrPointsPerGameLost) : ((_Utils_cmp(
					A3(team2GoalsScoredAgainstTeam1, t1id, t2id, game),
					A3(team1GoalsScoredAgainstTeam2, t1id, t2id, game)) > 0) ? _Utils_Tuple2(author$project$FootballStandingsCalc$nrPointsPerGameLost, author$project$FootballStandingsCalc$nrPointsPerGameWon) : _Utils_Tuple2(author$project$FootballStandingsCalc$nrPointsPerGameDrawn, author$project$FootballStandingsCalc$nrPointsPerGameDrawn));
			});
		var goalDifferenceAgainst = F3(
			function (t1id, t2id, game) {
				return A3(team1GoalsScoredAgainstTeam2, t1id, t2id, game) - A3(team2GoalsScoredAgainstTeam1, t1id, t2id, game);
			});
		var goalDifferenceAgainstT1vsT2 = A3(
			elm$core$List$foldl,
			F2(
				function (gdifInGame, acc) {
					return gdifInGame + acc;
				}),
			0,
			A2(
				elm$core$List$map,
				function (game) {
					return A3(goalDifferenceAgainst, team1id, team2id, game);
				},
				relevantGames));
		var _n0 = A3(
			elm$core$List$foldl,
			F2(
				function (_n1, _n2) {
					var pts1 = _n1.a;
					var pts2 = _n1.b;
					var acc1 = _n2.a;
					var acc2 = _n2.b;
					return _Utils_Tuple2(pts1 + acc1, pts2 + acc2);
				}),
			_Utils_Tuple2(0, 0),
			A2(
				elm$core$List$map,
				function (game) {
					return A3(pointsForTeamIds, team1id, team2id, game);
				},
				relevantGames));
		var ptsTeam1 = _n0.a;
		var ptsTeam2 = _n0.b;
		return (elm$core$List$length(relevantGames) > 0) ? elm$core$Maybe$Just(
			_Utils_Tuple3(ptsTeam1, ptsTeam2, goalDifferenceAgainstT1vsT2)) : elm$core$Maybe$Nothing;
	});
var author$project$FootballStandingsCalc$pointsWonAgainstAndGoalDifferenceComparison = F6(
	function (seasonid, leagueid, upToWeekNr, lgames, entry1, entry2) {
		var mbTuple = A6(author$project$FootballStandingsCalc$pointsWonAgainstAndGoalDifference, seasonid, leagueid, upToWeekNr, lgames, entry1.team, entry2.team);
		if (mbTuple.$ === 'Nothing') {
			return elm$core$Basics$EQ;
		} else {
			var _n1 = mbTuple.a;
			var ptsTeam1 = _n1.a;
			var ptsTeam2 = _n1.b;
			var goalDifferenceT1minusT2 = _n1.c;
			var _n2 = A2(elm$core$Basics$compare, ptsTeam1, ptsTeam2);
			switch (_n2.$) {
				case 'GT':
					return elm$core$Basics$GT;
				case 'LT':
					return elm$core$Basics$LT;
				default:
					return (goalDifferenceT1minusT2 > 0) ? elm$core$Basics$GT : ((goalDifferenceT1minusT2 < 0) ? elm$core$Basics$LT : elm$core$Basics$EQ);
			}
		}
	});
var author$project$FootballStandingsCalc$rankTableEntriesComparison = F6(
	function (seasonid, leagueid, upToWeekNr, lgames, entry1, entry2) {
		var thelcomparisonFuncs = _List_fromArray(
			[
				author$project$FootballStandingsCalc$nrPointsComparison,
				A4(author$project$FootballStandingsCalc$pointsWonAgainstAndGoalDifferenceComparison, seasonid, leagueid, upToWeekNr, lgames),
				A4(author$project$FootballStandingsCalc$biggestGoalDifferenceInAllGamesComparison, seasonid, leagueid, upToWeekNr, lgames),
				F2(
				function (entry1_, entry2_) {
					return A2(elm$core$Basics$compare, entry1_.nrGamesWon, entry2_.nrGamesWon);
				}),
				author$project$FootballStandingsCalc$nrGoalsScoredInAllGamesComparison,
				author$project$FootballStandingsCalc$nrGoalsSufferedInAllGamesComparison
			]);
		var rankTableEntriesAuxComparisonFunc = function (lcomparisonFuncs) {
			rankTableEntriesAuxComparisonFunc:
			while (true) {
				if (!lcomparisonFuncs.b) {
					return elm$core$Basics$EQ;
				} else {
					var headFunc = lcomparisonFuncs.a;
					var rstFuncs = lcomparisonFuncs.b;
					var _n1 = A2(headFunc, entry1, entry2);
					switch (_n1.$) {
						case 'GT':
							return elm$core$Basics$GT;
						case 'LT':
							return elm$core$Basics$LT;
						default:
							var $temp$lcomparisonFuncs = rstFuncs;
							lcomparisonFuncs = $temp$lcomparisonFuncs;
							continue rankTableEntriesAuxComparisonFunc;
					}
				}
			}
		};
		return rankTableEntriesAuxComparisonFunc(thelcomparisonFuncs);
	});
var elm$core$Dict$fromList = function (assocs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, dict) {
				var key = _n0.a;
				var value = _n0.b;
				return A3(elm$core$Dict$insert, key, value, dict);
			}),
		elm$core$Dict$empty,
		assocs);
};
var elm$core$Dict$values = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2(elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var elm$core$List$sortBy = _List_sortBy;
var elm$core$List$sort = function (xs) {
	return A2(elm$core$List$sortBy, elm$core$Basics$identity, xs);
};
var author$project$FootballStandingsCalc$dealWithTiedTeams = F5(
	function (seasonid, leagueid, upToWeekNr, lgames, lrankentries) {
		var drankentries = elm$core$Dict$fromList(
			A2(
				elm$core$List$indexedMap,
				F2(
					function (i, entry) {
						return _Utils_Tuple2(i, entry);
					}),
				lrankentries));
		var compareFunc = A4(author$project$FootballStandingsCalc$rankTableEntriesComparison, seasonid, leagueid, upToWeekNr, lgames);
		var mbupdateRanknr = F2(
			function (idx, dacc) {
				var mbEntryPrevious = A2(elm$core$Dict$get, idx - 1, dacc);
				var mbEntryNext = A2(elm$core$Dict$get, idx, dacc);
				var _n0 = _Utils_Tuple2(mbEntryNext, mbEntryPrevious);
				if ((_n0.a.$ === 'Just') && (_n0.b.$ === 'Just')) {
					var entryNext = _n0.a.a;
					var entryPrevious = _n0.b.a;
					return _Utils_eq(
						A2(compareFunc, entryNext, entryPrevious),
						elm$core$Basics$EQ) ? A3(
						elm$core$Dict$insert,
						idx,
						_Utils_update(
							entryNext,
							{weekRank: entryPrevious.weekRank}),
						dacc) : dacc;
				} else {
					return dacc;
				}
			});
		return elm$core$Dict$values(
			A3(
				elm$core$List$foldl,
				F2(
					function (idx, dacc) {
						return A2(mbupdateRanknr, idx, dacc);
					}),
				drankentries,
				elm$core$List$sort(
					elm$core$Dict$keys(drankentries))));
	});
var author$project$FootballStandingsCalc$emptyRankTableEntry = F6(
	function (teamId, teamName_, teamShortName_, league_, season_, weekNr_) {
		return {league: league_, leagueName: '', nrAwayGamesDrawn: 0, nrAwayGamesLost: 0, nrAwayGamesPlayed: 0, nrAwayGamesWon: 0, nrGamesDrawn: 0, nrGamesLost: 0, nrGamesPlayed: 0, nrGamesWon: 0, nrGoalsScored: 0, nrGoalsScoredAway: 0, nrGoalsScoredHome: 0, nrGoalsSuffered: 0, nrGoalsSufferedAway: 0, nrGoalsSufferedHome: 0, nrHomeGamesDrawn: 0, nrHomeGamesLost: 0, nrHomeGamesPlayed: 0, nrHomeGamesWon: 0, nrPoints: 0, season: season_, seasonName: '', team: teamId, teamName: teamName_, teamShortName: teamShortName_, weekNr: weekNr_, weekRank: 0};
	});
var elm$core$List$sortWith = _List_sortWith;
var author$project$FootballStandingsCalc$determineRankEntriesFromGames = F4(
	function (lgames, seasonid, leagueid, upToWeekNr) {
		var theEmptyHomeRankTableEntry = function (game) {
			return A6(author$project$FootballStandingsCalc$emptyRankTableEntry, game.homeTeamId, game.homeTeamName, game.homeTeam, game.leagueId, game.seasonId, upToWeekNr);
		};
		var theEmptyAwayRankTableEntry = function (game) {
			return A6(author$project$FootballStandingsCalc$emptyRankTableEntry, game.awayTeamId, game.awayTeamName, game.awayTeam, game.leagueId, game.seasonId, upToWeekNr);
		};
		var updateDictfunc = F2(
			function (game, dictEntriesAcc) {
				var dictAfterInsertHomeTeam = F2(
					function (goalsHomeTeam_, goalsAwayTeam_) {
						var _n2 = A2(elm$core$Dict$get, game.homeTeamId, dictEntriesAcc);
						if (_n2.$ === 'Nothing') {
							return function (nentry) {
								return A3(elm$core$Dict$insert, game.homeTeamId, nentry, dictEntriesAcc);
							}(
								A3(
									author$project$FootballStandingsCalc$addHomeGame,
									goalsHomeTeam_,
									goalsAwayTeam_,
									theEmptyHomeRankTableEntry(game)));
						} else {
							var tentry = _n2.a;
							return function (nentry) {
								return A3(elm$core$Dict$insert, game.homeTeamId, nentry, dictEntriesAcc);
							}(
								A3(author$project$FootballStandingsCalc$addHomeGame, goalsHomeTeam_, goalsAwayTeam_, tentry));
						}
					});
				var dictAfterInsertAwayAndHomeTeam = F2(
					function (goalsHomeTeam_, goalsAwayTeam_) {
						var dAfterInsertHomeTeam = A2(dictAfterInsertHomeTeam, goalsHomeTeam_, goalsAwayTeam_);
						var _n1 = A2(elm$core$Dict$get, game.awayTeamId, dAfterInsertHomeTeam);
						if (_n1.$ === 'Nothing') {
							return function (nentry) {
								return A3(elm$core$Dict$insert, game.awayTeamId, nentry, dAfterInsertHomeTeam);
							}(
								A3(
									author$project$FootballStandingsCalc$addAwayGame,
									goalsHomeTeam_,
									goalsAwayTeam_,
									theEmptyAwayRankTableEntry(game)));
						} else {
							var tentry = _n1.a;
							return function (nentry) {
								return A3(elm$core$Dict$insert, game.awayTeamId, nentry, dAfterInsertHomeTeam);
							}(
								A3(author$project$FootballStandingsCalc$addAwayGame, goalsHomeTeam_, goalsAwayTeam_, tentry));
						}
					});
				var _n0 = _Utils_Tuple2(game.goalsHomeTeam, game.goalsAwayTeam);
				if ((_n0.a.$ === 'Just') && (_n0.b.$ === 'Just')) {
					var goalsHomeTeam = _n0.a.a;
					var goalsAwayTeam = _n0.b.a;
					return A2(dictAfterInsertAwayAndHomeTeam, goalsHomeTeam, goalsAwayTeam);
				} else {
					return dictEntriesAcc;
				}
			});
		var relevantGames = A2(
			elm$core$List$filter,
			function (game) {
				return (!_Utils_eq(game.goalsHomeTeam, elm$core$Maybe$Nothing)) && (!_Utils_eq(game.goalsAwayTeam, elm$core$Maybe$Nothing));
			},
			A2(
				elm$core$List$filter,
				function (game) {
					return _Utils_eq(game.seasonId, seasonid) && (_Utils_eq(game.leagueId, leagueid) && (_Utils_cmp(game.weekNr, upToWeekNr) < 1));
				},
				lgames));
		return A5(
			author$project$FootballStandingsCalc$dealWithTiedTeams,
			seasonid,
			leagueid,
			upToWeekNr,
			lgames,
			A2(
				elm$core$List$indexedMap,
				F2(
					function (i, entry) {
						return _Utils_update(
							entry,
							{weekRank: i + 1});
					}),
				elm$core$List$reverse(
					A2(
						elm$core$List$sortWith,
						A4(author$project$FootballStandingsCalc$rankTableEntriesComparison, seasonid, leagueid, upToWeekNr, lgames),
						elm$core$Dict$values(
							A3(
								elm$core$List$foldl,
								F2(
									function (game_, dictEntriesAcc_) {
										return A2(updateDictfunc, game_, dictEntriesAcc_);
									}),
								elm$core$Dict$empty,
								relevantGames))))));
	});
var author$project$Main$checkAndGetNewSeasonRangeCache = F3(
	function (leagueId, lseasons, dCacheSeasons) {
		var lseason = A2(elm$core$Dict$get, leagueId, dCacheSeasons);
		var newCacheSeasonRange = function () {
			if (lseason.$ === 'Nothing') {
				return A3(elm$core$Dict$insert, leagueId, lseasons, dCacheSeasons);
			} else {
				return dCacheSeasons;
			}
		}();
		return newCacheSeasonRange;
	});
var author$project$Main$checkAndGetNewWeekRangeCache = F5(
	function (leagueId, mbseasonId, lweeks, tabId, dCacheWeekRange) {
		if (mbseasonId.$ === 'Just') {
			var seasonId = mbseasonId.a;
			var currWeekList = A2(
				elm$core$Dict$get,
				_Utils_Tuple3(leagueId, seasonId, tabId),
				dCacheWeekRange);
			var newCacheDict = function () {
				if (currWeekList.$ === 'Nothing') {
					return A3(
						elm$core$Dict$insert,
						_Utils_Tuple3(leagueId, seasonId, tabId),
						lweeks,
						dCacheWeekRange);
				} else {
					return dCacheWeekRange;
				}
			}();
			return newCacheDict;
		} else {
			return dCacheWeekRange;
		}
	});
var author$project$Main$errorToString = function (error) {
	switch (error.$) {
		case 'BadUrl':
			var str1 = error.a;
			return 'BadUrl : ' + str1;
		case 'Timeout':
			return 'Timeout ';
		case 'NetworkError':
			return 'Network Error';
		case 'BadStatus':
			var bsint = error.a;
			return 'BadStatus : ' + elm$core$String$fromInt(bsint);
		default:
			var str2 = error.a;
			return 'BadBody : ' + str2;
	}
};
var author$project$FootballCalendar$urlForAllSeasonMatches = F4(
	function (apiUrl, leagueId, seasonId, fileOrDbSource) {
		return ((elm$core$String$toLower(fileOrDbSource) === 'file') || (elm$core$String$toLower(fileOrDbSource) === 'fileSource')) ? (author$project$FootballCalendar$urlForMatches(apiUrl) + ('allseasonweeks_footballmatches__season_' + (elm$core$String$fromInt(seasonId) + ('__league_' + (elm$core$String$fromInt(leagueId) + '.json'))))) : (author$project$FootballCalendar$urlForMatches(apiUrl) + ('season/' + (elm$core$String$fromInt(seasonId) + ('/league/' + (elm$core$String$fromInt(leagueId) + '/allSeasonWeeks/?format=json')))));
	});
var author$project$Main$getAllSeasonGamesFromFile = F4(
	function (apiUrl, compId, seasonId, theMsg) {
		return elm$http$Http$request(
			{
				body: elm$http$Http$emptyBody,
				expect: A2(elm$http$Http$expectJson, theMsg, author$project$FootballCalendar$payloadGameDecoder),
				headers: author$project$Main$theHeaders,
				method: 'GET',
				timeout: elm$core$Maybe$Nothing,
				tracker: elm$core$Maybe$Nothing,
				url: A4(author$project$FootballCalendar$urlForAllSeasonMatches, apiUrl, compId, seasonId, 'file')
			});
	});
var author$project$Types$GameWithJustTeamIds = F9(
	function (matchDate, homeTeamId, goalsHomeTeam, awayTeamId, goalsAwayTeam, weekNr, gameNrWeek, seasonId, leagueId) {
		return {awayTeamId: awayTeamId, gameNrWeek: gameNrWeek, goalsAwayTeam: goalsAwayTeam, goalsHomeTeam: goalsHomeTeam, homeTeamId: homeTeamId, leagueId: leagueId, matchDate: matchDate, seasonId: seasonId, weekNr: weekNr};
	});
var author$project$FootballCalendar$gameJustTeamIdsDecoder = A3(
	NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'league',
	elm$json$Json$Decode$int,
	A3(
		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'season',
		elm$json$Json$Decode$int,
		A4(
			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
			'gameNrWeek',
			elm$json$Json$Decode$maybe(elm$json$Json$Decode$int),
			elm$core$Maybe$Nothing,
			A3(
				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
				'weekNr',
				elm$json$Json$Decode$int,
				A4(
					NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
					'goalsAwayTeam',
					elm$json$Json$Decode$maybe(elm$json$Json$Decode$int),
					elm$core$Maybe$Nothing,
					A3(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'awayTeam',
						elm$json$Json$Decode$int,
						A4(
							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
							'goalsHomeTeam',
							elm$json$Json$Decode$maybe(elm$json$Json$Decode$int),
							elm$core$Maybe$Nothing,
							A3(
								NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
								'homeTeam',
								elm$json$Json$Decode$int,
								A3(
									NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
									'matchDate',
									elm$json$Json$Decode$string,
									elm$json$Json$Decode$succeed(author$project$Types$GameWithJustTeamIds))))))))));
var author$project$FootballCalendar$payloadGameJustTeamIdsDecoder = A2(
	elm$json$Json$Decode$field,
	'results',
	elm$json$Json$Decode$list(author$project$FootballCalendar$gameJustTeamIdsDecoder));
var author$project$Main$getAllSeasonGamesFromdb = F4(
	function (apiUrl, compId, seasonId, theMsg) {
		return elm$http$Http$request(
			{
				body: elm$http$Http$emptyBody,
				expect: A2(elm$http$Http$expectJson, theMsg, author$project$FootballCalendar$payloadGameJustTeamIdsDecoder),
				headers: author$project$Main$theHeaders,
				method: 'GET',
				timeout: elm$core$Maybe$Nothing,
				tracker: elm$core$Maybe$Nothing,
				url: A4(author$project$FootballCalendar$urlForAllSeasonMatches, apiUrl, compId, seasonId, 'db')
			});
	});
var elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(x);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Main$getSeasonIdFromSeasonRangeHead = function (lseasons) {
	var srange = elm$core$List$reverse(
		A2(
			elm$core$List$sortBy,
			function ($) {
				return $.seasonId;
			},
			lseasons));
	var _n0 = elm$core$List$head(srange);
	if (_n0.$ === 'Just') {
		var s = _n0.a;
		return elm$core$Maybe$Just(s.seasonId);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$FootballCalendar$urlForWeekRangeInMatchTable = F4(
	function (apiUrl, leagueId, seasonId, fileOrDbSource) {
		return ((elm$core$String$toLower(fileOrDbSource) === 'file') || (elm$core$String$toLower(fileOrDbSource) === 'fileSource')) ? (author$project$FootballCalendar$baseUrlForMatchTable(apiUrl) + ('weekrange/weekrange__league_' + (elm$core$String$fromInt(leagueId) + ('__season_' + (elm$core$String$fromInt(seasonId) + '.json'))))) : (author$project$FootballCalendar$baseUrlForMatchTable(apiUrl) + ('getWeekRange/' + ('?league=' + (elm$core$String$fromInt(leagueId) + ('&season=' + (elm$core$String$fromInt(seasonId) + '&format=json'))))));
	});
var author$project$FootballStandings$urlForWeekRangeInRankTable = F4(
	function (apiUrl, leagueId, seasonId, fileOrDbSource) {
		return ((elm$core$String$toLower(fileOrDbSource) === 'file') || (elm$core$String$toLower(fileOrDbSource) === 'fileSource')) ? (author$project$FootballStandings$baseUrlForStandingsTable(apiUrl) + ('weekrangefortblstandings/weekrangefortblstandings__league_' + (elm$core$String$fromInt(leagueId) + ('__season_' + (elm$core$String$fromInt(seasonId) + '.json'))))) : (author$project$FootballStandings$baseUrlForStandingsTable(apiUrl) + ('getWeekRangeForTblStandings/?league=' + (elm$core$String$fromInt(leagueId) + ('&season=' + (elm$core$String$fromInt(seasonId) + '&format=json')))));
	});
var author$project$Main$weekRangeDecoder = A2(elm$json$Json$Decode$field, 'weekNr', elm$json$Json$Decode$int);
var author$project$Types$NewWeekRange = function (a) {
	return {$: 'NewWeekRange', a: a};
};
var author$project$Main$getWeekRange = F5(
	function (apiUrl, leagueId, seasonId, fileOrDbSource, currentTab) {
		var _n0 = function () {
			if (currentTab.$ === 'CalendarTab') {
				return _Utils_Tuple2(author$project$FootballCalendar$urlForWeekRangeInMatchTable, author$project$Types$NewWeekRange);
			} else {
				return _Utils_Tuple2(author$project$FootballStandings$urlForWeekRangeInRankTable, author$project$Types$NewWeekRange);
			}
		}();
		var theUrlFunc = _n0.a;
		var theMsg = _n0.b;
		return elm$http$Http$request(
			{
				body: elm$http$Http$emptyBody,
				expect: A2(
					elm$http$Http$expectJson,
					theMsg,
					elm$json$Json$Decode$list(author$project$Main$weekRangeDecoder)),
				headers: author$project$Main$theHeaders,
				method: 'GET',
				timeout: elm$core$Maybe$Nothing,
				tracker: elm$core$Maybe$Nothing,
				url: A4(theUrlFunc, apiUrl, leagueId, seasonId, fileOrDbSource)
			});
	});
var elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var author$project$Main$isSeasonIdinSeasonRange = F2(
	function (id, lseasons) {
		var l = A2(
			elm$core$List$map,
			function ($) {
				return $.seasonId;
			},
			lseasons);
		return A2(elm$core$List$member, id, l);
	});
var author$project$Types$calendarTab = 1;
var author$project$Types$standingsTab = 2;
var author$project$Main$toTabId = function (currTab) {
	if (currTab.$ === 'StandingsTab') {
		return author$project$Types$standingsTab;
	} else {
		return author$project$Types$calendarTab;
	}
};
var author$project$Types$AllWeeks = {$: 'AllWeeks'};
var author$project$Types$GetSeasonRangeIfNotInCache = {$: 'GetSeasonRangeIfNotInCache'};
var author$project$Types$GetWeekRangeIfNotInCache = {$: 'GetWeekRangeIfNotInCache'};
var author$project$Types$NewGamesForStandingsCalc = F3(
	function (a, b, c) {
		return {$: 'NewGamesForStandingsCalc', a: a, b: b, c: c};
	});
var author$project$Types$NewGamesJustTeamIds = F2(
	function (a, b) {
		return {$: 'NewGamesJustTeamIds', a: a, b: b};
	});
var author$project$Types$PartialTable = {$: 'PartialTable'};
var author$project$Types$PresentNewInfo = {$: 'PresentNewInfo'};
var author$project$Types$ShowingData = {$: 'ShowingData'};
var author$project$Types$Submit = {$: 'Submit'};
var author$project$Types$createGameFromGameWithJustTeamIds = F3(
	function (almg, hometeam, awayteam) {
		return (_Utils_eq(almg.homeTeamId, hometeam.teamId) && _Utils_eq(almg.awayTeamId, awayteam.teamId)) ? elm$core$Maybe$Just(
			{awayTeam: awayteam.shortName, awayTeamId: almg.awayTeamId, awayTeamName: awayteam.teamName, gameNrWeek: almg.gameNrWeek, goalsAwayTeam: almg.goalsAwayTeam, goalsHomeTeam: almg.goalsHomeTeam, homeTeam: hometeam.shortName, homeTeamId: almg.homeTeamId, homeTeamName: hometeam.teamName, leagueId: almg.leagueId, matchDate: almg.matchDate, seasonId: almg.seasonId, weekNr: almg.weekNr}) : elm$core$Maybe$Nothing;
	});
var elm$core$Basics$ge = _Utils_ge;
var elm$core$Result$fromMaybe = F2(
	function (err, maybe) {
		if (maybe.$ === 'Just') {
			var v = maybe.a;
			return elm$core$Result$Ok(v);
		} else {
			return elm$core$Result$Err(err);
		}
	});
var elm$core$Result$withDefault = F2(
	function (def, result) {
		if (result.$ === 'Ok') {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var elm$core$String$toInt = _String_toInt;
var elm$core$Tuple$second = function (_n0) {
	var y = _n0.b;
	return y;
};
var elm$time$Time$posixToMillis = function (_n0) {
	var millis = _n0.a;
	return millis;
};
var author$project$Main$update = F2(
	function (msg, model) {
		update:
		while (true) {
			switch (msg.$) {
				case 'Noop':
					return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
				case 'ChangeTab':
					var tab = msg.a;
					var newModel = _Utils_update(
						model,
						{currentTab: tab});
					var $temp$msg = author$project$Types$GetWeekRangeIfNotInCache,
						$temp$model = newModel;
					msg = $temp$msg;
					model = $temp$model;
					continue update;
				case 'NewDisplayLanguage':
					var displaylanguage = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{language: displaylanguage}),
						elm$core$Platform$Cmd$none);
				case 'ChangeLeague':
					var val = msg.a;
					var newLeague = A2(
						elm$core$Result$withDefault,
						author$project$Main$getDefaultLeagueId,
						A2(
							elm$core$Result$fromMaybe,
							'couldn\'t convert to Int',
							elm$core$String$toInt(val)));
					var newModel = _Utils_update(
						model,
						{selectedLeague: newLeague});
					var $temp$msg = author$project$Types$GetSeasonRangeIfNotInCache,
						$temp$model = newModel;
					msg = $temp$msg;
					model = $temp$model;
					continue update;
				case 'GetSeasonRangeIfNotInCache':
					var theCachedSeasons = A2(elm$core$Dict$get, model.selectedLeague, model.cacheSeasonRanges);
					var _n1 = function () {
						if (theCachedSeasons.$ === 'Nothing') {
							return _Utils_Tuple2(
								model,
								A4(author$project$Main$getSeasonRange, model.apiUrl, model.selectedLeague, model.fileOrDbSource, model.currentTab));
						} else {
							var lseasons = theCachedSeasons.a;
							return A2(
								author$project$Main$update,
								author$project$Types$NewSeasonRange(
									elm$core$Result$Ok(lseasons)),
								model);
						}
					}();
					var newModel = _n1.a;
					var cmds = _n1.b;
					return _Utils_Tuple2(newModel, cmds);
				case 'ChangeSeason':
					var val = msg.a;
					var mbNewSeason = elm$core$String$toInt(val);
					if (mbNewSeason.$ === 'Nothing') {
						return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
					} else {
						var nr = mbNewSeason.a;
						var $temp$msg = author$project$Types$GetWeekRangeIfNotInCache,
							$temp$model = _Utils_update(
							model,
							{
								selectedSeasonId: elm$core$Maybe$Just(nr)
							});
						msg = $temp$msg;
						model = $temp$model;
						continue update;
					}
				case 'ChangeWeekMode':
					var newModel = function () {
						var _n4 = model.weekmode;
						if (_n4.$ === 'AllWeeks') {
							return _Utils_update(
								model,
								{weekmode: author$project$Types$SingleWeek});
						} else {
							return _Utils_update(
								model,
								{weekmode: author$project$Types$AllWeeks});
						}
					}();
					var $temp$msg = author$project$Types$PresentNewInfo,
						$temp$model = newModel;
					msg = $temp$msg;
					model = $temp$model;
					continue update;
				case 'ChangeOptionGoals':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{showGameResults: !model.showGameResults}),
						elm$core$Platform$Cmd$none);
				case 'ChangeTableSize':
					var _n5 = model.tablesize;
					if (_n5.$ === 'FullTable') {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{tablesize: author$project$Types$PartialTable}),
							elm$core$Platform$Cmd$none);
					} else {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{tablesize: author$project$Types$FullTable}),
							elm$core$Platform$Cmd$none);
					}
				case 'ChangeWeekNr':
					var val = msg.a;
					var newWeek = A2(
						elm$core$Result$withDefault,
						1,
						A2(
							elm$core$Result$fromMaybe,
							'couldn\'t convert to Int',
							elm$core$String$toInt(val)));
					var newModel = _Utils_update(
						model,
						{weekNr: newWeek});
					var $temp$msg = author$project$Types$PresentNewInfo,
						$temp$model = newModel;
					msg = $temp$msg;
					model = $temp$model;
					continue update;
				case 'NewSeasonRange':
					if (msg.a.$ === 'Ok') {
						var lseason = msg.a.a;
						var selectedSeason = function () {
							var _n6 = model.selectedSeasonId;
							if (_n6.$ === 'Just') {
								var s = _n6.a;
								return A2(author$project$Main$isSeasonIdinSeasonRange, s, lseason) ? elm$core$Maybe$Just(s) : author$project$Main$getSeasonIdFromSeasonRangeHead(lseason);
							} else {
								return author$project$Main$getSeasonIdFromSeasonRangeHead(lseason);
							}
						}();
						var newCacheSeasonRange = A3(author$project$Main$checkAndGetNewSeasonRangeCache, model.selectedLeague, lseason, model.cacheSeasonRanges);
						var newModel1 = _Utils_update(
							model,
							{cacheSeasonRanges: newCacheSeasonRange, seasonRange: lseason, selectedSeasonId: selectedSeason});
						var $temp$msg = author$project$Types$GetWeekRangeIfNotInCache,
							$temp$model = newModel1;
						msg = $temp$msg;
						model = $temp$model;
						continue update;
					} else {
						var error = msg.a.a;
						var errMessage = 'error while fetching season range info : ' + author$project$Main$errorToString(error);
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									alertMessage: elm$core$Maybe$Just(errMessage),
									presentStatus: author$project$Types$NoData,
									seasonRange: _List_Nil,
									selectedSeasonId: elm$core$Maybe$Nothing
								}),
							elm$core$Platform$Cmd$none);
					}
				case 'GetWeekRangeIfNotInCache':
					var _n7 = model.selectedSeasonId;
					if (_n7.$ === 'Nothing') {
						return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
					} else {
						var sId = _n7.a;
						var dictKey = _Utils_Tuple3(
							model.selectedLeague,
							sId,
							author$project$Main$toTabId(model.currentTab));
						var mbCachedWeekRange = A2(elm$core$Dict$get, dictKey, model.cacheWeekRange);
						if (mbCachedWeekRange.$ === 'Nothing') {
							return _Utils_Tuple2(
								model,
								A5(author$project$Main$getWeekRange, model.apiUrl, model.selectedLeague, sId, model.fileOrDbSource, model.currentTab));
						} else {
							var lWeeks = mbCachedWeekRange.a;
							var $temp$msg = author$project$Types$NewWeekRange(
								elm$core$Result$Ok(lWeeks)),
								$temp$model = model;
							msg = $temp$msg;
							model = $temp$model;
							continue update;
						}
					}
				case 'NewWeekRange':
					if (msg.a.$ === 'Ok') {
						var lweeks = msg.a.a;
						var newCacheWeekRange = A5(
							author$project$Main$checkAndGetNewWeekRangeCache,
							model.selectedLeague,
							model.selectedSeasonId,
							lweeks,
							author$project$Main$toTabId(model.currentTab),
							model.cacheWeekRange);
						var mbMaxWeek = elm$core$List$maximum(lweeks);
						var selectedWeek = function () {
							if (mbMaxWeek.$ === 'Nothing') {
								return model.weekNr;
							} else {
								var mw = mbMaxWeek.a;
								return (_Utils_cmp(mw, model.weekNr) > -1) ? model.weekNr : mw;
							}
						}();
						var newModel = _Utils_update(
							model,
							{cacheWeekRange: newCacheWeekRange, weekNr: selectedWeek});
						var $temp$msg = author$project$Types$PresentNewInfo,
							$temp$model = newModel;
						msg = $temp$msg;
						model = $temp$model;
						continue update;
					} else {
						var error = msg.a.a;
						var errMessage = 'error while fetching week range info : ' + author$project$Main$errorToString(error);
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									alertMessage: elm$core$Maybe$Just(errMessage)
								}),
							elm$core$Platform$Cmd$none);
					}
				case 'NewTeams':
					if (msg.b.$ === 'Ok') {
						var lgamesToConvert = msg.a;
						var lteams = msg.b.a;
						var updateFunc = F2(
							function (team, dTeams) {
								return A3(elm$core$Dict$insert, team.teamId, team, dTeams);
							});
						var newteamsDict = A3(
							elm$core$List$foldl,
							F2(
								function (team, dacc) {
									return A2(updateFunc, team, dacc);
								}),
							model.teams,
							lteams);
						var newModel = _Utils_update(
							model,
							{teams: newteamsDict});
						if (!elm$core$List$length(lgamesToConvert)) {
							return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
						} else {
							var $temp$msg = A2(
								author$project$Types$NewGamesJustTeamIds,
								false,
								elm$core$Result$Ok(lgamesToConvert)),
								$temp$model = newModel;
							msg = $temp$msg;
							model = $temp$model;
							continue update;
						}
					} else {
						var lgamesToConvert = msg.a;
						var error = msg.b.a;
						var errMessage = 'error while fetching teams info : ' + author$project$Main$errorToString(error);
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									alertMessage: elm$core$Maybe$Just(errMessage),
									games: _List_Nil,
									presentStatus: author$project$Types$NoData
								}),
							elm$core$Platform$Cmd$none);
					}
				case 'NewGamesJustTeamIds':
					if (msg.b.$ === 'Ok') {
						var bcanTryAgain = msg.a;
						var lgamesjustTeamIds = msg.b.a;
						var addTeamName = function (almg) {
							var _n10 = _Utils_Tuple2(
								A2(elm$core$Dict$get, almg.homeTeamId, model.teams),
								A2(elm$core$Dict$get, almg.awayTeamId, model.teams));
							if ((_n10.a.$ === 'Just') && (_n10.b.$ === 'Just')) {
								var hteam = _n10.a.a;
								var ateam = _n10.b.a;
								var _n11 = A3(author$project$Types$createGameFromGameWithJustTeamIds, almg, hteam, ateam);
								if (_n11.$ === 'Just') {
									var game = _n11.a;
									return _Utils_Tuple2(
										elm$core$Maybe$Just(game),
										elm$core$Maybe$Nothing);
								} else {
									return _Utils_Tuple2(
										elm$core$Maybe$Nothing,
										elm$core$Maybe$Just(almg));
								}
							} else {
								return _Utils_Tuple2(
									elm$core$Maybe$Nothing,
									elm$core$Maybe$Just(almg));
							}
						};
						var ltuples = A2(
							elm$core$List$map,
							function (almg) {
								return addTeamName(almg);
							},
							lgamesjustTeamIds);
						var lconvertedgames = A2(
							elm$core$List$filterMap,
							elm$core$Basics$identity,
							A2(elm$core$List$map, elm$core$Tuple$first, ltuples));
						var newlgames = A2(
							elm$core$List$sortWith,
							author$project$FootballCalendar$weekNrGameNrWeekComparison,
							A2(author$project$FootballCalendar$appendToListofGames, model.games, lconvertedgames));
						var newModel = _Utils_update(
							model,
							{games: newlgames});
						var lnotconvertedgames = A2(
							elm$core$List$filterMap,
							elm$core$Basics$identity,
							A2(elm$core$List$map, elm$core$Tuple$second, ltuples));
						if (elm$core$List$length(lnotconvertedgames) && bcanTryAgain) {
							return _Utils_Tuple2(
								_Utils_update(
									newModel,
									{
										alertMessage: elm$core$Maybe$Just('some teams info missing'),
										presentStatus: author$project$Types$ShowingData
									}),
								A3(author$project$Main$getTeams, model.apiUrl, model.fileOrDbSource, lnotconvertedgames));
						} else {
							if (elm$core$List$length(lnotconvertedgames) && (!bcanTryAgain)) {
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											alertMessage: elm$core$Maybe$Just('couldn\'t fetch info regarding some of the teams'),
											presentStatus: author$project$Types$ShowingData
										}),
									elm$core$Platform$Cmd$none);
							} else {
								var $temp$msg = author$project$Types$PresentNewInfo,
									$temp$model = _Utils_update(
									newModel,
									{alertMessage: elm$core$Maybe$Nothing, presentStatus: author$project$Types$ShowingData});
								msg = $temp$msg;
								model = $temp$model;
								continue update;
							}
						}
					} else {
						var bval = msg.a;
						var error = msg.b.a;
						var errMessage = 'error while fetching games info : ' + author$project$Main$errorToString(error);
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									alertMessage: elm$core$Maybe$Just(errMessage),
									games: _List_Nil,
									presentStatus: author$project$Types$NoData
								}),
							elm$core$Platform$Cmd$none);
					}
				case 'NewGamesForCalendar':
					if (msg.a.$ === 'Ok') {
						var lgames = msg.a.a;
						var newlgames = A2(
							elm$core$List$sortWith,
							author$project$FootballCalendar$weekNrGameNrWeekComparison,
							A2(author$project$FootballCalendar$appendToListofGames, model.games, lgames));
						return (elm$core$List$length(lgames) > 0) ? _Utils_Tuple2(
							_Utils_update(
								model,
								{alertMessage: elm$core$Maybe$Nothing, games: newlgames, presentStatus: author$project$Types$ShowingData}),
							elm$core$Platform$Cmd$none) : _Utils_Tuple2(
							_Utils_update(
								model,
								{
									alertMessage: elm$core$Maybe$Just('No Data was found !'),
									presentStatus: author$project$Types$NoData
								}),
							elm$core$Platform$Cmd$none);
					} else {
						var error = msg.a.a;
						var errMessage = 'error while fetching games info : ' + author$project$Main$errorToString(error);
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									alertMessage: elm$core$Maybe$Just(errMessage),
									games: _List_Nil,
									presentStatus: author$project$Types$NoData
								}),
							elm$core$Platform$Cmd$none);
					}
				case 'NewGamesForStandingsCalc':
					if (msg.c.$ === 'Ok') {
						var weekNr = msg.a;
						var seasonId = msg.b;
						var lgames = msg.c.a;
						var newlgames = A2(
							elm$core$List$sortWith,
							author$project$FootballCalendar$weekNrGameNrWeekComparison,
							A2(author$project$FootballCalendar$appendToListofGames, model.games, lgames));
						var newModel = (elm$core$List$length(lgames) > 0) ? _Utils_update(
							model,
							{alertMessage: elm$core$Maybe$Nothing, games: newlgames, presentStatus: author$project$Types$ShowingData}) : model;
						var lgamesForWeekStandings = A2(
							elm$core$List$filter,
							function (game) {
								return (_Utils_cmp(game.weekNr, weekNr) < 1) && (_Utils_eq(game.seasonId, seasonId) && _Utils_eq(game.leagueId, model.selectedLeague));
							},
							lgames);
						var nrGamesInWeek = elm$core$List$length(
							A2(
								elm$core$List$filter,
								function (game) {
									return _Utils_eq(game.weekNr, weekNr) && ((!_Utils_eq(game.goalsHomeTeam, elm$core$Maybe$Nothing)) && (!_Utils_eq(game.goalsAwayTeam, elm$core$Maybe$Nothing)));
								},
								lgamesForWeekStandings));
						var newRankEntries = (nrGamesInWeek >= 1) ? A4(author$project$FootballStandingsCalc$determineRankEntriesFromGames, lgamesForWeekStandings, seasonId, model.selectedLeague, weekNr) : _List_Nil;
						if (elm$core$List$length(newRankEntries) > 0) {
							var $temp$msg = author$project$Types$NewRankTable(
								elm$core$Result$Ok(newRankEntries)),
								$temp$model = newModel;
							msg = $temp$msg;
							model = $temp$model;
							continue update;
						} else {
							return _Utils_Tuple2(
								_Utils_update(
									newModel,
									{
										alertMessage: elm$core$Maybe$Just(
											'No Data was found for week ' + elm$core$String$fromInt(weekNr)),
										presentStatus: author$project$Types$NoData
									}),
								elm$core$Platform$Cmd$none);
						}
					} else {
						var weekNr = msg.a;
						var seasonId = msg.b;
						var error = msg.c.a;
						var errMessage = 'error while fetching games info : ' + author$project$Main$errorToString(error);
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									alertMessage: elm$core$Maybe$Just(errMessage),
									games: _List_Nil,
									presentStatus: author$project$Types$NoData
								}),
							elm$core$Platform$Cmd$none);
					}
				case 'NewRankTable':
					if (msg.a.$ === 'Ok') {
						var lranks = msg.a.a;
						var newlranks = A2(author$project$FootballStandings$appendToListofRankEntries, model.rankTable, lranks);
						return (elm$core$List$length(lranks) > 0) ? _Utils_Tuple2(
							_Utils_update(
								model,
								{alertMessage: elm$core$Maybe$Nothing, presentStatus: author$project$Types$ShowingData, rankTable: newlranks}),
							elm$core$Platform$Cmd$none) : _Utils_Tuple2(
							_Utils_update(
								model,
								{
									alertMessage: elm$core$Maybe$Just('No Data was found !'),
									presentStatus: author$project$Types$NoData
								}),
							elm$core$Platform$Cmd$none);
					} else {
						var error = msg.a.a;
						var errMessage = 'error trying to get weekly ranks info : ' + author$project$Main$errorToString(error);
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									alertMessage: elm$core$Maybe$Just(errMessage),
									presentStatus: author$project$Types$NoData,
									rankTable: _List_Nil
								}),
							elm$core$Platform$Cmd$none);
					}
				case 'NewTableOrder':
					var ordercriteria = msg.a;
					var ordertype = msg.b;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								currentorder: A2(author$project$Types$CurrentOrder, ordercriteria, ordertype)
							}),
						elm$core$Platform$Cmd$none);
				case 'NewFetchingInfo':
					var posixtime = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								nrInfoChars: 15 - (((elm$time$Time$posixToMillis(posixtime) / 200) | 0) % 4)
							}),
						elm$core$Platform$Cmd$none);
				case 'CloseAlert':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{alertMessage: elm$core$Maybe$Nothing}),
						elm$core$Platform$Cmd$none);
				case 'PresentNewInfo':
					var _n12 = model.currentTab;
					if (_n12.$ === 'StandingsTab') {
						var _n13 = function () {
							if (author$project$FootballStandings$haveAllEntriesForWeek(model)) {
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											alertMessage: elm$core$Maybe$Nothing,
											currentorder: A2(author$project$Types$CurrentOrder, author$project$Types$OrdRank, author$project$Types$Asc)
										}),
									elm$core$Platform$Cmd$none);
							} else {
								if (model.standingsByCalc && author$project$FootballCalendar$haveAllGamesInSeason(model)) {
									var selSeason = A2(elm$core$Maybe$withDefault, -999, model.selectedSeasonId);
									var relevantGames = A2(
										elm$core$List$filter,
										function (game) {
											return (_Utils_cmp(game.weekNr, model.weekNr) < 1) && (_Utils_eq(game.seasonId, selSeason) && _Utils_eq(game.leagueId, model.selectedLeague));
										},
										model.games);
									return A2(
										author$project$Main$update,
										A3(
											author$project$Types$NewGamesForStandingsCalc,
											model.weekNr,
											selSeason,
											elm$core$Result$Ok(relevantGames)),
										model);
								} else {
									return A2(author$project$Main$update, author$project$Types$Submit, model);
								}
							}
						}();
						var newModel = _n13.a;
						var cmds = _n13.b;
						return _Utils_Tuple2(newModel, cmds);
					} else {
						var _n14 = model.weekmode;
						if (_n14.$ === 'SingleWeek') {
							var selSeason = A2(elm$core$Maybe$withDefault, -999, model.selectedSeasonId);
							var selGames = A2(
								elm$core$List$filter,
								function (game) {
									return _Utils_eq(game.weekNr, model.weekNr) && (_Utils_eq(game.seasonId, selSeason) && _Utils_eq(game.leagueId, model.selectedLeague));
								},
								model.games);
							var _n15 = (!elm$core$List$length(selGames)) ? A2(author$project$Main$update, author$project$Types$Submit, model) : _Utils_Tuple2(
								_Utils_update(
									model,
									{alertMessage: elm$core$Maybe$Nothing}),
								elm$core$Platform$Cmd$none);
							var newModel = _n15.a;
							var cmds = _n15.b;
							return _Utils_Tuple2(newModel, cmds);
						} else {
							var _n16 = author$project$FootballCalendar$haveAllGamesInSeason(model) ? _Utils_Tuple2(
								_Utils_update(
									model,
									{alertMessage: elm$core$Maybe$Nothing}),
								elm$core$Platform$Cmd$none) : A2(author$project$Main$update, author$project$Types$Submit, model);
							var newModel = _n16.a;
							var cmds = _n16.b;
							return _Utils_Tuple2(newModel, cmds);
						}
					}
				default:
					var newCmd = function (sId) {
						var _n18 = model.currentTab;
						if (_n18.$ === 'CalendarTab') {
							var _n19 = model.weekmode;
							if (_n19.$ === 'SingleWeek') {
								return A5(
									author$project$Main$getGames,
									model.apiUrl,
									model.selectedLeague,
									sId,
									elm$core$Maybe$Just(model.weekNr),
									model.fileOrDbSource);
							} else {
								return (model.fileOrDbSource === 'file') ? A4(author$project$Main$getAllSeasonGamesFromFile, model.apiUrl, model.selectedLeague, sId, author$project$Types$NewGamesForCalendar) : A4(
									author$project$Main$getAllSeasonGamesFromdb,
									model.apiUrl,
									model.selectedLeague,
									sId,
									author$project$Types$NewGamesJustTeamIds(true));
							}
						} else {
							return (model.standingsByCalc && (model.fileOrDbSource === 'file')) ? A4(
								author$project$Main$getAllSeasonGamesFromFile,
								model.apiUrl,
								model.selectedLeague,
								sId,
								A2(author$project$Types$NewGamesForStandingsCalc, model.weekNr, sId)) : (model.standingsByCalc ? A4(
								author$project$Main$getAllSeasonGamesFromdb,
								model.apiUrl,
								model.selectedLeague,
								sId,
								author$project$Types$NewGamesJustTeamIds(true)) : A5(author$project$Main$getRankTable, model.apiUrl, model.selectedLeague, sId, model.weekNr, model.fileOrDbSource));
						}
					};
					var _n17 = model.selectedSeasonId;
					if (_n17.$ === 'Just') {
						var seasonId = _n17.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									alertMessage: elm$core$Maybe$Nothing,
									currentorder: A2(author$project$Types$CurrentOrder, author$project$Types$OrdRank, author$project$Types$Asc),
									presentStatus: author$project$Types$FetchingData
								}),
							newCmd(seasonId));
					} else {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									alertMessage: elm$core$Maybe$Just('no season selected'),
									presentStatus: author$project$Types$NoData
								}),
							elm$core$Platform$Cmd$none);
					}
			}
		}
	});
var author$project$LanguageFuncs$MultiLgWord = F2(
	function (portuguese, english) {
		return {english: english, portuguese: portuguese};
	});
var author$project$LanguageFuncs$gtxt = F2(
	function (theStr, language) {
		var dExpressions = elm$core$Dict$fromList(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'league',
					A2(author$project$LanguageFuncs$MultiLgWord, 'Liga', 'League')),
					_Utils_Tuple2(
					'season',
					A2(author$project$LanguageFuncs$MultiLgWord, 'Época', 'season')),
					_Utils_Tuple2(
					'week nr',
					A2(author$project$LanguageFuncs$MultiLgWord, 'jornada', 'week nr')),
					_Utils_Tuple2(
					'output mode',
					A2(author$project$LanguageFuncs$MultiLgWord, 'visualizar', 'output')),
					_Utils_Tuple2(
					'football Standings',
					A2(author$project$LanguageFuncs$MultiLgWord, 'Classificação', 'Football Standings')),
					_Utils_Tuple2(
					'standings',
					A2(author$project$LanguageFuncs$MultiLgWord, 'Classificação', 'Standings')),
					_Utils_Tuple2(
					'yes',
					A2(author$project$LanguageFuncs$MultiLgWord, 'sim', 'yes')),
					_Utils_Tuple2(
					'no',
					A2(author$project$LanguageFuncs$MultiLgWord, 'não', 'no')),
					_Utils_Tuple2(
					'table size',
					A2(author$project$LanguageFuncs$MultiLgWord, 'tabela', 'table size')),
					_Utils_Tuple2(
					'full',
					A2(author$project$LanguageFuncs$MultiLgWord, 'total', 'full')),
					_Utils_Tuple2(
					'partial',
					A2(author$project$LanguageFuncs$MultiLgWord, 'parcial', 'partial')),
					_Utils_Tuple2(
					'_Standings-Season_',
					A2(author$project$LanguageFuncs$MultiLgWord, 'Classificação - Época - ', 'Standings  - Season -')),
					_Utils_Tuple2(
					'_Pos_',
					A2(author$project$LanguageFuncs$MultiLgWord, 'Pos.', 'Pos.')),
					_Utils_Tuple2(
					'_Equipas_',
					A2(author$project$LanguageFuncs$MultiLgWord, 'Equipas', 'Teams')),
					_Utils_Tuple2(
					'_Total_',
					A2(author$project$LanguageFuncs$MultiLgWord, 'Total', 'Total')),
					_Utils_Tuple2(
					'_Casa_',
					A2(author$project$LanguageFuncs$MultiLgWord, 'Casa', 'Home')),
					_Utils_Tuple2(
					'_Fora_',
					A2(author$project$LanguageFuncs$MultiLgWord, 'Fora', 'Away')),
					_Utils_Tuple2(
					'_Pts_',
					A2(author$project$LanguageFuncs$MultiLgWord, 'Pts.', 'Pts.')),
					_Utils_Tuple2(
					'_Jg_',
					A2(author$project$LanguageFuncs$MultiLgWord, 'Jg', 'Gp')),
					_Utils_Tuple2(
					'_V_',
					A2(author$project$LanguageFuncs$MultiLgWord, 'V', 'W')),
					_Utils_Tuple2(
					'_E_',
					A2(author$project$LanguageFuncs$MultiLgWord, 'E', 'D')),
					_Utils_Tuple2(
					'_D_',
					A2(author$project$LanguageFuncs$MultiLgWord, 'D', 'L')),
					_Utils_Tuple2(
					'_GM_',
					A2(author$project$LanguageFuncs$MultiLgWord, 'GM', 'GF')),
					_Utils_Tuple2(
					'_GS_',
					A2(author$project$LanguageFuncs$MultiLgWord, 'GS', 'GA')),
					_Utils_Tuple2(
					'show goals',
					A2(author$project$LanguageFuncs$MultiLgWord, 'mostrar golos', 'show goals')),
					_Utils_Tuple2(
					'football Calendar',
					A2(author$project$LanguageFuncs$MultiLgWord, 'Calendário', 'Football Calendar')),
					_Utils_Tuple2(
					'calendar',
					A2(author$project$LanguageFuncs$MultiLgWord, 'Calendário', 'Calendar')),
					_Utils_Tuple2(
					'all weeks',
					A2(author$project$LanguageFuncs$MultiLgWord, 'todas as semanas', 'all weeks')),
					_Utils_Tuple2(
					'single week',
					A2(author$project$LanguageFuncs$MultiLgWord, 'uma semana', 'single week')),
					_Utils_Tuple2(
					'_Week_',
					A2(author$project$LanguageFuncs$MultiLgWord, 'Jornada', 'Week'))
				]));
		var mbMatch = A2(elm$core$Dict$get, theStr, dExpressions);
		var outStr = function () {
			if (mbMatch.$ === 'Nothing') {
				return '';
			} else {
				var wordrec = mbMatch.a;
				if (language.$ === 'DisplayPortuguese') {
					return wordrec.portuguese;
				} else {
					return wordrec.english;
				}
			}
		}();
		return outStr;
	});
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var author$project$LanguageFuncs$gtxt_ = F2(
	function (theStr, language) {
		return elm$html$Html$text(
			A2(author$project$LanguageFuncs$gtxt, theStr, language));
	});
var author$project$Types$ChangeTab = function (a) {
	return {$: 'ChangeTab', a: a};
};
var elm$html$Html$a = _VirtualDom_node('a');
var elm$html$Html$div = _VirtualDom_node('div');
var elm$html$Html$li = _VirtualDom_node('li');
var elm$html$Html$ul = _VirtualDom_node('ul');
var elm$json$Json$Encode$string = _Json_wrap;
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty('className');
var elm$html$Html$Attributes$classList = function (classes) {
	return elm$html$Html$Attributes$class(
		A2(
			elm$core$String$join,
			' ',
			A2(
				elm$core$List$map,
				elm$core$Tuple$first,
				A2(elm$core$List$filter, elm$core$Tuple$second, classes))));
};
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var elm$html$Html$Events$onClick = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var author$project$Main$renderHeaders = function (model) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('container')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('row')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$div,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('offset-md-3 col-md-6')
									]),
								_List_fromArray(
									[
										A2(
										elm$html$Html$ul,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('nav nav-tabs')
											]),
										_List_fromArray(
											[
												A2(
												elm$html$Html$li,
												_List_fromArray(
													[
														elm$html$Html$Attributes$class('nav-item')
													]),
												_List_fromArray(
													[
														A2(
														elm$html$Html$a,
														_List_fromArray(
															[
																elm$html$Html$Attributes$class('nav-link'),
																elm$html$Html$Events$onClick(
																author$project$Types$ChangeTab(author$project$Types$CalendarTab)),
																elm$html$Html$Attributes$classList(
																_List_fromArray(
																	[
																		_Utils_Tuple2(
																		'active',
																		_Utils_eq(model.currentTab, author$project$Types$CalendarTab))
																	]))
															]),
														_List_fromArray(
															[
																A2(author$project$LanguageFuncs$gtxt_, 'calendar', model.language)
															]))
													])),
												A2(
												elm$html$Html$li,
												_List_fromArray(
													[
														elm$html$Html$Attributes$class('nav-item')
													]),
												_List_fromArray(
													[
														A2(
														elm$html$Html$a,
														_List_fromArray(
															[
																elm$html$Html$Attributes$class('nav-link'),
																elm$html$Html$Events$onClick(
																author$project$Types$ChangeTab(author$project$Types$StandingsTab)),
																elm$html$Html$Attributes$classList(
																_List_fromArray(
																	[
																		_Utils_Tuple2(
																		'active',
																		_Utils_eq(model.currentTab, author$project$Types$StandingsTab))
																	]))
															]),
														_List_fromArray(
															[
																A2(author$project$LanguageFuncs$gtxt_, 'standings', model.language)
															]))
													]))
											]))
									]))
							]))
					]))
			]));
};
var elm$core$String$slice = _String_slice;
var author$project$FootballCalendar$getStrDateFromDate = function (str) {
	var out = A3(elm$core$String$slice, 8, 10, str) + ('/' + (A3(elm$core$String$slice, 5, 7, str) + ('/' + (A3(elm$core$String$slice, 0, 4, str) + ('   ' + (A3(elm$core$String$slice, 11, 13, str) + ('h' + A3(elm$core$String$slice, 14, 16, str))))))));
	return out;
};
var author$project$FootballCalendar$mbIntToString = function (mbnr) {
	if (mbnr.$ === 'Nothing') {
		return '';
	} else {
		var nr = mbnr.a;
		return elm$core$String$fromInt(nr);
	}
};
var elm$html$Html$h4 = _VirtualDom_node('h4');
var elm$html$Html$span = _VirtualDom_node('span');
var elm$html$Html$td = _VirtualDom_node('td');
var elm$html$Html$tr = _VirtualDom_node('tr');
var author$project$FootballCalendar$gameToTableRow = F2(
	function (showGoals, game) {
		var lgoalsOutput = showGoals ? _List_fromArray(
			[
				A2(
				elm$html$Html$span,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('score')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						author$project$FootballCalendar$mbIntToString(game.goalsHomeTeam))
					])),
				A2(
				elm$html$Html$span,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('score')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						author$project$FootballCalendar$mbIntToString(game.goalsAwayTeam))
					]))
			]) : _List_fromArray(
			[
				A2(
				elm$html$Html$span,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('noScore')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(' - ')
					]))
			]);
		return A2(
			elm$html$Html$tr,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					elm$html$Html$td,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('match')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$div,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('matchDate')
								]),
							_List_fromArray(
								[
									elm$html$Html$text(
									author$project$FootballCalendar$getStrDateFromDate(game.matchDate))
								])),
							A2(
							elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									elm$html$Html$a,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('teamName')
										]),
									_List_fromArray(
										[
											A2(
											elm$html$Html$h4,
											_List_Nil,
											_List_fromArray(
												[
													elm$html$Html$text(game.homeTeam)
												]))
										])),
									A2(
									elm$html$Html$a,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('main-score')
										]),
									lgoalsOutput),
									A2(
									elm$html$Html$a,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('teamName')
										]),
									_List_fromArray(
										[
											A2(
											elm$html$Html$h4,
											_List_Nil,
											_List_fromArray(
												[
													elm$html$Html$text(game.awayTeam)
												]))
										]))
								]))
						]))
				]));
	});
var author$project$FootballCalendar$getWeekNrFromListHead = function (lgames) {
	var _n0 = elm$core$List$head(lgames);
	if (_n0.$ === 'Nothing') {
		return elm$core$Maybe$Nothing;
	} else {
		var game = _n0.a;
		return elm$core$Maybe$Just(game.weekNr);
	}
};
var elm$html$Html$h3 = _VirtualDom_node('h3');
var elm$html$Html$table = _VirtualDom_node('table');
var elm$html$Html$tbody = _VirtualDom_node('tbody');
var elm$html$Html$thead = _VirtualDom_node('thead');
var author$project$FootballCalendar$outputSingleWeekViewStyled = F6(
	function (games, mbnr, showGoals, language, strClass, strTblClass) {
		var _n0 = function () {
			if (mbnr.$ === 'Nothing') {
				var _n2 = author$project$FootballCalendar$getWeekNrFromListHead(games);
				if (_n2.$ === 'Nothing') {
					return _Utils_Tuple2(_List_Nil, '');
				} else {
					var val = _n2.a;
					return _Utils_Tuple2(
						A2(
							elm$core$List$filter,
							function (game) {
								return _Utils_eq(game.weekNr, val);
							},
							games),
						A2(author$project$LanguageFuncs$gtxt, '_Week_', language) + (' ' + elm$core$String$fromInt(val)));
				}
			} else {
				var nr = mbnr.a;
				return _Utils_Tuple2(
					A2(
						elm$core$List$filter,
						function (game) {
							return _Utils_eq(game.weekNr, nr);
						},
						games),
					A2(author$project$LanguageFuncs$gtxt, '_Week_', language) + (' ' + elm$core$String$fromInt(nr)));
			}
		}();
		var lgames = _n0.a;
		var title = _n0.b;
		return (elm$core$List$length(lgames) > 0) ? A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2(strClass, true),
							_Utils_Tuple2('text-center', true)
						]))
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$h3,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('text-center')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(title)
						])),
					A2(
					elm$html$Html$table,
					_List_fromArray(
						[
							elm$html$Html$Attributes$classList(
							_List_fromArray(
								[
									_Utils_Tuple2(strTblClass, true),
									_Utils_Tuple2('table table-striped', true)
								]))
						]),
					_List_fromArray(
						[
							A2(elm$html$Html$thead, _List_Nil, _List_Nil),
							A2(
							elm$html$Html$tbody,
							_List_Nil,
							A2(
								elm$core$List$map,
								author$project$FootballCalendar$gameToTableRow(showGoals),
								lgames))
						]))
				])) : elm$html$Html$text('');
	});
var author$project$FootballCalendar$outputWeekByWeek = F5(
	function (llgames, showGoals, language, strClass, strTblClass) {
		if (!llgames.b) {
			return _List_fromArray(
				[
					elm$html$Html$text('')
				]);
		} else {
			if ((!llgames.a.b) && (!llgames.b.b)) {
				return _List_fromArray(
					[
						elm$html$Html$text('')
					]);
			} else {
				var lhead = llgames.a;
				var rest = llgames.b;
				return _Utils_ap(
					_List_fromArray(
						[
							A6(author$project$FootballCalendar$outputSingleWeekViewStyled, lhead, elm$core$Maybe$Nothing, showGoals, language, strClass, strTblClass)
						]),
					A5(author$project$FootballCalendar$outputWeekByWeek, rest, showGoals, language, strClass, strTblClass));
			}
		}
	});
var author$project$FootballCalendar$dropWhile = F2(
	function (predicate, xs) {
		dropWhile:
		while (true) {
			if (!xs.b) {
				return _List_Nil;
			} else {
				var hd = xs.a;
				var tl = xs.b;
				if (predicate(hd)) {
					var $temp$predicate = predicate,
						$temp$xs = tl;
					predicate = $temp$predicate;
					xs = $temp$xs;
					continue dropWhile;
				} else {
					return xs;
				}
			}
		}
	});
var author$project$FootballCalendar$takeWhile = F2(
	function (predicate, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			return predicate(hd) ? A2(
				elm$core$List$cons,
				hd,
				A2(author$project$FootballCalendar$takeWhile, predicate, tl)) : _List_Nil;
		}
	});
var author$project$FootballCalendar$splitListofGames = F2(
	function (lgames, nr) {
		if (nr > 100) {
			return _List_fromArray(
				[lgames]);
		} else {
			if (!lgames.b) {
				return _List_Nil;
			} else {
				return A2(
					elm$core$List$cons,
					A2(
						author$project$FootballCalendar$takeWhile,
						function (elem) {
							return _Utils_eq(elem.weekNr, nr);
						},
						lgames),
					A2(
						author$project$FootballCalendar$splitListofGames,
						A2(
							author$project$FootballCalendar$dropWhile,
							function (elem) {
								return _Utils_eq(elem.weekNr, nr);
							},
							lgames),
						nr + 1));
			}
		}
	});
var author$project$FootballCalendar$wrapInRowAndSepDiv = function (lelems) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('sepRows')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('row')
					]),
				lelems)
			]));
};
var elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2(elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var elm$core$List$takeTailRec = F2(
	function (n, list) {
		return elm$core$List$reverse(
			A3(elm$core$List$takeReverse, n, list, _List_Nil));
	});
var elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _n0 = _Utils_Tuple2(n, list);
			_n0$1:
			while (true) {
				_n0$5:
				while (true) {
					if (!_n0.b.b) {
						return list;
					} else {
						if (_n0.b.b.b) {
							switch (_n0.a) {
								case 1:
									break _n0$1;
								case 2:
									var _n2 = _n0.b;
									var x = _n2.a;
									var _n3 = _n2.b;
									var y = _n3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_n0.b.b.b.b) {
										var _n4 = _n0.b;
										var x = _n4.a;
										var _n5 = _n4.b;
										var y = _n5.a;
										var _n6 = _n5.b;
										var z = _n6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _n0$5;
									}
								default:
									if (_n0.b.b.b.b && _n0.b.b.b.b.b) {
										var _n7 = _n0.b;
										var x = _n7.a;
										var _n8 = _n7.b;
										var y = _n8.a;
										var _n9 = _n8.b;
										var z = _n9.a;
										var _n10 = _n9.b;
										var w = _n10.a;
										var tl = _n10.b;
										return (ctr > 1000) ? A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A2(elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A3(elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _n0$5;
									}
							}
						} else {
							if (_n0.a === 1) {
								break _n0$1;
							} else {
								break _n0$5;
							}
						}
					}
				}
				return list;
			}
			var _n1 = _n0.b;
			var x = _n1.a;
			return _List_fromArray(
				[x]);
		}
	});
var elm$core$List$take = F2(
	function (n, list) {
		return A3(elm$core$List$takeFast, 0, n, list);
	});
var author$project$FootballCalendar$wrapInRowSepDivsEveryNelems = F2(
	function (nr, lelems) {
		if (!lelems.b) {
			return _List_Nil;
		} else {
			return A2(
				elm$core$List$cons,
				author$project$FootballCalendar$wrapInRowAndSepDiv(
					A2(elm$core$List$take, nr, lelems)),
				A2(
					author$project$FootballCalendar$wrapInRowSepDivsEveryNelems,
					nr,
					A2(elm$core$List$drop, nr, lelems)));
		}
	});
var author$project$FootballCalendar$outputAllWeeksView = function (model) {
	var selectedSeason = A2(elm$core$Maybe$withDefault, -999, model.selectedSeasonId);
	var theFilteredGames_ = A2(
		elm$core$List$sortWith,
		author$project$FootballCalendar$weekNrGameNrWeekComparison,
		A2(
			elm$core$List$filter,
			function (game) {
				return _Utils_eq(game.seasonId, selectedSeason) && _Utils_eq(game.leagueId, model.selectedLeague);
			},
			model.games));
	var loflistofWeeks = A2(author$project$FootballCalendar$splitListofGames, theFilteredGames_, 1);
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('container')
			]),
		A2(
			author$project$FootballCalendar$wrapInRowSepDivsEveryNelems,
			2,
			A5(author$project$FootballCalendar$outputWeekByWeek, loflistofWeeks, model.showGameResults, model.language, 'offset-md-1 col-md-5 col-sm-12', 'manyweekgames')));
};
var author$project$FootballCalendar$theFilteredGames = function (model) {
	var selectedSeason = A2(elm$core$Maybe$withDefault, -999, model.selectedSeasonId);
	var theGames = A2(
		elm$core$List$filter,
		function (game) {
			return _Utils_eq(game.weekNr, model.weekNr) && (_Utils_eq(game.seasonId, selectedSeason) && _Utils_eq(game.leagueId, model.selectedLeague));
		},
		model.games);
	return theGames;
};
var author$project$FootballCalendar$wrapInRowDiv = function (lelems) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('row')
			]),
		lelems);
};
var author$project$FootballCalendar$outputView = function (model) {
	var _n0 = model.weekmode;
	if (_n0.$ === 'SingleWeek') {
		return author$project$FootballCalendar$wrapInRowDiv(
			_List_fromArray(
				[
					A6(
					author$project$FootballCalendar$outputSingleWeekViewStyled,
					author$project$FootballCalendar$theFilteredGames(model),
					elm$core$Maybe$Just(model.weekNr),
					model.showGameResults,
					model.language,
					'offset-md-3 col-md-6',
					'weekgames')
				]));
	} else {
		return author$project$FootballCalendar$outputAllWeeksView(model);
	}
};
var author$project$FootballStandings$getCompAndSeasonNameFromListHead = function (lranktable) {
	var _n0 = elm$core$List$head(lranktable);
	if (_n0.$ === 'Nothing') {
		return elm$core$Maybe$Nothing;
	} else {
		var entry = _n0.a;
		return elm$core$Maybe$Just(
			_Utils_Tuple2(entry.leagueName, entry.seasonName));
	}
};
var author$project$FootballStandings$getLeagueNameFromLeagueId = F2(
	function (leagueId, leagues) {
		getLeagueNameFromLeagueId:
		while (true) {
			if (!leagues.b) {
				return '';
			} else {
				var head = leagues.a;
				var rst = leagues.b;
				if (_Utils_eq(head.id, leagueId)) {
					return head.name;
				} else {
					var $temp$leagueId = leagueId,
						$temp$leagues = rst;
					leagueId = $temp$leagueId;
					leagues = $temp$leagues;
					continue getLeagueNameFromLeagueId;
				}
			}
		}
	});
var author$project$Types$Desc = {$: 'Desc'};
var author$project$Types$NewTableOrder = F2(
	function (a, b) {
		return {$: 'NewTableOrder', a: a, b: b};
	});
var author$project$FootballStandings$getOrderArrows = F2(
	function (ordercriteria, currentorder) {
		var _n0 = _Utils_eq(
			currentorder,
			A2(author$project$Types$CurrentOrder, ordercriteria, author$project$Types$Asc)) ? _Utils_Tuple2('active-arrow-up', author$project$Types$Desc) : _Utils_Tuple2('arrow-up', author$project$Types$Asc);
		var classUp = _n0.a;
		var upOrder = _n0.b;
		var _n1 = _Utils_eq(
			currentorder,
			A2(author$project$Types$CurrentOrder, ordercriteria, author$project$Types$Desc)) ? _Utils_Tuple2('active-arrow-down', author$project$Types$Asc) : _Utils_Tuple2('arrow-down', author$project$Types$Desc);
		var classDown = _n1.a;
		var downOrder = _n1.b;
		return A2(
			elm$html$Html$span,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('orderingtriangles')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class(classUp),
							elm$html$Html$Events$onClick(
							A2(author$project$Types$NewTableOrder, ordercriteria, upOrder))
						]),
					_List_Nil),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class(classDown),
							elm$html$Html$Events$onClick(
							A2(author$project$Types$NewTableOrder, ordercriteria, downOrder))
						]),
					_List_Nil)
				]));
	});
var author$project$Types$OrdDraws = {$: 'OrdDraws'};
var author$project$Types$OrdGoalsScored = {$: 'OrdGoalsScored'};
var author$project$Types$OrdGoalsSuffered = {$: 'OrdGoalsSuffered'};
var author$project$Types$OrdLosses = {$: 'OrdLosses'};
var author$project$Types$OrdPoints = {$: 'OrdPoints'};
var author$project$Types$OrdWins = {$: 'OrdWins'};
var elm$html$Html$th = _VirtualDom_node('th');
var elm$html$Html$Attributes$colspan = function (n) {
	return A2(
		_VirtualDom_attribute,
		'colspan',
		elm$core$String$fromInt(n));
};
var elm$html$Html$Attributes$rowspan = function (n) {
	return A2(
		_VirtualDom_attribute,
		'rowspan',
		elm$core$String$fromInt(n));
};
var author$project$FootballStandings$getListTableRankHeaders = F4(
	function (strTitle, currentorder, tablesize, language) {
		var partialHeadersRowTwo = _List_fromArray(
			[
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamStatsHeader')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_Jg_', language),
						A2(
						elm$html$Html$span,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('orderingtriangles')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$div,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('hidden-arrow-up')
									]),
								_List_Nil),
								A2(
								elm$html$Html$div,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('hidden-arrow-down')
									]),
								_List_Nil)
							]))
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamStatsHeader')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_V_', language),
						A2(author$project$FootballStandings$getOrderArrows, author$project$Types$OrdWins, currentorder)
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamStatsHeader')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_E_', language),
						A2(author$project$FootballStandings$getOrderArrows, author$project$Types$OrdDraws, currentorder)
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamStatsHeader')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_D_', language),
						A2(author$project$FootballStandings$getOrderArrows, author$project$Types$OrdLosses, currentorder)
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamStatsHeader')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_GM_', language),
						A2(author$project$FootballStandings$getOrderArrows, author$project$Types$OrdGoalsScored, currentorder)
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamStatsHeader')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_GS_', language),
						A2(author$project$FootballStandings$getOrderArrows, author$project$Types$OrdGoalsSuffered, currentorder)
					]))
			]);
		var partialHeadersRowOne = _List_fromArray(
			[
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$rowspan(2),
						elm$html$Html$Attributes$class('theaders')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_Pos_', language),
						A2(author$project$FootballStandings$getOrderArrows, author$project$Types$OrdRank, currentorder)
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$rowspan(2),
						elm$html$Html$Attributes$class('theaders')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_Equipas_', language)
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$rowspan(2),
						elm$html$Html$Attributes$class('theaders')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_Pts_', language),
						A2(author$project$FootballStandings$getOrderArrows, author$project$Types$OrdPoints, currentorder)
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$colspan(6),
						elm$html$Html$Attributes$class('theaders')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_Total_', language)
					]))
			]);
		var nrColumns = _Utils_eq(tablesize, author$project$Types$FullTable) ? 21 : 9;
		var homeAwayHeadersRowTwo = _List_fromArray(
			[
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamStatsHeader')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_Jg_', language)
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamStatsHeader')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_V_', language)
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamStatsHeader')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_E_', language)
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamStatsHeader')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_D_', language)
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamStatsHeader')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_GM_', language)
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamStatsHeader')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_GS_', language)
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamStatsHeader')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_Jg_', language)
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamStatsHeader')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_V_', language)
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamStatsHeader')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_E_', language)
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamStatsHeader')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_D_', language)
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamStatsHeader')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_GM_', language)
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamStatsHeader')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_GS_', language)
					]))
			]);
		var homeAwayHeadersRowOne = _List_fromArray(
			[
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$colspan(6),
						elm$html$Html$Attributes$class('theaders')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_Casa_', language)
					])),
				A2(
				elm$html$Html$th,
				_List_fromArray(
					[
						elm$html$Html$Attributes$colspan(6),
						elm$html$Html$Attributes$class('theaders')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, '_Fora_', language)
					]))
			]);
		var _n0 = _Utils_eq(tablesize, author$project$Types$FullTable) ? _Utils_Tuple2(
			_Utils_ap(partialHeadersRowOne, homeAwayHeadersRowOne),
			_Utils_ap(partialHeadersRowTwo, homeAwayHeadersRowTwo)) : _Utils_Tuple2(partialHeadersRowOne, partialHeadersRowTwo);
		var rowOne = _n0.a;
		var rowTwo = _n0.b;
		return _List_fromArray(
			[
				A2(
				elm$html$Html$tr,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						elm$html$Html$th,
						_List_fromArray(
							[
								elm$html$Html$Attributes$colspan(nrColumns),
								elm$html$Html$Attributes$class('tHeaderTitle')
							]),
						_List_fromArray(
							[
								elm$html$Html$text(strTitle)
							]))
					])),
				A2(elm$html$Html$tr, _List_Nil, rowOne),
				A2(elm$html$Html$tr, _List_Nil, rowTwo)
			]);
	});
var author$project$FootballStandings$getSeasonNameFromSeasonId = F2(
	function (mbSeasonId, seasons) {
		var getSeasonNameAux = F2(
			function (sId, lseasons) {
				getSeasonNameAux:
				while (true) {
					if (!lseasons.b) {
						return '';
					} else {
						var head = lseasons.a;
						var rst = lseasons.b;
						if (_Utils_eq(head.seasonId, sId)) {
							return head.seasonName;
						} else {
							var $temp$sId = sId,
								$temp$lseasons = rst;
							sId = $temp$sId;
							lseasons = $temp$lseasons;
							continue getSeasonNameAux;
						}
					}
				}
			});
		if (mbSeasonId.$ === 'Nothing') {
			return '';
		} else {
			var sId_ = mbSeasonId.a;
			return A2(getSeasonNameAux, sId_, seasons);
		}
	});
var author$project$FootballStandings$orderLRecbyField = F3(
	function (ordercriteria, ordertype, lranktable) {
		switch (ordercriteria.$) {
			case 'OrdRank':
				if (ordertype.$ === 'Asc') {
					return A2(
						elm$core$List$sortBy,
						function ($) {
							return $.weekRank;
						},
						lranktable);
				} else {
					return elm$core$List$reverse(
						A2(
							elm$core$List$sortBy,
							function ($) {
								return $.weekRank;
							},
							lranktable));
				}
			case 'OrdPoints':
				if (ordertype.$ === 'Asc') {
					return A2(
						elm$core$List$sortBy,
						function ($) {
							return $.nrPoints;
						},
						lranktable);
				} else {
					return elm$core$List$reverse(
						A2(
							elm$core$List$sortBy,
							function ($) {
								return $.nrPoints;
							},
							lranktable));
				}
			case 'OrdWins':
				if (ordertype.$ === 'Asc') {
					return A2(
						elm$core$List$sortBy,
						function ($) {
							return $.nrGamesWon;
						},
						lranktable);
				} else {
					return elm$core$List$reverse(
						A2(
							elm$core$List$sortBy,
							function ($) {
								return $.nrGamesWon;
							},
							lranktable));
				}
			case 'OrdDraws':
				if (ordertype.$ === 'Asc') {
					return A2(
						elm$core$List$sortBy,
						function ($) {
							return $.nrGamesDrawn;
						},
						lranktable);
				} else {
					return elm$core$List$reverse(
						A2(
							elm$core$List$sortBy,
							function ($) {
								return $.nrGamesDrawn;
							},
							lranktable));
				}
			case 'OrdLosses':
				if (ordertype.$ === 'Asc') {
					return A2(
						elm$core$List$sortBy,
						function ($) {
							return $.nrGamesLost;
						},
						lranktable);
				} else {
					return elm$core$List$reverse(
						A2(
							elm$core$List$sortBy,
							function ($) {
								return $.nrGamesLost;
							},
							lranktable));
				}
			case 'OrdGoalsScored':
				if (ordertype.$ === 'Asc') {
					return A2(
						elm$core$List$sortBy,
						function ($) {
							return $.nrGoalsScored;
						},
						lranktable);
				} else {
					return elm$core$List$reverse(
						A2(
							elm$core$List$sortBy,
							function ($) {
								return $.nrGoalsScored;
							},
							lranktable));
				}
			default:
				if (ordertype.$ === 'Asc') {
					return A2(
						elm$core$List$sortBy,
						function ($) {
							return $.nrGoalsSuffered;
						},
						lranktable);
				} else {
					return elm$core$List$reverse(
						A2(
							elm$core$List$sortBy,
							function ($) {
								return $.nrGoalsSuffered;
							},
							lranktable));
				}
		}
	});
var author$project$FootballStandings$orderLRecbyField_ = F2(
	function (currentorder, lranktable) {
		var _n0 = function () {
			var x = currentorder.a;
			var y = currentorder.b;
			return _Utils_Tuple2(x, y);
		}();
		var ordcriteria = _n0.a;
		var ordtype = _n0.b;
		var lordered = A3(author$project$FootballStandings$orderLRecbyField, ordcriteria, ordtype, lranktable);
		return lordered;
	});
var author$project$FootballStandings$rankTableEntryToTableRow = F2(
	function (tablesize, rtentry) {
		var lpartialTableCells = _List_fromArray(
			[
				A2(
				elm$html$Html$td,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamRank')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(rtentry.weekRank))
					])),
				A2(
				elm$html$Html$td,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamName')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(rtentry.teamShortName)
					])),
				A2(
				elm$html$Html$td,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamRankStats')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(rtentry.nrPoints))
					])),
				A2(
				elm$html$Html$td,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamRankStats')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(rtentry.nrGamesPlayed))
					])),
				A2(
				elm$html$Html$td,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamRankStats')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(rtentry.nrGamesWon))
					])),
				A2(
				elm$html$Html$td,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamRankStats')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(rtentry.nrGamesDrawn))
					])),
				A2(
				elm$html$Html$td,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamRankStats')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(rtentry.nrGamesLost))
					])),
				A2(
				elm$html$Html$td,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamRankStats')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(rtentry.nrGoalsScored))
					])),
				A2(
				elm$html$Html$td,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamRankStats')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(rtentry.nrGoalsSuffered))
					]))
			]);
		var lHomeAwayTableCells = _List_fromArray(
			[
				A2(
				elm$html$Html$td,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamRankStats')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(rtentry.nrHomeGamesPlayed))
					])),
				A2(
				elm$html$Html$td,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamRankStats')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(rtentry.nrHomeGamesWon))
					])),
				A2(
				elm$html$Html$td,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamRankStats')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(rtentry.nrHomeGamesDrawn))
					])),
				A2(
				elm$html$Html$td,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamRankStats')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(rtentry.nrHomeGamesLost))
					])),
				A2(
				elm$html$Html$td,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamRankStats')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(rtentry.nrGoalsScoredHome))
					])),
				A2(
				elm$html$Html$td,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamRankStats')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(rtentry.nrGoalsSufferedHome))
					])),
				A2(
				elm$html$Html$td,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamRankStats')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(rtentry.nrAwayGamesPlayed))
					])),
				A2(
				elm$html$Html$td,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamRankStats')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(rtentry.nrAwayGamesWon))
					])),
				A2(
				elm$html$Html$td,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamRankStats')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(rtentry.nrAwayGamesDrawn))
					])),
				A2(
				elm$html$Html$td,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamRankStats')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(rtentry.nrAwayGamesLost))
					])),
				A2(
				elm$html$Html$td,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamRankStats')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(rtentry.nrGoalsScoredAway))
					])),
				A2(
				elm$html$Html$td,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('teamRankStats')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						elm$core$String$fromInt(rtentry.nrGoalsSufferedAway))
					]))
			]);
		var ltableRow = _Utils_eq(tablesize, author$project$Types$FullTable) ? _Utils_ap(lpartialTableCells, lHomeAwayTableCells) : lpartialTableCells;
		return A2(elm$html$Html$tr, _List_Nil, ltableRow);
	});
var author$project$FootballStandings$wrapInContainerAndRowDivs = function (lelems) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('container')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('row')
					]),
				lelems)
			]));
};
var elm$html$Html$Attributes$align = elm$html$Html$Attributes$stringProperty('align');
var author$project$FootballStandings$outputRankTableViewStyled = F2(
	function (model, strClass) {
		var lranktable = A2(
			author$project$FootballStandings$orderLRecbyField_,
			model.currentorder,
			A4(author$project$FootballStandings$filterEntrybyWeekMbSeasonLeague, model.rankTable, model.weekNr, model.selectedSeasonId, model.selectedLeague));
		var _n0 = function () {
			var _n1 = author$project$FootballStandings$getCompAndSeasonNameFromListHead(lranktable);
			if (_n1.$ === 'Nothing') {
				return _Utils_Tuple2('', '');
			} else {
				var _n2 = _n1.a;
				var a = _n2.a;
				var b = _n2.b;
				return _Utils_Tuple2(a, b);
			}
		}();
		var leagueName_ = _n0.a;
		var seasonName_ = _n0.b;
		var leagueName = (leagueName_ !== '') ? leagueName_ : A2(author$project$FootballStandings$getLeagueNameFromLeagueId, model.selectedLeague, model.leagues);
		var seasonName = (seasonName_ !== '') ? seasonName_ : A2(author$project$FootballStandings$getSeasonNameFromSeasonId, model.selectedSeasonId, model.seasonRange);
		var strTitle = A2(author$project$LanguageFuncs$gtxt, '_Standings-Season_', model.language) + (seasonName + (' - ' + leagueName));
		return (elm$core$List$length(lranktable) > 0) ? author$project$FootballStandings$wrapInContainerAndRowDivs(
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class(strClass + ' text-center'),
							elm$html$Html$Attributes$align('center')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$table,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('tableRank')
								]),
							_List_fromArray(
								[
									A2(
									elm$html$Html$thead,
									_List_Nil,
									A4(author$project$FootballStandings$getListTableRankHeaders, strTitle, model.currentorder, model.tablesize, model.language)),
									A2(
									elm$html$Html$tbody,
									_List_Nil,
									A2(
										elm$core$List$map,
										author$project$FootballStandings$rankTableEntryToTableRow(model.tablesize),
										lranktable))
								]))
						]))
				])) : author$project$FootballStandings$wrapInContainerAndRowDivs(
			_List_fromArray(
				[
					elm$html$Html$text('')
				]));
	});
var elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(
			A3(elm$core$List$foldl, elm$core$Basics$min, x, xs));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Main$getMinWeekMaxWeekTuple = function (model) {
	var tabId = author$project$Main$toTabId(model.currentTab);
	var _n0 = model.selectedSeasonId;
	if (_n0.$ === 'Just') {
		var sid = _n0.a;
		return function (_n1) {
			var a = _n1.a;
			var b = _n1.b;
			return _Utils_Tuple2(
				A2(elm$core$Maybe$withDefault, 1, a),
				A2(elm$core$Maybe$withDefault, 34, b));
		}(
			function (l) {
				return _Utils_Tuple2(
					elm$core$List$minimum(l),
					elm$core$List$maximum(l));
			}(
				A2(
					elm$core$Maybe$withDefault,
					A2(elm$core$List$range, 1, 34),
					A2(
						elm$core$Dict$get,
						_Utils_Tuple3(model.selectedLeague, sid, tabId),
						model.cacheWeekRange))));
	} else {
		return _Utils_Tuple2(1, 34);
	}
};
var elm$html$Html$h2 = _VirtualDom_node('h2');
var author$project$Main$titleView = function (model) {
	var title = function () {
		var _n0 = model.currentTab;
		if (_n0.$ === 'CalendarTab') {
			return 'football Calendar';
		} else {
			return 'standings';
		}
	}();
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				elm$html$Html$h2,
				_List_Nil,
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, title, model.language)
					]))
			]));
};
var author$project$Types$ChangeLeague = function (a) {
	return {$: 'ChangeLeague', a: a};
};
var elm$html$Html$label = _VirtualDom_node('label');
var elm$html$Html$option = _VirtualDom_node('option');
var elm$html$Html$select = _VirtualDom_node('select');
var elm$html$Html$Attributes$for = elm$html$Html$Attributes$stringProperty('htmlFor');
var elm$json$Json$Encode$bool = _Json_wrap;
var elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$bool(bool));
	});
var elm$html$Html$Attributes$selected = elm$html$Html$Attributes$boolProperty('selected');
var elm$html$Html$Attributes$value = elm$html$Html$Attributes$stringProperty('value');
var elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var elm$html$Html$Events$targetValue = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	elm$json$Json$Decode$string);
var elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			elm$json$Json$Decode$map,
			elm$html$Html$Events$alwaysStop,
			A2(elm$json$Json$Decode$map, tagger, elm$html$Html$Events$targetValue)));
};
var author$project$ViewControls$leagueView = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('form-group row')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$label,
				_List_fromArray(
					[
						elm$html$Html$Attributes$for('leagueSelector'),
						elm$html$Html$Attributes$class('col-form-label col-sm-3')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, 'league', model.language)
					])),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('col-sm-9')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$select,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('form-control'),
								elm$html$Html$Events$onInput(author$project$Types$ChangeLeague)
							]),
						A2(
							elm$core$List$map,
							function (item) {
								return A2(
									elm$html$Html$option,
									_List_fromArray(
										[
											elm$html$Html$Attributes$selected(
											_Utils_eq(item.id, model.selectedLeague)),
											elm$html$Html$Attributes$value(
											elm$core$String$fromInt(item.id))
										]),
									_List_fromArray(
										[
											elm$html$Html$text(item.name)
										]));
							},
							model.leagues))
					]))
			]));
};
var author$project$Types$ChangeWeekMode = {$: 'ChangeWeekMode'};
var elm$html$Html$input = _VirtualDom_node('input');
var elm$html$Html$Attributes$checked = elm$html$Html$Attributes$boolProperty('checked');
var elm$html$Html$Attributes$type_ = elm$html$Html$Attributes$stringProperty('type');
var elm$html$Html$Events$targetChecked = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'checked']),
	elm$json$Json$Decode$bool);
var elm$html$Html$Events$onCheck = function (tagger) {
	return A2(
		elm$html$Html$Events$on,
		'change',
		A2(elm$json$Json$Decode$map, tagger, elm$html$Html$Events$targetChecked));
};
var author$project$ViewControls$radio = F4(
	function (frommodel, opt, name, msg) {
		return _List_fromArray(
			[
				A2(
				elm$html$Html$input,
				_List_fromArray(
					[
						elm$html$Html$Attributes$type_('radio'),
						elm$html$Html$Attributes$checked(
						_Utils_eq(frommodel, opt)),
						elm$html$Html$Events$onCheck(
						function (_n0) {
							return msg;
						})
					]),
				_List_Nil),
				elm$html$Html$text(name)
			]);
	});
var author$project$ViewControls$modeView = function (model) {
	var _n0 = model.currentTab;
	if (_n0.$ === 'CalendarTab') {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('form-group row')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$label,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('col-form-label col-sm-3')
						]),
					_List_fromArray(
						[
							A2(author$project$LanguageFuncs$gtxt_, 'output mode', model.language)
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('col-sm-9')
						]),
					_Utils_ap(
						A4(
							author$project$ViewControls$radio,
							model.weekmode,
							author$project$Types$AllWeeks,
							A2(author$project$LanguageFuncs$gtxt, 'all weeks', model.language),
							author$project$Types$ChangeWeekMode),
						A4(
							author$project$ViewControls$radio,
							model.weekmode,
							author$project$Types$SingleWeek,
							A2(author$project$LanguageFuncs$gtxt, 'single week', model.language),
							author$project$Types$ChangeWeekMode)))
				]));
	} else {
		return A2(elm$html$Html$div, _List_Nil, _List_Nil);
	}
};
var author$project$Types$ChangeOptionGoals = {$: 'ChangeOptionGoals'};
var author$project$ViewControls$radioOptionGoals = F3(
	function (model, bool, name) {
		return _List_fromArray(
			[
				A2(
				elm$html$Html$input,
				_List_fromArray(
					[
						elm$html$Html$Attributes$type_('radio'),
						elm$html$Html$Attributes$checked(
						_Utils_eq(model.showGameResults, bool)),
						elm$html$Html$Events$onCheck(
						function (_n0) {
							return author$project$Types$ChangeOptionGoals;
						})
					]),
				_List_Nil),
				elm$html$Html$text(name)
			]);
	});
var author$project$ViewControls$optionGoalsView = function (model) {
	var _n0 = model.currentTab;
	if (_n0.$ === 'CalendarTab') {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('form-group row')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$label,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('col-form-label col-sm-3')
						]),
					_List_fromArray(
						[
							A2(author$project$LanguageFuncs$gtxt_, 'show goals', model.language)
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('col-sm-9')
						]),
					_Utils_ap(
						A3(
							author$project$ViewControls$radioOptionGoals,
							model,
							true,
							A2(author$project$LanguageFuncs$gtxt, 'yes', model.language)),
						A3(
							author$project$ViewControls$radioOptionGoals,
							model,
							false,
							A2(author$project$LanguageFuncs$gtxt, 'no', model.language))))
				]));
	} else {
		return A2(elm$html$Html$div, _List_Nil, _List_Nil);
	}
};
var author$project$Types$ChangeSeason = function (a) {
	return {$: 'ChangeSeason', a: a};
};
var author$project$ViewControls$seasonsView = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('form-group row')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$label,
				_List_fromArray(
					[
						elm$html$Html$Attributes$for('seasonsInput'),
						elm$html$Html$Attributes$class('col-form-label col-sm-3')
					]),
				_List_fromArray(
					[
						A2(author$project$LanguageFuncs$gtxt_, 'season', model.language)
					])),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('col-sm-9')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$select,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('form-control'),
								elm$html$Html$Events$onInput(author$project$Types$ChangeSeason)
							]),
						A2(
							elm$core$List$map,
							function (item) {
								return A2(
									elm$html$Html$option,
									_List_fromArray(
										[
											elm$html$Html$Attributes$selected(
											_Utils_eq(
												elm$core$Maybe$Just(item.seasonId),
												model.selectedSeasonId)),
											elm$html$Html$Attributes$value(
											elm$core$String$fromInt(item.seasonId))
										]),
									_List_fromArray(
										[
											elm$html$Html$text(item.seasonName)
										]));
							},
							model.seasonRange))
					]))
			]));
};
var elm$html$Html$button = _VirtualDom_node('button');
var author$project$ViewControls$submitView = A2(
	elm$html$Html$div,
	_List_fromArray(
		[
			elm$html$Html$Attributes$class('form-group row')
		]),
	_List_fromArray(
		[
			A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('offset-sm-3 col-sm-9')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$button,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('btn btn-success btn-block'),
							elm$html$Html$Events$onClick(author$project$Types$Submit)
						]),
					_List_fromArray(
						[
							elm$html$Html$text('Submit')
						]))
				]))
		]));
var author$project$Types$ChangeTableSize = {$: 'ChangeTableSize'};
var author$project$ViewControls$tableSizeOptionsView = function (model) {
	var _n0 = model.currentTab;
	if (_n0.$ === 'StandingsTab') {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('form-group row')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$label,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('col-form-label col-sm-3')
						]),
					_List_fromArray(
						[
							A2(author$project$LanguageFuncs$gtxt_, 'table size', model.language)
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('col-sm-9')
						]),
					_Utils_ap(
						A4(
							author$project$ViewControls$radio,
							model.tablesize,
							author$project$Types$FullTable,
							A2(author$project$LanguageFuncs$gtxt, 'full', model.language),
							author$project$Types$ChangeTableSize),
						A4(
							author$project$ViewControls$radio,
							model.tablesize,
							author$project$Types$PartialTable,
							A2(author$project$LanguageFuncs$gtxt, 'partial', model.language),
							author$project$Types$ChangeTableSize)))
				]));
	} else {
		return A2(elm$html$Html$div, _List_Nil, _List_Nil);
	}
};
var author$project$Types$CloseAlert = {$: 'CloseAlert'};
var author$project$ViewControls$viewAlertMessage = function (alertMessage) {
	var el = function () {
		if (alertMessage.$ === 'Just') {
			var message = alertMessage.a;
			return A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('alert alert-warning')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(message),
						A2(
						elm$html$Html$span,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('close'),
								elm$html$Html$Events$onClick(author$project$Types$CloseAlert)
							]),
						_List_fromArray(
							[
								elm$html$Html$text('X')
							]))
					]));
		} else {
			return elm$html$Html$text('');
		}
	}();
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('row')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('offset-sm-3 col-sm-9')
					]),
				_List_fromArray(
					[el]))
			]));
};
var author$project$Types$ChangeWeekNr = function (a) {
	return {$: 'ChangeWeekNr', a: a};
};
var elm$html$Html$Attributes$max = elm$html$Html$Attributes$stringProperty('max');
var elm$html$Html$Attributes$min = elm$html$Html$Attributes$stringProperty('min');
var author$project$ViewControls$weekView = F2(
	function (model, _n0) {
		var minWeek = _n0.a;
		var maxWeek = _n0.b;
		return (_Utils_eq(model.weekmode, author$project$Types$SingleWeek) || _Utils_eq(model.currentTab, author$project$Types$StandingsTab)) ? A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('form-group row')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$label,
					_List_fromArray(
						[
							elm$html$Html$Attributes$for('weekNrInput'),
							elm$html$Html$Attributes$class('col-form-label col-sm-3')
						]),
					_List_fromArray(
						[
							A2(author$project$LanguageFuncs$gtxt_, 'week nr', model.language)
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('col-sm-9')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$input,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('form-control'),
									elm$html$Html$Attributes$type_('number'),
									elm$html$Html$Attributes$min(
									elm$core$String$fromInt(minWeek)),
									elm$html$Html$Attributes$max(
									elm$core$String$fromInt(maxWeek)),
									elm$html$Html$Attributes$value(
									elm$core$String$fromInt(model.weekNr)),
									elm$html$Html$Events$onInput(author$project$Types$ChangeWeekNr)
								]),
							_List_Nil)
						]))
				])) : elm$html$Html$text('');
	});
var elm$html$Html$br = _VirtualDom_node('br');
var author$project$Main$viewCommonControls = function (model) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('container')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('row')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$div,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('offset-md-3 col-md-6')
									]),
								_List_fromArray(
									[
										A2(
										elm$html$Html$span,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('text-center')
											]),
										_List_fromArray(
											[
												author$project$Main$titleView(model)
											])),
										A2(elm$html$Html$br, _List_Nil, _List_Nil),
										A2(
										elm$html$Html$div,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('container')
											]),
										_List_fromArray(
											[
												author$project$ViewControls$leagueView(model),
												author$project$ViewControls$seasonsView(model),
												author$project$ViewControls$modeView(model),
												A2(
												author$project$ViewControls$weekView,
												model,
												author$project$Main$getMinWeekMaxWeekTuple(model)),
												author$project$ViewControls$optionGoalsView(model),
												author$project$ViewControls$tableSizeOptionsView(model),
												author$project$ViewControls$submitView,
												author$project$ViewControls$viewAlertMessage(model.alertMessage)
											]))
									]))
							]))
					]))
			]));
};
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var author$project$ViewControls$outputFetchingDataView = function (model) {
	var strText = A2(elm$core$String$left, model.nrInfoChars, 'Fetching Data .....! ');
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('offset-md-4 col-md-4')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_Nil,
				_List_fromArray(
					[
						elm$html$Html$text(strText)
					]))
			]));
};
var author$project$Main$renderTabContent = function (model) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				author$project$Main$viewCommonControls(model),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				function () {
				if (_Utils_eq(model.presentStatus, author$project$Types$ShowingData) || _Utils_eq(model.presentStatus, author$project$Types$NoData)) {
					var _n0 = model.currentTab;
					if (_n0.$ === 'CalendarTab') {
						return author$project$FootballCalendar$outputView(model);
					} else {
						return A2(author$project$FootballStandings$outputRankTableViewStyled, model, 'offset-md-2 col-md-8');
					}
				} else {
					return author$project$ViewControls$outputFetchingDataView(model);
				}
			}(),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(
				elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						A2(elm$html$Html$br, _List_Nil, _List_Nil),
						A2(elm$html$Html$br, _List_Nil, _List_Nil)
					]))
			]));
};
var author$project$Main$view = function (model) {
	return (model.apiUrl !== '') ? A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						author$project$Main$renderHeaders(model)
					])),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(
				elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						author$project$Main$renderTabContent(model)
					]))
			])) : A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_Nil,
				_List_fromArray(
					[
						elm$html$Html$text('Please Provide flags with a valid API Url')
					]))
			]));
};
var elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0.a;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var elm$core$Task$init = elm$core$Task$succeed(_Utils_Tuple0);
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0.a;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return _Utils_Tuple0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(_Utils_Tuple0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0.a;
		return elm$core$Task$Perform(
			A2(elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			elm$core$Task$Perform(
				A2(elm$core$Task$map, toMessage, task)));
	});
var elm$core$String$length = _String_length;
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$startsWith = _String_startsWith;
var elm$url$Url$Http = {$: 'Http'};
var elm$url$Url$Https = {$: 'Https'};
var elm$core$String$indexes = _String_indexes;
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$core$String$contains = _String_contains;
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 'Nothing') {
						return elm$core$Maybe$Nothing;
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Http,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Https,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$element = _Browser_element;
var author$project$Main$main = elm$browser$Browser$element(
	{init: author$project$Main$initFunc, subscriptions: author$project$Main$subscriptions, update: author$project$Main$update, view: author$project$Main$view});
_Platform_export({'Main':{'init':author$project$Main$main(elm$json$Json$Decode$value)(0)}});}(this));