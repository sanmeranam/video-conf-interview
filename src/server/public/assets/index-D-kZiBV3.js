function _mergeNamespaces(n, m) {
	for (var i = 0; i < m.length; i++) {
		const e = m[i];
		if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
			if (k !== 'default' && !(k in n)) {
				const d = Object.getOwnPropertyDescriptor(e, k);
				if (d) {
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: () => e[k]
					});
				}
			}
		} }
	}
	return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}

function getDefaultExportFromCjs$1(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;
	{
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

var react = {exports: {}};

function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var browser = { exports: {} };
var process = browser.exports = {};
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    if (typeof setTimeout === "function") {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }
  try {
    if (typeof clearTimeout === "function") {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    return setTimeout(fun, 0);
  }
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e2) {
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    return clearTimeout(marker);
  }
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      return cachedClearTimeout.call(null, marker);
    } catch (e2) {
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
process.nextTick = function(fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
};
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function() {
  this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = "";
process.versions = {};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
  return [];
};
process.binding = function(name) {
  throw new Error("process.binding is not supported");
};
process.cwd = function() {
  return "/";
};
process.chdir = function(dir) {
  throw new Error("process.chdir is not supported");
};
process.umask = function() {
  return 0;
};
var browserExports = browser.exports;
const process$1 = /* @__PURE__ */ getDefaultExportFromCjs(browserExports);

var react_production = {};

var hasRequiredReact_production;

function requireReact_production () {
	if (hasRequiredReact_production) return react_production;
	hasRequiredReact_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
	  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	  REACT_MEMO_TYPE = Symbol.for("react.memo"),
	  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
	  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
	  maybeIterable =
	    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
	    maybeIterable["@@iterator"];
	  return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
	    isMounted: function () {
	      return false;
	    },
	    enqueueForceUpdate: function () {},
	    enqueueReplaceState: function () {},
	    enqueueSetState: function () {}
	  },
	  assign = Object.assign,
	  emptyObject = {};
	function Component(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function (partialState, callback) {
	  if (
	    "object" !== typeof partialState &&
	    "function" !== typeof partialState &&
	    null != partialState
	  )
	    throw Error(
	      "takes an object of state variables to update or a function which returns an object of state variables."
	    );
	  this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
	pureComponentPrototype.constructor = PureComponent;
	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = true;
	var isArrayImpl = Array.isArray,
	  ReactSharedInternals = { H: null, A: null, T: null, S: null },
	  hasOwnProperty = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, self, source, owner, props) {
	  self = props.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== self ? self : null,
	    props: props
	  };
	}
	function cloneAndReplaceKey(oldElement, newKey) {
	  return ReactElement(
	    oldElement.type,
	    newKey,
	    void 0,
	    void 0,
	    void 0,
	    oldElement.props
	  );
	}
	function isValidElement(object) {
	  return (
	    "object" === typeof object &&
	    null !== object &&
	    object.$$typeof === REACT_ELEMENT_TYPE
	  );
	}
	function escape(key) {
	  var escaperLookup = { "=": "=0", ":": "=2" };
	  return (
	    "$" +
	    key.replace(/[=:]/g, function (match) {
	      return escaperLookup[match];
	    })
	  );
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
	  return "object" === typeof element && null !== element && null != element.key
	    ? escape("" + element.key)
	    : index.toString(36);
	}
	function noop$1() {}
	function resolveThenable(thenable) {
	  switch (thenable.status) {
	    case "fulfilled":
	      return thenable.value;
	    case "rejected":
	      throw thenable.reason;
	    default:
	      switch (
	        ("string" === typeof thenable.status
	          ? thenable.then(noop$1, noop$1)
	          : ((thenable.status = "pending"),
	            thenable.then(
	              function (fulfilledValue) {
	                "pending" === thenable.status &&
	                  ((thenable.status = "fulfilled"),
	                  (thenable.value = fulfilledValue));
	              },
	              function (error) {
	                "pending" === thenable.status &&
	                  ((thenable.status = "rejected"), (thenable.reason = error));
	              }
	            )),
	        thenable.status)
	      ) {
	        case "fulfilled":
	          return thenable.value;
	        case "rejected":
	          throw thenable.reason;
	      }
	  }
	  throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
	  var type = typeof children;
	  if ("undefined" === type || "boolean" === type) children = null;
	  var invokeCallback = false;
	  if (null === children) invokeCallback = true;
	  else
	    switch (type) {
	      case "bigint":
	      case "string":
	      case "number":
	        invokeCallback = true;
	        break;
	      case "object":
	        switch (children.$$typeof) {
	          case REACT_ELEMENT_TYPE:
	          case REACT_PORTAL_TYPE:
	            invokeCallback = true;
	            break;
	          case REACT_LAZY_TYPE:
	            return (
	              (invokeCallback = children._init),
	              mapIntoArray(
	                invokeCallback(children._payload),
	                array,
	                escapedPrefix,
	                nameSoFar,
	                callback
	              )
	            );
	        }
	    }
	  if (invokeCallback)
	    return (
	      (callback = callback(children)),
	      (invokeCallback =
	        "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar),
	      isArrayImpl(callback)
	        ? ((escapedPrefix = ""),
	          null != invokeCallback &&
	            (escapedPrefix =
	              invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
	          mapIntoArray(callback, array, escapedPrefix, "", function (c) {
	            return c;
	          }))
	        : null != callback &&
	          (isValidElement(callback) &&
	            (callback = cloneAndReplaceKey(
	              callback,
	              escapedPrefix +
	                (null == callback.key ||
	                (children && children.key === callback.key)
	                  ? ""
	                  : ("" + callback.key).replace(
	                      userProvidedKeyEscapeRegex,
	                      "$&/"
	                    ) + "/") +
	                invokeCallback
	            )),
	          array.push(callback)),
	      1
	    );
	  invokeCallback = 0;
	  var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
	  if (isArrayImpl(children))
	    for (var i = 0; i < children.length; i++)
	      (nameSoFar = children[i]),
	        (type = nextNamePrefix + getElementKey(nameSoFar, i)),
	        (invokeCallback += mapIntoArray(
	          nameSoFar,
	          array,
	          escapedPrefix,
	          type,
	          callback
	        ));
	  else if (((i = getIteratorFn(children)), "function" === typeof i))
	    for (
	      children = i.call(children), i = 0;
	      !(nameSoFar = children.next()).done;

	    )
	      (nameSoFar = nameSoFar.value),
	        (type = nextNamePrefix + getElementKey(nameSoFar, i++)),
	        (invokeCallback += mapIntoArray(
	          nameSoFar,
	          array,
	          escapedPrefix,
	          type,
	          callback
	        ));
	  else if ("object" === type) {
	    if ("function" === typeof children.then)
	      return mapIntoArray(
	        resolveThenable(children),
	        array,
	        escapedPrefix,
	        nameSoFar,
	        callback
	      );
	    array = String(children);
	    throw Error(
	      "Objects are not valid as a React child (found: " +
	        ("[object Object]" === array
	          ? "object with keys {" + Object.keys(children).join(", ") + "}"
	          : array) +
	        "). If you meant to render a collection of children, use an array instead."
	    );
	  }
	  return invokeCallback;
	}
	function mapChildren(children, func, context) {
	  if (null == children) return children;
	  var result = [],
	    count = 0;
	  mapIntoArray(children, result, "", "", function (child) {
	    return func.call(context, child, count++);
	  });
	  return result;
	}
	function lazyInitializer(payload) {
	  if (-1 === payload._status) {
	    var ctor = payload._result;
	    ctor = ctor();
	    ctor.then(
	      function (moduleObject) {
	        if (0 === payload._status || -1 === payload._status)
	          (payload._status = 1), (payload._result = moduleObject);
	      },
	      function (error) {
	        if (0 === payload._status || -1 === payload._status)
	          (payload._status = 2), (payload._result = error);
	      }
	    );
	    -1 === payload._status && ((payload._status = 0), (payload._result = ctor));
	  }
	  if (1 === payload._status) return payload._result.default;
	  throw payload._result;
	}
	var reportGlobalError =
	  "function" === typeof reportError
	    ? reportError
	    : function (error) {
	        if (
	          "object" === typeof window &&
	          "function" === typeof window.ErrorEvent
	        ) {
	          var event = new window.ErrorEvent("error", {
	            bubbles: true,
	            cancelable: true,
	            message:
	              "object" === typeof error &&
	              null !== error &&
	              "string" === typeof error.message
	                ? String(error.message)
	                : String(error),
	            error: error
	          });
	          if (!window.dispatchEvent(event)) return;
	        } else if (
	          "object" === typeof process$1 &&
	          "function" === typeof process$1.emit
	        ) {
	          process$1.emit("uncaughtException", error);
	          return;
	        }
	        console.error(error);
	      };
	function noop() {}
	react_production.Children = {
	  map: mapChildren,
	  forEach: function (children, forEachFunc, forEachContext) {
	    mapChildren(
	      children,
	      function () {
	        forEachFunc.apply(this, arguments);
	      },
	      forEachContext
	    );
	  },
	  count: function (children) {
	    var n = 0;
	    mapChildren(children, function () {
	      n++;
	    });
	    return n;
	  },
	  toArray: function (children) {
	    return (
	      mapChildren(children, function (child) {
	        return child;
	      }) || []
	    );
	  },
	  only: function (children) {
	    if (!isValidElement(children))
	      throw Error(
	        "React.Children.only expected to receive a single React element child."
	      );
	    return children;
	  }
	};
	react_production.Component = Component;
	react_production.Fragment = REACT_FRAGMENT_TYPE;
	react_production.Profiler = REACT_PROFILER_TYPE;
	react_production.PureComponent = PureComponent;
	react_production.StrictMode = REACT_STRICT_MODE_TYPE;
	react_production.Suspense = REACT_SUSPENSE_TYPE;
	react_production.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
	  ReactSharedInternals;
	react_production.act = function () {
	  throw Error("act(...) is not supported in production builds of React.");
	};
	react_production.cache = function (fn) {
	  return function () {
	    return fn.apply(null, arguments);
	  };
	};
	react_production.cloneElement = function (element, config, children) {
	  if (null === element || void 0 === element)
	    throw Error(
	      "The argument must be a React element, but you passed " + element + "."
	    );
	  var props = assign({}, element.props),
	    key = element.key,
	    owner = void 0;
	  if (null != config)
	    for (propName in (void 0 !== config.ref && (owner = void 0),
	    void 0 !== config.key && (key = "" + config.key),
	    config))
	      !hasOwnProperty.call(config, propName) ||
	        "key" === propName ||
	        "__self" === propName ||
	        "__source" === propName ||
	        ("ref" === propName && void 0 === config.ref) ||
	        (props[propName] = config[propName]);
	  var propName = arguments.length - 2;
	  if (1 === propName) props.children = children;
	  else if (1 < propName) {
	    for (var childArray = Array(propName), i = 0; i < propName; i++)
	      childArray[i] = arguments[i + 2];
	    props.children = childArray;
	  }
	  return ReactElement(element.type, key, void 0, void 0, owner, props);
	};
	react_production.createContext = function (defaultValue) {
	  defaultValue = {
	    $$typeof: REACT_CONTEXT_TYPE,
	    _currentValue: defaultValue,
	    _currentValue2: defaultValue,
	    _threadCount: 0,
	    Provider: null,
	    Consumer: null
	  };
	  defaultValue.Provider = defaultValue;
	  defaultValue.Consumer = {
	    $$typeof: REACT_CONSUMER_TYPE,
	    _context: defaultValue
	  };
	  return defaultValue;
	};
	react_production.createElement = function (type, config, children) {
	  var propName,
	    props = {},
	    key = null;
	  if (null != config)
	    for (propName in (void 0 !== config.key && (key = "" + config.key), config))
	      hasOwnProperty.call(config, propName) &&
	        "key" !== propName &&
	        "__self" !== propName &&
	        "__source" !== propName &&
	        (props[propName] = config[propName]);
	  var childrenLength = arguments.length - 2;
	  if (1 === childrenLength) props.children = children;
	  else if (1 < childrenLength) {
	    for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
	      childArray[i] = arguments[i + 2];
	    props.children = childArray;
	  }
	  if (type && type.defaultProps)
	    for (propName in ((childrenLength = type.defaultProps), childrenLength))
	      void 0 === props[propName] &&
	        (props[propName] = childrenLength[propName]);
	  return ReactElement(type, key, void 0, void 0, null, props);
	};
	react_production.createRef = function () {
	  return { current: null };
	};
	react_production.forwardRef = function (render) {
	  return { $$typeof: REACT_FORWARD_REF_TYPE, render: render };
	};
	react_production.isValidElement = isValidElement;
	react_production.lazy = function (ctor) {
	  return {
	    $$typeof: REACT_LAZY_TYPE,
	    _payload: { _status: -1, _result: ctor },
	    _init: lazyInitializer
	  };
	};
	react_production.memo = function (type, compare) {
	  return {
	    $$typeof: REACT_MEMO_TYPE,
	    type: type,
	    compare: void 0 === compare ? null : compare
	  };
	};
	react_production.startTransition = function (scope) {
	  var prevTransition = ReactSharedInternals.T,
	    currentTransition = {};
	  ReactSharedInternals.T = currentTransition;
	  try {
	    var returnValue = scope(),
	      onStartTransitionFinish = ReactSharedInternals.S;
	    null !== onStartTransitionFinish &&
	      onStartTransitionFinish(currentTransition, returnValue);
	    "object" === typeof returnValue &&
	      null !== returnValue &&
	      "function" === typeof returnValue.then &&
	      returnValue.then(noop, reportGlobalError);
	  } catch (error) {
	    reportGlobalError(error);
	  } finally {
	    ReactSharedInternals.T = prevTransition;
	  }
	};
	react_production.unstable_useCacheRefresh = function () {
	  return ReactSharedInternals.H.useCacheRefresh();
	};
	react_production.use = function (usable) {
	  return ReactSharedInternals.H.use(usable);
	};
	react_production.useActionState = function (action, initialState, permalink) {
	  return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	react_production.useCallback = function (callback, deps) {
	  return ReactSharedInternals.H.useCallback(callback, deps);
	};
	react_production.useContext = function (Context) {
	  return ReactSharedInternals.H.useContext(Context);
	};
	react_production.useDebugValue = function () {};
	react_production.useDeferredValue = function (value, initialValue) {
	  return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	react_production.useEffect = function (create, deps) {
	  return ReactSharedInternals.H.useEffect(create, deps);
	};
	react_production.useId = function () {
	  return ReactSharedInternals.H.useId();
	};
	react_production.useImperativeHandle = function (ref, create, deps) {
	  return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	react_production.useInsertionEffect = function (create, deps) {
	  return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	react_production.useLayoutEffect = function (create, deps) {
	  return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	react_production.useMemo = function (create, deps) {
	  return ReactSharedInternals.H.useMemo(create, deps);
	};
	react_production.useOptimistic = function (passthrough, reducer) {
	  return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	react_production.useReducer = function (reducer, initialArg, init) {
	  return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	react_production.useRef = function (initialValue) {
	  return ReactSharedInternals.H.useRef(initialValue);
	};
	react_production.useState = function (initialState) {
	  return ReactSharedInternals.H.useState(initialState);
	};
	react_production.useSyncExternalStore = function (
	  subscribe,
	  getSnapshot,
	  getServerSnapshot
	) {
	  return ReactSharedInternals.H.useSyncExternalStore(
	    subscribe,
	    getSnapshot,
	    getServerSnapshot
	  );
	};
	react_production.useTransition = function () {
	  return ReactSharedInternals.H.useTransition();
	};
	react_production.version = "19.0.0";
	return react_production;
}

var hasRequiredReact;

function requireReact () {
	if (hasRequiredReact) return react.exports;
	hasRequiredReact = 1;
	{
	  react.exports = requireReact_production();
	}
	return react.exports;
}

var reactExports = requireReact();

var client = {exports: {}};

var reactDomClient_production = {};

var scheduler = {exports: {}};

var scheduler_production = {};

/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredScheduler_production;

function requireScheduler_production () {
	if (hasRequiredScheduler_production) return scheduler_production;
	hasRequiredScheduler_production = 1;
	(function (exports) {
		function push(heap, node) {
		  var index = heap.length;
		  heap.push(node);
		  a: for (; 0 < index; ) {
		    var parentIndex = (index - 1) >>> 1,
		      parent = heap[parentIndex];
		    if (0 < compare(parent, node))
		      (heap[parentIndex] = node), (heap[index] = parent), (index = parentIndex);
		    else break a;
		  }
		}
		function peek(heap) {
		  return 0 === heap.length ? null : heap[0];
		}
		function pop(heap) {
		  if (0 === heap.length) return null;
		  var first = heap[0],
		    last = heap.pop();
		  if (last !== first) {
		    heap[0] = last;
		    a: for (
		      var index = 0, length = heap.length, halfLength = length >>> 1;
		      index < halfLength;

		    ) {
		      var leftIndex = 2 * (index + 1) - 1,
		        left = heap[leftIndex],
		        rightIndex = leftIndex + 1,
		        right = heap[rightIndex];
		      if (0 > compare(left, last))
		        rightIndex < length && 0 > compare(right, left)
		          ? ((heap[index] = right),
		            (heap[rightIndex] = last),
		            (index = rightIndex))
		          : ((heap[index] = left),
		            (heap[leftIndex] = last),
		            (index = leftIndex));
		      else if (rightIndex < length && 0 > compare(right, last))
		        (heap[index] = right), (heap[rightIndex] = last), (index = rightIndex);
		      else break a;
		    }
		  }
		  return first;
		}
		function compare(a, b) {
		  var diff = a.sortIndex - b.sortIndex;
		  return 0 !== diff ? diff : a.id - b.id;
		}
		exports.unstable_now = void 0;
		if ("object" === typeof performance && "function" === typeof performance.now) {
		  var localPerformance = performance;
		  exports.unstable_now = function () {
		    return localPerformance.now();
		  };
		} else {
		  var localDate = Date,
		    initialTime = localDate.now();
		  exports.unstable_now = function () {
		    return localDate.now() - initialTime;
		  };
		}
		var taskQueue = [],
		  timerQueue = [],
		  taskIdCounter = 1,
		  currentTask = null,
		  currentPriorityLevel = 3,
		  isPerformingWork = false,
		  isHostCallbackScheduled = false,
		  isHostTimeoutScheduled = false,
		  localSetTimeout = "function" === typeof setTimeout ? setTimeout : null,
		  localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null,
		  localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null;
		function advanceTimers(currentTime) {
		  for (var timer = peek(timerQueue); null !== timer; ) {
		    if (null === timer.callback) pop(timerQueue);
		    else if (timer.startTime <= currentTime)
		      pop(timerQueue),
		        (timer.sortIndex = timer.expirationTime),
		        push(taskQueue, timer);
		    else break;
		    timer = peek(timerQueue);
		  }
		}
		function handleTimeout(currentTime) {
		  isHostTimeoutScheduled = false;
		  advanceTimers(currentTime);
		  if (!isHostCallbackScheduled)
		    if (null !== peek(taskQueue))
		      (isHostCallbackScheduled = true), requestHostCallback();
		    else {
		      var firstTimer = peek(timerQueue);
		      null !== firstTimer &&
		        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
		    }
		}
		var isMessageLoopRunning = false,
		  taskTimeoutID = -1,
		  frameInterval = 5,
		  startTime = -1;
		function shouldYieldToHost() {
		  return exports.unstable_now() - startTime < frameInterval ? false : true;
		}
		function performWorkUntilDeadline() {
		  if (isMessageLoopRunning) {
		    var currentTime = exports.unstable_now();
		    startTime = currentTime;
		    var hasMoreWork = true;
		    try {
		      a: {
		        isHostCallbackScheduled = !1;
		        isHostTimeoutScheduled &&
		          ((isHostTimeoutScheduled = !1),
		          localClearTimeout(taskTimeoutID),
		          (taskTimeoutID = -1));
		        isPerformingWork = !0;
		        var previousPriorityLevel = currentPriorityLevel;
		        try {
		          b: {
		            advanceTimers(currentTime);
		            for (
		              currentTask = peek(taskQueue);
		              null !== currentTask &&
		              !(
		                currentTask.expirationTime > currentTime && shouldYieldToHost()
		              );

		            ) {
		              var callback = currentTask.callback;
		              if ("function" === typeof callback) {
		                currentTask.callback = null;
		                currentPriorityLevel = currentTask.priorityLevel;
		                var continuationCallback = callback(
		                  currentTask.expirationTime <= currentTime
		                );
		                currentTime = exports.unstable_now();
		                if ("function" === typeof continuationCallback) {
		                  currentTask.callback = continuationCallback;
		                  advanceTimers(currentTime);
		                  hasMoreWork = !0;
		                  break b;
		                }
		                currentTask === peek(taskQueue) && pop(taskQueue);
		                advanceTimers(currentTime);
		              } else pop(taskQueue);
		              currentTask = peek(taskQueue);
		            }
		            if (null !== currentTask) hasMoreWork = !0;
		            else {
		              var firstTimer = peek(timerQueue);
		              null !== firstTimer &&
		                requestHostTimeout(
		                  handleTimeout,
		                  firstTimer.startTime - currentTime
		                );
		              hasMoreWork = !1;
		            }
		          }
		          break a;
		        } finally {
		          (currentTask = null),
		            (currentPriorityLevel = previousPriorityLevel),
		            (isPerformingWork = !1);
		        }
		        hasMoreWork = void 0;
		      }
		    } finally {
		      hasMoreWork
		        ? schedulePerformWorkUntilDeadline()
		        : (isMessageLoopRunning = false);
		    }
		  }
		}
		var schedulePerformWorkUntilDeadline;
		if ("function" === typeof localSetImmediate)
		  schedulePerformWorkUntilDeadline = function () {
		    localSetImmediate(performWorkUntilDeadline);
		  };
		else if ("undefined" !== typeof MessageChannel) {
		  var channel = new MessageChannel(),
		    port = channel.port2;
		  channel.port1.onmessage = performWorkUntilDeadline;
		  schedulePerformWorkUntilDeadline = function () {
		    port.postMessage(null);
		  };
		} else
		  schedulePerformWorkUntilDeadline = function () {
		    localSetTimeout(performWorkUntilDeadline, 0);
		  };
		function requestHostCallback() {
		  isMessageLoopRunning ||
		    ((isMessageLoopRunning = true), schedulePerformWorkUntilDeadline());
		}
		function requestHostTimeout(callback, ms) {
		  taskTimeoutID = localSetTimeout(function () {
		    callback(exports.unstable_now());
		  }, ms);
		}
		exports.unstable_IdlePriority = 5;
		exports.unstable_ImmediatePriority = 1;
		exports.unstable_LowPriority = 4;
		exports.unstable_NormalPriority = 3;
		exports.unstable_Profiling = null;
		exports.unstable_UserBlockingPriority = 2;
		exports.unstable_cancelCallback = function (task) {
		  task.callback = null;
		};
		exports.unstable_continueExecution = function () {
		  isHostCallbackScheduled ||
		    isPerformingWork ||
		    ((isHostCallbackScheduled = true), requestHostCallback());
		};
		exports.unstable_forceFrameRate = function (fps) {
		  0 > fps || 125 < fps
		    ? console.error(
		        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
		      )
		    : (frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5);
		};
		exports.unstable_getCurrentPriorityLevel = function () {
		  return currentPriorityLevel;
		};
		exports.unstable_getFirstCallbackNode = function () {
		  return peek(taskQueue);
		};
		exports.unstable_next = function (eventHandler) {
		  switch (currentPriorityLevel) {
		    case 1:
		    case 2:
		    case 3:
		      var priorityLevel = 3;
		      break;
		    default:
		      priorityLevel = currentPriorityLevel;
		  }
		  var previousPriorityLevel = currentPriorityLevel;
		  currentPriorityLevel = priorityLevel;
		  try {
		    return eventHandler();
		  } finally {
		    currentPriorityLevel = previousPriorityLevel;
		  }
		};
		exports.unstable_pauseExecution = function () {};
		exports.unstable_requestPaint = function () {};
		exports.unstable_runWithPriority = function (priorityLevel, eventHandler) {
		  switch (priorityLevel) {
		    case 1:
		    case 2:
		    case 3:
		    case 4:
		    case 5:
		      break;
		    default:
		      priorityLevel = 3;
		  }
		  var previousPriorityLevel = currentPriorityLevel;
		  currentPriorityLevel = priorityLevel;
		  try {
		    return eventHandler();
		  } finally {
		    currentPriorityLevel = previousPriorityLevel;
		  }
		};
		exports.unstable_scheduleCallback = function (
		  priorityLevel,
		  callback,
		  options
		) {
		  var currentTime = exports.unstable_now();
		  "object" === typeof options && null !== options
		    ? ((options = options.delay),
		      (options =
		        "number" === typeof options && 0 < options
		          ? currentTime + options
		          : currentTime))
		    : (options = currentTime);
		  switch (priorityLevel) {
		    case 1:
		      var timeout = -1;
		      break;
		    case 2:
		      timeout = 250;
		      break;
		    case 5:
		      timeout = 1073741823;
		      break;
		    case 4:
		      timeout = 1e4;
		      break;
		    default:
		      timeout = 5e3;
		  }
		  timeout = options + timeout;
		  priorityLevel = {
		    id: taskIdCounter++,
		    callback: callback,
		    priorityLevel: priorityLevel,
		    startTime: options,
		    expirationTime: timeout,
		    sortIndex: -1
		  };
		  options > currentTime
		    ? ((priorityLevel.sortIndex = options),
		      push(timerQueue, priorityLevel),
		      null === peek(taskQueue) &&
		        priorityLevel === peek(timerQueue) &&
		        (isHostTimeoutScheduled
		          ? (localClearTimeout(taskTimeoutID), (taskTimeoutID = -1))
		          : (isHostTimeoutScheduled = true),
		        requestHostTimeout(handleTimeout, options - currentTime)))
		    : ((priorityLevel.sortIndex = timeout),
		      push(taskQueue, priorityLevel),
		      isHostCallbackScheduled ||
		        isPerformingWork ||
		        ((isHostCallbackScheduled = true), requestHostCallback()));
		  return priorityLevel;
		};
		exports.unstable_shouldYield = shouldYieldToHost;
		exports.unstable_wrapCallback = function (callback) {
		  var parentPriorityLevel = currentPriorityLevel;
		  return function () {
		    var previousPriorityLevel = currentPriorityLevel;
		    currentPriorityLevel = parentPriorityLevel;
		    try {
		      return callback.apply(this, arguments);
		    } finally {
		      currentPriorityLevel = previousPriorityLevel;
		    }
		  };
		}; 
	} (scheduler_production));
	return scheduler_production;
}

var hasRequiredScheduler;

function requireScheduler () {
	if (hasRequiredScheduler) return scheduler.exports;
	hasRequiredScheduler = 1;
	{
	  scheduler.exports = requireScheduler_production();
	}
	return scheduler.exports;
}

var reactDom = {exports: {}};

var reactDom_production = {};

/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactDom_production;

function requireReactDom_production () {
	if (hasRequiredReactDom_production) return reactDom_production;
	hasRequiredReactDom_production = 1;
	var React = requireReact();
	function formatProdErrorMessage(code) {
	  var url = "https://react.dev/errors/" + code;
	  if (1 < arguments.length) {
	    url += "?args[]=" + encodeURIComponent(arguments[1]);
	    for (var i = 2; i < arguments.length; i++)
	      url += "&args[]=" + encodeURIComponent(arguments[i]);
	  }
	  return (
	    "Minified React error #" +
	    code +
	    "; visit " +
	    url +
	    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	  );
	}
	function noop() {}
	var Internals = {
	    d: {
	      f: noop,
	      r: function () {
	        throw Error(formatProdErrorMessage(522));
	      },
	      D: noop,
	      C: noop,
	      L: noop,
	      m: noop,
	      X: noop,
	      S: noop,
	      M: noop
	    },
	    p: 0,
	    findDOMNode: null
	  },
	  REACT_PORTAL_TYPE = Symbol.for("react.portal");
	function createPortal$1(children, containerInfo, implementation) {
	  var key =
	    3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
	  return {
	    $$typeof: REACT_PORTAL_TYPE,
	    key: null == key ? null : "" + key,
	    children: children,
	    containerInfo: containerInfo,
	    implementation: implementation
	  };
	}
	var ReactSharedInternals =
	  React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function getCrossOriginStringAs(as, input) {
	  if ("font" === as) return "";
	  if ("string" === typeof input)
	    return "use-credentials" === input ? input : "";
	}
	reactDom_production.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
	  Internals;
	reactDom_production.createPortal = function (children, container) {
	  var key =
	    2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
	  if (
	    !container ||
	    (1 !== container.nodeType &&
	      9 !== container.nodeType &&
	      11 !== container.nodeType)
	  )
	    throw Error(formatProdErrorMessage(299));
	  return createPortal$1(children, container, null, key);
	};
	reactDom_production.flushSync = function (fn) {
	  var previousTransition = ReactSharedInternals.T,
	    previousUpdatePriority = Internals.p;
	  try {
	    if (((ReactSharedInternals.T = null), (Internals.p = 2), fn)) return fn();
	  } finally {
	    (ReactSharedInternals.T = previousTransition),
	      (Internals.p = previousUpdatePriority),
	      Internals.d.f();
	  }
	};
	reactDom_production.preconnect = function (href, options) {
	  "string" === typeof href &&
	    (options
	      ? ((options = options.crossOrigin),
	        (options =
	          "string" === typeof options
	            ? "use-credentials" === options
	              ? options
	              : ""
	            : void 0))
	      : (options = null),
	    Internals.d.C(href, options));
	};
	reactDom_production.prefetchDNS = function (href) {
	  "string" === typeof href && Internals.d.D(href);
	};
	reactDom_production.preinit = function (href, options) {
	  if ("string" === typeof href && options && "string" === typeof options.as) {
	    var as = options.as,
	      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin),
	      integrity =
	        "string" === typeof options.integrity ? options.integrity : void 0,
	      fetchPriority =
	        "string" === typeof options.fetchPriority
	          ? options.fetchPriority
	          : void 0;
	    "style" === as
	      ? Internals.d.S(
	          href,
	          "string" === typeof options.precedence ? options.precedence : void 0,
	          {
	            crossOrigin: crossOrigin,
	            integrity: integrity,
	            fetchPriority: fetchPriority
	          }
	        )
	      : "script" === as &&
	        Internals.d.X(href, {
	          crossOrigin: crossOrigin,
	          integrity: integrity,
	          fetchPriority: fetchPriority,
	          nonce: "string" === typeof options.nonce ? options.nonce : void 0
	        });
	  }
	};
	reactDom_production.preinitModule = function (href, options) {
	  if ("string" === typeof href)
	    if ("object" === typeof options && null !== options) {
	      if (null == options.as || "script" === options.as) {
	        var crossOrigin = getCrossOriginStringAs(
	          options.as,
	          options.crossOrigin
	        );
	        Internals.d.M(href, {
	          crossOrigin: crossOrigin,
	          integrity:
	            "string" === typeof options.integrity ? options.integrity : void 0,
	          nonce: "string" === typeof options.nonce ? options.nonce : void 0
	        });
	      }
	    } else null == options && Internals.d.M(href);
	};
	reactDom_production.preload = function (href, options) {
	  if (
	    "string" === typeof href &&
	    "object" === typeof options &&
	    null !== options &&
	    "string" === typeof options.as
	  ) {
	    var as = options.as,
	      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
	    Internals.d.L(href, as, {
	      crossOrigin: crossOrigin,
	      integrity:
	        "string" === typeof options.integrity ? options.integrity : void 0,
	      nonce: "string" === typeof options.nonce ? options.nonce : void 0,
	      type: "string" === typeof options.type ? options.type : void 0,
	      fetchPriority:
	        "string" === typeof options.fetchPriority
	          ? options.fetchPriority
	          : void 0,
	      referrerPolicy:
	        "string" === typeof options.referrerPolicy
	          ? options.referrerPolicy
	          : void 0,
	      imageSrcSet:
	        "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
	      imageSizes:
	        "string" === typeof options.imageSizes ? options.imageSizes : void 0,
	      media: "string" === typeof options.media ? options.media : void 0
	    });
	  }
	};
	reactDom_production.preloadModule = function (href, options) {
	  if ("string" === typeof href)
	    if (options) {
	      var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
	      Internals.d.m(href, {
	        as:
	          "string" === typeof options.as && "script" !== options.as
	            ? options.as
	            : void 0,
	        crossOrigin: crossOrigin,
	        integrity:
	          "string" === typeof options.integrity ? options.integrity : void 0
	      });
	    } else Internals.d.m(href);
	};
	reactDom_production.requestFormReset = function (form) {
	  Internals.d.r(form);
	};
	reactDom_production.unstable_batchedUpdates = function (fn, a) {
	  return fn(a);
	};
	reactDom_production.useFormState = function (action, initialState, permalink) {
	  return ReactSharedInternals.H.useFormState(action, initialState, permalink);
	};
	reactDom_production.useFormStatus = function () {
	  return ReactSharedInternals.H.useHostTransitionStatus();
	};
	reactDom_production.version = "19.0.0";
	return reactDom_production;
}

var hasRequiredReactDom;

function requireReactDom () {
	if (hasRequiredReactDom) return reactDom.exports;
	hasRequiredReactDom = 1;
	function checkDCE() {
	  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
	    return;
	  }
	  try {
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    console.error(err);
	  }
	}
	{
	  checkDCE();
	  reactDom.exports = requireReactDom_production();
	}
	return reactDom.exports;
}

var hasRequiredReactDomClient_production;

function requireReactDomClient_production () {
	if (hasRequiredReactDomClient_production) return reactDomClient_production;
	hasRequiredReactDomClient_production = 1;
	/**
	 * @license React
	 * react-dom-client.production.js
	 *
	 * Copyright (c) Meta Platforms, Inc. and affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var Scheduler = requireScheduler(), React = requireReact(), ReactDOM = requireReactDom();
	function formatProdErrorMessage(code) {
	  var url = "https://react.dev/errors/" + code;
	  if (1 < arguments.length) {
	    url += "?args[]=" + encodeURIComponent(arguments[1]);
	    for (var i = 2; i < arguments.length; i++)
	      url += "&args[]=" + encodeURIComponent(arguments[i]);
	  }
	  return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function isValidContainer(node) {
	  return !(!node || 1 !== node.nodeType && 9 !== node.nodeType && 11 !== node.nodeType);
	}
	var REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_PROVIDER_TYPE = Symbol.for("react.provider"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy");
	var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
	var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
	  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
	  maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
	  return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	function getComponentNameFromType(type) {
	  if (null == type) return null;
	  if ("function" === typeof type)
	    return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
	  if ("string" === typeof type) return type;
	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return "Fragment";
	    case REACT_PORTAL_TYPE:
	      return "Portal";
	    case REACT_PROFILER_TYPE:
	      return "Profiler";
	    case REACT_STRICT_MODE_TYPE:
	      return "StrictMode";
	    case REACT_SUSPENSE_TYPE:
	      return "Suspense";
	    case REACT_SUSPENSE_LIST_TYPE:
	      return "SuspenseList";
	  }
	  if ("object" === typeof type)
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        return (type.displayName || "Context") + ".Provider";
	      case REACT_CONSUMER_TYPE:
	        return (type._context.displayName || "Context") + ".Consumer";
	      case REACT_FORWARD_REF_TYPE:
	        var innerType = type.render;
	        type = type.displayName;
	        type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
	        return type;
	      case REACT_MEMO_TYPE:
	        return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
	      case REACT_LAZY_TYPE:
	        innerType = type._payload;
	        type = type._init;
	        try {
	          return getComponentNameFromType(type(innerType));
	        } catch (x) {
	        }
	    }
	  return null;
	}
	var ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, assign = Object.assign, prefix, suffix;
	function describeBuiltInComponentFrame(name) {
	  if (void 0 === prefix)
	    try {
	      throw Error();
	    } catch (x) {
	      var match = x.stack.trim().match(/\n( *(at )?)/);
	      prefix = match && match[1] || "";
	      suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
	    }
	  return "\n" + prefix + name + suffix;
	}
	var reentry = false;
	function describeNativeComponentFrame(fn, construct) {
	  if (!fn || reentry) return "";
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace;
	  Error.prepareStackTrace = void 0;
	  try {
	    var RunInRootFrame = {
	      DetermineComponentFrameRoot: function() {
	        try {
	          if (construct) {
	            var Fake = function() {
	              throw Error();
	            };
	            Object.defineProperty(Fake.prototype, "props", {
	              set: function() {
	                throw Error();
	              }
	            });
	            if ("object" === typeof Reflect && Reflect.construct) {
	              try {
	                Reflect.construct(Fake, []);
	              } catch (x) {
	                var control = x;
	              }
	              Reflect.construct(fn, [], Fake);
	            } else {
	              try {
	                Fake.call();
	              } catch (x$0) {
	                control = x$0;
	              }
	              fn.call(Fake.prototype);
	            }
	          } else {
	            try {
	              throw Error();
	            } catch (x$1) {
	              control = x$1;
	            }
	            (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {
	            });
	          }
	        } catch (sample) {
	          if (sample && control && "string" === typeof sample.stack)
	            return [sample.stack, control.stack];
	        }
	        return [null, null];
	      }
	    };
	    RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
	    var namePropDescriptor = Object.getOwnPropertyDescriptor(
	      RunInRootFrame.DetermineComponentFrameRoot,
	      "name"
	    );
	    namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(
	      RunInRootFrame.DetermineComponentFrameRoot,
	      "name",
	      { value: "DetermineComponentFrameRoot" }
	    );
	    var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
	    if (sampleStack && controlStack) {
	      var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
	      for (namePropDescriptor = RunInRootFrame = 0; RunInRootFrame < sampleLines.length && !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot"); )
	        RunInRootFrame++;
	      for (; namePropDescriptor < controlLines.length && !controlLines[namePropDescriptor].includes(
	        "DetermineComponentFrameRoot"
	      ); )
	        namePropDescriptor++;
	      if (RunInRootFrame === sampleLines.length || namePropDescriptor === controlLines.length)
	        for (RunInRootFrame = sampleLines.length - 1, namePropDescriptor = controlLines.length - 1; 1 <= RunInRootFrame && 0 <= namePropDescriptor && sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]; )
	          namePropDescriptor--;
	      for (; 1 <= RunInRootFrame && 0 <= namePropDescriptor; RunInRootFrame--, namePropDescriptor--)
	        if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
	          if (1 !== RunInRootFrame || 1 !== namePropDescriptor) {
	            do
	              if (RunInRootFrame--, namePropDescriptor--, 0 > namePropDescriptor || sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
	                var frame = "\n" + sampleLines[RunInRootFrame].replace(" at new ", " at ");
	                fn.displayName && frame.includes("<anonymous>") && (frame = frame.replace("<anonymous>", fn.displayName));
	                return frame;
	              }
	            while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
	          }
	          break;
	        }
	    }
	  } finally {
	    reentry = false, Error.prepareStackTrace = previousPrepareStackTrace;
	  }
	  return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(previousPrepareStackTrace) : "";
	}
	function describeFiber(fiber) {
	  switch (fiber.tag) {
	    case 26:
	    case 27:
	    case 5:
	      return describeBuiltInComponentFrame(fiber.type);
	    case 16:
	      return describeBuiltInComponentFrame("Lazy");
	    case 13:
	      return describeBuiltInComponentFrame("Suspense");
	    case 19:
	      return describeBuiltInComponentFrame("SuspenseList");
	    case 0:
	    case 15:
	      return fiber = describeNativeComponentFrame(fiber.type, false), fiber;
	    case 11:
	      return fiber = describeNativeComponentFrame(fiber.type.render, false), fiber;
	    case 1:
	      return fiber = describeNativeComponentFrame(fiber.type, true), fiber;
	    default:
	      return "";
	  }
	}
	function getStackByFiberInDevAndProd(workInProgress2) {
	  try {
	    var info = "";
	    do
	      info += describeFiber(workInProgress2), workInProgress2 = workInProgress2.return;
	    while (workInProgress2);
	    return info;
	  } catch (x) {
	    return "\nError generating stack: " + x.message + "\n" + x.stack;
	  }
	}
	function getNearestMountedFiber(fiber) {
	  var node = fiber, nearestMounted = fiber;
	  if (fiber.alternate) for (; node.return; ) node = node.return;
	  else {
	    fiber = node;
	    do
	      node = fiber, 0 !== (node.flags & 4098) && (nearestMounted = node.return), fiber = node.return;
	    while (fiber);
	  }
	  return 3 === node.tag ? nearestMounted : null;
	}
	function getSuspenseInstanceFromFiber(fiber) {
	  if (13 === fiber.tag) {
	    var suspenseState = fiber.memoizedState;
	    null === suspenseState && (fiber = fiber.alternate, null !== fiber && (suspenseState = fiber.memoizedState));
	    if (null !== suspenseState) return suspenseState.dehydrated;
	  }
	  return null;
	}
	function assertIsMounted(fiber) {
	  if (getNearestMountedFiber(fiber) !== fiber)
	    throw Error(formatProdErrorMessage(188));
	}
	function findCurrentFiberUsingSlowPath(fiber) {
	  var alternate = fiber.alternate;
	  if (!alternate) {
	    alternate = getNearestMountedFiber(fiber);
	    if (null === alternate) throw Error(formatProdErrorMessage(188));
	    return alternate !== fiber ? null : fiber;
	  }
	  for (var a = fiber, b = alternate; ; ) {
	    var parentA = a.return;
	    if (null === parentA) break;
	    var parentB = parentA.alternate;
	    if (null === parentB) {
	      b = parentA.return;
	      if (null !== b) {
	        a = b;
	        continue;
	      }
	      break;
	    }
	    if (parentA.child === parentB.child) {
	      for (parentB = parentA.child; parentB; ) {
	        if (parentB === a) return assertIsMounted(parentA), fiber;
	        if (parentB === b) return assertIsMounted(parentA), alternate;
	        parentB = parentB.sibling;
	      }
	      throw Error(formatProdErrorMessage(188));
	    }
	    if (a.return !== b.return) a = parentA, b = parentB;
	    else {
	      for (var didFindChild = false, child$2 = parentA.child; child$2; ) {
	        if (child$2 === a) {
	          didFindChild = true;
	          a = parentA;
	          b = parentB;
	          break;
	        }
	        if (child$2 === b) {
	          didFindChild = true;
	          b = parentA;
	          a = parentB;
	          break;
	        }
	        child$2 = child$2.sibling;
	      }
	      if (!didFindChild) {
	        for (child$2 = parentB.child; child$2; ) {
	          if (child$2 === a) {
	            didFindChild = true;
	            a = parentB;
	            b = parentA;
	            break;
	          }
	          if (child$2 === b) {
	            didFindChild = true;
	            b = parentB;
	            a = parentA;
	            break;
	          }
	          child$2 = child$2.sibling;
	        }
	        if (!didFindChild) throw Error(formatProdErrorMessage(189));
	      }
	    }
	    if (a.alternate !== b) throw Error(formatProdErrorMessage(190));
	  }
	  if (3 !== a.tag) throw Error(formatProdErrorMessage(188));
	  return a.stateNode.current === a ? fiber : alternate;
	}
	function findCurrentHostFiberImpl(node) {
	  var tag = node.tag;
	  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
	  for (node = node.child; null !== node; ) {
	    tag = findCurrentHostFiberImpl(node);
	    if (null !== tag) return tag;
	    node = node.sibling;
	  }
	  return null;
	}
	var isArrayImpl = Array.isArray, ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, sharedNotPendingObject = {
	  pending: false,
	  data: null,
	  method: null,
	  action: null
	}, valueStack = [], index = -1;
	function createCursor(defaultValue) {
	  return { current: defaultValue };
	}
	function pop(cursor) {
	  0 > index || (cursor.current = valueStack[index], valueStack[index] = null, index--);
	}
	function push(cursor, value) {
	  index++;
	  valueStack[index] = cursor.current;
	  cursor.current = value;
	}
	var contextStackCursor = createCursor(null), contextFiberStackCursor = createCursor(null), rootInstanceStackCursor = createCursor(null), hostTransitionProviderCursor = createCursor(null);
	function pushHostContainer(fiber, nextRootInstance) {
	  push(rootInstanceStackCursor, nextRootInstance);
	  push(contextFiberStackCursor, fiber);
	  push(contextStackCursor, null);
	  fiber = nextRootInstance.nodeType;
	  switch (fiber) {
	    case 9:
	    case 11:
	      nextRootInstance = (nextRootInstance = nextRootInstance.documentElement) ? (nextRootInstance = nextRootInstance.namespaceURI) ? getOwnHostContext(nextRootInstance) : 0 : 0;
	      break;
	    default:
	      if (fiber = 8 === fiber ? nextRootInstance.parentNode : nextRootInstance, nextRootInstance = fiber.tagName, fiber = fiber.namespaceURI)
	        fiber = getOwnHostContext(fiber), nextRootInstance = getChildHostContextProd(fiber, nextRootInstance);
	      else
	        switch (nextRootInstance) {
	          case "svg":
	            nextRootInstance = 1;
	            break;
	          case "math":
	            nextRootInstance = 2;
	            break;
	          default:
	            nextRootInstance = 0;
	        }
	  }
	  pop(contextStackCursor);
	  push(contextStackCursor, nextRootInstance);
	}
	function popHostContainer() {
	  pop(contextStackCursor);
	  pop(contextFiberStackCursor);
	  pop(rootInstanceStackCursor);
	}
	function pushHostContext(fiber) {
	  null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber);
	  var context = contextStackCursor.current;
	  var JSCompiler_inline_result = getChildHostContextProd(context, fiber.type);
	  context !== JSCompiler_inline_result && (push(contextFiberStackCursor, fiber), push(contextStackCursor, JSCompiler_inline_result));
	}
	function popHostContext(fiber) {
	  contextFiberStackCursor.current === fiber && (pop(contextStackCursor), pop(contextFiberStackCursor));
	  hostTransitionProviderCursor.current === fiber && (pop(hostTransitionProviderCursor), HostTransitionContext._currentValue = sharedNotPendingObject);
	}
	var hasOwnProperty = Object.prototype.hasOwnProperty, scheduleCallback$3 = Scheduler.unstable_scheduleCallback, cancelCallback$1 = Scheduler.unstable_cancelCallback, shouldYield = Scheduler.unstable_shouldYield, requestPaint = Scheduler.unstable_requestPaint, now = Scheduler.unstable_now, getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel, ImmediatePriority = Scheduler.unstable_ImmediatePriority, UserBlockingPriority = Scheduler.unstable_UserBlockingPriority, NormalPriority$1 = Scheduler.unstable_NormalPriority, LowPriority = Scheduler.unstable_LowPriority, IdlePriority = Scheduler.unstable_IdlePriority, log$1 = Scheduler.log, unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue, rendererID = null, injectedHook = null;
	function onCommitRoot(root2) {
	  if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot)
	    try {
	      injectedHook.onCommitFiberRoot(
	        rendererID,
	        root2,
	        void 0,
	        128 === (root2.current.flags & 128)
	      );
	    } catch (err) {
	    }
	}
	function setIsStrictModeForDevtools(newIsStrictMode) {
	  "function" === typeof log$1 && unstable_setDisableYieldValue(newIsStrictMode);
	  if (injectedHook && "function" === typeof injectedHook.setStrictMode)
	    try {
	      injectedHook.setStrictMode(rendererID, newIsStrictMode);
	    } catch (err) {
	    }
	}
	var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback, log = Math.log, LN2 = Math.LN2;
	function clz32Fallback(x) {
	  x >>>= 0;
	  return 0 === x ? 32 : 31 - (log(x) / LN2 | 0) | 0;
	}
	var nextTransitionLane = 128, nextRetryLane = 4194304;
	function getHighestPriorityLanes(lanes) {
	  var pendingSyncLanes = lanes & 42;
	  if (0 !== pendingSyncLanes) return pendingSyncLanes;
	  switch (lanes & -lanes) {
	    case 1:
	      return 1;
	    case 2:
	      return 2;
	    case 4:
	      return 4;
	    case 8:
	      return 8;
	    case 16:
	      return 16;
	    case 32:
	      return 32;
	    case 64:
	      return 64;
	    case 128:
	    case 256:
	    case 512:
	    case 1024:
	    case 2048:
	    case 4096:
	    case 8192:
	    case 16384:
	    case 32768:
	    case 65536:
	    case 131072:
	    case 262144:
	    case 524288:
	    case 1048576:
	    case 2097152:
	      return lanes & 4194176;
	    case 4194304:
	    case 8388608:
	    case 16777216:
	    case 33554432:
	      return lanes & 62914560;
	    case 67108864:
	      return 67108864;
	    case 134217728:
	      return 134217728;
	    case 268435456:
	      return 268435456;
	    case 536870912:
	      return 536870912;
	    case 1073741824:
	      return 0;
	    default:
	      return lanes;
	  }
	}
	function getNextLanes(root2, wipLanes) {
	  var pendingLanes = root2.pendingLanes;
	  if (0 === pendingLanes) return 0;
	  var nextLanes = 0, suspendedLanes = root2.suspendedLanes, pingedLanes = root2.pingedLanes, warmLanes = root2.warmLanes;
	  root2 = 0 !== root2.finishedLanes;
	  var nonIdlePendingLanes = pendingLanes & 134217727;
	  0 !== nonIdlePendingLanes ? (pendingLanes = nonIdlePendingLanes & ~suspendedLanes, 0 !== pendingLanes ? nextLanes = getHighestPriorityLanes(pendingLanes) : (pingedLanes &= nonIdlePendingLanes, 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : root2 || (warmLanes = nonIdlePendingLanes & ~warmLanes, 0 !== warmLanes && (nextLanes = getHighestPriorityLanes(warmLanes))))) : (nonIdlePendingLanes = pendingLanes & ~suspendedLanes, 0 !== nonIdlePendingLanes ? nextLanes = getHighestPriorityLanes(nonIdlePendingLanes) : 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : root2 || (warmLanes = pendingLanes & ~warmLanes, 0 !== warmLanes && (nextLanes = getHighestPriorityLanes(warmLanes))));
	  return 0 === nextLanes ? 0 : 0 !== wipLanes && wipLanes !== nextLanes && 0 === (wipLanes & suspendedLanes) && (suspendedLanes = nextLanes & -nextLanes, warmLanes = wipLanes & -wipLanes, suspendedLanes >= warmLanes || 32 === suspendedLanes && 0 !== (warmLanes & 4194176)) ? wipLanes : nextLanes;
	}
	function checkIfRootIsPrerendering(root2, renderLanes2) {
	  return 0 === (root2.pendingLanes & ~(root2.suspendedLanes & ~root2.pingedLanes) & renderLanes2);
	}
	function computeExpirationTime(lane, currentTime) {
	  switch (lane) {
	    case 1:
	    case 2:
	    case 4:
	    case 8:
	      return currentTime + 250;
	    case 16:
	    case 32:
	    case 64:
	    case 128:
	    case 256:
	    case 512:
	    case 1024:
	    case 2048:
	    case 4096:
	    case 8192:
	    case 16384:
	    case 32768:
	    case 65536:
	    case 131072:
	    case 262144:
	    case 524288:
	    case 1048576:
	    case 2097152:
	      return currentTime + 5e3;
	    case 4194304:
	    case 8388608:
	    case 16777216:
	    case 33554432:
	      return -1;
	    case 67108864:
	    case 134217728:
	    case 268435456:
	    case 536870912:
	    case 1073741824:
	      return -1;
	    default:
	      return -1;
	  }
	}
	function claimNextTransitionLane() {
	  var lane = nextTransitionLane;
	  nextTransitionLane <<= 1;
	  0 === (nextTransitionLane & 4194176) && (nextTransitionLane = 128);
	  return lane;
	}
	function claimNextRetryLane() {
	  var lane = nextRetryLane;
	  nextRetryLane <<= 1;
	  0 === (nextRetryLane & 62914560) && (nextRetryLane = 4194304);
	  return lane;
	}
	function createLaneMap(initial) {
	  for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
	  return laneMap;
	}
	function markRootUpdated$1(root2, updateLane) {
	  root2.pendingLanes |= updateLane;
	  268435456 !== updateLane && (root2.suspendedLanes = 0, root2.pingedLanes = 0, root2.warmLanes = 0);
	}
	function markRootFinished(root2, finishedLanes, remainingLanes, spawnedLane, updatedLanes, suspendedRetryLanes) {
	  var previouslyPendingLanes = root2.pendingLanes;
	  root2.pendingLanes = remainingLanes;
	  root2.suspendedLanes = 0;
	  root2.pingedLanes = 0;
	  root2.warmLanes = 0;
	  root2.expiredLanes &= remainingLanes;
	  root2.entangledLanes &= remainingLanes;
	  root2.errorRecoveryDisabledLanes &= remainingLanes;
	  root2.shellSuspendCounter = 0;
	  var entanglements = root2.entanglements, expirationTimes = root2.expirationTimes, hiddenUpdates = root2.hiddenUpdates;
	  for (remainingLanes = previouslyPendingLanes & ~remainingLanes; 0 < remainingLanes; ) {
	    var index$7 = 31 - clz32(remainingLanes), lane = 1 << index$7;
	    entanglements[index$7] = 0;
	    expirationTimes[index$7] = -1;
	    var hiddenUpdatesForLane = hiddenUpdates[index$7];
	    if (null !== hiddenUpdatesForLane)
	      for (hiddenUpdates[index$7] = null, index$7 = 0; index$7 < hiddenUpdatesForLane.length; index$7++) {
	        var update = hiddenUpdatesForLane[index$7];
	        null !== update && (update.lane &= -536870913);
	      }
	    remainingLanes &= ~lane;
	  }
	  0 !== spawnedLane && markSpawnedDeferredLane(root2, spawnedLane, 0);
	  0 !== suspendedRetryLanes && 0 === updatedLanes && 0 !== root2.tag && (root2.suspendedLanes |= suspendedRetryLanes & ~(previouslyPendingLanes & ~finishedLanes));
	}
	function markSpawnedDeferredLane(root2, spawnedLane, entangledLanes) {
	  root2.pendingLanes |= spawnedLane;
	  root2.suspendedLanes &= ~spawnedLane;
	  var spawnedLaneIndex = 31 - clz32(spawnedLane);
	  root2.entangledLanes |= spawnedLane;
	  root2.entanglements[spawnedLaneIndex] = root2.entanglements[spawnedLaneIndex] | 1073741824 | entangledLanes & 4194218;
	}
	function markRootEntangled(root2, entangledLanes) {
	  var rootEntangledLanes = root2.entangledLanes |= entangledLanes;
	  for (root2 = root2.entanglements; rootEntangledLanes; ) {
	    var index$8 = 31 - clz32(rootEntangledLanes), lane = 1 << index$8;
	    lane & entangledLanes | root2[index$8] & entangledLanes && (root2[index$8] |= entangledLanes);
	    rootEntangledLanes &= ~lane;
	  }
	}
	function lanesToEventPriority(lanes) {
	  lanes &= -lanes;
	  return 2 < lanes ? 8 < lanes ? 0 !== (lanes & 134217727) ? 32 : 268435456 : 8 : 2;
	}
	function resolveUpdatePriority() {
	  var updatePriority = ReactDOMSharedInternals.p;
	  if (0 !== updatePriority) return updatePriority;
	  updatePriority = window.event;
	  return void 0 === updatePriority ? 32 : getEventPriority(updatePriority.type);
	}
	function runWithPriority(priority, fn) {
	  var previousPriority = ReactDOMSharedInternals.p;
	  try {
	    return ReactDOMSharedInternals.p = priority, fn();
	  } finally {
	    ReactDOMSharedInternals.p = previousPriority;
	  }
	}
	var randomKey = Math.random().toString(36).slice(2), internalInstanceKey = "__reactFiber$" + randomKey, internalPropsKey = "__reactProps$" + randomKey, internalContainerInstanceKey = "__reactContainer$" + randomKey, internalEventHandlersKey = "__reactEvents$" + randomKey, internalEventHandlerListenersKey = "__reactListeners$" + randomKey, internalEventHandlesSetKey = "__reactHandles$" + randomKey, internalRootNodeResourcesKey = "__reactResources$" + randomKey, internalHoistableMarker = "__reactMarker$" + randomKey;
	function detachDeletedInstance(node) {
	  delete node[internalInstanceKey];
	  delete node[internalPropsKey];
	  delete node[internalEventHandlersKey];
	  delete node[internalEventHandlerListenersKey];
	  delete node[internalEventHandlesSetKey];
	}
	function getClosestInstanceFromNode(targetNode) {
	  var targetInst = targetNode[internalInstanceKey];
	  if (targetInst) return targetInst;
	  for (var parentNode = targetNode.parentNode; parentNode; ) {
	    if (targetInst = parentNode[internalContainerInstanceKey] || parentNode[internalInstanceKey]) {
	      parentNode = targetInst.alternate;
	      if (null !== targetInst.child || null !== parentNode && null !== parentNode.child)
	        for (targetNode = getParentSuspenseInstance(targetNode); null !== targetNode; ) {
	          if (parentNode = targetNode[internalInstanceKey]) return parentNode;
	          targetNode = getParentSuspenseInstance(targetNode);
	        }
	      return targetInst;
	    }
	    targetNode = parentNode;
	    parentNode = targetNode.parentNode;
	  }
	  return null;
	}
	function getInstanceFromNode(node) {
	  if (node = node[internalInstanceKey] || node[internalContainerInstanceKey]) {
	    var tag = node.tag;
	    if (5 === tag || 6 === tag || 13 === tag || 26 === tag || 27 === tag || 3 === tag)
	      return node;
	  }
	  return null;
	}
	function getNodeFromInstance(inst) {
	  var tag = inst.tag;
	  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return inst.stateNode;
	  throw Error(formatProdErrorMessage(33));
	}
	function getResourcesFromRoot(root2) {
	  var resources = root2[internalRootNodeResourcesKey];
	  resources || (resources = root2[internalRootNodeResourcesKey] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() });
	  return resources;
	}
	function markNodeAsHoistable(node) {
	  node[internalHoistableMarker] = true;
	}
	var allNativeEvents = /* @__PURE__ */ new Set(), registrationNameDependencies = {};
	function registerTwoPhaseEvent(registrationName, dependencies) {
	  registerDirectEvent(registrationName, dependencies);
	  registerDirectEvent(registrationName + "Capture", dependencies);
	}
	function registerDirectEvent(registrationName, dependencies) {
	  registrationNameDependencies[registrationName] = dependencies;
	  for (registrationName = 0; registrationName < dependencies.length; registrationName++)
	    allNativeEvents.add(dependencies[registrationName]);
	}
	var canUseDOM = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), VALID_ATTRIBUTE_NAME_REGEX = RegExp(
	  "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
	), illegalAttributeNameCache = {}, validatedAttributeNameCache = {};
	function isAttributeNameSafe(attributeName) {
	  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
	    return true;
	  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return false;
	  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
	    return validatedAttributeNameCache[attributeName] = true;
	  illegalAttributeNameCache[attributeName] = true;
	  return false;
	}
	function setValueForAttribute(node, name, value) {
	  if (isAttributeNameSafe(name))
	    if (null === value) node.removeAttribute(name);
	    else {
	      switch (typeof value) {
	        case "undefined":
	        case "function":
	        case "symbol":
	          node.removeAttribute(name);
	          return;
	        case "boolean":
	          var prefix$10 = name.toLowerCase().slice(0, 5);
	          if ("data-" !== prefix$10 && "aria-" !== prefix$10) {
	            node.removeAttribute(name);
	            return;
	          }
	      }
	      node.setAttribute(name, "" + value);
	    }
	}
	function setValueForKnownAttribute(node, name, value) {
	  if (null === value) node.removeAttribute(name);
	  else {
	    switch (typeof value) {
	      case "undefined":
	      case "function":
	      case "symbol":
	      case "boolean":
	        node.removeAttribute(name);
	        return;
	    }
	    node.setAttribute(name, "" + value);
	  }
	}
	function setValueForNamespacedAttribute(node, namespace, name, value) {
	  if (null === value) node.removeAttribute(name);
	  else {
	    switch (typeof value) {
	      case "undefined":
	      case "function":
	      case "symbol":
	      case "boolean":
	        node.removeAttribute(name);
	        return;
	    }
	    node.setAttributeNS(namespace, name, "" + value);
	  }
	}
	function getToStringValue(value) {
	  switch (typeof value) {
	    case "bigint":
	    case "boolean":
	    case "number":
	    case "string":
	    case "undefined":
	      return value;
	    case "object":
	      return value;
	    default:
	      return "";
	  }
	}
	function isCheckable(elem) {
	  var type = elem.type;
	  return (elem = elem.nodeName) && "input" === elem.toLowerCase() && ("checkbox" === type || "radio" === type);
	}
	function trackValueOnNode(node) {
	  var valueField = isCheckable(node) ? "checked" : "value", descriptor = Object.getOwnPropertyDescriptor(
	    node.constructor.prototype,
	    valueField
	  ), currentValue = "" + node[valueField];
	  if (!node.hasOwnProperty(valueField) && "undefined" !== typeof descriptor && "function" === typeof descriptor.get && "function" === typeof descriptor.set) {
	    var get = descriptor.get, set = descriptor.set;
	    Object.defineProperty(node, valueField, {
	      configurable: true,
	      get: function() {
	        return get.call(this);
	      },
	      set: function(value) {
	        currentValue = "" + value;
	        set.call(this, value);
	      }
	    });
	    Object.defineProperty(node, valueField, {
	      enumerable: descriptor.enumerable
	    });
	    return {
	      getValue: function() {
	        return currentValue;
	      },
	      setValue: function(value) {
	        currentValue = "" + value;
	      },
	      stopTracking: function() {
	        node._valueTracker = null;
	        delete node[valueField];
	      }
	    };
	  }
	}
	function track(node) {
	  node._valueTracker || (node._valueTracker = trackValueOnNode(node));
	}
	function updateValueIfChanged(node) {
	  if (!node) return false;
	  var tracker = node._valueTracker;
	  if (!tracker) return true;
	  var lastValue = tracker.getValue();
	  var value = "";
	  node && (value = isCheckable(node) ? node.checked ? "true" : "false" : node.value);
	  node = value;
	  return node !== lastValue ? (tracker.setValue(node), true) : false;
	}
	function getActiveElement(doc) {
	  doc = doc || ("undefined" !== typeof document ? document : void 0);
	  if ("undefined" === typeof doc) return null;
	  try {
	    return doc.activeElement || doc.body;
	  } catch (e) {
	    return doc.body;
	  }
	}
	var escapeSelectorAttributeValueInsideDoubleQuotesRegex = /[\n"\\]/g;
	function escapeSelectorAttributeValueInsideDoubleQuotes(value) {
	  return value.replace(
	    escapeSelectorAttributeValueInsideDoubleQuotesRegex,
	    function(ch) {
	      return "\\" + ch.charCodeAt(0).toString(16) + " ";
	    }
	  );
	}
	function updateInput(element, value, defaultValue, lastDefaultValue, checked, defaultChecked, type, name) {
	  element.name = "";
	  null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type ? element.type = type : element.removeAttribute("type");
	  if (null != value)
	    if ("number" === type) {
	      if (0 === value && "" === element.value || element.value != value)
	        element.value = "" + getToStringValue(value);
	    } else
	      element.value !== "" + getToStringValue(value) && (element.value = "" + getToStringValue(value));
	  else
	    "submit" !== type && "reset" !== type || element.removeAttribute("value");
	  null != value ? setDefaultValue(element, type, getToStringValue(value)) : null != defaultValue ? setDefaultValue(element, type, getToStringValue(defaultValue)) : null != lastDefaultValue && element.removeAttribute("value");
	  null == checked && null != defaultChecked && (element.defaultChecked = !!defaultChecked);
	  null != checked && (element.checked = checked && "function" !== typeof checked && "symbol" !== typeof checked);
	  null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name ? element.name = "" + getToStringValue(name) : element.removeAttribute("name");
	}
	function initInput(element, value, defaultValue, checked, defaultChecked, type, name, isHydrating2) {
	  null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type && (element.type = type);
	  if (null != value || null != defaultValue) {
	    if (!("submit" !== type && "reset" !== type || void 0 !== value && null !== value))
	      return;
	    defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
	    value = null != value ? "" + getToStringValue(value) : defaultValue;
	    isHydrating2 || value === element.value || (element.value = value);
	    element.defaultValue = value;
	  }
	  checked = null != checked ? checked : defaultChecked;
	  checked = "function" !== typeof checked && "symbol" !== typeof checked && !!checked;
	  element.checked = isHydrating2 ? element.checked : !!checked;
	  element.defaultChecked = !!checked;
	  null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name && (element.name = name);
	}
	function setDefaultValue(node, type, value) {
	  "number" === type && getActiveElement(node.ownerDocument) === node || node.defaultValue === "" + value || (node.defaultValue = "" + value);
	}
	function updateOptions(node, multiple, propValue, setDefaultSelected) {
	  node = node.options;
	  if (multiple) {
	    multiple = {};
	    for (var i = 0; i < propValue.length; i++)
	      multiple["$" + propValue[i]] = true;
	    for (propValue = 0; propValue < node.length; propValue++)
	      i = multiple.hasOwnProperty("$" + node[propValue].value), node[propValue].selected !== i && (node[propValue].selected = i), i && setDefaultSelected && (node[propValue].defaultSelected = true);
	  } else {
	    propValue = "" + getToStringValue(propValue);
	    multiple = null;
	    for (i = 0; i < node.length; i++) {
	      if (node[i].value === propValue) {
	        node[i].selected = true;
	        setDefaultSelected && (node[i].defaultSelected = true);
	        return;
	      }
	      null !== multiple || node[i].disabled || (multiple = node[i]);
	    }
	    null !== multiple && (multiple.selected = true);
	  }
	}
	function updateTextarea(element, value, defaultValue) {
	  if (null != value && (value = "" + getToStringValue(value), value !== element.value && (element.value = value), null == defaultValue)) {
	    element.defaultValue !== value && (element.defaultValue = value);
	    return;
	  }
	  element.defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
	}
	function initTextarea(element, value, defaultValue, children) {
	  if (null == value) {
	    if (null != children) {
	      if (null != defaultValue) throw Error(formatProdErrorMessage(92));
	      if (isArrayImpl(children)) {
	        if (1 < children.length) throw Error(formatProdErrorMessage(93));
	        children = children[0];
	      }
	      defaultValue = children;
	    }
	    null == defaultValue && (defaultValue = "");
	    value = defaultValue;
	  }
	  defaultValue = getToStringValue(value);
	  element.defaultValue = defaultValue;
	  children = element.textContent;
	  children === defaultValue && "" !== children && null !== children && (element.value = children);
	}
	function setTextContent(node, text) {
	  if (text) {
	    var firstChild = node.firstChild;
	    if (firstChild && firstChild === node.lastChild && 3 === firstChild.nodeType) {
	      firstChild.nodeValue = text;
	      return;
	    }
	  }
	  node.textContent = text;
	}
	var unitlessNumbers = new Set(
	  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
	    " "
	  )
	);
	function setValueForStyle(style2, styleName, value) {
	  var isCustomProperty = 0 === styleName.indexOf("--");
	  null == value || "boolean" === typeof value || "" === value ? isCustomProperty ? style2.setProperty(styleName, "") : "float" === styleName ? style2.cssFloat = "" : style2[styleName] = "" : isCustomProperty ? style2.setProperty(styleName, value) : "number" !== typeof value || 0 === value || unitlessNumbers.has(styleName) ? "float" === styleName ? style2.cssFloat = value : style2[styleName] = ("" + value).trim() : style2[styleName] = value + "px";
	}
	function setValueForStyles(node, styles, prevStyles) {
	  if (null != styles && "object" !== typeof styles)
	    throw Error(formatProdErrorMessage(62));
	  node = node.style;
	  if (null != prevStyles) {
	    for (var styleName in prevStyles)
	      !prevStyles.hasOwnProperty(styleName) || null != styles && styles.hasOwnProperty(styleName) || (0 === styleName.indexOf("--") ? node.setProperty(styleName, "") : "float" === styleName ? node.cssFloat = "" : node[styleName] = "");
	    for (var styleName$16 in styles)
	      styleName = styles[styleName$16], styles.hasOwnProperty(styleName$16) && prevStyles[styleName$16] !== styleName && setValueForStyle(node, styleName$16, styleName);
	  } else
	    for (var styleName$17 in styles)
	      styles.hasOwnProperty(styleName$17) && setValueForStyle(node, styleName$17, styles[styleName$17]);
	}
	function isCustomElement(tagName) {
	  if (-1 === tagName.indexOf("-")) return false;
	  switch (tagName) {
	    case "annotation-xml":
	    case "color-profile":
	    case "font-face":
	    case "font-face-src":
	    case "font-face-uri":
	    case "font-face-format":
	    case "font-face-name":
	    case "missing-glyph":
	      return false;
	    default:
	      return true;
	  }
	}
	var aliases = /* @__PURE__ */ new Map([
	  ["acceptCharset", "accept-charset"],
	  ["htmlFor", "for"],
	  ["httpEquiv", "http-equiv"],
	  ["crossOrigin", "crossorigin"],
	  ["accentHeight", "accent-height"],
	  ["alignmentBaseline", "alignment-baseline"],
	  ["arabicForm", "arabic-form"],
	  ["baselineShift", "baseline-shift"],
	  ["capHeight", "cap-height"],
	  ["clipPath", "clip-path"],
	  ["clipRule", "clip-rule"],
	  ["colorInterpolation", "color-interpolation"],
	  ["colorInterpolationFilters", "color-interpolation-filters"],
	  ["colorProfile", "color-profile"],
	  ["colorRendering", "color-rendering"],
	  ["dominantBaseline", "dominant-baseline"],
	  ["enableBackground", "enable-background"],
	  ["fillOpacity", "fill-opacity"],
	  ["fillRule", "fill-rule"],
	  ["floodColor", "flood-color"],
	  ["floodOpacity", "flood-opacity"],
	  ["fontFamily", "font-family"],
	  ["fontSize", "font-size"],
	  ["fontSizeAdjust", "font-size-adjust"],
	  ["fontStretch", "font-stretch"],
	  ["fontStyle", "font-style"],
	  ["fontVariant", "font-variant"],
	  ["fontWeight", "font-weight"],
	  ["glyphName", "glyph-name"],
	  ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
	  ["glyphOrientationVertical", "glyph-orientation-vertical"],
	  ["horizAdvX", "horiz-adv-x"],
	  ["horizOriginX", "horiz-origin-x"],
	  ["imageRendering", "image-rendering"],
	  ["letterSpacing", "letter-spacing"],
	  ["lightingColor", "lighting-color"],
	  ["markerEnd", "marker-end"],
	  ["markerMid", "marker-mid"],
	  ["markerStart", "marker-start"],
	  ["overlinePosition", "overline-position"],
	  ["overlineThickness", "overline-thickness"],
	  ["paintOrder", "paint-order"],
	  ["panose-1", "panose-1"],
	  ["pointerEvents", "pointer-events"],
	  ["renderingIntent", "rendering-intent"],
	  ["shapeRendering", "shape-rendering"],
	  ["stopColor", "stop-color"],
	  ["stopOpacity", "stop-opacity"],
	  ["strikethroughPosition", "strikethrough-position"],
	  ["strikethroughThickness", "strikethrough-thickness"],
	  ["strokeDasharray", "stroke-dasharray"],
	  ["strokeDashoffset", "stroke-dashoffset"],
	  ["strokeLinecap", "stroke-linecap"],
	  ["strokeLinejoin", "stroke-linejoin"],
	  ["strokeMiterlimit", "stroke-miterlimit"],
	  ["strokeOpacity", "stroke-opacity"],
	  ["strokeWidth", "stroke-width"],
	  ["textAnchor", "text-anchor"],
	  ["textDecoration", "text-decoration"],
	  ["textRendering", "text-rendering"],
	  ["transformOrigin", "transform-origin"],
	  ["underlinePosition", "underline-position"],
	  ["underlineThickness", "underline-thickness"],
	  ["unicodeBidi", "unicode-bidi"],
	  ["unicodeRange", "unicode-range"],
	  ["unitsPerEm", "units-per-em"],
	  ["vAlphabetic", "v-alphabetic"],
	  ["vHanging", "v-hanging"],
	  ["vIdeographic", "v-ideographic"],
	  ["vMathematical", "v-mathematical"],
	  ["vectorEffect", "vector-effect"],
	  ["vertAdvY", "vert-adv-y"],
	  ["vertOriginX", "vert-origin-x"],
	  ["vertOriginY", "vert-origin-y"],
	  ["wordSpacing", "word-spacing"],
	  ["writingMode", "writing-mode"],
	  ["xmlnsXlink", "xmlns:xlink"],
	  ["xHeight", "x-height"]
	]), isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function sanitizeURL(url) {
	  return isJavaScriptProtocol.test("" + url) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : url;
	}
	var currentReplayingEvent = null;
	function getEventTarget(nativeEvent) {
	  nativeEvent = nativeEvent.target || nativeEvent.srcElement || window;
	  nativeEvent.correspondingUseElement && (nativeEvent = nativeEvent.correspondingUseElement);
	  return 3 === nativeEvent.nodeType ? nativeEvent.parentNode : nativeEvent;
	}
	var restoreTarget = null, restoreQueue = null;
	function restoreStateOfTarget(target) {
	  var internalInstance = getInstanceFromNode(target);
	  if (internalInstance && (target = internalInstance.stateNode)) {
	    var props = target[internalPropsKey] || null;
	    a: switch (target = internalInstance.stateNode, internalInstance.type) {
	      case "input":
	        updateInput(
	          target,
	          props.value,
	          props.defaultValue,
	          props.defaultValue,
	          props.checked,
	          props.defaultChecked,
	          props.type,
	          props.name
	        );
	        internalInstance = props.name;
	        if ("radio" === props.type && null != internalInstance) {
	          for (props = target; props.parentNode; ) props = props.parentNode;
	          props = props.querySelectorAll(
	            'input[name="' + escapeSelectorAttributeValueInsideDoubleQuotes(
	              "" + internalInstance
	            ) + '"][type="radio"]'
	          );
	          for (internalInstance = 0; internalInstance < props.length; internalInstance++) {
	            var otherNode = props[internalInstance];
	            if (otherNode !== target && otherNode.form === target.form) {
	              var otherProps = otherNode[internalPropsKey] || null;
	              if (!otherProps) throw Error(formatProdErrorMessage(90));
	              updateInput(
	                otherNode,
	                otherProps.value,
	                otherProps.defaultValue,
	                otherProps.defaultValue,
	                otherProps.checked,
	                otherProps.defaultChecked,
	                otherProps.type,
	                otherProps.name
	              );
	            }
	          }
	          for (internalInstance = 0; internalInstance < props.length; internalInstance++)
	            otherNode = props[internalInstance], otherNode.form === target.form && updateValueIfChanged(otherNode);
	        }
	        break a;
	      case "textarea":
	        updateTextarea(target, props.value, props.defaultValue);
	        break a;
	      case "select":
	        internalInstance = props.value, null != internalInstance && updateOptions(target, !!props.multiple, internalInstance, false);
	    }
	  }
	}
	var isInsideEventHandler = false;
	function batchedUpdates$1(fn, a, b) {
	  if (isInsideEventHandler) return fn(a, b);
	  isInsideEventHandler = true;
	  try {
	    var JSCompiler_inline_result = fn(a);
	    return JSCompiler_inline_result;
	  } finally {
	    if (isInsideEventHandler = false, null !== restoreTarget || null !== restoreQueue) {
	      if (flushSyncWork$1(), restoreTarget && (a = restoreTarget, fn = restoreQueue, restoreQueue = restoreTarget = null, restoreStateOfTarget(a), fn))
	        for (a = 0; a < fn.length; a++) restoreStateOfTarget(fn[a]);
	    }
	  }
	}
	function getListener(inst, registrationName) {
	  var stateNode = inst.stateNode;
	  if (null === stateNode) return null;
	  var props = stateNode[internalPropsKey] || null;
	  if (null === props) return null;
	  stateNode = props[registrationName];
	  a: switch (registrationName) {
	    case "onClick":
	    case "onClickCapture":
	    case "onDoubleClick":
	    case "onDoubleClickCapture":
	    case "onMouseDown":
	    case "onMouseDownCapture":
	    case "onMouseMove":
	    case "onMouseMoveCapture":
	    case "onMouseUp":
	    case "onMouseUpCapture":
	    case "onMouseEnter":
	      (props = !props.disabled) || (inst = inst.type, props = !("button" === inst || "input" === inst || "select" === inst || "textarea" === inst));
	      inst = !props;
	      break a;
	    default:
	      inst = false;
	  }
	  if (inst) return null;
	  if (stateNode && "function" !== typeof stateNode)
	    throw Error(
	      formatProdErrorMessage(231, registrationName, typeof stateNode)
	    );
	  return stateNode;
	}
	var passiveBrowserEventsSupported = false;
	if (canUseDOM)
	  try {
	    var options = {};
	    Object.defineProperty(options, "passive", {
	      get: function() {
	        passiveBrowserEventsSupported = true;
	      }
	    });
	    window.addEventListener("test", options, options);
	    window.removeEventListener("test", options, options);
	  } catch (e) {
	    passiveBrowserEventsSupported = false;
	  }
	var root = null, startText = null, fallbackText = null;
	function getData() {
	  if (fallbackText) return fallbackText;
	  var start, startValue = startText, startLength = startValue.length, end, endValue = "value" in root ? root.value : root.textContent, endLength = endValue.length;
	  for (start = 0; start < startLength && startValue[start] === endValue[start]; start++) ;
	  var minEnd = startLength - start;
	  for (end = 1; end <= minEnd && startValue[startLength - end] === endValue[endLength - end]; end++) ;
	  return fallbackText = endValue.slice(start, 1 < end ? 1 - end : void 0);
	}
	function getEventCharCode(nativeEvent) {
	  var keyCode = nativeEvent.keyCode;
	  "charCode" in nativeEvent ? (nativeEvent = nativeEvent.charCode, 0 === nativeEvent && 13 === keyCode && (nativeEvent = 13)) : nativeEvent = keyCode;
	  10 === nativeEvent && (nativeEvent = 13);
	  return 32 <= nativeEvent || 13 === nativeEvent ? nativeEvent : 0;
	}
	function functionThatReturnsTrue() {
	  return true;
	}
	function functionThatReturnsFalse() {
	  return false;
	}
	function createSyntheticEvent(Interface) {
	  function SyntheticBaseEvent(reactName, reactEventType, targetInst, nativeEvent, nativeEventTarget) {
	    this._reactName = reactName;
	    this._targetInst = targetInst;
	    this.type = reactEventType;
	    this.nativeEvent = nativeEvent;
	    this.target = nativeEventTarget;
	    this.currentTarget = null;
	    for (var propName in Interface)
	      Interface.hasOwnProperty(propName) && (reactName = Interface[propName], this[propName] = reactName ? reactName(nativeEvent) : nativeEvent[propName]);
	    this.isDefaultPrevented = (null != nativeEvent.defaultPrevented ? nativeEvent.defaultPrevented : false === nativeEvent.returnValue) ? functionThatReturnsTrue : functionThatReturnsFalse;
	    this.isPropagationStopped = functionThatReturnsFalse;
	    return this;
	  }
	  assign(SyntheticBaseEvent.prototype, {
	    preventDefault: function() {
	      this.defaultPrevented = true;
	      var event = this.nativeEvent;
	      event && (event.preventDefault ? event.preventDefault() : "unknown" !== typeof event.returnValue && (event.returnValue = false), this.isDefaultPrevented = functionThatReturnsTrue);
	    },
	    stopPropagation: function() {
	      var event = this.nativeEvent;
	      event && (event.stopPropagation ? event.stopPropagation() : "unknown" !== typeof event.cancelBubble && (event.cancelBubble = true), this.isPropagationStopped = functionThatReturnsTrue);
	    },
	    persist: function() {
	    },
	    isPersistent: functionThatReturnsTrue
	  });
	  return SyntheticBaseEvent;
	}
	var EventInterface = {
	  eventPhase: 0,
	  bubbles: 0,
	  cancelable: 0,
	  timeStamp: function(event) {
	    return event.timeStamp || Date.now();
	  },
	  defaultPrevented: 0,
	  isTrusted: 0
	}, SyntheticEvent = createSyntheticEvent(EventInterface), UIEventInterface = assign({}, EventInterface, { view: 0, detail: 0 }), SyntheticUIEvent = createSyntheticEvent(UIEventInterface), lastMovementX, lastMovementY, lastMouseEvent, MouseEventInterface = assign({}, UIEventInterface, {
	  screenX: 0,
	  screenY: 0,
	  clientX: 0,
	  clientY: 0,
	  pageX: 0,
	  pageY: 0,
	  ctrlKey: 0,
	  shiftKey: 0,
	  altKey: 0,
	  metaKey: 0,
	  getModifierState: getEventModifierState,
	  button: 0,
	  buttons: 0,
	  relatedTarget: function(event) {
	    return void 0 === event.relatedTarget ? event.fromElement === event.srcElement ? event.toElement : event.fromElement : event.relatedTarget;
	  },
	  movementX: function(event) {
	    if ("movementX" in event) return event.movementX;
	    event !== lastMouseEvent && (lastMouseEvent && "mousemove" === event.type ? (lastMovementX = event.screenX - lastMouseEvent.screenX, lastMovementY = event.screenY - lastMouseEvent.screenY) : lastMovementY = lastMovementX = 0, lastMouseEvent = event);
	    return lastMovementX;
	  },
	  movementY: function(event) {
	    return "movementY" in event ? event.movementY : lastMovementY;
	  }
	}), SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface), DragEventInterface = assign({}, MouseEventInterface, { dataTransfer: 0 }), SyntheticDragEvent = createSyntheticEvent(DragEventInterface), FocusEventInterface = assign({}, UIEventInterface, { relatedTarget: 0 }), SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface), AnimationEventInterface = assign({}, EventInterface, {
	  animationName: 0,
	  elapsedTime: 0,
	  pseudoElement: 0
	}), SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface), ClipboardEventInterface = assign({}, EventInterface, {
	  clipboardData: function(event) {
	    return "clipboardData" in event ? event.clipboardData : window.clipboardData;
	  }
	}), SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface), CompositionEventInterface = assign({}, EventInterface, { data: 0 }), SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface), normalizeKey = {
	  Esc: "Escape",
	  Spacebar: " ",
	  Left: "ArrowLeft",
	  Up: "ArrowUp",
	  Right: "ArrowRight",
	  Down: "ArrowDown",
	  Del: "Delete",
	  Win: "OS",
	  Menu: "ContextMenu",
	  Apps: "ContextMenu",
	  Scroll: "ScrollLock",
	  MozPrintableKey: "Unidentified"
	}, translateToKey = {
	  8: "Backspace",
	  9: "Tab",
	  12: "Clear",
	  13: "Enter",
	  16: "Shift",
	  17: "Control",
	  18: "Alt",
	  19: "Pause",
	  20: "CapsLock",
	  27: "Escape",
	  32: " ",
	  33: "PageUp",
	  34: "PageDown",
	  35: "End",
	  36: "Home",
	  37: "ArrowLeft",
	  38: "ArrowUp",
	  39: "ArrowRight",
	  40: "ArrowDown",
	  45: "Insert",
	  46: "Delete",
	  112: "F1",
	  113: "F2",
	  114: "F3",
	  115: "F4",
	  116: "F5",
	  117: "F6",
	  118: "F7",
	  119: "F8",
	  120: "F9",
	  121: "F10",
	  122: "F11",
	  123: "F12",
	  144: "NumLock",
	  145: "ScrollLock",
	  224: "Meta"
	}, modifierKeyToProp = {
	  Alt: "altKey",
	  Control: "ctrlKey",
	  Meta: "metaKey",
	  Shift: "shiftKey"
	};
	function modifierStateGetter(keyArg) {
	  var nativeEvent = this.nativeEvent;
	  return nativeEvent.getModifierState ? nativeEvent.getModifierState(keyArg) : (keyArg = modifierKeyToProp[keyArg]) ? !!nativeEvent[keyArg] : false;
	}
	function getEventModifierState() {
	  return modifierStateGetter;
	}
	var KeyboardEventInterface = assign({}, UIEventInterface, {
	  key: function(nativeEvent) {
	    if (nativeEvent.key) {
	      var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
	      if ("Unidentified" !== key) return key;
	    }
	    return "keypress" === nativeEvent.type ? (nativeEvent = getEventCharCode(nativeEvent), 13 === nativeEvent ? "Enter" : String.fromCharCode(nativeEvent)) : "keydown" === nativeEvent.type || "keyup" === nativeEvent.type ? translateToKey[nativeEvent.keyCode] || "Unidentified" : "";
	  },
	  code: 0,
	  location: 0,
	  ctrlKey: 0,
	  shiftKey: 0,
	  altKey: 0,
	  metaKey: 0,
	  repeat: 0,
	  locale: 0,
	  getModifierState: getEventModifierState,
	  charCode: function(event) {
	    return "keypress" === event.type ? getEventCharCode(event) : 0;
	  },
	  keyCode: function(event) {
	    return "keydown" === event.type || "keyup" === event.type ? event.keyCode : 0;
	  },
	  which: function(event) {
	    return "keypress" === event.type ? getEventCharCode(event) : "keydown" === event.type || "keyup" === event.type ? event.keyCode : 0;
	  }
	}), SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface), PointerEventInterface = assign({}, MouseEventInterface, {
	  pointerId: 0,
	  width: 0,
	  height: 0,
	  pressure: 0,
	  tangentialPressure: 0,
	  tiltX: 0,
	  tiltY: 0,
	  twist: 0,
	  pointerType: 0,
	  isPrimary: 0
	}), SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface), TouchEventInterface = assign({}, UIEventInterface, {
	  touches: 0,
	  targetTouches: 0,
	  changedTouches: 0,
	  altKey: 0,
	  metaKey: 0,
	  ctrlKey: 0,
	  shiftKey: 0,
	  getModifierState: getEventModifierState
	}), SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface), TransitionEventInterface = assign({}, EventInterface, {
	  propertyName: 0,
	  elapsedTime: 0,
	  pseudoElement: 0
	}), SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface), WheelEventInterface = assign({}, MouseEventInterface, {
	  deltaX: function(event) {
	    return "deltaX" in event ? event.deltaX : "wheelDeltaX" in event ? -event.wheelDeltaX : 0;
	  },
	  deltaY: function(event) {
	    return "deltaY" in event ? event.deltaY : "wheelDeltaY" in event ? -event.wheelDeltaY : "wheelDelta" in event ? -event.wheelDelta : 0;
	  },
	  deltaZ: 0,
	  deltaMode: 0
	}), SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface), ToggleEventInterface = assign({}, EventInterface, {
	  newState: 0,
	  oldState: 0
	}), SyntheticToggleEvent = createSyntheticEvent(ToggleEventInterface), END_KEYCODES = [9, 13, 27, 32], canUseCompositionEvent = canUseDOM && "CompositionEvent" in window, documentMode = null;
	canUseDOM && "documentMode" in document && (documentMode = document.documentMode);
	var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode, useFallbackCompositionData = canUseDOM && (!canUseCompositionEvent || documentMode && 8 < documentMode && 11 >= documentMode), SPACEBAR_CHAR = String.fromCharCode(32), hasSpaceKeypress = false;
	function isFallbackCompositionEnd(domEventName, nativeEvent) {
	  switch (domEventName) {
	    case "keyup":
	      return -1 !== END_KEYCODES.indexOf(nativeEvent.keyCode);
	    case "keydown":
	      return 229 !== nativeEvent.keyCode;
	    case "keypress":
	    case "mousedown":
	    case "focusout":
	      return true;
	    default:
	      return false;
	  }
	}
	function getDataFromCustomEvent(nativeEvent) {
	  nativeEvent = nativeEvent.detail;
	  return "object" === typeof nativeEvent && "data" in nativeEvent ? nativeEvent.data : null;
	}
	var isComposing = false;
	function getNativeBeforeInputChars(domEventName, nativeEvent) {
	  switch (domEventName) {
	    case "compositionend":
	      return getDataFromCustomEvent(nativeEvent);
	    case "keypress":
	      if (32 !== nativeEvent.which) return null;
	      hasSpaceKeypress = true;
	      return SPACEBAR_CHAR;
	    case "textInput":
	      return domEventName = nativeEvent.data, domEventName === SPACEBAR_CHAR && hasSpaceKeypress ? null : domEventName;
	    default:
	      return null;
	  }
	}
	function getFallbackBeforeInputChars(domEventName, nativeEvent) {
	  if (isComposing)
	    return "compositionend" === domEventName || !canUseCompositionEvent && isFallbackCompositionEnd(domEventName, nativeEvent) ? (domEventName = getData(), fallbackText = startText = root = null, isComposing = false, domEventName) : null;
	  switch (domEventName) {
	    case "paste":
	      return null;
	    case "keypress":
	      if (!(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) || nativeEvent.ctrlKey && nativeEvent.altKey) {
	        if (nativeEvent.char && 1 < nativeEvent.char.length)
	          return nativeEvent.char;
	        if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
	      }
	      return null;
	    case "compositionend":
	      return useFallbackCompositionData && "ko" !== nativeEvent.locale ? null : nativeEvent.data;
	    default:
	      return null;
	  }
	}
	var supportedInputTypes = {
	  color: true,
	  date: true,
	  datetime: true,
	  "datetime-local": true,
	  email: true,
	  month: true,
	  number: true,
	  password: true,
	  range: true,
	  search: true,
	  tel: true,
	  text: true,
	  time: true,
	  url: true,
	  week: true
	};
	function isTextInputElement(elem) {
	  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	  return "input" === nodeName ? !!supportedInputTypes[elem.type] : "textarea" === nodeName ? true : false;
	}
	function createAndAccumulateChangeEvent(dispatchQueue, inst, nativeEvent, target) {
	  restoreTarget ? restoreQueue ? restoreQueue.push(target) : restoreQueue = [target] : restoreTarget = target;
	  inst = accumulateTwoPhaseListeners(inst, "onChange");
	  0 < inst.length && (nativeEvent = new SyntheticEvent(
	    "onChange",
	    "change",
	    null,
	    nativeEvent,
	    target
	  ), dispatchQueue.push({ event: nativeEvent, listeners: inst }));
	}
	var activeElement$1 = null, activeElementInst$1 = null;
	function runEventInBatch(dispatchQueue) {
	  processDispatchQueue(dispatchQueue, 0);
	}
	function getInstIfValueChanged(targetInst) {
	  var targetNode = getNodeFromInstance(targetInst);
	  if (updateValueIfChanged(targetNode)) return targetInst;
	}
	function getTargetInstForChangeEvent(domEventName, targetInst) {
	  if ("change" === domEventName) return targetInst;
	}
	var isInputEventSupported = false;
	if (canUseDOM) {
	  var JSCompiler_inline_result$jscomp$283;
	  if (canUseDOM) {
	    var isSupported$jscomp$inline_418 = "oninput" in document;
	    if (!isSupported$jscomp$inline_418) {
	      var element$jscomp$inline_419 = document.createElement("div");
	      element$jscomp$inline_419.setAttribute("oninput", "return;");
	      isSupported$jscomp$inline_418 = "function" === typeof element$jscomp$inline_419.oninput;
	    }
	    JSCompiler_inline_result$jscomp$283 = isSupported$jscomp$inline_418;
	  } else JSCompiler_inline_result$jscomp$283 = false;
	  isInputEventSupported = JSCompiler_inline_result$jscomp$283 && (!document.documentMode || 9 < document.documentMode);
	}
	function stopWatchingForValueChange() {
	  activeElement$1 && (activeElement$1.detachEvent("onpropertychange", handlePropertyChange), activeElementInst$1 = activeElement$1 = null);
	}
	function handlePropertyChange(nativeEvent) {
	  if ("value" === nativeEvent.propertyName && getInstIfValueChanged(activeElementInst$1)) {
	    var dispatchQueue = [];
	    createAndAccumulateChangeEvent(
	      dispatchQueue,
	      activeElementInst$1,
	      nativeEvent,
	      getEventTarget(nativeEvent)
	    );
	    batchedUpdates$1(runEventInBatch, dispatchQueue);
	  }
	}
	function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
	  "focusin" === domEventName ? (stopWatchingForValueChange(), activeElement$1 = target, activeElementInst$1 = targetInst, activeElement$1.attachEvent("onpropertychange", handlePropertyChange)) : "focusout" === domEventName && stopWatchingForValueChange();
	}
	function getTargetInstForInputEventPolyfill(domEventName) {
	  if ("selectionchange" === domEventName || "keyup" === domEventName || "keydown" === domEventName)
	    return getInstIfValueChanged(activeElementInst$1);
	}
	function getTargetInstForClickEvent(domEventName, targetInst) {
	  if ("click" === domEventName) return getInstIfValueChanged(targetInst);
	}
	function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
	  if ("input" === domEventName || "change" === domEventName)
	    return getInstIfValueChanged(targetInst);
	}
	function is(x, y) {
	  return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is;
	function shallowEqual(objA, objB) {
	  if (objectIs(objA, objB)) return true;
	  if ("object" !== typeof objA || null === objA || "object" !== typeof objB || null === objB)
	    return false;
	  var keysA = Object.keys(objA), keysB = Object.keys(objB);
	  if (keysA.length !== keysB.length) return false;
	  for (keysB = 0; keysB < keysA.length; keysB++) {
	    var currentKey = keysA[keysB];
	    if (!hasOwnProperty.call(objB, currentKey) || !objectIs(objA[currentKey], objB[currentKey]))
	      return false;
	  }
	  return true;
	}
	function getLeafNode(node) {
	  for (; node && node.firstChild; ) node = node.firstChild;
	  return node;
	}
	function getNodeForCharacterOffset(root2, offset) {
	  var node = getLeafNode(root2);
	  root2 = 0;
	  for (var nodeEnd; node; ) {
	    if (3 === node.nodeType) {
	      nodeEnd = root2 + node.textContent.length;
	      if (root2 <= offset && nodeEnd >= offset)
	        return { node, offset: offset - root2 };
	      root2 = nodeEnd;
	    }
	    a: {
	      for (; node; ) {
	        if (node.nextSibling) {
	          node = node.nextSibling;
	          break a;
	        }
	        node = node.parentNode;
	      }
	      node = void 0;
	    }
	    node = getLeafNode(node);
	  }
	}
	function containsNode(outerNode, innerNode) {
	  return outerNode && innerNode ? outerNode === innerNode ? true : outerNode && 3 === outerNode.nodeType ? false : innerNode && 3 === innerNode.nodeType ? containsNode(outerNode, innerNode.parentNode) : "contains" in outerNode ? outerNode.contains(innerNode) : outerNode.compareDocumentPosition ? !!(outerNode.compareDocumentPosition(innerNode) & 16) : false : false;
	}
	function getActiveElementDeep(containerInfo) {
	  containerInfo = null != containerInfo && null != containerInfo.ownerDocument && null != containerInfo.ownerDocument.defaultView ? containerInfo.ownerDocument.defaultView : window;
	  for (var element = getActiveElement(containerInfo.document); element instanceof containerInfo.HTMLIFrameElement; ) {
	    try {
	      var JSCompiler_inline_result = "string" === typeof element.contentWindow.location.href;
	    } catch (err) {
	      JSCompiler_inline_result = false;
	    }
	    if (JSCompiler_inline_result) containerInfo = element.contentWindow;
	    else break;
	    element = getActiveElement(containerInfo.document);
	  }
	  return element;
	}
	function hasSelectionCapabilities(elem) {
	  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	  return nodeName && ("input" === nodeName && ("text" === elem.type || "search" === elem.type || "tel" === elem.type || "url" === elem.type || "password" === elem.type) || "textarea" === nodeName || "true" === elem.contentEditable);
	}
	function restoreSelection(priorSelectionInformation, containerInfo) {
	  var curFocusedElem = getActiveElementDeep(containerInfo);
	  containerInfo = priorSelectionInformation.focusedElem;
	  var priorSelectionRange = priorSelectionInformation.selectionRange;
	  if (curFocusedElem !== containerInfo && containerInfo && containerInfo.ownerDocument && containsNode(containerInfo.ownerDocument.documentElement, containerInfo)) {
	    if (null !== priorSelectionRange && hasSelectionCapabilities(containerInfo)) {
	      if (priorSelectionInformation = priorSelectionRange.start, curFocusedElem = priorSelectionRange.end, void 0 === curFocusedElem && (curFocusedElem = priorSelectionInformation), "selectionStart" in containerInfo)
	        containerInfo.selectionStart = priorSelectionInformation, containerInfo.selectionEnd = Math.min(
	          curFocusedElem,
	          containerInfo.value.length
	        );
	      else if (curFocusedElem = (priorSelectionInformation = containerInfo.ownerDocument || document) && priorSelectionInformation.defaultView || window, curFocusedElem.getSelection) {
	        curFocusedElem = curFocusedElem.getSelection();
	        var length = containerInfo.textContent.length, start = Math.min(priorSelectionRange.start, length);
	        priorSelectionRange = void 0 === priorSelectionRange.end ? start : Math.min(priorSelectionRange.end, length);
	        !curFocusedElem.extend && start > priorSelectionRange && (length = priorSelectionRange, priorSelectionRange = start, start = length);
	        length = getNodeForCharacterOffset(containerInfo, start);
	        var endMarker = getNodeForCharacterOffset(
	          containerInfo,
	          priorSelectionRange
	        );
	        length && endMarker && (1 !== curFocusedElem.rangeCount || curFocusedElem.anchorNode !== length.node || curFocusedElem.anchorOffset !== length.offset || curFocusedElem.focusNode !== endMarker.node || curFocusedElem.focusOffset !== endMarker.offset) && (priorSelectionInformation = priorSelectionInformation.createRange(), priorSelectionInformation.setStart(length.node, length.offset), curFocusedElem.removeAllRanges(), start > priorSelectionRange ? (curFocusedElem.addRange(priorSelectionInformation), curFocusedElem.extend(endMarker.node, endMarker.offset)) : (priorSelectionInformation.setEnd(
	          endMarker.node,
	          endMarker.offset
	        ), curFocusedElem.addRange(priorSelectionInformation)));
	      }
	    }
	    priorSelectionInformation = [];
	    for (curFocusedElem = containerInfo; curFocusedElem = curFocusedElem.parentNode; )
	      1 === curFocusedElem.nodeType && priorSelectionInformation.push({
	        element: curFocusedElem,
	        left: curFocusedElem.scrollLeft,
	        top: curFocusedElem.scrollTop
	      });
	    "function" === typeof containerInfo.focus && containerInfo.focus();
	    for (containerInfo = 0; containerInfo < priorSelectionInformation.length; containerInfo++)
	      curFocusedElem = priorSelectionInformation[containerInfo], curFocusedElem.element.scrollLeft = curFocusedElem.left, curFocusedElem.element.scrollTop = curFocusedElem.top;
	  }
	}
	var skipSelectionChangeEvent = canUseDOM && "documentMode" in document && 11 >= document.documentMode, activeElement = null, activeElementInst = null, lastSelection = null, mouseDown = false;
	function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
	  var doc = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget.document : 9 === nativeEventTarget.nodeType ? nativeEventTarget : nativeEventTarget.ownerDocument;
	  mouseDown || null == activeElement || activeElement !== getActiveElement(doc) || (doc = activeElement, "selectionStart" in doc && hasSelectionCapabilities(doc) ? doc = { start: doc.selectionStart, end: doc.selectionEnd } : (doc = (doc.ownerDocument && doc.ownerDocument.defaultView || window).getSelection(), doc = {
	    anchorNode: doc.anchorNode,
	    anchorOffset: doc.anchorOffset,
	    focusNode: doc.focusNode,
	    focusOffset: doc.focusOffset
	  }), lastSelection && shallowEqual(lastSelection, doc) || (lastSelection = doc, doc = accumulateTwoPhaseListeners(activeElementInst, "onSelect"), 0 < doc.length && (nativeEvent = new SyntheticEvent(
	    "onSelect",
	    "select",
	    null,
	    nativeEvent,
	    nativeEventTarget
	  ), dispatchQueue.push({ event: nativeEvent, listeners: doc }), nativeEvent.target = activeElement)));
	}
	function makePrefixMap(styleProp, eventName) {
	  var prefixes = {};
	  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
	  prefixes["Webkit" + styleProp] = "webkit" + eventName;
	  prefixes["Moz" + styleProp] = "moz" + eventName;
	  return prefixes;
	}
	var vendorPrefixes = {
	  animationend: makePrefixMap("Animation", "AnimationEnd"),
	  animationiteration: makePrefixMap("Animation", "AnimationIteration"),
	  animationstart: makePrefixMap("Animation", "AnimationStart"),
	  transitionrun: makePrefixMap("Transition", "TransitionRun"),
	  transitionstart: makePrefixMap("Transition", "TransitionStart"),
	  transitioncancel: makePrefixMap("Transition", "TransitionCancel"),
	  transitionend: makePrefixMap("Transition", "TransitionEnd")
	}, prefixedEventNames = {}, style = {};
	canUseDOM && (style = document.createElement("div").style, "AnimationEvent" in window || (delete vendorPrefixes.animationend.animation, delete vendorPrefixes.animationiteration.animation, delete vendorPrefixes.animationstart.animation), "TransitionEvent" in window || delete vendorPrefixes.transitionend.transition);
	function getVendorPrefixedEventName(eventName) {
	  if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
	  if (!vendorPrefixes[eventName]) return eventName;
	  var prefixMap = vendorPrefixes[eventName], styleProp;
	  for (styleProp in prefixMap)
	    if (prefixMap.hasOwnProperty(styleProp) && styleProp in style)
	      return prefixedEventNames[eventName] = prefixMap[styleProp];
	  return eventName;
	}
	var ANIMATION_END = getVendorPrefixedEventName("animationend"), ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration"), ANIMATION_START = getVendorPrefixedEventName("animationstart"), TRANSITION_RUN = getVendorPrefixedEventName("transitionrun"), TRANSITION_START = getVendorPrefixedEventName("transitionstart"), TRANSITION_CANCEL = getVendorPrefixedEventName("transitioncancel"), TRANSITION_END = getVendorPrefixedEventName("transitionend"), topLevelEventsToReactNames = /* @__PURE__ */ new Map(), simpleEventPluginEvents = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
	  " "
	);
	function registerSimpleEvent(domEventName, reactName) {
	  topLevelEventsToReactNames.set(domEventName, reactName);
	  registerTwoPhaseEvent(reactName, [domEventName]);
	}
	var concurrentQueues = [], concurrentQueuesIndex = 0, concurrentlyUpdatedLanes = 0;
	function finishQueueingConcurrentUpdates() {
	  for (var endIndex = concurrentQueuesIndex, i = concurrentlyUpdatedLanes = concurrentQueuesIndex = 0; i < endIndex; ) {
	    var fiber = concurrentQueues[i];
	    concurrentQueues[i++] = null;
	    var queue = concurrentQueues[i];
	    concurrentQueues[i++] = null;
	    var update = concurrentQueues[i];
	    concurrentQueues[i++] = null;
	    var lane = concurrentQueues[i];
	    concurrentQueues[i++] = null;
	    if (null !== queue && null !== update) {
	      var pending = queue.pending;
	      null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
	      queue.pending = update;
	    }
	    0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
	  }
	}
	function enqueueUpdate$1(fiber, queue, update, lane) {
	  concurrentQueues[concurrentQueuesIndex++] = fiber;
	  concurrentQueues[concurrentQueuesIndex++] = queue;
	  concurrentQueues[concurrentQueuesIndex++] = update;
	  concurrentQueues[concurrentQueuesIndex++] = lane;
	  concurrentlyUpdatedLanes |= lane;
	  fiber.lanes |= lane;
	  fiber = fiber.alternate;
	  null !== fiber && (fiber.lanes |= lane);
	}
	function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
	  enqueueUpdate$1(fiber, queue, update, lane);
	  return getRootForUpdatedFiber(fiber);
	}
	function enqueueConcurrentRenderForLane(fiber, lane) {
	  enqueueUpdate$1(fiber, null, null, lane);
	  return getRootForUpdatedFiber(fiber);
	}
	function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
	  sourceFiber.lanes |= lane;
	  var alternate = sourceFiber.alternate;
	  null !== alternate && (alternate.lanes |= lane);
	  for (var isHidden = false, parent = sourceFiber.return; null !== parent; )
	    parent.childLanes |= lane, alternate = parent.alternate, null !== alternate && (alternate.childLanes |= lane), 22 === parent.tag && (sourceFiber = parent.stateNode, null === sourceFiber || sourceFiber._visibility & 1 || (isHidden = true)), sourceFiber = parent, parent = parent.return;
	  isHidden && null !== update && 3 === sourceFiber.tag && (parent = sourceFiber.stateNode, isHidden = 31 - clz32(lane), parent = parent.hiddenUpdates, sourceFiber = parent[isHidden], null === sourceFiber ? parent[isHidden] = [update] : sourceFiber.push(update), update.lane = lane | 536870912);
	}
	function getRootForUpdatedFiber(sourceFiber) {
	  if (50 < nestedUpdateCount)
	    throw nestedUpdateCount = 0, rootWithNestedUpdates = null, Error(formatProdErrorMessage(185));
	  for (var parent = sourceFiber.return; null !== parent; )
	    sourceFiber = parent, parent = sourceFiber.return;
	  return 3 === sourceFiber.tag ? sourceFiber.stateNode : null;
	}
	var emptyContextObject = {}, CapturedStacks = /* @__PURE__ */ new WeakMap();
	function createCapturedValueAtFiber(value, source) {
	  if ("object" === typeof value && null !== value) {
	    var existing = CapturedStacks.get(value);
	    if (void 0 !== existing) return existing;
	    source = {
	      value,
	      source,
	      stack: getStackByFiberInDevAndProd(source)
	    };
	    CapturedStacks.set(value, source);
	    return source;
	  }
	  return {
	    value,
	    source,
	    stack: getStackByFiberInDevAndProd(source)
	  };
	}
	var forkStack = [], forkStackIndex = 0, treeForkProvider = null, treeForkCount = 0, idStack = [], idStackIndex = 0, treeContextProvider = null, treeContextId = 1, treeContextOverflow = "";
	function pushTreeFork(workInProgress2, totalChildren) {
	  forkStack[forkStackIndex++] = treeForkCount;
	  forkStack[forkStackIndex++] = treeForkProvider;
	  treeForkProvider = workInProgress2;
	  treeForkCount = totalChildren;
	}
	function pushTreeId(workInProgress2, totalChildren, index2) {
	  idStack[idStackIndex++] = treeContextId;
	  idStack[idStackIndex++] = treeContextOverflow;
	  idStack[idStackIndex++] = treeContextProvider;
	  treeContextProvider = workInProgress2;
	  var baseIdWithLeadingBit = treeContextId;
	  workInProgress2 = treeContextOverflow;
	  var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
	  baseIdWithLeadingBit &= ~(1 << baseLength);
	  index2 += 1;
	  var length = 32 - clz32(totalChildren) + baseLength;
	  if (30 < length) {
	    var numberOfOverflowBits = baseLength - baseLength % 5;
	    length = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
	    baseIdWithLeadingBit >>= numberOfOverflowBits;
	    baseLength -= numberOfOverflowBits;
	    treeContextId = 1 << 32 - clz32(totalChildren) + baseLength | index2 << baseLength | baseIdWithLeadingBit;
	    treeContextOverflow = length + workInProgress2;
	  } else
	    treeContextId = 1 << length | index2 << baseLength | baseIdWithLeadingBit, treeContextOverflow = workInProgress2;
	}
	function pushMaterializedTreeId(workInProgress2) {
	  null !== workInProgress2.return && (pushTreeFork(workInProgress2, 1), pushTreeId(workInProgress2, 1, 0));
	}
	function popTreeContext(workInProgress2) {
	  for (; workInProgress2 === treeForkProvider; )
	    treeForkProvider = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null, treeForkCount = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null;
	  for (; workInProgress2 === treeContextProvider; )
	    treeContextProvider = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextOverflow = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextId = idStack[--idStackIndex], idStack[idStackIndex] = null;
	}
	var hydrationParentFiber = null, nextHydratableInstance = null, isHydrating = false, hydrationErrors = null, rootOrSingletonContext = false, HydrationMismatchException = Error(formatProdErrorMessage(519));
	function throwOnHydrationMismatch(fiber) {
	  var error = Error(formatProdErrorMessage(418, ""));
	  queueHydrationError(createCapturedValueAtFiber(error, fiber));
	  throw HydrationMismatchException;
	}
	function prepareToHydrateHostInstance(fiber) {
	  var instance = fiber.stateNode, type = fiber.type, props = fiber.memoizedProps;
	  instance[internalInstanceKey] = fiber;
	  instance[internalPropsKey] = props;
	  switch (type) {
	    case "dialog":
	      listenToNonDelegatedEvent("cancel", instance);
	      listenToNonDelegatedEvent("close", instance);
	      break;
	    case "iframe":
	    case "object":
	    case "embed":
	      listenToNonDelegatedEvent("load", instance);
	      break;
	    case "video":
	    case "audio":
	      for (type = 0; type < mediaEventTypes.length; type++)
	        listenToNonDelegatedEvent(mediaEventTypes[type], instance);
	      break;
	    case "source":
	      listenToNonDelegatedEvent("error", instance);
	      break;
	    case "img":
	    case "image":
	    case "link":
	      listenToNonDelegatedEvent("error", instance);
	      listenToNonDelegatedEvent("load", instance);
	      break;
	    case "details":
	      listenToNonDelegatedEvent("toggle", instance);
	      break;
	    case "input":
	      listenToNonDelegatedEvent("invalid", instance);
	      initInput(
	        instance,
	        props.value,
	        props.defaultValue,
	        props.checked,
	        props.defaultChecked,
	        props.type,
	        props.name,
	        true
	      );
	      track(instance);
	      break;
	    case "select":
	      listenToNonDelegatedEvent("invalid", instance);
	      break;
	    case "textarea":
	      listenToNonDelegatedEvent("invalid", instance), initTextarea(instance, props.value, props.defaultValue, props.children), track(instance);
	  }
	  type = props.children;
	  "string" !== typeof type && "number" !== typeof type && "bigint" !== typeof type || instance.textContent === "" + type || true === props.suppressHydrationWarning || checkForUnmatchedText(instance.textContent, type) ? (null != props.popover && (listenToNonDelegatedEvent("beforetoggle", instance), listenToNonDelegatedEvent("toggle", instance)), null != props.onScroll && listenToNonDelegatedEvent("scroll", instance), null != props.onScrollEnd && listenToNonDelegatedEvent("scrollend", instance), null != props.onClick && (instance.onclick = noop$1), instance = true) : instance = false;
	  instance || throwOnHydrationMismatch(fiber);
	}
	function popToNextHostParent(fiber) {
	  for (hydrationParentFiber = fiber.return; hydrationParentFiber; )
	    switch (hydrationParentFiber.tag) {
	      case 3:
	      case 27:
	        rootOrSingletonContext = true;
	        return;
	      case 5:
	      case 13:
	        rootOrSingletonContext = false;
	        return;
	      default:
	        hydrationParentFiber = hydrationParentFiber.return;
	    }
	}
	function popHydrationState(fiber) {
	  if (fiber !== hydrationParentFiber) return false;
	  if (!isHydrating) return popToNextHostParent(fiber), isHydrating = true, false;
	  var shouldClear = false, JSCompiler_temp;
	  if (JSCompiler_temp = 3 !== fiber.tag && 27 !== fiber.tag) {
	    if (JSCompiler_temp = 5 === fiber.tag)
	      JSCompiler_temp = fiber.type, JSCompiler_temp = !("form" !== JSCompiler_temp && "button" !== JSCompiler_temp) || shouldSetTextContent(fiber.type, fiber.memoizedProps);
	    JSCompiler_temp = !JSCompiler_temp;
	  }
	  JSCompiler_temp && (shouldClear = true);
	  shouldClear && nextHydratableInstance && throwOnHydrationMismatch(fiber);
	  popToNextHostParent(fiber);
	  if (13 === fiber.tag) {
	    fiber = fiber.memoizedState;
	    fiber = null !== fiber ? fiber.dehydrated : null;
	    if (!fiber) throw Error(formatProdErrorMessage(317));
	    a: {
	      fiber = fiber.nextSibling;
	      for (shouldClear = 0; fiber; ) {
	        if (8 === fiber.nodeType)
	          if (JSCompiler_temp = fiber.data, "/$" === JSCompiler_temp) {
	            if (0 === shouldClear) {
	              nextHydratableInstance = getNextHydratable(fiber.nextSibling);
	              break a;
	            }
	            shouldClear--;
	          } else
	            "$" !== JSCompiler_temp && "$!" !== JSCompiler_temp && "$?" !== JSCompiler_temp || shouldClear++;
	        fiber = fiber.nextSibling;
	      }
	      nextHydratableInstance = null;
	    }
	  } else
	    nextHydratableInstance = hydrationParentFiber ? getNextHydratable(fiber.stateNode.nextSibling) : null;
	  return true;
	}
	function resetHydrationState() {
	  nextHydratableInstance = hydrationParentFiber = null;
	  isHydrating = false;
	}
	function queueHydrationError(error) {
	  null === hydrationErrors ? hydrationErrors = [error] : hydrationErrors.push(error);
	}
	var SuspenseException = Error(formatProdErrorMessage(460)), SuspenseyCommitException = Error(formatProdErrorMessage(474)), noopSuspenseyCommitThenable = { then: function() {
	} };
	function isThenableResolved(thenable) {
	  thenable = thenable.status;
	  return "fulfilled" === thenable || "rejected" === thenable;
	}
	function noop$3() {
	}
	function trackUsedThenable(thenableState2, thenable, index2) {
	  index2 = thenableState2[index2];
	  void 0 === index2 ? thenableState2.push(thenable) : index2 !== thenable && (thenable.then(noop$3, noop$3), thenable = index2);
	  switch (thenable.status) {
	    case "fulfilled":
	      return thenable.value;
	    case "rejected":
	      thenableState2 = thenable.reason;
	      if (thenableState2 === SuspenseException)
	        throw Error(formatProdErrorMessage(483));
	      throw thenableState2;
	    default:
	      if ("string" === typeof thenable.status) thenable.then(noop$3, noop$3);
	      else {
	        thenableState2 = workInProgressRoot;
	        if (null !== thenableState2 && 100 < thenableState2.shellSuspendCounter)
	          throw Error(formatProdErrorMessage(482));
	        thenableState2 = thenable;
	        thenableState2.status = "pending";
	        thenableState2.then(
	          function(fulfilledValue) {
	            if ("pending" === thenable.status) {
	              var fulfilledThenable = thenable;
	              fulfilledThenable.status = "fulfilled";
	              fulfilledThenable.value = fulfilledValue;
	            }
	          },
	          function(error) {
	            if ("pending" === thenable.status) {
	              var rejectedThenable = thenable;
	              rejectedThenable.status = "rejected";
	              rejectedThenable.reason = error;
	            }
	          }
	        );
	      }
	      switch (thenable.status) {
	        case "fulfilled":
	          return thenable.value;
	        case "rejected":
	          thenableState2 = thenable.reason;
	          if (thenableState2 === SuspenseException)
	            throw Error(formatProdErrorMessage(483));
	          throw thenableState2;
	      }
	      suspendedThenable = thenable;
	      throw SuspenseException;
	  }
	}
	var suspendedThenable = null;
	function getSuspendedThenable() {
	  if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
	  var thenable = suspendedThenable;
	  suspendedThenable = null;
	  return thenable;
	}
	var thenableState$1 = null, thenableIndexCounter$1 = 0;
	function unwrapThenable(thenable) {
	  var index2 = thenableIndexCounter$1;
	  thenableIndexCounter$1 += 1;
	  null === thenableState$1 && (thenableState$1 = []);
	  return trackUsedThenable(thenableState$1, thenable, index2);
	}
	function coerceRef(workInProgress2, element) {
	  element = element.props.ref;
	  workInProgress2.ref = void 0 !== element ? element : null;
	}
	function throwOnInvalidObjectType(returnFiber, newChild) {
	  if (newChild.$$typeof === REACT_LEGACY_ELEMENT_TYPE)
	    throw Error(formatProdErrorMessage(525));
	  returnFiber = Object.prototype.toString.call(newChild);
	  throw Error(
	    formatProdErrorMessage(
	      31,
	      "[object Object]" === returnFiber ? "object with keys {" + Object.keys(newChild).join(", ") + "}" : returnFiber
	    )
	  );
	}
	function resolveLazy(lazyType) {
	  var init = lazyType._init;
	  return init(lazyType._payload);
	}
	function createChildReconciler(shouldTrackSideEffects) {
	  function deleteChild(returnFiber, childToDelete) {
	    if (shouldTrackSideEffects) {
	      var deletions = returnFiber.deletions;
	      null === deletions ? (returnFiber.deletions = [childToDelete], returnFiber.flags |= 16) : deletions.push(childToDelete);
	    }
	  }
	  function deleteRemainingChildren(returnFiber, currentFirstChild) {
	    if (!shouldTrackSideEffects) return null;
	    for (; null !== currentFirstChild; )
	      deleteChild(returnFiber, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
	    return null;
	  }
	  function mapRemainingChildren(currentFirstChild) {
	    for (var existingChildren = /* @__PURE__ */ new Map(); null !== currentFirstChild; )
	      null !== currentFirstChild.key ? existingChildren.set(currentFirstChild.key, currentFirstChild) : existingChildren.set(currentFirstChild.index, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
	    return existingChildren;
	  }
	  function useFiber(fiber, pendingProps) {
	    fiber = createWorkInProgress(fiber, pendingProps);
	    fiber.index = 0;
	    fiber.sibling = null;
	    return fiber;
	  }
	  function placeChild(newFiber, lastPlacedIndex, newIndex) {
	    newFiber.index = newIndex;
	    if (!shouldTrackSideEffects)
	      return newFiber.flags |= 1048576, lastPlacedIndex;
	    newIndex = newFiber.alternate;
	    if (null !== newIndex)
	      return newIndex = newIndex.index, newIndex < lastPlacedIndex ? (newFiber.flags |= 33554434, lastPlacedIndex) : newIndex;
	    newFiber.flags |= 33554434;
	    return lastPlacedIndex;
	  }
	  function placeSingleChild(newFiber) {
	    shouldTrackSideEffects && null === newFiber.alternate && (newFiber.flags |= 33554434);
	    return newFiber;
	  }
	  function updateTextNode(returnFiber, current, textContent, lanes) {
	    if (null === current || 6 !== current.tag)
	      return current = createFiberFromText(textContent, returnFiber.mode, lanes), current.return = returnFiber, current;
	    current = useFiber(current, textContent);
	    current.return = returnFiber;
	    return current;
	  }
	  function updateElement(returnFiber, current, element, lanes) {
	    var elementType = element.type;
	    if (elementType === REACT_FRAGMENT_TYPE)
	      return updateFragment(
	        returnFiber,
	        current,
	        element.props.children,
	        lanes,
	        element.key
	      );
	    if (null !== current && (current.elementType === elementType || "object" === typeof elementType && null !== elementType && elementType.$$typeof === REACT_LAZY_TYPE && resolveLazy(elementType) === current.type))
	      return current = useFiber(current, element.props), coerceRef(current, element), current.return = returnFiber, current;
	    current = createFiberFromTypeAndProps(
	      element.type,
	      element.key,
	      element.props,
	      null,
	      returnFiber.mode,
	      lanes
	    );
	    coerceRef(current, element);
	    current.return = returnFiber;
	    return current;
	  }
	  function updatePortal(returnFiber, current, portal, lanes) {
	    if (null === current || 4 !== current.tag || current.stateNode.containerInfo !== portal.containerInfo || current.stateNode.implementation !== portal.implementation)
	      return current = createFiberFromPortal(portal, returnFiber.mode, lanes), current.return = returnFiber, current;
	    current = useFiber(current, portal.children || []);
	    current.return = returnFiber;
	    return current;
	  }
	  function updateFragment(returnFiber, current, fragment, lanes, key) {
	    if (null === current || 7 !== current.tag)
	      return current = createFiberFromFragment(
	        fragment,
	        returnFiber.mode,
	        lanes,
	        key
	      ), current.return = returnFiber, current;
	    current = useFiber(current, fragment);
	    current.return = returnFiber;
	    return current;
	  }
	  function createChild(returnFiber, newChild, lanes) {
	    if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
	      return newChild = createFiberFromText(
	        "" + newChild,
	        returnFiber.mode,
	        lanes
	      ), newChild.return = returnFiber, newChild;
	    if ("object" === typeof newChild && null !== newChild) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          return lanes = createFiberFromTypeAndProps(
	            newChild.type,
	            newChild.key,
	            newChild.props,
	            null,
	            returnFiber.mode,
	            lanes
	          ), coerceRef(lanes, newChild), lanes.return = returnFiber, lanes;
	        case REACT_PORTAL_TYPE:
	          return newChild = createFiberFromPortal(
	            newChild,
	            returnFiber.mode,
	            lanes
	          ), newChild.return = returnFiber, newChild;
	        case REACT_LAZY_TYPE:
	          var init = newChild._init;
	          newChild = init(newChild._payload);
	          return createChild(returnFiber, newChild, lanes);
	      }
	      if (isArrayImpl(newChild) || getIteratorFn(newChild))
	        return newChild = createFiberFromFragment(
	          newChild,
	          returnFiber.mode,
	          lanes,
	          null
	        ), newChild.return = returnFiber, newChild;
	      if ("function" === typeof newChild.then)
	        return createChild(returnFiber, unwrapThenable(newChild), lanes);
	      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
	        return createChild(
	          returnFiber,
	          readContextDuringReconciliation(returnFiber, newChild),
	          lanes
	        );
	      throwOnInvalidObjectType(returnFiber, newChild);
	    }
	    return null;
	  }
	  function updateSlot(returnFiber, oldFiber, newChild, lanes) {
	    var key = null !== oldFiber ? oldFiber.key : null;
	    if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
	      return null !== key ? null : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
	    if ("object" === typeof newChild && null !== newChild) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          return newChild.key === key ? updateElement(returnFiber, oldFiber, newChild, lanes) : null;
	        case REACT_PORTAL_TYPE:
	          return newChild.key === key ? updatePortal(returnFiber, oldFiber, newChild, lanes) : null;
	        case REACT_LAZY_TYPE:
	          return key = newChild._init, newChild = key(newChild._payload), updateSlot(returnFiber, oldFiber, newChild, lanes);
	      }
	      if (isArrayImpl(newChild) || getIteratorFn(newChild))
	        return null !== key ? null : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
	      if ("function" === typeof newChild.then)
	        return updateSlot(
	          returnFiber,
	          oldFiber,
	          unwrapThenable(newChild),
	          lanes
	        );
	      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
	        return updateSlot(
	          returnFiber,
	          oldFiber,
	          readContextDuringReconciliation(returnFiber, newChild),
	          lanes
	        );
	      throwOnInvalidObjectType(returnFiber, newChild);
	    }
	    return null;
	  }
	  function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
	    if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
	      return existingChildren = existingChildren.get(newIdx) || null, updateTextNode(returnFiber, existingChildren, "" + newChild, lanes);
	    if ("object" === typeof newChild && null !== newChild) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          return existingChildren = existingChildren.get(
	            null === newChild.key ? newIdx : newChild.key
	          ) || null, updateElement(returnFiber, existingChildren, newChild, lanes);
	        case REACT_PORTAL_TYPE:
	          return existingChildren = existingChildren.get(
	            null === newChild.key ? newIdx : newChild.key
	          ) || null, updatePortal(returnFiber, existingChildren, newChild, lanes);
	        case REACT_LAZY_TYPE:
	          var init = newChild._init;
	          newChild = init(newChild._payload);
	          return updateFromMap(
	            existingChildren,
	            returnFiber,
	            newIdx,
	            newChild,
	            lanes
	          );
	      }
	      if (isArrayImpl(newChild) || getIteratorFn(newChild))
	        return existingChildren = existingChildren.get(newIdx) || null, updateFragment(returnFiber, existingChildren, newChild, lanes, null);
	      if ("function" === typeof newChild.then)
	        return updateFromMap(
	          existingChildren,
	          returnFiber,
	          newIdx,
	          unwrapThenable(newChild),
	          lanes
	        );
	      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
	        return updateFromMap(
	          existingChildren,
	          returnFiber,
	          newIdx,
	          readContextDuringReconciliation(returnFiber, newChild),
	          lanes
	        );
	      throwOnInvalidObjectType(returnFiber, newChild);
	    }
	    return null;
	  }
	  function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, lanes) {
	    for (var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null; null !== oldFiber && newIdx < newChildren.length; newIdx++) {
	      oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
	      var newFiber = updateSlot(
	        returnFiber,
	        oldFiber,
	        newChildren[newIdx],
	        lanes
	      );
	      if (null === newFiber) {
	        null === oldFiber && (oldFiber = nextOldFiber);
	        break;
	      }
	      shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
	      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
	      null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
	      previousNewFiber = newFiber;
	      oldFiber = nextOldFiber;
	    }
	    if (newIdx === newChildren.length)
	      return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
	    if (null === oldFiber) {
	      for (; newIdx < newChildren.length; newIdx++)
	        oldFiber = createChild(returnFiber, newChildren[newIdx], lanes), null !== oldFiber && (currentFirstChild = placeChild(
	          oldFiber,
	          currentFirstChild,
	          newIdx
	        ), null === previousNewFiber ? resultingFirstChild = oldFiber : previousNewFiber.sibling = oldFiber, previousNewFiber = oldFiber);
	      isHydrating && pushTreeFork(returnFiber, newIdx);
	      return resultingFirstChild;
	    }
	    for (oldFiber = mapRemainingChildren(oldFiber); newIdx < newChildren.length; newIdx++)
	      nextOldFiber = updateFromMap(
	        oldFiber,
	        returnFiber,
	        newIdx,
	        newChildren[newIdx],
	        lanes
	      ), null !== nextOldFiber && (shouldTrackSideEffects && null !== nextOldFiber.alternate && oldFiber.delete(
	        null === nextOldFiber.key ? newIdx : nextOldFiber.key
	      ), currentFirstChild = placeChild(
	        nextOldFiber,
	        currentFirstChild,
	        newIdx
	      ), null === previousNewFiber ? resultingFirstChild = nextOldFiber : previousNewFiber.sibling = nextOldFiber, previousNewFiber = nextOldFiber);
	    shouldTrackSideEffects && oldFiber.forEach(function(child) {
	      return deleteChild(returnFiber, child);
	    });
	    isHydrating && pushTreeFork(returnFiber, newIdx);
	    return resultingFirstChild;
	  }
	  function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildren, lanes) {
	    if (null == newChildren) throw Error(formatProdErrorMessage(151));
	    for (var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null, step = newChildren.next(); null !== oldFiber && !step.done; newIdx++, step = newChildren.next()) {
	      oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
	      var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
	      if (null === newFiber) {
	        null === oldFiber && (oldFiber = nextOldFiber);
	        break;
	      }
	      shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
	      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
	      null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
	      previousNewFiber = newFiber;
	      oldFiber = nextOldFiber;
	    }
	    if (step.done)
	      return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
	    if (null === oldFiber) {
	      for (; !step.done; newIdx++, step = newChildren.next())
	        step = createChild(returnFiber, step.value, lanes), null !== step && (currentFirstChild = placeChild(step, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = step : previousNewFiber.sibling = step, previousNewFiber = step);
	      isHydrating && pushTreeFork(returnFiber, newIdx);
	      return resultingFirstChild;
	    }
	    for (oldFiber = mapRemainingChildren(oldFiber); !step.done; newIdx++, step = newChildren.next())
	      step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes), null !== step && (shouldTrackSideEffects && null !== step.alternate && oldFiber.delete(null === step.key ? newIdx : step.key), currentFirstChild = placeChild(step, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = step : previousNewFiber.sibling = step, previousNewFiber = step);
	    shouldTrackSideEffects && oldFiber.forEach(function(child) {
	      return deleteChild(returnFiber, child);
	    });
	    isHydrating && pushTreeFork(returnFiber, newIdx);
	    return resultingFirstChild;
	  }
	  function reconcileChildFibersImpl(returnFiber, currentFirstChild, newChild, lanes) {
	    "object" === typeof newChild && null !== newChild && newChild.type === REACT_FRAGMENT_TYPE && null === newChild.key && (newChild = newChild.props.children);
	    if ("object" === typeof newChild && null !== newChild) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          a: {
	            for (var key = newChild.key; null !== currentFirstChild; ) {
	              if (currentFirstChild.key === key) {
	                key = newChild.type;
	                if (key === REACT_FRAGMENT_TYPE) {
	                  if (7 === currentFirstChild.tag) {
	                    deleteRemainingChildren(
	                      returnFiber,
	                      currentFirstChild.sibling
	                    );
	                    lanes = useFiber(
	                      currentFirstChild,
	                      newChild.props.children
	                    );
	                    lanes.return = returnFiber;
	                    returnFiber = lanes;
	                    break a;
	                  }
	                } else if (currentFirstChild.elementType === key || "object" === typeof key && null !== key && key.$$typeof === REACT_LAZY_TYPE && resolveLazy(key) === currentFirstChild.type) {
	                  deleteRemainingChildren(
	                    returnFiber,
	                    currentFirstChild.sibling
	                  );
	                  lanes = useFiber(currentFirstChild, newChild.props);
	                  coerceRef(lanes, newChild);
	                  lanes.return = returnFiber;
	                  returnFiber = lanes;
	                  break a;
	                }
	                deleteRemainingChildren(returnFiber, currentFirstChild);
	                break;
	              } else deleteChild(returnFiber, currentFirstChild);
	              currentFirstChild = currentFirstChild.sibling;
	            }
	            newChild.type === REACT_FRAGMENT_TYPE ? (lanes = createFiberFromFragment(
	              newChild.props.children,
	              returnFiber.mode,
	              lanes,
	              newChild.key
	            ), lanes.return = returnFiber, returnFiber = lanes) : (lanes = createFiberFromTypeAndProps(
	              newChild.type,
	              newChild.key,
	              newChild.props,
	              null,
	              returnFiber.mode,
	              lanes
	            ), coerceRef(lanes, newChild), lanes.return = returnFiber, returnFiber = lanes);
	          }
	          return placeSingleChild(returnFiber);
	        case REACT_PORTAL_TYPE:
	          a: {
	            for (key = newChild.key; null !== currentFirstChild; ) {
	              if (currentFirstChild.key === key)
	                if (4 === currentFirstChild.tag && currentFirstChild.stateNode.containerInfo === newChild.containerInfo && currentFirstChild.stateNode.implementation === newChild.implementation) {
	                  deleteRemainingChildren(
	                    returnFiber,
	                    currentFirstChild.sibling
	                  );
	                  lanes = useFiber(currentFirstChild, newChild.children || []);
	                  lanes.return = returnFiber;
	                  returnFiber = lanes;
	                  break a;
	                } else {
	                  deleteRemainingChildren(returnFiber, currentFirstChild);
	                  break;
	                }
	              else deleteChild(returnFiber, currentFirstChild);
	              currentFirstChild = currentFirstChild.sibling;
	            }
	            lanes = createFiberFromPortal(newChild, returnFiber.mode, lanes);
	            lanes.return = returnFiber;
	            returnFiber = lanes;
	          }
	          return placeSingleChild(returnFiber);
	        case REACT_LAZY_TYPE:
	          return key = newChild._init, newChild = key(newChild._payload), reconcileChildFibersImpl(
	            returnFiber,
	            currentFirstChild,
	            newChild,
	            lanes
	          );
	      }
	      if (isArrayImpl(newChild))
	        return reconcileChildrenArray(
	          returnFiber,
	          currentFirstChild,
	          newChild,
	          lanes
	        );
	      if (getIteratorFn(newChild)) {
	        key = getIteratorFn(newChild);
	        if ("function" !== typeof key) throw Error(formatProdErrorMessage(150));
	        newChild = key.call(newChild);
	        return reconcileChildrenIterator(
	          returnFiber,
	          currentFirstChild,
	          newChild,
	          lanes
	        );
	      }
	      if ("function" === typeof newChild.then)
	        return reconcileChildFibersImpl(
	          returnFiber,
	          currentFirstChild,
	          unwrapThenable(newChild),
	          lanes
	        );
	      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
	        return reconcileChildFibersImpl(
	          returnFiber,
	          currentFirstChild,
	          readContextDuringReconciliation(returnFiber, newChild),
	          lanes
	        );
	      throwOnInvalidObjectType(returnFiber, newChild);
	    }
	    return "string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild ? (newChild = "" + newChild, null !== currentFirstChild && 6 === currentFirstChild.tag ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling), lanes = useFiber(currentFirstChild, newChild), lanes.return = returnFiber, returnFiber = lanes) : (deleteRemainingChildren(returnFiber, currentFirstChild), lanes = createFiberFromText(newChild, returnFiber.mode, lanes), lanes.return = returnFiber, returnFiber = lanes), placeSingleChild(returnFiber)) : deleteRemainingChildren(returnFiber, currentFirstChild);
	  }
	  return function(returnFiber, currentFirstChild, newChild, lanes) {
	    try {
	      thenableIndexCounter$1 = 0;
	      var firstChildFiber = reconcileChildFibersImpl(
	        returnFiber,
	        currentFirstChild,
	        newChild,
	        lanes
	      );
	      thenableState$1 = null;
	      return firstChildFiber;
	    } catch (x) {
	      if (x === SuspenseException) throw x;
	      var fiber = createFiberImplClass(29, x, null, returnFiber.mode);
	      fiber.lanes = lanes;
	      fiber.return = returnFiber;
	      return fiber;
	    } finally {
	    }
	  };
	}
	var reconcileChildFibers = createChildReconciler(true), mountChildFibers = createChildReconciler(false), currentTreeHiddenStackCursor = createCursor(null), prevEntangledRenderLanesCursor = createCursor(0);
	function pushHiddenContext(fiber, context) {
	  fiber = entangledRenderLanes;
	  push(prevEntangledRenderLanesCursor, fiber);
	  push(currentTreeHiddenStackCursor, context);
	  entangledRenderLanes = fiber | context.baseLanes;
	}
	function reuseHiddenContextOnStack() {
	  push(prevEntangledRenderLanesCursor, entangledRenderLanes);
	  push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current);
	}
	function popHiddenContext() {
	  entangledRenderLanes = prevEntangledRenderLanesCursor.current;
	  pop(currentTreeHiddenStackCursor);
	  pop(prevEntangledRenderLanesCursor);
	}
	var suspenseHandlerStackCursor = createCursor(null), shellBoundary = null;
	function pushPrimaryTreeSuspenseHandler(handler) {
	  var current = handler.alternate;
	  push(suspenseStackCursor, suspenseStackCursor.current & 1);
	  push(suspenseHandlerStackCursor, handler);
	  null === shellBoundary && (null === current || null !== currentTreeHiddenStackCursor.current ? shellBoundary = handler : null !== current.memoizedState && (shellBoundary = handler));
	}
	function pushOffscreenSuspenseHandler(fiber) {
	  if (22 === fiber.tag) {
	    if (push(suspenseStackCursor, suspenseStackCursor.current), push(suspenseHandlerStackCursor, fiber), null === shellBoundary) {
	      var current = fiber.alternate;
	      null !== current && null !== current.memoizedState && (shellBoundary = fiber);
	    }
	  } else reuseSuspenseHandlerOnStack();
	}
	function reuseSuspenseHandlerOnStack() {
	  push(suspenseStackCursor, suspenseStackCursor.current);
	  push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
	}
	function popSuspenseHandler(fiber) {
	  pop(suspenseHandlerStackCursor);
	  shellBoundary === fiber && (shellBoundary = null);
	  pop(suspenseStackCursor);
	}
	var suspenseStackCursor = createCursor(0);
	function findFirstSuspended(row) {
	  for (var node = row; null !== node; ) {
	    if (13 === node.tag) {
	      var state = node.memoizedState;
	      if (null !== state && (state = state.dehydrated, null === state || "$?" === state.data || "$!" === state.data))
	        return node;
	    } else if (19 === node.tag && void 0 !== node.memoizedProps.revealOrder) {
	      if (0 !== (node.flags & 128)) return node;
	    } else if (null !== node.child) {
	      node.child.return = node;
	      node = node.child;
	      continue;
	    }
	    if (node === row) break;
	    for (; null === node.sibling; ) {
	      if (null === node.return || node.return === row) return null;
	      node = node.return;
	    }
	    node.sibling.return = node.return;
	    node = node.sibling;
	  }
	  return null;
	}
	var AbortControllerLocal = "undefined" !== typeof AbortController ? AbortController : function() {
	  var listeners = [], signal = this.signal = {
	    aborted: false,
	    addEventListener: function(type, listener) {
	      listeners.push(listener);
	    }
	  };
	  this.abort = function() {
	    signal.aborted = true;
	    listeners.forEach(function(listener) {
	      return listener();
	    });
	  };
	}, scheduleCallback$2 = Scheduler.unstable_scheduleCallback, NormalPriority = Scheduler.unstable_NormalPriority, CacheContext = {
	  $$typeof: REACT_CONTEXT_TYPE,
	  Consumer: null,
	  Provider: null,
	  _currentValue: null,
	  _currentValue2: null,
	  _threadCount: 0
	};
	function createCache() {
	  return {
	    controller: new AbortControllerLocal(),
	    data: /* @__PURE__ */ new Map(),
	    refCount: 0
	  };
	}
	function releaseCache(cache) {
	  cache.refCount--;
	  0 === cache.refCount && scheduleCallback$2(NormalPriority, function() {
	    cache.controller.abort();
	  });
	}
	var currentEntangledListeners = null, currentEntangledPendingCount = 0, currentEntangledLane = 0, currentEntangledActionThenable = null;
	function entangleAsyncAction(transition, thenable) {
	  if (null === currentEntangledListeners) {
	    var entangledListeners = currentEntangledListeners = [];
	    currentEntangledPendingCount = 0;
	    currentEntangledLane = requestTransitionLane();
	    currentEntangledActionThenable = {
	      status: "pending",
	      value: void 0,
	      then: function(resolve) {
	        entangledListeners.push(resolve);
	      }
	    };
	  }
	  currentEntangledPendingCount++;
	  thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
	  return thenable;
	}
	function pingEngtangledActionScope() {
	  if (0 === --currentEntangledPendingCount && null !== currentEntangledListeners) {
	    null !== currentEntangledActionThenable && (currentEntangledActionThenable.status = "fulfilled");
	    var listeners = currentEntangledListeners;
	    currentEntangledListeners = null;
	    currentEntangledLane = 0;
	    currentEntangledActionThenable = null;
	    for (var i = 0; i < listeners.length; i++) (0, listeners[i])();
	  }
	}
	function chainThenableValue(thenable, result) {
	  var listeners = [], thenableWithOverride = {
	    status: "pending",
	    value: null,
	    reason: null,
	    then: function(resolve) {
	      listeners.push(resolve);
	    }
	  };
	  thenable.then(
	    function() {
	      thenableWithOverride.status = "fulfilled";
	      thenableWithOverride.value = result;
	      for (var i = 0; i < listeners.length; i++) (0, listeners[i])(result);
	    },
	    function(error) {
	      thenableWithOverride.status = "rejected";
	      thenableWithOverride.reason = error;
	      for (error = 0; error < listeners.length; error++)
	        (0, listeners[error])(void 0);
	    }
	  );
	  return thenableWithOverride;
	}
	var prevOnStartTransitionFinish = ReactSharedInternals.S;
	ReactSharedInternals.S = function(transition, returnValue) {
	  "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && entangleAsyncAction(transition, returnValue);
	  null !== prevOnStartTransitionFinish && prevOnStartTransitionFinish(transition, returnValue);
	};
	var resumedCache = createCursor(null);
	function peekCacheFromPool() {
	  var cacheResumedFromPreviousRender = resumedCache.current;
	  return null !== cacheResumedFromPreviousRender ? cacheResumedFromPreviousRender : workInProgressRoot.pooledCache;
	}
	function pushTransition(offscreenWorkInProgress, prevCachePool) {
	  null === prevCachePool ? push(resumedCache, resumedCache.current) : push(resumedCache, prevCachePool.pool);
	}
	function getSuspendedCache() {
	  var cacheFromPool = peekCacheFromPool();
	  return null === cacheFromPool ? null : { parent: CacheContext._currentValue, pool: cacheFromPool };
	}
	var renderLanes = 0, currentlyRenderingFiber$1 = null, currentHook = null, workInProgressHook = null, didScheduleRenderPhaseUpdate = false, didScheduleRenderPhaseUpdateDuringThisPass = false, shouldDoubleInvokeUserFnsInHooksDEV = false, localIdCounter = 0, thenableIndexCounter = 0, thenableState = null, globalClientIdCounter = 0;
	function throwInvalidHookError() {
	  throw Error(formatProdErrorMessage(321));
	}
	function areHookInputsEqual(nextDeps, prevDeps) {
	  if (null === prevDeps) return false;
	  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++)
	    if (!objectIs(nextDeps[i], prevDeps[i])) return false;
	  return true;
	}
	function renderWithHooks(current, workInProgress2, Component, props, secondArg, nextRenderLanes) {
	  renderLanes = nextRenderLanes;
	  currentlyRenderingFiber$1 = workInProgress2;
	  workInProgress2.memoizedState = null;
	  workInProgress2.updateQueue = null;
	  workInProgress2.lanes = 0;
	  ReactSharedInternals.H = null === current || null === current.memoizedState ? HooksDispatcherOnMount : HooksDispatcherOnUpdate;
	  shouldDoubleInvokeUserFnsInHooksDEV = false;
	  nextRenderLanes = Component(props, secondArg);
	  shouldDoubleInvokeUserFnsInHooksDEV = false;
	  didScheduleRenderPhaseUpdateDuringThisPass && (nextRenderLanes = renderWithHooksAgain(
	    workInProgress2,
	    Component,
	    props,
	    secondArg
	  ));
	  finishRenderingHooks(current);
	  return nextRenderLanes;
	}
	function finishRenderingHooks(current) {
	  ReactSharedInternals.H = ContextOnlyDispatcher;
	  var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
	  renderLanes = 0;
	  workInProgressHook = currentHook = currentlyRenderingFiber$1 = null;
	  didScheduleRenderPhaseUpdate = false;
	  thenableIndexCounter = 0;
	  thenableState = null;
	  if (didRenderTooFewHooks) throw Error(formatProdErrorMessage(300));
	  null === current || didReceiveUpdate || (current = current.dependencies, null !== current && checkIfContextChanged(current) && (didReceiveUpdate = true));
	}
	function renderWithHooksAgain(workInProgress2, Component, props, secondArg) {
	  currentlyRenderingFiber$1 = workInProgress2;
	  var numberOfReRenders = 0;
	  do {
	    didScheduleRenderPhaseUpdateDuringThisPass && (thenableState = null);
	    thenableIndexCounter = 0;
	    didScheduleRenderPhaseUpdateDuringThisPass = false;
	    if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
	    numberOfReRenders += 1;
	    workInProgressHook = currentHook = null;
	    if (null != workInProgress2.updateQueue) {
	      var children = workInProgress2.updateQueue;
	      children.lastEffect = null;
	      children.events = null;
	      children.stores = null;
	      null != children.memoCache && (children.memoCache.index = 0);
	    }
	    ReactSharedInternals.H = HooksDispatcherOnRerender;
	    children = Component(props, secondArg);
	  } while (didScheduleRenderPhaseUpdateDuringThisPass);
	  return children;
	}
	function TransitionAwareHostComponent() {
	  var dispatcher = ReactSharedInternals.H, maybeThenable = dispatcher.useState()[0];
	  maybeThenable = "function" === typeof maybeThenable.then ? useThenable(maybeThenable) : maybeThenable;
	  dispatcher = dispatcher.useState()[0];
	  (null !== currentHook ? currentHook.memoizedState : null) !== dispatcher && (currentlyRenderingFiber$1.flags |= 1024);
	  return maybeThenable;
	}
	function checkDidRenderIdHook() {
	  var didRenderIdHook = 0 !== localIdCounter;
	  localIdCounter = 0;
	  return didRenderIdHook;
	}
	function bailoutHooks(current, workInProgress2, lanes) {
	  workInProgress2.updateQueue = current.updateQueue;
	  workInProgress2.flags &= -2053;
	  current.lanes &= ~lanes;
	}
	function resetHooksOnUnwind(workInProgress2) {
	  if (didScheduleRenderPhaseUpdate) {
	    for (workInProgress2 = workInProgress2.memoizedState; null !== workInProgress2; ) {
	      var queue = workInProgress2.queue;
	      null !== queue && (queue.pending = null);
	      workInProgress2 = workInProgress2.next;
	    }
	    didScheduleRenderPhaseUpdate = false;
	  }
	  renderLanes = 0;
	  workInProgressHook = currentHook = currentlyRenderingFiber$1 = null;
	  didScheduleRenderPhaseUpdateDuringThisPass = false;
	  thenableIndexCounter = localIdCounter = 0;
	  thenableState = null;
	}
	function mountWorkInProgressHook() {
	  var hook = {
	    memoizedState: null,
	    baseState: null,
	    baseQueue: null,
	    queue: null,
	    next: null
	  };
	  null === workInProgressHook ? currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook : workInProgressHook = workInProgressHook.next = hook;
	  return workInProgressHook;
	}
	function updateWorkInProgressHook() {
	  if (null === currentHook) {
	    var nextCurrentHook = currentlyRenderingFiber$1.alternate;
	    nextCurrentHook = null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
	  } else nextCurrentHook = currentHook.next;
	  var nextWorkInProgressHook = null === workInProgressHook ? currentlyRenderingFiber$1.memoizedState : workInProgressHook.next;
	  if (null !== nextWorkInProgressHook)
	    workInProgressHook = nextWorkInProgressHook, currentHook = nextCurrentHook;
	  else {
	    if (null === nextCurrentHook) {
	      if (null === currentlyRenderingFiber$1.alternate)
	        throw Error(formatProdErrorMessage(467));
	      throw Error(formatProdErrorMessage(310));
	    }
	    currentHook = nextCurrentHook;
	    nextCurrentHook = {
	      memoizedState: currentHook.memoizedState,
	      baseState: currentHook.baseState,
	      baseQueue: currentHook.baseQueue,
	      queue: currentHook.queue,
	      next: null
	    };
	    null === workInProgressHook ? currentlyRenderingFiber$1.memoizedState = workInProgressHook = nextCurrentHook : workInProgressHook = workInProgressHook.next = nextCurrentHook;
	  }
	  return workInProgressHook;
	}
	var createFunctionComponentUpdateQueue;
	createFunctionComponentUpdateQueue = function() {
	  return { lastEffect: null, events: null, stores: null, memoCache: null };
	};
	function useThenable(thenable) {
	  var index2 = thenableIndexCounter;
	  thenableIndexCounter += 1;
	  null === thenableState && (thenableState = []);
	  thenable = trackUsedThenable(thenableState, thenable, index2);
	  index2 = currentlyRenderingFiber$1;
	  null === (null === workInProgressHook ? index2.memoizedState : workInProgressHook.next) && (index2 = index2.alternate, ReactSharedInternals.H = null === index2 || null === index2.memoizedState ? HooksDispatcherOnMount : HooksDispatcherOnUpdate);
	  return thenable;
	}
	function use(usable) {
	  if (null !== usable && "object" === typeof usable) {
	    if ("function" === typeof usable.then) return useThenable(usable);
	    if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
	  }
	  throw Error(formatProdErrorMessage(438, String(usable)));
	}
	function useMemoCache(size) {
	  var memoCache = null, updateQueue = currentlyRenderingFiber$1.updateQueue;
	  null !== updateQueue && (memoCache = updateQueue.memoCache);
	  if (null == memoCache) {
	    var current = currentlyRenderingFiber$1.alternate;
	    null !== current && (current = current.updateQueue, null !== current && (current = current.memoCache, null != current && (memoCache = {
	      data: current.data.map(function(array) {
	        return array.slice();
	      }),
	      index: 0
	    })));
	  }
	  null == memoCache && (memoCache = { data: [], index: 0 });
	  null === updateQueue && (updateQueue = createFunctionComponentUpdateQueue(), currentlyRenderingFiber$1.updateQueue = updateQueue);
	  updateQueue.memoCache = memoCache;
	  updateQueue = memoCache.data[memoCache.index];
	  if (void 0 === updateQueue)
	    for (updateQueue = memoCache.data[memoCache.index] = Array(size), current = 0; current < size; current++)
	      updateQueue[current] = REACT_MEMO_CACHE_SENTINEL;
	  memoCache.index++;
	  return updateQueue;
	}
	function basicStateReducer(state, action) {
	  return "function" === typeof action ? action(state) : action;
	}
	function updateReducer(reducer) {
	  var hook = updateWorkInProgressHook();
	  return updateReducerImpl(hook, currentHook, reducer);
	}
	function updateReducerImpl(hook, current, reducer) {
	  var queue = hook.queue;
	  if (null === queue) throw Error(formatProdErrorMessage(311));
	  queue.lastRenderedReducer = reducer;
	  var baseQueue = hook.baseQueue, pendingQueue = queue.pending;
	  if (null !== pendingQueue) {
	    if (null !== baseQueue) {
	      var baseFirst = baseQueue.next;
	      baseQueue.next = pendingQueue.next;
	      pendingQueue.next = baseFirst;
	    }
	    current.baseQueue = baseQueue = pendingQueue;
	    queue.pending = null;
	  }
	  pendingQueue = hook.baseState;
	  if (null === baseQueue) hook.memoizedState = pendingQueue;
	  else {
	    current = baseQueue.next;
	    var newBaseQueueFirst = baseFirst = null, newBaseQueueLast = null, update = current, didReadFromEntangledAsyncAction$54 = false;
	    do {
	      var updateLane = update.lane & -536870913;
	      if (updateLane !== update.lane ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes & updateLane) === updateLane) {
	        var revertLane = update.revertLane;
	        if (0 === revertLane)
	          null !== newBaseQueueLast && (newBaseQueueLast = newBaseQueueLast.next = {
	            lane: 0,
	            revertLane: 0,
	            action: update.action,
	            hasEagerState: update.hasEagerState,
	            eagerState: update.eagerState,
	            next: null
	          }), updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction$54 = true);
	        else if ((renderLanes & revertLane) === revertLane) {
	          update = update.next;
	          revertLane === currentEntangledLane && (didReadFromEntangledAsyncAction$54 = true);
	          continue;
	        } else
	          updateLane = {
	            lane: 0,
	            revertLane: update.revertLane,
	            action: update.action,
	            hasEagerState: update.hasEagerState,
	            eagerState: update.eagerState,
	            next: null
	          }, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = updateLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = updateLane, currentlyRenderingFiber$1.lanes |= revertLane, workInProgressRootSkippedLanes |= revertLane;
	        updateLane = update.action;
	        shouldDoubleInvokeUserFnsInHooksDEV && reducer(pendingQueue, updateLane);
	        pendingQueue = update.hasEagerState ? update.eagerState : reducer(pendingQueue, updateLane);
	      } else
	        revertLane = {
	          lane: updateLane,
	          revertLane: update.revertLane,
	          action: update.action,
	          hasEagerState: update.hasEagerState,
	          eagerState: update.eagerState,
	          next: null
	        }, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = revertLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = revertLane, currentlyRenderingFiber$1.lanes |= updateLane, workInProgressRootSkippedLanes |= updateLane;
	      update = update.next;
	    } while (null !== update && update !== current);
	    null === newBaseQueueLast ? baseFirst = pendingQueue : newBaseQueueLast.next = newBaseQueueFirst;
	    if (!objectIs(pendingQueue, hook.memoizedState) && (didReceiveUpdate = true, didReadFromEntangledAsyncAction$54 && (reducer = currentEntangledActionThenable, null !== reducer)))
	      throw reducer;
	    hook.memoizedState = pendingQueue;
	    hook.baseState = baseFirst;
	    hook.baseQueue = newBaseQueueLast;
	    queue.lastRenderedState = pendingQueue;
	  }
	  null === baseQueue && (queue.lanes = 0);
	  return [hook.memoizedState, queue.dispatch];
	}
	function rerenderReducer(reducer) {
	  var hook = updateWorkInProgressHook(), queue = hook.queue;
	  if (null === queue) throw Error(formatProdErrorMessage(311));
	  queue.lastRenderedReducer = reducer;
	  var dispatch = queue.dispatch, lastRenderPhaseUpdate = queue.pending, newState = hook.memoizedState;
	  if (null !== lastRenderPhaseUpdate) {
	    queue.pending = null;
	    var update = lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
	    do
	      newState = reducer(newState, update.action), update = update.next;
	    while (update !== lastRenderPhaseUpdate);
	    objectIs(newState, hook.memoizedState) || (didReceiveUpdate = true);
	    hook.memoizedState = newState;
	    null === hook.baseQueue && (hook.baseState = newState);
	    queue.lastRenderedState = newState;
	  }
	  return [newState, dispatch];
	}
	function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
	  var fiber = currentlyRenderingFiber$1, hook = updateWorkInProgressHook(), isHydrating$jscomp$0 = isHydrating;
	  if (isHydrating$jscomp$0) {
	    if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
	    getServerSnapshot = getServerSnapshot();
	  } else getServerSnapshot = getSnapshot();
	  var snapshotChanged = !objectIs(
	    (currentHook || hook).memoizedState,
	    getServerSnapshot
	  );
	  snapshotChanged && (hook.memoizedState = getServerSnapshot, didReceiveUpdate = true);
	  hook = hook.queue;
	  updateEffect(subscribeToStore.bind(null, fiber, hook, subscribe), [
	    subscribe
	  ]);
	  if (hook.getSnapshot !== getSnapshot || snapshotChanged || null !== workInProgressHook && workInProgressHook.memoizedState.tag & 1) {
	    fiber.flags |= 2048;
	    pushEffect(
	      9,
	      updateStoreInstance.bind(
	        null,
	        fiber,
	        hook,
	        getServerSnapshot,
	        getSnapshot
	      ),
	      { destroy: void 0 },
	      null
	    );
	    if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
	    isHydrating$jscomp$0 || 0 !== (renderLanes & 60) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
	  }
	  return getServerSnapshot;
	}
	function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
	  fiber.flags |= 16384;
	  fiber = { getSnapshot, value: renderedSnapshot };
	  getSnapshot = currentlyRenderingFiber$1.updateQueue;
	  null === getSnapshot ? (getSnapshot = createFunctionComponentUpdateQueue(), currentlyRenderingFiber$1.updateQueue = getSnapshot, getSnapshot.stores = [fiber]) : (renderedSnapshot = getSnapshot.stores, null === renderedSnapshot ? getSnapshot.stores = [fiber] : renderedSnapshot.push(fiber));
	}
	function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
	  inst.value = nextSnapshot;
	  inst.getSnapshot = getSnapshot;
	  checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
	}
	function subscribeToStore(fiber, inst, subscribe) {
	  return subscribe(function() {
	    checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
	  });
	}
	function checkIfSnapshotChanged(inst) {
	  var latestGetSnapshot = inst.getSnapshot;
	  inst = inst.value;
	  try {
	    var nextValue = latestGetSnapshot();
	    return !objectIs(inst, nextValue);
	  } catch (error) {
	    return true;
	  }
	}
	function forceStoreRerender(fiber) {
	  var root2 = enqueueConcurrentRenderForLane(fiber, 2);
	  null !== root2 && scheduleUpdateOnFiber(root2, fiber, 2);
	}
	function mountStateImpl(initialState) {
	  var hook = mountWorkInProgressHook();
	  if ("function" === typeof initialState) {
	    var initialStateInitializer = initialState;
	    initialState = initialStateInitializer();
	    if (shouldDoubleInvokeUserFnsInHooksDEV) {
	      setIsStrictModeForDevtools(true);
	      try {
	        initialStateInitializer();
	      } finally {
	        setIsStrictModeForDevtools(false);
	      }
	    }
	  }
	  hook.memoizedState = hook.baseState = initialState;
	  hook.queue = {
	    pending: null,
	    lanes: 0,
	    dispatch: null,
	    lastRenderedReducer: basicStateReducer,
	    lastRenderedState: initialState
	  };
	  return hook;
	}
	function updateOptimisticImpl(hook, current, passthrough, reducer) {
	  hook.baseState = passthrough;
	  return updateReducerImpl(
	    hook,
	    currentHook,
	    "function" === typeof reducer ? reducer : basicStateReducer
	  );
	}
	function dispatchActionState(fiber, actionQueue, setPendingState, setState, payload) {
	  if (isRenderPhaseUpdate(fiber)) throw Error(formatProdErrorMessage(485));
	  fiber = actionQueue.action;
	  if (null !== fiber) {
	    var actionNode = {
	      payload,
	      action: fiber,
	      next: null,
	      isTransition: true,
	      status: "pending",
	      value: null,
	      reason: null,
	      listeners: [],
	      then: function(listener) {
	        actionNode.listeners.push(listener);
	      }
	    };
	    null !== ReactSharedInternals.T ? setPendingState(true) : actionNode.isTransition = false;
	    setState(actionNode);
	    setPendingState = actionQueue.pending;
	    null === setPendingState ? (actionNode.next = actionQueue.pending = actionNode, runActionStateAction(actionQueue, actionNode)) : (actionNode.next = setPendingState.next, actionQueue.pending = setPendingState.next = actionNode);
	  }
	}
	function runActionStateAction(actionQueue, node) {
	  var action = node.action, payload = node.payload, prevState = actionQueue.state;
	  if (node.isTransition) {
	    var prevTransition = ReactSharedInternals.T, currentTransition = {};
	    ReactSharedInternals.T = currentTransition;
	    try {
	      var returnValue = action(prevState, payload), onStartTransitionFinish = ReactSharedInternals.S;
	      null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
	      handleActionReturnValue(actionQueue, node, returnValue);
	    } catch (error) {
	      onActionError(actionQueue, node, error);
	    } finally {
	      ReactSharedInternals.T = prevTransition;
	    }
	  } else
	    try {
	      prevTransition = action(prevState, payload), handleActionReturnValue(actionQueue, node, prevTransition);
	    } catch (error$60) {
	      onActionError(actionQueue, node, error$60);
	    }
	}
	function handleActionReturnValue(actionQueue, node, returnValue) {
	  null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then ? returnValue.then(
	    function(nextState) {
	      onActionSuccess(actionQueue, node, nextState);
	    },
	    function(error) {
	      return onActionError(actionQueue, node, error);
	    }
	  ) : onActionSuccess(actionQueue, node, returnValue);
	}
	function onActionSuccess(actionQueue, actionNode, nextState) {
	  actionNode.status = "fulfilled";
	  actionNode.value = nextState;
	  notifyActionListeners(actionNode);
	  actionQueue.state = nextState;
	  actionNode = actionQueue.pending;
	  null !== actionNode && (nextState = actionNode.next, nextState === actionNode ? actionQueue.pending = null : (nextState = nextState.next, actionNode.next = nextState, runActionStateAction(actionQueue, nextState)));
	}
	function onActionError(actionQueue, actionNode, error) {
	  var last = actionQueue.pending;
	  actionQueue.pending = null;
	  if (null !== last) {
	    last = last.next;
	    do
	      actionNode.status = "rejected", actionNode.reason = error, notifyActionListeners(actionNode), actionNode = actionNode.next;
	    while (actionNode !== last);
	  }
	  actionQueue.action = null;
	}
	function notifyActionListeners(actionNode) {
	  actionNode = actionNode.listeners;
	  for (var i = 0; i < actionNode.length; i++) (0, actionNode[i])();
	}
	function actionStateReducer(oldState, newState) {
	  return newState;
	}
	function mountActionState(action, initialStateProp) {
	  if (isHydrating) {
	    var ssrFormState = workInProgressRoot.formState;
	    if (null !== ssrFormState) {
	      a: {
	        var JSCompiler_inline_result = currentlyRenderingFiber$1;
	        if (isHydrating) {
	          if (nextHydratableInstance) {
	            b: {
	              var JSCompiler_inline_result$jscomp$0 = nextHydratableInstance;
	              for (var inRootOrSingleton = rootOrSingletonContext; 8 !== JSCompiler_inline_result$jscomp$0.nodeType; ) {
	                if (!inRootOrSingleton) {
	                  JSCompiler_inline_result$jscomp$0 = null;
	                  break b;
	                }
	                JSCompiler_inline_result$jscomp$0 = getNextHydratable(
	                  JSCompiler_inline_result$jscomp$0.nextSibling
	                );
	                if (null === JSCompiler_inline_result$jscomp$0) {
	                  JSCompiler_inline_result$jscomp$0 = null;
	                  break b;
	                }
	              }
	              inRootOrSingleton = JSCompiler_inline_result$jscomp$0.data;
	              JSCompiler_inline_result$jscomp$0 = "F!" === inRootOrSingleton || "F" === inRootOrSingleton ? JSCompiler_inline_result$jscomp$0 : null;
	            }
	            if (JSCompiler_inline_result$jscomp$0) {
	              nextHydratableInstance = getNextHydratable(
	                JSCompiler_inline_result$jscomp$0.nextSibling
	              );
	              JSCompiler_inline_result = "F!" === JSCompiler_inline_result$jscomp$0.data;
	              break a;
	            }
	          }
	          throwOnHydrationMismatch(JSCompiler_inline_result);
	        }
	        JSCompiler_inline_result = false;
	      }
	      JSCompiler_inline_result && (initialStateProp = ssrFormState[0]);
	    }
	  }
	  ssrFormState = mountWorkInProgressHook();
	  ssrFormState.memoizedState = ssrFormState.baseState = initialStateProp;
	  JSCompiler_inline_result = {
	    pending: null,
	    lanes: 0,
	    dispatch: null,
	    lastRenderedReducer: actionStateReducer,
	    lastRenderedState: initialStateProp
	  };
	  ssrFormState.queue = JSCompiler_inline_result;
	  ssrFormState = dispatchSetState.bind(
	    null,
	    currentlyRenderingFiber$1,
	    JSCompiler_inline_result
	  );
	  JSCompiler_inline_result.dispatch = ssrFormState;
	  JSCompiler_inline_result = mountStateImpl(false);
	  inRootOrSingleton = dispatchOptimisticSetState.bind(
	    null,
	    currentlyRenderingFiber$1,
	    false,
	    JSCompiler_inline_result.queue
	  );
	  JSCompiler_inline_result = mountWorkInProgressHook();
	  JSCompiler_inline_result$jscomp$0 = {
	    state: initialStateProp,
	    dispatch: null,
	    action,
	    pending: null
	  };
	  JSCompiler_inline_result.queue = JSCompiler_inline_result$jscomp$0;
	  ssrFormState = dispatchActionState.bind(
	    null,
	    currentlyRenderingFiber$1,
	    JSCompiler_inline_result$jscomp$0,
	    inRootOrSingleton,
	    ssrFormState
	  );
	  JSCompiler_inline_result$jscomp$0.dispatch = ssrFormState;
	  JSCompiler_inline_result.memoizedState = action;
	  return [initialStateProp, ssrFormState, false];
	}
	function updateActionState(action) {
	  var stateHook = updateWorkInProgressHook();
	  return updateActionStateImpl(stateHook, currentHook, action);
	}
	function updateActionStateImpl(stateHook, currentStateHook, action) {
	  currentStateHook = updateReducerImpl(
	    stateHook,
	    currentStateHook,
	    actionStateReducer
	  )[0];
	  stateHook = updateReducer(basicStateReducer)[0];
	  currentStateHook = "object" === typeof currentStateHook && null !== currentStateHook && "function" === typeof currentStateHook.then ? useThenable(currentStateHook) : currentStateHook;
	  var actionQueueHook = updateWorkInProgressHook(), actionQueue = actionQueueHook.queue, dispatch = actionQueue.dispatch;
	  action !== actionQueueHook.memoizedState && (currentlyRenderingFiber$1.flags |= 2048, pushEffect(
	    9,
	    actionStateActionEffect.bind(null, actionQueue, action),
	    { destroy: void 0 },
	    null
	  ));
	  return [currentStateHook, dispatch, stateHook];
	}
	function actionStateActionEffect(actionQueue, action) {
	  actionQueue.action = action;
	}
	function rerenderActionState(action) {
	  var stateHook = updateWorkInProgressHook(), currentStateHook = currentHook;
	  if (null !== currentStateHook)
	    return updateActionStateImpl(stateHook, currentStateHook, action);
	  updateWorkInProgressHook();
	  stateHook = stateHook.memoizedState;
	  currentStateHook = updateWorkInProgressHook();
	  var dispatch = currentStateHook.queue.dispatch;
	  currentStateHook.memoizedState = action;
	  return [stateHook, dispatch, false];
	}
	function pushEffect(tag, create, inst, deps) {
	  tag = { tag, create, inst, deps, next: null };
	  create = currentlyRenderingFiber$1.updateQueue;
	  null === create && (create = createFunctionComponentUpdateQueue(), currentlyRenderingFiber$1.updateQueue = create);
	  inst = create.lastEffect;
	  null === inst ? create.lastEffect = tag.next = tag : (deps = inst.next, inst.next = tag, tag.next = deps, create.lastEffect = tag);
	  return tag;
	}
	function updateRef() {
	  return updateWorkInProgressHook().memoizedState;
	}
	function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
	  var hook = mountWorkInProgressHook();
	  currentlyRenderingFiber$1.flags |= fiberFlags;
	  hook.memoizedState = pushEffect(
	    1 | hookFlags,
	    create,
	    { destroy: void 0 },
	    void 0 === deps ? null : deps
	  );
	}
	function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
	  var hook = updateWorkInProgressHook();
	  deps = void 0 === deps ? null : deps;
	  var inst = hook.memoizedState.inst;
	  null !== currentHook && null !== deps && areHookInputsEqual(deps, currentHook.memoizedState.deps) ? hook.memoizedState = pushEffect(hookFlags, create, inst, deps) : (currentlyRenderingFiber$1.flags |= fiberFlags, hook.memoizedState = pushEffect(1 | hookFlags, create, inst, deps));
	}
	function mountEffect(create, deps) {
	  mountEffectImpl(8390656, 8, create, deps);
	}
	function updateEffect(create, deps) {
	  updateEffectImpl(2048, 8, create, deps);
	}
	function updateInsertionEffect(create, deps) {
	  return updateEffectImpl(4, 2, create, deps);
	}
	function updateLayoutEffect(create, deps) {
	  return updateEffectImpl(4, 4, create, deps);
	}
	function imperativeHandleEffect(create, ref) {
	  if ("function" === typeof ref) {
	    create = create();
	    var refCleanup = ref(create);
	    return function() {
	      "function" === typeof refCleanup ? refCleanup() : ref(null);
	    };
	  }
	  if (null !== ref && void 0 !== ref)
	    return create = create(), ref.current = create, function() {
	      ref.current = null;
	    };
	}
	function updateImperativeHandle(ref, create, deps) {
	  deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
	  updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, create, ref), deps);
	}
	function mountDebugValue() {
	}
	function updateCallback(callback, deps) {
	  var hook = updateWorkInProgressHook();
	  deps = void 0 === deps ? null : deps;
	  var prevState = hook.memoizedState;
	  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
	    return prevState[0];
	  hook.memoizedState = [callback, deps];
	  return callback;
	}
	function updateMemo(nextCreate, deps) {
	  var hook = updateWorkInProgressHook();
	  deps = void 0 === deps ? null : deps;
	  var prevState = hook.memoizedState;
	  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
	    return prevState[0];
	  prevState = nextCreate();
	  if (shouldDoubleInvokeUserFnsInHooksDEV) {
	    setIsStrictModeForDevtools(true);
	    try {
	      nextCreate();
	    } finally {
	      setIsStrictModeForDevtools(false);
	    }
	  }
	  hook.memoizedState = [prevState, deps];
	  return prevState;
	}
	function mountDeferredValueImpl(hook, value, initialValue) {
	  if (void 0 === initialValue || 0 !== (renderLanes & 1073741824))
	    return hook.memoizedState = value;
	  hook.memoizedState = initialValue;
	  hook = requestDeferredLane();
	  currentlyRenderingFiber$1.lanes |= hook;
	  workInProgressRootSkippedLanes |= hook;
	  return initialValue;
	}
	function updateDeferredValueImpl(hook, prevValue, value, initialValue) {
	  if (objectIs(value, prevValue)) return value;
	  if (null !== currentTreeHiddenStackCursor.current)
	    return hook = mountDeferredValueImpl(hook, value, initialValue), objectIs(hook, prevValue) || (didReceiveUpdate = true), hook;
	  if (0 === (renderLanes & 42))
	    return didReceiveUpdate = true, hook.memoizedState = value;
	  hook = requestDeferredLane();
	  currentlyRenderingFiber$1.lanes |= hook;
	  workInProgressRootSkippedLanes |= hook;
	  return prevValue;
	}
	function startTransition(fiber, queue, pendingState, finishedState, callback) {
	  var previousPriority = ReactDOMSharedInternals.p;
	  ReactDOMSharedInternals.p = 0 !== previousPriority && 8 > previousPriority ? previousPriority : 8;
	  var prevTransition = ReactSharedInternals.T, currentTransition = {};
	  ReactSharedInternals.T = currentTransition;
	  dispatchOptimisticSetState(fiber, false, queue, pendingState);
	  try {
	    var returnValue = callback(), onStartTransitionFinish = ReactSharedInternals.S;
	    null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
	    if (null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then) {
	      var thenableForFinishedState = chainThenableValue(
	        returnValue,
	        finishedState
	      );
	      dispatchSetStateInternal(
	        fiber,
	        queue,
	        thenableForFinishedState,
	        requestUpdateLane(fiber)
	      );
	    } else
	      dispatchSetStateInternal(
	        fiber,
	        queue,
	        finishedState,
	        requestUpdateLane(fiber)
	      );
	  } catch (error) {
	    dispatchSetStateInternal(
	      fiber,
	      queue,
	      { then: function() {
	      }, status: "rejected", reason: error },
	      requestUpdateLane()
	    );
	  } finally {
	    ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
	  }
	}
	function noop$2() {
	}
	function startHostTransition(formFiber, pendingState, action, formData) {
	  if (5 !== formFiber.tag) throw Error(formatProdErrorMessage(476));
	  var queue = ensureFormComponentIsStateful(formFiber).queue;
	  startTransition(
	    formFiber,
	    queue,
	    pendingState,
	    sharedNotPendingObject,
	    null === action ? noop$2 : function() {
	      requestFormReset$1(formFiber);
	      return action(formData);
	    }
	  );
	}
	function ensureFormComponentIsStateful(formFiber) {
	  var existingStateHook = formFiber.memoizedState;
	  if (null !== existingStateHook) return existingStateHook;
	  existingStateHook = {
	    memoizedState: sharedNotPendingObject,
	    baseState: sharedNotPendingObject,
	    baseQueue: null,
	    queue: {
	      pending: null,
	      lanes: 0,
	      dispatch: null,
	      lastRenderedReducer: basicStateReducer,
	      lastRenderedState: sharedNotPendingObject
	    },
	    next: null
	  };
	  var initialResetState = {};
	  existingStateHook.next = {
	    memoizedState: initialResetState,
	    baseState: initialResetState,
	    baseQueue: null,
	    queue: {
	      pending: null,
	      lanes: 0,
	      dispatch: null,
	      lastRenderedReducer: basicStateReducer,
	      lastRenderedState: initialResetState
	    },
	    next: null
	  };
	  formFiber.memoizedState = existingStateHook;
	  formFiber = formFiber.alternate;
	  null !== formFiber && (formFiber.memoizedState = existingStateHook);
	  return existingStateHook;
	}
	function requestFormReset$1(formFiber) {
	  var resetStateQueue = ensureFormComponentIsStateful(formFiber).next.queue;
	  dispatchSetStateInternal(formFiber, resetStateQueue, {}, requestUpdateLane());
	}
	function useHostTransitionStatus() {
	  return readContext(HostTransitionContext);
	}
	function updateId() {
	  return updateWorkInProgressHook().memoizedState;
	}
	function updateRefresh() {
	  return updateWorkInProgressHook().memoizedState;
	}
	function refreshCache(fiber) {
	  for (var provider = fiber.return; null !== provider; ) {
	    switch (provider.tag) {
	      case 24:
	      case 3:
	        var lane = requestUpdateLane();
	        fiber = createUpdate(lane);
	        var root$63 = enqueueUpdate(provider, fiber, lane);
	        null !== root$63 && (scheduleUpdateOnFiber(root$63, provider, lane), entangleTransitions(root$63, provider, lane));
	        provider = { cache: createCache() };
	        fiber.payload = provider;
	        return;
	    }
	    provider = provider.return;
	  }
	}
	function dispatchReducerAction(fiber, queue, action) {
	  var lane = requestUpdateLane();
	  action = {
	    lane,
	    revertLane: 0,
	    action,
	    hasEagerState: false,
	    eagerState: null,
	    next: null
	  };
	  isRenderPhaseUpdate(fiber) ? enqueueRenderPhaseUpdate(queue, action) : (action = enqueueConcurrentHookUpdate(fiber, queue, action, lane), null !== action && (scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane)));
	}
	function dispatchSetState(fiber, queue, action) {
	  var lane = requestUpdateLane();
	  dispatchSetStateInternal(fiber, queue, action, lane);
	}
	function dispatchSetStateInternal(fiber, queue, action, lane) {
	  var update = {
	    lane,
	    revertLane: 0,
	    action,
	    hasEagerState: false,
	    eagerState: null,
	    next: null
	  };
	  if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
	  else {
	    var alternate = fiber.alternate;
	    if (0 === fiber.lanes && (null === alternate || 0 === alternate.lanes) && (alternate = queue.lastRenderedReducer, null !== alternate))
	      try {
	        var currentState = queue.lastRenderedState, eagerState = alternate(currentState, action);
	        update.hasEagerState = true;
	        update.eagerState = eagerState;
	        if (objectIs(eagerState, currentState))
	          return enqueueUpdate$1(fiber, queue, update, 0), null === workInProgressRoot && finishQueueingConcurrentUpdates(), false;
	      } catch (error) {
	      } finally {
	      }
	    action = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
	    if (null !== action)
	      return scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane), true;
	  }
	  return false;
	}
	function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
	  action = {
	    lane: 2,
	    revertLane: requestTransitionLane(),
	    action,
	    hasEagerState: false,
	    eagerState: null,
	    next: null
	  };
	  if (isRenderPhaseUpdate(fiber)) {
	    if (throwIfDuringRender) throw Error(formatProdErrorMessage(479));
	  } else
	    throwIfDuringRender = enqueueConcurrentHookUpdate(
	      fiber,
	      queue,
	      action,
	      2
	    ), null !== throwIfDuringRender && scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2);
	}
	function isRenderPhaseUpdate(fiber) {
	  var alternate = fiber.alternate;
	  return fiber === currentlyRenderingFiber$1 || null !== alternate && alternate === currentlyRenderingFiber$1;
	}
	function enqueueRenderPhaseUpdate(queue, update) {
	  didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = true;
	  var pending = queue.pending;
	  null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
	  queue.pending = update;
	}
	function entangleTransitionUpdate(root2, queue, lane) {
	  if (0 !== (lane & 4194176)) {
	    var queueLanes = queue.lanes;
	    queueLanes &= root2.pendingLanes;
	    lane |= queueLanes;
	    queue.lanes = lane;
	    markRootEntangled(root2, lane);
	  }
	}
	var ContextOnlyDispatcher = {
	  readContext,
	  use,
	  useCallback: throwInvalidHookError,
	  useContext: throwInvalidHookError,
	  useEffect: throwInvalidHookError,
	  useImperativeHandle: throwInvalidHookError,
	  useLayoutEffect: throwInvalidHookError,
	  useInsertionEffect: throwInvalidHookError,
	  useMemo: throwInvalidHookError,
	  useReducer: throwInvalidHookError,
	  useRef: throwInvalidHookError,
	  useState: throwInvalidHookError,
	  useDebugValue: throwInvalidHookError,
	  useDeferredValue: throwInvalidHookError,
	  useTransition: throwInvalidHookError,
	  useSyncExternalStore: throwInvalidHookError,
	  useId: throwInvalidHookError
	};
	ContextOnlyDispatcher.useCacheRefresh = throwInvalidHookError;
	ContextOnlyDispatcher.useMemoCache = throwInvalidHookError;
	ContextOnlyDispatcher.useHostTransitionStatus = throwInvalidHookError;
	ContextOnlyDispatcher.useFormState = throwInvalidHookError;
	ContextOnlyDispatcher.useActionState = throwInvalidHookError;
	ContextOnlyDispatcher.useOptimistic = throwInvalidHookError;
	var HooksDispatcherOnMount = {
	  readContext,
	  use,
	  useCallback: function(callback, deps) {
	    mountWorkInProgressHook().memoizedState = [
	      callback,
	      void 0 === deps ? null : deps
	    ];
	    return callback;
	  },
	  useContext: readContext,
	  useEffect: mountEffect,
	  useImperativeHandle: function(ref, create, deps) {
	    deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
	    mountEffectImpl(
	      4194308,
	      4,
	      imperativeHandleEffect.bind(null, create, ref),
	      deps
	    );
	  },
	  useLayoutEffect: function(create, deps) {
	    return mountEffectImpl(4194308, 4, create, deps);
	  },
	  useInsertionEffect: function(create, deps) {
	    mountEffectImpl(4, 2, create, deps);
	  },
	  useMemo: function(nextCreate, deps) {
	    var hook = mountWorkInProgressHook();
	    deps = void 0 === deps ? null : deps;
	    var nextValue = nextCreate();
	    if (shouldDoubleInvokeUserFnsInHooksDEV) {
	      setIsStrictModeForDevtools(true);
	      try {
	        nextCreate();
	      } finally {
	        setIsStrictModeForDevtools(false);
	      }
	    }
	    hook.memoizedState = [nextValue, deps];
	    return nextValue;
	  },
	  useReducer: function(reducer, initialArg, init) {
	    var hook = mountWorkInProgressHook();
	    if (void 0 !== init) {
	      var initialState = init(initialArg);
	      if (shouldDoubleInvokeUserFnsInHooksDEV) {
	        setIsStrictModeForDevtools(true);
	        try {
	          init(initialArg);
	        } finally {
	          setIsStrictModeForDevtools(false);
	        }
	      }
	    } else initialState = initialArg;
	    hook.memoizedState = hook.baseState = initialState;
	    reducer = {
	      pending: null,
	      lanes: 0,
	      dispatch: null,
	      lastRenderedReducer: reducer,
	      lastRenderedState: initialState
	    };
	    hook.queue = reducer;
	    reducer = reducer.dispatch = dispatchReducerAction.bind(
	      null,
	      currentlyRenderingFiber$1,
	      reducer
	    );
	    return [hook.memoizedState, reducer];
	  },
	  useRef: function(initialValue) {
	    var hook = mountWorkInProgressHook();
	    initialValue = { current: initialValue };
	    return hook.memoizedState = initialValue;
	  },
	  useState: function(initialState) {
	    initialState = mountStateImpl(initialState);
	    var queue = initialState.queue, dispatch = dispatchSetState.bind(null, currentlyRenderingFiber$1, queue);
	    queue.dispatch = dispatch;
	    return [initialState.memoizedState, dispatch];
	  },
	  useDebugValue: mountDebugValue,
	  useDeferredValue: function(value, initialValue) {
	    var hook = mountWorkInProgressHook();
	    return mountDeferredValueImpl(hook, value, initialValue);
	  },
	  useTransition: function() {
	    var stateHook = mountStateImpl(false);
	    stateHook = startTransition.bind(
	      null,
	      currentlyRenderingFiber$1,
	      stateHook.queue,
	      true,
	      false
	    );
	    mountWorkInProgressHook().memoizedState = stateHook;
	    return [false, stateHook];
	  },
	  useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
	    var fiber = currentlyRenderingFiber$1, hook = mountWorkInProgressHook();
	    if (isHydrating) {
	      if (void 0 === getServerSnapshot)
	        throw Error(formatProdErrorMessage(407));
	      getServerSnapshot = getServerSnapshot();
	    } else {
	      getServerSnapshot = getSnapshot();
	      if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
	      0 !== (workInProgressRootRenderLanes & 60) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
	    }
	    hook.memoizedState = getServerSnapshot;
	    var inst = { value: getServerSnapshot, getSnapshot };
	    hook.queue = inst;
	    mountEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [
	      subscribe
	    ]);
	    fiber.flags |= 2048;
	    pushEffect(
	      9,
	      updateStoreInstance.bind(
	        null,
	        fiber,
	        inst,
	        getServerSnapshot,
	        getSnapshot
	      ),
	      { destroy: void 0 },
	      null
	    );
	    return getServerSnapshot;
	  },
	  useId: function() {
	    var hook = mountWorkInProgressHook(), identifierPrefix = workInProgressRoot.identifierPrefix;
	    if (isHydrating) {
	      var JSCompiler_inline_result = treeContextOverflow;
	      var idWithLeadingBit = treeContextId;
	      JSCompiler_inline_result = (idWithLeadingBit & ~(1 << 32 - clz32(idWithLeadingBit) - 1)).toString(32) + JSCompiler_inline_result;
	      identifierPrefix = ":" + identifierPrefix + "R" + JSCompiler_inline_result;
	      JSCompiler_inline_result = localIdCounter++;
	      0 < JSCompiler_inline_result && (identifierPrefix += "H" + JSCompiler_inline_result.toString(32));
	      identifierPrefix += ":";
	    } else
	      JSCompiler_inline_result = globalClientIdCounter++, identifierPrefix = ":" + identifierPrefix + "r" + JSCompiler_inline_result.toString(32) + ":";
	    return hook.memoizedState = identifierPrefix;
	  },
	  useCacheRefresh: function() {
	    return mountWorkInProgressHook().memoizedState = refreshCache.bind(
	      null,
	      currentlyRenderingFiber$1
	    );
	  }
	};
	HooksDispatcherOnMount.useMemoCache = useMemoCache;
	HooksDispatcherOnMount.useHostTransitionStatus = useHostTransitionStatus;
	HooksDispatcherOnMount.useFormState = mountActionState;
	HooksDispatcherOnMount.useActionState = mountActionState;
	HooksDispatcherOnMount.useOptimistic = function(passthrough) {
	  var hook = mountWorkInProgressHook();
	  hook.memoizedState = hook.baseState = passthrough;
	  var queue = {
	    pending: null,
	    lanes: 0,
	    dispatch: null,
	    lastRenderedReducer: null,
	    lastRenderedState: null
	  };
	  hook.queue = queue;
	  hook = dispatchOptimisticSetState.bind(
	    null,
	    currentlyRenderingFiber$1,
	    true,
	    queue
	  );
	  queue.dispatch = hook;
	  return [passthrough, hook];
	};
	var HooksDispatcherOnUpdate = {
	  readContext,
	  use,
	  useCallback: updateCallback,
	  useContext: readContext,
	  useEffect: updateEffect,
	  useImperativeHandle: updateImperativeHandle,
	  useInsertionEffect: updateInsertionEffect,
	  useLayoutEffect: updateLayoutEffect,
	  useMemo: updateMemo,
	  useReducer: updateReducer,
	  useRef: updateRef,
	  useState: function() {
	    return updateReducer(basicStateReducer);
	  },
	  useDebugValue: mountDebugValue,
	  useDeferredValue: function(value, initialValue) {
	    var hook = updateWorkInProgressHook();
	    return updateDeferredValueImpl(
	      hook,
	      currentHook.memoizedState,
	      value,
	      initialValue
	    );
	  },
	  useTransition: function() {
	    var booleanOrThenable = updateReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
	    return [
	      "boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable),
	      start
	    ];
	  },
	  useSyncExternalStore: updateSyncExternalStore,
	  useId: updateId
	};
	HooksDispatcherOnUpdate.useCacheRefresh = updateRefresh;
	HooksDispatcherOnUpdate.useMemoCache = useMemoCache;
	HooksDispatcherOnUpdate.useHostTransitionStatus = useHostTransitionStatus;
	HooksDispatcherOnUpdate.useFormState = updateActionState;
	HooksDispatcherOnUpdate.useActionState = updateActionState;
	HooksDispatcherOnUpdate.useOptimistic = function(passthrough, reducer) {
	  var hook = updateWorkInProgressHook();
	  return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
	};
	var HooksDispatcherOnRerender = {
	  readContext,
	  use,
	  useCallback: updateCallback,
	  useContext: readContext,
	  useEffect: updateEffect,
	  useImperativeHandle: updateImperativeHandle,
	  useInsertionEffect: updateInsertionEffect,
	  useLayoutEffect: updateLayoutEffect,
	  useMemo: updateMemo,
	  useReducer: rerenderReducer,
	  useRef: updateRef,
	  useState: function() {
	    return rerenderReducer(basicStateReducer);
	  },
	  useDebugValue: mountDebugValue,
	  useDeferredValue: function(value, initialValue) {
	    var hook = updateWorkInProgressHook();
	    return null === currentHook ? mountDeferredValueImpl(hook, value, initialValue) : updateDeferredValueImpl(
	      hook,
	      currentHook.memoizedState,
	      value,
	      initialValue
	    );
	  },
	  useTransition: function() {
	    var booleanOrThenable = rerenderReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
	    return [
	      "boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable),
	      start
	    ];
	  },
	  useSyncExternalStore: updateSyncExternalStore,
	  useId: updateId
	};
	HooksDispatcherOnRerender.useCacheRefresh = updateRefresh;
	HooksDispatcherOnRerender.useMemoCache = useMemoCache;
	HooksDispatcherOnRerender.useHostTransitionStatus = useHostTransitionStatus;
	HooksDispatcherOnRerender.useFormState = rerenderActionState;
	HooksDispatcherOnRerender.useActionState = rerenderActionState;
	HooksDispatcherOnRerender.useOptimistic = function(passthrough, reducer) {
	  var hook = updateWorkInProgressHook();
	  if (null !== currentHook)
	    return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
	  hook.baseState = passthrough;
	  return [passthrough, hook.queue.dispatch];
	};
	function applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, nextProps) {
	  ctor = workInProgress2.memoizedState;
	  getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
	  getDerivedStateFromProps = null === getDerivedStateFromProps || void 0 === getDerivedStateFromProps ? ctor : assign({}, ctor, getDerivedStateFromProps);
	  workInProgress2.memoizedState = getDerivedStateFromProps;
	  0 === workInProgress2.lanes && (workInProgress2.updateQueue.baseState = getDerivedStateFromProps);
	}
	var classComponentUpdater = {
	  isMounted: function(component) {
	    return (component = component._reactInternals) ? getNearestMountedFiber(component) === component : false;
	  },
	  enqueueSetState: function(inst, payload, callback) {
	    inst = inst._reactInternals;
	    var lane = requestUpdateLane(), update = createUpdate(lane);
	    update.payload = payload;
	    void 0 !== callback && null !== callback && (update.callback = callback);
	    payload = enqueueUpdate(inst, update, lane);
	    null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
	  },
	  enqueueReplaceState: function(inst, payload, callback) {
	    inst = inst._reactInternals;
	    var lane = requestUpdateLane(), update = createUpdate(lane);
	    update.tag = 1;
	    update.payload = payload;
	    void 0 !== callback && null !== callback && (update.callback = callback);
	    payload = enqueueUpdate(inst, update, lane);
	    null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
	  },
	  enqueueForceUpdate: function(inst, callback) {
	    inst = inst._reactInternals;
	    var lane = requestUpdateLane(), update = createUpdate(lane);
	    update.tag = 2;
	    void 0 !== callback && null !== callback && (update.callback = callback);
	    callback = enqueueUpdate(inst, update, lane);
	    null !== callback && (scheduleUpdateOnFiber(callback, inst, lane), entangleTransitions(callback, inst, lane));
	  }
	};
	function checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext) {
	  workInProgress2 = workInProgress2.stateNode;
	  return "function" === typeof workInProgress2.shouldComponentUpdate ? workInProgress2.shouldComponentUpdate(newProps, newState, nextContext) : ctor.prototype && ctor.prototype.isPureReactComponent ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState) : true;
	}
	function callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext) {
	  workInProgress2 = instance.state;
	  "function" === typeof instance.componentWillReceiveProps && instance.componentWillReceiveProps(newProps, nextContext);
	  "function" === typeof instance.UNSAFE_componentWillReceiveProps && instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
	  instance.state !== workInProgress2 && classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
	}
	function resolveClassComponentProps(Component, baseProps) {
	  var newProps = baseProps;
	  if ("ref" in baseProps) {
	    newProps = {};
	    for (var propName in baseProps)
	      "ref" !== propName && (newProps[propName] = baseProps[propName]);
	  }
	  if (Component = Component.defaultProps) {
	    newProps === baseProps && (newProps = assign({}, newProps));
	    for (var propName$67 in Component)
	      void 0 === newProps[propName$67] && (newProps[propName$67] = Component[propName$67]);
	  }
	  return newProps;
	}
	var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
	  if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
	    var event = new window.ErrorEvent("error", {
	      bubbles: true,
	      cancelable: true,
	      message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
	      error
	    });
	    if (!window.dispatchEvent(event)) return;
	  } else if ("object" === typeof process$1 && "function" === typeof process$1.emit) {
	    process$1.emit("uncaughtException", error);
	    return;
	  }
	  console.error(error);
	};
	function defaultOnUncaughtError(error) {
	  reportGlobalError(error);
	}
	function defaultOnCaughtError(error) {
	  console.error(error);
	}
	function defaultOnRecoverableError(error) {
	  reportGlobalError(error);
	}
	function logUncaughtError(root2, errorInfo) {
	  try {
	    var onUncaughtError = root2.onUncaughtError;
	    onUncaughtError(errorInfo.value, { componentStack: errorInfo.stack });
	  } catch (e$68) {
	    setTimeout(function() {
	      throw e$68;
	    });
	  }
	}
	function logCaughtError(root2, boundary, errorInfo) {
	  try {
	    var onCaughtError = root2.onCaughtError;
	    onCaughtError(errorInfo.value, {
	      componentStack: errorInfo.stack,
	      errorBoundary: 1 === boundary.tag ? boundary.stateNode : null
	    });
	  } catch (e$69) {
	    setTimeout(function() {
	      throw e$69;
	    });
	  }
	}
	function createRootErrorUpdate(root2, errorInfo, lane) {
	  lane = createUpdate(lane);
	  lane.tag = 3;
	  lane.payload = { element: null };
	  lane.callback = function() {
	    logUncaughtError(root2, errorInfo);
	  };
	  return lane;
	}
	function createClassErrorUpdate(lane) {
	  lane = createUpdate(lane);
	  lane.tag = 3;
	  return lane;
	}
	function initializeClassErrorUpdate(update, root2, fiber, errorInfo) {
	  var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
	  if ("function" === typeof getDerivedStateFromError) {
	    var error = errorInfo.value;
	    update.payload = function() {
	      return getDerivedStateFromError(error);
	    };
	    update.callback = function() {
	      logCaughtError(root2, fiber, errorInfo);
	    };
	  }
	  var inst = fiber.stateNode;
	  null !== inst && "function" === typeof inst.componentDidCatch && (update.callback = function() {
	    logCaughtError(root2, fiber, errorInfo);
	    "function" !== typeof getDerivedStateFromError && (null === legacyErrorBoundariesThatAlreadyFailed ? legacyErrorBoundariesThatAlreadyFailed = /* @__PURE__ */ new Set([this]) : legacyErrorBoundariesThatAlreadyFailed.add(this));
	    var stack = errorInfo.stack;
	    this.componentDidCatch(errorInfo.value, {
	      componentStack: null !== stack ? stack : ""
	    });
	  });
	}
	function throwException(root2, returnFiber, sourceFiber, value, rootRenderLanes) {
	  sourceFiber.flags |= 32768;
	  if (null !== value && "object" === typeof value && "function" === typeof value.then) {
	    returnFiber = sourceFiber.alternate;
	    null !== returnFiber && propagateParentContextChanges(
	      returnFiber,
	      sourceFiber,
	      rootRenderLanes,
	      true
	    );
	    sourceFiber = suspenseHandlerStackCursor.current;
	    if (null !== sourceFiber) {
	      switch (sourceFiber.tag) {
	        case 13:
	          return null === shellBoundary ? renderDidSuspendDelayIfPossible() : null === sourceFiber.alternate && 0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 3), sourceFiber.flags &= -257, sourceFiber.flags |= 65536, sourceFiber.lanes = rootRenderLanes, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? sourceFiber.updateQueue = /* @__PURE__ */ new Set([value]) : returnFiber.add(value), attachPingListener(root2, value, rootRenderLanes)), false;
	        case 22:
	          return sourceFiber.flags |= 65536, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? (returnFiber = {
	            transitions: null,
	            markerInstances: null,
	            retryQueue: /* @__PURE__ */ new Set([value])
	          }, sourceFiber.updateQueue = returnFiber) : (sourceFiber = returnFiber.retryQueue, null === sourceFiber ? returnFiber.retryQueue = /* @__PURE__ */ new Set([value]) : sourceFiber.add(value)), attachPingListener(root2, value, rootRenderLanes)), false;
	      }
	      throw Error(formatProdErrorMessage(435, sourceFiber.tag));
	    }
	    attachPingListener(root2, value, rootRenderLanes);
	    renderDidSuspendDelayIfPossible();
	    return false;
	  }
	  if (isHydrating)
	    return returnFiber = suspenseHandlerStackCursor.current, null !== returnFiber ? (0 === (returnFiber.flags & 65536) && (returnFiber.flags |= 256), returnFiber.flags |= 65536, returnFiber.lanes = rootRenderLanes, value !== HydrationMismatchException && (root2 = Error(formatProdErrorMessage(422), { cause: value }), queueHydrationError(createCapturedValueAtFiber(root2, sourceFiber)))) : (value !== HydrationMismatchException && (returnFiber = Error(formatProdErrorMessage(423), {
	      cause: value
	    }), queueHydrationError(
	      createCapturedValueAtFiber(returnFiber, sourceFiber)
	    )), root2 = root2.current.alternate, root2.flags |= 65536, rootRenderLanes &= -rootRenderLanes, root2.lanes |= rootRenderLanes, value = createCapturedValueAtFiber(value, sourceFiber), rootRenderLanes = createRootErrorUpdate(
	      root2.stateNode,
	      value,
	      rootRenderLanes
	    ), enqueueCapturedUpdate(root2, rootRenderLanes), 4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2)), false;
	  var wrapperError = Error(formatProdErrorMessage(520), { cause: value });
	  wrapperError = createCapturedValueAtFiber(wrapperError, sourceFiber);
	  null === workInProgressRootConcurrentErrors ? workInProgressRootConcurrentErrors = [wrapperError] : workInProgressRootConcurrentErrors.push(wrapperError);
	  4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2);
	  if (null === returnFiber) return true;
	  value = createCapturedValueAtFiber(value, sourceFiber);
	  sourceFiber = returnFiber;
	  do {
	    switch (sourceFiber.tag) {
	      case 3:
	        return sourceFiber.flags |= 65536, root2 = rootRenderLanes & -rootRenderLanes, sourceFiber.lanes |= root2, root2 = createRootErrorUpdate(sourceFiber.stateNode, value, root2), enqueueCapturedUpdate(sourceFiber, root2), false;
	      case 1:
	        if (returnFiber = sourceFiber.type, wrapperError = sourceFiber.stateNode, 0 === (sourceFiber.flags & 128) && ("function" === typeof returnFiber.getDerivedStateFromError || null !== wrapperError && "function" === typeof wrapperError.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(wrapperError))))
	          return sourceFiber.flags |= 65536, rootRenderLanes &= -rootRenderLanes, sourceFiber.lanes |= rootRenderLanes, rootRenderLanes = createClassErrorUpdate(rootRenderLanes), initializeClassErrorUpdate(
	            rootRenderLanes,
	            root2,
	            sourceFiber,
	            value
	          ), enqueueCapturedUpdate(sourceFiber, rootRenderLanes), false;
	    }
	    sourceFiber = sourceFiber.return;
	  } while (null !== sourceFiber);
	  return false;
	}
	var SelectiveHydrationException = Error(formatProdErrorMessage(461)), didReceiveUpdate = false;
	function reconcileChildren(current, workInProgress2, nextChildren, renderLanes2) {
	  workInProgress2.child = null === current ? mountChildFibers(workInProgress2, null, nextChildren, renderLanes2) : reconcileChildFibers(
	    workInProgress2,
	    current.child,
	    nextChildren,
	    renderLanes2
	  );
	}
	function updateForwardRef(current, workInProgress2, Component, nextProps, renderLanes2) {
	  Component = Component.render;
	  var ref = workInProgress2.ref;
	  if ("ref" in nextProps) {
	    var propsWithoutRef = {};
	    for (var key in nextProps)
	      "ref" !== key && (propsWithoutRef[key] = nextProps[key]);
	  } else propsWithoutRef = nextProps;
	  prepareToReadContext(workInProgress2);
	  nextProps = renderWithHooks(
	    current,
	    workInProgress2,
	    Component,
	    propsWithoutRef,
	    ref,
	    renderLanes2
	  );
	  key = checkDidRenderIdHook();
	  if (null !== current && !didReceiveUpdate)
	    return bailoutHooks(current, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
	  isHydrating && key && pushMaterializedTreeId(workInProgress2);
	  workInProgress2.flags |= 1;
	  reconcileChildren(current, workInProgress2, nextProps, renderLanes2);
	  return workInProgress2.child;
	}
	function updateMemoComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
	  if (null === current) {
	    var type = Component.type;
	    if ("function" === typeof type && !shouldConstruct(type) && void 0 === type.defaultProps && null === Component.compare)
	      return workInProgress2.tag = 15, workInProgress2.type = type, updateSimpleMemoComponent(
	        current,
	        workInProgress2,
	        type,
	        nextProps,
	        renderLanes2
	      );
	    current = createFiberFromTypeAndProps(
	      Component.type,
	      null,
	      nextProps,
	      workInProgress2,
	      workInProgress2.mode,
	      renderLanes2
	    );
	    current.ref = workInProgress2.ref;
	    current.return = workInProgress2;
	    return workInProgress2.child = current;
	  }
	  type = current.child;
	  if (!checkScheduledUpdateOrContext(current, renderLanes2)) {
	    var prevProps = type.memoizedProps;
	    Component = Component.compare;
	    Component = null !== Component ? Component : shallowEqual;
	    if (Component(prevProps, nextProps) && current.ref === workInProgress2.ref)
	      return bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
	  }
	  workInProgress2.flags |= 1;
	  current = createWorkInProgress(type, nextProps);
	  current.ref = workInProgress2.ref;
	  current.return = workInProgress2;
	  return workInProgress2.child = current;
	}
	function updateSimpleMemoComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
	  if (null !== current) {
	    var prevProps = current.memoizedProps;
	    if (shallowEqual(prevProps, nextProps) && current.ref === workInProgress2.ref)
	      if (didReceiveUpdate = false, workInProgress2.pendingProps = nextProps = prevProps, checkScheduledUpdateOrContext(current, renderLanes2))
	        0 !== (current.flags & 131072) && (didReceiveUpdate = true);
	      else
	        return workInProgress2.lanes = current.lanes, bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
	  }
	  return updateFunctionComponent(
	    current,
	    workInProgress2,
	    Component,
	    nextProps,
	    renderLanes2
	  );
	}
	function updateOffscreenComponent(current, workInProgress2, renderLanes2) {
	  var nextProps = workInProgress2.pendingProps, nextChildren = nextProps.children, nextIsDetached = 0 !== (workInProgress2.stateNode._pendingVisibility & 2), prevState = null !== current ? current.memoizedState : null;
	  markRef(current, workInProgress2);
	  if ("hidden" === nextProps.mode || nextIsDetached) {
	    if (0 !== (workInProgress2.flags & 128)) {
	      nextProps = null !== prevState ? prevState.baseLanes | renderLanes2 : renderLanes2;
	      if (null !== current) {
	        nextChildren = workInProgress2.child = current.child;
	        for (nextIsDetached = 0; null !== nextChildren; )
	          nextIsDetached = nextIsDetached | nextChildren.lanes | nextChildren.childLanes, nextChildren = nextChildren.sibling;
	        workInProgress2.childLanes = nextIsDetached & ~nextProps;
	      } else workInProgress2.childLanes = 0, workInProgress2.child = null;
	      return deferHiddenOffscreenComponent(
	        current,
	        workInProgress2,
	        nextProps,
	        renderLanes2
	      );
	    }
	    if (0 !== (renderLanes2 & 536870912))
	      workInProgress2.memoizedState = { baseLanes: 0, cachePool: null }, null !== current && pushTransition(
	        workInProgress2,
	        null !== prevState ? prevState.cachePool : null
	      ), null !== prevState ? pushHiddenContext(workInProgress2, prevState) : reuseHiddenContextOnStack(), pushOffscreenSuspenseHandler(workInProgress2);
	    else
	      return workInProgress2.lanes = workInProgress2.childLanes = 536870912, deferHiddenOffscreenComponent(
	        current,
	        workInProgress2,
	        null !== prevState ? prevState.baseLanes | renderLanes2 : renderLanes2,
	        renderLanes2
	      );
	  } else
	    null !== prevState ? (pushTransition(workInProgress2, prevState.cachePool), pushHiddenContext(workInProgress2, prevState), reuseSuspenseHandlerOnStack(), workInProgress2.memoizedState = null) : (null !== current && pushTransition(workInProgress2, null), reuseHiddenContextOnStack(), reuseSuspenseHandlerOnStack());
	  reconcileChildren(current, workInProgress2, nextChildren, renderLanes2);
	  return workInProgress2.child;
	}
	function deferHiddenOffscreenComponent(current, workInProgress2, nextBaseLanes, renderLanes2) {
	  var JSCompiler_inline_result = peekCacheFromPool();
	  JSCompiler_inline_result = null === JSCompiler_inline_result ? null : { parent: CacheContext._currentValue, pool: JSCompiler_inline_result };
	  workInProgress2.memoizedState = {
	    baseLanes: nextBaseLanes,
	    cachePool: JSCompiler_inline_result
	  };
	  null !== current && pushTransition(workInProgress2, null);
	  reuseHiddenContextOnStack();
	  pushOffscreenSuspenseHandler(workInProgress2);
	  null !== current && propagateParentContextChanges(current, workInProgress2, renderLanes2, true);
	  return null;
	}
	function markRef(current, workInProgress2) {
	  var ref = workInProgress2.ref;
	  if (null === ref)
	    null !== current && null !== current.ref && (workInProgress2.flags |= 2097664);
	  else {
	    if ("function" !== typeof ref && "object" !== typeof ref)
	      throw Error(formatProdErrorMessage(284));
	    if (null === current || current.ref !== ref)
	      workInProgress2.flags |= 2097664;
	  }
	}
	function updateFunctionComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
	  prepareToReadContext(workInProgress2);
	  Component = renderWithHooks(
	    current,
	    workInProgress2,
	    Component,
	    nextProps,
	    void 0,
	    renderLanes2
	  );
	  nextProps = checkDidRenderIdHook();
	  if (null !== current && !didReceiveUpdate)
	    return bailoutHooks(current, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
	  isHydrating && nextProps && pushMaterializedTreeId(workInProgress2);
	  workInProgress2.flags |= 1;
	  reconcileChildren(current, workInProgress2, Component, renderLanes2);
	  return workInProgress2.child;
	}
	function replayFunctionComponent(current, workInProgress2, nextProps, Component, secondArg, renderLanes2) {
	  prepareToReadContext(workInProgress2);
	  workInProgress2.updateQueue = null;
	  nextProps = renderWithHooksAgain(
	    workInProgress2,
	    Component,
	    nextProps,
	    secondArg
	  );
	  finishRenderingHooks(current);
	  Component = checkDidRenderIdHook();
	  if (null !== current && !didReceiveUpdate)
	    return bailoutHooks(current, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
	  isHydrating && Component && pushMaterializedTreeId(workInProgress2);
	  workInProgress2.flags |= 1;
	  reconcileChildren(current, workInProgress2, nextProps, renderLanes2);
	  return workInProgress2.child;
	}
	function updateClassComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
	  prepareToReadContext(workInProgress2);
	  if (null === workInProgress2.stateNode) {
	    var context = emptyContextObject, contextType = Component.contextType;
	    "object" === typeof contextType && null !== contextType && (context = readContext(contextType));
	    context = new Component(nextProps, context);
	    workInProgress2.memoizedState = null !== context.state && void 0 !== context.state ? context.state : null;
	    context.updater = classComponentUpdater;
	    workInProgress2.stateNode = context;
	    context._reactInternals = workInProgress2;
	    context = workInProgress2.stateNode;
	    context.props = nextProps;
	    context.state = workInProgress2.memoizedState;
	    context.refs = {};
	    initializeUpdateQueue(workInProgress2);
	    contextType = Component.contextType;
	    context.context = "object" === typeof contextType && null !== contextType ? readContext(contextType) : emptyContextObject;
	    context.state = workInProgress2.memoizedState;
	    contextType = Component.getDerivedStateFromProps;
	    "function" === typeof contextType && (applyDerivedStateFromProps(
	      workInProgress2,
	      Component,
	      contextType,
	      nextProps
	    ), context.state = workInProgress2.memoizedState);
	    "function" === typeof Component.getDerivedStateFromProps || "function" === typeof context.getSnapshotBeforeUpdate || "function" !== typeof context.UNSAFE_componentWillMount && "function" !== typeof context.componentWillMount || (contextType = context.state, "function" === typeof context.componentWillMount && context.componentWillMount(), "function" === typeof context.UNSAFE_componentWillMount && context.UNSAFE_componentWillMount(), contextType !== context.state && classComponentUpdater.enqueueReplaceState(context, context.state, null), processUpdateQueue(workInProgress2, nextProps, context, renderLanes2), suspendIfUpdateReadFromEntangledAsyncAction(), context.state = workInProgress2.memoizedState);
	    "function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308);
	    nextProps = true;
	  } else if (null === current) {
	    context = workInProgress2.stateNode;
	    var unresolvedOldProps = workInProgress2.memoizedProps, oldProps = resolveClassComponentProps(Component, unresolvedOldProps);
	    context.props = oldProps;
	    var oldContext = context.context, contextType$jscomp$0 = Component.contextType;
	    contextType = emptyContextObject;
	    "object" === typeof contextType$jscomp$0 && null !== contextType$jscomp$0 && (contextType = readContext(contextType$jscomp$0));
	    var getDerivedStateFromProps = Component.getDerivedStateFromProps;
	    contextType$jscomp$0 = "function" === typeof getDerivedStateFromProps || "function" === typeof context.getSnapshotBeforeUpdate;
	    unresolvedOldProps = workInProgress2.pendingProps !== unresolvedOldProps;
	    contextType$jscomp$0 || "function" !== typeof context.UNSAFE_componentWillReceiveProps && "function" !== typeof context.componentWillReceiveProps || (unresolvedOldProps || oldContext !== contextType) && callComponentWillReceiveProps(
	      workInProgress2,
	      context,
	      nextProps,
	      contextType
	    );
	    hasForceUpdate = false;
	    var oldState = workInProgress2.memoizedState;
	    context.state = oldState;
	    processUpdateQueue(workInProgress2, nextProps, context, renderLanes2);
	    suspendIfUpdateReadFromEntangledAsyncAction();
	    oldContext = workInProgress2.memoizedState;
	    unresolvedOldProps || oldState !== oldContext || hasForceUpdate ? ("function" === typeof getDerivedStateFromProps && (applyDerivedStateFromProps(
	      workInProgress2,
	      Component,
	      getDerivedStateFromProps,
	      nextProps
	    ), oldContext = workInProgress2.memoizedState), (oldProps = hasForceUpdate || checkShouldComponentUpdate(
	      workInProgress2,
	      Component,
	      oldProps,
	      nextProps,
	      oldState,
	      oldContext,
	      contextType
	    )) ? (contextType$jscomp$0 || "function" !== typeof context.UNSAFE_componentWillMount && "function" !== typeof context.componentWillMount || ("function" === typeof context.componentWillMount && context.componentWillMount(), "function" === typeof context.UNSAFE_componentWillMount && context.UNSAFE_componentWillMount()), "function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308)) : ("function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308), workInProgress2.memoizedProps = nextProps, workInProgress2.memoizedState = oldContext), context.props = nextProps, context.state = oldContext, context.context = contextType, nextProps = oldProps) : ("function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308), nextProps = false);
	  } else {
	    context = workInProgress2.stateNode;
	    cloneUpdateQueue(current, workInProgress2);
	    contextType = workInProgress2.memoizedProps;
	    contextType$jscomp$0 = resolveClassComponentProps(Component, contextType);
	    context.props = contextType$jscomp$0;
	    getDerivedStateFromProps = workInProgress2.pendingProps;
	    oldState = context.context;
	    oldContext = Component.contextType;
	    oldProps = emptyContextObject;
	    "object" === typeof oldContext && null !== oldContext && (oldProps = readContext(oldContext));
	    unresolvedOldProps = Component.getDerivedStateFromProps;
	    (oldContext = "function" === typeof unresolvedOldProps || "function" === typeof context.getSnapshotBeforeUpdate) || "function" !== typeof context.UNSAFE_componentWillReceiveProps && "function" !== typeof context.componentWillReceiveProps || (contextType !== getDerivedStateFromProps || oldState !== oldProps) && callComponentWillReceiveProps(
	      workInProgress2,
	      context,
	      nextProps,
	      oldProps
	    );
	    hasForceUpdate = false;
	    oldState = workInProgress2.memoizedState;
	    context.state = oldState;
	    processUpdateQueue(workInProgress2, nextProps, context, renderLanes2);
	    suspendIfUpdateReadFromEntangledAsyncAction();
	    var newState = workInProgress2.memoizedState;
	    contextType !== getDerivedStateFromProps || oldState !== newState || hasForceUpdate || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies) ? ("function" === typeof unresolvedOldProps && (applyDerivedStateFromProps(
	      workInProgress2,
	      Component,
	      unresolvedOldProps,
	      nextProps
	    ), newState = workInProgress2.memoizedState), (contextType$jscomp$0 = hasForceUpdate || checkShouldComponentUpdate(
	      workInProgress2,
	      Component,
	      contextType$jscomp$0,
	      nextProps,
	      oldState,
	      newState,
	      oldProps
	    ) || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies)) ? (oldContext || "function" !== typeof context.UNSAFE_componentWillUpdate && "function" !== typeof context.componentWillUpdate || ("function" === typeof context.componentWillUpdate && context.componentWillUpdate(nextProps, newState, oldProps), "function" === typeof context.UNSAFE_componentWillUpdate && context.UNSAFE_componentWillUpdate(
	      nextProps,
	      newState,
	      oldProps
	    )), "function" === typeof context.componentDidUpdate && (workInProgress2.flags |= 4), "function" === typeof context.getSnapshotBeforeUpdate && (workInProgress2.flags |= 1024)) : ("function" !== typeof context.componentDidUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 4), "function" !== typeof context.getSnapshotBeforeUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 1024), workInProgress2.memoizedProps = nextProps, workInProgress2.memoizedState = newState), context.props = nextProps, context.state = newState, context.context = oldProps, nextProps = contextType$jscomp$0) : ("function" !== typeof context.componentDidUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 4), "function" !== typeof context.getSnapshotBeforeUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 1024), nextProps = false);
	  }
	  context = nextProps;
	  markRef(current, workInProgress2);
	  nextProps = 0 !== (workInProgress2.flags & 128);
	  context || nextProps ? (context = workInProgress2.stateNode, Component = nextProps && "function" !== typeof Component.getDerivedStateFromError ? null : context.render(), workInProgress2.flags |= 1, null !== current && nextProps ? (workInProgress2.child = reconcileChildFibers(
	    workInProgress2,
	    current.child,
	    null,
	    renderLanes2
	  ), workInProgress2.child = reconcileChildFibers(
	    workInProgress2,
	    null,
	    Component,
	    renderLanes2
	  )) : reconcileChildren(current, workInProgress2, Component, renderLanes2), workInProgress2.memoizedState = context.state, current = workInProgress2.child) : current = bailoutOnAlreadyFinishedWork(
	    current,
	    workInProgress2,
	    renderLanes2
	  );
	  return current;
	}
	function mountHostRootWithoutHydrating(current, workInProgress2, nextChildren, renderLanes2) {
	  resetHydrationState();
	  workInProgress2.flags |= 256;
	  reconcileChildren(current, workInProgress2, nextChildren, renderLanes2);
	  return workInProgress2.child;
	}
	var SUSPENDED_MARKER = { dehydrated: null, treeContext: null, retryLane: 0 };
	function mountSuspenseOffscreenState(renderLanes2) {
	  return { baseLanes: renderLanes2, cachePool: getSuspendedCache() };
	}
	function getRemainingWorkInPrimaryTree(current, primaryTreeDidDefer, renderLanes2) {
	  current = null !== current ? current.childLanes & ~renderLanes2 : 0;
	  primaryTreeDidDefer && (current |= workInProgressDeferredLane);
	  return current;
	}
	function updateSuspenseComponent(current, workInProgress2, renderLanes2) {
	  var nextProps = workInProgress2.pendingProps, showFallback = false, didSuspend = 0 !== (workInProgress2.flags & 128), JSCompiler_temp;
	  (JSCompiler_temp = didSuspend) || (JSCompiler_temp = null !== current && null === current.memoizedState ? false : 0 !== (suspenseStackCursor.current & 2));
	  JSCompiler_temp && (showFallback = true, workInProgress2.flags &= -129);
	  JSCompiler_temp = 0 !== (workInProgress2.flags & 32);
	  workInProgress2.flags &= -33;
	  if (null === current) {
	    if (isHydrating) {
	      showFallback ? pushPrimaryTreeSuspenseHandler(workInProgress2) : reuseSuspenseHandlerOnStack();
	      if (isHydrating) {
	        var nextInstance = nextHydratableInstance, JSCompiler_temp$jscomp$0;
	        if (JSCompiler_temp$jscomp$0 = nextInstance) {
	          c: {
	            JSCompiler_temp$jscomp$0 = nextInstance;
	            for (nextInstance = rootOrSingletonContext; 8 !== JSCompiler_temp$jscomp$0.nodeType; ) {
	              if (!nextInstance) {
	                nextInstance = null;
	                break c;
	              }
	              JSCompiler_temp$jscomp$0 = getNextHydratable(
	                JSCompiler_temp$jscomp$0.nextSibling
	              );
	              if (null === JSCompiler_temp$jscomp$0) {
	                nextInstance = null;
	                break c;
	              }
	            }
	            nextInstance = JSCompiler_temp$jscomp$0;
	          }
	          null !== nextInstance ? (workInProgress2.memoizedState = {
	            dehydrated: nextInstance,
	            treeContext: null !== treeContextProvider ? { id: treeContextId, overflow: treeContextOverflow } : null,
	            retryLane: 536870912
	          }, JSCompiler_temp$jscomp$0 = createFiberImplClass(
	            18,
	            null,
	            null,
	            0
	          ), JSCompiler_temp$jscomp$0.stateNode = nextInstance, JSCompiler_temp$jscomp$0.return = workInProgress2, workInProgress2.child = JSCompiler_temp$jscomp$0, hydrationParentFiber = workInProgress2, nextHydratableInstance = null, JSCompiler_temp$jscomp$0 = true) : JSCompiler_temp$jscomp$0 = false;
	        }
	        JSCompiler_temp$jscomp$0 || throwOnHydrationMismatch(workInProgress2);
	      }
	      nextInstance = workInProgress2.memoizedState;
	      if (null !== nextInstance && (nextInstance = nextInstance.dehydrated, null !== nextInstance))
	        return "$!" === nextInstance.data ? workInProgress2.lanes = 16 : workInProgress2.lanes = 536870912, null;
	      popSuspenseHandler(workInProgress2);
	    }
	    nextInstance = nextProps.children;
	    nextProps = nextProps.fallback;
	    if (showFallback)
	      return reuseSuspenseHandlerOnStack(), showFallback = workInProgress2.mode, nextInstance = mountWorkInProgressOffscreenFiber(
	        { mode: "hidden", children: nextInstance },
	        showFallback
	      ), nextProps = createFiberFromFragment(
	        nextProps,
	        showFallback,
	        renderLanes2,
	        null
	      ), nextInstance.return = workInProgress2, nextProps.return = workInProgress2, nextInstance.sibling = nextProps, workInProgress2.child = nextInstance, showFallback = workInProgress2.child, showFallback.memoizedState = mountSuspenseOffscreenState(renderLanes2), showFallback.childLanes = getRemainingWorkInPrimaryTree(
	        current,
	        JSCompiler_temp,
	        renderLanes2
	      ), workInProgress2.memoizedState = SUSPENDED_MARKER, nextProps;
	    pushPrimaryTreeSuspenseHandler(workInProgress2);
	    return mountSuspensePrimaryChildren(workInProgress2, nextInstance);
	  }
	  JSCompiler_temp$jscomp$0 = current.memoizedState;
	  if (null !== JSCompiler_temp$jscomp$0 && (nextInstance = JSCompiler_temp$jscomp$0.dehydrated, null !== nextInstance)) {
	    if (didSuspend)
	      workInProgress2.flags & 256 ? (pushPrimaryTreeSuspenseHandler(workInProgress2), workInProgress2.flags &= -257, workInProgress2 = retrySuspenseComponentWithoutHydrating(
	        current,
	        workInProgress2,
	        renderLanes2
	      )) : null !== workInProgress2.memoizedState ? (reuseSuspenseHandlerOnStack(), workInProgress2.child = current.child, workInProgress2.flags |= 128, workInProgress2 = null) : (reuseSuspenseHandlerOnStack(), showFallback = nextProps.fallback, nextInstance = workInProgress2.mode, nextProps = mountWorkInProgressOffscreenFiber(
	        { mode: "visible", children: nextProps.children },
	        nextInstance
	      ), showFallback = createFiberFromFragment(
	        showFallback,
	        nextInstance,
	        renderLanes2,
	        null
	      ), showFallback.flags |= 2, nextProps.return = workInProgress2, showFallback.return = workInProgress2, nextProps.sibling = showFallback, workInProgress2.child = nextProps, reconcileChildFibers(
	        workInProgress2,
	        current.child,
	        null,
	        renderLanes2
	      ), nextProps = workInProgress2.child, nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes2), nextProps.childLanes = getRemainingWorkInPrimaryTree(
	        current,
	        JSCompiler_temp,
	        renderLanes2
	      ), workInProgress2.memoizedState = SUSPENDED_MARKER, workInProgress2 = showFallback);
	    else if (pushPrimaryTreeSuspenseHandler(workInProgress2), "$!" === nextInstance.data) {
	      JSCompiler_temp = nextInstance.nextSibling && nextInstance.nextSibling.dataset;
	      if (JSCompiler_temp) var digest = JSCompiler_temp.dgst;
	      JSCompiler_temp = digest;
	      nextProps = Error(formatProdErrorMessage(419));
	      nextProps.stack = "";
	      nextProps.digest = JSCompiler_temp;
	      queueHydrationError({ value: nextProps, source: null, stack: null });
	      workInProgress2 = retrySuspenseComponentWithoutHydrating(
	        current,
	        workInProgress2,
	        renderLanes2
	      );
	    } else if (didReceiveUpdate || propagateParentContextChanges(current, workInProgress2, renderLanes2, false), JSCompiler_temp = 0 !== (renderLanes2 & current.childLanes), didReceiveUpdate || JSCompiler_temp) {
	      JSCompiler_temp = workInProgressRoot;
	      if (null !== JSCompiler_temp) {
	        nextProps = renderLanes2 & -renderLanes2;
	        if (0 !== (nextProps & 42)) nextProps = 1;
	        else
	          switch (nextProps) {
	            case 2:
	              nextProps = 1;
	              break;
	            case 8:
	              nextProps = 4;
	              break;
	            case 32:
	              nextProps = 16;
	              break;
	            case 128:
	            case 256:
	            case 512:
	            case 1024:
	            case 2048:
	            case 4096:
	            case 8192:
	            case 16384:
	            case 32768:
	            case 65536:
	            case 131072:
	            case 262144:
	            case 524288:
	            case 1048576:
	            case 2097152:
	            case 4194304:
	            case 8388608:
	            case 16777216:
	            case 33554432:
	              nextProps = 64;
	              break;
	            case 268435456:
	              nextProps = 134217728;
	              break;
	            default:
	              nextProps = 0;
	          }
	        nextProps = 0 !== (nextProps & (JSCompiler_temp.suspendedLanes | renderLanes2)) ? 0 : nextProps;
	        if (0 !== nextProps && nextProps !== JSCompiler_temp$jscomp$0.retryLane)
	          throw JSCompiler_temp$jscomp$0.retryLane = nextProps, enqueueConcurrentRenderForLane(current, nextProps), scheduleUpdateOnFiber(JSCompiler_temp, current, nextProps), SelectiveHydrationException;
	      }
	      "$?" === nextInstance.data || renderDidSuspendDelayIfPossible();
	      workInProgress2 = retrySuspenseComponentWithoutHydrating(
	        current,
	        workInProgress2,
	        renderLanes2
	      );
	    } else
	      "$?" === nextInstance.data ? (workInProgress2.flags |= 128, workInProgress2.child = current.child, workInProgress2 = retryDehydratedSuspenseBoundary.bind(
	        null,
	        current
	      ), nextInstance._reactRetry = workInProgress2, workInProgress2 = null) : (current = JSCompiler_temp$jscomp$0.treeContext, nextHydratableInstance = getNextHydratable(
	        nextInstance.nextSibling
	      ), hydrationParentFiber = workInProgress2, isHydrating = true, hydrationErrors = null, rootOrSingletonContext = false, null !== current && (idStack[idStackIndex++] = treeContextId, idStack[idStackIndex++] = treeContextOverflow, idStack[idStackIndex++] = treeContextProvider, treeContextId = current.id, treeContextOverflow = current.overflow, treeContextProvider = workInProgress2), workInProgress2 = mountSuspensePrimaryChildren(
	        workInProgress2,
	        nextProps.children
	      ), workInProgress2.flags |= 4096);
	    return workInProgress2;
	  }
	  if (showFallback)
	    return reuseSuspenseHandlerOnStack(), showFallback = nextProps.fallback, nextInstance = workInProgress2.mode, JSCompiler_temp$jscomp$0 = current.child, digest = JSCompiler_temp$jscomp$0.sibling, nextProps = createWorkInProgress(JSCompiler_temp$jscomp$0, {
	      mode: "hidden",
	      children: nextProps.children
	    }), nextProps.subtreeFlags = JSCompiler_temp$jscomp$0.subtreeFlags & 31457280, null !== digest ? showFallback = createWorkInProgress(digest, showFallback) : (showFallback = createFiberFromFragment(
	      showFallback,
	      nextInstance,
	      renderLanes2,
	      null
	    ), showFallback.flags |= 2), showFallback.return = workInProgress2, nextProps.return = workInProgress2, nextProps.sibling = showFallback, workInProgress2.child = nextProps, nextProps = showFallback, showFallback = workInProgress2.child, nextInstance = current.child.memoizedState, null === nextInstance ? nextInstance = mountSuspenseOffscreenState(renderLanes2) : (JSCompiler_temp$jscomp$0 = nextInstance.cachePool, null !== JSCompiler_temp$jscomp$0 ? (digest = CacheContext._currentValue, JSCompiler_temp$jscomp$0 = JSCompiler_temp$jscomp$0.parent !== digest ? { parent: digest, pool: digest } : JSCompiler_temp$jscomp$0) : JSCompiler_temp$jscomp$0 = getSuspendedCache(), nextInstance = {
	      baseLanes: nextInstance.baseLanes | renderLanes2,
	      cachePool: JSCompiler_temp$jscomp$0
	    }), showFallback.memoizedState = nextInstance, showFallback.childLanes = getRemainingWorkInPrimaryTree(
	      current,
	      JSCompiler_temp,
	      renderLanes2
	    ), workInProgress2.memoizedState = SUSPENDED_MARKER, nextProps;
	  pushPrimaryTreeSuspenseHandler(workInProgress2);
	  renderLanes2 = current.child;
	  current = renderLanes2.sibling;
	  renderLanes2 = createWorkInProgress(renderLanes2, {
	    mode: "visible",
	    children: nextProps.children
	  });
	  renderLanes2.return = workInProgress2;
	  renderLanes2.sibling = null;
	  null !== current && (JSCompiler_temp = workInProgress2.deletions, null === JSCompiler_temp ? (workInProgress2.deletions = [current], workInProgress2.flags |= 16) : JSCompiler_temp.push(current));
	  workInProgress2.child = renderLanes2;
	  workInProgress2.memoizedState = null;
	  return renderLanes2;
	}
	function mountSuspensePrimaryChildren(workInProgress2, primaryChildren) {
	  primaryChildren = mountWorkInProgressOffscreenFiber(
	    { mode: "visible", children: primaryChildren },
	    workInProgress2.mode
	  );
	  primaryChildren.return = workInProgress2;
	  return workInProgress2.child = primaryChildren;
	}
	function mountWorkInProgressOffscreenFiber(offscreenProps, mode) {
	  return createFiberFromOffscreen(offscreenProps, mode, 0, null);
	}
	function retrySuspenseComponentWithoutHydrating(current, workInProgress2, renderLanes2) {
	  reconcileChildFibers(workInProgress2, current.child, null, renderLanes2);
	  current = mountSuspensePrimaryChildren(
	    workInProgress2,
	    workInProgress2.pendingProps.children
	  );
	  current.flags |= 2;
	  workInProgress2.memoizedState = null;
	  return current;
	}
	function scheduleSuspenseWorkOnFiber(fiber, renderLanes2, propagationRoot) {
	  fiber.lanes |= renderLanes2;
	  var alternate = fiber.alternate;
	  null !== alternate && (alternate.lanes |= renderLanes2);
	  scheduleContextWorkOnParentPath(fiber.return, renderLanes2, propagationRoot);
	}
	function initSuspenseListRenderState(workInProgress2, isBackwards, tail, lastContentRow, tailMode) {
	  var renderState = workInProgress2.memoizedState;
	  null === renderState ? workInProgress2.memoizedState = {
	    isBackwards,
	    rendering: null,
	    renderingStartTime: 0,
	    last: lastContentRow,
	    tail,
	    tailMode
	  } : (renderState.isBackwards = isBackwards, renderState.rendering = null, renderState.renderingStartTime = 0, renderState.last = lastContentRow, renderState.tail = tail, renderState.tailMode = tailMode);
	}
	function updateSuspenseListComponent(current, workInProgress2, renderLanes2) {
	  var nextProps = workInProgress2.pendingProps, revealOrder = nextProps.revealOrder, tailMode = nextProps.tail;
	  reconcileChildren(current, workInProgress2, nextProps.children, renderLanes2);
	  nextProps = suspenseStackCursor.current;
	  if (0 !== (nextProps & 2))
	    nextProps = nextProps & 1 | 2, workInProgress2.flags |= 128;
	  else {
	    if (null !== current && 0 !== (current.flags & 128))
	      a: for (current = workInProgress2.child; null !== current; ) {
	        if (13 === current.tag)
	          null !== current.memoizedState && scheduleSuspenseWorkOnFiber(current, renderLanes2, workInProgress2);
	        else if (19 === current.tag)
	          scheduleSuspenseWorkOnFiber(current, renderLanes2, workInProgress2);
	        else if (null !== current.child) {
	          current.child.return = current;
	          current = current.child;
	          continue;
	        }
	        if (current === workInProgress2) break a;
	        for (; null === current.sibling; ) {
	          if (null === current.return || current.return === workInProgress2)
	            break a;
	          current = current.return;
	        }
	        current.sibling.return = current.return;
	        current = current.sibling;
	      }
	    nextProps &= 1;
	  }
	  push(suspenseStackCursor, nextProps);
	  switch (revealOrder) {
	    case "forwards":
	      renderLanes2 = workInProgress2.child;
	      for (revealOrder = null; null !== renderLanes2; )
	        current = renderLanes2.alternate, null !== current && null === findFirstSuspended(current) && (revealOrder = renderLanes2), renderLanes2 = renderLanes2.sibling;
	      renderLanes2 = revealOrder;
	      null === renderLanes2 ? (revealOrder = workInProgress2.child, workInProgress2.child = null) : (revealOrder = renderLanes2.sibling, renderLanes2.sibling = null);
	      initSuspenseListRenderState(
	        workInProgress2,
	        false,
	        revealOrder,
	        renderLanes2,
	        tailMode
	      );
	      break;
	    case "backwards":
	      renderLanes2 = null;
	      revealOrder = workInProgress2.child;
	      for (workInProgress2.child = null; null !== revealOrder; ) {
	        current = revealOrder.alternate;
	        if (null !== current && null === findFirstSuspended(current)) {
	          workInProgress2.child = revealOrder;
	          break;
	        }
	        current = revealOrder.sibling;
	        revealOrder.sibling = renderLanes2;
	        renderLanes2 = revealOrder;
	        revealOrder = current;
	      }
	      initSuspenseListRenderState(
	        workInProgress2,
	        true,
	        renderLanes2,
	        null,
	        tailMode
	      );
	      break;
	    case "together":
	      initSuspenseListRenderState(workInProgress2, false, null, null, void 0);
	      break;
	    default:
	      workInProgress2.memoizedState = null;
	  }
	  return workInProgress2.child;
	}
	function bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2) {
	  null !== current && (workInProgress2.dependencies = current.dependencies);
	  workInProgressRootSkippedLanes |= workInProgress2.lanes;
	  if (0 === (renderLanes2 & workInProgress2.childLanes))
	    if (null !== current) {
	      if (propagateParentContextChanges(
	        current,
	        workInProgress2,
	        renderLanes2,
	        false
	      ), 0 === (renderLanes2 & workInProgress2.childLanes))
	        return null;
	    } else return null;
	  if (null !== current && workInProgress2.child !== current.child)
	    throw Error(formatProdErrorMessage(153));
	  if (null !== workInProgress2.child) {
	    current = workInProgress2.child;
	    renderLanes2 = createWorkInProgress(current, current.pendingProps);
	    workInProgress2.child = renderLanes2;
	    for (renderLanes2.return = workInProgress2; null !== current.sibling; )
	      current = current.sibling, renderLanes2 = renderLanes2.sibling = createWorkInProgress(current, current.pendingProps), renderLanes2.return = workInProgress2;
	    renderLanes2.sibling = null;
	  }
	  return workInProgress2.child;
	}
	function checkScheduledUpdateOrContext(current, renderLanes2) {
	  if (0 !== (current.lanes & renderLanes2)) return true;
	  current = current.dependencies;
	  return null !== current && checkIfContextChanged(current) ? true : false;
	}
	function attemptEarlyBailoutIfNoScheduledUpdate(current, workInProgress2, renderLanes2) {
	  switch (workInProgress2.tag) {
	    case 3:
	      pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
	      pushProvider(workInProgress2, CacheContext, current.memoizedState.cache);
	      resetHydrationState();
	      break;
	    case 27:
	    case 5:
	      pushHostContext(workInProgress2);
	      break;
	    case 4:
	      pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
	      break;
	    case 10:
	      pushProvider(
	        workInProgress2,
	        workInProgress2.type,
	        workInProgress2.memoizedProps.value
	      );
	      break;
	    case 13:
	      var state = workInProgress2.memoizedState;
	      if (null !== state) {
	        if (null !== state.dehydrated)
	          return pushPrimaryTreeSuspenseHandler(workInProgress2), workInProgress2.flags |= 128, null;
	        if (0 !== (renderLanes2 & workInProgress2.child.childLanes))
	          return updateSuspenseComponent(current, workInProgress2, renderLanes2);
	        pushPrimaryTreeSuspenseHandler(workInProgress2);
	        current = bailoutOnAlreadyFinishedWork(
	          current,
	          workInProgress2,
	          renderLanes2
	        );
	        return null !== current ? current.sibling : null;
	      }
	      pushPrimaryTreeSuspenseHandler(workInProgress2);
	      break;
	    case 19:
	      var didSuspendBefore = 0 !== (current.flags & 128);
	      state = 0 !== (renderLanes2 & workInProgress2.childLanes);
	      state || (propagateParentContextChanges(
	        current,
	        workInProgress2,
	        renderLanes2,
	        false
	      ), state = 0 !== (renderLanes2 & workInProgress2.childLanes));
	      if (didSuspendBefore) {
	        if (state)
	          return updateSuspenseListComponent(
	            current,
	            workInProgress2,
	            renderLanes2
	          );
	        workInProgress2.flags |= 128;
	      }
	      didSuspendBefore = workInProgress2.memoizedState;
	      null !== didSuspendBefore && (didSuspendBefore.rendering = null, didSuspendBefore.tail = null, didSuspendBefore.lastEffect = null);
	      push(suspenseStackCursor, suspenseStackCursor.current);
	      if (state) break;
	      else return null;
	    case 22:
	    case 23:
	      return workInProgress2.lanes = 0, updateOffscreenComponent(current, workInProgress2, renderLanes2);
	    case 24:
	      pushProvider(workInProgress2, CacheContext, current.memoizedState.cache);
	  }
	  return bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
	}
	function beginWork(current, workInProgress2, renderLanes2) {
	  if (null !== current)
	    if (current.memoizedProps !== workInProgress2.pendingProps)
	      didReceiveUpdate = true;
	    else {
	      if (!checkScheduledUpdateOrContext(current, renderLanes2) && 0 === (workInProgress2.flags & 128))
	        return didReceiveUpdate = false, attemptEarlyBailoutIfNoScheduledUpdate(
	          current,
	          workInProgress2,
	          renderLanes2
	        );
	      didReceiveUpdate = 0 !== (current.flags & 131072) ? true : false;
	    }
	  else
	    didReceiveUpdate = false, isHydrating && 0 !== (workInProgress2.flags & 1048576) && pushTreeId(workInProgress2, treeForkCount, workInProgress2.index);
	  workInProgress2.lanes = 0;
	  switch (workInProgress2.tag) {
	    case 16:
	      a: {
	        current = workInProgress2.pendingProps;
	        var lazyComponent = workInProgress2.elementType, init = lazyComponent._init;
	        lazyComponent = init(lazyComponent._payload);
	        workInProgress2.type = lazyComponent;
	        if ("function" === typeof lazyComponent)
	          shouldConstruct(lazyComponent) ? (current = resolveClassComponentProps(lazyComponent, current), workInProgress2.tag = 1, workInProgress2 = updateClassComponent(
	            null,
	            workInProgress2,
	            lazyComponent,
	            current,
	            renderLanes2
	          )) : (workInProgress2.tag = 0, workInProgress2 = updateFunctionComponent(
	            null,
	            workInProgress2,
	            lazyComponent,
	            current,
	            renderLanes2
	          ));
	        else {
	          if (void 0 !== lazyComponent && null !== lazyComponent) {
	            if (init = lazyComponent.$$typeof, init === REACT_FORWARD_REF_TYPE) {
	              workInProgress2.tag = 11;
	              workInProgress2 = updateForwardRef(
	                null,
	                workInProgress2,
	                lazyComponent,
	                current,
	                renderLanes2
	              );
	              break a;
	            } else if (init === REACT_MEMO_TYPE) {
	              workInProgress2.tag = 14;
	              workInProgress2 = updateMemoComponent(
	                null,
	                workInProgress2,
	                lazyComponent,
	                current,
	                renderLanes2
	              );
	              break a;
	            }
	          }
	          workInProgress2 = getComponentNameFromType(lazyComponent) || lazyComponent;
	          throw Error(formatProdErrorMessage(306, workInProgress2, ""));
	        }
	      }
	      return workInProgress2;
	    case 0:
	      return updateFunctionComponent(
	        current,
	        workInProgress2,
	        workInProgress2.type,
	        workInProgress2.pendingProps,
	        renderLanes2
	      );
	    case 1:
	      return lazyComponent = workInProgress2.type, init = resolveClassComponentProps(
	        lazyComponent,
	        workInProgress2.pendingProps
	      ), updateClassComponent(
	        current,
	        workInProgress2,
	        lazyComponent,
	        init,
	        renderLanes2
	      );
	    case 3:
	      a: {
	        pushHostContainer(
	          workInProgress2,
	          workInProgress2.stateNode.containerInfo
	        );
	        if (null === current) throw Error(formatProdErrorMessage(387));
	        var nextProps = workInProgress2.pendingProps;
	        init = workInProgress2.memoizedState;
	        lazyComponent = init.element;
	        cloneUpdateQueue(current, workInProgress2);
	        processUpdateQueue(workInProgress2, nextProps, null, renderLanes2);
	        var nextState = workInProgress2.memoizedState;
	        nextProps = nextState.cache;
	        pushProvider(workInProgress2, CacheContext, nextProps);
	        nextProps !== init.cache && propagateContextChanges(
	          workInProgress2,
	          [CacheContext],
	          renderLanes2,
	          true
	        );
	        suspendIfUpdateReadFromEntangledAsyncAction();
	        nextProps = nextState.element;
	        if (init.isDehydrated)
	          if (init = {
	            element: nextProps,
	            isDehydrated: false,
	            cache: nextState.cache
	          }, workInProgress2.updateQueue.baseState = init, workInProgress2.memoizedState = init, workInProgress2.flags & 256) {
	            workInProgress2 = mountHostRootWithoutHydrating(
	              current,
	              workInProgress2,
	              nextProps,
	              renderLanes2
	            );
	            break a;
	          } else if (nextProps !== lazyComponent) {
	            lazyComponent = createCapturedValueAtFiber(
	              Error(formatProdErrorMessage(424)),
	              workInProgress2
	            );
	            queueHydrationError(lazyComponent);
	            workInProgress2 = mountHostRootWithoutHydrating(
	              current,
	              workInProgress2,
	              nextProps,
	              renderLanes2
	            );
	            break a;
	          } else
	            for (nextHydratableInstance = getNextHydratable(
	              workInProgress2.stateNode.containerInfo.firstChild
	            ), hydrationParentFiber = workInProgress2, isHydrating = true, hydrationErrors = null, rootOrSingletonContext = true, renderLanes2 = mountChildFibers(
	              workInProgress2,
	              null,
	              nextProps,
	              renderLanes2
	            ), workInProgress2.child = renderLanes2; renderLanes2; )
	              renderLanes2.flags = renderLanes2.flags & -3 | 4096, renderLanes2 = renderLanes2.sibling;
	        else {
	          resetHydrationState();
	          if (nextProps === lazyComponent) {
	            workInProgress2 = bailoutOnAlreadyFinishedWork(
	              current,
	              workInProgress2,
	              renderLanes2
	            );
	            break a;
	          }
	          reconcileChildren(current, workInProgress2, nextProps, renderLanes2);
	        }
	        workInProgress2 = workInProgress2.child;
	      }
	      return workInProgress2;
	    case 26:
	      return markRef(current, workInProgress2), null === current ? (renderLanes2 = getResource(
	        workInProgress2.type,
	        null,
	        workInProgress2.pendingProps,
	        null
	      )) ? workInProgress2.memoizedState = renderLanes2 : isHydrating || (renderLanes2 = workInProgress2.type, current = workInProgress2.pendingProps, lazyComponent = getOwnerDocumentFromRootContainer(
	        rootInstanceStackCursor.current
	      ).createElement(renderLanes2), lazyComponent[internalInstanceKey] = workInProgress2, lazyComponent[internalPropsKey] = current, setInitialProperties(lazyComponent, renderLanes2, current), markNodeAsHoistable(lazyComponent), workInProgress2.stateNode = lazyComponent) : workInProgress2.memoizedState = getResource(
	        workInProgress2.type,
	        current.memoizedProps,
	        workInProgress2.pendingProps,
	        current.memoizedState
	      ), null;
	    case 27:
	      return pushHostContext(workInProgress2), null === current && isHydrating && (lazyComponent = workInProgress2.stateNode = resolveSingletonInstance(
	        workInProgress2.type,
	        workInProgress2.pendingProps,
	        rootInstanceStackCursor.current
	      ), hydrationParentFiber = workInProgress2, rootOrSingletonContext = true, nextHydratableInstance = getNextHydratable(
	        lazyComponent.firstChild
	      )), lazyComponent = workInProgress2.pendingProps.children, null !== current || isHydrating ? reconcileChildren(
	        current,
	        workInProgress2,
	        lazyComponent,
	        renderLanes2
	      ) : workInProgress2.child = reconcileChildFibers(
	        workInProgress2,
	        null,
	        lazyComponent,
	        renderLanes2
	      ), markRef(current, workInProgress2), workInProgress2.child;
	    case 5:
	      if (null === current && isHydrating) {
	        if (init = lazyComponent = nextHydratableInstance)
	          lazyComponent = canHydrateInstance(
	            lazyComponent,
	            workInProgress2.type,
	            workInProgress2.pendingProps,
	            rootOrSingletonContext
	          ), null !== lazyComponent ? (workInProgress2.stateNode = lazyComponent, hydrationParentFiber = workInProgress2, nextHydratableInstance = getNextHydratable(
	            lazyComponent.firstChild
	          ), rootOrSingletonContext = false, init = true) : init = false;
	        init || throwOnHydrationMismatch(workInProgress2);
	      }
	      pushHostContext(workInProgress2);
	      init = workInProgress2.type;
	      nextProps = workInProgress2.pendingProps;
	      nextState = null !== current ? current.memoizedProps : null;
	      lazyComponent = nextProps.children;
	      shouldSetTextContent(init, nextProps) ? lazyComponent = null : null !== nextState && shouldSetTextContent(init, nextState) && (workInProgress2.flags |= 32);
	      null !== workInProgress2.memoizedState && (init = renderWithHooks(
	        current,
	        workInProgress2,
	        TransitionAwareHostComponent,
	        null,
	        null,
	        renderLanes2
	      ), HostTransitionContext._currentValue = init);
	      markRef(current, workInProgress2);
	      reconcileChildren(current, workInProgress2, lazyComponent, renderLanes2);
	      return workInProgress2.child;
	    case 6:
	      if (null === current && isHydrating) {
	        if (current = renderLanes2 = nextHydratableInstance)
	          renderLanes2 = canHydrateTextInstance(
	            renderLanes2,
	            workInProgress2.pendingProps,
	            rootOrSingletonContext
	          ), null !== renderLanes2 ? (workInProgress2.stateNode = renderLanes2, hydrationParentFiber = workInProgress2, nextHydratableInstance = null, current = true) : current = false;
	        current || throwOnHydrationMismatch(workInProgress2);
	      }
	      return null;
	    case 13:
	      return updateSuspenseComponent(current, workInProgress2, renderLanes2);
	    case 4:
	      return pushHostContainer(
	        workInProgress2,
	        workInProgress2.stateNode.containerInfo
	      ), lazyComponent = workInProgress2.pendingProps, null === current ? workInProgress2.child = reconcileChildFibers(
	        workInProgress2,
	        null,
	        lazyComponent,
	        renderLanes2
	      ) : reconcileChildren(
	        current,
	        workInProgress2,
	        lazyComponent,
	        renderLanes2
	      ), workInProgress2.child;
	    case 11:
	      return updateForwardRef(
	        current,
	        workInProgress2,
	        workInProgress2.type,
	        workInProgress2.pendingProps,
	        renderLanes2
	      );
	    case 7:
	      return reconcileChildren(
	        current,
	        workInProgress2,
	        workInProgress2.pendingProps,
	        renderLanes2
	      ), workInProgress2.child;
	    case 8:
	      return reconcileChildren(
	        current,
	        workInProgress2,
	        workInProgress2.pendingProps.children,
	        renderLanes2
	      ), workInProgress2.child;
	    case 12:
	      return reconcileChildren(
	        current,
	        workInProgress2,
	        workInProgress2.pendingProps.children,
	        renderLanes2
	      ), workInProgress2.child;
	    case 10:
	      return lazyComponent = workInProgress2.pendingProps, pushProvider(workInProgress2, workInProgress2.type, lazyComponent.value), reconcileChildren(
	        current,
	        workInProgress2,
	        lazyComponent.children,
	        renderLanes2
	      ), workInProgress2.child;
	    case 9:
	      return init = workInProgress2.type._context, lazyComponent = workInProgress2.pendingProps.children, prepareToReadContext(workInProgress2), init = readContext(init), lazyComponent = lazyComponent(init), workInProgress2.flags |= 1, reconcileChildren(current, workInProgress2, lazyComponent, renderLanes2), workInProgress2.child;
	    case 14:
	      return updateMemoComponent(
	        current,
	        workInProgress2,
	        workInProgress2.type,
	        workInProgress2.pendingProps,
	        renderLanes2
	      );
	    case 15:
	      return updateSimpleMemoComponent(
	        current,
	        workInProgress2,
	        workInProgress2.type,
	        workInProgress2.pendingProps,
	        renderLanes2
	      );
	    case 19:
	      return updateSuspenseListComponent(current, workInProgress2, renderLanes2);
	    case 22:
	      return updateOffscreenComponent(current, workInProgress2, renderLanes2);
	    case 24:
	      return prepareToReadContext(workInProgress2), lazyComponent = readContext(CacheContext), null === current ? (init = peekCacheFromPool(), null === init && (init = workInProgressRoot, nextProps = createCache(), init.pooledCache = nextProps, nextProps.refCount++, null !== nextProps && (init.pooledCacheLanes |= renderLanes2), init = nextProps), workInProgress2.memoizedState = {
	        parent: lazyComponent,
	        cache: init
	      }, initializeUpdateQueue(workInProgress2), pushProvider(workInProgress2, CacheContext, init)) : (0 !== (current.lanes & renderLanes2) && (cloneUpdateQueue(current, workInProgress2), processUpdateQueue(workInProgress2, null, null, renderLanes2), suspendIfUpdateReadFromEntangledAsyncAction()), init = current.memoizedState, nextProps = workInProgress2.memoizedState, init.parent !== lazyComponent ? (init = { parent: lazyComponent, cache: lazyComponent }, workInProgress2.memoizedState = init, 0 === workInProgress2.lanes && (workInProgress2.memoizedState = workInProgress2.updateQueue.baseState = init), pushProvider(workInProgress2, CacheContext, lazyComponent)) : (lazyComponent = nextProps.cache, pushProvider(workInProgress2, CacheContext, lazyComponent), lazyComponent !== init.cache && propagateContextChanges(
	        workInProgress2,
	        [CacheContext],
	        renderLanes2,
	        true
	      ))), reconcileChildren(
	        current,
	        workInProgress2,
	        workInProgress2.pendingProps.children,
	        renderLanes2
	      ), workInProgress2.child;
	    case 29:
	      throw workInProgress2.pendingProps;
	  }
	  throw Error(formatProdErrorMessage(156, workInProgress2.tag));
	}
	var valueCursor = createCursor(null), currentlyRenderingFiber = null, lastContextDependency = null;
	function pushProvider(providerFiber, context, nextValue) {
	  push(valueCursor, context._currentValue);
	  context._currentValue = nextValue;
	}
	function popProvider(context) {
	  context._currentValue = valueCursor.current;
	  pop(valueCursor);
	}
	function scheduleContextWorkOnParentPath(parent, renderLanes2, propagationRoot) {
	  for (; null !== parent; ) {
	    var alternate = parent.alternate;
	    (parent.childLanes & renderLanes2) !== renderLanes2 ? (parent.childLanes |= renderLanes2, null !== alternate && (alternate.childLanes |= renderLanes2)) : null !== alternate && (alternate.childLanes & renderLanes2) !== renderLanes2 && (alternate.childLanes |= renderLanes2);
	    if (parent === propagationRoot) break;
	    parent = parent.return;
	  }
	}
	function propagateContextChanges(workInProgress2, contexts, renderLanes2, forcePropagateEntireTree) {
	  var fiber = workInProgress2.child;
	  null !== fiber && (fiber.return = workInProgress2);
	  for (; null !== fiber; ) {
	    var list = fiber.dependencies;
	    if (null !== list) {
	      var nextFiber = fiber.child;
	      list = list.firstContext;
	      a: for (; null !== list; ) {
	        var dependency = list;
	        list = fiber;
	        for (var i = 0; i < contexts.length; i++)
	          if (dependency.context === contexts[i]) {
	            list.lanes |= renderLanes2;
	            dependency = list.alternate;
	            null !== dependency && (dependency.lanes |= renderLanes2);
	            scheduleContextWorkOnParentPath(
	              list.return,
	              renderLanes2,
	              workInProgress2
	            );
	            forcePropagateEntireTree || (nextFiber = null);
	            break a;
	          }
	        list = dependency.next;
	      }
	    } else if (18 === fiber.tag) {
	      nextFiber = fiber.return;
	      if (null === nextFiber) throw Error(formatProdErrorMessage(341));
	      nextFiber.lanes |= renderLanes2;
	      list = nextFiber.alternate;
	      null !== list && (list.lanes |= renderLanes2);
	      scheduleContextWorkOnParentPath(nextFiber, renderLanes2, workInProgress2);
	      nextFiber = null;
	    } else nextFiber = fiber.child;
	    if (null !== nextFiber) nextFiber.return = fiber;
	    else
	      for (nextFiber = fiber; null !== nextFiber; ) {
	        if (nextFiber === workInProgress2) {
	          nextFiber = null;
	          break;
	        }
	        fiber = nextFiber.sibling;
	        if (null !== fiber) {
	          fiber.return = nextFiber.return;
	          nextFiber = fiber;
	          break;
	        }
	        nextFiber = nextFiber.return;
	      }
	    fiber = nextFiber;
	  }
	}
	function propagateParentContextChanges(current, workInProgress2, renderLanes2, forcePropagateEntireTree) {
	  current = null;
	  for (var parent = workInProgress2, isInsidePropagationBailout = false; null !== parent; ) {
	    if (!isInsidePropagationBailout) {
	      if (0 !== (parent.flags & 524288)) isInsidePropagationBailout = true;
	      else if (0 !== (parent.flags & 262144)) break;
	    }
	    if (10 === parent.tag) {
	      var currentParent = parent.alternate;
	      if (null === currentParent) throw Error(formatProdErrorMessage(387));
	      currentParent = currentParent.memoizedProps;
	      if (null !== currentParent) {
	        var context = parent.type;
	        objectIs(parent.pendingProps.value, currentParent.value) || (null !== current ? current.push(context) : current = [context]);
	      }
	    } else if (parent === hostTransitionProviderCursor.current) {
	      currentParent = parent.alternate;
	      if (null === currentParent) throw Error(formatProdErrorMessage(387));
	      currentParent.memoizedState.memoizedState !== parent.memoizedState.memoizedState && (null !== current ? current.push(HostTransitionContext) : current = [HostTransitionContext]);
	    }
	    parent = parent.return;
	  }
	  null !== current && propagateContextChanges(
	    workInProgress2,
	    current,
	    renderLanes2,
	    forcePropagateEntireTree
	  );
	  workInProgress2.flags |= 262144;
	}
	function checkIfContextChanged(currentDependencies) {
	  for (currentDependencies = currentDependencies.firstContext; null !== currentDependencies; ) {
	    if (!objectIs(
	      currentDependencies.context._currentValue,
	      currentDependencies.memoizedValue
	    ))
	      return true;
	    currentDependencies = currentDependencies.next;
	  }
	  return false;
	}
	function prepareToReadContext(workInProgress2) {
	  currentlyRenderingFiber = workInProgress2;
	  lastContextDependency = null;
	  workInProgress2 = workInProgress2.dependencies;
	  null !== workInProgress2 && (workInProgress2.firstContext = null);
	}
	function readContext(context) {
	  return readContextForConsumer(currentlyRenderingFiber, context);
	}
	function readContextDuringReconciliation(consumer, context) {
	  null === currentlyRenderingFiber && prepareToReadContext(consumer);
	  return readContextForConsumer(consumer, context);
	}
	function readContextForConsumer(consumer, context) {
	  var value = context._currentValue;
	  context = { context, memoizedValue: value, next: null };
	  if (null === lastContextDependency) {
	    if (null === consumer) throw Error(formatProdErrorMessage(308));
	    lastContextDependency = context;
	    consumer.dependencies = { lanes: 0, firstContext: context };
	    consumer.flags |= 524288;
	  } else lastContextDependency = lastContextDependency.next = context;
	  return value;
	}
	var hasForceUpdate = false;
	function initializeUpdateQueue(fiber) {
	  fiber.updateQueue = {
	    baseState: fiber.memoizedState,
	    firstBaseUpdate: null,
	    lastBaseUpdate: null,
	    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
	    callbacks: null
	  };
	}
	function cloneUpdateQueue(current, workInProgress2) {
	  current = current.updateQueue;
	  workInProgress2.updateQueue === current && (workInProgress2.updateQueue = {
	    baseState: current.baseState,
	    firstBaseUpdate: current.firstBaseUpdate,
	    lastBaseUpdate: current.lastBaseUpdate,
	    shared: current.shared,
	    callbacks: null
	  });
	}
	function createUpdate(lane) {
	  return { lane, tag: 0, payload: null, callback: null, next: null };
	}
	function enqueueUpdate(fiber, update, lane) {
	  var updateQueue = fiber.updateQueue;
	  if (null === updateQueue) return null;
	  updateQueue = updateQueue.shared;
	  if (0 !== (executionContext & 2)) {
	    var pending = updateQueue.pending;
	    null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
	    updateQueue.pending = update;
	    update = getRootForUpdatedFiber(fiber);
	    markUpdateLaneFromFiberToRoot(fiber, null, lane);
	    return update;
	  }
	  enqueueUpdate$1(fiber, updateQueue, update, lane);
	  return getRootForUpdatedFiber(fiber);
	}
	function entangleTransitions(root2, fiber, lane) {
	  fiber = fiber.updateQueue;
	  if (null !== fiber && (fiber = fiber.shared, 0 !== (lane & 4194176))) {
	    var queueLanes = fiber.lanes;
	    queueLanes &= root2.pendingLanes;
	    lane |= queueLanes;
	    fiber.lanes = lane;
	    markRootEntangled(root2, lane);
	  }
	}
	function enqueueCapturedUpdate(workInProgress2, capturedUpdate) {
	  var queue = workInProgress2.updateQueue, current = workInProgress2.alternate;
	  if (null !== current && (current = current.updateQueue, queue === current)) {
	    var newFirst = null, newLast = null;
	    queue = queue.firstBaseUpdate;
	    if (null !== queue) {
	      do {
	        var clone = {
	          lane: queue.lane,
	          tag: queue.tag,
	          payload: queue.payload,
	          callback: null,
	          next: null
	        };
	        null === newLast ? newFirst = newLast = clone : newLast = newLast.next = clone;
	        queue = queue.next;
	      } while (null !== queue);
	      null === newLast ? newFirst = newLast = capturedUpdate : newLast = newLast.next = capturedUpdate;
	    } else newFirst = newLast = capturedUpdate;
	    queue = {
	      baseState: current.baseState,
	      firstBaseUpdate: newFirst,
	      lastBaseUpdate: newLast,
	      shared: current.shared,
	      callbacks: current.callbacks
	    };
	    workInProgress2.updateQueue = queue;
	    return;
	  }
	  workInProgress2 = queue.lastBaseUpdate;
	  null === workInProgress2 ? queue.firstBaseUpdate = capturedUpdate : workInProgress2.next = capturedUpdate;
	  queue.lastBaseUpdate = capturedUpdate;
	}
	var didReadFromEntangledAsyncAction = false;
	function suspendIfUpdateReadFromEntangledAsyncAction() {
	  if (didReadFromEntangledAsyncAction) {
	    var entangledActionThenable = currentEntangledActionThenable;
	    if (null !== entangledActionThenable) throw entangledActionThenable;
	  }
	}
	function processUpdateQueue(workInProgress$jscomp$0, props, instance$jscomp$0, renderLanes2) {
	  didReadFromEntangledAsyncAction = false;
	  var queue = workInProgress$jscomp$0.updateQueue;
	  hasForceUpdate = false;
	  var firstBaseUpdate = queue.firstBaseUpdate, lastBaseUpdate = queue.lastBaseUpdate, pendingQueue = queue.shared.pending;
	  if (null !== pendingQueue) {
	    queue.shared.pending = null;
	    var lastPendingUpdate = pendingQueue, firstPendingUpdate = lastPendingUpdate.next;
	    lastPendingUpdate.next = null;
	    null === lastBaseUpdate ? firstBaseUpdate = firstPendingUpdate : lastBaseUpdate.next = firstPendingUpdate;
	    lastBaseUpdate = lastPendingUpdate;
	    var current = workInProgress$jscomp$0.alternate;
	    null !== current && (current = current.updateQueue, pendingQueue = current.lastBaseUpdate, pendingQueue !== lastBaseUpdate && (null === pendingQueue ? current.firstBaseUpdate = firstPendingUpdate : pendingQueue.next = firstPendingUpdate, current.lastBaseUpdate = lastPendingUpdate));
	  }
	  if (null !== firstBaseUpdate) {
	    var newState = queue.baseState;
	    lastBaseUpdate = 0;
	    current = firstPendingUpdate = lastPendingUpdate = null;
	    pendingQueue = firstBaseUpdate;
	    do {
	      var updateLane = pendingQueue.lane & -536870913, isHiddenUpdate = updateLane !== pendingQueue.lane;
	      if (isHiddenUpdate ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes2 & updateLane) === updateLane) {
	        0 !== updateLane && updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction = true);
	        null !== current && (current = current.next = {
	          lane: 0,
	          tag: pendingQueue.tag,
	          payload: pendingQueue.payload,
	          callback: null,
	          next: null
	        });
	        a: {
	          var workInProgress2 = workInProgress$jscomp$0, update = pendingQueue;
	          updateLane = props;
	          var instance = instance$jscomp$0;
	          switch (update.tag) {
	            case 1:
	              workInProgress2 = update.payload;
	              if ("function" === typeof workInProgress2) {
	                newState = workInProgress2.call(instance, newState, updateLane);
	                break a;
	              }
	              newState = workInProgress2;
	              break a;
	            case 3:
	              workInProgress2.flags = workInProgress2.flags & -65537 | 128;
	            case 0:
	              workInProgress2 = update.payload;
	              updateLane = "function" === typeof workInProgress2 ? workInProgress2.call(instance, newState, updateLane) : workInProgress2;
	              if (null === updateLane || void 0 === updateLane) break a;
	              newState = assign({}, newState, updateLane);
	              break a;
	            case 2:
	              hasForceUpdate = true;
	          }
	        }
	        updateLane = pendingQueue.callback;
	        null !== updateLane && (workInProgress$jscomp$0.flags |= 64, isHiddenUpdate && (workInProgress$jscomp$0.flags |= 8192), isHiddenUpdate = queue.callbacks, null === isHiddenUpdate ? queue.callbacks = [updateLane] : isHiddenUpdate.push(updateLane));
	      } else
	        isHiddenUpdate = {
	          lane: updateLane,
	          tag: pendingQueue.tag,
	          payload: pendingQueue.payload,
	          callback: pendingQueue.callback,
	          next: null
	        }, null === current ? (firstPendingUpdate = current = isHiddenUpdate, lastPendingUpdate = newState) : current = current.next = isHiddenUpdate, lastBaseUpdate |= updateLane;
	      pendingQueue = pendingQueue.next;
	      if (null === pendingQueue)
	        if (pendingQueue = queue.shared.pending, null === pendingQueue)
	          break;
	        else
	          isHiddenUpdate = pendingQueue, pendingQueue = isHiddenUpdate.next, isHiddenUpdate.next = null, queue.lastBaseUpdate = isHiddenUpdate, queue.shared.pending = null;
	    } while (1);
	    null === current && (lastPendingUpdate = newState);
	    queue.baseState = lastPendingUpdate;
	    queue.firstBaseUpdate = firstPendingUpdate;
	    queue.lastBaseUpdate = current;
	    null === firstBaseUpdate && (queue.shared.lanes = 0);
	    workInProgressRootSkippedLanes |= lastBaseUpdate;
	    workInProgress$jscomp$0.lanes = lastBaseUpdate;
	    workInProgress$jscomp$0.memoizedState = newState;
	  }
	}
	function callCallback(callback, context) {
	  if ("function" !== typeof callback)
	    throw Error(formatProdErrorMessage(191, callback));
	  callback.call(context);
	}
	function commitCallbacks(updateQueue, context) {
	  var callbacks = updateQueue.callbacks;
	  if (null !== callbacks)
	    for (updateQueue.callbacks = null, updateQueue = 0; updateQueue < callbacks.length; updateQueue++)
	      callCallback(callbacks[updateQueue], context);
	}
	function commitHookEffectListMount(flags, finishedWork) {
	  try {
	    var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
	    if (null !== lastEffect) {
	      var firstEffect = lastEffect.next;
	      updateQueue = firstEffect;
	      do {
	        if ((updateQueue.tag & flags) === flags) {
	          lastEffect = void 0;
	          var create = updateQueue.create, inst = updateQueue.inst;
	          lastEffect = create();
	          inst.destroy = lastEffect;
	        }
	        updateQueue = updateQueue.next;
	      } while (updateQueue !== firstEffect);
	    }
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	function commitHookEffectListUnmount(flags, finishedWork, nearestMountedAncestor$jscomp$0) {
	  try {
	    var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
	    if (null !== lastEffect) {
	      var firstEffect = lastEffect.next;
	      updateQueue = firstEffect;
	      do {
	        if ((updateQueue.tag & flags) === flags) {
	          var inst = updateQueue.inst, destroy = inst.destroy;
	          if (void 0 !== destroy) {
	            inst.destroy = void 0;
	            lastEffect = finishedWork;
	            var nearestMountedAncestor = nearestMountedAncestor$jscomp$0;
	            try {
	              destroy();
	            } catch (error) {
	              captureCommitPhaseError(
	                lastEffect,
	                nearestMountedAncestor,
	                error
	              );
	            }
	          }
	        }
	        updateQueue = updateQueue.next;
	      } while (updateQueue !== firstEffect);
	    }
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	function commitClassCallbacks(finishedWork) {
	  var updateQueue = finishedWork.updateQueue;
	  if (null !== updateQueue) {
	    var instance = finishedWork.stateNode;
	    try {
	      commitCallbacks(updateQueue, instance);
	    } catch (error) {
	      captureCommitPhaseError(finishedWork, finishedWork.return, error);
	    }
	  }
	}
	function safelyCallComponentWillUnmount(current, nearestMountedAncestor, instance) {
	  instance.props = resolveClassComponentProps(
	    current.type,
	    current.memoizedProps
	  );
	  instance.state = current.memoizedState;
	  try {
	    instance.componentWillUnmount();
	  } catch (error) {
	    captureCommitPhaseError(current, nearestMountedAncestor, error);
	  }
	}
	function safelyAttachRef(current, nearestMountedAncestor) {
	  try {
	    var ref = current.ref;
	    if (null !== ref) {
	      var instance = current.stateNode;
	      switch (current.tag) {
	        case 26:
	        case 27:
	        case 5:
	          var instanceToUse = instance;
	          break;
	        default:
	          instanceToUse = instance;
	      }
	      "function" === typeof ref ? current.refCleanup = ref(instanceToUse) : ref.current = instanceToUse;
	    }
	  } catch (error) {
	    captureCommitPhaseError(current, nearestMountedAncestor, error);
	  }
	}
	function safelyDetachRef(current, nearestMountedAncestor) {
	  var ref = current.ref, refCleanup = current.refCleanup;
	  if (null !== ref)
	    if ("function" === typeof refCleanup)
	      try {
	        refCleanup();
	      } catch (error) {
	        captureCommitPhaseError(current, nearestMountedAncestor, error);
	      } finally {
	        current.refCleanup = null, current = current.alternate, null != current && (current.refCleanup = null);
	      }
	    else if ("function" === typeof ref)
	      try {
	        ref(null);
	      } catch (error$112) {
	        captureCommitPhaseError(current, nearestMountedAncestor, error$112);
	      }
	    else ref.current = null;
	}
	function commitHostMount(finishedWork) {
	  var type = finishedWork.type, props = finishedWork.memoizedProps, instance = finishedWork.stateNode;
	  try {
	    a: switch (type) {
	      case "button":
	      case "input":
	      case "select":
	      case "textarea":
	        props.autoFocus && instance.focus();
	        break a;
	      case "img":
	        props.src ? instance.src = props.src : props.srcSet && (instance.srcset = props.srcSet);
	    }
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	function commitHostUpdate(finishedWork, newProps, oldProps) {
	  try {
	    var domElement = finishedWork.stateNode;
	    updateProperties(domElement, finishedWork.type, oldProps, newProps);
	    domElement[internalPropsKey] = newProps;
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	function isHostParent(fiber) {
	  return 5 === fiber.tag || 3 === fiber.tag || 26 === fiber.tag || 27 === fiber.tag || 4 === fiber.tag;
	}
	function getHostSibling(fiber) {
	  a: for (; ; ) {
	    for (; null === fiber.sibling; ) {
	      if (null === fiber.return || isHostParent(fiber.return)) return null;
	      fiber = fiber.return;
	    }
	    fiber.sibling.return = fiber.return;
	    for (fiber = fiber.sibling; 5 !== fiber.tag && 6 !== fiber.tag && 27 !== fiber.tag && 18 !== fiber.tag; ) {
	      if (fiber.flags & 2) continue a;
	      if (null === fiber.child || 4 === fiber.tag) continue a;
	      else fiber.child.return = fiber, fiber = fiber.child;
	    }
	    if (!(fiber.flags & 2)) return fiber.stateNode;
	  }
	}
	function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
	  var tag = node.tag;
	  if (5 === tag || 6 === tag)
	    node = node.stateNode, before ? 8 === parent.nodeType ? parent.parentNode.insertBefore(node, before) : parent.insertBefore(node, before) : (8 === parent.nodeType ? (before = parent.parentNode, before.insertBefore(node, parent)) : (before = parent, before.appendChild(node)), parent = parent._reactRootContainer, null !== parent && void 0 !== parent || null !== before.onclick || (before.onclick = noop$1));
	  else if (4 !== tag && 27 !== tag && (node = node.child, null !== node))
	    for (insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling; null !== node; )
	      insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling;
	}
	function insertOrAppendPlacementNode(node, before, parent) {
	  var tag = node.tag;
	  if (5 === tag || 6 === tag)
	    node = node.stateNode, before ? parent.insertBefore(node, before) : parent.appendChild(node);
	  else if (4 !== tag && 27 !== tag && (node = node.child, null !== node))
	    for (insertOrAppendPlacementNode(node, before, parent), node = node.sibling; null !== node; )
	      insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
	}
	var offscreenSubtreeIsHidden = false, offscreenSubtreeWasHidden = false, needsFormReset = false, PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set, nextEffect = null, shouldFireAfterActiveInstanceBlur = false;
	function commitBeforeMutationEffects(root2, firstChild) {
	  root2 = root2.containerInfo;
	  eventsEnabled = _enabled;
	  root2 = getActiveElementDeep(root2);
	  if (hasSelectionCapabilities(root2)) {
	    if ("selectionStart" in root2)
	      var JSCompiler_temp = {
	        start: root2.selectionStart,
	        end: root2.selectionEnd
	      };
	    else
	      a: {
	        JSCompiler_temp = (JSCompiler_temp = root2.ownerDocument) && JSCompiler_temp.defaultView || window;
	        var selection = JSCompiler_temp.getSelection && JSCompiler_temp.getSelection();
	        if (selection && 0 !== selection.rangeCount) {
	          JSCompiler_temp = selection.anchorNode;
	          var anchorOffset = selection.anchorOffset, focusNode = selection.focusNode;
	          selection = selection.focusOffset;
	          try {
	            JSCompiler_temp.nodeType, focusNode.nodeType;
	          } catch (e$20) {
	            JSCompiler_temp = null;
	            break a;
	          }
	          var length = 0, start = -1, end = -1, indexWithinAnchor = 0, indexWithinFocus = 0, node = root2, parentNode = null;
	          b: for (; ; ) {
	            for (var next; ; ) {
	              node !== JSCompiler_temp || 0 !== anchorOffset && 3 !== node.nodeType || (start = length + anchorOffset);
	              node !== focusNode || 0 !== selection && 3 !== node.nodeType || (end = length + selection);
	              3 === node.nodeType && (length += node.nodeValue.length);
	              if (null === (next = node.firstChild)) break;
	              parentNode = node;
	              node = next;
	            }
	            for (; ; ) {
	              if (node === root2) break b;
	              parentNode === JSCompiler_temp && ++indexWithinAnchor === anchorOffset && (start = length);
	              parentNode === focusNode && ++indexWithinFocus === selection && (end = length);
	              if (null !== (next = node.nextSibling)) break;
	              node = parentNode;
	              parentNode = node.parentNode;
	            }
	            node = next;
	          }
	          JSCompiler_temp = -1 === start || -1 === end ? null : { start, end };
	        } else JSCompiler_temp = null;
	      }
	    JSCompiler_temp = JSCompiler_temp || { start: 0, end: 0 };
	  } else JSCompiler_temp = null;
	  selectionInformation = { focusedElem: root2, selectionRange: JSCompiler_temp };
	  _enabled = false;
	  for (nextEffect = firstChild; null !== nextEffect; )
	    if (firstChild = nextEffect, root2 = firstChild.child, 0 !== (firstChild.subtreeFlags & 1028) && null !== root2)
	      root2.return = firstChild, nextEffect = root2;
	    else
	      for (; null !== nextEffect; ) {
	        firstChild = nextEffect;
	        focusNode = firstChild.alternate;
	        root2 = firstChild.flags;
	        switch (firstChild.tag) {
	          case 0:
	            break;
	          case 11:
	          case 15:
	            break;
	          case 1:
	            if (0 !== (root2 & 1024) && null !== focusNode) {
	              root2 = void 0;
	              JSCompiler_temp = firstChild;
	              anchorOffset = focusNode.memoizedProps;
	              focusNode = focusNode.memoizedState;
	              selection = JSCompiler_temp.stateNode;
	              try {
	                var resolvedPrevProps = resolveClassComponentProps(
	                  JSCompiler_temp.type,
	                  anchorOffset,
	                  JSCompiler_temp.elementType === JSCompiler_temp.type
	                );
	                root2 = selection.getSnapshotBeforeUpdate(
	                  resolvedPrevProps,
	                  focusNode
	                );
	                selection.__reactInternalSnapshotBeforeUpdate = root2;
	              } catch (error) {
	                captureCommitPhaseError(
	                  JSCompiler_temp,
	                  JSCompiler_temp.return,
	                  error
	                );
	              }
	            }
	            break;
	          case 3:
	            if (0 !== (root2 & 1024)) {
	              if (root2 = firstChild.stateNode.containerInfo, JSCompiler_temp = root2.nodeType, 9 === JSCompiler_temp)
	                clearContainerSparingly(root2);
	              else if (1 === JSCompiler_temp)
	                switch (root2.nodeName) {
	                  case "HEAD":
	                  case "HTML":
	                  case "BODY":
	                    clearContainerSparingly(root2);
	                    break;
	                  default:
	                    root2.textContent = "";
	                }
	            }
	            break;
	          case 5:
	          case 26:
	          case 27:
	          case 6:
	          case 4:
	          case 17:
	            break;
	          default:
	            if (0 !== (root2 & 1024)) throw Error(formatProdErrorMessage(163));
	        }
	        root2 = firstChild.sibling;
	        if (null !== root2) {
	          root2.return = firstChild.return;
	          nextEffect = root2;
	          break;
	        }
	        nextEffect = firstChild.return;
	      }
	  resolvedPrevProps = shouldFireAfterActiveInstanceBlur;
	  shouldFireAfterActiveInstanceBlur = false;
	  return resolvedPrevProps;
	}
	function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
	  var flags = finishedWork.flags;
	  switch (finishedWork.tag) {
	    case 0:
	    case 11:
	    case 15:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      flags & 4 && commitHookEffectListMount(5, finishedWork);
	      break;
	    case 1:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      if (flags & 4)
	        if (finishedRoot = finishedWork.stateNode, null === current)
	          try {
	            finishedRoot.componentDidMount();
	          } catch (error) {
	            captureCommitPhaseError(finishedWork, finishedWork.return, error);
	          }
	        else {
	          var prevProps = resolveClassComponentProps(
	            finishedWork.type,
	            current.memoizedProps
	          );
	          current = current.memoizedState;
	          try {
	            finishedRoot.componentDidUpdate(
	              prevProps,
	              current,
	              finishedRoot.__reactInternalSnapshotBeforeUpdate
	            );
	          } catch (error$111) {
	            captureCommitPhaseError(
	              finishedWork,
	              finishedWork.return,
	              error$111
	            );
	          }
	        }
	      flags & 64 && commitClassCallbacks(finishedWork);
	      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
	      break;
	    case 3:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      if (flags & 64 && (flags = finishedWork.updateQueue, null !== flags)) {
	        finishedRoot = null;
	        if (null !== finishedWork.child)
	          switch (finishedWork.child.tag) {
	            case 27:
	            case 5:
	              finishedRoot = finishedWork.child.stateNode;
	              break;
	            case 1:
	              finishedRoot = finishedWork.child.stateNode;
	          }
	        try {
	          commitCallbacks(flags, finishedRoot);
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      }
	      break;
	    case 26:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
	      break;
	    case 27:
	    case 5:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      null === current && flags & 4 && commitHostMount(finishedWork);
	      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
	      break;
	    case 12:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      break;
	    case 13:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
	      break;
	    case 22:
	      prevProps = null !== finishedWork.memoizedState || offscreenSubtreeIsHidden;
	      if (!prevProps) {
	        current = null !== current && null !== current.memoizedState || offscreenSubtreeWasHidden;
	        var prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden, prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
	        offscreenSubtreeIsHidden = prevProps;
	        (offscreenSubtreeWasHidden = current) && !prevOffscreenSubtreeWasHidden ? recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          0 !== (finishedWork.subtreeFlags & 8772)
	        ) : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	        offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
	        offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
	      }
	      flags & 512 && ("manual" === finishedWork.memoizedProps.mode ? safelyAttachRef(finishedWork, finishedWork.return) : safelyDetachRef(finishedWork, finishedWork.return));
	      break;
	    default:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	  }
	}
	function detachFiberAfterEffects(fiber) {
	  var alternate = fiber.alternate;
	  null !== alternate && (fiber.alternate = null, detachFiberAfterEffects(alternate));
	  fiber.child = null;
	  fiber.deletions = null;
	  fiber.sibling = null;
	  5 === fiber.tag && (alternate = fiber.stateNode, null !== alternate && detachDeletedInstance(alternate));
	  fiber.stateNode = null;
	  fiber.return = null;
	  fiber.dependencies = null;
	  fiber.memoizedProps = null;
	  fiber.memoizedState = null;
	  fiber.pendingProps = null;
	  fiber.stateNode = null;
	  fiber.updateQueue = null;
	}
	var hostParent = null, hostParentIsContainer = false;
	function recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, parent) {
	  for (parent = parent.child; null !== parent; )
	    commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent), parent = parent.sibling;
	}
	function commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, deletedFiber) {
	  if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount)
	    try {
	      injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
	    } catch (err) {
	    }
	  switch (deletedFiber.tag) {
	    case 26:
	      offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      deletedFiber.memoizedState ? deletedFiber.memoizedState.count-- : deletedFiber.stateNode && (deletedFiber = deletedFiber.stateNode, deletedFiber.parentNode.removeChild(deletedFiber));
	      break;
	    case 27:
	      offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
	      var prevHostParent = hostParent, prevHostParentIsContainer = hostParentIsContainer;
	      hostParent = deletedFiber.stateNode;
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      deletedFiber = deletedFiber.stateNode;
	      for (nearestMountedAncestor = deletedFiber.attributes; nearestMountedAncestor.length; )
	        deletedFiber.removeAttributeNode(nearestMountedAncestor[0]);
	      detachDeletedInstance(deletedFiber);
	      hostParent = prevHostParent;
	      hostParentIsContainer = prevHostParentIsContainer;
	      break;
	    case 5:
	      offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
	    case 6:
	      prevHostParentIsContainer = hostParent;
	      var prevHostParentIsContainer$119 = hostParentIsContainer;
	      hostParent = null;
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      hostParent = prevHostParentIsContainer;
	      hostParentIsContainer = prevHostParentIsContainer$119;
	      if (null !== hostParent)
	        if (hostParentIsContainer)
	          try {
	            finishedRoot = hostParent, prevHostParent = deletedFiber.stateNode, 8 === finishedRoot.nodeType ? finishedRoot.parentNode.removeChild(prevHostParent) : finishedRoot.removeChild(prevHostParent);
	          } catch (error) {
	            captureCommitPhaseError(
	              deletedFiber,
	              nearestMountedAncestor,
	              error
	            );
	          }
	        else
	          try {
	            hostParent.removeChild(deletedFiber.stateNode);
	          } catch (error) {
	            captureCommitPhaseError(
	              deletedFiber,
	              nearestMountedAncestor,
	              error
	            );
	          }
	      break;
	    case 18:
	      null !== hostParent && (hostParentIsContainer ? (nearestMountedAncestor = hostParent, deletedFiber = deletedFiber.stateNode, 8 === nearestMountedAncestor.nodeType ? clearSuspenseBoundary(
	        nearestMountedAncestor.parentNode,
	        deletedFiber
	      ) : 1 === nearestMountedAncestor.nodeType && clearSuspenseBoundary(nearestMountedAncestor, deletedFiber), retryIfBlockedOn(nearestMountedAncestor)) : clearSuspenseBoundary(hostParent, deletedFiber.stateNode));
	      break;
	    case 4:
	      prevHostParent = hostParent;
	      prevHostParentIsContainer = hostParentIsContainer;
	      hostParent = deletedFiber.stateNode.containerInfo;
	      hostParentIsContainer = true;
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      hostParent = prevHostParent;
	      hostParentIsContainer = prevHostParentIsContainer;
	      break;
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	      offscreenSubtreeWasHidden || commitHookEffectListUnmount(2, deletedFiber, nearestMountedAncestor);
	      offscreenSubtreeWasHidden || commitHookEffectListUnmount(4, deletedFiber, nearestMountedAncestor);
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      break;
	    case 1:
	      offscreenSubtreeWasHidden || (safelyDetachRef(deletedFiber, nearestMountedAncestor), prevHostParent = deletedFiber.stateNode, "function" === typeof prevHostParent.componentWillUnmount && safelyCallComponentWillUnmount(
	        deletedFiber,
	        nearestMountedAncestor,
	        prevHostParent
	      ));
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      break;
	    case 21:
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      break;
	    case 22:
	      offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
	      offscreenSubtreeWasHidden = (prevHostParent = offscreenSubtreeWasHidden) || null !== deletedFiber.memoizedState;
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      offscreenSubtreeWasHidden = prevHostParent;
	      break;
	    default:
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	  }
	}
	function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
	  if (null === finishedWork.memoizedState && (finishedRoot = finishedWork.alternate, null !== finishedRoot && (finishedRoot = finishedRoot.memoizedState, null !== finishedRoot && (finishedRoot = finishedRoot.dehydrated, null !== finishedRoot))))
	    try {
	      retryIfBlockedOn(finishedRoot);
	    } catch (error) {
	      captureCommitPhaseError(finishedWork, finishedWork.return, error);
	    }
	}
	function getRetryCache(finishedWork) {
	  switch (finishedWork.tag) {
	    case 13:
	    case 19:
	      var retryCache = finishedWork.stateNode;
	      null === retryCache && (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
	      return retryCache;
	    case 22:
	      return finishedWork = finishedWork.stateNode, retryCache = finishedWork._retryCache, null === retryCache && (retryCache = finishedWork._retryCache = new PossiblyWeakSet()), retryCache;
	    default:
	      throw Error(formatProdErrorMessage(435, finishedWork.tag));
	  }
	}
	function attachSuspenseRetryListeners(finishedWork, wakeables) {
	  var retryCache = getRetryCache(finishedWork);
	  wakeables.forEach(function(wakeable) {
	    var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
	    retryCache.has(wakeable) || (retryCache.add(wakeable), wakeable.then(retry, retry));
	  });
	}
	function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
	  var deletions = parentFiber.deletions;
	  if (null !== deletions)
	    for (var i = 0; i < deletions.length; i++) {
	      var childToDelete = deletions[i], root2 = root$jscomp$0, returnFiber = parentFiber, parent = returnFiber;
	      a: for (; null !== parent; ) {
	        switch (parent.tag) {
	          case 27:
	          case 5:
	            hostParent = parent.stateNode;
	            hostParentIsContainer = false;
	            break a;
	          case 3:
	            hostParent = parent.stateNode.containerInfo;
	            hostParentIsContainer = true;
	            break a;
	          case 4:
	            hostParent = parent.stateNode.containerInfo;
	            hostParentIsContainer = true;
	            break a;
	        }
	        parent = parent.return;
	      }
	      if (null === hostParent) throw Error(formatProdErrorMessage(160));
	      commitDeletionEffectsOnFiber(root2, returnFiber, childToDelete);
	      hostParent = null;
	      hostParentIsContainer = false;
	      root2 = childToDelete.alternate;
	      null !== root2 && (root2.return = null);
	      childToDelete.return = null;
	    }
	  if (parentFiber.subtreeFlags & 13878)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      commitMutationEffectsOnFiber(parentFiber, root$jscomp$0), parentFiber = parentFiber.sibling;
	}
	var currentHoistableRoot = null;
	function commitMutationEffectsOnFiber(finishedWork, root2) {
	  var current = finishedWork.alternate, flags = finishedWork.flags;
	  switch (finishedWork.tag) {
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	      recursivelyTraverseMutationEffects(root2, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 4 && (commitHookEffectListUnmount(3, finishedWork, finishedWork.return), commitHookEffectListMount(3, finishedWork), commitHookEffectListUnmount(5, finishedWork, finishedWork.return));
	      break;
	    case 1:
	      recursivelyTraverseMutationEffects(root2, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
	      flags & 64 && offscreenSubtreeIsHidden && (finishedWork = finishedWork.updateQueue, null !== finishedWork && (flags = finishedWork.callbacks, null !== flags && (current = finishedWork.shared.hiddenCallbacks, finishedWork.shared.hiddenCallbacks = null === current ? flags : current.concat(flags))));
	      break;
	    case 26:
	      var hoistableRoot = currentHoistableRoot;
	      recursivelyTraverseMutationEffects(root2, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
	      if (flags & 4) {
	        var currentResource = null !== current ? current.memoizedState : null;
	        flags = finishedWork.memoizedState;
	        if (null === current)
	          if (null === flags)
	            if (null === finishedWork.stateNode) {
	              a: {
	                flags = finishedWork.type;
	                current = finishedWork.memoizedProps;
	                hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
	                b: switch (flags) {
	                  case "title":
	                    currentResource = hoistableRoot.getElementsByTagName("title")[0];
	                    if (!currentResource || currentResource[internalHoistableMarker] || currentResource[internalInstanceKey] || "http://www.w3.org/2000/svg" === currentResource.namespaceURI || currentResource.hasAttribute("itemprop"))
	                      currentResource = hoistableRoot.createElement(flags), hoistableRoot.head.insertBefore(
	                        currentResource,
	                        hoistableRoot.querySelector("head > title")
	                      );
	                    setInitialProperties(currentResource, flags, current);
	                    currentResource[internalInstanceKey] = finishedWork;
	                    markNodeAsHoistable(currentResource);
	                    flags = currentResource;
	                    break a;
	                  case "link":
	                    var maybeNodes = getHydratableHoistableCache(
	                      "link",
	                      "href",
	                      hoistableRoot
	                    ).get(flags + (current.href || ""));
	                    if (maybeNodes) {
	                      for (var i = 0; i < maybeNodes.length; i++)
	                        if (currentResource = maybeNodes[i], currentResource.getAttribute("href") === (null == current.href ? null : current.href) && currentResource.getAttribute("rel") === (null == current.rel ? null : current.rel) && currentResource.getAttribute("title") === (null == current.title ? null : current.title) && currentResource.getAttribute("crossorigin") === (null == current.crossOrigin ? null : current.crossOrigin)) {
	                          maybeNodes.splice(i, 1);
	                          break b;
	                        }
	                    }
	                    currentResource = hoistableRoot.createElement(flags);
	                    setInitialProperties(currentResource, flags, current);
	                    hoistableRoot.head.appendChild(currentResource);
	                    break;
	                  case "meta":
	                    if (maybeNodes = getHydratableHoistableCache(
	                      "meta",
	                      "content",
	                      hoistableRoot
	                    ).get(flags + (current.content || ""))) {
	                      for (i = 0; i < maybeNodes.length; i++)
	                        if (currentResource = maybeNodes[i], currentResource.getAttribute("content") === (null == current.content ? null : "" + current.content) && currentResource.getAttribute("name") === (null == current.name ? null : current.name) && currentResource.getAttribute("property") === (null == current.property ? null : current.property) && currentResource.getAttribute("http-equiv") === (null == current.httpEquiv ? null : current.httpEquiv) && currentResource.getAttribute("charset") === (null == current.charSet ? null : current.charSet)) {
	                          maybeNodes.splice(i, 1);
	                          break b;
	                        }
	                    }
	                    currentResource = hoistableRoot.createElement(flags);
	                    setInitialProperties(currentResource, flags, current);
	                    hoistableRoot.head.appendChild(currentResource);
	                    break;
	                  default:
	                    throw Error(formatProdErrorMessage(468, flags));
	                }
	                currentResource[internalInstanceKey] = finishedWork;
	                markNodeAsHoistable(currentResource);
	                flags = currentResource;
	              }
	              finishedWork.stateNode = flags;
	            } else
	              mountHoistable(
	                hoistableRoot,
	                finishedWork.type,
	                finishedWork.stateNode
	              );
	          else
	            finishedWork.stateNode = acquireResource(
	              hoistableRoot,
	              flags,
	              finishedWork.memoizedProps
	            );
	        else
	          currentResource !== flags ? (null === currentResource ? null !== current.stateNode && (current = current.stateNode, current.parentNode.removeChild(current)) : currentResource.count--, null === flags ? mountHoistable(
	            hoistableRoot,
	            finishedWork.type,
	            finishedWork.stateNode
	          ) : acquireResource(
	            hoistableRoot,
	            flags,
	            finishedWork.memoizedProps
	          )) : null === flags && null !== finishedWork.stateNode && commitHostUpdate(
	            finishedWork,
	            finishedWork.memoizedProps,
	            current.memoizedProps
	          );
	      }
	      break;
	    case 27:
	      if (flags & 4 && null === finishedWork.alternate) {
	        hoistableRoot = finishedWork.stateNode;
	        currentResource = finishedWork.memoizedProps;
	        try {
	          for (var node = hoistableRoot.firstChild; node; ) {
	            var nextNode = node.nextSibling, nodeName = node.nodeName;
	            node[internalHoistableMarker] || "HEAD" === nodeName || "BODY" === nodeName || "SCRIPT" === nodeName || "STYLE" === nodeName || "LINK" === nodeName && "stylesheet" === node.rel.toLowerCase() || hoistableRoot.removeChild(node);
	            node = nextNode;
	          }
	          for (var type = finishedWork.type, attributes = hoistableRoot.attributes; attributes.length; )
	            hoistableRoot.removeAttributeNode(attributes[0]);
	          setInitialProperties(hoistableRoot, type, currentResource);
	          hoistableRoot[internalInstanceKey] = finishedWork;
	          hoistableRoot[internalPropsKey] = currentResource;
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      }
	    case 5:
	      recursivelyTraverseMutationEffects(root2, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
	      if (finishedWork.flags & 32) {
	        hoistableRoot = finishedWork.stateNode;
	        try {
	          setTextContent(hoistableRoot, "");
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      }
	      flags & 4 && null != finishedWork.stateNode && (hoistableRoot = finishedWork.memoizedProps, commitHostUpdate(
	        finishedWork,
	        hoistableRoot,
	        null !== current ? current.memoizedProps : hoistableRoot
	      ));
	      flags & 1024 && (needsFormReset = true);
	      break;
	    case 6:
	      recursivelyTraverseMutationEffects(root2, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      if (flags & 4) {
	        if (null === finishedWork.stateNode)
	          throw Error(formatProdErrorMessage(162));
	        flags = finishedWork.memoizedProps;
	        current = finishedWork.stateNode;
	        try {
	          current.nodeValue = flags;
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      }
	      break;
	    case 3:
	      tagCaches = null;
	      hoistableRoot = currentHoistableRoot;
	      currentHoistableRoot = getHoistableRoot(root2.containerInfo);
	      recursivelyTraverseMutationEffects(root2, finishedWork);
	      currentHoistableRoot = hoistableRoot;
	      commitReconciliationEffects(finishedWork);
	      if (flags & 4 && null !== current && current.memoizedState.isDehydrated)
	        try {
	          retryIfBlockedOn(root2.containerInfo);
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      needsFormReset && (needsFormReset = false, recursivelyResetForms(finishedWork));
	      break;
	    case 4:
	      flags = currentHoistableRoot;
	      currentHoistableRoot = getHoistableRoot(
	        finishedWork.stateNode.containerInfo
	      );
	      recursivelyTraverseMutationEffects(root2, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      currentHoistableRoot = flags;
	      break;
	    case 12:
	      recursivelyTraverseMutationEffects(root2, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      break;
	    case 13:
	      recursivelyTraverseMutationEffects(root2, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      finishedWork.child.flags & 8192 && null !== finishedWork.memoizedState !== (null !== current && null !== current.memoizedState) && (globalMostRecentFallbackTime = now());
	      flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
	      break;
	    case 22:
	      flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
	      node = null !== finishedWork.memoizedState;
	      nextNode = null !== current && null !== current.memoizedState;
	      nodeName = offscreenSubtreeIsHidden;
	      type = offscreenSubtreeWasHidden;
	      offscreenSubtreeIsHidden = nodeName || node;
	      offscreenSubtreeWasHidden = type || nextNode;
	      recursivelyTraverseMutationEffects(root2, finishedWork);
	      offscreenSubtreeWasHidden = type;
	      offscreenSubtreeIsHidden = nodeName;
	      commitReconciliationEffects(finishedWork);
	      root2 = finishedWork.stateNode;
	      root2._current = finishedWork;
	      root2._visibility &= -3;
	      root2._visibility |= root2._pendingVisibility & 2;
	      if (flags & 8192 && (root2._visibility = node ? root2._visibility & -2 : root2._visibility | 1, node && (root2 = offscreenSubtreeIsHidden || offscreenSubtreeWasHidden, null === current || nextNode || root2 || recursivelyTraverseDisappearLayoutEffects(finishedWork)), null === finishedWork.memoizedProps || "manual" !== finishedWork.memoizedProps.mode))
	        a: for (current = null, root2 = finishedWork; ; ) {
	          if (5 === root2.tag || 26 === root2.tag || 27 === root2.tag) {
	            if (null === current) {
	              nextNode = current = root2;
	              try {
	                if (hoistableRoot = nextNode.stateNode, node)
	                  currentResource = hoistableRoot.style, "function" === typeof currentResource.setProperty ? currentResource.setProperty(
	                    "display",
	                    "none",
	                    "important"
	                  ) : currentResource.display = "none";
	                else {
	                  maybeNodes = nextNode.stateNode;
	                  i = nextNode.memoizedProps.style;
	                  var display = void 0 !== i && null !== i && i.hasOwnProperty("display") ? i.display : null;
	                  maybeNodes.style.display = null == display || "boolean" === typeof display ? "" : ("" + display).trim();
	                }
	              } catch (error) {
	                captureCommitPhaseError(nextNode, nextNode.return, error);
	              }
	            }
	          } else if (6 === root2.tag) {
	            if (null === current) {
	              nextNode = root2;
	              try {
	                nextNode.stateNode.nodeValue = node ? "" : nextNode.memoizedProps;
	              } catch (error) {
	                captureCommitPhaseError(nextNode, nextNode.return, error);
	              }
	            }
	          } else if ((22 !== root2.tag && 23 !== root2.tag || null === root2.memoizedState || root2 === finishedWork) && null !== root2.child) {
	            root2.child.return = root2;
	            root2 = root2.child;
	            continue;
	          }
	          if (root2 === finishedWork) break a;
	          for (; null === root2.sibling; ) {
	            if (null === root2.return || root2.return === finishedWork) break a;
	            current === root2 && (current = null);
	            root2 = root2.return;
	          }
	          current === root2 && (current = null);
	          root2.sibling.return = root2.return;
	          root2 = root2.sibling;
	        }
	      flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (current = flags.retryQueue, null !== current && (flags.retryQueue = null, attachSuspenseRetryListeners(finishedWork, current))));
	      break;
	    case 19:
	      recursivelyTraverseMutationEffects(root2, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
	      break;
	    case 21:
	      break;
	    default:
	      recursivelyTraverseMutationEffects(root2, finishedWork), commitReconciliationEffects(finishedWork);
	  }
	}
	function commitReconciliationEffects(finishedWork) {
	  var flags = finishedWork.flags;
	  if (flags & 2) {
	    try {
	      if (27 !== finishedWork.tag) {
	        a: {
	          for (var parent = finishedWork.return; null !== parent; ) {
	            if (isHostParent(parent)) {
	              var JSCompiler_inline_result = parent;
	              break a;
	            }
	            parent = parent.return;
	          }
	          throw Error(formatProdErrorMessage(160));
	        }
	        switch (JSCompiler_inline_result.tag) {
	          case 27:
	            var parent$jscomp$0 = JSCompiler_inline_result.stateNode, before = getHostSibling(finishedWork);
	            insertOrAppendPlacementNode(finishedWork, before, parent$jscomp$0);
	            break;
	          case 5:
	            var parent$113 = JSCompiler_inline_result.stateNode;
	            JSCompiler_inline_result.flags & 32 && (setTextContent(parent$113, ""), JSCompiler_inline_result.flags &= -33);
	            var before$114 = getHostSibling(finishedWork);
	            insertOrAppendPlacementNode(finishedWork, before$114, parent$113);
	            break;
	          case 3:
	          case 4:
	            var parent$115 = JSCompiler_inline_result.stateNode.containerInfo, before$116 = getHostSibling(finishedWork);
	            insertOrAppendPlacementNodeIntoContainer(
	              finishedWork,
	              before$116,
	              parent$115
	            );
	            break;
	          default:
	            throw Error(formatProdErrorMessage(161));
	        }
	      }
	    } catch (error) {
	      captureCommitPhaseError(finishedWork, finishedWork.return, error);
	    }
	    finishedWork.flags &= -3;
	  }
	  flags & 4096 && (finishedWork.flags &= -4097);
	}
	function recursivelyResetForms(parentFiber) {
	  if (parentFiber.subtreeFlags & 1024)
	    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	      var fiber = parentFiber;
	      recursivelyResetForms(fiber);
	      5 === fiber.tag && fiber.flags & 1024 && fiber.stateNode.reset();
	      parentFiber = parentFiber.sibling;
	    }
	}
	function recursivelyTraverseLayoutEffects(root2, parentFiber) {
	  if (parentFiber.subtreeFlags & 8772)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      commitLayoutEffectOnFiber(root2, parentFiber.alternate, parentFiber), parentFiber = parentFiber.sibling;
	}
	function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
	  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	    var finishedWork = parentFiber;
	    switch (finishedWork.tag) {
	      case 0:
	      case 11:
	      case 14:
	      case 15:
	        commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      case 1:
	        safelyDetachRef(finishedWork, finishedWork.return);
	        var instance = finishedWork.stateNode;
	        "function" === typeof instance.componentWillUnmount && safelyCallComponentWillUnmount(
	          finishedWork,
	          finishedWork.return,
	          instance
	        );
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      case 26:
	      case 27:
	      case 5:
	        safelyDetachRef(finishedWork, finishedWork.return);
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      case 22:
	        safelyDetachRef(finishedWork, finishedWork.return);
	        null === finishedWork.memoizedState && recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      default:
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	    }
	    parentFiber = parentFiber.sibling;
	  }
	}
	function recursivelyTraverseReappearLayoutEffects(finishedRoot$jscomp$0, parentFiber, includeWorkInProgressEffects) {
	  includeWorkInProgressEffects = includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
	  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	    var current = parentFiber.alternate, finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, flags = finishedWork.flags;
	    switch (finishedWork.tag) {
	      case 0:
	      case 11:
	      case 15:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        commitHookEffectListMount(4, finishedWork);
	        break;
	      case 1:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        current = finishedWork;
	        finishedRoot = current.stateNode;
	        if ("function" === typeof finishedRoot.componentDidMount)
	          try {
	            finishedRoot.componentDidMount();
	          } catch (error) {
	            captureCommitPhaseError(current, current.return, error);
	          }
	        current = finishedWork;
	        finishedRoot = current.updateQueue;
	        if (null !== finishedRoot) {
	          var instance = current.stateNode;
	          try {
	            var hiddenCallbacks = finishedRoot.shared.hiddenCallbacks;
	            if (null !== hiddenCallbacks)
	              for (finishedRoot.shared.hiddenCallbacks = null, finishedRoot = 0; finishedRoot < hiddenCallbacks.length; finishedRoot++)
	                callCallback(hiddenCallbacks[finishedRoot], instance);
	          } catch (error) {
	            captureCommitPhaseError(current, current.return, error);
	          }
	        }
	        includeWorkInProgressEffects && flags & 64 && commitClassCallbacks(finishedWork);
	        safelyAttachRef(finishedWork, finishedWork.return);
	        break;
	      case 26:
	      case 27:
	      case 5:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        includeWorkInProgressEffects && null === current && flags & 4 && commitHostMount(finishedWork);
	        safelyAttachRef(finishedWork, finishedWork.return);
	        break;
	      case 12:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        break;
	      case 13:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        includeWorkInProgressEffects && flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
	        break;
	      case 22:
	        null === finishedWork.memoizedState && recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        safelyAttachRef(finishedWork, finishedWork.return);
	        break;
	      default:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	    }
	    parentFiber = parentFiber.sibling;
	  }
	}
	function commitOffscreenPassiveMountEffects(current, finishedWork) {
	  var previousCache = null;
	  null !== current && null !== current.memoizedState && null !== current.memoizedState.cachePool && (previousCache = current.memoizedState.cachePool.pool);
	  current = null;
	  null !== finishedWork.memoizedState && null !== finishedWork.memoizedState.cachePool && (current = finishedWork.memoizedState.cachePool.pool);
	  current !== previousCache && (null != current && current.refCount++, null != previousCache && releaseCache(previousCache));
	}
	function commitCachePassiveMountEffect(current, finishedWork) {
	  current = null;
	  null !== finishedWork.alternate && (current = finishedWork.alternate.memoizedState.cache);
	  finishedWork = finishedWork.memoizedState.cache;
	  finishedWork !== current && (finishedWork.refCount++, null != current && releaseCache(current));
	}
	function recursivelyTraversePassiveMountEffects(root2, parentFiber, committedLanes, committedTransitions) {
	  if (parentFiber.subtreeFlags & 10256)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      commitPassiveMountOnFiber(
	        root2,
	        parentFiber,
	        committedLanes,
	        committedTransitions
	      ), parentFiber = parentFiber.sibling;
	}
	function commitPassiveMountOnFiber(finishedRoot, finishedWork, committedLanes, committedTransitions) {
	  var flags = finishedWork.flags;
	  switch (finishedWork.tag) {
	    case 0:
	    case 11:
	    case 15:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      flags & 2048 && commitHookEffectListMount(9, finishedWork);
	      break;
	    case 3:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      flags & 2048 && (finishedRoot = null, null !== finishedWork.alternate && (finishedRoot = finishedWork.alternate.memoizedState.cache), finishedWork = finishedWork.memoizedState.cache, finishedWork !== finishedRoot && (finishedWork.refCount++, null != finishedRoot && releaseCache(finishedRoot)));
	      break;
	    case 12:
	      if (flags & 2048) {
	        recursivelyTraversePassiveMountEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions
	        );
	        finishedRoot = finishedWork.stateNode;
	        try {
	          var _finishedWork$memoize2 = finishedWork.memoizedProps, id = _finishedWork$memoize2.id, onPostCommit = _finishedWork$memoize2.onPostCommit;
	          "function" === typeof onPostCommit && onPostCommit(
	            id,
	            null === finishedWork.alternate ? "mount" : "update",
	            finishedRoot.passiveEffectDuration,
	            -0
	          );
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      } else
	        recursivelyTraversePassiveMountEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions
	        );
	      break;
	    case 23:
	      break;
	    case 22:
	      _finishedWork$memoize2 = finishedWork.stateNode;
	      null !== finishedWork.memoizedState ? _finishedWork$memoize2._visibility & 4 ? recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      ) : recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork) : _finishedWork$memoize2._visibility & 4 ? recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      ) : (_finishedWork$memoize2._visibility |= 4, recursivelyTraverseReconnectPassiveEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions,
	        0 !== (finishedWork.subtreeFlags & 10256)
	      ));
	      flags & 2048 && commitOffscreenPassiveMountEffects(
	        finishedWork.alternate,
	        finishedWork
	      );
	      break;
	    case 24:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
	      break;
	    default:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	  }
	}
	function recursivelyTraverseReconnectPassiveEffects(finishedRoot$jscomp$0, parentFiber, committedLanes$jscomp$0, committedTransitions$jscomp$0, includeWorkInProgressEffects) {
	  includeWorkInProgressEffects = includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 10256);
	  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	    var finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, committedLanes = committedLanes$jscomp$0, committedTransitions = committedTransitions$jscomp$0, flags = finishedWork.flags;
	    switch (finishedWork.tag) {
	      case 0:
	      case 11:
	      case 15:
	        recursivelyTraverseReconnectPassiveEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions,
	          includeWorkInProgressEffects
	        );
	        commitHookEffectListMount(8, finishedWork);
	        break;
	      case 23:
	        break;
	      case 22:
	        var instance = finishedWork.stateNode;
	        null !== finishedWork.memoizedState ? instance._visibility & 4 ? recursivelyTraverseReconnectPassiveEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions,
	          includeWorkInProgressEffects
	        ) : recursivelyTraverseAtomicPassiveEffects(
	          finishedRoot,
	          finishedWork
	        ) : (instance._visibility |= 4, recursivelyTraverseReconnectPassiveEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions,
	          includeWorkInProgressEffects
	        ));
	        includeWorkInProgressEffects && flags & 2048 && commitOffscreenPassiveMountEffects(
	          finishedWork.alternate,
	          finishedWork
	        );
	        break;
	      case 24:
	        recursivelyTraverseReconnectPassiveEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions,
	          includeWorkInProgressEffects
	        );
	        includeWorkInProgressEffects && flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
	        break;
	      default:
	        recursivelyTraverseReconnectPassiveEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions,
	          includeWorkInProgressEffects
	        );
	    }
	    parentFiber = parentFiber.sibling;
	  }
	}
	function recursivelyTraverseAtomicPassiveEffects(finishedRoot$jscomp$0, parentFiber) {
	  if (parentFiber.subtreeFlags & 10256)
	    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	      var finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, flags = finishedWork.flags;
	      switch (finishedWork.tag) {
	        case 22:
	          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
	          flags & 2048 && commitOffscreenPassiveMountEffects(
	            finishedWork.alternate,
	            finishedWork
	          );
	          break;
	        case 24:
	          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
	          flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
	          break;
	        default:
	          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
	      }
	      parentFiber = parentFiber.sibling;
	    }
	}
	var suspenseyCommitFlag = 8192;
	function recursivelyAccumulateSuspenseyCommit(parentFiber) {
	  if (parentFiber.subtreeFlags & suspenseyCommitFlag)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      accumulateSuspenseyCommitOnFiber(parentFiber), parentFiber = parentFiber.sibling;
	}
	function accumulateSuspenseyCommitOnFiber(fiber) {
	  switch (fiber.tag) {
	    case 26:
	      recursivelyAccumulateSuspenseyCommit(fiber);
	      fiber.flags & suspenseyCommitFlag && null !== fiber.memoizedState && suspendResource(
	        currentHoistableRoot,
	        fiber.memoizedState,
	        fiber.memoizedProps
	      );
	      break;
	    case 5:
	      recursivelyAccumulateSuspenseyCommit(fiber);
	      break;
	    case 3:
	    case 4:
	      var previousHoistableRoot = currentHoistableRoot;
	      currentHoistableRoot = getHoistableRoot(fiber.stateNode.containerInfo);
	      recursivelyAccumulateSuspenseyCommit(fiber);
	      currentHoistableRoot = previousHoistableRoot;
	      break;
	    case 22:
	      null === fiber.memoizedState && (previousHoistableRoot = fiber.alternate, null !== previousHoistableRoot && null !== previousHoistableRoot.memoizedState ? (previousHoistableRoot = suspenseyCommitFlag, suspenseyCommitFlag = 16777216, recursivelyAccumulateSuspenseyCommit(fiber), suspenseyCommitFlag = previousHoistableRoot) : recursivelyAccumulateSuspenseyCommit(fiber));
	      break;
	    default:
	      recursivelyAccumulateSuspenseyCommit(fiber);
	  }
	}
	function detachAlternateSiblings(parentFiber) {
	  var previousFiber = parentFiber.alternate;
	  if (null !== previousFiber && (parentFiber = previousFiber.child, null !== parentFiber)) {
	    previousFiber.child = null;
	    do
	      previousFiber = parentFiber.sibling, parentFiber.sibling = null, parentFiber = previousFiber;
	    while (null !== parentFiber);
	  }
	}
	function recursivelyTraversePassiveUnmountEffects(parentFiber) {
	  var deletions = parentFiber.deletions;
	  if (0 !== (parentFiber.flags & 16)) {
	    if (null !== deletions)
	      for (var i = 0; i < deletions.length; i++) {
	        var childToDelete = deletions[i];
	        nextEffect = childToDelete;
	        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
	          childToDelete,
	          parentFiber
	        );
	      }
	    detachAlternateSiblings(parentFiber);
	  }
	  if (parentFiber.subtreeFlags & 10256)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      commitPassiveUnmountOnFiber(parentFiber), parentFiber = parentFiber.sibling;
	}
	function commitPassiveUnmountOnFiber(finishedWork) {
	  switch (finishedWork.tag) {
	    case 0:
	    case 11:
	    case 15:
	      recursivelyTraversePassiveUnmountEffects(finishedWork);
	      finishedWork.flags & 2048 && commitHookEffectListUnmount(9, finishedWork, finishedWork.return);
	      break;
	    case 3:
	      recursivelyTraversePassiveUnmountEffects(finishedWork);
	      break;
	    case 12:
	      recursivelyTraversePassiveUnmountEffects(finishedWork);
	      break;
	    case 22:
	      var instance = finishedWork.stateNode;
	      null !== finishedWork.memoizedState && instance._visibility & 4 && (null === finishedWork.return || 13 !== finishedWork.return.tag) ? (instance._visibility &= -5, recursivelyTraverseDisconnectPassiveEffects(finishedWork)) : recursivelyTraversePassiveUnmountEffects(finishedWork);
	      break;
	    default:
	      recursivelyTraversePassiveUnmountEffects(finishedWork);
	  }
	}
	function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
	  var deletions = parentFiber.deletions;
	  if (0 !== (parentFiber.flags & 16)) {
	    if (null !== deletions)
	      for (var i = 0; i < deletions.length; i++) {
	        var childToDelete = deletions[i];
	        nextEffect = childToDelete;
	        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
	          childToDelete,
	          parentFiber
	        );
	      }
	    detachAlternateSiblings(parentFiber);
	  }
	  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	    deletions = parentFiber;
	    switch (deletions.tag) {
	      case 0:
	      case 11:
	      case 15:
	        commitHookEffectListUnmount(8, deletions, deletions.return);
	        recursivelyTraverseDisconnectPassiveEffects(deletions);
	        break;
	      case 22:
	        i = deletions.stateNode;
	        i._visibility & 4 && (i._visibility &= -5, recursivelyTraverseDisconnectPassiveEffects(deletions));
	        break;
	      default:
	        recursivelyTraverseDisconnectPassiveEffects(deletions);
	    }
	    parentFiber = parentFiber.sibling;
	  }
	}
	function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(deletedSubtreeRoot, nearestMountedAncestor) {
	  for (; null !== nextEffect; ) {
	    var fiber = nextEffect;
	    switch (fiber.tag) {
	      case 0:
	      case 11:
	      case 15:
	        commitHookEffectListUnmount(8, fiber, nearestMountedAncestor);
	        break;
	      case 23:
	      case 22:
	        if (null !== fiber.memoizedState && null !== fiber.memoizedState.cachePool) {
	          var cache = fiber.memoizedState.cachePool.pool;
	          null != cache && cache.refCount++;
	        }
	        break;
	      case 24:
	        releaseCache(fiber.memoizedState.cache);
	    }
	    cache = fiber.child;
	    if (null !== cache) cache.return = fiber, nextEffect = cache;
	    else
	      a: for (fiber = deletedSubtreeRoot; null !== nextEffect; ) {
	        cache = nextEffect;
	        var sibling = cache.sibling, returnFiber = cache.return;
	        detachFiberAfterEffects(cache);
	        if (cache === fiber) {
	          nextEffect = null;
	          break a;
	        }
	        if (null !== sibling) {
	          sibling.return = returnFiber;
	          nextEffect = sibling;
	          break a;
	        }
	        nextEffect = returnFiber;
	      }
	  }
	}
	function FiberNode(tag, pendingProps, key, mode) {
	  this.tag = tag;
	  this.key = key;
	  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
	  this.index = 0;
	  this.refCleanup = this.ref = null;
	  this.pendingProps = pendingProps;
	  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
	  this.mode = mode;
	  this.subtreeFlags = this.flags = 0;
	  this.deletions = null;
	  this.childLanes = this.lanes = 0;
	  this.alternate = null;
	}
	function createFiberImplClass(tag, pendingProps, key, mode) {
	  return new FiberNode(tag, pendingProps, key, mode);
	}
	function shouldConstruct(Component) {
	  Component = Component.prototype;
	  return !(!Component || !Component.isReactComponent);
	}
	function createWorkInProgress(current, pendingProps) {
	  var workInProgress2 = current.alternate;
	  null === workInProgress2 ? (workInProgress2 = createFiberImplClass(
	    current.tag,
	    pendingProps,
	    current.key,
	    current.mode
	  ), workInProgress2.elementType = current.elementType, workInProgress2.type = current.type, workInProgress2.stateNode = current.stateNode, workInProgress2.alternate = current, current.alternate = workInProgress2) : (workInProgress2.pendingProps = pendingProps, workInProgress2.type = current.type, workInProgress2.flags = 0, workInProgress2.subtreeFlags = 0, workInProgress2.deletions = null);
	  workInProgress2.flags = current.flags & 31457280;
	  workInProgress2.childLanes = current.childLanes;
	  workInProgress2.lanes = current.lanes;
	  workInProgress2.child = current.child;
	  workInProgress2.memoizedProps = current.memoizedProps;
	  workInProgress2.memoizedState = current.memoizedState;
	  workInProgress2.updateQueue = current.updateQueue;
	  pendingProps = current.dependencies;
	  workInProgress2.dependencies = null === pendingProps ? null : { lanes: pendingProps.lanes, firstContext: pendingProps.firstContext };
	  workInProgress2.sibling = current.sibling;
	  workInProgress2.index = current.index;
	  workInProgress2.ref = current.ref;
	  workInProgress2.refCleanup = current.refCleanup;
	  return workInProgress2;
	}
	function resetWorkInProgress(workInProgress2, renderLanes2) {
	  workInProgress2.flags &= 31457282;
	  var current = workInProgress2.alternate;
	  null === current ? (workInProgress2.childLanes = 0, workInProgress2.lanes = renderLanes2, workInProgress2.child = null, workInProgress2.subtreeFlags = 0, workInProgress2.memoizedProps = null, workInProgress2.memoizedState = null, workInProgress2.updateQueue = null, workInProgress2.dependencies = null, workInProgress2.stateNode = null) : (workInProgress2.childLanes = current.childLanes, workInProgress2.lanes = current.lanes, workInProgress2.child = current.child, workInProgress2.subtreeFlags = 0, workInProgress2.deletions = null, workInProgress2.memoizedProps = current.memoizedProps, workInProgress2.memoizedState = current.memoizedState, workInProgress2.updateQueue = current.updateQueue, workInProgress2.type = current.type, renderLanes2 = current.dependencies, workInProgress2.dependencies = null === renderLanes2 ? null : {
	    lanes: renderLanes2.lanes,
	    firstContext: renderLanes2.firstContext
	  });
	  return workInProgress2;
	}
	function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes) {
	  var fiberTag = 0;
	  owner = type;
	  if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1);
	  else if ("string" === typeof type)
	    fiberTag = isHostHoistableType(
	      type,
	      pendingProps,
	      contextStackCursor.current
	    ) ? 26 : "html" === type || "head" === type || "body" === type ? 27 : 5;
	  else
	    a: switch (type) {
	      case REACT_FRAGMENT_TYPE:
	        return createFiberFromFragment(pendingProps.children, mode, lanes, key);
	      case REACT_STRICT_MODE_TYPE:
	        fiberTag = 8;
	        mode |= 24;
	        break;
	      case REACT_PROFILER_TYPE:
	        return type = createFiberImplClass(12, pendingProps, key, mode | 2), type.elementType = REACT_PROFILER_TYPE, type.lanes = lanes, type;
	      case REACT_SUSPENSE_TYPE:
	        return type = createFiberImplClass(13, pendingProps, key, mode), type.elementType = REACT_SUSPENSE_TYPE, type.lanes = lanes, type;
	      case REACT_SUSPENSE_LIST_TYPE:
	        return type = createFiberImplClass(19, pendingProps, key, mode), type.elementType = REACT_SUSPENSE_LIST_TYPE, type.lanes = lanes, type;
	      case REACT_OFFSCREEN_TYPE:
	        return createFiberFromOffscreen(pendingProps, mode, lanes, key);
	      default:
	        if ("object" === typeof type && null !== type)
	          switch (type.$$typeof) {
	            case REACT_PROVIDER_TYPE:
	            case REACT_CONTEXT_TYPE:
	              fiberTag = 10;
	              break a;
	            case REACT_CONSUMER_TYPE:
	              fiberTag = 9;
	              break a;
	            case REACT_FORWARD_REF_TYPE:
	              fiberTag = 11;
	              break a;
	            case REACT_MEMO_TYPE:
	              fiberTag = 14;
	              break a;
	            case REACT_LAZY_TYPE:
	              fiberTag = 16;
	              owner = null;
	              break a;
	          }
	        fiberTag = 29;
	        pendingProps = Error(
	          formatProdErrorMessage(130, null === type ? "null" : typeof type, "")
	        );
	        owner = null;
	    }
	  key = createFiberImplClass(fiberTag, pendingProps, key, mode);
	  key.elementType = type;
	  key.type = owner;
	  key.lanes = lanes;
	  return key;
	}
	function createFiberFromFragment(elements, mode, lanes, key) {
	  elements = createFiberImplClass(7, elements, key, mode);
	  elements.lanes = lanes;
	  return elements;
	}
	function createFiberFromOffscreen(pendingProps, mode, lanes, key) {
	  pendingProps = createFiberImplClass(22, pendingProps, key, mode);
	  pendingProps.elementType = REACT_OFFSCREEN_TYPE;
	  pendingProps.lanes = lanes;
	  var primaryChildInstance = {
	    _visibility: 1,
	    _pendingVisibility: 1,
	    _pendingMarkers: null,
	    _retryCache: null,
	    _transitions: null,
	    _current: null,
	    detach: function() {
	      var fiber = primaryChildInstance._current;
	      if (null === fiber) throw Error(formatProdErrorMessage(456));
	      if (0 === (primaryChildInstance._pendingVisibility & 2)) {
	        var root2 = enqueueConcurrentRenderForLane(fiber, 2);
	        null !== root2 && (primaryChildInstance._pendingVisibility |= 2, scheduleUpdateOnFiber(root2, fiber, 2));
	      }
	    },
	    attach: function() {
	      var fiber = primaryChildInstance._current;
	      if (null === fiber) throw Error(formatProdErrorMessage(456));
	      if (0 !== (primaryChildInstance._pendingVisibility & 2)) {
	        var root2 = enqueueConcurrentRenderForLane(fiber, 2);
	        null !== root2 && (primaryChildInstance._pendingVisibility &= -3, scheduleUpdateOnFiber(root2, fiber, 2));
	      }
	    }
	  };
	  pendingProps.stateNode = primaryChildInstance;
	  return pendingProps;
	}
	function createFiberFromText(content, mode, lanes) {
	  content = createFiberImplClass(6, content, null, mode);
	  content.lanes = lanes;
	  return content;
	}
	function createFiberFromPortal(portal, mode, lanes) {
	  mode = createFiberImplClass(
	    4,
	    null !== portal.children ? portal.children : [],
	    portal.key,
	    mode
	  );
	  mode.lanes = lanes;
	  mode.stateNode = {
	    containerInfo: portal.containerInfo,
	    pendingChildren: null,
	    implementation: portal.implementation
	  };
	  return mode;
	}
	function markUpdate(workInProgress2) {
	  workInProgress2.flags |= 4;
	}
	function preloadResourceAndSuspendIfNeeded(workInProgress2, resource) {
	  if ("stylesheet" !== resource.type || 0 !== (resource.state.loading & 4))
	    workInProgress2.flags &= -16777217;
	  else if (workInProgress2.flags |= 16777216, !preloadResource(resource)) {
	    resource = suspenseHandlerStackCursor.current;
	    if (null !== resource && ((workInProgressRootRenderLanes & 4194176) === workInProgressRootRenderLanes ? null !== shellBoundary : (workInProgressRootRenderLanes & 62914560) !== workInProgressRootRenderLanes && 0 === (workInProgressRootRenderLanes & 536870912) || resource !== shellBoundary))
	      throw suspendedThenable = noopSuspenseyCommitThenable, SuspenseyCommitException;
	    workInProgress2.flags |= 8192;
	  }
	}
	function scheduleRetryEffect(workInProgress2, retryQueue) {
	  null !== retryQueue && (workInProgress2.flags |= 4);
	  workInProgress2.flags & 16384 && (retryQueue = 22 !== workInProgress2.tag ? claimNextRetryLane() : 536870912, workInProgress2.lanes |= retryQueue, workInProgressSuspendedRetryLanes |= retryQueue);
	}
	function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
	  if (!isHydrating)
	    switch (renderState.tailMode) {
	      case "hidden":
	        hasRenderedATailFallback = renderState.tail;
	        for (var lastTailNode = null; null !== hasRenderedATailFallback; )
	          null !== hasRenderedATailFallback.alternate && (lastTailNode = hasRenderedATailFallback), hasRenderedATailFallback = hasRenderedATailFallback.sibling;
	        null === lastTailNode ? renderState.tail = null : lastTailNode.sibling = null;
	        break;
	      case "collapsed":
	        lastTailNode = renderState.tail;
	        for (var lastTailNode$131 = null; null !== lastTailNode; )
	          null !== lastTailNode.alternate && (lastTailNode$131 = lastTailNode), lastTailNode = lastTailNode.sibling;
	        null === lastTailNode$131 ? hasRenderedATailFallback || null === renderState.tail ? renderState.tail = null : renderState.tail.sibling = null : lastTailNode$131.sibling = null;
	    }
	}
	function bubbleProperties(completedWork) {
	  var didBailout = null !== completedWork.alternate && completedWork.alternate.child === completedWork.child, newChildLanes = 0, subtreeFlags = 0;
	  if (didBailout)
	    for (var child$132 = completedWork.child; null !== child$132; )
	      newChildLanes |= child$132.lanes | child$132.childLanes, subtreeFlags |= child$132.subtreeFlags & 31457280, subtreeFlags |= child$132.flags & 31457280, child$132.return = completedWork, child$132 = child$132.sibling;
	  else
	    for (child$132 = completedWork.child; null !== child$132; )
	      newChildLanes |= child$132.lanes | child$132.childLanes, subtreeFlags |= child$132.subtreeFlags, subtreeFlags |= child$132.flags, child$132.return = completedWork, child$132 = child$132.sibling;
	  completedWork.subtreeFlags |= subtreeFlags;
	  completedWork.childLanes = newChildLanes;
	  return didBailout;
	}
	function completeWork(current, workInProgress2, renderLanes2) {
	  var newProps = workInProgress2.pendingProps;
	  popTreeContext(workInProgress2);
	  switch (workInProgress2.tag) {
	    case 16:
	    case 15:
	    case 0:
	    case 11:
	    case 7:
	    case 8:
	    case 12:
	    case 9:
	    case 14:
	      return bubbleProperties(workInProgress2), null;
	    case 1:
	      return bubbleProperties(workInProgress2), null;
	    case 3:
	      renderLanes2 = workInProgress2.stateNode;
	      newProps = null;
	      null !== current && (newProps = current.memoizedState.cache);
	      workInProgress2.memoizedState.cache !== newProps && (workInProgress2.flags |= 2048);
	      popProvider(CacheContext);
	      popHostContainer();
	      renderLanes2.pendingContext && (renderLanes2.context = renderLanes2.pendingContext, renderLanes2.pendingContext = null);
	      if (null === current || null === current.child)
	        popHydrationState(workInProgress2) ? markUpdate(workInProgress2) : null === current || current.memoizedState.isDehydrated && 0 === (workInProgress2.flags & 256) || (workInProgress2.flags |= 1024, null !== hydrationErrors && (queueRecoverableErrors(hydrationErrors), hydrationErrors = null));
	      bubbleProperties(workInProgress2);
	      return null;
	    case 26:
	      return renderLanes2 = workInProgress2.memoizedState, null === current ? (markUpdate(workInProgress2), null !== renderLanes2 ? (bubbleProperties(workInProgress2), preloadResourceAndSuspendIfNeeded(workInProgress2, renderLanes2)) : (bubbleProperties(workInProgress2), workInProgress2.flags &= -16777217)) : renderLanes2 ? renderLanes2 !== current.memoizedState ? (markUpdate(workInProgress2), bubbleProperties(workInProgress2), preloadResourceAndSuspendIfNeeded(workInProgress2, renderLanes2)) : (bubbleProperties(workInProgress2), workInProgress2.flags &= -16777217) : (current.memoizedProps !== newProps && markUpdate(workInProgress2), bubbleProperties(workInProgress2), workInProgress2.flags &= -16777217), null;
	    case 27:
	      popHostContext(workInProgress2);
	      renderLanes2 = rootInstanceStackCursor.current;
	      var type = workInProgress2.type;
	      if (null !== current && null != workInProgress2.stateNode)
	        current.memoizedProps !== newProps && markUpdate(workInProgress2);
	      else {
	        if (!newProps) {
	          if (null === workInProgress2.stateNode)
	            throw Error(formatProdErrorMessage(166));
	          bubbleProperties(workInProgress2);
	          return null;
	        }
	        current = contextStackCursor.current;
	        popHydrationState(workInProgress2) ? prepareToHydrateHostInstance(workInProgress2) : (current = resolveSingletonInstance(type, newProps, renderLanes2), workInProgress2.stateNode = current, markUpdate(workInProgress2));
	      }
	      bubbleProperties(workInProgress2);
	      return null;
	    case 5:
	      popHostContext(workInProgress2);
	      renderLanes2 = workInProgress2.type;
	      if (null !== current && null != workInProgress2.stateNode)
	        current.memoizedProps !== newProps && markUpdate(workInProgress2);
	      else {
	        if (!newProps) {
	          if (null === workInProgress2.stateNode)
	            throw Error(formatProdErrorMessage(166));
	          bubbleProperties(workInProgress2);
	          return null;
	        }
	        current = contextStackCursor.current;
	        if (popHydrationState(workInProgress2))
	          prepareToHydrateHostInstance(workInProgress2);
	        else {
	          type = getOwnerDocumentFromRootContainer(
	            rootInstanceStackCursor.current
	          );
	          switch (current) {
	            case 1:
	              current = type.createElementNS(
	                "http://www.w3.org/2000/svg",
	                renderLanes2
	              );
	              break;
	            case 2:
	              current = type.createElementNS(
	                "http://www.w3.org/1998/Math/MathML",
	                renderLanes2
	              );
	              break;
	            default:
	              switch (renderLanes2) {
	                case "svg":
	                  current = type.createElementNS(
	                    "http://www.w3.org/2000/svg",
	                    renderLanes2
	                  );
	                  break;
	                case "math":
	                  current = type.createElementNS(
	                    "http://www.w3.org/1998/Math/MathML",
	                    renderLanes2
	                  );
	                  break;
	                case "script":
	                  current = type.createElement("div");
	                  current.innerHTML = "<script></script>";
	                  current = current.removeChild(current.firstChild);
	                  break;
	                case "select":
	                  current = "string" === typeof newProps.is ? type.createElement("select", { is: newProps.is }) : type.createElement("select");
	                  newProps.multiple ? current.multiple = true : newProps.size && (current.size = newProps.size);
	                  break;
	                default:
	                  current = "string" === typeof newProps.is ? type.createElement(renderLanes2, { is: newProps.is }) : type.createElement(renderLanes2);
	              }
	          }
	          current[internalInstanceKey] = workInProgress2;
	          current[internalPropsKey] = newProps;
	          a: for (type = workInProgress2.child; null !== type; ) {
	            if (5 === type.tag || 6 === type.tag)
	              current.appendChild(type.stateNode);
	            else if (4 !== type.tag && 27 !== type.tag && null !== type.child) {
	              type.child.return = type;
	              type = type.child;
	              continue;
	            }
	            if (type === workInProgress2) break a;
	            for (; null === type.sibling; ) {
	              if (null === type.return || type.return === workInProgress2)
	                break a;
	              type = type.return;
	            }
	            type.sibling.return = type.return;
	            type = type.sibling;
	          }
	          workInProgress2.stateNode = current;
	          a: switch (setInitialProperties(current, renderLanes2, newProps), renderLanes2) {
	            case "button":
	            case "input":
	            case "select":
	            case "textarea":
	              current = !!newProps.autoFocus;
	              break a;
	            case "img":
	              current = true;
	              break a;
	            default:
	              current = false;
	          }
	          current && markUpdate(workInProgress2);
	        }
	      }
	      bubbleProperties(workInProgress2);
	      workInProgress2.flags &= -16777217;
	      return null;
	    case 6:
	      if (current && null != workInProgress2.stateNode)
	        current.memoizedProps !== newProps && markUpdate(workInProgress2);
	      else {
	        if ("string" !== typeof newProps && null === workInProgress2.stateNode)
	          throw Error(formatProdErrorMessage(166));
	        current = rootInstanceStackCursor.current;
	        if (popHydrationState(workInProgress2)) {
	          current = workInProgress2.stateNode;
	          renderLanes2 = workInProgress2.memoizedProps;
	          newProps = null;
	          type = hydrationParentFiber;
	          if (null !== type)
	            switch (type.tag) {
	              case 27:
	              case 5:
	                newProps = type.memoizedProps;
	            }
	          current[internalInstanceKey] = workInProgress2;
	          current = current.nodeValue === renderLanes2 || null !== newProps && true === newProps.suppressHydrationWarning || checkForUnmatchedText(current.nodeValue, renderLanes2) ? true : false;
	          current || throwOnHydrationMismatch(workInProgress2);
	        } else
	          current = getOwnerDocumentFromRootContainer(current).createTextNode(
	            newProps
	          ), current[internalInstanceKey] = workInProgress2, workInProgress2.stateNode = current;
	      }
	      bubbleProperties(workInProgress2);
	      return null;
	    case 13:
	      newProps = workInProgress2.memoizedState;
	      if (null === current || null !== current.memoizedState && null !== current.memoizedState.dehydrated) {
	        type = popHydrationState(workInProgress2);
	        if (null !== newProps && null !== newProps.dehydrated) {
	          if (null === current) {
	            if (!type) throw Error(formatProdErrorMessage(318));
	            type = workInProgress2.memoizedState;
	            type = null !== type ? type.dehydrated : null;
	            if (!type) throw Error(formatProdErrorMessage(317));
	            type[internalInstanceKey] = workInProgress2;
	          } else
	            resetHydrationState(), 0 === (workInProgress2.flags & 128) && (workInProgress2.memoizedState = null), workInProgress2.flags |= 4;
	          bubbleProperties(workInProgress2);
	          type = false;
	        } else
	          null !== hydrationErrors && (queueRecoverableErrors(hydrationErrors), hydrationErrors = null), type = true;
	        if (!type) {
	          if (workInProgress2.flags & 256)
	            return popSuspenseHandler(workInProgress2), workInProgress2;
	          popSuspenseHandler(workInProgress2);
	          return null;
	        }
	      }
	      popSuspenseHandler(workInProgress2);
	      if (0 !== (workInProgress2.flags & 128))
	        return workInProgress2.lanes = renderLanes2, workInProgress2;
	      renderLanes2 = null !== newProps;
	      current = null !== current && null !== current.memoizedState;
	      if (renderLanes2) {
	        newProps = workInProgress2.child;
	        type = null;
	        null !== newProps.alternate && null !== newProps.alternate.memoizedState && null !== newProps.alternate.memoizedState.cachePool && (type = newProps.alternate.memoizedState.cachePool.pool);
	        var cache$144 = null;
	        null !== newProps.memoizedState && null !== newProps.memoizedState.cachePool && (cache$144 = newProps.memoizedState.cachePool.pool);
	        cache$144 !== type && (newProps.flags |= 2048);
	      }
	      renderLanes2 !== current && renderLanes2 && (workInProgress2.child.flags |= 8192);
	      scheduleRetryEffect(workInProgress2, workInProgress2.updateQueue);
	      bubbleProperties(workInProgress2);
	      return null;
	    case 4:
	      return popHostContainer(), null === current && listenToAllSupportedEvents(workInProgress2.stateNode.containerInfo), bubbleProperties(workInProgress2), null;
	    case 10:
	      return popProvider(workInProgress2.type), bubbleProperties(workInProgress2), null;
	    case 19:
	      pop(suspenseStackCursor);
	      type = workInProgress2.memoizedState;
	      if (null === type) return bubbleProperties(workInProgress2), null;
	      newProps = 0 !== (workInProgress2.flags & 128);
	      cache$144 = type.rendering;
	      if (null === cache$144)
	        if (newProps) cutOffTailIfNeeded(type, false);
	        else {
	          if (0 !== workInProgressRootExitStatus || null !== current && 0 !== (current.flags & 128))
	            for (current = workInProgress2.child; null !== current; ) {
	              cache$144 = findFirstSuspended(current);
	              if (null !== cache$144) {
	                workInProgress2.flags |= 128;
	                cutOffTailIfNeeded(type, false);
	                current = cache$144.updateQueue;
	                workInProgress2.updateQueue = current;
	                scheduleRetryEffect(workInProgress2, current);
	                workInProgress2.subtreeFlags = 0;
	                current = renderLanes2;
	                for (renderLanes2 = workInProgress2.child; null !== renderLanes2; )
	                  resetWorkInProgress(renderLanes2, current), renderLanes2 = renderLanes2.sibling;
	                push(
	                  suspenseStackCursor,
	                  suspenseStackCursor.current & 1 | 2
	                );
	                return workInProgress2.child;
	              }
	              current = current.sibling;
	            }
	          null !== type.tail && now() > workInProgressRootRenderTargetTime && (workInProgress2.flags |= 128, newProps = true, cutOffTailIfNeeded(type, false), workInProgress2.lanes = 4194304);
	        }
	      else {
	        if (!newProps)
	          if (current = findFirstSuspended(cache$144), null !== current) {
	            if (workInProgress2.flags |= 128, newProps = true, current = current.updateQueue, workInProgress2.updateQueue = current, scheduleRetryEffect(workInProgress2, current), cutOffTailIfNeeded(type, true), null === type.tail && "hidden" === type.tailMode && !cache$144.alternate && !isHydrating)
	              return bubbleProperties(workInProgress2), null;
	          } else
	            2 * now() - type.renderingStartTime > workInProgressRootRenderTargetTime && 536870912 !== renderLanes2 && (workInProgress2.flags |= 128, newProps = true, cutOffTailIfNeeded(type, false), workInProgress2.lanes = 4194304);
	        type.isBackwards ? (cache$144.sibling = workInProgress2.child, workInProgress2.child = cache$144) : (current = type.last, null !== current ? current.sibling = cache$144 : workInProgress2.child = cache$144, type.last = cache$144);
	      }
	      if (null !== type.tail)
	        return workInProgress2 = type.tail, type.rendering = workInProgress2, type.tail = workInProgress2.sibling, type.renderingStartTime = now(), workInProgress2.sibling = null, current = suspenseStackCursor.current, push(suspenseStackCursor, newProps ? current & 1 | 2 : current & 1), workInProgress2;
	      bubbleProperties(workInProgress2);
	      return null;
	    case 22:
	    case 23:
	      return popSuspenseHandler(workInProgress2), popHiddenContext(), newProps = null !== workInProgress2.memoizedState, null !== current ? null !== current.memoizedState !== newProps && (workInProgress2.flags |= 8192) : newProps && (workInProgress2.flags |= 8192), newProps ? 0 !== (renderLanes2 & 536870912) && 0 === (workInProgress2.flags & 128) && (bubbleProperties(workInProgress2), workInProgress2.subtreeFlags & 6 && (workInProgress2.flags |= 8192)) : bubbleProperties(workInProgress2), renderLanes2 = workInProgress2.updateQueue, null !== renderLanes2 && scheduleRetryEffect(workInProgress2, renderLanes2.retryQueue), renderLanes2 = null, null !== current && null !== current.memoizedState && null !== current.memoizedState.cachePool && (renderLanes2 = current.memoizedState.cachePool.pool), newProps = null, null !== workInProgress2.memoizedState && null !== workInProgress2.memoizedState.cachePool && (newProps = workInProgress2.memoizedState.cachePool.pool), newProps !== renderLanes2 && (workInProgress2.flags |= 2048), null !== current && pop(resumedCache), null;
	    case 24:
	      return renderLanes2 = null, null !== current && (renderLanes2 = current.memoizedState.cache), workInProgress2.memoizedState.cache !== renderLanes2 && (workInProgress2.flags |= 2048), popProvider(CacheContext), bubbleProperties(workInProgress2), null;
	    case 25:
	      return null;
	  }
	  throw Error(formatProdErrorMessage(156, workInProgress2.tag));
	}
	function unwindWork(current, workInProgress2) {
	  popTreeContext(workInProgress2);
	  switch (workInProgress2.tag) {
	    case 1:
	      return current = workInProgress2.flags, current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
	    case 3:
	      return popProvider(CacheContext), popHostContainer(), current = workInProgress2.flags, 0 !== (current & 65536) && 0 === (current & 128) ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
	    case 26:
	    case 27:
	    case 5:
	      return popHostContext(workInProgress2), null;
	    case 13:
	      popSuspenseHandler(workInProgress2);
	      current = workInProgress2.memoizedState;
	      if (null !== current && null !== current.dehydrated) {
	        if (null === workInProgress2.alternate)
	          throw Error(formatProdErrorMessage(340));
	        resetHydrationState();
	      }
	      current = workInProgress2.flags;
	      return current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
	    case 19:
	      return pop(suspenseStackCursor), null;
	    case 4:
	      return popHostContainer(), null;
	    case 10:
	      return popProvider(workInProgress2.type), null;
	    case 22:
	    case 23:
	      return popSuspenseHandler(workInProgress2), popHiddenContext(), null !== current && pop(resumedCache), current = workInProgress2.flags, current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
	    case 24:
	      return popProvider(CacheContext), null;
	    case 25:
	      return null;
	    default:
	      return null;
	  }
	}
	function unwindInterruptedWork(current, interruptedWork) {
	  popTreeContext(interruptedWork);
	  switch (interruptedWork.tag) {
	    case 3:
	      popProvider(CacheContext);
	      popHostContainer();
	      break;
	    case 26:
	    case 27:
	    case 5:
	      popHostContext(interruptedWork);
	      break;
	    case 4:
	      popHostContainer();
	      break;
	    case 13:
	      popSuspenseHandler(interruptedWork);
	      break;
	    case 19:
	      pop(suspenseStackCursor);
	      break;
	    case 10:
	      popProvider(interruptedWork.type);
	      break;
	    case 22:
	    case 23:
	      popSuspenseHandler(interruptedWork);
	      popHiddenContext();
	      null !== current && pop(resumedCache);
	      break;
	    case 24:
	      popProvider(CacheContext);
	  }
	}
	var DefaultAsyncDispatcher = {
	  getCacheForType: function(resourceType) {
	    var cache = readContext(CacheContext), cacheForType = cache.data.get(resourceType);
	    void 0 === cacheForType && (cacheForType = resourceType(), cache.data.set(resourceType, cacheForType));
	    return cacheForType;
	  }
	}, PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map, executionContext = 0, workInProgressRoot = null, workInProgress = null, workInProgressRootRenderLanes = 0, workInProgressSuspendedReason = 0, workInProgressThrownValue = null, workInProgressRootDidSkipSuspendedSiblings = false, workInProgressRootIsPrerendering = false, workInProgressRootDidAttachPingListener = false, entangledRenderLanes = 0, workInProgressRootExitStatus = 0, workInProgressRootSkippedLanes = 0, workInProgressRootInterleavedUpdatedLanes = 0, workInProgressRootPingedLanes = 0, workInProgressDeferredLane = 0, workInProgressSuspendedRetryLanes = 0, workInProgressRootConcurrentErrors = null, workInProgressRootRecoverableErrors = null, workInProgressRootDidIncludeRecursiveRenderUpdate = false, globalMostRecentFallbackTime = 0, workInProgressRootRenderTargetTime = Infinity, workInProgressTransitions = null, legacyErrorBoundariesThatAlreadyFailed = null, rootDoesHavePassiveEffects = false, rootWithPendingPassiveEffects = null, pendingPassiveEffectsLanes = 0, pendingPassiveEffectsRemainingLanes = 0, pendingPassiveTransitions = null, nestedUpdateCount = 0, rootWithNestedUpdates = null;
	function requestUpdateLane() {
	  if (0 !== (executionContext & 2) && 0 !== workInProgressRootRenderLanes)
	    return workInProgressRootRenderLanes & -workInProgressRootRenderLanes;
	  if (null !== ReactSharedInternals.T) {
	    var actionScopeLane = currentEntangledLane;
	    return 0 !== actionScopeLane ? actionScopeLane : requestTransitionLane();
	  }
	  return resolveUpdatePriority();
	}
	function requestDeferredLane() {
	  0 === workInProgressDeferredLane && (workInProgressDeferredLane = 0 === (workInProgressRootRenderLanes & 536870912) || isHydrating ? claimNextTransitionLane() : 536870912);
	  var suspenseHandler = suspenseHandlerStackCursor.current;
	  null !== suspenseHandler && (suspenseHandler.flags |= 32);
	  return workInProgressDeferredLane;
	}
	function scheduleUpdateOnFiber(root2, fiber, lane) {
	  if (root2 === workInProgressRoot && 2 === workInProgressSuspendedReason || null !== root2.cancelPendingCommit)
	    prepareFreshStack(root2, 0), markRootSuspended(
	      root2,
	      workInProgressRootRenderLanes,
	      workInProgressDeferredLane,
	      false
	    );
	  markRootUpdated$1(root2, lane);
	  if (0 === (executionContext & 2) || root2 !== workInProgressRoot)
	    root2 === workInProgressRoot && (0 === (executionContext & 2) && (workInProgressRootInterleavedUpdatedLanes |= lane), 4 === workInProgressRootExitStatus && markRootSuspended(
	      root2,
	      workInProgressRootRenderLanes,
	      workInProgressDeferredLane,
	      false
	    )), ensureRootIsScheduled(root2);
	}
	function performWorkOnRoot(root$jscomp$0, lanes, forceSync) {
	  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
	  var shouldTimeSlice = !forceSync && 0 === (lanes & 60) && 0 === (lanes & root$jscomp$0.expiredLanes) || checkIfRootIsPrerendering(root$jscomp$0, lanes), exitStatus = shouldTimeSlice ? renderRootConcurrent(root$jscomp$0, lanes) : renderRootSync(root$jscomp$0, lanes, true), renderWasConcurrent = shouldTimeSlice;
	  do {
	    if (0 === exitStatus) {
	      workInProgressRootIsPrerendering && !shouldTimeSlice && markRootSuspended(root$jscomp$0, lanes, 0, false);
	      break;
	    } else if (6 === exitStatus)
	      markRootSuspended(
	        root$jscomp$0,
	        lanes,
	        0,
	        !workInProgressRootDidSkipSuspendedSiblings
	      );
	    else {
	      forceSync = root$jscomp$0.current.alternate;
	      if (renderWasConcurrent && !isRenderConsistentWithExternalStores(forceSync)) {
	        exitStatus = renderRootSync(root$jscomp$0, lanes, false);
	        renderWasConcurrent = false;
	        continue;
	      }
	      if (2 === exitStatus) {
	        renderWasConcurrent = lanes;
	        if (root$jscomp$0.errorRecoveryDisabledLanes & renderWasConcurrent)
	          var JSCompiler_inline_result = 0;
	        else
	          JSCompiler_inline_result = root$jscomp$0.pendingLanes & -536870913, JSCompiler_inline_result = 0 !== JSCompiler_inline_result ? JSCompiler_inline_result : JSCompiler_inline_result & 536870912 ? 536870912 : 0;
	        if (0 !== JSCompiler_inline_result) {
	          lanes = JSCompiler_inline_result;
	          a: {
	            var root2 = root$jscomp$0;
	            exitStatus = workInProgressRootConcurrentErrors;
	            var wasRootDehydrated = root2.current.memoizedState.isDehydrated;
	            wasRootDehydrated && (prepareFreshStack(root2, JSCompiler_inline_result).flags |= 256);
	            JSCompiler_inline_result = renderRootSync(
	              root2,
	              JSCompiler_inline_result,
	              false
	            );
	            if (2 !== JSCompiler_inline_result) {
	              if (workInProgressRootDidAttachPingListener && !wasRootDehydrated) {
	                root2.errorRecoveryDisabledLanes |= renderWasConcurrent;
	                workInProgressRootInterleavedUpdatedLanes |= renderWasConcurrent;
	                exitStatus = 4;
	                break a;
	              }
	              renderWasConcurrent = workInProgressRootRecoverableErrors;
	              workInProgressRootRecoverableErrors = exitStatus;
	              null !== renderWasConcurrent && queueRecoverableErrors(renderWasConcurrent);
	            }
	            exitStatus = JSCompiler_inline_result;
	          }
	          renderWasConcurrent = false;
	          if (2 !== exitStatus) continue;
	        }
	      }
	      if (1 === exitStatus) {
	        prepareFreshStack(root$jscomp$0, 0);
	        markRootSuspended(root$jscomp$0, lanes, 0, true);
	        break;
	      }
	      a: {
	        shouldTimeSlice = root$jscomp$0;
	        switch (exitStatus) {
	          case 0:
	          case 1:
	            throw Error(formatProdErrorMessage(345));
	          case 4:
	            if ((lanes & 4194176) === lanes) {
	              markRootSuspended(
	                shouldTimeSlice,
	                lanes,
	                workInProgressDeferredLane,
	                !workInProgressRootDidSkipSuspendedSiblings
	              );
	              break a;
	            }
	            break;
	          case 2:
	            workInProgressRootRecoverableErrors = null;
	            break;
	          case 3:
	          case 5:
	            break;
	          default:
	            throw Error(formatProdErrorMessage(329));
	        }
	        shouldTimeSlice.finishedWork = forceSync;
	        shouldTimeSlice.finishedLanes = lanes;
	        if ((lanes & 62914560) === lanes && (renderWasConcurrent = globalMostRecentFallbackTime + 300 - now(), 10 < renderWasConcurrent)) {
	          markRootSuspended(
	            shouldTimeSlice,
	            lanes,
	            workInProgressDeferredLane,
	            !workInProgressRootDidSkipSuspendedSiblings
	          );
	          if (0 !== getNextLanes(shouldTimeSlice, 0)) break a;
	          shouldTimeSlice.timeoutHandle = scheduleTimeout(
	            commitRootWhenReady.bind(
	              null,
	              shouldTimeSlice,
	              forceSync,
	              workInProgressRootRecoverableErrors,
	              workInProgressTransitions,
	              workInProgressRootDidIncludeRecursiveRenderUpdate,
	              lanes,
	              workInProgressDeferredLane,
	              workInProgressRootInterleavedUpdatedLanes,
	              workInProgressSuspendedRetryLanes,
	              workInProgressRootDidSkipSuspendedSiblings,
	              2,
	              -0,
	              0
	            ),
	            renderWasConcurrent
	          );
	          break a;
	        }
	        commitRootWhenReady(
	          shouldTimeSlice,
	          forceSync,
	          workInProgressRootRecoverableErrors,
	          workInProgressTransitions,
	          workInProgressRootDidIncludeRecursiveRenderUpdate,
	          lanes,
	          workInProgressDeferredLane,
	          workInProgressRootInterleavedUpdatedLanes,
	          workInProgressSuspendedRetryLanes,
	          workInProgressRootDidSkipSuspendedSiblings,
	          0,
	          -0,
	          0
	        );
	      }
	    }
	    break;
	  } while (1);
	  ensureRootIsScheduled(root$jscomp$0);
	}
	function queueRecoverableErrors(errors) {
	  null === workInProgressRootRecoverableErrors ? workInProgressRootRecoverableErrors = errors : workInProgressRootRecoverableErrors.push.apply(
	    workInProgressRootRecoverableErrors,
	    errors
	  );
	}
	function commitRootWhenReady(root2, finishedWork, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, lanes, spawnedLane, updatedLanes, suspendedRetryLanes, didSkipSuspendedSiblings, suspendedCommitReason, completedRenderStartTime, completedRenderEndTime) {
	  var subtreeFlags = finishedWork.subtreeFlags;
	  if (subtreeFlags & 8192 || 16785408 === (subtreeFlags & 16785408)) {
	    if (suspendedState = { stylesheets: null, count: 0, unsuspend: noop }, accumulateSuspenseyCommitOnFiber(finishedWork), finishedWork = waitForCommitToBeReady(), null !== finishedWork) {
	      root2.cancelPendingCommit = finishedWork(
	        commitRoot.bind(
	          null,
	          root2,
	          recoverableErrors,
	          transitions,
	          didIncludeRenderPhaseUpdate,
	          spawnedLane,
	          updatedLanes,
	          suspendedRetryLanes,
	          1,
	          completedRenderStartTime,
	          completedRenderEndTime
	        )
	      );
	      markRootSuspended(root2, lanes, spawnedLane, !didSkipSuspendedSiblings);
	      return;
	    }
	  }
	  commitRoot(
	    root2,
	    recoverableErrors,
	    transitions,
	    didIncludeRenderPhaseUpdate,
	    spawnedLane,
	    updatedLanes,
	    suspendedRetryLanes,
	    suspendedCommitReason,
	    completedRenderStartTime,
	    completedRenderEndTime
	  );
	}
	function isRenderConsistentWithExternalStores(finishedWork) {
	  for (var node = finishedWork; ; ) {
	    var tag = node.tag;
	    if ((0 === tag || 11 === tag || 15 === tag) && node.flags & 16384 && (tag = node.updateQueue, null !== tag && (tag = tag.stores, null !== tag)))
	      for (var i = 0; i < tag.length; i++) {
	        var check = tag[i], getSnapshot = check.getSnapshot;
	        check = check.value;
	        try {
	          if (!objectIs(getSnapshot(), check)) return false;
	        } catch (error) {
	          return false;
	        }
	      }
	    tag = node.child;
	    if (node.subtreeFlags & 16384 && null !== tag)
	      tag.return = node, node = tag;
	    else {
	      if (node === finishedWork) break;
	      for (; null === node.sibling; ) {
	        if (null === node.return || node.return === finishedWork) return true;
	        node = node.return;
	      }
	      node.sibling.return = node.return;
	      node = node.sibling;
	    }
	  }
	  return true;
	}
	function markRootSuspended(root2, suspendedLanes, spawnedLane, didAttemptEntireTree) {
	  suspendedLanes &= ~workInProgressRootPingedLanes;
	  suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
	  root2.suspendedLanes |= suspendedLanes;
	  root2.pingedLanes &= ~suspendedLanes;
	  didAttemptEntireTree && (root2.warmLanes |= suspendedLanes);
	  didAttemptEntireTree = root2.expirationTimes;
	  for (var lanes = suspendedLanes; 0 < lanes; ) {
	    var index$6 = 31 - clz32(lanes), lane = 1 << index$6;
	    didAttemptEntireTree[index$6] = -1;
	    lanes &= ~lane;
	  }
	  0 !== spawnedLane && markSpawnedDeferredLane(root2, spawnedLane, suspendedLanes);
	}
	function flushSyncWork$1() {
	  return 0 === (executionContext & 6) ? (flushSyncWorkAcrossRoots_impl(0), false) : true;
	}
	function resetWorkInProgressStack() {
	  if (null !== workInProgress) {
	    if (0 === workInProgressSuspendedReason)
	      var interruptedWork = workInProgress.return;
	    else
	      interruptedWork = workInProgress, lastContextDependency = currentlyRenderingFiber = null, resetHooksOnUnwind(interruptedWork), thenableState$1 = null, thenableIndexCounter$1 = 0, interruptedWork = workInProgress;
	    for (; null !== interruptedWork; )
	      unwindInterruptedWork(interruptedWork.alternate, interruptedWork), interruptedWork = interruptedWork.return;
	    workInProgress = null;
	  }
	}
	function prepareFreshStack(root2, lanes) {
	  root2.finishedWork = null;
	  root2.finishedLanes = 0;
	  var timeoutHandle = root2.timeoutHandle;
	  -1 !== timeoutHandle && (root2.timeoutHandle = -1, cancelTimeout(timeoutHandle));
	  timeoutHandle = root2.cancelPendingCommit;
	  null !== timeoutHandle && (root2.cancelPendingCommit = null, timeoutHandle());
	  resetWorkInProgressStack();
	  workInProgressRoot = root2;
	  workInProgress = timeoutHandle = createWorkInProgress(root2.current, null);
	  workInProgressRootRenderLanes = lanes;
	  workInProgressSuspendedReason = 0;
	  workInProgressThrownValue = null;
	  workInProgressRootDidSkipSuspendedSiblings = false;
	  workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root2, lanes);
	  workInProgressRootDidAttachPingListener = false;
	  workInProgressSuspendedRetryLanes = workInProgressDeferredLane = workInProgressRootPingedLanes = workInProgressRootInterleavedUpdatedLanes = workInProgressRootSkippedLanes = workInProgressRootExitStatus = 0;
	  workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors = null;
	  workInProgressRootDidIncludeRecursiveRenderUpdate = false;
	  0 !== (lanes & 8) && (lanes |= lanes & 32);
	  var allEntangledLanes = root2.entangledLanes;
	  if (0 !== allEntangledLanes)
	    for (root2 = root2.entanglements, allEntangledLanes &= lanes; 0 < allEntangledLanes; ) {
	      var index$4 = 31 - clz32(allEntangledLanes), lane = 1 << index$4;
	      lanes |= root2[index$4];
	      allEntangledLanes &= ~lane;
	    }
	  entangledRenderLanes = lanes;
	  finishQueueingConcurrentUpdates();
	  return timeoutHandle;
	}
	function handleThrow(root2, thrownValue) {
	  currentlyRenderingFiber$1 = null;
	  ReactSharedInternals.H = ContextOnlyDispatcher;
	  thrownValue === SuspenseException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = 3) : thrownValue === SuspenseyCommitException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = 4) : workInProgressSuspendedReason = thrownValue === SelectiveHydrationException ? 8 : null !== thrownValue && "object" === typeof thrownValue && "function" === typeof thrownValue.then ? 6 : 1;
	  workInProgressThrownValue = thrownValue;
	  null === workInProgress && (workInProgressRootExitStatus = 1, logUncaughtError(
	    root2,
	    createCapturedValueAtFiber(thrownValue, root2.current)
	  ));
	}
	function pushDispatcher() {
	  var prevDispatcher = ReactSharedInternals.H;
	  ReactSharedInternals.H = ContextOnlyDispatcher;
	  return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
	}
	function pushAsyncDispatcher() {
	  var prevAsyncDispatcher = ReactSharedInternals.A;
	  ReactSharedInternals.A = DefaultAsyncDispatcher;
	  return prevAsyncDispatcher;
	}
	function renderDidSuspendDelayIfPossible() {
	  workInProgressRootExitStatus = 4;
	  workInProgressRootDidSkipSuspendedSiblings || (workInProgressRootRenderLanes & 4194176) !== workInProgressRootRenderLanes && null !== suspenseHandlerStackCursor.current || (workInProgressRootIsPrerendering = true);
	  0 === (workInProgressRootSkippedLanes & 134217727) && 0 === (workInProgressRootInterleavedUpdatedLanes & 134217727) || null === workInProgressRoot || markRootSuspended(
	    workInProgressRoot,
	    workInProgressRootRenderLanes,
	    workInProgressDeferredLane,
	    false
	  );
	}
	function renderRootSync(root2, lanes, shouldYieldForPrerendering) {
	  var prevExecutionContext = executionContext;
	  executionContext |= 2;
	  var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
	  if (workInProgressRoot !== root2 || workInProgressRootRenderLanes !== lanes)
	    workInProgressTransitions = null, prepareFreshStack(root2, lanes);
	  lanes = false;
	  var exitStatus = workInProgressRootExitStatus;
	  a: do
	    try {
	      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
	        var unitOfWork = workInProgress, thrownValue = workInProgressThrownValue;
	        switch (workInProgressSuspendedReason) {
	          case 8:
	            resetWorkInProgressStack();
	            exitStatus = 6;
	            break a;
	          case 3:
	          case 2:
	          case 6:
	            null === suspenseHandlerStackCursor.current && (lanes = true);
	            var reason = workInProgressSuspendedReason;
	            workInProgressSuspendedReason = 0;
	            workInProgressThrownValue = null;
	            throwAndUnwindWorkLoop(root2, unitOfWork, thrownValue, reason);
	            if (shouldYieldForPrerendering && workInProgressRootIsPrerendering) {
	              exitStatus = 0;
	              break a;
	            }
	            break;
	          default:
	            reason = workInProgressSuspendedReason, workInProgressSuspendedReason = 0, workInProgressThrownValue = null, throwAndUnwindWorkLoop(root2, unitOfWork, thrownValue, reason);
	        }
	      }
	      workLoopSync();
	      exitStatus = workInProgressRootExitStatus;
	      break;
	    } catch (thrownValue$164) {
	      handleThrow(root2, thrownValue$164);
	    }
	  while (1);
	  lanes && root2.shellSuspendCounter++;
	  lastContextDependency = currentlyRenderingFiber = null;
	  executionContext = prevExecutionContext;
	  ReactSharedInternals.H = prevDispatcher;
	  ReactSharedInternals.A = prevAsyncDispatcher;
	  null === workInProgress && (workInProgressRoot = null, workInProgressRootRenderLanes = 0, finishQueueingConcurrentUpdates());
	  return exitStatus;
	}
	function workLoopSync() {
	  for (; null !== workInProgress; ) performUnitOfWork(workInProgress);
	}
	function renderRootConcurrent(root2, lanes) {
	  var prevExecutionContext = executionContext;
	  executionContext |= 2;
	  var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
	  workInProgressRoot !== root2 || workInProgressRootRenderLanes !== lanes ? (workInProgressTransitions = null, workInProgressRootRenderTargetTime = now() + 500, prepareFreshStack(root2, lanes)) : workInProgressRootIsPrerendering = checkIfRootIsPrerendering(
	    root2,
	    lanes
	  );
	  a: do
	    try {
	      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
	        lanes = workInProgress;
	        var thrownValue = workInProgressThrownValue;
	        b: switch (workInProgressSuspendedReason) {
	          case 1:
	            workInProgressSuspendedReason = 0;
	            workInProgressThrownValue = null;
	            throwAndUnwindWorkLoop(root2, lanes, thrownValue, 1);
	            break;
	          case 2:
	            if (isThenableResolved(thrownValue)) {
	              workInProgressSuspendedReason = 0;
	              workInProgressThrownValue = null;
	              replaySuspendedUnitOfWork(lanes);
	              break;
	            }
	            lanes = function() {
	              2 === workInProgressSuspendedReason && workInProgressRoot === root2 && (workInProgressSuspendedReason = 7);
	              ensureRootIsScheduled(root2);
	            };
	            thrownValue.then(lanes, lanes);
	            break a;
	          case 3:
	            workInProgressSuspendedReason = 7;
	            break a;
	          case 4:
	            workInProgressSuspendedReason = 5;
	            break a;
	          case 7:
	            isThenableResolved(thrownValue) ? (workInProgressSuspendedReason = 0, workInProgressThrownValue = null, replaySuspendedUnitOfWork(lanes)) : (workInProgressSuspendedReason = 0, workInProgressThrownValue = null, throwAndUnwindWorkLoop(root2, lanes, thrownValue, 7));
	            break;
	          case 5:
	            var resource = null;
	            switch (workInProgress.tag) {
	              case 26:
	                resource = workInProgress.memoizedState;
	              case 5:
	              case 27:
	                var hostFiber = workInProgress;
	                if (resource ? preloadResource(resource) : 1) {
	                  workInProgressSuspendedReason = 0;
	                  workInProgressThrownValue = null;
	                  var sibling = hostFiber.sibling;
	                  if (null !== sibling) workInProgress = sibling;
	                  else {
	                    var returnFiber = hostFiber.return;
	                    null !== returnFiber ? (workInProgress = returnFiber, completeUnitOfWork(returnFiber)) : workInProgress = null;
	                  }
	                  break b;
	                }
	            }
	            workInProgressSuspendedReason = 0;
	            workInProgressThrownValue = null;
	            throwAndUnwindWorkLoop(root2, lanes, thrownValue, 5);
	            break;
	          case 6:
	            workInProgressSuspendedReason = 0;
	            workInProgressThrownValue = null;
	            throwAndUnwindWorkLoop(root2, lanes, thrownValue, 6);
	            break;
	          case 8:
	            resetWorkInProgressStack();
	            workInProgressRootExitStatus = 6;
	            break a;
	          default:
	            throw Error(formatProdErrorMessage(462));
	        }
	      }
	      workLoopConcurrent();
	      break;
	    } catch (thrownValue$166) {
	      handleThrow(root2, thrownValue$166);
	    }
	  while (1);
	  lastContextDependency = currentlyRenderingFiber = null;
	  ReactSharedInternals.H = prevDispatcher;
	  ReactSharedInternals.A = prevAsyncDispatcher;
	  executionContext = prevExecutionContext;
	  if (null !== workInProgress) return 0;
	  workInProgressRoot = null;
	  workInProgressRootRenderLanes = 0;
	  finishQueueingConcurrentUpdates();
	  return workInProgressRootExitStatus;
	}
	function workLoopConcurrent() {
	  for (; null !== workInProgress && !shouldYield(); )
	    performUnitOfWork(workInProgress);
	}
	function performUnitOfWork(unitOfWork) {
	  var next = beginWork(unitOfWork.alternate, unitOfWork, entangledRenderLanes);
	  unitOfWork.memoizedProps = unitOfWork.pendingProps;
	  null === next ? completeUnitOfWork(unitOfWork) : workInProgress = next;
	}
	function replaySuspendedUnitOfWork(unitOfWork) {
	  var next = unitOfWork;
	  var current = next.alternate;
	  switch (next.tag) {
	    case 15:
	    case 0:
	      next = replayFunctionComponent(
	        current,
	        next,
	        next.pendingProps,
	        next.type,
	        void 0,
	        workInProgressRootRenderLanes
	      );
	      break;
	    case 11:
	      next = replayFunctionComponent(
	        current,
	        next,
	        next.pendingProps,
	        next.type.render,
	        next.ref,
	        workInProgressRootRenderLanes
	      );
	      break;
	    case 5:
	      resetHooksOnUnwind(next);
	    default:
	      unwindInterruptedWork(current, next), next = workInProgress = resetWorkInProgress(next, entangledRenderLanes), next = beginWork(current, next, entangledRenderLanes);
	  }
	  unitOfWork.memoizedProps = unitOfWork.pendingProps;
	  null === next ? completeUnitOfWork(unitOfWork) : workInProgress = next;
	}
	function throwAndUnwindWorkLoop(root2, unitOfWork, thrownValue, suspendedReason) {
	  lastContextDependency = currentlyRenderingFiber = null;
	  resetHooksOnUnwind(unitOfWork);
	  thenableState$1 = null;
	  thenableIndexCounter$1 = 0;
	  var returnFiber = unitOfWork.return;
	  try {
	    if (throwException(
	      root2,
	      returnFiber,
	      unitOfWork,
	      thrownValue,
	      workInProgressRootRenderLanes
	    )) {
	      workInProgressRootExitStatus = 1;
	      logUncaughtError(
	        root2,
	        createCapturedValueAtFiber(thrownValue, root2.current)
	      );
	      workInProgress = null;
	      return;
	    }
	  } catch (error) {
	    if (null !== returnFiber) throw workInProgress = returnFiber, error;
	    workInProgressRootExitStatus = 1;
	    logUncaughtError(
	      root2,
	      createCapturedValueAtFiber(thrownValue, root2.current)
	    );
	    workInProgress = null;
	    return;
	  }
	  if (unitOfWork.flags & 32768) {
	    if (isHydrating || 1 === suspendedReason) root2 = true;
	    else if (workInProgressRootIsPrerendering || 0 !== (workInProgressRootRenderLanes & 536870912))
	      root2 = false;
	    else if (workInProgressRootDidSkipSuspendedSiblings = root2 = true, 2 === suspendedReason || 3 === suspendedReason || 6 === suspendedReason)
	      suspendedReason = suspenseHandlerStackCursor.current, null !== suspendedReason && 13 === suspendedReason.tag && (suspendedReason.flags |= 16384);
	    unwindUnitOfWork(unitOfWork, root2);
	  } else completeUnitOfWork(unitOfWork);
	}
	function completeUnitOfWork(unitOfWork) {
	  var completedWork = unitOfWork;
	  do {
	    if (0 !== (completedWork.flags & 32768)) {
	      unwindUnitOfWork(
	        completedWork,
	        workInProgressRootDidSkipSuspendedSiblings
	      );
	      return;
	    }
	    unitOfWork = completedWork.return;
	    var next = completeWork(
	      completedWork.alternate,
	      completedWork,
	      entangledRenderLanes
	    );
	    if (null !== next) {
	      workInProgress = next;
	      return;
	    }
	    completedWork = completedWork.sibling;
	    if (null !== completedWork) {
	      workInProgress = completedWork;
	      return;
	    }
	    workInProgress = completedWork = unitOfWork;
	  } while (null !== completedWork);
	  0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 5);
	}
	function unwindUnitOfWork(unitOfWork, skipSiblings) {
	  do {
	    var next = unwindWork(unitOfWork.alternate, unitOfWork);
	    if (null !== next) {
	      next.flags &= 32767;
	      workInProgress = next;
	      return;
	    }
	    next = unitOfWork.return;
	    null !== next && (next.flags |= 32768, next.subtreeFlags = 0, next.deletions = null);
	    if (!skipSiblings && (unitOfWork = unitOfWork.sibling, null !== unitOfWork)) {
	      workInProgress = unitOfWork;
	      return;
	    }
	    workInProgress = unitOfWork = next;
	  } while (null !== unitOfWork);
	  workInProgressRootExitStatus = 6;
	  workInProgress = null;
	}
	function commitRoot(root2, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, spawnedLane, updatedLanes, suspendedRetryLanes, suspendedCommitReason, completedRenderStartTime, completedRenderEndTime) {
	  var prevTransition = ReactSharedInternals.T, previousUpdateLanePriority = ReactDOMSharedInternals.p;
	  try {
	    ReactDOMSharedInternals.p = 2, ReactSharedInternals.T = null, commitRootImpl(
	      root2,
	      recoverableErrors,
	      transitions,
	      didIncludeRenderPhaseUpdate,
	      previousUpdateLanePriority,
	      spawnedLane,
	      updatedLanes,
	      suspendedRetryLanes,
	      suspendedCommitReason,
	      completedRenderStartTime,
	      completedRenderEndTime
	    );
	  } finally {
	    ReactSharedInternals.T = prevTransition, ReactDOMSharedInternals.p = previousUpdateLanePriority;
	  }
	}
	function commitRootImpl(root2, recoverableErrors, transitions, didIncludeRenderPhaseUpdate, renderPriorityLevel, spawnedLane, updatedLanes, suspendedRetryLanes) {
	  do
	    flushPassiveEffects();
	  while (null !== rootWithPendingPassiveEffects);
	  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
	  var finishedWork = root2.finishedWork;
	  didIncludeRenderPhaseUpdate = root2.finishedLanes;
	  if (null === finishedWork) return null;
	  root2.finishedWork = null;
	  root2.finishedLanes = 0;
	  if (finishedWork === root2.current) throw Error(formatProdErrorMessage(177));
	  root2.callbackNode = null;
	  root2.callbackPriority = 0;
	  root2.cancelPendingCommit = null;
	  var remainingLanes = finishedWork.lanes | finishedWork.childLanes;
	  remainingLanes |= concurrentlyUpdatedLanes;
	  markRootFinished(
	    root2,
	    didIncludeRenderPhaseUpdate,
	    remainingLanes,
	    spawnedLane,
	    updatedLanes,
	    suspendedRetryLanes
	  );
	  root2 === workInProgressRoot && (workInProgress = workInProgressRoot = null, workInProgressRootRenderLanes = 0);
	  0 === (finishedWork.subtreeFlags & 10256) && 0 === (finishedWork.flags & 10256) || rootDoesHavePassiveEffects || (rootDoesHavePassiveEffects = true, pendingPassiveEffectsRemainingLanes = remainingLanes, pendingPassiveTransitions = transitions, scheduleCallback$1(NormalPriority$1, function() {
	    flushPassiveEffects();
	    return null;
	  }));
	  transitions = 0 !== (finishedWork.flags & 15990);
	  0 !== (finishedWork.subtreeFlags & 15990) || transitions ? (transitions = ReactSharedInternals.T, ReactSharedInternals.T = null, spawnedLane = ReactDOMSharedInternals.p, ReactDOMSharedInternals.p = 2, updatedLanes = executionContext, executionContext |= 4, commitBeforeMutationEffects(root2, finishedWork), commitMutationEffectsOnFiber(finishedWork, root2), restoreSelection(selectionInformation, root2.containerInfo), _enabled = !!eventsEnabled, selectionInformation = eventsEnabled = null, root2.current = finishedWork, commitLayoutEffectOnFiber(root2, finishedWork.alternate, finishedWork), requestPaint(), executionContext = updatedLanes, ReactDOMSharedInternals.p = spawnedLane, ReactSharedInternals.T = transitions) : root2.current = finishedWork;
	  rootDoesHavePassiveEffects ? (rootDoesHavePassiveEffects = false, rootWithPendingPassiveEffects = root2, pendingPassiveEffectsLanes = didIncludeRenderPhaseUpdate) : releaseRootPooledCache(root2, remainingLanes);
	  remainingLanes = root2.pendingLanes;
	  0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
	  onCommitRoot(finishedWork.stateNode);
	  ensureRootIsScheduled(root2);
	  if (null !== recoverableErrors)
	    for (renderPriorityLevel = root2.onRecoverableError, finishedWork = 0; finishedWork < recoverableErrors.length; finishedWork++)
	      remainingLanes = recoverableErrors[finishedWork], renderPriorityLevel(remainingLanes.value, {
	        componentStack: remainingLanes.stack
	      });
	  0 !== (pendingPassiveEffectsLanes & 3) && flushPassiveEffects();
	  remainingLanes = root2.pendingLanes;
	  0 !== (didIncludeRenderPhaseUpdate & 4194218) && 0 !== (remainingLanes & 42) ? root2 === rootWithNestedUpdates ? nestedUpdateCount++ : (nestedUpdateCount = 0, rootWithNestedUpdates = root2) : nestedUpdateCount = 0;
	  flushSyncWorkAcrossRoots_impl(0);
	  return null;
	}
	function releaseRootPooledCache(root2, remainingLanes) {
	  0 === (root2.pooledCacheLanes &= remainingLanes) && (remainingLanes = root2.pooledCache, null != remainingLanes && (root2.pooledCache = null, releaseCache(remainingLanes)));
	}
	function flushPassiveEffects() {
	  if (null !== rootWithPendingPassiveEffects) {
	    var root$170 = rootWithPendingPassiveEffects, remainingLanes = pendingPassiveEffectsRemainingLanes;
	    pendingPassiveEffectsRemainingLanes = 0;
	    var renderPriority = lanesToEventPriority(pendingPassiveEffectsLanes), prevTransition = ReactSharedInternals.T, previousPriority = ReactDOMSharedInternals.p;
	    try {
	      ReactDOMSharedInternals.p = 32 > renderPriority ? 32 : renderPriority;
	      ReactSharedInternals.T = null;
	      if (null === rootWithPendingPassiveEffects)
	        var JSCompiler_inline_result = false;
	      else {
	        renderPriority = pendingPassiveTransitions;
	        pendingPassiveTransitions = null;
	        var root2 = rootWithPendingPassiveEffects, lanes = pendingPassiveEffectsLanes;
	        rootWithPendingPassiveEffects = null;
	        pendingPassiveEffectsLanes = 0;
	        if (0 !== (executionContext & 6))
	          throw Error(formatProdErrorMessage(331));
	        var prevExecutionContext = executionContext;
	        executionContext |= 4;
	        commitPassiveUnmountOnFiber(root2.current);
	        commitPassiveMountOnFiber(root2, root2.current, lanes, renderPriority);
	        executionContext = prevExecutionContext;
	        flushSyncWorkAcrossRoots_impl(0, false);
	        if (injectedHook && "function" === typeof injectedHook.onPostCommitFiberRoot)
	          try {
	            injectedHook.onPostCommitFiberRoot(rendererID, root2);
	          } catch (err) {
	          }
	        JSCompiler_inline_result = true;
	      }
	      return JSCompiler_inline_result;
	    } finally {
	      ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition, releaseRootPooledCache(root$170, remainingLanes);
	    }
	  }
	  return false;
	}
	function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
	  sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
	  sourceFiber = createRootErrorUpdate(rootFiber.stateNode, sourceFiber, 2);
	  rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
	  null !== rootFiber && (markRootUpdated$1(rootFiber, 2), ensureRootIsScheduled(rootFiber));
	}
	function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
	  if (3 === sourceFiber.tag)
	    captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
	  else
	    for (; null !== nearestMountedAncestor; ) {
	      if (3 === nearestMountedAncestor.tag) {
	        captureCommitPhaseErrorOnRoot(
	          nearestMountedAncestor,
	          sourceFiber,
	          error
	        );
	        break;
	      } else if (1 === nearestMountedAncestor.tag) {
	        var instance = nearestMountedAncestor.stateNode;
	        if ("function" === typeof nearestMountedAncestor.type.getDerivedStateFromError || "function" === typeof instance.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(instance))) {
	          sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
	          error = createClassErrorUpdate(2);
	          instance = enqueueUpdate(nearestMountedAncestor, error, 2);
	          null !== instance && (initializeClassErrorUpdate(
	            error,
	            instance,
	            nearestMountedAncestor,
	            sourceFiber
	          ), markRootUpdated$1(instance, 2), ensureRootIsScheduled(instance));
	          break;
	        }
	      }
	      nearestMountedAncestor = nearestMountedAncestor.return;
	    }
	}
	function attachPingListener(root2, wakeable, lanes) {
	  var pingCache = root2.pingCache;
	  if (null === pingCache) {
	    pingCache = root2.pingCache = new PossiblyWeakMap();
	    var threadIDs = /* @__PURE__ */ new Set();
	    pingCache.set(wakeable, threadIDs);
	  } else
	    threadIDs = pingCache.get(wakeable), void 0 === threadIDs && (threadIDs = /* @__PURE__ */ new Set(), pingCache.set(wakeable, threadIDs));
	  threadIDs.has(lanes) || (workInProgressRootDidAttachPingListener = true, threadIDs.add(lanes), root2 = pingSuspendedRoot.bind(null, root2, wakeable, lanes), wakeable.then(root2, root2));
	}
	function pingSuspendedRoot(root2, wakeable, pingedLanes) {
	  var pingCache = root2.pingCache;
	  null !== pingCache && pingCache.delete(wakeable);
	  root2.pingedLanes |= root2.suspendedLanes & pingedLanes;
	  root2.warmLanes &= ~pingedLanes;
	  workInProgressRoot === root2 && (workInProgressRootRenderLanes & pingedLanes) === pingedLanes && (4 === workInProgressRootExitStatus || 3 === workInProgressRootExitStatus && (workInProgressRootRenderLanes & 62914560) === workInProgressRootRenderLanes && 300 > now() - globalMostRecentFallbackTime ? 0 === (executionContext & 2) && prepareFreshStack(root2, 0) : workInProgressRootPingedLanes |= pingedLanes, workInProgressSuspendedRetryLanes === workInProgressRootRenderLanes && (workInProgressSuspendedRetryLanes = 0));
	  ensureRootIsScheduled(root2);
	}
	function retryTimedOutBoundary(boundaryFiber, retryLane) {
	  0 === retryLane && (retryLane = claimNextRetryLane());
	  boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
	  null !== boundaryFiber && (markRootUpdated$1(boundaryFiber, retryLane), ensureRootIsScheduled(boundaryFiber));
	}
	function retryDehydratedSuspenseBoundary(boundaryFiber) {
	  var suspenseState = boundaryFiber.memoizedState, retryLane = 0;
	  null !== suspenseState && (retryLane = suspenseState.retryLane);
	  retryTimedOutBoundary(boundaryFiber, retryLane);
	}
	function resolveRetryWakeable(boundaryFiber, wakeable) {
	  var retryLane = 0;
	  switch (boundaryFiber.tag) {
	    case 13:
	      var retryCache = boundaryFiber.stateNode;
	      var suspenseState = boundaryFiber.memoizedState;
	      null !== suspenseState && (retryLane = suspenseState.retryLane);
	      break;
	    case 19:
	      retryCache = boundaryFiber.stateNode;
	      break;
	    case 22:
	      retryCache = boundaryFiber.stateNode._retryCache;
	      break;
	    default:
	      throw Error(formatProdErrorMessage(314));
	  }
	  null !== retryCache && retryCache.delete(wakeable);
	  retryTimedOutBoundary(boundaryFiber, retryLane);
	}
	function scheduleCallback$1(priorityLevel, callback) {
	  return scheduleCallback$3(priorityLevel, callback);
	}
	var firstScheduledRoot = null, lastScheduledRoot = null, didScheduleMicrotask = false, mightHavePendingSyncWork = false, isFlushingWork = false, currentEventTransitionLane = 0;
	function ensureRootIsScheduled(root2) {
	  root2 !== lastScheduledRoot && null === root2.next && (null === lastScheduledRoot ? firstScheduledRoot = lastScheduledRoot = root2 : lastScheduledRoot = lastScheduledRoot.next = root2);
	  mightHavePendingSyncWork = true;
	  didScheduleMicrotask || (didScheduleMicrotask = true, scheduleImmediateTask(processRootScheduleInMicrotask));
	}
	function flushSyncWorkAcrossRoots_impl(syncTransitionLanes, onlyLegacy) {
	  if (!isFlushingWork && mightHavePendingSyncWork) {
	    isFlushingWork = true;
	    do {
	      var didPerformSomeWork = false;
	      for (var root$172 = firstScheduledRoot; null !== root$172; ) {
	        if (0 !== syncTransitionLanes) {
	            var pendingLanes = root$172.pendingLanes;
	            if (0 === pendingLanes) var JSCompiler_inline_result = 0;
	            else {
	              var suspendedLanes = root$172.suspendedLanes, pingedLanes = root$172.pingedLanes;
	              JSCompiler_inline_result = (1 << 31 - clz32(42 | syncTransitionLanes) + 1) - 1;
	              JSCompiler_inline_result &= pendingLanes & ~(suspendedLanes & ~pingedLanes);
	              JSCompiler_inline_result = JSCompiler_inline_result & 201326677 ? JSCompiler_inline_result & 201326677 | 1 : JSCompiler_inline_result ? JSCompiler_inline_result | 2 : 0;
	            }
	            0 !== JSCompiler_inline_result && (didPerformSomeWork = true, performSyncWorkOnRoot(root$172, JSCompiler_inline_result));
	          } else
	            JSCompiler_inline_result = workInProgressRootRenderLanes, JSCompiler_inline_result = getNextLanes(
	              root$172,
	              root$172 === workInProgressRoot ? JSCompiler_inline_result : 0
	            ), 0 === (JSCompiler_inline_result & 3) || checkIfRootIsPrerendering(root$172, JSCompiler_inline_result) || (didPerformSomeWork = true, performSyncWorkOnRoot(root$172, JSCompiler_inline_result));
	        root$172 = root$172.next;
	      }
	    } while (didPerformSomeWork);
	    isFlushingWork = false;
	  }
	}
	function processRootScheduleInMicrotask() {
	  mightHavePendingSyncWork = didScheduleMicrotask = false;
	  var syncTransitionLanes = 0;
	  0 !== currentEventTransitionLane && (shouldAttemptEagerTransition() && (syncTransitionLanes = currentEventTransitionLane), currentEventTransitionLane = 0);
	  for (var currentTime = now(), prev = null, root2 = firstScheduledRoot; null !== root2; ) {
	    var next = root2.next, nextLanes = scheduleTaskForRootDuringMicrotask(root2, currentTime);
	    if (0 === nextLanes)
	      root2.next = null, null === prev ? firstScheduledRoot = next : prev.next = next, null === next && (lastScheduledRoot = prev);
	    else if (prev = root2, 0 !== syncTransitionLanes || 0 !== (nextLanes & 3))
	      mightHavePendingSyncWork = true;
	    root2 = next;
	  }
	  flushSyncWorkAcrossRoots_impl(syncTransitionLanes);
	}
	function scheduleTaskForRootDuringMicrotask(root2, currentTime) {
	  for (var suspendedLanes = root2.suspendedLanes, pingedLanes = root2.pingedLanes, expirationTimes = root2.expirationTimes, lanes = root2.pendingLanes & -62914561; 0 < lanes; ) {
	    var index$5 = 31 - clz32(lanes), lane = 1 << index$5, expirationTime = expirationTimes[index$5];
	    if (-1 === expirationTime) {
	      if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes))
	        expirationTimes[index$5] = computeExpirationTime(lane, currentTime);
	    } else expirationTime <= currentTime && (root2.expiredLanes |= lane);
	    lanes &= ~lane;
	  }
	  currentTime = workInProgressRoot;
	  suspendedLanes = workInProgressRootRenderLanes;
	  suspendedLanes = getNextLanes(
	    root2,
	    root2 === currentTime ? suspendedLanes : 0
	  );
	  pingedLanes = root2.callbackNode;
	  if (0 === suspendedLanes || root2 === currentTime && 2 === workInProgressSuspendedReason || null !== root2.cancelPendingCommit)
	    return null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes), root2.callbackNode = null, root2.callbackPriority = 0;
	  if (0 === (suspendedLanes & 3) || checkIfRootIsPrerendering(root2, suspendedLanes)) {
	    currentTime = suspendedLanes & -suspendedLanes;
	    if (currentTime === root2.callbackPriority) return currentTime;
	    null !== pingedLanes && cancelCallback$1(pingedLanes);
	    switch (lanesToEventPriority(suspendedLanes)) {
	      case 2:
	      case 8:
	        suspendedLanes = UserBlockingPriority;
	        break;
	      case 32:
	        suspendedLanes = NormalPriority$1;
	        break;
	      case 268435456:
	        suspendedLanes = IdlePriority;
	        break;
	      default:
	        suspendedLanes = NormalPriority$1;
	    }
	    pingedLanes = performWorkOnRootViaSchedulerTask.bind(null, root2);
	    suspendedLanes = scheduleCallback$3(suspendedLanes, pingedLanes);
	    root2.callbackPriority = currentTime;
	    root2.callbackNode = suspendedLanes;
	    return currentTime;
	  }
	  null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes);
	  root2.callbackPriority = 2;
	  root2.callbackNode = null;
	  return 2;
	}
	function performWorkOnRootViaSchedulerTask(root2, didTimeout) {
	  var originalCallbackNode = root2.callbackNode;
	  if (flushPassiveEffects() && root2.callbackNode !== originalCallbackNode)
	    return null;
	  var workInProgressRootRenderLanes$jscomp$0 = workInProgressRootRenderLanes;
	  workInProgressRootRenderLanes$jscomp$0 = getNextLanes(
	    root2,
	    root2 === workInProgressRoot ? workInProgressRootRenderLanes$jscomp$0 : 0
	  );
	  if (0 === workInProgressRootRenderLanes$jscomp$0) return null;
	  performWorkOnRoot(root2, workInProgressRootRenderLanes$jscomp$0, didTimeout);
	  scheduleTaskForRootDuringMicrotask(root2, now());
	  return null != root2.callbackNode && root2.callbackNode === originalCallbackNode ? performWorkOnRootViaSchedulerTask.bind(null, root2) : null;
	}
	function performSyncWorkOnRoot(root2, lanes) {
	  if (flushPassiveEffects()) return null;
	  performWorkOnRoot(root2, lanes, true);
	}
	function scheduleImmediateTask(cb) {
	  scheduleMicrotask(function() {
	    0 !== (executionContext & 6) ? scheduleCallback$3(ImmediatePriority, cb) : cb();
	  });
	}
	function requestTransitionLane() {
	  0 === currentEventTransitionLane && (currentEventTransitionLane = claimNextTransitionLane());
	  return currentEventTransitionLane;
	}
	function coerceFormActionProp(actionProp) {
	  return null == actionProp || "symbol" === typeof actionProp || "boolean" === typeof actionProp ? null : "function" === typeof actionProp ? actionProp : sanitizeURL("" + actionProp);
	}
	function createFormDataWithSubmitter(form, submitter) {
	  var temp = submitter.ownerDocument.createElement("input");
	  temp.name = submitter.name;
	  temp.value = submitter.value;
	  form.id && temp.setAttribute("form", form.id);
	  submitter.parentNode.insertBefore(temp, submitter);
	  form = new FormData(form);
	  temp.parentNode.removeChild(temp);
	  return form;
	}
	function extractEvents$1(dispatchQueue, domEventName, maybeTargetInst, nativeEvent, nativeEventTarget) {
	  if ("submit" === domEventName && maybeTargetInst && maybeTargetInst.stateNode === nativeEventTarget) {
	    var action = coerceFormActionProp(
	      (nativeEventTarget[internalPropsKey] || null).action
	    ), submitter = nativeEvent.submitter;
	    submitter && (domEventName = (domEventName = submitter[internalPropsKey] || null) ? coerceFormActionProp(domEventName.formAction) : submitter.getAttribute("formAction"), null !== domEventName && (action = domEventName, submitter = null));
	    var event = new SyntheticEvent(
	      "action",
	      "action",
	      null,
	      nativeEvent,
	      nativeEventTarget
	    );
	    dispatchQueue.push({
	      event,
	      listeners: [
	        {
	          instance: null,
	          listener: function() {
	            if (nativeEvent.defaultPrevented) {
	              if (0 !== currentEventTransitionLane) {
	                var formData = submitter ? createFormDataWithSubmitter(nativeEventTarget, submitter) : new FormData(nativeEventTarget);
	                startHostTransition(
	                  maybeTargetInst,
	                  {
	                    pending: true,
	                    data: formData,
	                    method: nativeEventTarget.method,
	                    action
	                  },
	                  null,
	                  formData
	                );
	              }
	            } else
	              "function" === typeof action && (event.preventDefault(), formData = submitter ? createFormDataWithSubmitter(nativeEventTarget, submitter) : new FormData(nativeEventTarget), startHostTransition(
	                maybeTargetInst,
	                {
	                  pending: true,
	                  data: formData,
	                  method: nativeEventTarget.method,
	                  action
	                },
	                action,
	                formData
	              ));
	          },
	          currentTarget: nativeEventTarget
	        }
	      ]
	    });
	  }
	}
	for (var i$jscomp$inline_1439 = 0; i$jscomp$inline_1439 < simpleEventPluginEvents.length; i$jscomp$inline_1439++) {
	  var eventName$jscomp$inline_1440 = simpleEventPluginEvents[i$jscomp$inline_1439], domEventName$jscomp$inline_1441 = eventName$jscomp$inline_1440.toLowerCase(), capitalizedEvent$jscomp$inline_1442 = eventName$jscomp$inline_1440[0].toUpperCase() + eventName$jscomp$inline_1440.slice(1);
	  registerSimpleEvent(
	    domEventName$jscomp$inline_1441,
	    "on" + capitalizedEvent$jscomp$inline_1442
	  );
	}
	registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
	registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
	registerSimpleEvent(ANIMATION_START, "onAnimationStart");
	registerSimpleEvent("dblclick", "onDoubleClick");
	registerSimpleEvent("focusin", "onFocus");
	registerSimpleEvent("focusout", "onBlur");
	registerSimpleEvent(TRANSITION_RUN, "onTransitionRun");
	registerSimpleEvent(TRANSITION_START, "onTransitionStart");
	registerSimpleEvent(TRANSITION_CANCEL, "onTransitionCancel");
	registerSimpleEvent(TRANSITION_END, "onTransitionEnd");
	registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
	registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
	registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
	registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
	registerTwoPhaseEvent(
	  "onChange",
	  "change click focusin focusout input keydown keyup selectionchange".split(" ")
	);
	registerTwoPhaseEvent(
	  "onSelect",
	  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
	    " "
	  )
	);
	registerTwoPhaseEvent("onBeforeInput", [
	  "compositionend",
	  "keypress",
	  "textInput",
	  "paste"
	]);
	registerTwoPhaseEvent(
	  "onCompositionEnd",
	  "compositionend focusout keydown keypress keyup mousedown".split(" ")
	);
	registerTwoPhaseEvent(
	  "onCompositionStart",
	  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
	);
	registerTwoPhaseEvent(
	  "onCompositionUpdate",
	  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
	);
	var mediaEventTypes = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
	  " "
	), nonDelegatedEvents = new Set(
	  "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mediaEventTypes)
	);
	function processDispatchQueue(dispatchQueue, eventSystemFlags) {
	  eventSystemFlags = 0 !== (eventSystemFlags & 4);
	  for (var i = 0; i < dispatchQueue.length; i++) {
	    var _dispatchQueue$i = dispatchQueue[i], event = _dispatchQueue$i.event;
	    _dispatchQueue$i = _dispatchQueue$i.listeners;
	    a: {
	      var previousInstance = void 0;
	      if (eventSystemFlags)
	        for (var i$jscomp$0 = _dispatchQueue$i.length - 1; 0 <= i$jscomp$0; i$jscomp$0--) {
	          var _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0], instance = _dispatchListeners$i.instance, currentTarget = _dispatchListeners$i.currentTarget;
	          _dispatchListeners$i = _dispatchListeners$i.listener;
	          if (instance !== previousInstance && event.isPropagationStopped())
	            break a;
	          previousInstance = _dispatchListeners$i;
	          event.currentTarget = currentTarget;
	          try {
	            previousInstance(event);
	          } catch (error) {
	            reportGlobalError(error);
	          }
	          event.currentTarget = null;
	          previousInstance = instance;
	        }
	      else
	        for (i$jscomp$0 = 0; i$jscomp$0 < _dispatchQueue$i.length; i$jscomp$0++) {
	          _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0];
	          instance = _dispatchListeners$i.instance;
	          currentTarget = _dispatchListeners$i.currentTarget;
	          _dispatchListeners$i = _dispatchListeners$i.listener;
	          if (instance !== previousInstance && event.isPropagationStopped())
	            break a;
	          previousInstance = _dispatchListeners$i;
	          event.currentTarget = currentTarget;
	          try {
	            previousInstance(event);
	          } catch (error) {
	            reportGlobalError(error);
	          }
	          event.currentTarget = null;
	          previousInstance = instance;
	        }
	    }
	  }
	}
	function listenToNonDelegatedEvent(domEventName, targetElement) {
	  var JSCompiler_inline_result = targetElement[internalEventHandlersKey];
	  void 0 === JSCompiler_inline_result && (JSCompiler_inline_result = targetElement[internalEventHandlersKey] = /* @__PURE__ */ new Set());
	  var listenerSetKey = domEventName + "__bubble";
	  JSCompiler_inline_result.has(listenerSetKey) || (addTrappedEventListener(targetElement, domEventName, 2, false), JSCompiler_inline_result.add(listenerSetKey));
	}
	function listenToNativeEvent(domEventName, isCapturePhaseListener, target) {
	  var eventSystemFlags = 0;
	  isCapturePhaseListener && (eventSystemFlags |= 4);
	  addTrappedEventListener(
	    target,
	    domEventName,
	    eventSystemFlags,
	    isCapturePhaseListener
	  );
	}
	var listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
	function listenToAllSupportedEvents(rootContainerElement) {
	  if (!rootContainerElement[listeningMarker]) {
	    rootContainerElement[listeningMarker] = true;
	    allNativeEvents.forEach(function(domEventName) {
	      "selectionchange" !== domEventName && (nonDelegatedEvents.has(domEventName) || listenToNativeEvent(domEventName, false, rootContainerElement), listenToNativeEvent(domEventName, true, rootContainerElement));
	    });
	    var ownerDocument = 9 === rootContainerElement.nodeType ? rootContainerElement : rootContainerElement.ownerDocument;
	    null === ownerDocument || ownerDocument[listeningMarker] || (ownerDocument[listeningMarker] = true, listenToNativeEvent("selectionchange", false, ownerDocument));
	  }
	}
	function addTrappedEventListener(targetContainer, domEventName, eventSystemFlags, isCapturePhaseListener) {
	  switch (getEventPriority(domEventName)) {
	    case 2:
	      var listenerWrapper = dispatchDiscreteEvent;
	      break;
	    case 8:
	      listenerWrapper = dispatchContinuousEvent;
	      break;
	    default:
	      listenerWrapper = dispatchEvent;
	  }
	  eventSystemFlags = listenerWrapper.bind(
	    null,
	    domEventName,
	    eventSystemFlags,
	    targetContainer
	  );
	  listenerWrapper = void 0;
	  !passiveBrowserEventsSupported || "touchstart" !== domEventName && "touchmove" !== domEventName && "wheel" !== domEventName || (listenerWrapper = true);
	  isCapturePhaseListener ? void 0 !== listenerWrapper ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
	    capture: true,
	    passive: listenerWrapper
	  }) : targetContainer.addEventListener(domEventName, eventSystemFlags, true) : void 0 !== listenerWrapper ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
	    passive: listenerWrapper
	  }) : targetContainer.addEventListener(domEventName, eventSystemFlags, false);
	}
	function dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, targetInst$jscomp$0, targetContainer) {
	  var ancestorInst = targetInst$jscomp$0;
	  if (0 === (eventSystemFlags & 1) && 0 === (eventSystemFlags & 2) && null !== targetInst$jscomp$0)
	    a: for (; ; ) {
	      if (null === targetInst$jscomp$0) return;
	      var nodeTag = targetInst$jscomp$0.tag;
	      if (3 === nodeTag || 4 === nodeTag) {
	        var container = targetInst$jscomp$0.stateNode.containerInfo;
	        if (container === targetContainer || 8 === container.nodeType && container.parentNode === targetContainer)
	          break;
	        if (4 === nodeTag)
	          for (nodeTag = targetInst$jscomp$0.return; null !== nodeTag; ) {
	            var grandTag = nodeTag.tag;
	            if (3 === grandTag || 4 === grandTag) {
	              if (grandTag = nodeTag.stateNode.containerInfo, grandTag === targetContainer || 8 === grandTag.nodeType && grandTag.parentNode === targetContainer)
	                return;
	            }
	            nodeTag = nodeTag.return;
	          }
	        for (; null !== container; ) {
	          nodeTag = getClosestInstanceFromNode(container);
	          if (null === nodeTag) return;
	          grandTag = nodeTag.tag;
	          if (5 === grandTag || 6 === grandTag || 26 === grandTag || 27 === grandTag) {
	            targetInst$jscomp$0 = ancestorInst = nodeTag;
	            continue a;
	          }
	          container = container.parentNode;
	        }
	      }
	      targetInst$jscomp$0 = targetInst$jscomp$0.return;
	    }
	  batchedUpdates$1(function() {
	    var targetInst = ancestorInst, nativeEventTarget = getEventTarget(nativeEvent), dispatchQueue = [];
	    a: {
	      var reactName = topLevelEventsToReactNames.get(domEventName);
	      if (void 0 !== reactName) {
	        var SyntheticEventCtor = SyntheticEvent, reactEventType = domEventName;
	        switch (domEventName) {
	          case "keypress":
	            if (0 === getEventCharCode(nativeEvent)) break a;
	          case "keydown":
	          case "keyup":
	            SyntheticEventCtor = SyntheticKeyboardEvent;
	            break;
	          case "focusin":
	            reactEventType = "focus";
	            SyntheticEventCtor = SyntheticFocusEvent;
	            break;
	          case "focusout":
	            reactEventType = "blur";
	            SyntheticEventCtor = SyntheticFocusEvent;
	            break;
	          case "beforeblur":
	          case "afterblur":
	            SyntheticEventCtor = SyntheticFocusEvent;
	            break;
	          case "click":
	            if (2 === nativeEvent.button) break a;
	          case "auxclick":
	          case "dblclick":
	          case "mousedown":
	          case "mousemove":
	          case "mouseup":
	          case "mouseout":
	          case "mouseover":
	          case "contextmenu":
	            SyntheticEventCtor = SyntheticMouseEvent;
	            break;
	          case "drag":
	          case "dragend":
	          case "dragenter":
	          case "dragexit":
	          case "dragleave":
	          case "dragover":
	          case "dragstart":
	          case "drop":
	            SyntheticEventCtor = SyntheticDragEvent;
	            break;
	          case "touchcancel":
	          case "touchend":
	          case "touchmove":
	          case "touchstart":
	            SyntheticEventCtor = SyntheticTouchEvent;
	            break;
	          case ANIMATION_END:
	          case ANIMATION_ITERATION:
	          case ANIMATION_START:
	            SyntheticEventCtor = SyntheticAnimationEvent;
	            break;
	          case TRANSITION_END:
	            SyntheticEventCtor = SyntheticTransitionEvent;
	            break;
	          case "scroll":
	          case "scrollend":
	            SyntheticEventCtor = SyntheticUIEvent;
	            break;
	          case "wheel":
	            SyntheticEventCtor = SyntheticWheelEvent;
	            break;
	          case "copy":
	          case "cut":
	          case "paste":
	            SyntheticEventCtor = SyntheticClipboardEvent;
	            break;
	          case "gotpointercapture":
	          case "lostpointercapture":
	          case "pointercancel":
	          case "pointerdown":
	          case "pointermove":
	          case "pointerout":
	          case "pointerover":
	          case "pointerup":
	            SyntheticEventCtor = SyntheticPointerEvent;
	            break;
	          case "toggle":
	          case "beforetoggle":
	            SyntheticEventCtor = SyntheticToggleEvent;
	        }
	        var inCapturePhase = 0 !== (eventSystemFlags & 4), accumulateTargetOnly = !inCapturePhase && ("scroll" === domEventName || "scrollend" === domEventName), reactEventName = inCapturePhase ? null !== reactName ? reactName + "Capture" : null : reactName;
	        inCapturePhase = [];
	        for (var instance = targetInst, lastHostComponent; null !== instance; ) {
	          var _instance = instance;
	          lastHostComponent = _instance.stateNode;
	          _instance = _instance.tag;
	          5 !== _instance && 26 !== _instance && 27 !== _instance || null === lastHostComponent || null === reactEventName || (_instance = getListener(instance, reactEventName), null != _instance && inCapturePhase.push(
	            createDispatchListener(instance, _instance, lastHostComponent)
	          ));
	          if (accumulateTargetOnly) break;
	          instance = instance.return;
	        }
	        0 < inCapturePhase.length && (reactName = new SyntheticEventCtor(
	          reactName,
	          reactEventType,
	          null,
	          nativeEvent,
	          nativeEventTarget
	        ), dispatchQueue.push({ event: reactName, listeners: inCapturePhase }));
	      }
	    }
	    if (0 === (eventSystemFlags & 7)) {
	      a: {
	        reactName = "mouseover" === domEventName || "pointerover" === domEventName;
	        SyntheticEventCtor = "mouseout" === domEventName || "pointerout" === domEventName;
	        if (reactName && nativeEvent !== currentReplayingEvent && (reactEventType = nativeEvent.relatedTarget || nativeEvent.fromElement) && (getClosestInstanceFromNode(reactEventType) || reactEventType[internalContainerInstanceKey]))
	          break a;
	        if (SyntheticEventCtor || reactName) {
	          reactName = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget : (reactName = nativeEventTarget.ownerDocument) ? reactName.defaultView || reactName.parentWindow : window;
	          if (SyntheticEventCtor) {
	            if (reactEventType = nativeEvent.relatedTarget || nativeEvent.toElement, SyntheticEventCtor = targetInst, reactEventType = reactEventType ? getClosestInstanceFromNode(reactEventType) : null, null !== reactEventType && (accumulateTargetOnly = getNearestMountedFiber(reactEventType), inCapturePhase = reactEventType.tag, reactEventType !== accumulateTargetOnly || 5 !== inCapturePhase && 27 !== inCapturePhase && 6 !== inCapturePhase))
	              reactEventType = null;
	          } else SyntheticEventCtor = null, reactEventType = targetInst;
	          if (SyntheticEventCtor !== reactEventType) {
	            inCapturePhase = SyntheticMouseEvent;
	            _instance = "onMouseLeave";
	            reactEventName = "onMouseEnter";
	            instance = "mouse";
	            if ("pointerout" === domEventName || "pointerover" === domEventName)
	              inCapturePhase = SyntheticPointerEvent, _instance = "onPointerLeave", reactEventName = "onPointerEnter", instance = "pointer";
	            accumulateTargetOnly = null == SyntheticEventCtor ? reactName : getNodeFromInstance(SyntheticEventCtor);
	            lastHostComponent = null == reactEventType ? reactName : getNodeFromInstance(reactEventType);
	            reactName = new inCapturePhase(
	              _instance,
	              instance + "leave",
	              SyntheticEventCtor,
	              nativeEvent,
	              nativeEventTarget
	            );
	            reactName.target = accumulateTargetOnly;
	            reactName.relatedTarget = lastHostComponent;
	            _instance = null;
	            getClosestInstanceFromNode(nativeEventTarget) === targetInst && (inCapturePhase = new inCapturePhase(
	              reactEventName,
	              instance + "enter",
	              reactEventType,
	              nativeEvent,
	              nativeEventTarget
	            ), inCapturePhase.target = lastHostComponent, inCapturePhase.relatedTarget = accumulateTargetOnly, _instance = inCapturePhase);
	            accumulateTargetOnly = _instance;
	            if (SyntheticEventCtor && reactEventType)
	              b: {
	                inCapturePhase = SyntheticEventCtor;
	                reactEventName = reactEventType;
	                instance = 0;
	                for (lastHostComponent = inCapturePhase; lastHostComponent; lastHostComponent = getParent(lastHostComponent))
	                  instance++;
	                lastHostComponent = 0;
	                for (_instance = reactEventName; _instance; _instance = getParent(_instance))
	                  lastHostComponent++;
	                for (; 0 < instance - lastHostComponent; )
	                  inCapturePhase = getParent(inCapturePhase), instance--;
	                for (; 0 < lastHostComponent - instance; )
	                  reactEventName = getParent(reactEventName), lastHostComponent--;
	                for (; instance--; ) {
	                  if (inCapturePhase === reactEventName || null !== reactEventName && inCapturePhase === reactEventName.alternate)
	                    break b;
	                  inCapturePhase = getParent(inCapturePhase);
	                  reactEventName = getParent(reactEventName);
	                }
	                inCapturePhase = null;
	              }
	            else inCapturePhase = null;
	            null !== SyntheticEventCtor && accumulateEnterLeaveListenersForEvent(
	              dispatchQueue,
	              reactName,
	              SyntheticEventCtor,
	              inCapturePhase,
	              false
	            );
	            null !== reactEventType && null !== accumulateTargetOnly && accumulateEnterLeaveListenersForEvent(
	              dispatchQueue,
	              accumulateTargetOnly,
	              reactEventType,
	              inCapturePhase,
	              true
	            );
	          }
	        }
	      }
	      a: {
	        reactName = targetInst ? getNodeFromInstance(targetInst) : window;
	        SyntheticEventCtor = reactName.nodeName && reactName.nodeName.toLowerCase();
	        if ("select" === SyntheticEventCtor || "input" === SyntheticEventCtor && "file" === reactName.type)
	          var getTargetInstFunc = getTargetInstForChangeEvent;
	        else if (isTextInputElement(reactName))
	          if (isInputEventSupported)
	            getTargetInstFunc = getTargetInstForInputOrChangeEvent;
	          else {
	            getTargetInstFunc = getTargetInstForInputEventPolyfill;
	            var handleEventFunc = handleEventsForInputEventPolyfill;
	          }
	        else
	          SyntheticEventCtor = reactName.nodeName, !SyntheticEventCtor || "input" !== SyntheticEventCtor.toLowerCase() || "checkbox" !== reactName.type && "radio" !== reactName.type ? targetInst && isCustomElement(targetInst.elementType) && (getTargetInstFunc = getTargetInstForChangeEvent) : getTargetInstFunc = getTargetInstForClickEvent;
	        if (getTargetInstFunc && (getTargetInstFunc = getTargetInstFunc(domEventName, targetInst))) {
	          createAndAccumulateChangeEvent(
	            dispatchQueue,
	            getTargetInstFunc,
	            nativeEvent,
	            nativeEventTarget
	          );
	          break a;
	        }
	        handleEventFunc && handleEventFunc(domEventName, reactName, targetInst);
	        "focusout" === domEventName && targetInst && "number" === reactName.type && null != targetInst.memoizedProps.value && setDefaultValue(reactName, "number", reactName.value);
	      }
	      handleEventFunc = targetInst ? getNodeFromInstance(targetInst) : window;
	      switch (domEventName) {
	        case "focusin":
	          if (isTextInputElement(handleEventFunc) || "true" === handleEventFunc.contentEditable)
	            activeElement = handleEventFunc, activeElementInst = targetInst, lastSelection = null;
	          break;
	        case "focusout":
	          lastSelection = activeElementInst = activeElement = null;
	          break;
	        case "mousedown":
	          mouseDown = true;
	          break;
	        case "contextmenu":
	        case "mouseup":
	        case "dragend":
	          mouseDown = false;
	          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
	          break;
	        case "selectionchange":
	          if (skipSelectionChangeEvent) break;
	        case "keydown":
	        case "keyup":
	          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
	      }
	      var fallbackData;
	      if (canUseCompositionEvent)
	        b: {
	          switch (domEventName) {
	            case "compositionstart":
	              var eventType = "onCompositionStart";
	              break b;
	            case "compositionend":
	              eventType = "onCompositionEnd";
	              break b;
	            case "compositionupdate":
	              eventType = "onCompositionUpdate";
	              break b;
	          }
	          eventType = void 0;
	        }
	      else
	        isComposing ? isFallbackCompositionEnd(domEventName, nativeEvent) && (eventType = "onCompositionEnd") : "keydown" === domEventName && 229 === nativeEvent.keyCode && (eventType = "onCompositionStart");
	      eventType && (useFallbackCompositionData && "ko" !== nativeEvent.locale && (isComposing || "onCompositionStart" !== eventType ? "onCompositionEnd" === eventType && isComposing && (fallbackData = getData()) : (root = nativeEventTarget, startText = "value" in root ? root.value : root.textContent, isComposing = true)), handleEventFunc = accumulateTwoPhaseListeners(targetInst, eventType), 0 < handleEventFunc.length && (eventType = new SyntheticCompositionEvent(
	        eventType,
	        domEventName,
	        null,
	        nativeEvent,
	        nativeEventTarget
	      ), dispatchQueue.push({ event: eventType, listeners: handleEventFunc }), fallbackData ? eventType.data = fallbackData : (fallbackData = getDataFromCustomEvent(nativeEvent), null !== fallbackData && (eventType.data = fallbackData))));
	      if (fallbackData = canUseTextInputEvent ? getNativeBeforeInputChars(domEventName, nativeEvent) : getFallbackBeforeInputChars(domEventName, nativeEvent))
	        eventType = accumulateTwoPhaseListeners(targetInst, "onBeforeInput"), 0 < eventType.length && (handleEventFunc = new SyntheticCompositionEvent(
	          "onBeforeInput",
	          "beforeinput",
	          null,
	          nativeEvent,
	          nativeEventTarget
	        ), dispatchQueue.push({
	          event: handleEventFunc,
	          listeners: eventType
	        }), handleEventFunc.data = fallbackData);
	      extractEvents$1(
	        dispatchQueue,
	        domEventName,
	        targetInst,
	        nativeEvent,
	        nativeEventTarget
	      );
	    }
	    processDispatchQueue(dispatchQueue, eventSystemFlags);
	  });
	}
	function createDispatchListener(instance, listener, currentTarget) {
	  return {
	    instance,
	    listener,
	    currentTarget
	  };
	}
	function accumulateTwoPhaseListeners(targetFiber, reactName) {
	  for (var captureName = reactName + "Capture", listeners = []; null !== targetFiber; ) {
	    var _instance2 = targetFiber, stateNode = _instance2.stateNode;
	    _instance2 = _instance2.tag;
	    5 !== _instance2 && 26 !== _instance2 && 27 !== _instance2 || null === stateNode || (_instance2 = getListener(targetFiber, captureName), null != _instance2 && listeners.unshift(
	      createDispatchListener(targetFiber, _instance2, stateNode)
	    ), _instance2 = getListener(targetFiber, reactName), null != _instance2 && listeners.push(
	      createDispatchListener(targetFiber, _instance2, stateNode)
	    ));
	    targetFiber = targetFiber.return;
	  }
	  return listeners;
	}
	function getParent(inst) {
	  if (null === inst) return null;
	  do
	    inst = inst.return;
	  while (inst && 5 !== inst.tag && 27 !== inst.tag);
	  return inst ? inst : null;
	}
	function accumulateEnterLeaveListenersForEvent(dispatchQueue, event, target, common, inCapturePhase) {
	  for (var registrationName = event._reactName, listeners = []; null !== target && target !== common; ) {
	    var _instance3 = target, alternate = _instance3.alternate, stateNode = _instance3.stateNode;
	    _instance3 = _instance3.tag;
	    if (null !== alternate && alternate === common) break;
	    5 !== _instance3 && 26 !== _instance3 && 27 !== _instance3 || null === stateNode || (alternate = stateNode, inCapturePhase ? (stateNode = getListener(target, registrationName), null != stateNode && listeners.unshift(
	      createDispatchListener(target, stateNode, alternate)
	    )) : inCapturePhase || (stateNode = getListener(target, registrationName), null != stateNode && listeners.push(
	      createDispatchListener(target, stateNode, alternate)
	    )));
	    target = target.return;
	  }
	  0 !== listeners.length && dispatchQueue.push({ event, listeners });
	}
	var NORMALIZE_NEWLINES_REGEX = /\r\n?/g, NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
	function normalizeMarkupForTextOrAttribute(markup) {
	  return ("string" === typeof markup ? markup : "" + markup).replace(NORMALIZE_NEWLINES_REGEX, "\n").replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
	}
	function checkForUnmatchedText(serverText, clientText) {
	  clientText = normalizeMarkupForTextOrAttribute(clientText);
	  return normalizeMarkupForTextOrAttribute(serverText) === clientText ? true : false;
	}
	function noop$1() {
	}
	function setProp(domElement, tag, key, value, props, prevValue) {
	  switch (key) {
	    case "children":
	      "string" === typeof value ? "body" === tag || "textarea" === tag && "" === value || setTextContent(domElement, value) : ("number" === typeof value || "bigint" === typeof value) && "body" !== tag && setTextContent(domElement, "" + value);
	      break;
	    case "className":
	      setValueForKnownAttribute(domElement, "class", value);
	      break;
	    case "tabIndex":
	      setValueForKnownAttribute(domElement, "tabindex", value);
	      break;
	    case "dir":
	    case "role":
	    case "viewBox":
	    case "width":
	    case "height":
	      setValueForKnownAttribute(domElement, key, value);
	      break;
	    case "style":
	      setValueForStyles(domElement, value, prevValue);
	      break;
	    case "data":
	      if ("object" !== tag) {
	        setValueForKnownAttribute(domElement, "data", value);
	        break;
	      }
	    case "src":
	    case "href":
	      if ("" === value && ("a" !== tag || "href" !== key)) {
	        domElement.removeAttribute(key);
	        break;
	      }
	      if (null == value || "function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) {
	        domElement.removeAttribute(key);
	        break;
	      }
	      value = sanitizeURL("" + value);
	      domElement.setAttribute(key, value);
	      break;
	    case "action":
	    case "formAction":
	      if ("function" === typeof value) {
	        domElement.setAttribute(
	          key,
	          "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
	        );
	        break;
	      } else
	        "function" === typeof prevValue && ("formAction" === key ? ("input" !== tag && setProp(domElement, tag, "name", props.name, props, null), setProp(
	          domElement,
	          tag,
	          "formEncType",
	          props.formEncType,
	          props,
	          null
	        ), setProp(
	          domElement,
	          tag,
	          "formMethod",
	          props.formMethod,
	          props,
	          null
	        ), setProp(
	          domElement,
	          tag,
	          "formTarget",
	          props.formTarget,
	          props,
	          null
	        )) : (setProp(domElement, tag, "encType", props.encType, props, null), setProp(domElement, tag, "method", props.method, props, null), setProp(domElement, tag, "target", props.target, props, null)));
	      if (null == value || "symbol" === typeof value || "boolean" === typeof value) {
	        domElement.removeAttribute(key);
	        break;
	      }
	      value = sanitizeURL("" + value);
	      domElement.setAttribute(key, value);
	      break;
	    case "onClick":
	      null != value && (domElement.onclick = noop$1);
	      break;
	    case "onScroll":
	      null != value && listenToNonDelegatedEvent("scroll", domElement);
	      break;
	    case "onScrollEnd":
	      null != value && listenToNonDelegatedEvent("scrollend", domElement);
	      break;
	    case "dangerouslySetInnerHTML":
	      if (null != value) {
	        if ("object" !== typeof value || !("__html" in value))
	          throw Error(formatProdErrorMessage(61));
	        key = value.__html;
	        if (null != key) {
	          if (null != props.children) throw Error(formatProdErrorMessage(60));
	          domElement.innerHTML = key;
	        }
	      }
	      break;
	    case "multiple":
	      domElement.multiple = value && "function" !== typeof value && "symbol" !== typeof value;
	      break;
	    case "muted":
	      domElement.muted = value && "function" !== typeof value && "symbol" !== typeof value;
	      break;
	    case "suppressContentEditableWarning":
	    case "suppressHydrationWarning":
	    case "defaultValue":
	    case "defaultChecked":
	    case "innerHTML":
	    case "ref":
	      break;
	    case "autoFocus":
	      break;
	    case "xlinkHref":
	      if (null == value || "function" === typeof value || "boolean" === typeof value || "symbol" === typeof value) {
	        domElement.removeAttribute("xlink:href");
	        break;
	      }
	      key = sanitizeURL("" + value);
	      domElement.setAttributeNS(
	        "http://www.w3.org/1999/xlink",
	        "xlink:href",
	        key
	      );
	      break;
	    case "contentEditable":
	    case "spellCheck":
	    case "draggable":
	    case "value":
	    case "autoReverse":
	    case "externalResourcesRequired":
	    case "focusable":
	    case "preserveAlpha":
	      null != value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, "" + value) : domElement.removeAttribute(key);
	      break;
	    case "inert":
	    case "allowFullScreen":
	    case "async":
	    case "autoPlay":
	    case "controls":
	    case "default":
	    case "defer":
	    case "disabled":
	    case "disablePictureInPicture":
	    case "disableRemotePlayback":
	    case "formNoValidate":
	    case "hidden":
	    case "loop":
	    case "noModule":
	    case "noValidate":
	    case "open":
	    case "playsInline":
	    case "readOnly":
	    case "required":
	    case "reversed":
	    case "scoped":
	    case "seamless":
	    case "itemScope":
	      value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, "") : domElement.removeAttribute(key);
	      break;
	    case "capture":
	    case "download":
	      true === value ? domElement.setAttribute(key, "") : false !== value && null != value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, value) : domElement.removeAttribute(key);
	      break;
	    case "cols":
	    case "rows":
	    case "size":
	    case "span":
	      null != value && "function" !== typeof value && "symbol" !== typeof value && !isNaN(value) && 1 <= value ? domElement.setAttribute(key, value) : domElement.removeAttribute(key);
	      break;
	    case "rowSpan":
	    case "start":
	      null == value || "function" === typeof value || "symbol" === typeof value || isNaN(value) ? domElement.removeAttribute(key) : domElement.setAttribute(key, value);
	      break;
	    case "popover":
	      listenToNonDelegatedEvent("beforetoggle", domElement);
	      listenToNonDelegatedEvent("toggle", domElement);
	      setValueForAttribute(domElement, "popover", value);
	      break;
	    case "xlinkActuate":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:actuate",
	        value
	      );
	      break;
	    case "xlinkArcrole":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:arcrole",
	        value
	      );
	      break;
	    case "xlinkRole":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:role",
	        value
	      );
	      break;
	    case "xlinkShow":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:show",
	        value
	      );
	      break;
	    case "xlinkTitle":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:title",
	        value
	      );
	      break;
	    case "xlinkType":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:type",
	        value
	      );
	      break;
	    case "xmlBase":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/XML/1998/namespace",
	        "xml:base",
	        value
	      );
	      break;
	    case "xmlLang":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/XML/1998/namespace",
	        "xml:lang",
	        value
	      );
	      break;
	    case "xmlSpace":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/XML/1998/namespace",
	        "xml:space",
	        value
	      );
	      break;
	    case "is":
	      setValueForAttribute(domElement, "is", value);
	      break;
	    case "innerText":
	    case "textContent":
	      break;
	    default:
	      if (!(2 < key.length) || "o" !== key[0] && "O" !== key[0] || "n" !== key[1] && "N" !== key[1])
	        key = aliases.get(key) || key, setValueForAttribute(domElement, key, value);
	  }
	}
	function setPropOnCustomElement(domElement, tag, key, value, props, prevValue) {
	  switch (key) {
	    case "style":
	      setValueForStyles(domElement, value, prevValue);
	      break;
	    case "dangerouslySetInnerHTML":
	      if (null != value) {
	        if ("object" !== typeof value || !("__html" in value))
	          throw Error(formatProdErrorMessage(61));
	        key = value.__html;
	        if (null != key) {
	          if (null != props.children) throw Error(formatProdErrorMessage(60));
	          domElement.innerHTML = key;
	        }
	      }
	      break;
	    case "children":
	      "string" === typeof value ? setTextContent(domElement, value) : ("number" === typeof value || "bigint" === typeof value) && setTextContent(domElement, "" + value);
	      break;
	    case "onScroll":
	      null != value && listenToNonDelegatedEvent("scroll", domElement);
	      break;
	    case "onScrollEnd":
	      null != value && listenToNonDelegatedEvent("scrollend", domElement);
	      break;
	    case "onClick":
	      null != value && (domElement.onclick = noop$1);
	      break;
	    case "suppressContentEditableWarning":
	    case "suppressHydrationWarning":
	    case "innerHTML":
	    case "ref":
	      break;
	    case "innerText":
	    case "textContent":
	      break;
	    default:
	      if (!registrationNameDependencies.hasOwnProperty(key))
	        a: {
	          if ("o" === key[0] && "n" === key[1] && (props = key.endsWith("Capture"), tag = key.slice(2, props ? key.length - 7 : void 0), prevValue = domElement[internalPropsKey] || null, prevValue = null != prevValue ? prevValue[key] : null, "function" === typeof prevValue && domElement.removeEventListener(tag, prevValue, props), "function" === typeof value)) {
	            "function" !== typeof prevValue && null !== prevValue && (key in domElement ? domElement[key] = null : domElement.hasAttribute(key) && domElement.removeAttribute(key));
	            domElement.addEventListener(tag, value, props);
	            break a;
	          }
	          key in domElement ? domElement[key] = value : true === value ? domElement.setAttribute(key, "") : setValueForAttribute(domElement, key, value);
	        }
	  }
	}
	function setInitialProperties(domElement, tag, props) {
	  switch (tag) {
	    case "div":
	    case "span":
	    case "svg":
	    case "path":
	    case "a":
	    case "g":
	    case "p":
	    case "li":
	      break;
	    case "img":
	      listenToNonDelegatedEvent("error", domElement);
	      listenToNonDelegatedEvent("load", domElement);
	      var hasSrc = false, hasSrcSet = false, propKey;
	      for (propKey in props)
	        if (props.hasOwnProperty(propKey)) {
	          var propValue = props[propKey];
	          if (null != propValue)
	            switch (propKey) {
	              case "src":
	                hasSrc = true;
	                break;
	              case "srcSet":
	                hasSrcSet = true;
	                break;
	              case "children":
	              case "dangerouslySetInnerHTML":
	                throw Error(formatProdErrorMessage(137, tag));
	              default:
	                setProp(domElement, tag, propKey, propValue, props, null);
	            }
	        }
	      hasSrcSet && setProp(domElement, tag, "srcSet", props.srcSet, props, null);
	      hasSrc && setProp(domElement, tag, "src", props.src, props, null);
	      return;
	    case "input":
	      listenToNonDelegatedEvent("invalid", domElement);
	      var defaultValue = propKey = propValue = hasSrcSet = null, checked = null, defaultChecked = null;
	      for (hasSrc in props)
	        if (props.hasOwnProperty(hasSrc)) {
	          var propValue$186 = props[hasSrc];
	          if (null != propValue$186)
	            switch (hasSrc) {
	              case "name":
	                hasSrcSet = propValue$186;
	                break;
	              case "type":
	                propValue = propValue$186;
	                break;
	              case "checked":
	                checked = propValue$186;
	                break;
	              case "defaultChecked":
	                defaultChecked = propValue$186;
	                break;
	              case "value":
	                propKey = propValue$186;
	                break;
	              case "defaultValue":
	                defaultValue = propValue$186;
	                break;
	              case "children":
	              case "dangerouslySetInnerHTML":
	                if (null != propValue$186)
	                  throw Error(formatProdErrorMessage(137, tag));
	                break;
	              default:
	                setProp(domElement, tag, hasSrc, propValue$186, props, null);
	            }
	        }
	      initInput(
	        domElement,
	        propKey,
	        defaultValue,
	        checked,
	        defaultChecked,
	        propValue,
	        hasSrcSet,
	        false
	      );
	      track(domElement);
	      return;
	    case "select":
	      listenToNonDelegatedEvent("invalid", domElement);
	      hasSrc = propValue = propKey = null;
	      for (hasSrcSet in props)
	        if (props.hasOwnProperty(hasSrcSet) && (defaultValue = props[hasSrcSet], null != defaultValue))
	          switch (hasSrcSet) {
	            case "value":
	              propKey = defaultValue;
	              break;
	            case "defaultValue":
	              propValue = defaultValue;
	              break;
	            case "multiple":
	              hasSrc = defaultValue;
	            default:
	              setProp(domElement, tag, hasSrcSet, defaultValue, props, null);
	          }
	      tag = propKey;
	      props = propValue;
	      domElement.multiple = !!hasSrc;
	      null != tag ? updateOptions(domElement, !!hasSrc, tag, false) : null != props && updateOptions(domElement, !!hasSrc, props, true);
	      return;
	    case "textarea":
	      listenToNonDelegatedEvent("invalid", domElement);
	      propKey = hasSrcSet = hasSrc = null;
	      for (propValue in props)
	        if (props.hasOwnProperty(propValue) && (defaultValue = props[propValue], null != defaultValue))
	          switch (propValue) {
	            case "value":
	              hasSrc = defaultValue;
	              break;
	            case "defaultValue":
	              hasSrcSet = defaultValue;
	              break;
	            case "children":
	              propKey = defaultValue;
	              break;
	            case "dangerouslySetInnerHTML":
	              if (null != defaultValue) throw Error(formatProdErrorMessage(91));
	              break;
	            default:
	              setProp(domElement, tag, propValue, defaultValue, props, null);
	          }
	      initTextarea(domElement, hasSrc, hasSrcSet, propKey);
	      track(domElement);
	      return;
	    case "option":
	      for (checked in props)
	        if (props.hasOwnProperty(checked) && (hasSrc = props[checked], null != hasSrc))
	          switch (checked) {
	            case "selected":
	              domElement.selected = hasSrc && "function" !== typeof hasSrc && "symbol" !== typeof hasSrc;
	              break;
	            default:
	              setProp(domElement, tag, checked, hasSrc, props, null);
	          }
	      return;
	    case "dialog":
	      listenToNonDelegatedEvent("cancel", domElement);
	      listenToNonDelegatedEvent("close", domElement);
	      break;
	    case "iframe":
	    case "object":
	      listenToNonDelegatedEvent("load", domElement);
	      break;
	    case "video":
	    case "audio":
	      for (hasSrc = 0; hasSrc < mediaEventTypes.length; hasSrc++)
	        listenToNonDelegatedEvent(mediaEventTypes[hasSrc], domElement);
	      break;
	    case "image":
	      listenToNonDelegatedEvent("error", domElement);
	      listenToNonDelegatedEvent("load", domElement);
	      break;
	    case "details":
	      listenToNonDelegatedEvent("toggle", domElement);
	      break;
	    case "embed":
	    case "source":
	    case "link":
	      listenToNonDelegatedEvent("error", domElement), listenToNonDelegatedEvent("load", domElement);
	    case "area":
	    case "base":
	    case "br":
	    case "col":
	    case "hr":
	    case "keygen":
	    case "meta":
	    case "param":
	    case "track":
	    case "wbr":
	    case "menuitem":
	      for (defaultChecked in props)
	        if (props.hasOwnProperty(defaultChecked) && (hasSrc = props[defaultChecked], null != hasSrc))
	          switch (defaultChecked) {
	            case "children":
	            case "dangerouslySetInnerHTML":
	              throw Error(formatProdErrorMessage(137, tag));
	            default:
	              setProp(domElement, tag, defaultChecked, hasSrc, props, null);
	          }
	      return;
	    default:
	      if (isCustomElement(tag)) {
	        for (propValue$186 in props)
	          props.hasOwnProperty(propValue$186) && (hasSrc = props[propValue$186], void 0 !== hasSrc && setPropOnCustomElement(
	            domElement,
	            tag,
	            propValue$186,
	            hasSrc,
	            props,
	            void 0
	          ));
	        return;
	      }
	  }
	  for (defaultValue in props)
	    props.hasOwnProperty(defaultValue) && (hasSrc = props[defaultValue], null != hasSrc && setProp(domElement, tag, defaultValue, hasSrc, props, null));
	}
	function updateProperties(domElement, tag, lastProps, nextProps) {
	  switch (tag) {
	    case "div":
	    case "span":
	    case "svg":
	    case "path":
	    case "a":
	    case "g":
	    case "p":
	    case "li":
	      break;
	    case "input":
	      var name = null, type = null, value = null, defaultValue = null, lastDefaultValue = null, checked = null, defaultChecked = null;
	      for (propKey in lastProps) {
	        var lastProp = lastProps[propKey];
	        if (lastProps.hasOwnProperty(propKey) && null != lastProp)
	          switch (propKey) {
	            case "checked":
	              break;
	            case "value":
	              break;
	            case "defaultValue":
	              lastDefaultValue = lastProp;
	            default:
	              nextProps.hasOwnProperty(propKey) || setProp(domElement, tag, propKey, null, nextProps, lastProp);
	          }
	      }
	      for (var propKey$203 in nextProps) {
	        var propKey = nextProps[propKey$203];
	        lastProp = lastProps[propKey$203];
	        if (nextProps.hasOwnProperty(propKey$203) && (null != propKey || null != lastProp))
	          switch (propKey$203) {
	            case "type":
	              type = propKey;
	              break;
	            case "name":
	              name = propKey;
	              break;
	            case "checked":
	              checked = propKey;
	              break;
	            case "defaultChecked":
	              defaultChecked = propKey;
	              break;
	            case "value":
	              value = propKey;
	              break;
	            case "defaultValue":
	              defaultValue = propKey;
	              break;
	            case "children":
	            case "dangerouslySetInnerHTML":
	              if (null != propKey)
	                throw Error(formatProdErrorMessage(137, tag));
	              break;
	            default:
	              propKey !== lastProp && setProp(
	                domElement,
	                tag,
	                propKey$203,
	                propKey,
	                nextProps,
	                lastProp
	              );
	          }
	      }
	      updateInput(
	        domElement,
	        value,
	        defaultValue,
	        lastDefaultValue,
	        checked,
	        defaultChecked,
	        type,
	        name
	      );
	      return;
	    case "select":
	      propKey = value = defaultValue = propKey$203 = null;
	      for (type in lastProps)
	        if (lastDefaultValue = lastProps[type], lastProps.hasOwnProperty(type) && null != lastDefaultValue)
	          switch (type) {
	            case "value":
	              break;
	            case "multiple":
	              propKey = lastDefaultValue;
	            default:
	              nextProps.hasOwnProperty(type) || setProp(
	                domElement,
	                tag,
	                type,
	                null,
	                nextProps,
	                lastDefaultValue
	              );
	          }
	      for (name in nextProps)
	        if (type = nextProps[name], lastDefaultValue = lastProps[name], nextProps.hasOwnProperty(name) && (null != type || null != lastDefaultValue))
	          switch (name) {
	            case "value":
	              propKey$203 = type;
	              break;
	            case "defaultValue":
	              defaultValue = type;
	              break;
	            case "multiple":
	              value = type;
	            default:
	              type !== lastDefaultValue && setProp(
	                domElement,
	                tag,
	                name,
	                type,
	                nextProps,
	                lastDefaultValue
	              );
	          }
	      tag = defaultValue;
	      lastProps = value;
	      nextProps = propKey;
	      null != propKey$203 ? updateOptions(domElement, !!lastProps, propKey$203, false) : !!nextProps !== !!lastProps && (null != tag ? updateOptions(domElement, !!lastProps, tag, true) : updateOptions(domElement, !!lastProps, lastProps ? [] : "", false));
	      return;
	    case "textarea":
	      propKey = propKey$203 = null;
	      for (defaultValue in lastProps)
	        if (name = lastProps[defaultValue], lastProps.hasOwnProperty(defaultValue) && null != name && !nextProps.hasOwnProperty(defaultValue))
	          switch (defaultValue) {
	            case "value":
	              break;
	            case "children":
	              break;
	            default:
	              setProp(domElement, tag, defaultValue, null, nextProps, name);
	          }
	      for (value in nextProps)
	        if (name = nextProps[value], type = lastProps[value], nextProps.hasOwnProperty(value) && (null != name || null != type))
	          switch (value) {
	            case "value":
	              propKey$203 = name;
	              break;
	            case "defaultValue":
	              propKey = name;
	              break;
	            case "children":
	              break;
	            case "dangerouslySetInnerHTML":
	              if (null != name) throw Error(formatProdErrorMessage(91));
	              break;
	            default:
	              name !== type && setProp(domElement, tag, value, name, nextProps, type);
	          }
	      updateTextarea(domElement, propKey$203, propKey);
	      return;
	    case "option":
	      for (var propKey$219 in lastProps)
	        if (propKey$203 = lastProps[propKey$219], lastProps.hasOwnProperty(propKey$219) && null != propKey$203 && !nextProps.hasOwnProperty(propKey$219))
	          switch (propKey$219) {
	            case "selected":
	              domElement.selected = false;
	              break;
	            default:
	              setProp(
	                domElement,
	                tag,
	                propKey$219,
	                null,
	                nextProps,
	                propKey$203
	              );
	          }
	      for (lastDefaultValue in nextProps)
	        if (propKey$203 = nextProps[lastDefaultValue], propKey = lastProps[lastDefaultValue], nextProps.hasOwnProperty(lastDefaultValue) && propKey$203 !== propKey && (null != propKey$203 || null != propKey))
	          switch (lastDefaultValue) {
	            case "selected":
	              domElement.selected = propKey$203 && "function" !== typeof propKey$203 && "symbol" !== typeof propKey$203;
	              break;
	            default:
	              setProp(
	                domElement,
	                tag,
	                lastDefaultValue,
	                propKey$203,
	                nextProps,
	                propKey
	              );
	          }
	      return;
	    case "img":
	    case "link":
	    case "area":
	    case "base":
	    case "br":
	    case "col":
	    case "embed":
	    case "hr":
	    case "keygen":
	    case "meta":
	    case "param":
	    case "source":
	    case "track":
	    case "wbr":
	    case "menuitem":
	      for (var propKey$224 in lastProps)
	        propKey$203 = lastProps[propKey$224], lastProps.hasOwnProperty(propKey$224) && null != propKey$203 && !nextProps.hasOwnProperty(propKey$224) && setProp(domElement, tag, propKey$224, null, nextProps, propKey$203);
	      for (checked in nextProps)
	        if (propKey$203 = nextProps[checked], propKey = lastProps[checked], nextProps.hasOwnProperty(checked) && propKey$203 !== propKey && (null != propKey$203 || null != propKey))
	          switch (checked) {
	            case "children":
	            case "dangerouslySetInnerHTML":
	              if (null != propKey$203)
	                throw Error(formatProdErrorMessage(137, tag));
	              break;
	            default:
	              setProp(
	                domElement,
	                tag,
	                checked,
	                propKey$203,
	                nextProps,
	                propKey
	              );
	          }
	      return;
	    default:
	      if (isCustomElement(tag)) {
	        for (var propKey$229 in lastProps)
	          propKey$203 = lastProps[propKey$229], lastProps.hasOwnProperty(propKey$229) && void 0 !== propKey$203 && !nextProps.hasOwnProperty(propKey$229) && setPropOnCustomElement(
	            domElement,
	            tag,
	            propKey$229,
	            void 0,
	            nextProps,
	            propKey$203
	          );
	        for (defaultChecked in nextProps)
	          propKey$203 = nextProps[defaultChecked], propKey = lastProps[defaultChecked], !nextProps.hasOwnProperty(defaultChecked) || propKey$203 === propKey || void 0 === propKey$203 && void 0 === propKey || setPropOnCustomElement(
	            domElement,
	            tag,
	            defaultChecked,
	            propKey$203,
	            nextProps,
	            propKey
	          );
	        return;
	      }
	  }
	  for (var propKey$234 in lastProps)
	    propKey$203 = lastProps[propKey$234], lastProps.hasOwnProperty(propKey$234) && null != propKey$203 && !nextProps.hasOwnProperty(propKey$234) && setProp(domElement, tag, propKey$234, null, nextProps, propKey$203);
	  for (lastProp in nextProps)
	    propKey$203 = nextProps[lastProp], propKey = lastProps[lastProp], !nextProps.hasOwnProperty(lastProp) || propKey$203 === propKey || null == propKey$203 && null == propKey || setProp(domElement, tag, lastProp, propKey$203, nextProps, propKey);
	}
	var eventsEnabled = null, selectionInformation = null;
	function getOwnerDocumentFromRootContainer(rootContainerElement) {
	  return 9 === rootContainerElement.nodeType ? rootContainerElement : rootContainerElement.ownerDocument;
	}
	function getOwnHostContext(namespaceURI) {
	  switch (namespaceURI) {
	    case "http://www.w3.org/2000/svg":
	      return 1;
	    case "http://www.w3.org/1998/Math/MathML":
	      return 2;
	    default:
	      return 0;
	  }
	}
	function getChildHostContextProd(parentNamespace, type) {
	  if (0 === parentNamespace)
	    switch (type) {
	      case "svg":
	        return 1;
	      case "math":
	        return 2;
	      default:
	        return 0;
	    }
	  return 1 === parentNamespace && "foreignObject" === type ? 0 : parentNamespace;
	}
	function shouldSetTextContent(type, props) {
	  return "textarea" === type || "noscript" === type || "string" === typeof props.children || "number" === typeof props.children || "bigint" === typeof props.children || "object" === typeof props.dangerouslySetInnerHTML && null !== props.dangerouslySetInnerHTML && null != props.dangerouslySetInnerHTML.__html;
	}
	var currentPopstateTransitionEvent = null;
	function shouldAttemptEagerTransition() {
	  var event = window.event;
	  if (event && "popstate" === event.type) {
	    if (event === currentPopstateTransitionEvent) return false;
	    currentPopstateTransitionEvent = event;
	    return true;
	  }
	  currentPopstateTransitionEvent = null;
	  return false;
	}
	var scheduleTimeout = "function" === typeof setTimeout ? setTimeout : void 0, cancelTimeout = "function" === typeof clearTimeout ? clearTimeout : void 0, localPromise = "function" === typeof Promise ? Promise : void 0, scheduleMicrotask = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof localPromise ? function(callback) {
	  return localPromise.resolve(null).then(callback).catch(handleErrorInNextTick);
	} : scheduleTimeout;
	function handleErrorInNextTick(error) {
	  setTimeout(function() {
	    throw error;
	  });
	}
	function clearSuspenseBoundary(parentInstance, suspenseInstance) {
	  var node = suspenseInstance, depth = 0;
	  do {
	    var nextNode = node.nextSibling;
	    parentInstance.removeChild(node);
	    if (nextNode && 8 === nextNode.nodeType)
	      if (node = nextNode.data, "/$" === node) {
	        if (0 === depth) {
	          parentInstance.removeChild(nextNode);
	          retryIfBlockedOn(suspenseInstance);
	          return;
	        }
	        depth--;
	      } else "$" !== node && "$?" !== node && "$!" !== node || depth++;
	    node = nextNode;
	  } while (node);
	  retryIfBlockedOn(suspenseInstance);
	}
	function clearContainerSparingly(container) {
	  var nextNode = container.firstChild;
	  nextNode && 10 === nextNode.nodeType && (nextNode = nextNode.nextSibling);
	  for (; nextNode; ) {
	    var node = nextNode;
	    nextNode = nextNode.nextSibling;
	    switch (node.nodeName) {
	      case "HTML":
	      case "HEAD":
	      case "BODY":
	        clearContainerSparingly(node);
	        detachDeletedInstance(node);
	        continue;
	      case "SCRIPT":
	      case "STYLE":
	        continue;
	      case "LINK":
	        if ("stylesheet" === node.rel.toLowerCase()) continue;
	    }
	    container.removeChild(node);
	  }
	}
	function canHydrateInstance(instance, type, props, inRootOrSingleton) {
	  for (; 1 === instance.nodeType; ) {
	    var anyProps = props;
	    if (instance.nodeName.toLowerCase() !== type.toLowerCase()) {
	      if (!inRootOrSingleton && ("INPUT" !== instance.nodeName || "hidden" !== instance.type))
	        break;
	    } else if (!inRootOrSingleton)
	      if ("input" === type && "hidden" === instance.type) {
	        var name = null == anyProps.name ? null : "" + anyProps.name;
	        if ("hidden" === anyProps.type && instance.getAttribute("name") === name)
	          return instance;
	      } else return instance;
	    else if (!instance[internalHoistableMarker])
	      switch (type) {
	        case "meta":
	          if (!instance.hasAttribute("itemprop")) break;
	          return instance;
	        case "link":
	          name = instance.getAttribute("rel");
	          if ("stylesheet" === name && instance.hasAttribute("data-precedence"))
	            break;
	          else if (name !== anyProps.rel || instance.getAttribute("href") !== (null == anyProps.href ? null : anyProps.href) || instance.getAttribute("crossorigin") !== (null == anyProps.crossOrigin ? null : anyProps.crossOrigin) || instance.getAttribute("title") !== (null == anyProps.title ? null : anyProps.title))
	            break;
	          return instance;
	        case "style":
	          if (instance.hasAttribute("data-precedence")) break;
	          return instance;
	        case "script":
	          name = instance.getAttribute("src");
	          if ((name !== (null == anyProps.src ? null : anyProps.src) || instance.getAttribute("type") !== (null == anyProps.type ? null : anyProps.type) || instance.getAttribute("crossorigin") !== (null == anyProps.crossOrigin ? null : anyProps.crossOrigin)) && name && instance.hasAttribute("async") && !instance.hasAttribute("itemprop"))
	            break;
	          return instance;
	        default:
	          return instance;
	      }
	    instance = getNextHydratable(instance.nextSibling);
	    if (null === instance) break;
	  }
	  return null;
	}
	function canHydrateTextInstance(instance, text, inRootOrSingleton) {
	  if ("" === text) return null;
	  for (; 3 !== instance.nodeType; ) {
	    if ((1 !== instance.nodeType || "INPUT" !== instance.nodeName || "hidden" !== instance.type) && !inRootOrSingleton)
	      return null;
	    instance = getNextHydratable(instance.nextSibling);
	    if (null === instance) return null;
	  }
	  return instance;
	}
	function getNextHydratable(node) {
	  for (; null != node; node = node.nextSibling) {
	    var nodeType = node.nodeType;
	    if (1 === nodeType || 3 === nodeType) break;
	    if (8 === nodeType) {
	      nodeType = node.data;
	      if ("$" === nodeType || "$!" === nodeType || "$?" === nodeType || "F!" === nodeType || "F" === nodeType)
	        break;
	      if ("/$" === nodeType) return null;
	    }
	  }
	  return node;
	}
	function getParentSuspenseInstance(targetInstance) {
	  targetInstance = targetInstance.previousSibling;
	  for (var depth = 0; targetInstance; ) {
	    if (8 === targetInstance.nodeType) {
	      var data = targetInstance.data;
	      if ("$" === data || "$!" === data || "$?" === data) {
	        if (0 === depth) return targetInstance;
	        depth--;
	      } else "/$" === data && depth++;
	    }
	    targetInstance = targetInstance.previousSibling;
	  }
	  return null;
	}
	function resolveSingletonInstance(type, props, rootContainerInstance) {
	  props = getOwnerDocumentFromRootContainer(rootContainerInstance);
	  switch (type) {
	    case "html":
	      type = props.documentElement;
	      if (!type) throw Error(formatProdErrorMessage(452));
	      return type;
	    case "head":
	      type = props.head;
	      if (!type) throw Error(formatProdErrorMessage(453));
	      return type;
	    case "body":
	      type = props.body;
	      if (!type) throw Error(formatProdErrorMessage(454));
	      return type;
	    default:
	      throw Error(formatProdErrorMessage(451));
	  }
	}
	var preloadPropsMap = /* @__PURE__ */ new Map(), preconnectsSet = /* @__PURE__ */ new Set();
	function getHoistableRoot(container) {
	  return "function" === typeof container.getRootNode ? container.getRootNode() : container.ownerDocument;
	}
	var previousDispatcher = ReactDOMSharedInternals.d;
	ReactDOMSharedInternals.d = {
	  f: flushSyncWork,
	  r: requestFormReset,
	  D: prefetchDNS,
	  C: preconnect,
	  L: preload,
	  m: preloadModule,
	  X: preinitScript,
	  S: preinitStyle,
	  M: preinitModuleScript
	};
	function flushSyncWork() {
	  var previousWasRendering = previousDispatcher.f(), wasRendering = flushSyncWork$1();
	  return previousWasRendering || wasRendering;
	}
	function requestFormReset(form) {
	  var formInst = getInstanceFromNode(form);
	  null !== formInst && 5 === formInst.tag && "form" === formInst.type ? requestFormReset$1(formInst) : previousDispatcher.r(form);
	}
	var globalDocument = "undefined" === typeof document ? null : document;
	function preconnectAs(rel, href, crossOrigin) {
	  var ownerDocument = globalDocument;
	  if (ownerDocument && "string" === typeof href && href) {
	    var limitedEscapedHref = escapeSelectorAttributeValueInsideDoubleQuotes(href);
	    limitedEscapedHref = 'link[rel="' + rel + '"][href="' + limitedEscapedHref + '"]';
	    "string" === typeof crossOrigin && (limitedEscapedHref += '[crossorigin="' + crossOrigin + '"]');
	    preconnectsSet.has(limitedEscapedHref) || (preconnectsSet.add(limitedEscapedHref), rel = { rel, crossOrigin, href }, null === ownerDocument.querySelector(limitedEscapedHref) && (href = ownerDocument.createElement("link"), setInitialProperties(href, "link", rel), markNodeAsHoistable(href), ownerDocument.head.appendChild(href)));
	  }
	}
	function prefetchDNS(href) {
	  previousDispatcher.D(href);
	  preconnectAs("dns-prefetch", href, null);
	}
	function preconnect(href, crossOrigin) {
	  previousDispatcher.C(href, crossOrigin);
	  preconnectAs("preconnect", href, crossOrigin);
	}
	function preload(href, as, options2) {
	  previousDispatcher.L(href, as, options2);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && href && as) {
	    var preloadSelector = 'link[rel="preload"][as="' + escapeSelectorAttributeValueInsideDoubleQuotes(as) + '"]';
	    "image" === as ? options2 && options2.imageSrcSet ? (preloadSelector += '[imagesrcset="' + escapeSelectorAttributeValueInsideDoubleQuotes(
	      options2.imageSrcSet
	    ) + '"]', "string" === typeof options2.imageSizes && (preloadSelector += '[imagesizes="' + escapeSelectorAttributeValueInsideDoubleQuotes(
	      options2.imageSizes
	    ) + '"]')) : preloadSelector += '[href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"]' : preloadSelector += '[href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"]';
	    var key = preloadSelector;
	    switch (as) {
	      case "style":
	        key = getStyleKey(href);
	        break;
	      case "script":
	        key = getScriptKey(href);
	    }
	    preloadPropsMap.has(key) || (href = assign(
	      {
	        rel: "preload",
	        href: "image" === as && options2 && options2.imageSrcSet ? void 0 : href,
	        as
	      },
	      options2
	    ), preloadPropsMap.set(key, href), null !== ownerDocument.querySelector(preloadSelector) || "style" === as && ownerDocument.querySelector(getStylesheetSelectorFromKey(key)) || "script" === as && ownerDocument.querySelector(getScriptSelectorFromKey(key)) || (as = ownerDocument.createElement("link"), setInitialProperties(as, "link", href), markNodeAsHoistable(as), ownerDocument.head.appendChild(as)));
	  }
	}
	function preloadModule(href, options2) {
	  previousDispatcher.m(href, options2);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && href) {
	    var as = options2 && "string" === typeof options2.as ? options2.as : "script", preloadSelector = 'link[rel="modulepreload"][as="' + escapeSelectorAttributeValueInsideDoubleQuotes(as) + '"][href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"]', key = preloadSelector;
	    switch (as) {
	      case "audioworklet":
	      case "paintworklet":
	      case "serviceworker":
	      case "sharedworker":
	      case "worker":
	      case "script":
	        key = getScriptKey(href);
	    }
	    if (!preloadPropsMap.has(key) && (href = assign({ rel: "modulepreload", href }, options2), preloadPropsMap.set(key, href), null === ownerDocument.querySelector(preloadSelector))) {
	      switch (as) {
	        case "audioworklet":
	        case "paintworklet":
	        case "serviceworker":
	        case "sharedworker":
	        case "worker":
	        case "script":
	          if (ownerDocument.querySelector(getScriptSelectorFromKey(key)))
	            return;
	      }
	      as = ownerDocument.createElement("link");
	      setInitialProperties(as, "link", href);
	      markNodeAsHoistable(as);
	      ownerDocument.head.appendChild(as);
	    }
	  }
	}
	function preinitStyle(href, precedence, options2) {
	  previousDispatcher.S(href, precedence, options2);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && href) {
	    var styles = getResourcesFromRoot(ownerDocument).hoistableStyles, key = getStyleKey(href);
	    precedence = precedence || "default";
	    var resource = styles.get(key);
	    if (!resource) {
	      var state = { loading: 0, preload: null };
	      if (resource = ownerDocument.querySelector(
	        getStylesheetSelectorFromKey(key)
	      ))
	        state.loading = 5;
	      else {
	        href = assign(
	          { rel: "stylesheet", href, "data-precedence": precedence },
	          options2
	        );
	        (options2 = preloadPropsMap.get(key)) && adoptPreloadPropsForStylesheet(href, options2);
	        var link = resource = ownerDocument.createElement("link");
	        markNodeAsHoistable(link);
	        setInitialProperties(link, "link", href);
	        link._p = new Promise(function(resolve, reject) {
	          link.onload = resolve;
	          link.onerror = reject;
	        });
	        link.addEventListener("load", function() {
	          state.loading |= 1;
	        });
	        link.addEventListener("error", function() {
	          state.loading |= 2;
	        });
	        state.loading |= 4;
	        insertStylesheet(resource, precedence, ownerDocument);
	      }
	      resource = {
	        type: "stylesheet",
	        instance: resource,
	        count: 1,
	        state
	      };
	      styles.set(key, resource);
	    }
	  }
	}
	function preinitScript(src, options2) {
	  previousDispatcher.X(src, options2);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && src) {
	    var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts, key = getScriptKey(src), resource = scripts.get(key);
	    resource || (resource = ownerDocument.querySelector(getScriptSelectorFromKey(key)), resource || (src = assign({ src, async: true }, options2), (options2 = preloadPropsMap.get(key)) && adoptPreloadPropsForScript(src, options2), resource = ownerDocument.createElement("script"), markNodeAsHoistable(resource), setInitialProperties(resource, "link", src), ownerDocument.head.appendChild(resource)), resource = {
	      type: "script",
	      instance: resource,
	      count: 1,
	      state: null
	    }, scripts.set(key, resource));
	  }
	}
	function preinitModuleScript(src, options2) {
	  previousDispatcher.M(src, options2);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && src) {
	    var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts, key = getScriptKey(src), resource = scripts.get(key);
	    resource || (resource = ownerDocument.querySelector(getScriptSelectorFromKey(key)), resource || (src = assign({ src, async: true, type: "module" }, options2), (options2 = preloadPropsMap.get(key)) && adoptPreloadPropsForScript(src, options2), resource = ownerDocument.createElement("script"), markNodeAsHoistable(resource), setInitialProperties(resource, "link", src), ownerDocument.head.appendChild(resource)), resource = {
	      type: "script",
	      instance: resource,
	      count: 1,
	      state: null
	    }, scripts.set(key, resource));
	  }
	}
	function getResource(type, currentProps, pendingProps, currentResource) {
	  var JSCompiler_inline_result = (JSCompiler_inline_result = rootInstanceStackCursor.current) ? getHoistableRoot(JSCompiler_inline_result) : null;
	  if (!JSCompiler_inline_result) throw Error(formatProdErrorMessage(446));
	  switch (type) {
	    case "meta":
	    case "title":
	      return null;
	    case "style":
	      return "string" === typeof pendingProps.precedence && "string" === typeof pendingProps.href ? (currentProps = getStyleKey(pendingProps.href), pendingProps = getResourcesFromRoot(
	        JSCompiler_inline_result
	      ).hoistableStyles, currentResource = pendingProps.get(currentProps), currentResource || (currentResource = {
	        type: "style",
	        instance: null,
	        count: 0,
	        state: null
	      }, pendingProps.set(currentProps, currentResource)), currentResource) : { type: "void", instance: null, count: 0, state: null };
	    case "link":
	      if ("stylesheet" === pendingProps.rel && "string" === typeof pendingProps.href && "string" === typeof pendingProps.precedence) {
	        type = getStyleKey(pendingProps.href);
	        var styles$242 = getResourcesFromRoot(
	          JSCompiler_inline_result
	        ).hoistableStyles, resource$243 = styles$242.get(type);
	        resource$243 || (JSCompiler_inline_result = JSCompiler_inline_result.ownerDocument || JSCompiler_inline_result, resource$243 = {
	          type: "stylesheet",
	          instance: null,
	          count: 0,
	          state: { loading: 0, preload: null }
	        }, styles$242.set(type, resource$243), (styles$242 = JSCompiler_inline_result.querySelector(
	          getStylesheetSelectorFromKey(type)
	        )) && !styles$242._p && (resource$243.instance = styles$242, resource$243.state.loading = 5), preloadPropsMap.has(type) || (pendingProps = {
	          rel: "preload",
	          as: "style",
	          href: pendingProps.href,
	          crossOrigin: pendingProps.crossOrigin,
	          integrity: pendingProps.integrity,
	          media: pendingProps.media,
	          hrefLang: pendingProps.hrefLang,
	          referrerPolicy: pendingProps.referrerPolicy
	        }, preloadPropsMap.set(type, pendingProps), styles$242 || preloadStylesheet(
	          JSCompiler_inline_result,
	          type,
	          pendingProps,
	          resource$243.state
	        )));
	        if (currentProps && null === currentResource)
	          throw Error(formatProdErrorMessage(528, ""));
	        return resource$243;
	      }
	      if (currentProps && null !== currentResource)
	        throw Error(formatProdErrorMessage(529, ""));
	      return null;
	    case "script":
	      return currentProps = pendingProps.async, pendingProps = pendingProps.src, "string" === typeof pendingProps && currentProps && "function" !== typeof currentProps && "symbol" !== typeof currentProps ? (currentProps = getScriptKey(pendingProps), pendingProps = getResourcesFromRoot(
	        JSCompiler_inline_result
	      ).hoistableScripts, currentResource = pendingProps.get(currentProps), currentResource || (currentResource = {
	        type: "script",
	        instance: null,
	        count: 0,
	        state: null
	      }, pendingProps.set(currentProps, currentResource)), currentResource) : { type: "void", instance: null, count: 0, state: null };
	    default:
	      throw Error(formatProdErrorMessage(444, type));
	  }
	}
	function getStyleKey(href) {
	  return 'href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"';
	}
	function getStylesheetSelectorFromKey(key) {
	  return 'link[rel="stylesheet"][' + key + "]";
	}
	function stylesheetPropsFromRawProps(rawProps) {
	  return assign({}, rawProps, {
	    "data-precedence": rawProps.precedence,
	    precedence: null
	  });
	}
	function preloadStylesheet(ownerDocument, key, preloadProps, state) {
	  ownerDocument.querySelector('link[rel="preload"][as="style"][' + key + "]") ? state.loading = 1 : (key = ownerDocument.createElement("link"), state.preload = key, key.addEventListener("load", function() {
	    return state.loading |= 1;
	  }), key.addEventListener("error", function() {
	    return state.loading |= 2;
	  }), setInitialProperties(key, "link", preloadProps), markNodeAsHoistable(key), ownerDocument.head.appendChild(key));
	}
	function getScriptKey(src) {
	  return '[src="' + escapeSelectorAttributeValueInsideDoubleQuotes(src) + '"]';
	}
	function getScriptSelectorFromKey(key) {
	  return "script[async]" + key;
	}
	function acquireResource(hoistableRoot, resource, props) {
	  resource.count++;
	  if (null === resource.instance)
	    switch (resource.type) {
	      case "style":
	        var instance = hoistableRoot.querySelector(
	          'style[data-href~="' + escapeSelectorAttributeValueInsideDoubleQuotes(props.href) + '"]'
	        );
	        if (instance)
	          return resource.instance = instance, markNodeAsHoistable(instance), instance;
	        var styleProps = assign({}, props, {
	          "data-href": props.href,
	          "data-precedence": props.precedence,
	          href: null,
	          precedence: null
	        });
	        instance = (hoistableRoot.ownerDocument || hoistableRoot).createElement(
	          "style"
	        );
	        markNodeAsHoistable(instance);
	        setInitialProperties(instance, "style", styleProps);
	        insertStylesheet(instance, props.precedence, hoistableRoot);
	        return resource.instance = instance;
	      case "stylesheet":
	        styleProps = getStyleKey(props.href);
	        var instance$248 = hoistableRoot.querySelector(
	          getStylesheetSelectorFromKey(styleProps)
	        );
	        if (instance$248)
	          return resource.state.loading |= 4, resource.instance = instance$248, markNodeAsHoistable(instance$248), instance$248;
	        instance = stylesheetPropsFromRawProps(props);
	        (styleProps = preloadPropsMap.get(styleProps)) && adoptPreloadPropsForStylesheet(instance, styleProps);
	        instance$248 = (hoistableRoot.ownerDocument || hoistableRoot).createElement("link");
	        markNodeAsHoistable(instance$248);
	        var linkInstance = instance$248;
	        linkInstance._p = new Promise(function(resolve, reject) {
	          linkInstance.onload = resolve;
	          linkInstance.onerror = reject;
	        });
	        setInitialProperties(instance$248, "link", instance);
	        resource.state.loading |= 4;
	        insertStylesheet(instance$248, props.precedence, hoistableRoot);
	        return resource.instance = instance$248;
	      case "script":
	        instance$248 = getScriptKey(props.src);
	        if (styleProps = hoistableRoot.querySelector(
	          getScriptSelectorFromKey(instance$248)
	        ))
	          return resource.instance = styleProps, markNodeAsHoistable(styleProps), styleProps;
	        instance = props;
	        if (styleProps = preloadPropsMap.get(instance$248))
	          instance = assign({}, props), adoptPreloadPropsForScript(instance, styleProps);
	        hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
	        styleProps = hoistableRoot.createElement("script");
	        markNodeAsHoistable(styleProps);
	        setInitialProperties(styleProps, "link", instance);
	        hoistableRoot.head.appendChild(styleProps);
	        return resource.instance = styleProps;
	      case "void":
	        return null;
	      default:
	        throw Error(formatProdErrorMessage(443, resource.type));
	    }
	  else
	    "stylesheet" === resource.type && 0 === (resource.state.loading & 4) && (instance = resource.instance, resource.state.loading |= 4, insertStylesheet(instance, props.precedence, hoistableRoot));
	  return resource.instance;
	}
	function insertStylesheet(instance, precedence, root2) {
	  for (var nodes = root2.querySelectorAll(
	    'link[rel="stylesheet"][data-precedence],style[data-precedence]'
	  ), last = nodes.length ? nodes[nodes.length - 1] : null, prior = last, i = 0; i < nodes.length; i++) {
	    var node = nodes[i];
	    if (node.dataset.precedence === precedence) prior = node;
	    else if (prior !== last) break;
	  }
	  prior ? prior.parentNode.insertBefore(instance, prior.nextSibling) : (precedence = 9 === root2.nodeType ? root2.head : root2, precedence.insertBefore(instance, precedence.firstChild));
	}
	function adoptPreloadPropsForStylesheet(stylesheetProps, preloadProps) {
	  null == stylesheetProps.crossOrigin && (stylesheetProps.crossOrigin = preloadProps.crossOrigin);
	  null == stylesheetProps.referrerPolicy && (stylesheetProps.referrerPolicy = preloadProps.referrerPolicy);
	  null == stylesheetProps.title && (stylesheetProps.title = preloadProps.title);
	}
	function adoptPreloadPropsForScript(scriptProps, preloadProps) {
	  null == scriptProps.crossOrigin && (scriptProps.crossOrigin = preloadProps.crossOrigin);
	  null == scriptProps.referrerPolicy && (scriptProps.referrerPolicy = preloadProps.referrerPolicy);
	  null == scriptProps.integrity && (scriptProps.integrity = preloadProps.integrity);
	}
	var tagCaches = null;
	function getHydratableHoistableCache(type, keyAttribute, ownerDocument) {
	  if (null === tagCaches) {
	    var cache = /* @__PURE__ */ new Map();
	    var caches = tagCaches = /* @__PURE__ */ new Map();
	    caches.set(ownerDocument, cache);
	  } else
	    caches = tagCaches, cache = caches.get(ownerDocument), cache || (cache = /* @__PURE__ */ new Map(), caches.set(ownerDocument, cache));
	  if (cache.has(type)) return cache;
	  cache.set(type, null);
	  ownerDocument = ownerDocument.getElementsByTagName(type);
	  for (caches = 0; caches < ownerDocument.length; caches++) {
	    var node = ownerDocument[caches];
	    if (!(node[internalHoistableMarker] || node[internalInstanceKey] || "link" === type && "stylesheet" === node.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== node.namespaceURI) {
	      var nodeKey = node.getAttribute(keyAttribute) || "";
	      nodeKey = type + nodeKey;
	      var existing = cache.get(nodeKey);
	      existing ? existing.push(node) : cache.set(nodeKey, [node]);
	    }
	  }
	  return cache;
	}
	function mountHoistable(hoistableRoot, type, instance) {
	  hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
	  hoistableRoot.head.insertBefore(
	    instance,
	    "title" === type ? hoistableRoot.querySelector("head > title") : null
	  );
	}
	function isHostHoistableType(type, props, hostContext) {
	  if (1 === hostContext || null != props.itemProp) return false;
	  switch (type) {
	    case "meta":
	    case "title":
	      return true;
	    case "style":
	      if ("string" !== typeof props.precedence || "string" !== typeof props.href || "" === props.href)
	        break;
	      return true;
	    case "link":
	      if ("string" !== typeof props.rel || "string" !== typeof props.href || "" === props.href || props.onLoad || props.onError)
	        break;
	      switch (props.rel) {
	        case "stylesheet":
	          return type = props.disabled, "string" === typeof props.precedence && null == type;
	        default:
	          return true;
	      }
	    case "script":
	      if (props.async && "function" !== typeof props.async && "symbol" !== typeof props.async && !props.onLoad && !props.onError && props.src && "string" === typeof props.src)
	        return true;
	  }
	  return false;
	}
	function preloadResource(resource) {
	  return "stylesheet" === resource.type && 0 === (resource.state.loading & 3) ? false : true;
	}
	var suspendedState = null;
	function noop() {
	}
	function suspendResource(hoistableRoot, resource, props) {
	  if (null === suspendedState) throw Error(formatProdErrorMessage(475));
	  var state = suspendedState;
	  if ("stylesheet" === resource.type && ("string" !== typeof props.media || false !== matchMedia(props.media).matches) && 0 === (resource.state.loading & 4)) {
	    if (null === resource.instance) {
	      var key = getStyleKey(props.href), instance = hoistableRoot.querySelector(
	        getStylesheetSelectorFromKey(key)
	      );
	      if (instance) {
	        hoistableRoot = instance._p;
	        null !== hoistableRoot && "object" === typeof hoistableRoot && "function" === typeof hoistableRoot.then && (state.count++, state = onUnsuspend.bind(state), hoistableRoot.then(state, state));
	        resource.state.loading |= 4;
	        resource.instance = instance;
	        markNodeAsHoistable(instance);
	        return;
	      }
	      instance = hoistableRoot.ownerDocument || hoistableRoot;
	      props = stylesheetPropsFromRawProps(props);
	      (key = preloadPropsMap.get(key)) && adoptPreloadPropsForStylesheet(props, key);
	      instance = instance.createElement("link");
	      markNodeAsHoistable(instance);
	      var linkInstance = instance;
	      linkInstance._p = new Promise(function(resolve, reject) {
	        linkInstance.onload = resolve;
	        linkInstance.onerror = reject;
	      });
	      setInitialProperties(instance, "link", props);
	      resource.instance = instance;
	    }
	    null === state.stylesheets && (state.stylesheets = /* @__PURE__ */ new Map());
	    state.stylesheets.set(resource, hoistableRoot);
	    (hoistableRoot = resource.state.preload) && 0 === (resource.state.loading & 3) && (state.count++, resource = onUnsuspend.bind(state), hoistableRoot.addEventListener("load", resource), hoistableRoot.addEventListener("error", resource));
	  }
	}
	function waitForCommitToBeReady() {
	  if (null === suspendedState) throw Error(formatProdErrorMessage(475));
	  var state = suspendedState;
	  state.stylesheets && 0 === state.count && insertSuspendedStylesheets(state, state.stylesheets);
	  return 0 < state.count ? function(commit) {
	    var stylesheetTimer = setTimeout(function() {
	      state.stylesheets && insertSuspendedStylesheets(state, state.stylesheets);
	      if (state.unsuspend) {
	        var unsuspend = state.unsuspend;
	        state.unsuspend = null;
	        unsuspend();
	      }
	    }, 6e4);
	    state.unsuspend = commit;
	    return function() {
	      state.unsuspend = null;
	      clearTimeout(stylesheetTimer);
	    };
	  } : null;
	}
	function onUnsuspend() {
	  this.count--;
	  if (0 === this.count) {
	    if (this.stylesheets) insertSuspendedStylesheets(this, this.stylesheets);
	    else if (this.unsuspend) {
	      var unsuspend = this.unsuspend;
	      this.unsuspend = null;
	      unsuspend();
	    }
	  }
	}
	var precedencesByRoot = null;
	function insertSuspendedStylesheets(state, resources) {
	  state.stylesheets = null;
	  null !== state.unsuspend && (state.count++, precedencesByRoot = /* @__PURE__ */ new Map(), resources.forEach(insertStylesheetIntoRoot, state), precedencesByRoot = null, onUnsuspend.call(state));
	}
	function insertStylesheetIntoRoot(root2, resource) {
	  if (!(resource.state.loading & 4)) {
	    var precedences = precedencesByRoot.get(root2);
	    if (precedences) var last = precedences.get(null);
	    else {
	      precedences = /* @__PURE__ */ new Map();
	      precedencesByRoot.set(root2, precedences);
	      for (var nodes = root2.querySelectorAll(
	        "link[data-precedence],style[data-precedence]"
	      ), i = 0; i < nodes.length; i++) {
	        var node = nodes[i];
	        if ("LINK" === node.nodeName || "not all" !== node.getAttribute("media"))
	          precedences.set(node.dataset.precedence, node), last = node;
	      }
	      last && precedences.set(null, last);
	    }
	    nodes = resource.instance;
	    node = nodes.getAttribute("data-precedence");
	    i = precedences.get(node) || last;
	    i === last && precedences.set(null, nodes);
	    precedences.set(node, nodes);
	    this.count++;
	    last = onUnsuspend.bind(this);
	    nodes.addEventListener("load", last);
	    nodes.addEventListener("error", last);
	    i ? i.parentNode.insertBefore(nodes, i.nextSibling) : (root2 = 9 === root2.nodeType ? root2.head : root2, root2.insertBefore(nodes, root2.firstChild));
	    resource.state.loading |= 4;
	  }
	}
	var HostTransitionContext = {
	  $$typeof: REACT_CONTEXT_TYPE,
	  Provider: null,
	  Consumer: null,
	  _currentValue: sharedNotPendingObject,
	  _currentValue2: sharedNotPendingObject,
	  _threadCount: 0
	};
	function FiberRootNode(containerInfo, tag, hydrate, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, formState) {
	  this.tag = 1;
	  this.containerInfo = containerInfo;
	  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
	  this.timeoutHandle = -1;
	  this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null;
	  this.callbackPriority = 0;
	  this.expirationTimes = createLaneMap(-1);
	  this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
	  this.entanglements = createLaneMap(0);
	  this.hiddenUpdates = createLaneMap(null);
	  this.identifierPrefix = identifierPrefix;
	  this.onUncaughtError = onUncaughtError;
	  this.onCaughtError = onCaughtError;
	  this.onRecoverableError = onRecoverableError;
	  this.pooledCache = null;
	  this.pooledCacheLanes = 0;
	  this.formState = formState;
	  this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function createFiberRoot(containerInfo, tag, hydrate, initialChildren, hydrationCallbacks, isStrictMode, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, transitionCallbacks, formState) {
	  containerInfo = new FiberRootNode(
	    containerInfo,
	    tag,
	    hydrate,
	    identifierPrefix,
	    onUncaughtError,
	    onCaughtError,
	    onRecoverableError,
	    formState
	  );
	  tag = 1;
	  true === isStrictMode && (tag |= 24);
	  isStrictMode = createFiberImplClass(3, null, null, tag);
	  containerInfo.current = isStrictMode;
	  isStrictMode.stateNode = containerInfo;
	  tag = createCache();
	  tag.refCount++;
	  containerInfo.pooledCache = tag;
	  tag.refCount++;
	  isStrictMode.memoizedState = {
	    element: initialChildren,
	    isDehydrated: hydrate,
	    cache: tag
	  };
	  initializeUpdateQueue(isStrictMode);
	  return containerInfo;
	}
	function getContextForSubtree(parentComponent) {
	  if (!parentComponent) return emptyContextObject;
	  parentComponent = emptyContextObject;
	  return parentComponent;
	}
	function updateContainerImpl(rootFiber, lane, element, container, parentComponent, callback) {
	  parentComponent = getContextForSubtree(parentComponent);
	  null === container.context ? container.context = parentComponent : container.pendingContext = parentComponent;
	  container = createUpdate(lane);
	  container.payload = { element };
	  callback = void 0 === callback ? null : callback;
	  null !== callback && (container.callback = callback);
	  element = enqueueUpdate(rootFiber, container, lane);
	  null !== element && (scheduleUpdateOnFiber(element, rootFiber, lane), entangleTransitions(element, rootFiber, lane));
	}
	function markRetryLaneImpl(fiber, retryLane) {
	  fiber = fiber.memoizedState;
	  if (null !== fiber && null !== fiber.dehydrated) {
	    var a = fiber.retryLane;
	    fiber.retryLane = 0 !== a && a < retryLane ? a : retryLane;
	  }
	}
	function markRetryLaneIfNotHydrated(fiber, retryLane) {
	  markRetryLaneImpl(fiber, retryLane);
	  (fiber = fiber.alternate) && markRetryLaneImpl(fiber, retryLane);
	}
	function attemptContinuousHydration(fiber) {
	  if (13 === fiber.tag) {
	    var root2 = enqueueConcurrentRenderForLane(fiber, 67108864);
	    null !== root2 && scheduleUpdateOnFiber(root2, fiber, 67108864);
	    markRetryLaneIfNotHydrated(fiber, 67108864);
	  }
	}
	var _enabled = true;
	function dispatchDiscreteEvent(domEventName, eventSystemFlags, container, nativeEvent) {
	  var prevTransition = ReactSharedInternals.T;
	  ReactSharedInternals.T = null;
	  var previousPriority = ReactDOMSharedInternals.p;
	  try {
	    ReactDOMSharedInternals.p = 2, dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
	  } finally {
	    ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
	  }
	}
	function dispatchContinuousEvent(domEventName, eventSystemFlags, container, nativeEvent) {
	  var prevTransition = ReactSharedInternals.T;
	  ReactSharedInternals.T = null;
	  var previousPriority = ReactDOMSharedInternals.p;
	  try {
	    ReactDOMSharedInternals.p = 8, dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
	  } finally {
	    ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
	  }
	}
	function dispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent) {
	  if (_enabled) {
	    var blockedOn = findInstanceBlockingEvent(nativeEvent);
	    if (null === blockedOn)
	      dispatchEventForPluginEventSystem(
	        domEventName,
	        eventSystemFlags,
	        nativeEvent,
	        return_targetInst,
	        targetContainer
	      ), clearIfContinuousEvent(domEventName, nativeEvent);
	    else if (queueIfContinuousEvent(
	      blockedOn,
	      domEventName,
	      eventSystemFlags,
	      targetContainer,
	      nativeEvent
	    ))
	      nativeEvent.stopPropagation();
	    else if (clearIfContinuousEvent(domEventName, nativeEvent), eventSystemFlags & 4 && -1 < discreteReplayableEvents.indexOf(domEventName)) {
	      for (; null !== blockedOn; ) {
	        var fiber = getInstanceFromNode(blockedOn);
	        if (null !== fiber)
	          switch (fiber.tag) {
	            case 3:
	              fiber = fiber.stateNode;
	              if (fiber.current.memoizedState.isDehydrated) {
	                var lanes = getHighestPriorityLanes(fiber.pendingLanes);
	                if (0 !== lanes) {
	                  var root2 = fiber;
	                  root2.pendingLanes |= 2;
	                  for (root2.entangledLanes |= 2; lanes; ) {
	                    var lane = 1 << 31 - clz32(lanes);
	                    root2.entanglements[1] |= lane;
	                    lanes &= ~lane;
	                  }
	                  ensureRootIsScheduled(fiber);
	                  0 === (executionContext & 6) && (workInProgressRootRenderTargetTime = now() + 500, flushSyncWorkAcrossRoots_impl(0));
	                }
	              }
	              break;
	            case 13:
	              root2 = enqueueConcurrentRenderForLane(fiber, 2), null !== root2 && scheduleUpdateOnFiber(root2, fiber, 2), flushSyncWork$1(), markRetryLaneIfNotHydrated(fiber, 2);
	          }
	        fiber = findInstanceBlockingEvent(nativeEvent);
	        null === fiber && dispatchEventForPluginEventSystem(
	          domEventName,
	          eventSystemFlags,
	          nativeEvent,
	          return_targetInst,
	          targetContainer
	        );
	        if (fiber === blockedOn) break;
	        blockedOn = fiber;
	      }
	      null !== blockedOn && nativeEvent.stopPropagation();
	    } else
	      dispatchEventForPluginEventSystem(
	        domEventName,
	        eventSystemFlags,
	        nativeEvent,
	        null,
	        targetContainer
	      );
	  }
	}
	function findInstanceBlockingEvent(nativeEvent) {
	  nativeEvent = getEventTarget(nativeEvent);
	  return findInstanceBlockingTarget(nativeEvent);
	}
	var return_targetInst = null;
	function findInstanceBlockingTarget(targetNode) {
	  return_targetInst = null;
	  targetNode = getClosestInstanceFromNode(targetNode);
	  if (null !== targetNode) {
	    var nearestMounted = getNearestMountedFiber(targetNode);
	    if (null === nearestMounted) targetNode = null;
	    else {
	      var tag = nearestMounted.tag;
	      if (13 === tag) {
	        targetNode = getSuspenseInstanceFromFiber(nearestMounted);
	        if (null !== targetNode) return targetNode;
	        targetNode = null;
	      } else if (3 === tag) {
	        if (nearestMounted.stateNode.current.memoizedState.isDehydrated)
	          return 3 === nearestMounted.tag ? nearestMounted.stateNode.containerInfo : null;
	        targetNode = null;
	      } else nearestMounted !== targetNode && (targetNode = null);
	    }
	  }
	  return_targetInst = targetNode;
	  return null;
	}
	function getEventPriority(domEventName) {
	  switch (domEventName) {
	    case "beforetoggle":
	    case "cancel":
	    case "click":
	    case "close":
	    case "contextmenu":
	    case "copy":
	    case "cut":
	    case "auxclick":
	    case "dblclick":
	    case "dragend":
	    case "dragstart":
	    case "drop":
	    case "focusin":
	    case "focusout":
	    case "input":
	    case "invalid":
	    case "keydown":
	    case "keypress":
	    case "keyup":
	    case "mousedown":
	    case "mouseup":
	    case "paste":
	    case "pause":
	    case "play":
	    case "pointercancel":
	    case "pointerdown":
	    case "pointerup":
	    case "ratechange":
	    case "reset":
	    case "resize":
	    case "seeked":
	    case "submit":
	    case "toggle":
	    case "touchcancel":
	    case "touchend":
	    case "touchstart":
	    case "volumechange":
	    case "change":
	    case "selectionchange":
	    case "textInput":
	    case "compositionstart":
	    case "compositionend":
	    case "compositionupdate":
	    case "beforeblur":
	    case "afterblur":
	    case "beforeinput":
	    case "blur":
	    case "fullscreenchange":
	    case "focus":
	    case "hashchange":
	    case "popstate":
	    case "select":
	    case "selectstart":
	      return 2;
	    case "drag":
	    case "dragenter":
	    case "dragexit":
	    case "dragleave":
	    case "dragover":
	    case "mousemove":
	    case "mouseout":
	    case "mouseover":
	    case "pointermove":
	    case "pointerout":
	    case "pointerover":
	    case "scroll":
	    case "touchmove":
	    case "wheel":
	    case "mouseenter":
	    case "mouseleave":
	    case "pointerenter":
	    case "pointerleave":
	      return 8;
	    case "message":
	      switch (getCurrentPriorityLevel()) {
	        case ImmediatePriority:
	          return 2;
	        case UserBlockingPriority:
	          return 8;
	        case NormalPriority$1:
	        case LowPriority:
	          return 32;
	        case IdlePriority:
	          return 268435456;
	        default:
	          return 32;
	      }
	    default:
	      return 32;
	  }
	}
	var hasScheduledReplayAttempt = false, queuedFocus = null, queuedDrag = null, queuedMouse = null, queuedPointers = /* @__PURE__ */ new Map(), queuedPointerCaptures = /* @__PURE__ */ new Map(), queuedExplicitHydrationTargets = [], discreteReplayableEvents = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
	  " "
	);
	function clearIfContinuousEvent(domEventName, nativeEvent) {
	  switch (domEventName) {
	    case "focusin":
	    case "focusout":
	      queuedFocus = null;
	      break;
	    case "dragenter":
	    case "dragleave":
	      queuedDrag = null;
	      break;
	    case "mouseover":
	    case "mouseout":
	      queuedMouse = null;
	      break;
	    case "pointerover":
	    case "pointerout":
	      queuedPointers.delete(nativeEvent.pointerId);
	      break;
	    case "gotpointercapture":
	    case "lostpointercapture":
	      queuedPointerCaptures.delete(nativeEvent.pointerId);
	  }
	}
	function accumulateOrCreateContinuousQueuedReplayableEvent(existingQueuedEvent, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
	  if (null === existingQueuedEvent || existingQueuedEvent.nativeEvent !== nativeEvent)
	    return existingQueuedEvent = {
	      blockedOn,
	      domEventName,
	      eventSystemFlags,
	      nativeEvent,
	      targetContainers: [targetContainer]
	    }, null !== blockedOn && (blockedOn = getInstanceFromNode(blockedOn), null !== blockedOn && attemptContinuousHydration(blockedOn)), existingQueuedEvent;
	  existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
	  blockedOn = existingQueuedEvent.targetContainers;
	  null !== targetContainer && -1 === blockedOn.indexOf(targetContainer) && blockedOn.push(targetContainer);
	  return existingQueuedEvent;
	}
	function queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
	  switch (domEventName) {
	    case "focusin":
	      return queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
	        queuedFocus,
	        blockedOn,
	        domEventName,
	        eventSystemFlags,
	        targetContainer,
	        nativeEvent
	      ), true;
	    case "dragenter":
	      return queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(
	        queuedDrag,
	        blockedOn,
	        domEventName,
	        eventSystemFlags,
	        targetContainer,
	        nativeEvent
	      ), true;
	    case "mouseover":
	      return queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(
	        queuedMouse,
	        blockedOn,
	        domEventName,
	        eventSystemFlags,
	        targetContainer,
	        nativeEvent
	      ), true;
	    case "pointerover":
	      var pointerId = nativeEvent.pointerId;
	      queuedPointers.set(
	        pointerId,
	        accumulateOrCreateContinuousQueuedReplayableEvent(
	          queuedPointers.get(pointerId) || null,
	          blockedOn,
	          domEventName,
	          eventSystemFlags,
	          targetContainer,
	          nativeEvent
	        )
	      );
	      return true;
	    case "gotpointercapture":
	      return pointerId = nativeEvent.pointerId, queuedPointerCaptures.set(
	        pointerId,
	        accumulateOrCreateContinuousQueuedReplayableEvent(
	          queuedPointerCaptures.get(pointerId) || null,
	          blockedOn,
	          domEventName,
	          eventSystemFlags,
	          targetContainer,
	          nativeEvent
	        )
	      ), true;
	  }
	  return false;
	}
	function attemptExplicitHydrationTarget(queuedTarget) {
	  var targetInst = getClosestInstanceFromNode(queuedTarget.target);
	  if (null !== targetInst) {
	    var nearestMounted = getNearestMountedFiber(targetInst);
	    if (null !== nearestMounted) {
	      if (targetInst = nearestMounted.tag, 13 === targetInst) {
	        if (targetInst = getSuspenseInstanceFromFiber(nearestMounted), null !== targetInst) {
	          queuedTarget.blockedOn = targetInst;
	          runWithPriority(queuedTarget.priority, function() {
	            if (13 === nearestMounted.tag) {
	              var lane = requestUpdateLane(), root2 = enqueueConcurrentRenderForLane(nearestMounted, lane);
	              null !== root2 && scheduleUpdateOnFiber(root2, nearestMounted, lane);
	              markRetryLaneIfNotHydrated(nearestMounted, lane);
	            }
	          });
	          return;
	        }
	      } else if (3 === targetInst && nearestMounted.stateNode.current.memoizedState.isDehydrated) {
	        queuedTarget.blockedOn = 3 === nearestMounted.tag ? nearestMounted.stateNode.containerInfo : null;
	        return;
	      }
	    }
	  }
	  queuedTarget.blockedOn = null;
	}
	function attemptReplayContinuousQueuedEvent(queuedEvent) {
	  if (null !== queuedEvent.blockedOn) return false;
	  for (var targetContainers = queuedEvent.targetContainers; 0 < targetContainers.length; ) {
	    var nextBlockedOn = findInstanceBlockingEvent(queuedEvent.nativeEvent);
	    if (null === nextBlockedOn) {
	      nextBlockedOn = queuedEvent.nativeEvent;
	      var nativeEventClone = new nextBlockedOn.constructor(
	        nextBlockedOn.type,
	        nextBlockedOn
	      );
	      currentReplayingEvent = nativeEventClone;
	      nextBlockedOn.target.dispatchEvent(nativeEventClone);
	      currentReplayingEvent = null;
	    } else
	      return targetContainers = getInstanceFromNode(nextBlockedOn), null !== targetContainers && attemptContinuousHydration(targetContainers), queuedEvent.blockedOn = nextBlockedOn, false;
	    targetContainers.shift();
	  }
	  return true;
	}
	function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
	  attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
	}
	function replayUnblockedEvents() {
	  hasScheduledReplayAttempt = false;
	  null !== queuedFocus && attemptReplayContinuousQueuedEvent(queuedFocus) && (queuedFocus = null);
	  null !== queuedDrag && attemptReplayContinuousQueuedEvent(queuedDrag) && (queuedDrag = null);
	  null !== queuedMouse && attemptReplayContinuousQueuedEvent(queuedMouse) && (queuedMouse = null);
	  queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
	  queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
	}
	function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
	  queuedEvent.blockedOn === unblocked && (queuedEvent.blockedOn = null, hasScheduledReplayAttempt || (hasScheduledReplayAttempt = true, Scheduler.unstable_scheduleCallback(
	    Scheduler.unstable_NormalPriority,
	    replayUnblockedEvents
	  )));
	}
	var lastScheduledReplayQueue = null;
	function scheduleReplayQueueIfNeeded(formReplayingQueue) {
	  lastScheduledReplayQueue !== formReplayingQueue && (lastScheduledReplayQueue = formReplayingQueue, Scheduler.unstable_scheduleCallback(
	    Scheduler.unstable_NormalPriority,
	    function() {
	      lastScheduledReplayQueue === formReplayingQueue && (lastScheduledReplayQueue = null);
	      for (var i = 0; i < formReplayingQueue.length; i += 3) {
	        var form = formReplayingQueue[i], submitterOrAction = formReplayingQueue[i + 1], formData = formReplayingQueue[i + 2];
	        if ("function" !== typeof submitterOrAction)
	          if (null === findInstanceBlockingTarget(submitterOrAction || form))
	            continue;
	          else break;
	        var formInst = getInstanceFromNode(form);
	        null !== formInst && (formReplayingQueue.splice(i, 3), i -= 3, startHostTransition(
	          formInst,
	          {
	            pending: true,
	            data: formData,
	            method: form.method,
	            action: submitterOrAction
	          },
	          submitterOrAction,
	          formData
	        ));
	      }
	    }
	  ));
	}
	function retryIfBlockedOn(unblocked) {
	  function unblock(queuedEvent) {
	    return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
	  }
	  null !== queuedFocus && scheduleCallbackIfUnblocked(queuedFocus, unblocked);
	  null !== queuedDrag && scheduleCallbackIfUnblocked(queuedDrag, unblocked);
	  null !== queuedMouse && scheduleCallbackIfUnblocked(queuedMouse, unblocked);
	  queuedPointers.forEach(unblock);
	  queuedPointerCaptures.forEach(unblock);
	  for (var i = 0; i < queuedExplicitHydrationTargets.length; i++) {
	    var queuedTarget = queuedExplicitHydrationTargets[i];
	    queuedTarget.blockedOn === unblocked && (queuedTarget.blockedOn = null);
	  }
	  for (; 0 < queuedExplicitHydrationTargets.length && (i = queuedExplicitHydrationTargets[0], null === i.blockedOn); )
	    attemptExplicitHydrationTarget(i), null === i.blockedOn && queuedExplicitHydrationTargets.shift();
	  i = (unblocked.ownerDocument || unblocked).$$reactFormReplay;
	  if (null != i)
	    for (queuedTarget = 0; queuedTarget < i.length; queuedTarget += 3) {
	      var form = i[queuedTarget], submitterOrAction = i[queuedTarget + 1], formProps = form[internalPropsKey] || null;
	      if ("function" === typeof submitterOrAction)
	        formProps || scheduleReplayQueueIfNeeded(i);
	      else if (formProps) {
	        var action = null;
	        if (submitterOrAction && submitterOrAction.hasAttribute("formAction"))
	          if (form = submitterOrAction, formProps = submitterOrAction[internalPropsKey] || null)
	            action = formProps.formAction;
	          else {
	            if (null !== findInstanceBlockingTarget(form)) continue;
	          }
	        else action = formProps.action;
	        "function" === typeof action ? i[queuedTarget + 1] = action : (i.splice(queuedTarget, 3), queuedTarget -= 3);
	        scheduleReplayQueueIfNeeded(i);
	      }
	    }
	}
	function ReactDOMRoot(internalRoot) {
	  this._internalRoot = internalRoot;
	}
	ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render = function(children) {
	  var root2 = this._internalRoot;
	  if (null === root2) throw Error(formatProdErrorMessage(409));
	  var current = root2.current, lane = requestUpdateLane();
	  updateContainerImpl(current, lane, children, root2, null, null);
	};
	ReactDOMHydrationRoot.prototype.unmount = ReactDOMRoot.prototype.unmount = function() {
	  var root2 = this._internalRoot;
	  if (null !== root2) {
	    this._internalRoot = null;
	    var container = root2.containerInfo;
	    0 === root2.tag && flushPassiveEffects();
	    updateContainerImpl(root2.current, 2, null, root2, null, null);
	    flushSyncWork$1();
	    container[internalContainerInstanceKey] = null;
	  }
	};
	function ReactDOMHydrationRoot(internalRoot) {
	  this._internalRoot = internalRoot;
	}
	ReactDOMHydrationRoot.prototype.unstable_scheduleHydration = function(target) {
	  if (target) {
	    var updatePriority = resolveUpdatePriority();
	    target = { blockedOn: null, target, priority: updatePriority };
	    for (var i = 0; i < queuedExplicitHydrationTargets.length && 0 !== updatePriority && updatePriority < queuedExplicitHydrationTargets[i].priority; i++) ;
	    queuedExplicitHydrationTargets.splice(i, 0, target);
	    0 === i && attemptExplicitHydrationTarget(target);
	  }
	};
	var isomorphicReactPackageVersion$jscomp$inline_1686 = React.version;
	if ("19.0.0" !== isomorphicReactPackageVersion$jscomp$inline_1686)
	  throw Error(
	    formatProdErrorMessage(
	      527,
	      isomorphicReactPackageVersion$jscomp$inline_1686,
	      "19.0.0"
	    )
	  );
	ReactDOMSharedInternals.findDOMNode = function(componentOrElement) {
	  var fiber = componentOrElement._reactInternals;
	  if (void 0 === fiber) {
	    if ("function" === typeof componentOrElement.render)
	      throw Error(formatProdErrorMessage(188));
	    componentOrElement = Object.keys(componentOrElement).join(",");
	    throw Error(formatProdErrorMessage(268, componentOrElement));
	  }
	  componentOrElement = findCurrentFiberUsingSlowPath(fiber);
	  componentOrElement = null !== componentOrElement ? findCurrentHostFiberImpl(componentOrElement) : null;
	  componentOrElement = null === componentOrElement ? null : componentOrElement.stateNode;
	  return componentOrElement;
	};
	var internals$jscomp$inline_2165 = {
	  bundleType: 0,
	  version: "19.0.0",
	  rendererPackageName: "react-dom",
	  currentDispatcherRef: ReactSharedInternals,
	  findFiberByHostInstance: getClosestInstanceFromNode,
	  reconcilerVersion: "19.0.0"
	};
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
	  var hook$jscomp$inline_2166 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	  if (!hook$jscomp$inline_2166.isDisabled && hook$jscomp$inline_2166.supportsFiber)
	    try {
	      rendererID = hook$jscomp$inline_2166.inject(
	        internals$jscomp$inline_2165
	      ), injectedHook = hook$jscomp$inline_2166;
	    } catch (err) {
	    }
	}
	reactDomClient_production.createRoot = function(container, options2) {
	  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
	  var isStrictMode = false, identifierPrefix = "", onUncaughtError = defaultOnUncaughtError, onCaughtError = defaultOnCaughtError, onRecoverableError = defaultOnRecoverableError, transitionCallbacks = null;
	  null !== options2 && void 0 !== options2 && (true === options2.unstable_strictMode && (isStrictMode = true), void 0 !== options2.identifierPrefix && (identifierPrefix = options2.identifierPrefix), void 0 !== options2.onUncaughtError && (onUncaughtError = options2.onUncaughtError), void 0 !== options2.onCaughtError && (onCaughtError = options2.onCaughtError), void 0 !== options2.onRecoverableError && (onRecoverableError = options2.onRecoverableError), void 0 !== options2.unstable_transitionCallbacks && (transitionCallbacks = options2.unstable_transitionCallbacks));
	  options2 = createFiberRoot(
	    container,
	    1,
	    false,
	    null,
	    null,
	    isStrictMode,
	    identifierPrefix,
	    onUncaughtError,
	    onCaughtError,
	    onRecoverableError,
	    transitionCallbacks,
	    null
	  );
	  container[internalContainerInstanceKey] = options2.current;
	  listenToAllSupportedEvents(
	    8 === container.nodeType ? container.parentNode : container
	  );
	  return new ReactDOMRoot(options2);
	};
	reactDomClient_production.hydrateRoot = function(container, initialChildren, options2) {
	  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
	  var isStrictMode = false, identifierPrefix = "", onUncaughtError = defaultOnUncaughtError, onCaughtError = defaultOnCaughtError, onRecoverableError = defaultOnRecoverableError, transitionCallbacks = null, formState = null;
	  null !== options2 && void 0 !== options2 && (true === options2.unstable_strictMode && (isStrictMode = true), void 0 !== options2.identifierPrefix && (identifierPrefix = options2.identifierPrefix), void 0 !== options2.onUncaughtError && (onUncaughtError = options2.onUncaughtError), void 0 !== options2.onCaughtError && (onCaughtError = options2.onCaughtError), void 0 !== options2.onRecoverableError && (onRecoverableError = options2.onRecoverableError), void 0 !== options2.unstable_transitionCallbacks && (transitionCallbacks = options2.unstable_transitionCallbacks), void 0 !== options2.formState && (formState = options2.formState));
	  initialChildren = createFiberRoot(
	    container,
	    1,
	    true,
	    initialChildren,
	    null != options2 ? options2 : null,
	    isStrictMode,
	    identifierPrefix,
	    onUncaughtError,
	    onCaughtError,
	    onRecoverableError,
	    transitionCallbacks,
	    formState
	  );
	  initialChildren.context = getContextForSubtree(null);
	  options2 = initialChildren.current;
	  isStrictMode = requestUpdateLane();
	  identifierPrefix = createUpdate(isStrictMode);
	  identifierPrefix.callback = null;
	  enqueueUpdate(options2, identifierPrefix, isStrictMode);
	  initialChildren.current.lanes = isStrictMode;
	  markRootUpdated$1(initialChildren, isStrictMode);
	  ensureRootIsScheduled(initialChildren);
	  container[internalContainerInstanceKey] = initialChildren.current;
	  listenToAllSupportedEvents(container);
	  return new ReactDOMHydrationRoot(initialChildren);
	};
	reactDomClient_production.version = "19.0.0";
	return reactDomClient_production;
}

var hasRequiredClient;

function requireClient () {
	if (hasRequiredClient) return client.exports;
	hasRequiredClient = 1;
	function checkDCE() {
	  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
	    return;
	  }
	  try {
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    console.error(err);
	  }
	}
	{
	  checkDCE();
	  client.exports = requireReactDomClient_production();
	}
	return client.exports;
}

var clientExports = requireClient();

const PACKET_TYPES = Object.create(null); // no Map = no polyfill
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach((key) => {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = { type: "error", data: "parser error" };

const withNativeBlob$1 = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        Object.prototype.toString.call(Blob) === "[object BlobConstructor]");
const withNativeArrayBuffer$2 = typeof ArrayBuffer === "function";
// ArrayBuffer.isView method is not defined in IE10
const isView$1 = (obj) => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({ type, data }, supportsBinary, callback) => {
    if (withNativeBlob$1 && data instanceof Blob) {
        if (supportsBinary) {
            return callback(data);
        }
        else {
            return encodeBlobAsBase64(data, callback);
        }
    }
    else if (withNativeArrayBuffer$2 &&
        (data instanceof ArrayBuffer || isView$1(data))) {
        if (supportsBinary) {
            return callback(data);
        }
        else {
            return encodeBlobAsBase64(new Blob([data]), callback);
        }
    }
    // plain string
    return callback(PACKET_TYPES[type] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback) => {
    const fileReader = new FileReader();
    fileReader.onload = function () {
        const content = fileReader.result.split(",")[1];
        callback("b" + (content || ""));
    };
    return fileReader.readAsDataURL(data);
};
function toArray(data) {
    if (data instanceof Uint8Array) {
        return data;
    }
    else if (data instanceof ArrayBuffer) {
        return new Uint8Array(data);
    }
    else {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    }
}
let TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
    if (withNativeBlob$1 && packet.data instanceof Blob) {
        return packet.data.arrayBuffer().then(toArray).then(callback);
    }
    else if (withNativeArrayBuffer$2 &&
        (packet.data instanceof ArrayBuffer || isView$1(packet.data))) {
        return callback(toArray(packet.data));
    }
    encodePacket(packet, false, (encoded) => {
        if (!TEXT_ENCODER) {
            TEXT_ENCODER = new TextEncoder();
        }
        callback(TEXT_ENCODER.encode(encoded));
    });
}

// imported from https://github.com/socketio/base64-arraybuffer
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
const lookup$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
    lookup$1[chars.charCodeAt(i)] = i;
}
const decode$1 = (base64) => {
    let bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }
    const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for (i = 0; i < len; i += 4) {
        encoded1 = lookup$1[base64.charCodeAt(i)];
        encoded2 = lookup$1[base64.charCodeAt(i + 1)];
        encoded3 = lookup$1[base64.charCodeAt(i + 2)];
        encoded4 = lookup$1[base64.charCodeAt(i + 3)];
        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }
    return arraybuffer;
};

const withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
const decodePacket = (encodedPacket, binaryType) => {
    if (typeof encodedPacket !== "string") {
        return {
            type: "message",
            data: mapBinary(encodedPacket, binaryType),
        };
    }
    const type = encodedPacket.charAt(0);
    if (type === "b") {
        return {
            type: "message",
            data: decodeBase64Packet(encodedPacket.substring(1), binaryType),
        };
    }
    const packetType = PACKET_TYPES_REVERSE[type];
    if (!packetType) {
        return ERROR_PACKET;
    }
    return encodedPacket.length > 1
        ? {
            type: PACKET_TYPES_REVERSE[type],
            data: encodedPacket.substring(1),
        }
        : {
            type: PACKET_TYPES_REVERSE[type],
        };
};
const decodeBase64Packet = (data, binaryType) => {
    if (withNativeArrayBuffer$1) {
        const decoded = decode$1(data);
        return mapBinary(decoded, binaryType);
    }
    else {
        return { base64: true, data }; // fallback for old browsers
    }
};
const mapBinary = (data, binaryType) => {
    switch (binaryType) {
        case "blob":
            if (data instanceof Blob) {
                // from WebSocket + binaryType "blob"
                return data;
            }
            else {
                // from HTTP long-polling or WebTransport
                return new Blob([data]);
            }
        case "arraybuffer":
        default:
            if (data instanceof ArrayBuffer) {
                // from HTTP long-polling (base64) or WebSocket + binaryType "arraybuffer"
                return data;
            }
            else {
                // from WebTransport (Uint8Array)
                return data.buffer;
            }
    }
};

const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const encodePayload = (packets, callback) => {
    // some packets may be added to the array while encoding, so the initial length must be saved
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i) => {
        // force base64 encoding for binary packets
        encodePacket(packet, false, (encodedPacket) => {
            encodedPackets[i] = encodedPacket;
            if (++count === length) {
                callback(encodedPackets.join(SEPARATOR));
            }
        });
    });
};
const decodePayload = (encodedPayload, binaryType) => {
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for (let i = 0; i < encodedPackets.length; i++) {
        const decodedPacket = decodePacket(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") {
            break;
        }
    }
    return packets;
};
function createPacketEncoderStream() {
    return new TransformStream({
        transform(packet, controller) {
            encodePacketToBinary(packet, (encodedPacket) => {
                const payloadLength = encodedPacket.length;
                let header;
                // inspired by the WebSocket format: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#decoding_payload_length
                if (payloadLength < 126) {
                    header = new Uint8Array(1);
                    new DataView(header.buffer).setUint8(0, payloadLength);
                }
                else if (payloadLength < 65536) {
                    header = new Uint8Array(3);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 126);
                    view.setUint16(1, payloadLength);
                }
                else {
                    header = new Uint8Array(9);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 127);
                    view.setBigUint64(1, BigInt(payloadLength));
                }
                // first bit indicates whether the payload is plain text (0) or binary (1)
                if (packet.data && typeof packet.data !== "string") {
                    header[0] |= 0x80;
                }
                controller.enqueue(header);
                controller.enqueue(encodedPacket);
            });
        },
    });
}
let TEXT_DECODER;
function totalLength(chunks) {
    return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
}
function concatChunks(chunks, size) {
    if (chunks[0].length === size) {
        return chunks.shift();
    }
    const buffer = new Uint8Array(size);
    let j = 0;
    for (let i = 0; i < size; i++) {
        buffer[i] = chunks[0][j++];
        if (j === chunks[0].length) {
            chunks.shift();
            j = 0;
        }
    }
    if (chunks.length && j < chunks[0].length) {
        chunks[0] = chunks[0].slice(j);
    }
    return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
    if (!TEXT_DECODER) {
        TEXT_DECODER = new TextDecoder();
    }
    const chunks = [];
    let state = 0 /* State.READ_HEADER */;
    let expectedLength = -1;
    let isBinary = false;
    return new TransformStream({
        transform(chunk, controller) {
            chunks.push(chunk);
            while (true) {
                if (state === 0 /* State.READ_HEADER */) {
                    if (totalLength(chunks) < 1) {
                        break;
                    }
                    const header = concatChunks(chunks, 1);
                    isBinary = (header[0] & 0x80) === 0x80;
                    expectedLength = header[0] & 0x7f;
                    if (expectedLength < 126) {
                        state = 3 /* State.READ_PAYLOAD */;
                    }
                    else if (expectedLength === 126) {
                        state = 1 /* State.READ_EXTENDED_LENGTH_16 */;
                    }
                    else {
                        state = 2 /* State.READ_EXTENDED_LENGTH_64 */;
                    }
                }
                else if (state === 1 /* State.READ_EXTENDED_LENGTH_16 */) {
                    if (totalLength(chunks) < 2) {
                        break;
                    }
                    const headerArray = concatChunks(chunks, 2);
                    expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
                    state = 3 /* State.READ_PAYLOAD */;
                }
                else if (state === 2 /* State.READ_EXTENDED_LENGTH_64 */) {
                    if (totalLength(chunks) < 8) {
                        break;
                    }
                    const headerArray = concatChunks(chunks, 8);
                    const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
                    const n = view.getUint32(0);
                    if (n > Math.pow(2, 53 - 32) - 1) {
                        // the maximum safe integer in JavaScript is 2^53 - 1
                        controller.enqueue(ERROR_PACKET);
                        break;
                    }
                    expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
                    state = 3 /* State.READ_PAYLOAD */;
                }
                else {
                    if (totalLength(chunks) < expectedLength) {
                        break;
                    }
                    const data = concatChunks(chunks, expectedLength);
                    controller.enqueue(decodePacket(isBinary ? data : TEXT_DECODER.decode(data), binaryType));
                    state = 0 /* State.READ_HEADER */;
                }
                if (expectedLength === 0 || expectedLength > maxPayload) {
                    controller.enqueue(ERROR_PACKET);
                    break;
                }
            }
        },
    });
}
const protocol$1 = 4;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

// alias used for reserved events (protected method)
Emitter.prototype.emitReserved = Emitter.prototype.emit;

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

const nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return (cb) => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
const globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();
const defaultBinaryType = "arraybuffer";
function createCookieJar() {
}

function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
const NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
const NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
  }
}
const BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c = 0, length = 0;
  for (let i = 0, l = str.length; i < l; i++) {
    c = str.charCodeAt(i);
    if (c < 128) {
      length += 1;
    } else if (c < 2048) {
      length += 2;
    } else if (c < 55296 || c >= 57344) {
      length += 3;
    } else {
      i++;
      length += 4;
    }
  }
  return length;
}
function randomString() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}

// imported from https://github.com/galkn/querystring
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
function encode(obj) {
    let str = '';
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            if (str.length)
                str += '&';
            str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
        }
    }
    return str;
}
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */
function decode(qs) {
    let qry = {};
    let pairs = qs.split('&');
    for (let i = 0, l = pairs.length; i < l; i++) {
        let pair = pairs[i].split('=');
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
}

class TransportError extends Error {
    constructor(reason, description, context) {
        super(reason);
        this.description = description;
        this.context = context;
        this.type = "TransportError";
    }
}
class Transport extends Emitter {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */
    constructor(opts) {
        super();
        this.writable = false;
        installTimerFunctions(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.socket = opts.socket;
        this.supportsBinary = !opts.forceBase64;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */
    onError(reason, description, context) {
        super.emitReserved("error", new TransportError(reason, description, context));
        return this;
    }
    /**
     * Opens the transport.
     */
    open() {
        this.readyState = "opening";
        this.doOpen();
        return this;
    }
    /**
     * Closes the transport.
     */
    close() {
        if (this.readyState === "opening" || this.readyState === "open") {
            this.doClose();
            this.onClose();
        }
        return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */
    send(packets) {
        if (this.readyState === "open") {
            this.write(packets);
        }
    }
    /**
     * Called upon open
     *
     * @protected
     */
    onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emitReserved("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */
    onData(data) {
        const packet = decodePacket(data, this.socket.binaryType);
        this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @protected
     */
    onPacket(packet) {
        super.emitReserved("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @protected
     */
    onClose(details) {
        this.readyState = "closed";
        super.emitReserved("close", details);
    }
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */
    pause(onPause) { }
    createUri(schema, query = {}) {
        return (schema +
            "://" +
            this._hostname() +
            this._port() +
            this.opts.path +
            this._query(query));
    }
    _hostname() {
        const hostname = this.opts.hostname;
        return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
    }
    _port() {
        if (this.opts.port &&
            ((this.opts.secure && Number(this.opts.port !== 443)) ||
                (!this.opts.secure && Number(this.opts.port) !== 80))) {
            return ":" + this.opts.port;
        }
        else {
            return "";
        }
    }
    _query(query) {
        const encodedQuery = encode(query);
        return encodedQuery.length ? "?" + encodedQuery : "";
    }
}

class Polling extends Transport {
    constructor() {
        super(...arguments);
        this._polling = false;
    }
    get name() {
        return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */
    doOpen() {
        this._poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */
    pause(onPause) {
        this.readyState = "pausing";
        const pause = () => {
            this.readyState = "paused";
            onPause();
        };
        if (this._polling || !this.writable) {
            let total = 0;
            if (this._polling) {
                total++;
                this.once("pollComplete", function () {
                    --total || pause();
                });
            }
            if (!this.writable) {
                total++;
                this.once("drain", function () {
                    --total || pause();
                });
            }
        }
        else {
            pause();
        }
    }
    /**
     * Starts polling cycle.
     *
     * @private
     */
    _poll() {
        this._polling = true;
        this.doPoll();
        this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */
    onData(data) {
        const callback = (packet) => {
            // if its the first message we consider the transport open
            if ("opening" === this.readyState && packet.type === "open") {
                this.onOpen();
            }
            // if its a close packet, we close the ongoing requests
            if ("close" === packet.type) {
                this.onClose({ description: "transport closed by the server" });
                return false;
            }
            // otherwise bypass onData and handle the message
            this.onPacket(packet);
        };
        // decode payload
        decodePayload(data, this.socket.binaryType).forEach(callback);
        // if an event did not trigger closing
        if ("closed" !== this.readyState) {
            // if we got data we're not polling
            this._polling = false;
            this.emitReserved("pollComplete");
            if ("open" === this.readyState) {
                this._poll();
            }
        }
    }
    /**
     * For polling, send a close packet.
     *
     * @protected
     */
    doClose() {
        const close = () => {
            this.write([{ type: "close" }]);
        };
        if ("open" === this.readyState) {
            close();
        }
        else {
            // in case we're trying to close while
            // handshaking is in progress (GH-164)
            this.once("open", close);
        }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */
    write(packets) {
        this.writable = false;
        encodePayload(packets, (data) => {
            this.doWrite(data, () => {
                this.writable = true;
                this.emitReserved("drain");
            });
        });
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
        const schema = this.opts.secure ? "https" : "http";
        const query = this.query || {};
        // cache busting is forced
        if (false !== this.opts.timestampRequests) {
            query[this.opts.timestampParam] = randomString();
        }
        if (!this.supportsBinary && !query.sid) {
            query.b64 = 1;
        }
        return this.createUri(schema, query);
    }
}

// imported from https://github.com/component/has-cors
let value = false;
try {
    value = typeof XMLHttpRequest !== 'undefined' &&
        'withCredentials' in new XMLHttpRequest();
}
catch (err) {
    // if XMLHttp support is disabled in IE then it will throw
    // when trying to create
}
const hasCORS = value;

function empty() {
}
class BaseXHR extends Polling {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(opts) {
    super(opts);
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
}
class Request extends Emitter {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(createRequest, uri, opts) {
    super();
    this.createRequest = createRequest;
    installTimerFunctions(this, opts);
    this._opts = opts;
    this._method = opts.method || "GET";
    this._uri = uri;
    this._data = void 0 !== opts.data ? opts.data : null;
    this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var _a;
    const opts = pick(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this._opts.xd;
    const xhr = this._xhr = this.createRequest(opts);
    try {
      xhr.open(this._method, this._uri, true);
      try {
        if (this._opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i in this._opts.extraHeaders) {
            if (this._opts.extraHeaders.hasOwnProperty(i)) {
              xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
            }
          }
        }
      } catch (e) {
      }
      if ("POST" === this._method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {
        }
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {
      }
      (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this._opts.withCredentials;
      }
      if (this._opts.requestTimeout) {
        xhr.timeout = this._opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        var _a2;
        if (xhr.readyState === 3) {
          (_a2 = this._opts.cookieJar) === null || _a2 === void 0 ? void 0 : _a2.parseCookies(
            // @ts-ignore
            xhr.getResponseHeader("set-cookie")
          );
        }
        if (4 !== xhr.readyState)
          return;
        if (200 === xhr.status || 1223 === xhr.status) {
          this._onLoad();
        } else {
          this.setTimeoutFn(() => {
            this._onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      xhr.send(this._data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this._onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this._index = Request.requestsCount++;
      Request.requests[this._index] = this;
    }
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(err) {
    this.emitReserved("error", err, this._xhr);
    this._cleanup(true);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(fromError) {
    if ("undefined" === typeof this._xhr || null === this._xhr) {
      return;
    }
    this._xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this._xhr.abort();
      } catch (e) {
      }
    }
    if (typeof document !== "undefined") {
      delete Request.requests[this._index];
    }
    this._xhr = null;
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const data = this._xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this._cleanup();
    }
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
}
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}
const hasXHR2 = function() {
  const xhr = newRequest({
    xdomain: false
  });
  return xhr && xhr.responseType !== null;
}();
class XHR extends BaseXHR {
  constructor(opts) {
    super(opts);
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }
  request(opts = {}) {
    Object.assign(opts, { xd: this.xd }, this.opts);
    return new Request(newRequest, this.uri(), opts);
  }
}
function newRequest(opts) {
  const xdomain = opts.xdomain;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {
  }
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {
    }
  }
}

const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
class BaseWS extends Transport {
  get name() {
    return "websocket";
  }
  doOpen() {
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = this.createSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType;
    this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = (closeEvent) => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = (ev) => this.onData(ev.data);
    this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(packets) {
    this.writable = false;
    for (let i = 0; i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      encodePacket(packet, this.supportsBinary, (data) => {
        try {
          this.doWrite(packet, data);
        } catch (e) {
        }
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.onerror = () => {
      };
      this.ws.close();
      this.ws = null;
    }
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const schema = this.opts.secure ? "wss" : "ws";
    const query = this.query || {};
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = randomString();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
}
const WebSocketCtor = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
class WS extends BaseWS {
  createSocket(uri, protocols, opts) {
    return !isReactNative ? protocols ? new WebSocketCtor(uri, protocols) : new WebSocketCtor(uri) : new WebSocketCtor(uri, protocols, opts);
  }
  doWrite(_packet, data) {
    this.ws.send(data);
  }
}

class WT extends Transport {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((err) => {
      this.onError("webtransport error", err);
    });
    this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((stream) => {
        const decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
        const reader = stream.readable.pipeThrough(decoderStream).getReader();
        const encoderStream = createPacketEncoderStream();
        encoderStream.readable.pipeTo(stream.writable);
        this._writer = encoderStream.writable.getWriter();
        const read = () => {
          reader.read().then(({ done, value }) => {
            if (done) {
              return;
            }
            this.onPacket(value);
            read();
          }).catch((err) => {
          });
        };
        read();
        const packet = { type: "open" };
        if (this.query.sid) {
          packet.data = `{"sid":"${this.query.sid}"}`;
        }
        this._writer.write(packet).then(() => this.onOpen());
      });
    });
  }
  write(packets) {
    this.writable = false;
    for (let i = 0; i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      this._writer.write(packet).then(() => {
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    var _a;
    (_a = this._transport) === null || _a === void 0 ? void 0 : _a.close();
  }
}

const transports = {
    websocket: WS,
    webtransport: WT,
    polling: XHR,
};

// imported from https://github.com/galkn/parseuri
/**
 * Parses a URI
 *
 * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
 *
 * See:
 * - https://developer.mozilla.org/en-US/docs/Web/API/URL
 * - https://caniuse.com/url
 * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
 *
 * History of the parse() method:
 * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
 * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
 * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
const re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];
function parse(str) {
    if (str.length > 8000) {
        throw "URI too long";
    }
    const src = str, b = str.indexOf('['), e = str.indexOf(']');
    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }
    let m = re.exec(str || ''), uri = {}, i = 14;
    while (i--) {
        uri[parts[i]] = m[i] || '';
    }
    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
}
function pathNames(obj, path) {
    const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.slice(0, 1) == '/' || path.length === 0) {
        names.splice(0, 1);
    }
    if (path.slice(-1) == '/') {
        names.splice(names.length - 1, 1);
    }
    return names;
}
function queryKey(uri, query) {
    const data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
        if ($1) {
            data[$1] = $2;
        }
    });
    return data;
}

const withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
const OFFLINE_EVENT_LISTENERS = [];
if (withEventListeners) {
  addEventListener("offline", () => {
    OFFLINE_EVENT_LISTENERS.forEach((listener) => listener());
  }, false);
}
class SocketWithoutUpgrade extends Emitter {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(uri, opts) {
    super();
    this.binaryType = defaultBinaryType;
    this.writeBuffer = [];
    this._prevBufferLen = 0;
    this._pingInterval = -1;
    this._pingTimeout = -1;
    this._maxPayload = -1;
    this._pingTimeoutTime = Infinity;
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      const parsedUri = parse(uri);
      opts.hostname = parsedUri.host;
      opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
      opts.port = parsedUri.port;
      if (parsedUri.query)
        opts.query = parsedUri.query;
    } else if (opts.host) {
      opts.hostname = parse(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = [];
    this._transportsByName = {};
    opts.transports.forEach((t) => {
      const transportName = t.prototype.name;
      this.transports.push(transportName);
      this._transportsByName[transportName] = t;
    });
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      addTrailingSlash: true,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: false
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
    if (typeof this.opts.query === "string") {
      this.opts.query = decode(this.opts.query);
    }
    if (withEventListeners) {
      if (this.opts.closeOnBeforeunload) {
        this._beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this._beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this._offlineEventListener = () => {
          this._onClose("transport close", {
            description: "network connection lost"
          });
        };
        OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
      }
    }
    if (this.opts.withCredentials) {
      this._cookieJar = createCookieJar();
    }
    this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(name) {
    const query = Object.assign({}, this.opts.query);
    query.EIO = protocol$1;
    query.transport = name;
    if (this.id)
      query.sid = this.id;
    const opts = Object.assign({}, this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[name]);
    return new this._transportsByName[name](opts);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const transportName = this.opts.rememberUpgrade && SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const transport = this.createTransport(transportName);
    transport.open();
    this.setTransport(transport);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (reason) => this._onClose("transport close", reason));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open";
    SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this._sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          this._resetPingTimeout();
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this._onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this._pingInterval = data.pingInterval;
    this._pingTimeout = data.pingTimeout;
    this._maxPayload = data.maxPayload;
    this.onOpen();
    if ("closed" === this.readyState)
      return;
    this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const delay = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + delay;
    this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, delay);
    if (this.opts.autoUnref) {
      this._pingTimeoutTimer.unref();
    }
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen);
    this._prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this._getWritablePackets();
      this.transport.send(packets);
      this._prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    const shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i = 0; i < this.writeBuffer.length; i++) {
      const data = this.writeBuffer[i].data;
      if (data) {
        payloadSize += byteLength(data);
      }
      if (i > 0 && payloadSize > this._maxPayload) {
        return this.writeBuffer.slice(0, i);
      }
      payloadSize += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return true;
    const hasExpired = Date.now() > this._pingTimeoutTime;
    if (hasExpired) {
      this._pingTimeoutTime = 0;
      nextTick(() => {
        this._onClose("ping timeout");
      }, this.setTimeoutFn);
    }
    return hasExpired;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(msg, options, fn) {
    this._sendPacket("message", msg, options, fn);
    return this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(msg, options, fn) {
    this._sendPacket("message", msg, options, fn);
    return this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = void 0;
    }
    if ("function" === typeof options) {
      fn = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn)
      this.once("flush", fn);
    this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const close = () => {
      this._onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(err) {
    SocketWithoutUpgrade.priorWebsocketSuccess = false;
    if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
      this.transports.shift();
      return this._open();
    }
    this.emitReserved("error", err);
    this._onClose("transport error", err);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.clearTimeoutFn(this._pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (withEventListeners) {
        if (this._beforeunloadEventListener) {
          removeEventListener("beforeunload", this._beforeunloadEventListener, false);
        }
        if (this._offlineEventListener) {
          const i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
          if (i !== -1) {
            OFFLINE_EVENT_LISTENERS.splice(i, 1);
          }
        }
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this._prevBufferLen = 0;
    }
  }
}
SocketWithoutUpgrade.protocol = protocol$1;
class SocketWithUpgrade extends SocketWithoutUpgrade {
  constructor() {
    super(...arguments);
    this._upgrades = [];
  }
  onOpen() {
    super.onOpen();
    if ("open" === this.readyState && this.opts.upgrade) {
      for (let i = 0; i < this._upgrades.length; i++) {
        this._probe(this._upgrades[i]);
      }
    }
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    SocketWithoutUpgrade.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed)
        return;
      transport.send([{ type: "ping", data: "probe" }]);
      transport.once("packet", (msg) => {
        if (failed)
          return;
        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport)
            return;
          SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed)
              return;
            if ("closed" === this.readyState)
              return;
            cleanup();
            this.setTransport(transport);
            transport.send([{ type: "upgrade" }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed)
        return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = (err) => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    if (this._upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
      this.setTimeoutFn(() => {
        if (!failed) {
          transport.open();
        }
      }, 200);
    } else {
      transport.open();
    }
  }
  onHandshake(data) {
    this._upgrades = this._filterUpgrades(data.upgrades);
    super.onHandshake(data);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    for (let i = 0; i < upgrades.length; i++) {
      if (~this.transports.indexOf(upgrades[i]))
        filteredUpgrades.push(upgrades[i]);
    }
    return filteredUpgrades;
  }
}
let Socket$1 = class Socket extends SocketWithUpgrade {
  constructor(uri, opts = {}) {
    const o = typeof uri === "object" ? uri : opts;
    if (!o.transports || o.transports && typeof o.transports[0] === "string") {
      o.transports = (o.transports || ["polling", "websocket", "webtransport"]).map((transportName) => transports[transportName]).filter((t) => !!t);
    }
    super(uri, o);
  }
};

/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */
function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || (typeof location !== "undefined" && location);
    if (null == uri)
        uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) {
                uri = loc.protocol + uri;
            }
            else {
                uri = loc.host + uri;
            }
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
            if ("undefined" !== typeof loc) {
                uri = loc.protocol + "//" + uri;
            }
            else {
                uri = "https://" + uri;
            }
        }
        // parse
        obj = parse(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) {
            obj.port = "80";
        }
        else if (/^(http|ws)s$/.test(obj.protocol)) {
            obj.port = "443";
        }
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href =
        obj.protocol +
            "://" +
            host +
            (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
}

const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj) => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        toString.call(Blob) === "[object BlobConstructor]");
const withNativeFile = typeof File === "function" ||
    (typeof File !== "undefined" &&
        toString.call(File) === "[object FileConstructor]");
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */
function isBinary(obj) {
    return ((withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj))) ||
        (withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File));
}
function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
        return false;
    }
    if (Array.isArray(obj)) {
        for (let i = 0, l = obj.length; i < l; i++) {
            if (hasBinary(obj[i])) {
                return true;
            }
        }
        return false;
    }
    if (isBinary(obj)) {
        return true;
    }
    if (obj.toJSON &&
        typeof obj.toJSON === "function" &&
        arguments.length === 1) {
        return hasBinary(obj.toJSON(), true);
    }
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
            return true;
        }
    }
    return false;
}

/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */
function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return { packet: pack, buffers: buffers };
}
function _deconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (isBinary(data)) {
        const placeholder = { _placeholder: true, num: buffers.length };
        buffers.push(data);
        return placeholder;
    }
    else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for (let i = 0; i < data.length; i++) {
            newData[i] = _deconstructPacket(data[i], buffers);
        }
        return newData;
    }
    else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                newData[key] = _deconstructPacket(data[key], buffers);
            }
        }
        return newData;
    }
    return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */
function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    delete packet.attachments; // no longer useful
    return packet;
}
function _reconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (data && data._placeholder === true) {
        const isIndexValid = typeof data.num === "number" &&
            data.num >= 0 &&
            data.num < buffers.length;
        if (isIndexValid) {
            return buffers[data.num]; // appropriate buffer (should be natural order anyway)
        }
        else {
            throw new Error("illegal attachments");
        }
    }
    else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            data[i] = _reconstructPacket(data[i], buffers);
        }
    }
    else if (typeof data === "object") {
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                data[key] = _reconstructPacket(data[key], buffers);
            }
        }
    }
    return data;
}

/**
 * These strings must not be used as event names, as they have a special meaning.
 */
const RESERVED_EVENTS$1 = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener", // used by the Node.js EventEmitter
];
/**
 * Protocol version.
 *
 * @public
 */
const protocol = 5;
var PacketType;
(function (PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
/**
 * A socket.io Encoder instance
 */
class Encoder {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */
    constructor(replacer) {
        this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    encode(obj) {
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if (hasBinary(obj)) {
                return this.encodeAsBinary({
                    type: obj.type === PacketType.EVENT
                        ? PacketType.BINARY_EVENT
                        : PacketType.BINARY_ACK,
                    nsp: obj.nsp,
                    data: obj.data,
                    id: obj.id,
                });
            }
        }
        return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */
    encodeAsString(obj) {
        // first is type
        let str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT ||
            obj.type === PacketType.BINARY_ACK) {
            str += obj.attachments + "-";
        }
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) {
            str += obj.nsp + ",";
        }
        // immediately followed by the id
        if (null != obj.id) {
            str += obj.id;
        }
        // json data
        if (null != obj.data) {
            str += JSON.stringify(obj.data, this.replacer);
        }
        return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */
    encodeAsBinary(obj) {
        const deconstruction = deconstructPacket(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
    }
}
// see https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
function isObject$1(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */
class Decoder extends Emitter {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */
    constructor(reviver) {
        super();
        this.reviver = reviver;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    add(obj) {
        let packet;
        if (typeof obj === "string") {
            if (this.reconstructor) {
                throw new Error("got plaintext data when reconstructing a packet");
            }
            packet = this.decodeString(obj);
            const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
            if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
                packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) {
                    super.emitReserved("decoded", packet);
                }
            }
            else {
                // non-binary full packet
                super.emitReserved("decoded", packet);
            }
        }
        else if (isBinary(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) {
                throw new Error("got binary data when not reconstructing a packet");
            }
            else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                    // received final buffer
                    this.reconstructor = null;
                    super.emitReserved("decoded", packet);
                }
            }
        }
        else {
            throw new Error("Unknown type: " + obj);
        }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */
    decodeString(str) {
        let i = 0;
        // look up type
        const p = {
            type: Number(str.charAt(0)),
        };
        if (PacketType[p.type] === undefined) {
            throw new Error("unknown packet type " + p.type);
        }
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT ||
            p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while (str.charAt(++i) !== "-" && i != str.length) { }
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") {
                throw new Error("Illegal attachments");
            }
            p.attachments = Number(buf);
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if ("," === c)
                    break;
                if (i === str.length)
                    break;
            }
            p.nsp = str.substring(start, i);
        }
        else {
            p.nsp = "/";
        }
        // look up id
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                if (i === str.length)
                    break;
            }
            p.id = Number(str.substring(start, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
            const payload = this.tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) {
                p.data = payload;
            }
            else {
                throw new Error("invalid payload");
            }
        }
        return p;
    }
    tryParse(str) {
        try {
            return JSON.parse(str, this.reviver);
        }
        catch (e) {
            return false;
        }
    }
    static isPayloadValid(type, payload) {
        switch (type) {
            case PacketType.CONNECT:
                return isObject$1(payload);
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || isObject$1(payload);
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return (Array.isArray(payload) &&
                    (typeof payload[0] === "number" ||
                        (typeof payload[0] === "string" &&
                            RESERVED_EVENTS$1.indexOf(payload[0]) === -1)));
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload);
        }
    }
    /**
     * Deallocates a parser's resources
     */
    destroy() {
        if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
            this.reconstructor = null;
        }
    }
}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */
class BinaryReconstructor {
    constructor(packet) {
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet = reconstructPacket(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */
    finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
}

const parser = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Decoder,
	Encoder,
	get PacketType () { return PacketType; },
	protocol
}, Symbol.toStringTag, { value: 'Module' }));

function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}

/**
 * Internal events.
 * These events can't be emitted by the user.
 */
const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1,
});
/**
 * A Socket is the fundamental class for interacting with the server.
 *
 * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
 *
 * @example
 * const socket = io();
 *
 * socket.on("connect", () => {
 *   console.log("connected");
 * });
 *
 * // send an event to the server
 * socket.emit("foo", "bar");
 *
 * socket.on("foobar", () => {
 *   // an event was received from the server
 * });
 *
 * // upon disconnection
 * socket.on("disconnect", (reason) => {
 *   console.log(`disconnected due to ${reason}`);
 * });
 */
class Socket extends Emitter {
    /**
     * `Socket` constructor.
     */
    constructor(io, nsp, opts) {
        super();
        /**
         * Whether the socket is currently connected to the server.
         *
         * @example
         * const socket = io();
         *
         * socket.on("connect", () => {
         *   console.log(socket.connected); // true
         * });
         *
         * socket.on("disconnect", () => {
         *   console.log(socket.connected); // false
         * });
         */
        this.connected = false;
        /**
         * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
         * be transmitted by the server.
         */
        this.recovered = false;
        /**
         * Buffer for packets received before the CONNECT packet
         */
        this.receiveBuffer = [];
        /**
         * Buffer for packets that will be sent once the socket is connected
         */
        this.sendBuffer = [];
        /**
         * The queue of packets to be sent with retry in case of failure.
         *
         * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
         * @private
         */
        this._queue = [];
        /**
         * A sequence to generate the ID of the {@link QueuedPacket}.
         * @private
         */
        this._queueSeq = 0;
        this.ids = 0;
        /**
         * A map containing acknowledgement handlers.
         *
         * The `withError` attribute is used to differentiate handlers that accept an error as first argument:
         *
         * - `socket.emit("test", (err, value) => { ... })` with `ackTimeout` option
         * - `socket.timeout(5000).emit("test", (err, value) => { ... })`
         * - `const value = await socket.emitWithAck("test")`
         *
         * From those that don't:
         *
         * - `socket.emit("test", (value) => { ... });`
         *
         * In the first case, the handlers will be called with an error when:
         *
         * - the timeout is reached
         * - the socket gets disconnected
         *
         * In the second case, the handlers will be simply discarded upon disconnection, since the client will never receive
         * an acknowledgement from the server.
         *
         * @private
         */
        this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) {
            this.auth = opts.auth;
        }
        this._opts = Object.assign({}, opts);
        if (this.io._autoConnect)
            this.open();
    }
    /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */
    get disconnected() {
        return !this.connected;
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
    subEvents() {
        if (this.subs)
            return;
        const io = this.io;
        this.subs = [
            on(io, "open", this.onopen.bind(this)),
            on(io, "packet", this.onpacket.bind(this)),
            on(io, "error", this.onerror.bind(this)),
            on(io, "close", this.onclose.bind(this)),
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     console.log(socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   console.log(socket.active); // true
     * });
     */
    get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */
    connect() {
        if (this.connected)
            return this;
        this.subEvents();
        if (!this.io["_reconnecting"])
            this.io.open(); // ensure open
        if ("open" === this.io._readyState)
            this.onopen();
        return this;
    }
    /**
     * Alias for {@link connect()}.
     */
    open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */
    send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */
    emit(ev, ...args) {
        var _a, _b, _c;
        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
            throw new Error('"' + ev.toString() + '" is a reserved event name');
        }
        args.unshift(ev);
        if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
            this._addToQueue(args);
            return this;
        }
        const packet = {
            type: PacketType.EVENT,
            data: args,
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
            const id = this.ids++;
            const ack = args.pop();
            this._registerAckCallback(id, ack);
            packet.id = id;
        }
        const isTransportWritable = (_b = (_a = this.io.engine) === null || _a === void 0 ? void 0 : _a.transport) === null || _b === void 0 ? void 0 : _b.writable;
        const isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
        const discardPacket = this.flags.volatile && !isTransportWritable;
        if (discardPacket) ;
        else if (isConnected) {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        }
        else {
            this.sendBuffer.push(packet);
        }
        this.flags = {};
        return this;
    }
    /**
     * @private
     */
    _registerAckCallback(id, ack) {
        var _a;
        const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
        if (timeout === undefined) {
            this.acks[id] = ack;
            return;
        }
        // @ts-ignore
        const timer = this.io.setTimeoutFn(() => {
            delete this.acks[id];
            for (let i = 0; i < this.sendBuffer.length; i++) {
                if (this.sendBuffer[i].id === id) {
                    this.sendBuffer.splice(i, 1);
                }
            }
            ack.call(this, new Error("operation has timed out"));
        }, timeout);
        const fn = (...args) => {
            // @ts-ignore
            this.io.clearTimeoutFn(timer);
            ack.apply(this, args);
        };
        fn.withError = true;
        this.acks[id] = fn;
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * // without timeout
     * const response = await socket.emitWithAck("hello", "world");
     *
     * // with a specific timeout
     * try {
     *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
     * } catch (err) {
     *   // the server did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when the server acknowledges the event
     */
    emitWithAck(ev, ...args) {
        return new Promise((resolve, reject) => {
            const fn = (arg1, arg2) => {
                return arg1 ? reject(arg1) : resolve(arg2);
            };
            fn.withError = true;
            args.push(fn);
            this.emit(ev, ...args);
        });
    }
    /**
     * Add the packet to the queue.
     * @param args
     * @private
     */
    _addToQueue(args) {
        let ack;
        if (typeof args[args.length - 1] === "function") {
            ack = args.pop();
        }
        const packet = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: false,
            args,
            flags: Object.assign({ fromQueue: true }, this.flags),
        };
        args.push((err, ...responseArgs) => {
            if (packet !== this._queue[0]) {
                // the packet has already been acknowledged
                return;
            }
            const hasError = err !== null;
            if (hasError) {
                if (packet.tryCount > this._opts.retries) {
                    this._queue.shift();
                    if (ack) {
                        ack(err);
                    }
                }
            }
            else {
                this._queue.shift();
                if (ack) {
                    ack(null, ...responseArgs);
                }
            }
            packet.pending = false;
            return this._drainQueue();
        });
        this._queue.push(packet);
        this._drainQueue();
    }
    /**
     * Send the first packet of the queue, and wait for an acknowledgement from the server.
     * @param force - whether to resend a packet that has not been acknowledged yet
     *
     * @private
     */
    _drainQueue(force = false) {
        if (!this.connected || this._queue.length === 0) {
            return;
        }
        const packet = this._queue[0];
        if (packet.pending && !force) {
            return;
        }
        packet.pending = true;
        packet.tryCount++;
        this.flags = packet.flags;
        this.emit.apply(this, packet.args);
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */
    packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */
    onopen() {
        if (typeof this.auth == "function") {
            this.auth((data) => {
                this._sendConnectPacket(data);
            });
        }
        else {
            this._sendConnectPacket(this.auth);
        }
    }
    /**
     * Sends a CONNECT packet to initiate the Socket.IO session.
     *
     * @param data
     * @private
     */
    _sendConnectPacket(data) {
        this.packet({
            type: PacketType.CONNECT,
            data: this._pid
                ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data)
                : data,
        });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */
    onerror(err) {
        if (!this.connected) {
            this.emitReserved("connect_error", err);
        }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */
    onclose(reason, description) {
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", reason, description);
        this._clearAcks();
    }
    /**
     * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
     * the server.
     *
     * @private
     */
    _clearAcks() {
        Object.keys(this.acks).forEach((id) => {
            const isBuffered = this.sendBuffer.some((packet) => String(packet.id) === id);
            if (!isBuffered) {
                // note: handlers that do not accept an error as first argument are ignored here
                const ack = this.acks[id];
                delete this.acks[id];
                if (ack.withError) {
                    ack.call(this, new Error("socket has been disconnected"));
                }
            }
        });
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */
    onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace)
            return;
        switch (packet.type) {
            case PacketType.CONNECT:
                if (packet.data && packet.data.sid) {
                    this.onconnect(packet.data.sid, packet.data.pid);
                }
                else {
                    this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                }
                break;
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                this.onevent(packet);
                break;
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                this.onack(packet);
                break;
            case PacketType.DISCONNECT:
                this.ondisconnect();
                break;
            case PacketType.CONNECT_ERROR:
                this.destroy();
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
        }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */
    onevent(packet) {
        const args = packet.data || [];
        if (null != packet.id) {
            args.push(this.ack(packet.id));
        }
        if (this.connected) {
            this.emitEvent(args);
        }
        else {
            this.receiveBuffer.push(Object.freeze(args));
        }
    }
    emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, args);
            }
        }
        super.emit.apply(this, args);
        if (this._pid && args.length && typeof args[args.length - 1] === "string") {
            this._lastOffset = args[args.length - 1];
        }
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */
    ack(id) {
        const self = this;
        let sent = false;
        return function (...args) {
            // prevent double callbacks
            if (sent)
                return;
            sent = true;
            self.packet({
                type: PacketType.ACK,
                id: id,
                data: args,
            });
        };
    }
    /**
     * Called upon a server acknowledgement.
     *
     * @param packet
     * @private
     */
    onack(packet) {
        const ack = this.acks[packet.id];
        if (typeof ack !== "function") {
            return;
        }
        delete this.acks[packet.id];
        // @ts-ignore FIXME ack is incorrectly inferred as 'never'
        if (ack.withError) {
            packet.data.unshift(null);
        }
        // @ts-ignore
        ack.apply(this, packet.data);
    }
    /**
     * Called upon server connect.
     *
     * @private
     */
    onconnect(id, pid) {
        this.id = id;
        this.recovered = pid && this._pid === pid;
        this._pid = pid; // defined only if connection state recovery is enabled
        this.connected = true;
        this.emitBuffered();
        this.emitReserved("connect");
        this._drainQueue(true);
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */
    emitBuffered() {
        this.receiveBuffer.forEach((args) => this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet) => {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        });
        this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */
    ondisconnect() {
        this.destroy();
        this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */
    destroy() {
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach((subDestroy) => subDestroy());
            this.subs = undefined;
        }
        this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // console.log(reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */
    disconnect() {
        if (this.connected) {
            this.packet({ type: PacketType.DISCONNECT });
        }
        // remove socket from pool
        this.destroy();
        if (this.connected) {
            // fire events
            this.onclose("io client disconnect");
        }
        return this;
    }
    /**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */
    close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */
    compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */
    get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */
    timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   console.log(`got ${event}`);
     * });
     *
     * @param listener
     */
    onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   console.log(`got event ${event}`);
     * });
     *
     * @param listener
     */
    prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */
    offAny(listener) {
        if (!this._anyListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAny() {
        return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */
    offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyOutgoingListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyOutgoingListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */
    notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const listeners = this._anyOutgoingListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, packet.data);
            }
        }
    }
}

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */
function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */
Backoff.prototype.duration = function () {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */
Backoff.prototype.reset = function () {
    this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */
Backoff.prototype.setMin = function (min) {
    this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */
Backoff.prototype.setMax = function (max) {
    this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */
Backoff.prototype.setJitter = function (jitter) {
    this.jitter = jitter;
};

class Manager extends Emitter {
    constructor(uri, opts) {
        var _a;
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        installTimerFunctions(this, opts);
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new Backoff({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor(),
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || parser;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect)
            this.open();
    }
    reconnection(v) {
        if (!arguments.length)
            return this._reconnection;
        this._reconnection = !!v;
        if (!v) {
            this.skipReconnect = true;
        }
        return this;
    }
    reconnectionAttempts(v) {
        if (v === undefined)
            return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    }
    reconnectionDelay(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
        return this;
    }
    randomizationFactor(v) {
        var _a;
        if (v === undefined)
            return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
        return this;
    }
    reconnectionDelayMax(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
        return this;
    }
    timeout(v) {
        if (!arguments.length)
            return this._timeout;
        this._timeout = v;
        return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */
    maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting &&
            this._reconnection &&
            this.backoff.attempts === 0) {
            // keeps reconnection from firing twice for the same reconnection loop
            this.reconnect();
        }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */
    open(fn) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new Socket$1(this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        const openSubDestroy = on(socket, "open", function () {
            self.onopen();
            fn && fn();
        });
        const onError = (err) => {
            this.cleanup();
            this._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) {
                fn(err);
            }
            else {
                // Only do this if there is no fn to handle the error
                this.maybeReconnectOnOpen();
            }
        };
        // emit `error`
        const errorSub = on(socket, "error", onError);
        if (false !== this._timeout) {
            const timeout = this._timeout;
            // set timer
            const timer = this.setTimeoutFn(() => {
                openSubDestroy();
                onError(new Error("timeout"));
                socket.close();
            }, timeout);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(() => {
                this.clearTimeoutFn(timer);
            });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */
    connect(fn) {
        return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */
    onopen() {
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        const socket = this.engine;
        this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), 
        // @ts-ignore
        on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */
    onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */
    ondata(data) {
        try {
            this.decoder.add(data);
        }
        catch (e) {
            this.onclose("parse error", e);
        }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    ondecoded(packet) {
        // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
        nextTick(() => {
            this.emitReserved("packet", packet);
        }, this.setTimeoutFn);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */
    onerror(err) {
        this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */
    socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
            socket = new Socket(this, nsp, opts);
            this.nsps[nsp] = socket;
        }
        else if (this._autoConnect && !socket.active) {
            socket.connect();
        }
        return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */
    _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps) {
            const socket = this.nsps[nsp];
            if (socket.active) {
                return;
            }
        }
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */
    _packet(packet) {
        const encodedPackets = this.encoder.encode(packet);
        for (let i = 0; i < encodedPackets.length; i++) {
            this.engine.write(encodedPackets[i], packet.options);
        }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */
    cleanup() {
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */
    _close() {
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
    }
    /**
     * Alias for close()
     *
     * @private
     */
    disconnect() {
        return this._close();
    }
    /**
     * Called when:
     *
     * - the low-level engine is closed
     * - the parser encountered a badly formatted packet
     * - all sockets are disconnected
     *
     * @private
     */
    onclose(reason, description) {
        var _a;
        this.cleanup();
        (_a = this.engine) === null || _a === void 0 ? void 0 : _a.close();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason, description);
        if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
        }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        }
        else {
            const delay = this.backoff.duration();
            this._reconnecting = true;
            const timer = this.setTimeoutFn(() => {
                if (self.skipReconnect)
                    return;
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect)
                    return;
                self.open((err) => {
                    if (err) {
                        self._reconnecting = false;
                        self.reconnect();
                        this.emitReserved("reconnect_error", err);
                    }
                    else {
                        self.onreconnect();
                    }
                });
            }, delay);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(() => {
                this.clearTimeoutFn(timer);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */
    onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
    }
}

/**
 * Managers cache.
 */
const cache = {};
function lookup(uri, opts) {
    if (typeof uri === "object") {
        opts = uri;
        uri = undefined;
    }
    opts = opts || {};
    const parsed = url(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew ||
        opts["force new connection"] ||
        false === opts.multiplex ||
        sameNamespace;
    let io;
    if (newConnection) {
        io = new Manager(source, opts);
    }
    else {
        if (!cache[id]) {
            cache[id] = new Manager(source, opts);
        }
        io = cache[id];
    }
    if (parsed.query && !opts.query) {
        opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
}
// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility
Object.assign(lookup, {
    Manager,
    Socket,
    io: lookup,
    connect: lookup,
});

class $e8379818650e2442$export$93654d4f2d6cd524 {
    constructor(){
        this.encoder = new TextEncoder();
        this._pieces = [];
        this._parts = [];
    }
    append_buffer(data) {
        this.flush();
        this._parts.push(data);
    }
    append(data) {
        this._pieces.push(data);
    }
    flush() {
        if (this._pieces.length > 0) {
            const buf = new Uint8Array(this._pieces);
            this._parts.push(buf);
            this._pieces = [];
        }
    }
    toArrayBuffer() {
        const buffer = [];
        for (const part of this._parts)buffer.push(part);
        return $e8379818650e2442$var$concatArrayBuffers(buffer).buffer;
    }
}
function $e8379818650e2442$var$concatArrayBuffers(bufs) {
    let size = 0;
    for (const buf of bufs)size += buf.byteLength;
    const result = new Uint8Array(size);
    let offset = 0;
    for (const buf of bufs){
        const view = new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
        result.set(view, offset);
        offset += buf.byteLength;
    }
    return result;
}


function $0cfd7828ad59115f$export$417857010dc9287f(data) {
    const unpacker = new $0cfd7828ad59115f$var$Unpacker(data);
    return unpacker.unpack();
}
function $0cfd7828ad59115f$export$2a703dbb0cb35339(data) {
    const packer = new $0cfd7828ad59115f$export$b9ec4b114aa40074();
    const res = packer.pack(data);
    if (res instanceof Promise) return res.then(()=>packer.getBuffer());
    return packer.getBuffer();
}
class $0cfd7828ad59115f$var$Unpacker {
    constructor(data){
        this.index = 0;
        this.dataBuffer = data;
        this.dataView = new Uint8Array(this.dataBuffer);
        this.length = this.dataBuffer.byteLength;
    }
    unpack() {
        const type = this.unpack_uint8();
        if (type < 0x80) return type;
        else if ((type ^ 0xe0) < 0x20) return (type ^ 0xe0) - 0x20;
        let size;
        if ((size = type ^ 0xa0) <= 0x0f) return this.unpack_raw(size);
        else if ((size = type ^ 0xb0) <= 0x0f) return this.unpack_string(size);
        else if ((size = type ^ 0x90) <= 0x0f) return this.unpack_array(size);
        else if ((size = type ^ 0x80) <= 0x0f) return this.unpack_map(size);
        switch(type){
            case 0xc0:
                return null;
            case 0xc1:
                return undefined;
            case 0xc2:
                return false;
            case 0xc3:
                return true;
            case 0xca:
                return this.unpack_float();
            case 0xcb:
                return this.unpack_double();
            case 0xcc:
                return this.unpack_uint8();
            case 0xcd:
                return this.unpack_uint16();
            case 0xce:
                return this.unpack_uint32();
            case 0xcf:
                return this.unpack_uint64();
            case 0xd0:
                return this.unpack_int8();
            case 0xd1:
                return this.unpack_int16();
            case 0xd2:
                return this.unpack_int32();
            case 0xd3:
                return this.unpack_int64();
            case 0xd4:
                return undefined;
            case 0xd5:
                return undefined;
            case 0xd6:
                return undefined;
            case 0xd7:
                return undefined;
            case 0xd8:
                size = this.unpack_uint16();
                return this.unpack_string(size);
            case 0xd9:
                size = this.unpack_uint32();
                return this.unpack_string(size);
            case 0xda:
                size = this.unpack_uint16();
                return this.unpack_raw(size);
            case 0xdb:
                size = this.unpack_uint32();
                return this.unpack_raw(size);
            case 0xdc:
                size = this.unpack_uint16();
                return this.unpack_array(size);
            case 0xdd:
                size = this.unpack_uint32();
                return this.unpack_array(size);
            case 0xde:
                size = this.unpack_uint16();
                return this.unpack_map(size);
            case 0xdf:
                size = this.unpack_uint32();
                return this.unpack_map(size);
        }
    }
    unpack_uint8() {
        const byte = this.dataView[this.index] & 0xff;
        this.index++;
        return byte;
    }
    unpack_uint16() {
        const bytes = this.read(2);
        const uint16 = (bytes[0] & 0xff) * 256 + (bytes[1] & 0xff);
        this.index += 2;
        return uint16;
    }
    unpack_uint32() {
        const bytes = this.read(4);
        const uint32 = ((bytes[0] * 256 + bytes[1]) * 256 + bytes[2]) * 256 + bytes[3];
        this.index += 4;
        return uint32;
    }
    unpack_uint64() {
        const bytes = this.read(8);
        const uint64 = ((((((bytes[0] * 256 + bytes[1]) * 256 + bytes[2]) * 256 + bytes[3]) * 256 + bytes[4]) * 256 + bytes[5]) * 256 + bytes[6]) * 256 + bytes[7];
        this.index += 8;
        return uint64;
    }
    unpack_int8() {
        const uint8 = this.unpack_uint8();
        return uint8 < 0x80 ? uint8 : uint8 - 256;
    }
    unpack_int16() {
        const uint16 = this.unpack_uint16();
        return uint16 < 0x8000 ? uint16 : uint16 - 65536;
    }
    unpack_int32() {
        const uint32 = this.unpack_uint32();
        return uint32 < 2 ** 31 ? uint32 : uint32 - 2 ** 32;
    }
    unpack_int64() {
        const uint64 = this.unpack_uint64();
        return uint64 < 2 ** 63 ? uint64 : uint64 - 2 ** 64;
    }
    unpack_raw(size) {
        if (this.length < this.index + size) throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${size} ${this.length}`);
        const buf = this.dataBuffer.slice(this.index, this.index + size);
        this.index += size;
        return buf;
    }
    unpack_string(size) {
        const bytes = this.read(size);
        let i = 0;
        let str = "";
        let c;
        let code;
        while(i < size){
            c = bytes[i];
            // The length of a UTF-8 sequence is specified in the first byte:
            // 0xxxxxxx means length 1,
            // 110xxxxx means length 2,
            // 1110xxxx means length 3,
            // 11110xxx means length 4.
            // 10xxxxxx is for non-initial bytes.
            if (c < 0xa0) {
                // One-byte sequence: bits 0xxxxxxx
                code = c;
                i++;
            } else if ((c ^ 0xc0) < 0x20) {
                // Two-byte sequence: bits 110xxxxx 10xxxxxx
                code = (c & 0x1f) << 6 | bytes[i + 1] & 0x3f;
                i += 2;
            } else if ((c ^ 0xe0) < 0x10) {
                // Three-byte sequence: bits 1110xxxx 10xxxxxx 10xxxxxx
                code = (c & 0x0f) << 12 | (bytes[i + 1] & 0x3f) << 6 | bytes[i + 2] & 0x3f;
                i += 3;
            } else {
                // Four-byte sequence: bits 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
                code = (c & 0x07) << 18 | (bytes[i + 1] & 0x3f) << 12 | (bytes[i + 2] & 0x3f) << 6 | bytes[i + 3] & 0x3f;
                i += 4;
            }
            str += String.fromCodePoint(code);
        }
        this.index += size;
        return str;
    }
    unpack_array(size) {
        const objects = new Array(size);
        for(let i = 0; i < size; i++)objects[i] = this.unpack();
        return objects;
    }
    unpack_map(size) {
        const map = {};
        for(let i = 0; i < size; i++){
            const key = this.unpack();
            map[key] = this.unpack();
        }
        return map;
    }
    unpack_float() {
        const uint32 = this.unpack_uint32();
        const sign = uint32 >> 31;
        const exp = (uint32 >> 23 & 0xff) - 127;
        const fraction = uint32 & 0x7fffff | 0x800000;
        return (sign === 0 ? 1 : -1) * fraction * 2 ** (exp - 23);
    }
    unpack_double() {
        const h32 = this.unpack_uint32();
        const l32 = this.unpack_uint32();
        const sign = h32 >> 31;
        const exp = (h32 >> 20 & 0x7ff) - 1023;
        const hfrac = h32 & 0xfffff | 0x100000;
        const frac = hfrac * 2 ** (exp - 20) + l32 * 2 ** (exp - 52);
        return (sign === 0 ? 1 : -1) * frac;
    }
    read(length) {
        const j = this.index;
        if (j + length <= this.length) return this.dataView.subarray(j, j + length);
        else throw new Error("BinaryPackFailure: read index out of range");
    }
}
class $0cfd7828ad59115f$export$b9ec4b114aa40074 {
    getBuffer() {
        return this._bufferBuilder.toArrayBuffer();
    }
    pack(value) {
        if (typeof value === "string") this.pack_string(value);
        else if (typeof value === "number") {
            if (Math.floor(value) === value) this.pack_integer(value);
            else this.pack_double(value);
        } else if (typeof value === "boolean") {
            if (value === true) this._bufferBuilder.append(0xc3);
            else if (value === false) this._bufferBuilder.append(0xc2);
        } else if (value === undefined) this._bufferBuilder.append(0xc0);
        else if (typeof value === "object") {
            if (value === null) this._bufferBuilder.append(0xc0);
            else {
                const constructor = value.constructor;
                if (value instanceof Array) {
                    const res = this.pack_array(value);
                    if (res instanceof Promise) return res.then(()=>this._bufferBuilder.flush());
                } else if (value instanceof ArrayBuffer) this.pack_bin(new Uint8Array(value));
                else if ("BYTES_PER_ELEMENT" in value) {
                    const v = value;
                    this.pack_bin(new Uint8Array(v.buffer, v.byteOffset, v.byteLength));
                } else if (value instanceof Date) this.pack_string(value.toString());
                else if (value instanceof Blob) return value.arrayBuffer().then((buffer)=>{
                    this.pack_bin(new Uint8Array(buffer));
                    this._bufferBuilder.flush();
                });
                else if (constructor == Object || constructor.toString().startsWith("class")) {
                    const res = this.pack_object(value);
                    if (res instanceof Promise) return res.then(()=>this._bufferBuilder.flush());
                } else throw new Error(`Type "${constructor.toString()}" not yet supported`);
            }
        } else throw new Error(`Type "${typeof value}" not yet supported`);
        this._bufferBuilder.flush();
    }
    pack_bin(blob) {
        const length = blob.length;
        if (length <= 0x0f) this.pack_uint8(0xa0 + length);
        else if (length <= 0xffff) {
            this._bufferBuilder.append(0xda);
            this.pack_uint16(length);
        } else if (length <= 0xffffffff) {
            this._bufferBuilder.append(0xdb);
            this.pack_uint32(length);
        } else throw new Error("Invalid length");
        this._bufferBuilder.append_buffer(blob);
    }
    pack_string(str) {
        const encoded = this._textEncoder.encode(str);
        const length = encoded.length;
        if (length <= 0x0f) this.pack_uint8(0xb0 + length);
        else if (length <= 0xffff) {
            this._bufferBuilder.append(0xd8);
            this.pack_uint16(length);
        } else if (length <= 0xffffffff) {
            this._bufferBuilder.append(0xd9);
            this.pack_uint32(length);
        } else throw new Error("Invalid length");
        this._bufferBuilder.append_buffer(encoded);
    }
    pack_array(ary) {
        const length = ary.length;
        if (length <= 0x0f) this.pack_uint8(0x90 + length);
        else if (length <= 0xffff) {
            this._bufferBuilder.append(0xdc);
            this.pack_uint16(length);
        } else if (length <= 0xffffffff) {
            this._bufferBuilder.append(0xdd);
            this.pack_uint32(length);
        } else throw new Error("Invalid length");
        const packNext = (index)=>{
            if (index < length) {
                const res = this.pack(ary[index]);
                if (res instanceof Promise) return res.then(()=>packNext(index + 1));
                return packNext(index + 1);
            }
        };
        return packNext(0);
    }
    pack_integer(num) {
        if (num >= -32 && num <= 0x7f) this._bufferBuilder.append(num & 0xff);
        else if (num >= 0x00 && num <= 0xff) {
            this._bufferBuilder.append(0xcc);
            this.pack_uint8(num);
        } else if (num >= -128 && num <= 0x7f) {
            this._bufferBuilder.append(0xd0);
            this.pack_int8(num);
        } else if (num >= 0x0000 && num <= 0xffff) {
            this._bufferBuilder.append(0xcd);
            this.pack_uint16(num);
        } else if (num >= -32768 && num <= 0x7fff) {
            this._bufferBuilder.append(0xd1);
            this.pack_int16(num);
        } else if (num >= 0x00000000 && num <= 0xffffffff) {
            this._bufferBuilder.append(0xce);
            this.pack_uint32(num);
        } else if (num >= -2147483648 && num <= 0x7fffffff) {
            this._bufferBuilder.append(0xd2);
            this.pack_int32(num);
        } else if (num >= -9223372036854776e3 && num <= 0x7fffffffffffffff) {
            this._bufferBuilder.append(0xd3);
            this.pack_int64(num);
        } else if (num >= 0x0000000000000000 && num <= 0xffffffffffffffff) {
            this._bufferBuilder.append(0xcf);
            this.pack_uint64(num);
        } else throw new Error("Invalid integer");
    }
    pack_double(num) {
        let sign = 0;
        if (num < 0) {
            sign = 1;
            num = -num;
        }
        const exp = Math.floor(Math.log(num) / Math.LN2);
        const frac0 = num / 2 ** exp - 1;
        const frac1 = Math.floor(frac0 * 2 ** 52);
        const b32 = 2 ** 32;
        const h32 = sign << 31 | exp + 1023 << 20 | frac1 / b32 & 0x0fffff;
        const l32 = frac1 % b32;
        this._bufferBuilder.append(0xcb);
        this.pack_int32(h32);
        this.pack_int32(l32);
    }
    pack_object(obj) {
        const keys = Object.keys(obj);
        const length = keys.length;
        if (length <= 0x0f) this.pack_uint8(0x80 + length);
        else if (length <= 0xffff) {
            this._bufferBuilder.append(0xde);
            this.pack_uint16(length);
        } else if (length <= 0xffffffff) {
            this._bufferBuilder.append(0xdf);
            this.pack_uint32(length);
        } else throw new Error("Invalid length");
        const packNext = (index)=>{
            if (index < keys.length) {
                const prop = keys[index];
                // eslint-disable-next-line no-prototype-builtins
                if (obj.hasOwnProperty(prop)) {
                    this.pack(prop);
                    const res = this.pack(obj[prop]);
                    if (res instanceof Promise) return res.then(()=>packNext(index + 1));
                }
                return packNext(index + 1);
            }
        };
        return packNext(0);
    }
    pack_uint8(num) {
        this._bufferBuilder.append(num);
    }
    pack_uint16(num) {
        this._bufferBuilder.append(num >> 8);
        this._bufferBuilder.append(num & 0xff);
    }
    pack_uint32(num) {
        const n = num & 0xffffffff;
        this._bufferBuilder.append((n & 0xff000000) >>> 24);
        this._bufferBuilder.append((n & 0x00ff0000) >>> 16);
        this._bufferBuilder.append((n & 0x0000ff00) >>> 8);
        this._bufferBuilder.append(n & 0x000000ff);
    }
    pack_uint64(num) {
        const high = num / 2 ** 32;
        const low = num % 2 ** 32;
        this._bufferBuilder.append((high & 0xff000000) >>> 24);
        this._bufferBuilder.append((high & 0x00ff0000) >>> 16);
        this._bufferBuilder.append((high & 0x0000ff00) >>> 8);
        this._bufferBuilder.append(high & 0x000000ff);
        this._bufferBuilder.append((low & 0xff000000) >>> 24);
        this._bufferBuilder.append((low & 0x00ff0000) >>> 16);
        this._bufferBuilder.append((low & 0x0000ff00) >>> 8);
        this._bufferBuilder.append(low & 0x000000ff);
    }
    pack_int8(num) {
        this._bufferBuilder.append(num & 0xff);
    }
    pack_int16(num) {
        this._bufferBuilder.append((num & 0xff00) >> 8);
        this._bufferBuilder.append(num & 0xff);
    }
    pack_int32(num) {
        this._bufferBuilder.append(num >>> 24 & 0xff);
        this._bufferBuilder.append((num & 0x00ff0000) >>> 16);
        this._bufferBuilder.append((num & 0x0000ff00) >>> 8);
        this._bufferBuilder.append(num & 0x000000ff);
    }
    pack_int64(num) {
        const high = Math.floor(num / 2 ** 32);
        const low = num % 2 ** 32;
        this._bufferBuilder.append((high & 0xff000000) >>> 24);
        this._bufferBuilder.append((high & 0x00ff0000) >>> 16);
        this._bufferBuilder.append((high & 0x0000ff00) >>> 8);
        this._bufferBuilder.append(high & 0x000000ff);
        this._bufferBuilder.append((low & 0xff000000) >>> 24);
        this._bufferBuilder.append((low & 0x00ff0000) >>> 16);
        this._bufferBuilder.append((low & 0x0000ff00) >>> 8);
        this._bufferBuilder.append(low & 0x000000ff);
    }
    constructor(){
        this._bufferBuilder = new ($e8379818650e2442$export$93654d4f2d6cd524)();
        this._textEncoder = new TextEncoder();
    }
}

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */

let logDisabled_ = true;
let deprecationWarnings_ = true;

/**
 * Extract browser version out of the provided user agent string.
 *
 * @param {!string} uastring userAgent string.
 * @param {!string} expr Regular expression used as match criteria.
 * @param {!number} pos position in the version string to be returned.
 * @return {!number} browser version.
 */
function extractVersion(uastring, expr, pos) {
  const match = uastring.match(expr);
  return match && match.length >= pos && parseInt(match[pos], 10);
}

// Wraps the peerconnection event eventNameToWrap in a function
// which returns the modified event object (or false to prevent
// the event).
function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
  if (!window.RTCPeerConnection) {
    return;
  }
  const proto = window.RTCPeerConnection.prototype;
  const nativeAddEventListener = proto.addEventListener;
  proto.addEventListener = function(nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap) {
      return nativeAddEventListener.apply(this, arguments);
    }
    const wrappedCallback = (e) => {
      const modifiedEvent = wrapper(e);
      if (modifiedEvent) {
        if (cb.handleEvent) {
          cb.handleEvent(modifiedEvent);
        } else {
          cb(modifiedEvent);
        }
      }
    };
    this._eventMap = this._eventMap || {};
    if (!this._eventMap[eventNameToWrap]) {
      this._eventMap[eventNameToWrap] = new Map();
    }
    this._eventMap[eventNameToWrap].set(cb, wrappedCallback);
    return nativeAddEventListener.apply(this, [nativeEventName,
      wrappedCallback]);
  };

  const nativeRemoveEventListener = proto.removeEventListener;
  proto.removeEventListener = function(nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap || !this._eventMap
        || !this._eventMap[eventNameToWrap]) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    if (!this._eventMap[eventNameToWrap].has(cb)) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    const unwrappedCb = this._eventMap[eventNameToWrap].get(cb);
    this._eventMap[eventNameToWrap].delete(cb);
    if (this._eventMap[eventNameToWrap].size === 0) {
      delete this._eventMap[eventNameToWrap];
    }
    if (Object.keys(this._eventMap).length === 0) {
      delete this._eventMap;
    }
    return nativeRemoveEventListener.apply(this, [nativeEventName,
      unwrappedCb]);
  };

  Object.defineProperty(proto, 'on' + eventNameToWrap, {
    get() {
      return this['_on' + eventNameToWrap];
    },
    set(cb) {
      if (this['_on' + eventNameToWrap]) {
        this.removeEventListener(eventNameToWrap,
          this['_on' + eventNameToWrap]);
        delete this['_on' + eventNameToWrap];
      }
      if (cb) {
        this.addEventListener(eventNameToWrap,
          this['_on' + eventNameToWrap] = cb);
      }
    },
    enumerable: true,
    configurable: true
  });
}

function disableLog(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + typeof bool +
        '. Please use a boolean.');
  }
  logDisabled_ = bool;
  return (bool) ? 'adapter.js logging disabled' :
    'adapter.js logging enabled';
}

/**
 * Disable or enable deprecation warnings
 * @param {!boolean} bool set to true to disable warnings.
 */
function disableWarnings(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + typeof bool +
        '. Please use a boolean.');
  }
  deprecationWarnings_ = !bool;
  return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
}

function log() {
  if (typeof window === 'object') {
    if (logDisabled_) {
      return;
    }
    if (typeof console !== 'undefined' && typeof console.log === 'function') {
      console.log.apply(console, arguments);
    }
  }
}

/**
 * Shows a deprecation warning suggesting the modern and spec-compatible API.
 */
function deprecated(oldMethod, newMethod) {
  if (!deprecationWarnings_) {
    return;
  }
  console.warn(oldMethod + ' is deprecated, please use ' + newMethod +
      ' instead.');
}

/**
 * Browser detector.
 *
 * @return {object} result containing browser and version
 *     properties.
 */
function detectBrowser(window) {
  // Returned result object.
  const result = {browser: null, version: null};

  // Fail early if it's not a browser
  if (typeof window === 'undefined' || !window.navigator ||
      !window.navigator.userAgent) {
    result.browser = 'Not a browser.';
    return result;
  }

  const {navigator} = window;

  // Prefer navigator.userAgentData.
  if (navigator.userAgentData && navigator.userAgentData.brands) {
    const chromium = navigator.userAgentData.brands.find((brand) => {
      return brand.brand === 'Chromium';
    });
    if (chromium) {
      return {browser: 'chrome', version: parseInt(chromium.version, 10)};
    }
  }

  if (navigator.mozGetUserMedia) { // Firefox.
    result.browser = 'firefox';
    result.version = extractVersion(navigator.userAgent,
      /Firefox\/(\d+)\./, 1);
  } else if (navigator.webkitGetUserMedia ||
      (window.isSecureContext === false && window.webkitRTCPeerConnection)) {
    // Chrome, Chromium, Webview, Opera.
    // Version matches Chrome/WebRTC version.
    // Chrome 74 removed webkitGetUserMedia on http as well so we need the
    // more complicated fallback to webkitRTCPeerConnection.
    result.browser = 'chrome';
    result.version = extractVersion(navigator.userAgent,
      /Chrom(e|ium)\/(\d+)\./, 2);
  } else if (window.RTCPeerConnection &&
      navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) { // Safari.
    result.browser = 'safari';
    result.version = extractVersion(navigator.userAgent,
      /AppleWebKit\/(\d+)\./, 1);
    result.supportsUnifiedPlan = window.RTCRtpTransceiver &&
        'currentDirection' in window.RTCRtpTransceiver.prototype;
  } else { // Default fallthrough: not supported.
    result.browser = 'Not a supported browser.';
    return result;
  }

  return result;
}

/**
 * Checks if something is an object.
 *
 * @param {*} val The something you want to check.
 * @return true if val is an object, false otherwise.
 */
function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
}

/**
 * Remove all empty objects and undefined values
 * from a nested object -- an enhanced and vanilla version
 * of Lodash's `compact`.
 */
function compactObject(data) {
  if (!isObject(data)) {
    return data;
  }

  return Object.keys(data).reduce(function(accumulator, key) {
    const isObj = isObject(data[key]);
    const value = isObj ? compactObject(data[key]) : data[key];
    const isEmptyObject = isObj && !Object.keys(value).length;
    if (value === undefined || isEmptyObject) {
      return accumulator;
    }
    return Object.assign(accumulator, {[key]: value});
  }, {});
}

/* iterates the stats graph recursively. */
function walkStats(stats, base, resultSet) {
  if (!base || resultSet.has(base.id)) {
    return;
  }
  resultSet.set(base.id, base);
  Object.keys(base).forEach(name => {
    if (name.endsWith('Id')) {
      walkStats(stats, stats.get(base[name]), resultSet);
    } else if (name.endsWith('Ids')) {
      base[name].forEach(id => {
        walkStats(stats, stats.get(id), resultSet);
      });
    }
  });
}

/* filter getStats for a sender/receiver track. */
function filterStats(result, track, outbound) {
  const streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
  const filteredResult = new Map();
  if (track === null) {
    return filteredResult;
  }
  const trackStats = [];
  result.forEach(value => {
    if (value.type === 'track' &&
        value.trackIdentifier === track.id) {
      trackStats.push(value);
    }
  });
  trackStats.forEach(trackStat => {
    result.forEach(stats => {
      if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
        walkStats(result, stats, filteredResult);
      }
    });
  });
  return filteredResult;
}

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
const logging = log;

function shimGetUserMedia$2(window, browserDetails) {
  const navigator = window && window.navigator;

  if (!navigator.mediaDevices) {
    return;
  }

  const constraintsToChrome_ = function(c) {
    if (typeof c !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    const cc = {};
    Object.keys(c).forEach(key => {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      const r = (typeof c[key] === 'object') ? c[key] : {ideal: c[key]};
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      const oldname_ = function(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return (name === 'deviceId') ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        let oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname_('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(mix => {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  const shimConstraints_ = function(constraints, func) {
    if (browserDetails.version >= 61) {
      return func(constraints);
    }
    constraints = JSON.parse(JSON.stringify(constraints));
    if (constraints && typeof constraints.audio === 'object') {
      const remap = function(obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };
      constraints = JSON.parse(JSON.stringify(constraints));
      remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
      remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
      constraints.audio = constraintsToChrome_(constraints.audio);
    }
    if (constraints && typeof constraints.video === 'object') {
      // Shim facingMode for mobile & surface pro.
      let face = constraints.video.facingMode;
      face = face && ((typeof face === 'object') ? face : {ideal: face});
      const getSupportedFacingModeLies = browserDetails.version < 66;

      if ((face && (face.exact === 'user' || face.exact === 'environment' ||
                    face.ideal === 'user' || face.ideal === 'environment')) &&
          !(navigator.mediaDevices.getSupportedConstraints &&
            navigator.mediaDevices.getSupportedConstraints().facingMode &&
            !getSupportedFacingModeLies)) {
        delete constraints.video.facingMode;
        let matches;
        if (face.exact === 'environment' || face.ideal === 'environment') {
          matches = ['back', 'rear'];
        } else if (face.exact === 'user' || face.ideal === 'user') {
          matches = ['front'];
        }
        if (matches) {
          // Look for matches in label, or use last cam for back (typical).
          return navigator.mediaDevices.enumerateDevices()
            .then(devices => {
              devices = devices.filter(d => d.kind === 'videoinput');
              let dev = devices.find(d => matches.some(match =>
                d.label.toLowerCase().includes(match)));
              if (!dev && devices.length && matches.includes('back')) {
                dev = devices[devices.length - 1]; // more likely the back cam
              }
              if (dev) {
                constraints.video.deviceId = face.exact
                  ? {exact: dev.deviceId}
                  : {ideal: dev.deviceId};
              }
              constraints.video = constraintsToChrome_(constraints.video);
              logging('chrome: ' + JSON.stringify(constraints));
              return func(constraints);
            });
        }
      }
      constraints.video = constraintsToChrome_(constraints.video);
    }
    logging('chrome: ' + JSON.stringify(constraints));
    return func(constraints);
  };

  const shimError_ = function(e) {
    if (browserDetails.version >= 64) {
      return e;
    }
    return {
      name: {
        PermissionDeniedError: 'NotAllowedError',
        PermissionDismissedError: 'NotAllowedError',
        InvalidStateError: 'NotAllowedError',
        DevicesNotFoundError: 'NotFoundError',
        ConstraintNotSatisfiedError: 'OverconstrainedError',
        TrackStartError: 'NotReadableError',
        MediaDeviceFailedDueToShutdown: 'NotAllowedError',
        MediaDeviceKillSwitchOn: 'NotAllowedError',
        TabCaptureError: 'AbortError',
        ScreenCaptureError: 'AbortError',
        DeviceCaptureError: 'AbortError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint || e.constraintName,
      toString() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  const getUserMedia_ = function(constraints, onSuccess, onError) {
    shimConstraints_(constraints, c => {
      navigator.webkitGetUserMedia(c, onSuccess, e => {
        if (onError) {
          onError(shimError_(e));
        }
      });
    });
  };
  navigator.getUserMedia = getUserMedia_.bind(navigator);

  // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
  // function which returns a Promise, it does not accept spec-style
  // constraints.
  if (navigator.mediaDevices.getUserMedia) {
    const origGetUserMedia = navigator.mediaDevices.getUserMedia.
      bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(cs) {
      return shimConstraints_(cs, c => origGetUserMedia(c).then(stream => {
        if (c.audio && !stream.getAudioTracks().length ||
            c.video && !stream.getVideoTracks().length) {
          stream.getTracks().forEach(track => {
            track.stop();
          });
          throw new DOMException('', 'NotFoundError');
        }
        return stream;
      }, e => Promise.reject(shimError_(e))));
    };
  }
}

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */

function shimMediaStream(window) {
  window.MediaStream = window.MediaStream || window.webkitMediaStream;
}

function shimOnTrack$1(window) {
  if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
      window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
      get() {
        return this._ontrack;
      },
      set(f) {
        if (this._ontrack) {
          this.removeEventListener('track', this._ontrack);
        }
        this.addEventListener('track', this._ontrack = f);
      },
      enumerable: true,
      configurable: true
    });
    const origSetRemoteDescription =
        window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription =
      function setRemoteDescription() {
        if (!this._ontrackpoly) {
          this._ontrackpoly = (e) => {
            // onaddstream does not fire when a track is added to an existing
            // stream. But stream.onaddtrack is implemented so we use that.
            e.stream.addEventListener('addtrack', te => {
              let receiver;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = this.getReceivers()
                  .find(r => r.track && r.track.id === te.track.id);
              } else {
                receiver = {track: te.track};
              }

              const event = new Event('track');
              event.track = te.track;
              event.receiver = receiver;
              event.transceiver = {receiver};
              event.streams = [e.stream];
              this.dispatchEvent(event);
            });
            e.stream.getTracks().forEach(track => {
              let receiver;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = this.getReceivers()
                  .find(r => r.track && r.track.id === track.id);
              } else {
                receiver = {track};
              }
              const event = new Event('track');
              event.track = track;
              event.receiver = receiver;
              event.transceiver = {receiver};
              event.streams = [e.stream];
              this.dispatchEvent(event);
            });
          };
          this.addEventListener('addstream', this._ontrackpoly);
        }
        return origSetRemoteDescription.apply(this, arguments);
      };
  } else {
    // even if RTCRtpTransceiver is in window, it is only used and
    // emitted in unified-plan. Unfortunately this means we need
    // to unconditionally wrap the event.
    wrapPeerConnectionEvent(window, 'track', e => {
      if (!e.transceiver) {
        Object.defineProperty(e, 'transceiver',
          {value: {receiver: e.receiver}});
      }
      return e;
    });
  }
}

function shimGetSendersWithDtmf(window) {
  // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
  if (typeof window === 'object' && window.RTCPeerConnection &&
      !('getSenders' in window.RTCPeerConnection.prototype) &&
      'createDTMFSender' in window.RTCPeerConnection.prototype) {
    const shimSenderWithDtmf = function(pc, track) {
      return {
        track,
        get dtmf() {
          if (this._dtmf === undefined) {
            if (track.kind === 'audio') {
              this._dtmf = pc.createDTMFSender(track);
            } else {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        },
        _pc: pc
      };
    };

    // augment addTrack when getSenders is not available.
    if (!window.RTCPeerConnection.prototype.getSenders) {
      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        this._senders = this._senders || [];
        return this._senders.slice(); // return a copy of the internal state.
      };
      const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
      window.RTCPeerConnection.prototype.addTrack =
        function addTrack(track, stream) {
          let sender = origAddTrack.apply(this, arguments);
          if (!sender) {
            sender = shimSenderWithDtmf(this, track);
            this._senders.push(sender);
          }
          return sender;
        };

      const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
      window.RTCPeerConnection.prototype.removeTrack =
        function removeTrack(sender) {
          origRemoveTrack.apply(this, arguments);
          const idx = this._senders.indexOf(sender);
          if (idx !== -1) {
            this._senders.splice(idx, 1);
          }
        };
    }
    const origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      this._senders = this._senders || [];
      origAddStream.apply(this, [stream]);
      stream.getTracks().forEach(track => {
        this._senders.push(shimSenderWithDtmf(this, track));
      });
    };

    const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream =
      function removeStream(stream) {
        this._senders = this._senders || [];
        origRemoveStream.apply(this, [stream]);

        stream.getTracks().forEach(track => {
          const sender = this._senders.find(s => s.track === track);
          if (sender) { // remove sender
            this._senders.splice(this._senders.indexOf(sender), 1);
          }
        });
      };
  } else if (typeof window === 'object' && window.RTCPeerConnection &&
             'getSenders' in window.RTCPeerConnection.prototype &&
             'createDTMFSender' in window.RTCPeerConnection.prototype &&
             window.RTCRtpSender &&
             !('dtmf' in window.RTCRtpSender.prototype)) {
    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
      const senders = origGetSenders.apply(this, []);
      senders.forEach(sender => sender._pc = this);
      return senders;
    };

    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = this._pc.createDTMFSender(this.track);
          } else {
            this._dtmf = null;
          }
        }
        return this._dtmf;
      }
    });
  }
}

function shimSenderReceiverGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection &&
      window.RTCRtpSender && window.RTCRtpReceiver)) {
    return;
  }

  // shim sender stats.
  if (!('getStats' in window.RTCRtpSender.prototype)) {
    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) {
      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        const senders = origGetSenders.apply(this, []);
        senders.forEach(sender => sender._pc = this);
        return senders;
      };
    }

    const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) {
      window.RTCPeerConnection.prototype.addTrack = function addTrack() {
        const sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
      };
    }
    window.RTCRtpSender.prototype.getStats = function getStats() {
      const sender = this;
      return this._pc.getStats().then(result =>
        /* Note: this will include stats of all senders that
         *   send a track with the same id as sender.track as
         *   it is not possible to identify the RTCRtpSender.
         */
        filterStats(result, sender.track, true));
    };
  }

  // shim receiver stats.
  if (!('getStats' in window.RTCRtpReceiver.prototype)) {
    const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) {
      window.RTCPeerConnection.prototype.getReceivers =
        function getReceivers() {
          const receivers = origGetReceivers.apply(this, []);
          receivers.forEach(receiver => receiver._pc = this);
          return receivers;
        };
    }
    wrapPeerConnectionEvent(window, 'track', e => {
      e.receiver._pc = e.srcElement;
      return e;
    });
    window.RTCRtpReceiver.prototype.getStats = function getStats() {
      const receiver = this;
      return this._pc.getStats().then(result =>
        filterStats(result, receiver.track, false));
    };
  }

  if (!('getStats' in window.RTCRtpSender.prototype &&
      'getStats' in window.RTCRtpReceiver.prototype)) {
    return;
  }

  // shim RTCPeerConnection.getStats(track).
  const origGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function getStats() {
    if (arguments.length > 0 &&
        arguments[0] instanceof window.MediaStreamTrack) {
      const track = arguments[0];
      let sender;
      let receiver;
      let err;
      this.getSenders().forEach(s => {
        if (s.track === track) {
          if (sender) {
            err = true;
          } else {
            sender = s;
          }
        }
      });
      this.getReceivers().forEach(r => {
        if (r.track === track) {
          if (receiver) {
            err = true;
          } else {
            receiver = r;
          }
        }
        return r.track === track;
      });
      if (err || (sender && receiver)) {
        return Promise.reject(new DOMException(
          'There are more than one sender or receiver for the track.',
          'InvalidAccessError'));
      } else if (sender) {
        return sender.getStats();
      } else if (receiver) {
        return receiver.getStats();
      }
      return Promise.reject(new DOMException(
        'There is no sender or receiver for the track.',
        'InvalidAccessError'));
    }
    return origGetStats.apply(this, arguments);
  };
}

function shimAddTrackRemoveTrackWithNative(window) {
  // shim addTrack/removeTrack with native variants in order to make
  // the interactions with legacy getLocalStreams behave as in other browsers.
  // Keeps a mapping stream.id => [stream, rtpsenders...]
  window.RTCPeerConnection.prototype.getLocalStreams =
    function getLocalStreams() {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      return Object.keys(this._shimmedLocalStreams)
        .map(streamId => this._shimmedLocalStreams[streamId][0]);
    };

  const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  window.RTCPeerConnection.prototype.addTrack =
    function addTrack(track, stream) {
      if (!stream) {
        return origAddTrack.apply(this, arguments);
      }
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};

      const sender = origAddTrack.apply(this, arguments);
      if (!this._shimmedLocalStreams[stream.id]) {
        this._shimmedLocalStreams[stream.id] = [stream, sender];
      } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
        this._shimmedLocalStreams[stream.id].push(sender);
      }
      return sender;
    };

  const origAddStream = window.RTCPeerConnection.prototype.addStream;
  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

    stream.getTracks().forEach(track => {
      const alreadyExists = this.getSenders().find(s => s.track === track);
      if (alreadyExists) {
        throw new DOMException('Track already exists.',
          'InvalidAccessError');
      }
    });
    const existingSenders = this.getSenders();
    origAddStream.apply(this, arguments);
    const newSenders = this.getSenders()
      .filter(newSender => existingSenders.indexOf(newSender) === -1);
    this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
  };

  const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream =
    function removeStream(stream) {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      delete this._shimmedLocalStreams[stream.id];
      return origRemoveStream.apply(this, arguments);
    };

  const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
  window.RTCPeerConnection.prototype.removeTrack =
    function removeTrack(sender) {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      if (sender) {
        Object.keys(this._shimmedLocalStreams).forEach(streamId => {
          const idx = this._shimmedLocalStreams[streamId].indexOf(sender);
          if (idx !== -1) {
            this._shimmedLocalStreams[streamId].splice(idx, 1);
          }
          if (this._shimmedLocalStreams[streamId].length === 1) {
            delete this._shimmedLocalStreams[streamId];
          }
        });
      }
      return origRemoveTrack.apply(this, arguments);
    };
}

function shimAddTrackRemoveTrack(window, browserDetails) {
  if (!window.RTCPeerConnection) {
    return;
  }
  // shim addTrack and removeTrack.
  if (window.RTCPeerConnection.prototype.addTrack &&
      browserDetails.version >= 65) {
    return shimAddTrackRemoveTrackWithNative(window);
  }

  // also shim pc.getLocalStreams when addTrack is shimmed
  // to return the original streams.
  const origGetLocalStreams = window.RTCPeerConnection.prototype
    .getLocalStreams;
  window.RTCPeerConnection.prototype.getLocalStreams =
    function getLocalStreams() {
      const nativeStreams = origGetLocalStreams.apply(this);
      this._reverseStreams = this._reverseStreams || {};
      return nativeStreams.map(stream => this._reverseStreams[stream.id]);
    };

  const origAddStream = window.RTCPeerConnection.prototype.addStream;
  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};

    stream.getTracks().forEach(track => {
      const alreadyExists = this.getSenders().find(s => s.track === track);
      if (alreadyExists) {
        throw new DOMException('Track already exists.',
          'InvalidAccessError');
      }
    });
    // Add identity mapping for consistency with addTrack.
    // Unless this is being used with a stream from addTrack.
    if (!this._reverseStreams[stream.id]) {
      const newStream = new window.MediaStream(stream.getTracks());
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      stream = newStream;
    }
    origAddStream.apply(this, [stream]);
  };

  const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream =
    function removeStream(stream) {
      this._streams = this._streams || {};
      this._reverseStreams = this._reverseStreams || {};

      origRemoveStream.apply(this, [(this._streams[stream.id] || stream)]);
      delete this._reverseStreams[(this._streams[stream.id] ?
        this._streams[stream.id].id : stream.id)];
      delete this._streams[stream.id];
    };

  window.RTCPeerConnection.prototype.addTrack =
    function addTrack(track, stream) {
      if (this.signalingState === 'closed') {
        throw new DOMException(
          'The RTCPeerConnection\'s signalingState is \'closed\'.',
          'InvalidStateError');
      }
      const streams = [].slice.call(arguments, 1);
      if (streams.length !== 1 ||
          !streams[0].getTracks().find(t => t === track)) {
        // this is not fully correct but all we can manage without
        // [[associated MediaStreams]] internal slot.
        throw new DOMException(
          'The adapter.js addTrack polyfill only supports a single ' +
          ' stream which is associated with the specified track.',
          'NotSupportedError');
      }

      const alreadyExists = this.getSenders().find(s => s.track === track);
      if (alreadyExists) {
        throw new DOMException('Track already exists.',
          'InvalidAccessError');
      }

      this._streams = this._streams || {};
      this._reverseStreams = this._reverseStreams || {};
      const oldStream = this._streams[stream.id];
      if (oldStream) {
        // this is using odd Chrome behaviour, use with caution:
        // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
        // Note: we rely on the high-level addTrack/dtmf shim to
        // create the sender with a dtmf sender.
        oldStream.addTrack(track);

        // Trigger ONN async.
        Promise.resolve().then(() => {
          this.dispatchEvent(new Event('negotiationneeded'));
        });
      } else {
        const newStream = new window.MediaStream([track]);
        this._streams[stream.id] = newStream;
        this._reverseStreams[newStream.id] = stream;
        this.addStream(newStream);
      }
      return this.getSenders().find(s => s.track === track);
    };

  // replace the internal stream id with the external one and
  // vice versa.
  function replaceInternalStreamId(pc, description) {
    let sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(internalId => {
      const externalStream = pc._reverseStreams[internalId];
      const internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(internalStream.id, 'g'),
        externalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp
    });
  }
  function replaceExternalStreamId(pc, description) {
    let sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(internalId => {
      const externalStream = pc._reverseStreams[internalId];
      const internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(externalStream.id, 'g'),
        internalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp
    });
  }
  ['createOffer', 'createAnswer'].forEach(function(method) {
    const nativeMethod = window.RTCPeerConnection.prototype[method];
    const methodObj = {[method]() {
      const args = arguments;
      const isLegacyCall = arguments.length &&
          typeof arguments[0] === 'function';
      if (isLegacyCall) {
        return nativeMethod.apply(this, [
          (description) => {
            const desc = replaceInternalStreamId(this, description);
            args[0].apply(null, [desc]);
          },
          (err) => {
            if (args[1]) {
              args[1].apply(null, err);
            }
          }, arguments[2]
        ]);
      }
      return nativeMethod.apply(this, arguments)
        .then(description => replaceInternalStreamId(this, description));
    }};
    window.RTCPeerConnection.prototype[method] = methodObj[method];
  });

  const origSetLocalDescription =
      window.RTCPeerConnection.prototype.setLocalDescription;
  window.RTCPeerConnection.prototype.setLocalDescription =
    function setLocalDescription() {
      if (!arguments.length || !arguments[0].type) {
        return origSetLocalDescription.apply(this, arguments);
      }
      arguments[0] = replaceExternalStreamId(this, arguments[0]);
      return origSetLocalDescription.apply(this, arguments);
    };

  // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier

  const origLocalDescription = Object.getOwnPropertyDescriptor(
    window.RTCPeerConnection.prototype, 'localDescription');
  Object.defineProperty(window.RTCPeerConnection.prototype,
    'localDescription', {
      get() {
        const description = origLocalDescription.get.apply(this);
        if (description.type === '') {
          return description;
        }
        return replaceInternalStreamId(this, description);
      }
    });

  window.RTCPeerConnection.prototype.removeTrack =
    function removeTrack(sender) {
      if (this.signalingState === 'closed') {
        throw new DOMException(
          'The RTCPeerConnection\'s signalingState is \'closed\'.',
          'InvalidStateError');
      }
      // We can not yet check for sender instanceof RTCRtpSender
      // since we shim RTPSender. So we check if sender._pc is set.
      if (!sender._pc) {
        throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' +
            'does not implement interface RTCRtpSender.', 'TypeError');
      }
      const isLocal = sender._pc === this;
      if (!isLocal) {
        throw new DOMException('Sender was not created by this connection.',
          'InvalidAccessError');
      }

      // Search for the native stream the senders track belongs to.
      this._streams = this._streams || {};
      let stream;
      Object.keys(this._streams).forEach(streamid => {
        const hasTrack = this._streams[streamid].getTracks()
          .find(track => sender.track === track);
        if (hasTrack) {
          stream = this._streams[streamid];
        }
      });

      if (stream) {
        if (stream.getTracks().length === 1) {
          // if this is the last track of the stream, remove the stream. This
          // takes care of any shimmed _senders.
          this.removeStream(this._reverseStreams[stream.id]);
        } else {
          // relying on the same odd chrome behaviour as above.
          stream.removeTrack(sender.track);
        }
        this.dispatchEvent(new Event('negotiationneeded'));
      }
    };
}

function shimPeerConnection$1(window, browserDetails) {
  if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.webkitRTCPeerConnection;
  }
  if (!window.RTCPeerConnection) {
    return;
  }

  // shim implicit creation of RTCSessionDescription/RTCIceCandidate
  if (browserDetails.version < 53) {
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
      .forEach(function(method) {
        const nativeMethod = window.RTCPeerConnection.prototype[method];
        const methodObj = {[method]() {
          arguments[0] = new ((method === 'addIceCandidate') ?
            window.RTCIceCandidate :
            window.RTCSessionDescription)(arguments[0]);
          return nativeMethod.apply(this, arguments);
        }};
        window.RTCPeerConnection.prototype[method] = methodObj[method];
      });
  }
}

// Attempt to fix ONN in plan-b mode.
function fixNegotiationNeeded(window, browserDetails) {
  wrapPeerConnectionEvent(window, 'negotiationneeded', e => {
    const pc = e.target;
    if (browserDetails.version < 72 || (pc.getConfiguration &&
        pc.getConfiguration().sdpSemantics === 'plan-b')) {
      if (pc.signalingState !== 'stable') {
        return;
      }
    }
    return e;
  });
}

const chromeShim = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	fixNegotiationNeeded,
	shimAddTrackRemoveTrack,
	shimAddTrackRemoveTrackWithNative,
	shimGetSendersWithDtmf,
	shimGetUserMedia: shimGetUserMedia$2,
	shimMediaStream,
	shimOnTrack: shimOnTrack$1,
	shimPeerConnection: shimPeerConnection$1,
	shimSenderReceiverGetStats
}, Symbol.toStringTag, { value: 'Module' }));

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */

function shimGetUserMedia$1(window, browserDetails) {
  const navigator = window && window.navigator;
  const MediaStreamTrack = window && window.MediaStreamTrack;

  navigator.getUserMedia = function(constraints, onSuccess, onError) {
    // Replace Firefox 44+'s deprecation warning with unprefixed version.
    deprecated('navigator.getUserMedia',
      'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };

  if (!(browserDetails.version > 55 &&
      'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
    const remap = function(obj, a, b) {
      if (a in obj && !(b in obj)) {
        obj[b] = obj[a];
        delete obj[a];
      }
    };

    const nativeGetUserMedia = navigator.mediaDevices.getUserMedia.
      bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      if (typeof c === 'object' && typeof c.audio === 'object') {
        c = JSON.parse(JSON.stringify(c));
        remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
        remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
      }
      return nativeGetUserMedia(c);
    };

    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
      const nativeGetSettings = MediaStreamTrack.prototype.getSettings;
      MediaStreamTrack.prototype.getSettings = function() {
        const obj = nativeGetSettings.apply(this, arguments);
        remap(obj, 'mozAutoGainControl', 'autoGainControl');
        remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
        return obj;
      };
    }

    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
      const nativeApplyConstraints =
        MediaStreamTrack.prototype.applyConstraints;
      MediaStreamTrack.prototype.applyConstraints = function(c) {
        if (this.kind === 'audio' && typeof c === 'object') {
          c = JSON.parse(JSON.stringify(c));
          remap(c, 'autoGainControl', 'mozAutoGainControl');
          remap(c, 'noiseSuppression', 'mozNoiseSuppression');
        }
        return nativeApplyConstraints.apply(this, [c]);
      };
    }
  }
}

/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */

function shimGetDisplayMedia(window, preferredMediaSource) {
  if (window.navigator.mediaDevices &&
    'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  if (!(window.navigator.mediaDevices)) {
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia =
    function getDisplayMedia(constraints) {
      if (!(constraints && constraints.video)) {
        const err = new DOMException('getDisplayMedia without video ' +
            'constraints is undefined');
        err.name = 'NotFoundError';
        // from https://heycam.github.io/webidl/#idl-DOMException-error-names
        err.code = 8;
        return Promise.reject(err);
      }
      if (constraints.video === true) {
        constraints.video = {mediaSource: preferredMediaSource};
      } else {
        constraints.video.mediaSource = preferredMediaSource;
      }
      return window.navigator.mediaDevices.getUserMedia(constraints);
    };
}

function shimOnTrack(window) {
  if (typeof window === "object" && window.RTCTrackEvent && "receiver" in window.RTCTrackEvent.prototype && !("transceiver" in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, "transceiver", {
      get() {
        return { receiver: this.receiver };
      }
    });
  }
}
function shimPeerConnection(window, browserDetails) {
  if (typeof window !== "object" || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
    return;
  }
  if (!window.RTCPeerConnection && window.mozRTCPeerConnection) {
    window.RTCPeerConnection = window.mozRTCPeerConnection;
  }
  if (browserDetails.version < 53) {
    ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(method) {
      const nativeMethod = window.RTCPeerConnection.prototype[method];
      const methodObj = { [method]() {
        arguments[0] = new (method === "addIceCandidate" ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
        return nativeMethod.apply(this, arguments);
      } };
      window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
  }
  const modernStatsTypes = {
    inboundrtp: "inbound-rtp",
    outboundrtp: "outbound-rtp",
    candidatepair: "candidate-pair",
    localcandidate: "local-candidate",
    remotecandidate: "remote-candidate"
  };
  const nativeGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function getStats() {
    const [selector, onSucc, onErr] = arguments;
    return nativeGetStats.apply(this, [selector || null]).then((stats) => {
      if (browserDetails.version < 53 && !onSucc) {
        try {
          stats.forEach((stat) => {
            stat.type = modernStatsTypes[stat.type] || stat.type;
          });
        } catch (e) {
          if (e.name !== "TypeError") {
            throw e;
          }
          stats.forEach((stat, i) => {
            stats.set(i, Object.assign({}, stat, {
              type: modernStatsTypes[stat.type] || stat.type
            }));
          });
        }
      }
      return stats;
    }).then(onSucc, onErr);
  };
}
function shimSenderGetStats(window) {
  if (!(typeof window === "object" && window.RTCPeerConnection && window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && "getStats" in window.RTCRtpSender.prototype) {
    return;
  }
  const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
  if (origGetSenders) {
    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
      const senders = origGetSenders.apply(this, []);
      senders.forEach((sender) => sender._pc = this);
      return senders;
    };
  }
  const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  if (origAddTrack) {
    window.RTCPeerConnection.prototype.addTrack = function addTrack() {
      const sender = origAddTrack.apply(this, arguments);
      sender._pc = this;
      return sender;
    };
  }
  window.RTCRtpSender.prototype.getStats = function getStats() {
    return this.track ? this._pc.getStats(this.track) : Promise.resolve(/* @__PURE__ */ new Map());
  };
}
function shimReceiverGetStats(window) {
  if (!(typeof window === "object" && window.RTCPeerConnection && window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && "getStats" in window.RTCRtpReceiver.prototype) {
    return;
  }
  const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
  if (origGetReceivers) {
    window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
      const receivers = origGetReceivers.apply(this, []);
      receivers.forEach((receiver) => receiver._pc = this);
      return receivers;
    };
  }
  wrapPeerConnectionEvent(window, "track", (e) => {
    e.receiver._pc = e.srcElement;
    return e;
  });
  window.RTCRtpReceiver.prototype.getStats = function getStats() {
    return this._pc.getStats(this.track);
  };
}
function shimRemoveStream(window) {
  if (!window.RTCPeerConnection || "removeStream" in window.RTCPeerConnection.prototype) {
    return;
  }
  window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    deprecated("removeStream", "removeTrack");
    this.getSenders().forEach((sender) => {
      if (sender.track && stream.getTracks().includes(sender.track)) {
        this.removeTrack(sender);
      }
    });
  };
}
function shimRTCDataChannel(window) {
  if (window.DataChannel && !window.RTCDataChannel) {
    window.RTCDataChannel = window.DataChannel;
  }
}
function shimAddTransceiver(window) {
  if (!(typeof window === "object" && window.RTCPeerConnection)) {
    return;
  }
  const origAddTransceiver = window.RTCPeerConnection.prototype.addTransceiver;
  if (origAddTransceiver) {
    window.RTCPeerConnection.prototype.addTransceiver = function addTransceiver() {
      this.setParametersPromises = [];
      let sendEncodings = arguments[1] && arguments[1].sendEncodings;
      if (sendEncodings === void 0) {
        sendEncodings = [];
      }
      sendEncodings = [...sendEncodings];
      const shouldPerformCheck = sendEncodings.length > 0;
      if (shouldPerformCheck) {
        sendEncodings.forEach((encodingParam) => {
          if ("rid" in encodingParam) {
            const ridRegex = /^[a-z0-9]{0,16}$/i;
            if (!ridRegex.test(encodingParam.rid)) {
              throw new TypeError("Invalid RID value provided.");
            }
          }
          if ("scaleResolutionDownBy" in encodingParam) {
            if (!(parseFloat(encodingParam.scaleResolutionDownBy) >= 1)) {
              throw new RangeError("scale_resolution_down_by must be >= 1.0");
            }
          }
          if ("maxFramerate" in encodingParam) {
            if (!(parseFloat(encodingParam.maxFramerate) >= 0)) {
              throw new RangeError("max_framerate must be >= 0.0");
            }
          }
        });
      }
      const transceiver = origAddTransceiver.apply(this, arguments);
      if (shouldPerformCheck) {
        const { sender } = transceiver;
        const params = sender.getParameters();
        if (!("encodings" in params) || // Avoid being fooled by patched getParameters() below.
        params.encodings.length === 1 && Object.keys(params.encodings[0]).length === 0) {
          params.encodings = sendEncodings;
          sender.sendEncodings = sendEncodings;
          this.setParametersPromises.push(
            sender.setParameters(params).then(() => {
              delete sender.sendEncodings;
            }).catch(() => {
              delete sender.sendEncodings;
            })
          );
        }
      }
      return transceiver;
    };
  }
}
function shimGetParameters(window) {
  if (!(typeof window === "object" && window.RTCRtpSender)) {
    return;
  }
  const origGetParameters = window.RTCRtpSender.prototype.getParameters;
  if (origGetParameters) {
    window.RTCRtpSender.prototype.getParameters = function getParameters() {
      const params = origGetParameters.apply(this, arguments);
      if (!("encodings" in params)) {
        params.encodings = [].concat(this.sendEncodings || [{}]);
      }
      return params;
    };
  }
}
function shimCreateOffer(window) {
  if (!(typeof window === "object" && window.RTCPeerConnection)) {
    return;
  }
  const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
  window.RTCPeerConnection.prototype.createOffer = function createOffer() {
    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises).then(() => {
        return origCreateOffer.apply(this, arguments);
      }).finally(() => {
        this.setParametersPromises = [];
      });
    }
    return origCreateOffer.apply(this, arguments);
  };
}
function shimCreateAnswer(window) {
  if (!(typeof window === "object" && window.RTCPeerConnection)) {
    return;
  }
  const origCreateAnswer = window.RTCPeerConnection.prototype.createAnswer;
  window.RTCPeerConnection.prototype.createAnswer = function createAnswer() {
    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises).then(() => {
        return origCreateAnswer.apply(this, arguments);
      }).finally(() => {
        this.setParametersPromises = [];
      });
    }
    return origCreateAnswer.apply(this, arguments);
  };
}

const firefoxShim = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	shimAddTransceiver,
	shimCreateAnswer,
	shimCreateOffer,
	shimGetDisplayMedia,
	shimGetParameters,
	shimGetUserMedia: shimGetUserMedia$1,
	shimOnTrack,
	shimPeerConnection,
	shimRTCDataChannel,
	shimReceiverGetStats,
	shimRemoveStream,
	shimSenderGetStats
}, Symbol.toStringTag, { value: 'Module' }));

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

function shimLocalStreamsAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getLocalStreams =
      function getLocalStreams() {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        return this._localStreams;
      };
  }
  if (!('addStream' in window.RTCPeerConnection.prototype)) {
    const _addTrack = window.RTCPeerConnection.prototype.addTrack;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      if (!this._localStreams) {
        this._localStreams = [];
      }
      if (!this._localStreams.includes(stream)) {
        this._localStreams.push(stream);
      }
      // Try to emulate Chrome's behaviour of adding in audio-video order.
      // Safari orders by track id.
      stream.getAudioTracks().forEach(track => _addTrack.call(this, track,
        stream));
      stream.getVideoTracks().forEach(track => _addTrack.call(this, track,
        stream));
    };

    window.RTCPeerConnection.prototype.addTrack =
      function addTrack(track, ...streams) {
        if (streams) {
          streams.forEach((stream) => {
            if (!this._localStreams) {
              this._localStreams = [stream];
            } else if (!this._localStreams.includes(stream)) {
              this._localStreams.push(stream);
            }
          });
        }
        return _addTrack.apply(this, arguments);
      };
  }
  if (!('removeStream' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.removeStream =
      function removeStream(stream) {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        const index = this._localStreams.indexOf(stream);
        if (index === -1) {
          return;
        }
        this._localStreams.splice(index, 1);
        const tracks = stream.getTracks();
        this.getSenders().forEach(sender => {
          if (tracks.includes(sender.track)) {
            this.removeTrack(sender);
          }
        });
      };
  }
}

function shimRemoteStreamsAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getRemoteStreams =
      function getRemoteStreams() {
        return this._remoteStreams ? this._remoteStreams : [];
      };
  }
  if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
      get() {
        return this._onaddstream;
      },
      set(f) {
        if (this._onaddstream) {
          this.removeEventListener('addstream', this._onaddstream);
          this.removeEventListener('track', this._onaddstreampoly);
        }
        this.addEventListener('addstream', this._onaddstream = f);
        this.addEventListener('track', this._onaddstreampoly = (e) => {
          e.streams.forEach(stream => {
            if (!this._remoteStreams) {
              this._remoteStreams = [];
            }
            if (this._remoteStreams.includes(stream)) {
              return;
            }
            this._remoteStreams.push(stream);
            const event = new Event('addstream');
            event.stream = stream;
            this.dispatchEvent(event);
          });
        });
      }
    });
    const origSetRemoteDescription =
      window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription =
      function setRemoteDescription() {
        const pc = this;
        if (!this._onaddstreampoly) {
          this.addEventListener('track', this._onaddstreampoly = function(e) {
            e.streams.forEach(stream => {
              if (!pc._remoteStreams) {
                pc._remoteStreams = [];
              }
              if (pc._remoteStreams.indexOf(stream) >= 0) {
                return;
              }
              pc._remoteStreams.push(stream);
              const event = new Event('addstream');
              event.stream = stream;
              pc.dispatchEvent(event);
            });
          });
        }
        return origSetRemoteDescription.apply(pc, arguments);
      };
  }
}

function shimCallbacksAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  const prototype = window.RTCPeerConnection.prototype;
  const origCreateOffer = prototype.createOffer;
  const origCreateAnswer = prototype.createAnswer;
  const setLocalDescription = prototype.setLocalDescription;
  const setRemoteDescription = prototype.setRemoteDescription;
  const addIceCandidate = prototype.addIceCandidate;

  prototype.createOffer =
    function createOffer(successCallback, failureCallback) {
      const options = (arguments.length >= 2) ? arguments[2] : arguments[0];
      const promise = origCreateOffer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };

  prototype.createAnswer =
    function createAnswer(successCallback, failureCallback) {
      const options = (arguments.length >= 2) ? arguments[2] : arguments[0];
      const promise = origCreateAnswer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };

  let withCallback = function(description, successCallback, failureCallback) {
    const promise = setLocalDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setLocalDescription = withCallback;

  withCallback = function(description, successCallback, failureCallback) {
    const promise = setRemoteDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setRemoteDescription = withCallback;

  withCallback = function(candidate, successCallback, failureCallback) {
    const promise = addIceCandidate.apply(this, [candidate]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.addIceCandidate = withCallback;
}

function shimGetUserMedia(window) {
  const navigator = window && window.navigator;

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // shim not needed in Safari 12.1
    const mediaDevices = navigator.mediaDevices;
    const _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
    navigator.mediaDevices.getUserMedia = (constraints) => {
      return _getUserMedia(shimConstraints(constraints));
    };
  }

  if (!navigator.getUserMedia && navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia) {
    navigator.getUserMedia = function getUserMedia(constraints, cb, errcb) {
      navigator.mediaDevices.getUserMedia(constraints)
        .then(cb, errcb);
    }.bind(navigator);
  }
}

function shimConstraints(constraints) {
  if (constraints && constraints.video !== undefined) {
    return Object.assign({},
      constraints,
      {video: compactObject(constraints.video)}
    );
  }

  return constraints;
}

function shimRTCIceServerUrls(window) {
  if (!window.RTCPeerConnection) {
    return;
  }
  // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
  const OrigPeerConnection = window.RTCPeerConnection;
  window.RTCPeerConnection =
    function RTCPeerConnection(pcConfig, pcConstraints) {
      if (pcConfig && pcConfig.iceServers) {
        const newIceServers = [];
        for (let i = 0; i < pcConfig.iceServers.length; i++) {
          let server = pcConfig.iceServers[i];
          if (server.urls === undefined && server.url) {
            deprecated('RTCIceServer.url', 'RTCIceServer.urls');
            server = JSON.parse(JSON.stringify(server));
            server.urls = server.url;
            delete server.url;
            newIceServers.push(server);
          } else {
            newIceServers.push(pcConfig.iceServers[i]);
          }
        }
        pcConfig.iceServers = newIceServers;
      }
      return new OrigPeerConnection(pcConfig, pcConstraints);
    };
  window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
  // wrap static methods. Currently just generateCertificate.
  if ('generateCertificate' in OrigPeerConnection) {
    Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
      get() {
        return OrigPeerConnection.generateCertificate;
      }
    });
  }
}

function shimTrackEventTransceiver(window) {
  // Add event.transceiver member over deprecated event.receiver
  if (typeof window === 'object' && window.RTCTrackEvent &&
      'receiver' in window.RTCTrackEvent.prototype &&
      !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get() {
        return {receiver: this.receiver};
      }
    });
  }
}

function shimCreateOfferLegacy(window) {
  const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
  window.RTCPeerConnection.prototype.createOffer =
    function createOffer(offerOptions) {
      if (offerOptions) {
        if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
          // support bit values
          offerOptions.offerToReceiveAudio =
            !!offerOptions.offerToReceiveAudio;
        }
        const audioTransceiver = this.getTransceivers().find(transceiver =>
          transceiver.receiver.track.kind === 'audio');
        if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
          if (audioTransceiver.direction === 'sendrecv') {
            if (audioTransceiver.setDirection) {
              audioTransceiver.setDirection('sendonly');
            } else {
              audioTransceiver.direction = 'sendonly';
            }
          } else if (audioTransceiver.direction === 'recvonly') {
            if (audioTransceiver.setDirection) {
              audioTransceiver.setDirection('inactive');
            } else {
              audioTransceiver.direction = 'inactive';
            }
          }
        } else if (offerOptions.offerToReceiveAudio === true &&
            !audioTransceiver) {
          this.addTransceiver('audio', {direction: 'recvonly'});
        }

        if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
          // support bit values
          offerOptions.offerToReceiveVideo =
            !!offerOptions.offerToReceiveVideo;
        }
        const videoTransceiver = this.getTransceivers().find(transceiver =>
          transceiver.receiver.track.kind === 'video');
        if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
          if (videoTransceiver.direction === 'sendrecv') {
            if (videoTransceiver.setDirection) {
              videoTransceiver.setDirection('sendonly');
            } else {
              videoTransceiver.direction = 'sendonly';
            }
          } else if (videoTransceiver.direction === 'recvonly') {
            if (videoTransceiver.setDirection) {
              videoTransceiver.setDirection('inactive');
            } else {
              videoTransceiver.direction = 'inactive';
            }
          }
        } else if (offerOptions.offerToReceiveVideo === true &&
            !videoTransceiver) {
          this.addTransceiver('video', {direction: 'recvonly'});
        }
      }
      return origCreateOffer.apply(this, arguments);
    };
}

function shimAudioContext(window) {
  if (typeof window !== 'object' || window.AudioContext) {
    return;
  }
  window.AudioContext = window.webkitAudioContext;
}

const safariShim = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	shimAudioContext,
	shimCallbacksAPI,
	shimConstraints,
	shimCreateOfferLegacy,
	shimGetUserMedia,
	shimLocalStreamsAPI,
	shimRTCIceServerUrls,
	shimRemoteStreamsAPI,
	shimTrackEventTransceiver
}, Symbol.toStringTag, { value: 'Module' }));

var sdp$1 = {exports: {}};

/* eslint-env node */

var hasRequiredSdp;

function requireSdp () {
	if (hasRequiredSdp) return sdp$1.exports;
	hasRequiredSdp = 1;
	(function (module) {

		// SDP helpers.
		const SDPUtils = {};

		// Generate an alphanumeric identifier for cname or mids.
		// TODO: use UUIDs instead? https://gist.github.com/jed/982883
		SDPUtils.generateIdentifier = function() {
		  return Math.random().toString(36).substring(2, 12);
		};

		// The RTCP CNAME used by all peerconnections from the same JS.
		SDPUtils.localCName = SDPUtils.generateIdentifier();

		// Splits SDP into lines, dealing with both CRLF and LF.
		SDPUtils.splitLines = function(blob) {
		  return blob.trim().split('\n').map(line => line.trim());
		};
		// Splits SDP into sessionpart and mediasections. Ensures CRLF.
		SDPUtils.splitSections = function(blob) {
		  const parts = blob.split('\nm=');
		  return parts.map((part, index) => (index > 0 ?
		    'm=' + part : part).trim() + '\r\n');
		};

		// Returns the session description.
		SDPUtils.getDescription = function(blob) {
		  const sections = SDPUtils.splitSections(blob);
		  return sections && sections[0];
		};

		// Returns the individual media sections.
		SDPUtils.getMediaSections = function(blob) {
		  const sections = SDPUtils.splitSections(blob);
		  sections.shift();
		  return sections;
		};

		// Returns lines that start with a certain prefix.
		SDPUtils.matchPrefix = function(blob, prefix) {
		  return SDPUtils.splitLines(blob).filter(line => line.indexOf(prefix) === 0);
		};

		// Parses an ICE candidate line. Sample input:
		// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
		// rport 55996"
		// Input can be prefixed with a=.
		SDPUtils.parseCandidate = function(line) {
		  let parts;
		  // Parse both variants.
		  if (line.indexOf('a=candidate:') === 0) {
		    parts = line.substring(12).split(' ');
		  } else {
		    parts = line.substring(10).split(' ');
		  }

		  const candidate = {
		    foundation: parts[0],
		    component: {1: 'rtp', 2: 'rtcp'}[parts[1]] || parts[1],
		    protocol: parts[2].toLowerCase(),
		    priority: parseInt(parts[3], 10),
		    ip: parts[4],
		    address: parts[4], // address is an alias for ip.
		    port: parseInt(parts[5], 10),
		    // skip parts[6] == 'typ'
		    type: parts[7],
		  };

		  for (let i = 8; i < parts.length; i += 2) {
		    switch (parts[i]) {
		      case 'raddr':
		        candidate.relatedAddress = parts[i + 1];
		        break;
		      case 'rport':
		        candidate.relatedPort = parseInt(parts[i + 1], 10);
		        break;
		      case 'tcptype':
		        candidate.tcpType = parts[i + 1];
		        break;
		      case 'ufrag':
		        candidate.ufrag = parts[i + 1]; // for backward compatibility.
		        candidate.usernameFragment = parts[i + 1];
		        break;
		      default: // extension handling, in particular ufrag. Don't overwrite.
		        if (candidate[parts[i]] === undefined) {
		          candidate[parts[i]] = parts[i + 1];
		        }
		        break;
		    }
		  }
		  return candidate;
		};

		// Translates a candidate object into SDP candidate attribute.
		// This does not include the a= prefix!
		SDPUtils.writeCandidate = function(candidate) {
		  const sdp = [];
		  sdp.push(candidate.foundation);

		  const component = candidate.component;
		  if (component === 'rtp') {
		    sdp.push(1);
		  } else if (component === 'rtcp') {
		    sdp.push(2);
		  } else {
		    sdp.push(component);
		  }
		  sdp.push(candidate.protocol.toUpperCase());
		  sdp.push(candidate.priority);
		  sdp.push(candidate.address || candidate.ip);
		  sdp.push(candidate.port);

		  const type = candidate.type;
		  sdp.push('typ');
		  sdp.push(type);
		  if (type !== 'host' && candidate.relatedAddress &&
		      candidate.relatedPort) {
		    sdp.push('raddr');
		    sdp.push(candidate.relatedAddress);
		    sdp.push('rport');
		    sdp.push(candidate.relatedPort);
		  }
		  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
		    sdp.push('tcptype');
		    sdp.push(candidate.tcpType);
		  }
		  if (candidate.usernameFragment || candidate.ufrag) {
		    sdp.push('ufrag');
		    sdp.push(candidate.usernameFragment || candidate.ufrag);
		  }
		  return 'candidate:' + sdp.join(' ');
		};

		// Parses an ice-options line, returns an array of option tags.
		// Sample input:
		// a=ice-options:foo bar
		SDPUtils.parseIceOptions = function(line) {
		  return line.substring(14).split(' ');
		};

		// Parses a rtpmap line, returns RTCRtpCoddecParameters. Sample input:
		// a=rtpmap:111 opus/48000/2
		SDPUtils.parseRtpMap = function(line) {
		  let parts = line.substring(9).split(' ');
		  const parsed = {
		    payloadType: parseInt(parts.shift(), 10), // was: id
		  };

		  parts = parts[0].split('/');

		  parsed.name = parts[0];
		  parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
		  parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
		  // legacy alias, got renamed back to channels in ORTC.
		  parsed.numChannels = parsed.channels;
		  return parsed;
		};

		// Generates a rtpmap line from RTCRtpCodecCapability or
		// RTCRtpCodecParameters.
		SDPUtils.writeRtpMap = function(codec) {
		  let pt = codec.payloadType;
		  if (codec.preferredPayloadType !== undefined) {
		    pt = codec.preferredPayloadType;
		  }
		  const channels = codec.channels || codec.numChannels || 1;
		  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
		      (channels !== 1 ? '/' + channels : '') + '\r\n';
		};

		// Parses a extmap line (headerextension from RFC 5285). Sample input:
		// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
		// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
		SDPUtils.parseExtmap = function(line) {
		  const parts = line.substring(9).split(' ');
		  return {
		    id: parseInt(parts[0], 10),
		    direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
		    uri: parts[1],
		    attributes: parts.slice(2).join(' '),
		  };
		};

		// Generates an extmap line from RTCRtpHeaderExtensionParameters or
		// RTCRtpHeaderExtension.
		SDPUtils.writeExtmap = function(headerExtension) {
		  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
		      (headerExtension.direction && headerExtension.direction !== 'sendrecv'
		        ? '/' + headerExtension.direction
		        : '') +
		      ' ' + headerExtension.uri +
		      (headerExtension.attributes ? ' ' + headerExtension.attributes : '') +
		      '\r\n';
		};

		// Parses a fmtp line, returns dictionary. Sample input:
		// a=fmtp:96 vbr=on;cng=on
		// Also deals with vbr=on; cng=on
		SDPUtils.parseFmtp = function(line) {
		  const parsed = {};
		  let kv;
		  const parts = line.substring(line.indexOf(' ') + 1).split(';');
		  for (let j = 0; j < parts.length; j++) {
		    kv = parts[j].trim().split('=');
		    parsed[kv[0].trim()] = kv[1];
		  }
		  return parsed;
		};

		// Generates a fmtp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
		SDPUtils.writeFmtp = function(codec) {
		  let line = '';
		  let pt = codec.payloadType;
		  if (codec.preferredPayloadType !== undefined) {
		    pt = codec.preferredPayloadType;
		  }
		  if (codec.parameters && Object.keys(codec.parameters).length) {
		    const params = [];
		    Object.keys(codec.parameters).forEach(param => {
		      if (codec.parameters[param] !== undefined) {
		        params.push(param + '=' + codec.parameters[param]);
		      } else {
		        params.push(param);
		      }
		    });
		    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
		  }
		  return line;
		};

		// Parses a rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
		// a=rtcp-fb:98 nack rpsi
		SDPUtils.parseRtcpFb = function(line) {
		  const parts = line.substring(line.indexOf(' ') + 1).split(' ');
		  return {
		    type: parts.shift(),
		    parameter: parts.join(' '),
		  };
		};

		// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
		SDPUtils.writeRtcpFb = function(codec) {
		  let lines = '';
		  let pt = codec.payloadType;
		  if (codec.preferredPayloadType !== undefined) {
		    pt = codec.preferredPayloadType;
		  }
		  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
		    // FIXME: special handling for trr-int?
		    codec.rtcpFeedback.forEach(fb => {
		      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
		      (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
		          '\r\n';
		    });
		  }
		  return lines;
		};

		// Parses a RFC 5576 ssrc media attribute. Sample input:
		// a=ssrc:3735928559 cname:something
		SDPUtils.parseSsrcMedia = function(line) {
		  const sp = line.indexOf(' ');
		  const parts = {
		    ssrc: parseInt(line.substring(7, sp), 10),
		  };
		  const colon = line.indexOf(':', sp);
		  if (colon > -1) {
		    parts.attribute = line.substring(sp + 1, colon);
		    parts.value = line.substring(colon + 1);
		  } else {
		    parts.attribute = line.substring(sp + 1);
		  }
		  return parts;
		};

		// Parse a ssrc-group line (see RFC 5576). Sample input:
		// a=ssrc-group:semantics 12 34
		SDPUtils.parseSsrcGroup = function(line) {
		  const parts = line.substring(13).split(' ');
		  return {
		    semantics: parts.shift(),
		    ssrcs: parts.map(ssrc => parseInt(ssrc, 10)),
		  };
		};

		// Extracts the MID (RFC 5888) from a media section.
		// Returns the MID or undefined if no mid line was found.
		SDPUtils.getMid = function(mediaSection) {
		  const mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
		  if (mid) {
		    return mid.substring(6);
		  }
		};

		// Parses a fingerprint line for DTLS-SRTP.
		SDPUtils.parseFingerprint = function(line) {
		  const parts = line.substring(14).split(' ');
		  return {
		    algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
		    value: parts[1].toUpperCase(), // the definition is upper-case in RFC 4572.
		  };
		};

		// Extracts DTLS parameters from SDP media section or sessionpart.
		// FIXME: for consistency with other functions this should only
		//   get the fingerprint line as input. See also getIceParameters.
		SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
		  const lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
		    'a=fingerprint:');
		  // Note: a=setup line is ignored since we use the 'auto' role in Edge.
		  return {
		    role: 'auto',
		    fingerprints: lines.map(SDPUtils.parseFingerprint),
		  };
		};

		// Serializes DTLS parameters to SDP.
		SDPUtils.writeDtlsParameters = function(params, setupType) {
		  let sdp = 'a=setup:' + setupType + '\r\n';
		  params.fingerprints.forEach(fp => {
		    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
		  });
		  return sdp;
		};

		// Parses a=crypto lines into
		//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#dictionary-rtcsrtpsdesparameters-members
		SDPUtils.parseCryptoLine = function(line) {
		  const parts = line.substring(9).split(' ');
		  return {
		    tag: parseInt(parts[0], 10),
		    cryptoSuite: parts[1],
		    keyParams: parts[2],
		    sessionParams: parts.slice(3),
		  };
		};

		SDPUtils.writeCryptoLine = function(parameters) {
		  return 'a=crypto:' + parameters.tag + ' ' +
		    parameters.cryptoSuite + ' ' +
		    (typeof parameters.keyParams === 'object'
		      ? SDPUtils.writeCryptoKeyParams(parameters.keyParams)
		      : parameters.keyParams) +
		    (parameters.sessionParams ? ' ' + parameters.sessionParams.join(' ') : '') +
		    '\r\n';
		};

		// Parses the crypto key parameters into
		//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#rtcsrtpkeyparam*
		SDPUtils.parseCryptoKeyParams = function(keyParams) {
		  if (keyParams.indexOf('inline:') !== 0) {
		    return null;
		  }
		  const parts = keyParams.substring(7).split('|');
		  return {
		    keyMethod: 'inline',
		    keySalt: parts[0],
		    lifeTime: parts[1],
		    mkiValue: parts[2] ? parts[2].split(':')[0] : undefined,
		    mkiLength: parts[2] ? parts[2].split(':')[1] : undefined,
		  };
		};

		SDPUtils.writeCryptoKeyParams = function(keyParams) {
		  return keyParams.keyMethod + ':'
		    + keyParams.keySalt +
		    (keyParams.lifeTime ? '|' + keyParams.lifeTime : '') +
		    (keyParams.mkiValue && keyParams.mkiLength
		      ? '|' + keyParams.mkiValue + ':' + keyParams.mkiLength
		      : '');
		};

		// Extracts all SDES parameters.
		SDPUtils.getCryptoParameters = function(mediaSection, sessionpart) {
		  const lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
		    'a=crypto:');
		  return lines.map(SDPUtils.parseCryptoLine);
		};

		// Parses ICE information from SDP media section or sessionpart.
		// FIXME: for consistency with other functions this should only
		//   get the ice-ufrag and ice-pwd lines as input.
		SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
		  const ufrag = SDPUtils.matchPrefix(mediaSection + sessionpart,
		    'a=ice-ufrag:')[0];
		  const pwd = SDPUtils.matchPrefix(mediaSection + sessionpart,
		    'a=ice-pwd:')[0];
		  if (!(ufrag && pwd)) {
		    return null;
		  }
		  return {
		    usernameFragment: ufrag.substring(12),
		    password: pwd.substring(10),
		  };
		};

		// Serializes ICE parameters to SDP.
		SDPUtils.writeIceParameters = function(params) {
		  let sdp = 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
		      'a=ice-pwd:' + params.password + '\r\n';
		  if (params.iceLite) {
		    sdp += 'a=ice-lite\r\n';
		  }
		  return sdp;
		};

		// Parses the SDP media section and returns RTCRtpParameters.
		SDPUtils.parseRtpParameters = function(mediaSection) {
		  const description = {
		    codecs: [],
		    headerExtensions: [],
		    fecMechanisms: [],
		    rtcp: [],
		  };
		  const lines = SDPUtils.splitLines(mediaSection);
		  const mline = lines[0].split(' ');
		  description.profile = mline[2];
		  for (let i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
		    const pt = mline[i];
		    const rtpmapline = SDPUtils.matchPrefix(
		      mediaSection, 'a=rtpmap:' + pt + ' ')[0];
		    if (rtpmapline) {
		      const codec = SDPUtils.parseRtpMap(rtpmapline);
		      const fmtps = SDPUtils.matchPrefix(
		        mediaSection, 'a=fmtp:' + pt + ' ');
		      // Only the first a=fmtp:<pt> is considered.
		      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
		      codec.rtcpFeedback = SDPUtils.matchPrefix(
		        mediaSection, 'a=rtcp-fb:' + pt + ' ')
		        .map(SDPUtils.parseRtcpFb);
		      description.codecs.push(codec);
		      // parse FEC mechanisms from rtpmap lines.
		      switch (codec.name.toUpperCase()) {
		        case 'RED':
		        case 'ULPFEC':
		          description.fecMechanisms.push(codec.name.toUpperCase());
		          break;
		      }
		    }
		  }
		  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(line => {
		    description.headerExtensions.push(SDPUtils.parseExtmap(line));
		  });
		  const wildcardRtcpFb = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-fb:* ')
		    .map(SDPUtils.parseRtcpFb);
		  description.codecs.forEach(codec => {
		    wildcardRtcpFb.forEach(fb=> {
		      const duplicate = codec.rtcpFeedback.find(existingFeedback => {
		        return existingFeedback.type === fb.type &&
		          existingFeedback.parameter === fb.parameter;
		      });
		      if (!duplicate) {
		        codec.rtcpFeedback.push(fb);
		      }
		    });
		  });
		  // FIXME: parse rtcp.
		  return description;
		};

		// Generates parts of the SDP media section describing the capabilities /
		// parameters.
		SDPUtils.writeRtpDescription = function(kind, caps) {
		  let sdp = '';

		  // Build the mline.
		  sdp += 'm=' + kind + ' ';
		  sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
		  sdp += ' ' + (caps.profile || 'UDP/TLS/RTP/SAVPF') + ' ';
		  sdp += caps.codecs.map(codec => {
		    if (codec.preferredPayloadType !== undefined) {
		      return codec.preferredPayloadType;
		    }
		    return codec.payloadType;
		  }).join(' ') + '\r\n';

		  sdp += 'c=IN IP4 0.0.0.0\r\n';
		  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

		  // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
		  caps.codecs.forEach(codec => {
		    sdp += SDPUtils.writeRtpMap(codec);
		    sdp += SDPUtils.writeFmtp(codec);
		    sdp += SDPUtils.writeRtcpFb(codec);
		  });
		  let maxptime = 0;
		  caps.codecs.forEach(codec => {
		    if (codec.maxptime > maxptime) {
		      maxptime = codec.maxptime;
		    }
		  });
		  if (maxptime > 0) {
		    sdp += 'a=maxptime:' + maxptime + '\r\n';
		  }

		  if (caps.headerExtensions) {
		    caps.headerExtensions.forEach(extension => {
		      sdp += SDPUtils.writeExtmap(extension);
		    });
		  }
		  // FIXME: write fecMechanisms.
		  return sdp;
		};

		// Parses the SDP media section and returns an array of
		// RTCRtpEncodingParameters.
		SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
		  const encodingParameters = [];
		  const description = SDPUtils.parseRtpParameters(mediaSection);
		  const hasRed = description.fecMechanisms.indexOf('RED') !== -1;
		  const hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

		  // filter a=ssrc:... cname:, ignore PlanB-msid
		  const ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
		    .map(line => SDPUtils.parseSsrcMedia(line))
		    .filter(parts => parts.attribute === 'cname');
		  const primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
		  let secondarySsrc;

		  const flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
		    .map(line => {
		      const parts = line.substring(17).split(' ');
		      return parts.map(part => parseInt(part, 10));
		    });
		  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
		    secondarySsrc = flows[0][1];
		  }

		  description.codecs.forEach(codec => {
		    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
		      let encParam = {
		        ssrc: primarySsrc,
		        codecPayloadType: parseInt(codec.parameters.apt, 10),
		      };
		      if (primarySsrc && secondarySsrc) {
		        encParam.rtx = {ssrc: secondarySsrc};
		      }
		      encodingParameters.push(encParam);
		      if (hasRed) {
		        encParam = JSON.parse(JSON.stringify(encParam));
		        encParam.fec = {
		          ssrc: primarySsrc,
		          mechanism: hasUlpfec ? 'red+ulpfec' : 'red',
		        };
		        encodingParameters.push(encParam);
		      }
		    }
		  });
		  if (encodingParameters.length === 0 && primarySsrc) {
		    encodingParameters.push({
		      ssrc: primarySsrc,
		    });
		  }

		  // we support both b=AS and b=TIAS but interpret AS as TIAS.
		  let bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
		  if (bandwidth.length) {
		    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
		      bandwidth = parseInt(bandwidth[0].substring(7), 10);
		    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
		      // use formula from JSEP to convert b=AS to TIAS value.
		      bandwidth = parseInt(bandwidth[0].substring(5), 10) * 1000 * 0.95
		          - (50 * 40 * 8);
		    } else {
		      bandwidth = undefined;
		    }
		    encodingParameters.forEach(params => {
		      params.maxBitrate = bandwidth;
		    });
		  }
		  return encodingParameters;
		};

		// parses http://draft.ortc.org/#rtcrtcpparameters*
		SDPUtils.parseRtcpParameters = function(mediaSection) {
		  const rtcpParameters = {};

		  // Gets the first SSRC. Note that with RTX there might be multiple
		  // SSRCs.
		  const remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
		    .map(line => SDPUtils.parseSsrcMedia(line))
		    .filter(obj => obj.attribute === 'cname')[0];
		  if (remoteSsrc) {
		    rtcpParameters.cname = remoteSsrc.value;
		    rtcpParameters.ssrc = remoteSsrc.ssrc;
		  }

		  // Edge uses the compound attribute instead of reducedSize
		  // compound is !reducedSize
		  const rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
		  rtcpParameters.reducedSize = rsize.length > 0;
		  rtcpParameters.compound = rsize.length === 0;

		  // parses the rtcp-mux attrіbute.
		  // Note that Edge does not support unmuxed RTCP.
		  const mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
		  rtcpParameters.mux = mux.length > 0;

		  return rtcpParameters;
		};

		SDPUtils.writeRtcpParameters = function(rtcpParameters) {
		  let sdp = '';
		  if (rtcpParameters.reducedSize) {
		    sdp += 'a=rtcp-rsize\r\n';
		  }
		  if (rtcpParameters.mux) {
		    sdp += 'a=rtcp-mux\r\n';
		  }
		  if (rtcpParameters.ssrc !== undefined && rtcpParameters.cname) {
		    sdp += 'a=ssrc:' + rtcpParameters.ssrc +
		      ' cname:' + rtcpParameters.cname + '\r\n';
		  }
		  return sdp;
		};


		// parses either a=msid: or a=ssrc:... msid lines and returns
		// the id of the MediaStream and MediaStreamTrack.
		SDPUtils.parseMsid = function(mediaSection) {
		  let parts;
		  const spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
		  if (spec.length === 1) {
		    parts = spec[0].substring(7).split(' ');
		    return {stream: parts[0], track: parts[1]};
		  }
		  const planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
		    .map(line => SDPUtils.parseSsrcMedia(line))
		    .filter(msidParts => msidParts.attribute === 'msid');
		  if (planB.length > 0) {
		    parts = planB[0].value.split(' ');
		    return {stream: parts[0], track: parts[1]};
		  }
		};

		// SCTP
		// parses draft-ietf-mmusic-sctp-sdp-26 first and falls back
		// to draft-ietf-mmusic-sctp-sdp-05
		SDPUtils.parseSctpDescription = function(mediaSection) {
		  const mline = SDPUtils.parseMLine(mediaSection);
		  const maxSizeLine = SDPUtils.matchPrefix(mediaSection, 'a=max-message-size:');
		  let maxMessageSize;
		  if (maxSizeLine.length > 0) {
		    maxMessageSize = parseInt(maxSizeLine[0].substring(19), 10);
		  }
		  if (isNaN(maxMessageSize)) {
		    maxMessageSize = 65536;
		  }
		  const sctpPort = SDPUtils.matchPrefix(mediaSection, 'a=sctp-port:');
		  if (sctpPort.length > 0) {
		    return {
		      port: parseInt(sctpPort[0].substring(12), 10),
		      protocol: mline.fmt,
		      maxMessageSize,
		    };
		  }
		  const sctpMapLines = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:');
		  if (sctpMapLines.length > 0) {
		    const parts = sctpMapLines[0]
		      .substring(10)
		      .split(' ');
		    return {
		      port: parseInt(parts[0], 10),
		      protocol: parts[1],
		      maxMessageSize,
		    };
		  }
		};

		// SCTP
		// outputs the draft-ietf-mmusic-sctp-sdp-26 version that all browsers
		// support by now receiving in this format, unless we originally parsed
		// as the draft-ietf-mmusic-sctp-sdp-05 format (indicated by the m-line
		// protocol of DTLS/SCTP -- without UDP/ or TCP/)
		SDPUtils.writeSctpDescription = function(media, sctp) {
		  let output = [];
		  if (media.protocol !== 'DTLS/SCTP') {
		    output = [
		      'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.protocol + '\r\n',
		      'c=IN IP4 0.0.0.0\r\n',
		      'a=sctp-port:' + sctp.port + '\r\n',
		    ];
		  } else {
		    output = [
		      'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.port + '\r\n',
		      'c=IN IP4 0.0.0.0\r\n',
		      'a=sctpmap:' + sctp.port + ' ' + sctp.protocol + ' 65535\r\n',
		    ];
		  }
		  if (sctp.maxMessageSize !== undefined) {
		    output.push('a=max-message-size:' + sctp.maxMessageSize + '\r\n');
		  }
		  return output.join('');
		};

		// Generate a session ID for SDP.
		// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
		// recommends using a cryptographically random +ve 64-bit value
		// but right now this should be acceptable and within the right range
		SDPUtils.generateSessionId = function() {
		  return Math.random().toString().substr(2, 22);
		};

		// Write boiler plate for start of SDP
		// sessId argument is optional - if not supplied it will
		// be generated randomly
		// sessVersion is optional and defaults to 2
		// sessUser is optional and defaults to 'thisisadapterortc'
		SDPUtils.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
		  let sessionId;
		  const version = sessVer !== undefined ? sessVer : 2;
		  if (sessId) {
		    sessionId = sessId;
		  } else {
		    sessionId = SDPUtils.generateSessionId();
		  }
		  const user = sessUser || 'thisisadapterortc';
		  // FIXME: sess-id should be an NTP timestamp.
		  return 'v=0\r\n' +
		      'o=' + user + ' ' + sessionId + ' ' + version +
		        ' IN IP4 127.0.0.1\r\n' +
		      's=-\r\n' +
		      't=0 0\r\n';
		};

		// Gets the direction from the mediaSection or the sessionpart.
		SDPUtils.getDirection = function(mediaSection, sessionpart) {
		  // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
		  const lines = SDPUtils.splitLines(mediaSection);
		  for (let i = 0; i < lines.length; i++) {
		    switch (lines[i]) {
		      case 'a=sendrecv':
		      case 'a=sendonly':
		      case 'a=recvonly':
		      case 'a=inactive':
		        return lines[i].substring(2);
		        // FIXME: What should happen here?
		    }
		  }
		  if (sessionpart) {
		    return SDPUtils.getDirection(sessionpart);
		  }
		  return 'sendrecv';
		};

		SDPUtils.getKind = function(mediaSection) {
		  const lines = SDPUtils.splitLines(mediaSection);
		  const mline = lines[0].split(' ');
		  return mline[0].substring(2);
		};

		SDPUtils.isRejected = function(mediaSection) {
		  return mediaSection.split(' ', 2)[1] === '0';
		};

		SDPUtils.parseMLine = function(mediaSection) {
		  const lines = SDPUtils.splitLines(mediaSection);
		  const parts = lines[0].substring(2).split(' ');
		  return {
		    kind: parts[0],
		    port: parseInt(parts[1], 10),
		    protocol: parts[2],
		    fmt: parts.slice(3).join(' '),
		  };
		};

		SDPUtils.parseOLine = function(mediaSection) {
		  const line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
		  const parts = line.substring(2).split(' ');
		  return {
		    username: parts[0],
		    sessionId: parts[1],
		    sessionVersion: parseInt(parts[2], 10),
		    netType: parts[3],
		    addressType: parts[4],
		    address: parts[5],
		  };
		};

		// a very naive interpretation of a valid SDP.
		SDPUtils.isValidSDP = function(blob) {
		  if (typeof blob !== 'string' || blob.length === 0) {
		    return false;
		  }
		  const lines = SDPUtils.splitLines(blob);
		  for (let i = 0; i < lines.length; i++) {
		    if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
		      return false;
		    }
		    // TODO: check the modifier a bit more.
		  }
		  return true;
		};

		// Expose public methods.
		{
		  module.exports = SDPUtils;
		} 
	} (sdp$1));
	return sdp$1.exports;
}

var sdpExports = requireSdp();
const SDPUtils = /*@__PURE__*/getDefaultExportFromCjs$1(sdpExports);

const sdp = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: SDPUtils
}, [sdpExports]);

/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */

function shimRTCIceCandidate(window) {
  // foundation is arbitrarily chosen as an indicator for full support for
  // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
  if (!window.RTCIceCandidate || (window.RTCIceCandidate && 'foundation' in
      window.RTCIceCandidate.prototype)) {
    return;
  }

  const NativeRTCIceCandidate = window.RTCIceCandidate;
  window.RTCIceCandidate = function RTCIceCandidate(args) {
    // Remove the a= which shouldn't be part of the candidate string.
    if (typeof args === 'object' && args.candidate &&
        args.candidate.indexOf('a=') === 0) {
      args = JSON.parse(JSON.stringify(args));
      args.candidate = args.candidate.substring(2);
    }

    if (args.candidate && args.candidate.length) {
      // Augment the native candidate with the parsed fields.
      const nativeCandidate = new NativeRTCIceCandidate(args);
      const parsedCandidate = SDPUtils.parseCandidate(args.candidate);
      for (const key in parsedCandidate) {
        if (!(key in nativeCandidate)) {
          Object.defineProperty(nativeCandidate, key,
            {value: parsedCandidate[key]});
        }
      }

      // Override serializer to not serialize the extra attributes.
      nativeCandidate.toJSON = function toJSON() {
        return {
          candidate: nativeCandidate.candidate,
          sdpMid: nativeCandidate.sdpMid,
          sdpMLineIndex: nativeCandidate.sdpMLineIndex,
          usernameFragment: nativeCandidate.usernameFragment,
        };
      };
      return nativeCandidate;
    }
    return new NativeRTCIceCandidate(args);
  };
  window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;

  // Hook up the augmented candidate in onicecandidate and
  // addEventListener('icecandidate', ...)
  wrapPeerConnectionEvent(window, 'icecandidate', e => {
    if (e.candidate) {
      Object.defineProperty(e, 'candidate', {
        value: new window.RTCIceCandidate(e.candidate),
        writable: 'false'
      });
    }
    return e;
  });
}

function shimRTCIceCandidateRelayProtocol(window) {
  if (!window.RTCIceCandidate || (window.RTCIceCandidate && 'relayProtocol' in
      window.RTCIceCandidate.prototype)) {
    return;
  }

  // Hook up the augmented candidate in onicecandidate and
  // addEventListener('icecandidate', ...)
  wrapPeerConnectionEvent(window, 'icecandidate', e => {
    if (e.candidate) {
      const parsedCandidate = SDPUtils.parseCandidate(e.candidate.candidate);
      if (parsedCandidate.type === 'relay') {
        // This is a libwebrtc-specific mapping of local type preference
        // to relayProtocol.
        e.candidate.relayProtocol = {
          0: 'tls',
          1: 'tcp',
          2: 'udp',
        }[parsedCandidate.priority >> 24];
      }
    }
    return e;
  });
}

function shimMaxMessageSize(window, browserDetails) {
  if (!window.RTCPeerConnection) {
    return;
  }

  if (!('sctp' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
      get() {
        return typeof this._sctp === 'undefined' ? null : this._sctp;
      }
    });
  }

  const sctpInDescription = function(description) {
    if (!description || !description.sdp) {
      return false;
    }
    const sections = SDPUtils.splitSections(description.sdp);
    sections.shift();
    return sections.some(mediaSection => {
      const mLine = SDPUtils.parseMLine(mediaSection);
      return mLine && mLine.kind === 'application'
          && mLine.protocol.indexOf('SCTP') !== -1;
    });
  };

  const getRemoteFirefoxVersion = function(description) {
    // TODO: Is there a better solution for detecting Firefox?
    const match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
    if (match === null || match.length < 2) {
      return -1;
    }
    const version = parseInt(match[1], 10);
    // Test for NaN (yes, this is ugly)
    return version !== version ? -1 : version;
  };

  const getCanSendMaxMessageSize = function(remoteIsFirefox) {
    // Every implementation we know can send at least 64 KiB.
    // Note: Although Chrome is technically able to send up to 256 KiB, the
    //       data does not reach the other peer reliably.
    //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
    let canSendMaxMessageSize = 65536;
    if (browserDetails.browser === 'firefox') {
      if (browserDetails.version < 57) {
        if (remoteIsFirefox === -1) {
          // FF < 57 will send in 16 KiB chunks using the deprecated PPID
          // fragmentation.
          canSendMaxMessageSize = 16384;
        } else {
          // However, other FF (and RAWRTC) can reassemble PPID-fragmented
          // messages. Thus, supporting ~2 GiB when sending.
          canSendMaxMessageSize = 2147483637;
        }
      } else if (browserDetails.version < 60) {
        // Currently, all FF >= 57 will reset the remote maximum message size
        // to the default value when a data channel is created at a later
        // stage. :(
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
        canSendMaxMessageSize =
          browserDetails.version === 57 ? 65535 : 65536;
      } else {
        // FF >= 60 supports sending ~2 GiB
        canSendMaxMessageSize = 2147483637;
      }
    }
    return canSendMaxMessageSize;
  };

  const getMaxMessageSize = function(description, remoteIsFirefox) {
    // Note: 65536 bytes is the default value from the SDP spec. Also,
    //       every implementation we know supports receiving 65536 bytes.
    let maxMessageSize = 65536;

    // FF 57 has a slightly incorrect default remote max message size, so
    // we need to adjust it here to avoid a failure when sending.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
    if (browserDetails.browser === 'firefox'
         && browserDetails.version === 57) {
      maxMessageSize = 65535;
    }

    const match = SDPUtils.matchPrefix(description.sdp,
      'a=max-message-size:');
    if (match.length > 0) {
      maxMessageSize = parseInt(match[0].substring(19), 10);
    } else if (browserDetails.browser === 'firefox' &&
                remoteIsFirefox !== -1) {
      // If the maximum message size is not present in the remote SDP and
      // both local and remote are Firefox, the remote peer can receive
      // ~2 GiB.
      maxMessageSize = 2147483637;
    }
    return maxMessageSize;
  };

  const origSetRemoteDescription =
      window.RTCPeerConnection.prototype.setRemoteDescription;
  window.RTCPeerConnection.prototype.setRemoteDescription =
    function setRemoteDescription() {
      this._sctp = null;
      // Chrome decided to not expose .sctp in plan-b mode.
      // As usual, adapter.js has to do an 'ugly worakaround'
      // to cover up the mess.
      if (browserDetails.browser === 'chrome' && browserDetails.version >= 76) {
        const {sdpSemantics} = this.getConfiguration();
        if (sdpSemantics === 'plan-b') {
          Object.defineProperty(this, 'sctp', {
            get() {
              return typeof this._sctp === 'undefined' ? null : this._sctp;
            },
            enumerable: true,
            configurable: true,
          });
        }
      }

      if (sctpInDescription(arguments[0])) {
        // Check if the remote is FF.
        const isFirefox = getRemoteFirefoxVersion(arguments[0]);

        // Get the maximum message size the local peer is capable of sending
        const canSendMMS = getCanSendMaxMessageSize(isFirefox);

        // Get the maximum message size of the remote peer.
        const remoteMMS = getMaxMessageSize(arguments[0], isFirefox);

        // Determine final maximum message size
        let maxMessageSize;
        if (canSendMMS === 0 && remoteMMS === 0) {
          maxMessageSize = Number.POSITIVE_INFINITY;
        } else if (canSendMMS === 0 || remoteMMS === 0) {
          maxMessageSize = Math.max(canSendMMS, remoteMMS);
        } else {
          maxMessageSize = Math.min(canSendMMS, remoteMMS);
        }

        // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
        // attribute.
        const sctp = {};
        Object.defineProperty(sctp, 'maxMessageSize', {
          get() {
            return maxMessageSize;
          }
        });
        this._sctp = sctp;
      }

      return origSetRemoteDescription.apply(this, arguments);
    };
}

function shimSendThrowTypeError(window) {
  if (!(window.RTCPeerConnection &&
      'createDataChannel' in window.RTCPeerConnection.prototype)) {
    return;
  }

  // Note: Although Firefox >= 57 has a native implementation, the maximum
  //       message size can be reset for all data channels at a later stage.
  //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831

  function wrapDcSend(dc, pc) {
    const origDataChannelSend = dc.send;
    dc.send = function send() {
      const data = arguments[0];
      const length = data.length || data.size || data.byteLength;
      if (dc.readyState === 'open' &&
          pc.sctp && length > pc.sctp.maxMessageSize) {
        throw new TypeError('Message too large (can send a maximum of ' +
          pc.sctp.maxMessageSize + ' bytes)');
      }
      return origDataChannelSend.apply(dc, arguments);
    };
  }
  const origCreateDataChannel =
    window.RTCPeerConnection.prototype.createDataChannel;
  window.RTCPeerConnection.prototype.createDataChannel =
    function createDataChannel() {
      const dataChannel = origCreateDataChannel.apply(this, arguments);
      wrapDcSend(dataChannel, this);
      return dataChannel;
    };
  wrapPeerConnectionEvent(window, 'datachannel', e => {
    wrapDcSend(e.channel, e.target);
    return e;
  });
}


/* shims RTCConnectionState by pretending it is the same as iceConnectionState.
 * See https://bugs.chromium.org/p/webrtc/issues/detail?id=6145#c12
 * for why this is a valid hack in Chrome. In Firefox it is slightly incorrect
 * since DTLS failures would be hidden. See
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1265827
 * for the Firefox tracking bug.
 */
function shimConnectionState(window) {
  if (!window.RTCPeerConnection ||
      'connectionState' in window.RTCPeerConnection.prototype) {
    return;
  }
  const proto = window.RTCPeerConnection.prototype;
  Object.defineProperty(proto, 'connectionState', {
    get() {
      return {
        completed: 'connected',
        checking: 'connecting'
      }[this.iceConnectionState] || this.iceConnectionState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(proto, 'onconnectionstatechange', {
    get() {
      return this._onconnectionstatechange || null;
    },
    set(cb) {
      if (this._onconnectionstatechange) {
        this.removeEventListener('connectionstatechange',
          this._onconnectionstatechange);
        delete this._onconnectionstatechange;
      }
      if (cb) {
        this.addEventListener('connectionstatechange',
          this._onconnectionstatechange = cb);
      }
    },
    enumerable: true,
    configurable: true
  });

  ['setLocalDescription', 'setRemoteDescription'].forEach((method) => {
    const origMethod = proto[method];
    proto[method] = function() {
      if (!this._connectionstatechangepoly) {
        this._connectionstatechangepoly = e => {
          const pc = e.target;
          if (pc._lastConnectionState !== pc.connectionState) {
            pc._lastConnectionState = pc.connectionState;
            const newEvent = new Event('connectionstatechange', e);
            pc.dispatchEvent(newEvent);
          }
          return e;
        };
        this.addEventListener('iceconnectionstatechange',
          this._connectionstatechangepoly);
      }
      return origMethod.apply(this, arguments);
    };
  });
}

function removeExtmapAllowMixed(window, browserDetails) {
  /* remove a=extmap-allow-mixed for webrtc.org < M71 */
  if (!window.RTCPeerConnection) {
    return;
  }
  if (browserDetails.browser === 'chrome' && browserDetails.version >= 71) {
    return;
  }
  if (browserDetails.browser === 'safari' && browserDetails.version >= 605) {
    return;
  }
  const nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;
  window.RTCPeerConnection.prototype.setRemoteDescription =
  function setRemoteDescription(desc) {
    if (desc && desc.sdp && desc.sdp.indexOf('\na=extmap-allow-mixed') !== -1) {
      const sdp = desc.sdp.split('\n').filter((line) => {
        return line.trim() !== 'a=extmap-allow-mixed';
      }).join('\n');
      // Safari enforces read-only-ness of RTCSessionDescription fields.
      if (window.RTCSessionDescription &&
          desc instanceof window.RTCSessionDescription) {
        arguments[0] = new window.RTCSessionDescription({
          type: desc.type,
          sdp,
        });
      } else {
        desc.sdp = sdp;
      }
    }
    return nativeSRD.apply(this, arguments);
  };
}

function shimAddIceCandidateNullOrEmpty(window, browserDetails) {
  // Support for addIceCandidate(null or undefined)
  // as well as addIceCandidate({candidate: "", ...})
  // https://bugs.chromium.org/p/chromium/issues/detail?id=978582
  // Note: must be called before other polyfills which change the signature.
  if (!(window.RTCPeerConnection && window.RTCPeerConnection.prototype)) {
    return;
  }
  const nativeAddIceCandidate =
      window.RTCPeerConnection.prototype.addIceCandidate;
  if (!nativeAddIceCandidate || nativeAddIceCandidate.length === 0) {
    return;
  }
  window.RTCPeerConnection.prototype.addIceCandidate =
    function addIceCandidate() {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      // Firefox 68+ emits and processes {candidate: "", ...}, ignore
      // in older versions.
      // Native support for ignoring exists for Chrome M77+.
      // Safari ignores as well, exact version unknown but works in the same
      // version that also ignores addIceCandidate(null).
      if (((browserDetails.browser === 'chrome' && browserDetails.version < 78)
           || (browserDetails.browser === 'firefox'
               && browserDetails.version < 68)
           || (browserDetails.browser === 'safari'))
          && arguments[0] && arguments[0].candidate === '') {
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };
}

// Note: Make sure to call this ahead of APIs that modify
// setLocalDescription.length
function shimParameterlessSetLocalDescription(window, browserDetails) {
  if (!(window.RTCPeerConnection && window.RTCPeerConnection.prototype)) {
    return;
  }
  const nativeSetLocalDescription =
      window.RTCPeerConnection.prototype.setLocalDescription;
  if (!nativeSetLocalDescription || nativeSetLocalDescription.length === 0) {
    return;
  }
  window.RTCPeerConnection.prototype.setLocalDescription =
    function setLocalDescription() {
      let desc = arguments[0] || {};
      if (typeof desc !== 'object' || (desc.type && desc.sdp)) {
        return nativeSetLocalDescription.apply(this, arguments);
      }
      // The remaining steps should technically happen when SLD comes off the
      // RTCPeerConnection's operations chain (not ahead of going on it), but
      // this is too difficult to shim. Instead, this shim only covers the
      // common case where the operations chain is empty. This is imperfect, but
      // should cover many cases. Rationale: Even if we can't reduce the glare
      // window to zero on imperfect implementations, there's value in tapping
      // into the perfect negotiation pattern that several browsers support.
      desc = {type: desc.type, sdp: desc.sdp};
      if (!desc.type) {
        switch (this.signalingState) {
          case 'stable':
          case 'have-local-offer':
          case 'have-remote-pranswer':
            desc.type = 'offer';
            break;
          default:
            desc.type = 'answer';
            break;
        }
      }
      if (desc.sdp || (desc.type !== 'offer' && desc.type !== 'answer')) {
        return nativeSetLocalDescription.apply(this, [desc]);
      }
      const func = desc.type === 'offer' ? this.createOffer : this.createAnswer;
      return func.apply(this)
        .then(d => nativeSetLocalDescription.apply(this, [d]));
    };
}

const commonShim = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	removeExtmapAllowMixed,
	shimAddIceCandidateNullOrEmpty,
	shimConnectionState,
	shimMaxMessageSize,
	shimParameterlessSetLocalDescription,
	shimRTCIceCandidate,
	shimRTCIceCandidateRelayProtocol,
	shimSendThrowTypeError
}, Symbol.toStringTag, { value: 'Module' }));

function adapterFactory({ window } = {}, options = {
  shimChrome: true,
  shimFirefox: true,
  shimSafari: true
}) {
  const logging = log;
  const browserDetails = detectBrowser(window);
  const adapter = {
    browserDetails,
    commonShim,
    extractVersion: extractVersion,
    disableLog: disableLog,
    disableWarnings: disableWarnings,
    // Expose sdp as a convenience. For production apps include directly.
    sdp
  };
  switch (browserDetails.browser) {
    case "chrome":
      if (!chromeShim || !shimPeerConnection$1 || !options.shimChrome) {
        logging("Chrome shim is not included in this adapter release.");
        return adapter;
      }
      if (browserDetails.version === null) {
        logging("Chrome shim can not determine version, not shimming.");
        return adapter;
      }
      logging("adapter.js shimming chrome.");
      adapter.browserShim = chromeShim;
      shimAddIceCandidateNullOrEmpty(window, browserDetails);
      shimParameterlessSetLocalDescription(window);
      shimGetUserMedia$2(window, browserDetails);
      shimMediaStream(window);
      shimPeerConnection$1(window, browserDetails);
      shimOnTrack$1(window);
      shimAddTrackRemoveTrack(window, browserDetails);
      shimGetSendersWithDtmf(window);
      shimSenderReceiverGetStats(window);
      fixNegotiationNeeded(window, browserDetails);
      shimRTCIceCandidate(window);
      shimRTCIceCandidateRelayProtocol(window);
      shimConnectionState(window);
      shimMaxMessageSize(window, browserDetails);
      shimSendThrowTypeError(window);
      removeExtmapAllowMixed(window, browserDetails);
      break;
    case "firefox":
      if (!firefoxShim || !shimPeerConnection || !options.shimFirefox) {
        logging("Firefox shim is not included in this adapter release.");
        return adapter;
      }
      logging("adapter.js shimming firefox.");
      adapter.browserShim = firefoxShim;
      shimAddIceCandidateNullOrEmpty(window, browserDetails);
      shimParameterlessSetLocalDescription(window);
      shimGetUserMedia$1(window, browserDetails);
      shimPeerConnection(window, browserDetails);
      shimOnTrack(window);
      shimRemoveStream(window);
      shimSenderGetStats(window);
      shimReceiverGetStats(window);
      shimRTCDataChannel(window);
      shimAddTransceiver(window);
      shimGetParameters(window);
      shimCreateOffer(window);
      shimCreateAnswer(window);
      shimRTCIceCandidate(window);
      shimConnectionState(window);
      shimMaxMessageSize(window, browserDetails);
      shimSendThrowTypeError(window);
      break;
    case "safari":
      if (!safariShim || !options.shimSafari) {
        logging("Safari shim is not included in this adapter release.");
        return adapter;
      }
      logging("adapter.js shimming safari.");
      adapter.browserShim = safariShim;
      shimAddIceCandidateNullOrEmpty(window, browserDetails);
      shimParameterlessSetLocalDescription(window);
      shimRTCIceServerUrls(window);
      shimCreateOfferLegacy(window);
      shimCallbacksAPI(window);
      shimLocalStreamsAPI(window);
      shimRemoteStreamsAPI(window);
      shimTrackEventTransceiver(window);
      shimGetUserMedia(window);
      shimAudioContext(window);
      shimRTCIceCandidate(window);
      shimRTCIceCandidateRelayProtocol(window);
      shimMaxMessageSize(window, browserDetails);
      shimSendThrowTypeError(window);
      removeExtmapAllowMixed(window, browserDetails);
      break;
    default:
      logging("Unsupported browser!");
      break;
  }
  return adapter;
}

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */


const adapter =
  adapterFactory({window: typeof window === 'undefined' ? undefined : window});

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, { get: v, set: s, enumerable: true, configurable: true });
}
class $fcbcc7538a6776d5$export$f1c5f4c9cb95390b {
  constructor() {
    this.chunkedMTU = 16300;
    this._dataCount = 1;
    this.chunk = (blob) => {
      const chunks = [];
      const size = blob.byteLength;
      const total = Math.ceil(size / this.chunkedMTU);
      let index = 0;
      let start = 0;
      while (start < size) {
        const end = Math.min(size, start + this.chunkedMTU);
        const b = blob.slice(start, end);
        const chunk = {
          __peerData: this._dataCount,
          n: index,
          data: b,
          total
        };
        chunks.push(chunk);
        start = end;
        index++;
      }
      this._dataCount++;
      return chunks;
    };
  }
}
function $fcbcc7538a6776d5$export$52c89ebcdc4f53f2(bufs) {
  let size = 0;
  for (const buf of bufs) size += buf.byteLength;
  const result = new Uint8Array(size);
  let offset = 0;
  for (const buf of bufs) {
    result.set(buf, offset);
    offset += buf.byteLength;
  }
  return result;
}
const $fb63e766cfafaab9$var$webRTCAdapter = (
  //@ts-ignore
  (adapter).default || (adapter)
);
const $fb63e766cfafaab9$export$25be9502477c137d = new class {
  isWebRTCSupported() {
    return typeof RTCPeerConnection !== "undefined";
  }
  isBrowserSupported() {
    const browser = this.getBrowser();
    const version = this.getVersion();
    const validBrowser = this.supportedBrowsers.includes(browser);
    if (!validBrowser) return false;
    if (browser === "chrome") return version >= this.minChromeVersion;
    if (browser === "firefox") return version >= this.minFirefoxVersion;
    if (browser === "safari") return !this.isIOS && version >= this.minSafariVersion;
    return false;
  }
  getBrowser() {
    return $fb63e766cfafaab9$var$webRTCAdapter.browserDetails.browser;
  }
  getVersion() {
    return $fb63e766cfafaab9$var$webRTCAdapter.browserDetails.version || 0;
  }
  isUnifiedPlanSupported() {
    const browser = this.getBrowser();
    const version = $fb63e766cfafaab9$var$webRTCAdapter.browserDetails.version || 0;
    if (browser === "chrome" && version < this.minChromeVersion) return false;
    if (browser === "firefox" && version >= this.minFirefoxVersion) return true;
    if (!window.RTCRtpTransceiver || !("currentDirection" in RTCRtpTransceiver.prototype)) return false;
    let tempPc;
    let supported = false;
    try {
      tempPc = new RTCPeerConnection();
      tempPc.addTransceiver("audio");
      supported = true;
    } catch (e) {
    } finally {
      if (tempPc) tempPc.close();
    }
    return supported;
  }
  toString() {
    return `Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`;
  }
  constructor() {
    this.isIOS = typeof navigator !== "undefined" ? [
      "iPad",
      "iPhone",
      "iPod"
    ].includes(navigator.platform) : false;
    this.supportedBrowsers = [
      "firefox",
      "chrome",
      "safari"
    ];
    this.minFirefoxVersion = 59;
    this.minChromeVersion = 72;
    this.minSafariVersion = 605;
  }
}();
const $9a84a32bf0bf36bb$export$f35f128fd59ea256 = (id) => {
  return !id || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(id);
};
const $0e5fd1585784c252$export$4e61f672936bec77 = () => Math.random().toString(36).slice(2);
const $4f4134156c446392$var$DEFAULT_CONFIG = {
  iceServers: [
    {
      urls: "stun:stun.l.google.com:19302"
    },
    {
      urls: [
        "turn:eu-0.turn.peerjs.com:3478",
        "turn:us-0.turn.peerjs.com:3478"
      ],
      username: "peerjs",
      credential: "peerjsp"
    }
  ],
  sdpSemantics: "unified-plan"
};
class $4f4134156c446392$export$f8f26dd395d7e1bd extends ($fcbcc7538a6776d5$export$f1c5f4c9cb95390b) {
  noop() {
  }
  blobToArrayBuffer(blob, cb) {
    const fr = new FileReader();
    fr.onload = function(evt) {
      if (evt.target) cb(evt.target.result);
    };
    fr.readAsArrayBuffer(blob);
    return fr;
  }
  binaryStringToArrayBuffer(binary) {
    const byteArray = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) byteArray[i] = binary.charCodeAt(i) & 255;
    return byteArray.buffer;
  }
  isSecure() {
    return location.protocol === "https:";
  }
  constructor(...args) {
    super(...args);
    this.CLOUD_HOST = "0.peerjs.com";
    this.CLOUD_PORT = 443;
    this.chunkedBrowsers = {
      Chrome: 1,
      chrome: 1
    };
    this.defaultConfig = $4f4134156c446392$var$DEFAULT_CONFIG;
    this.browser = ($fb63e766cfafaab9$export$25be9502477c137d).getBrowser();
    this.browserVersion = ($fb63e766cfafaab9$export$25be9502477c137d).getVersion();
    this.pack = $0cfd7828ad59115f$export$2a703dbb0cb35339;
    this.unpack = $0cfd7828ad59115f$export$417857010dc9287f;
    this.supports = function() {
      const supported = {
        browser: ($fb63e766cfafaab9$export$25be9502477c137d).isBrowserSupported(),
        webRTC: ($fb63e766cfafaab9$export$25be9502477c137d).isWebRTCSupported(),
        audioVideo: false,
        data: false,
        binaryBlob: false,
        reliable: false
      };
      if (!supported.webRTC) return supported;
      let pc;
      try {
        pc = new RTCPeerConnection($4f4134156c446392$var$DEFAULT_CONFIG);
        supported.audioVideo = true;
        let dc;
        try {
          dc = pc.createDataChannel("_PEERJSTEST", {
            ordered: true
          });
          supported.data = true;
          supported.reliable = !!dc.ordered;
          try {
            dc.binaryType = "blob";
            supported.binaryBlob = !(0, $fb63e766cfafaab9$export$25be9502477c137d).isIOS;
          } catch (e) {
          }
        } catch (e) {
        } finally {
          if (dc) dc.close();
        }
      } catch (e) {
      } finally {
        if (pc) pc.close();
      }
      return supported;
    }();
    this.validateId = ($9a84a32bf0bf36bb$export$f35f128fd59ea256);
    this.randomToken = ($0e5fd1585784c252$export$4e61f672936bec77);
  }
}
const $4f4134156c446392$export$7debb50ef11d5e0b = new $4f4134156c446392$export$f8f26dd395d7e1bd();
const $257947e92926277a$var$LOG_PREFIX = "PeerJS: ";
var $257947e92926277a$export$243e62d78d3b544d;
(function(LogLevel) {
  LogLevel[LogLevel["Disabled"] = 0] = "Disabled";
  LogLevel[LogLevel["Errors"] = 1] = "Errors";
  LogLevel[LogLevel["Warnings"] = 2] = "Warnings";
  LogLevel[LogLevel["All"] = 3] = "All";
})($257947e92926277a$export$243e62d78d3b544d || ($257947e92926277a$export$243e62d78d3b544d = {}));
class $257947e92926277a$var$Logger {
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(logLevel) {
    this._logLevel = logLevel;
  }
  log(...args) {
    if (this._logLevel >= 3) this._print(3, ...args);
  }
  warn(...args) {
    if (this._logLevel >= 2) this._print(2, ...args);
  }
  error(...args) {
    if (this._logLevel >= 1) this._print(1, ...args);
  }
  setLogFunction(fn) {
    this._print = fn;
  }
  _print(logLevel, ...rest) {
    const copy = [
      $257947e92926277a$var$LOG_PREFIX,
      ...rest
    ];
    for (const i in copy) if (copy[i] instanceof Error) copy[i] = "(" + copy[i].name + ") " + copy[i].message;
    if (logLevel >= 3) console.log(...copy);
    else if (logLevel >= 2) console.warn("WARNING", ...copy);
    else if (logLevel >= 1) console.error("ERROR", ...copy);
  }
  constructor() {
    this._logLevel = 0;
  }
}
var $257947e92926277a$export$2e2bcd8739ae039 = new $257947e92926277a$var$Logger();
var $c4dcfd1d1ea86647$exports = {};
var $c4dcfd1d1ea86647$var$has = Object.prototype.hasOwnProperty, $c4dcfd1d1ea86647$var$prefix = "~";
function $c4dcfd1d1ea86647$var$Events() {
}
if (Object.create) {
  $c4dcfd1d1ea86647$var$Events.prototype = /* @__PURE__ */ Object.create(null);
  if (!new $c4dcfd1d1ea86647$var$Events().__proto__) $c4dcfd1d1ea86647$var$prefix = false;
}
function $c4dcfd1d1ea86647$var$EE(fn, context, once2) {
  this.fn = fn;
  this.context = context;
  this.once = once2 || false;
}
function $c4dcfd1d1ea86647$var$addListener(emitter, event, fn, context, once2) {
  if (typeof fn !== "function") throw new TypeError("The listener must be a function");
  var listener = new $c4dcfd1d1ea86647$var$EE(fn, context || emitter, once2), evt = $c4dcfd1d1ea86647$var$prefix ? $c4dcfd1d1ea86647$var$prefix + event : event;
  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [
    emitter._events[evt],
    listener
  ];
  return emitter;
}
function $c4dcfd1d1ea86647$var$clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new $c4dcfd1d1ea86647$var$Events();
  else delete emitter._events[evt];
}
function $c4dcfd1d1ea86647$var$EventEmitter() {
  this._events = new $c4dcfd1d1ea86647$var$Events();
  this._eventsCount = 0;
}
$c4dcfd1d1ea86647$var$EventEmitter.prototype.eventNames = function eventNames() {
  var names = [], events, name;
  if (this._eventsCount === 0) return names;
  for (name in events = this._events) if ($c4dcfd1d1ea86647$var$has.call(events, name)) names.push($c4dcfd1d1ea86647$var$prefix ? name.slice(1) : name);
  if (Object.getOwnPropertySymbols) return names.concat(Object.getOwnPropertySymbols(events));
  return names;
};
$c4dcfd1d1ea86647$var$EventEmitter.prototype.listeners = function listeners(event) {
  var evt = $c4dcfd1d1ea86647$var$prefix ? $c4dcfd1d1ea86647$var$prefix + event : event, handlers = this._events[evt];
  if (!handlers) return [];
  if (handlers.fn) return [
    handlers.fn
  ];
  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) ee[i] = handlers[i].fn;
  return ee;
};
$c4dcfd1d1ea86647$var$EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = $c4dcfd1d1ea86647$var$prefix ? $c4dcfd1d1ea86647$var$prefix + event : event, listeners2 = this._events[evt];
  if (!listeners2) return 0;
  if (listeners2.fn) return 1;
  return listeners2.length;
};
$c4dcfd1d1ea86647$var$EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = $c4dcfd1d1ea86647$var$prefix ? $c4dcfd1d1ea86647$var$prefix + event : event;
  if (!this._events[evt]) return false;
  var listeners2 = this._events[evt], len = arguments.length, args, i;
  if (listeners2.fn) {
    if (listeners2.once) this.removeListener(event, listeners2.fn, void 0, true);
    switch (len) {
      case 1:
        return listeners2.fn.call(listeners2.context), true;
      case 2:
        return listeners2.fn.call(listeners2.context, a1), true;
      case 3:
        return listeners2.fn.call(listeners2.context, a1, a2), true;
      case 4:
        return listeners2.fn.call(listeners2.context, a1, a2, a3), true;
      case 5:
        return listeners2.fn.call(listeners2.context, a1, a2, a3, a4), true;
      case 6:
        return listeners2.fn.call(listeners2.context, a1, a2, a3, a4, a5), true;
    }
    for (i = 1, args = new Array(len - 1); i < len; i++) args[i - 1] = arguments[i];
    listeners2.fn.apply(listeners2.context, args);
  } else {
    var length = listeners2.length, j;
    for (i = 0; i < length; i++) {
      if (listeners2[i].once) this.removeListener(event, listeners2[i].fn, void 0, true);
      switch (len) {
        case 1:
          listeners2[i].fn.call(listeners2[i].context);
          break;
        case 2:
          listeners2[i].fn.call(listeners2[i].context, a1);
          break;
        case 3:
          listeners2[i].fn.call(listeners2[i].context, a1, a2);
          break;
        case 4:
          listeners2[i].fn.call(listeners2[i].context, a1, a2, a3);
          break;
        default:
          if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) args[j - 1] = arguments[j];
          listeners2[i].fn.apply(listeners2[i].context, args);
      }
    }
  }
  return true;
};
$c4dcfd1d1ea86647$var$EventEmitter.prototype.on = function on(event, fn, context) {
  return $c4dcfd1d1ea86647$var$addListener(this, event, fn, context, false);
};
$c4dcfd1d1ea86647$var$EventEmitter.prototype.once = function once(event, fn, context) {
  return $c4dcfd1d1ea86647$var$addListener(this, event, fn, context, true);
};
$c4dcfd1d1ea86647$var$EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once2) {
  var evt = $c4dcfd1d1ea86647$var$prefix ? $c4dcfd1d1ea86647$var$prefix + event : event;
  if (!this._events[evt]) return this;
  if (!fn) {
    $c4dcfd1d1ea86647$var$clearEvent(this, evt);
    return this;
  }
  var listeners2 = this._events[evt];
  if (listeners2.fn) {
    if (listeners2.fn === fn && (!once2 || listeners2.once) && (!context || listeners2.context === context)) $c4dcfd1d1ea86647$var$clearEvent(this, evt);
  } else {
    for (var i = 0, events = [], length = listeners2.length; i < length; i++) if (listeners2[i].fn !== fn || once2 && !listeners2[i].once || context && listeners2[i].context !== context) events.push(listeners2[i]);
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else $c4dcfd1d1ea86647$var$clearEvent(this, evt);
  }
  return this;
};
$c4dcfd1d1ea86647$var$EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;
  if (event) {
    evt = $c4dcfd1d1ea86647$var$prefix ? $c4dcfd1d1ea86647$var$prefix + event : event;
    if (this._events[evt]) $c4dcfd1d1ea86647$var$clearEvent(this, evt);
  } else {
    this._events = new $c4dcfd1d1ea86647$var$Events();
    this._eventsCount = 0;
  }
  return this;
};
$c4dcfd1d1ea86647$var$EventEmitter.prototype.off = $c4dcfd1d1ea86647$var$EventEmitter.prototype.removeListener;
$c4dcfd1d1ea86647$var$EventEmitter.prototype.addListener = $c4dcfd1d1ea86647$var$EventEmitter.prototype.on;
$c4dcfd1d1ea86647$var$EventEmitter.prefixed = $c4dcfd1d1ea86647$var$prefix;
$c4dcfd1d1ea86647$var$EventEmitter.EventEmitter = $c4dcfd1d1ea86647$var$EventEmitter;
$c4dcfd1d1ea86647$exports = $c4dcfd1d1ea86647$var$EventEmitter;
var $78455e22dea96b8c$exports = {};
$parcel$export($78455e22dea96b8c$exports, "ConnectionType", () => $78455e22dea96b8c$export$3157d57b4135e3bc);
$parcel$export($78455e22dea96b8c$exports, "PeerErrorType", () => $78455e22dea96b8c$export$9547aaa2e39030ff);
$parcel$export($78455e22dea96b8c$exports, "BaseConnectionErrorType", () => $78455e22dea96b8c$export$7974935686149686);
$parcel$export($78455e22dea96b8c$exports, "DataConnectionErrorType", () => $78455e22dea96b8c$export$49ae800c114df41d);
$parcel$export($78455e22dea96b8c$exports, "SerializationType", () => $78455e22dea96b8c$export$89f507cf986a947);
$parcel$export($78455e22dea96b8c$exports, "SocketEventType", () => $78455e22dea96b8c$export$3b5c4a4b6354f023);
$parcel$export($78455e22dea96b8c$exports, "ServerMessageType", () => $78455e22dea96b8c$export$adb4a1754da6f10d);
var $78455e22dea96b8c$export$3157d57b4135e3bc;
(function(ConnectionType) {
  ConnectionType["Data"] = "data";
  ConnectionType["Media"] = "media";
})($78455e22dea96b8c$export$3157d57b4135e3bc || ($78455e22dea96b8c$export$3157d57b4135e3bc = {}));
var $78455e22dea96b8c$export$9547aaa2e39030ff;
(function(PeerErrorType) {
  PeerErrorType["BrowserIncompatible"] = "browser-incompatible";
  PeerErrorType["Disconnected"] = "disconnected";
  PeerErrorType["InvalidID"] = "invalid-id";
  PeerErrorType["InvalidKey"] = "invalid-key";
  PeerErrorType["Network"] = "network";
  PeerErrorType["PeerUnavailable"] = "peer-unavailable";
  PeerErrorType["SslUnavailable"] = "ssl-unavailable";
  PeerErrorType["ServerError"] = "server-error";
  PeerErrorType["SocketError"] = "socket-error";
  PeerErrorType["SocketClosed"] = "socket-closed";
  PeerErrorType["UnavailableID"] = "unavailable-id";
  PeerErrorType["WebRTC"] = "webrtc";
})($78455e22dea96b8c$export$9547aaa2e39030ff || ($78455e22dea96b8c$export$9547aaa2e39030ff = {}));
var $78455e22dea96b8c$export$7974935686149686;
(function(BaseConnectionErrorType) {
  BaseConnectionErrorType["NegotiationFailed"] = "negotiation-failed";
  BaseConnectionErrorType["ConnectionClosed"] = "connection-closed";
})($78455e22dea96b8c$export$7974935686149686 || ($78455e22dea96b8c$export$7974935686149686 = {}));
var $78455e22dea96b8c$export$49ae800c114df41d;
(function(DataConnectionErrorType) {
  DataConnectionErrorType["NotOpenYet"] = "not-open-yet";
  DataConnectionErrorType["MessageToBig"] = "message-too-big";
})($78455e22dea96b8c$export$49ae800c114df41d || ($78455e22dea96b8c$export$49ae800c114df41d = {}));
var $78455e22dea96b8c$export$89f507cf986a947;
(function(SerializationType) {
  SerializationType["Binary"] = "binary";
  SerializationType["BinaryUTF8"] = "binary-utf8";
  SerializationType["JSON"] = "json";
  SerializationType["None"] = "raw";
})($78455e22dea96b8c$export$89f507cf986a947 || ($78455e22dea96b8c$export$89f507cf986a947 = {}));
var $78455e22dea96b8c$export$3b5c4a4b6354f023;
(function(SocketEventType) {
  SocketEventType["Message"] = "message";
  SocketEventType["Disconnected"] = "disconnected";
  SocketEventType["Error"] = "error";
  SocketEventType["Close"] = "close";
})($78455e22dea96b8c$export$3b5c4a4b6354f023 || ($78455e22dea96b8c$export$3b5c4a4b6354f023 = {}));
var $78455e22dea96b8c$export$adb4a1754da6f10d;
(function(ServerMessageType) {
  ServerMessageType["Heartbeat"] = "HEARTBEAT";
  ServerMessageType["Candidate"] = "CANDIDATE";
  ServerMessageType["Offer"] = "OFFER";
  ServerMessageType["Answer"] = "ANSWER";
  ServerMessageType["Open"] = "OPEN";
  ServerMessageType["Error"] = "ERROR";
  ServerMessageType["IdTaken"] = "ID-TAKEN";
  ServerMessageType["InvalidKey"] = "INVALID-KEY";
  ServerMessageType["Leave"] = "LEAVE";
  ServerMessageType["Expire"] = "EXPIRE";
})($78455e22dea96b8c$export$adb4a1754da6f10d || ($78455e22dea96b8c$export$adb4a1754da6f10d = {}));
var $f5f881ec4575f1fc$exports = {};
$f5f881ec4575f1fc$exports = JSON.parse('{"name":"peerjs","version":"1.5.4","keywords":["peerjs","webrtc","p2p","rtc"],"description":"PeerJS client","homepage":"https://peerjs.com","bugs":{"url":"https://github.com/peers/peerjs/issues"},"repository":{"type":"git","url":"https://github.com/peers/peerjs"},"license":"MIT","contributors":["Michelle Bu <michelle@michellebu.com>","afrokick <devbyru@gmail.com>","ericz <really.ez@gmail.com>","Jairo <kidandcat@gmail.com>","Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>","Jairo Caro-Accino Viciana <jairo@galax.be>","Carlos Caballero <carlos.caballero.gonzalez@gmail.com>","hc <hheennrryy@gmail.com>","Muhammad Asif <capripio@gmail.com>","PrashoonB <prashoonbhattacharjee@gmail.com>","Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>","akotynski <aleksanderkotbury@gmail.com>","lmb <i@lmb.io>","Jairooo <jairocaro@msn.com>","Moritz Stückler <moritz.stueckler@gmail.com>","Simon <crydotsnakegithub@gmail.com>","Denis Lukov <denismassters@gmail.com>","Philipp Hancke <fippo@andyet.net>","Hans Oksendahl <hansoksendahl@gmail.com>","Jess <jessachandler@gmail.com>","khankuan <khankuan@gmail.com>","DUODVK <kurmanov.work@gmail.com>","XiZhao <kwang1imsa@gmail.com>","Matthias Lohr <matthias@lohr.me>","=frank tree <=frnktrb@googlemail.com>","Andre Eckardt <aeckardt@outlook.com>","Chris Cowan <agentme49@gmail.com>","Alex Chuev <alex@chuev.com>","alxnull <alxnull@e.mail.de>","Yemel Jardi <angel.jardi@gmail.com>","Ben Parnell <benjaminparnell.94@gmail.com>","Benny Lichtner <bennlich@gmail.com>","fresheneesz <bitetrudpublic@gmail.com>","bob.barstead@exaptive.com <bob.barstead@exaptive.com>","chandika <chandika@gmail.com>","emersion <contact@emersion.fr>","Christopher Van <cvan@users.noreply.github.com>","eddieherm <edhermoso@gmail.com>","Eduardo Pinho <enet4mikeenet@gmail.com>","Evandro Zanatta <ezanatta@tray.net.br>","Gardner Bickford <gardner@users.noreply.github.com>","Gian Luca <gianluca.cecchi@cynny.com>","PatrickJS <github@gdi2290.com>","jonnyf <github@jonathanfoss.co.uk>","Hizkia Felix <hizkifw@gmail.com>","Hristo Oskov <hristo.oskov@gmail.com>","Isaac Madwed <i.madwed@gmail.com>","Ilya Konanykhin <ilya.konanykhin@gmail.com>","jasonbarry <jasbarry@me.com>","Jonathan Burke <jonathan.burke.1311@googlemail.com>","Josh Hamit <josh.hamit@gmail.com>","Jordan Austin <jrax86@gmail.com>","Joel Wetzell <jwetzell@yahoo.com>","xizhao <kevin.wang@cloudera.com>","Alberto Torres <kungfoobar@gmail.com>","Jonathan Mayol <mayoljonathan@gmail.com>","Jefferson Felix <me@jsfelix.dev>","Rolf Erik Lekang <me@rolflekang.com>","Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>","Pepijn de Vos <pepijndevos@gmail.com>","JooYoung <qkdlql@naver.com>","Tobias Speicher <rootcommander@gmail.com>","Steve Blaurock <sblaurock@gmail.com>","Kyrylo Shegeda <shegeda@ualberta.ca>","Diwank Singh Tomer <singh@diwank.name>","Sören Balko <Soeren.Balko@gmail.com>","Arpit Solanki <solankiarpit1997@gmail.com>","Yuki Ito <yuki@gnnk.net>","Artur Zayats <zag2art@gmail.com>"],"funding":{"type":"opencollective","url":"https://opencollective.com/peer"},"collective":{"type":"opencollective","url":"https://opencollective.com/peer"},"files":["dist/*"],"sideEffects":["lib/global.ts","lib/supports.ts"],"main":"dist/bundler.cjs","module":"dist/bundler.mjs","browser-minified":"dist/peerjs.min.js","browser-unminified":"dist/peerjs.js","browser-minified-msgpack":"dist/serializer.msgpack.mjs","types":"dist/types.d.ts","engines":{"node":">= 14"},"targets":{"types":{"source":"lib/exports.ts"},"main":{"source":"lib/exports.ts","sourceMap":{"inlineSources":true}},"module":{"source":"lib/exports.ts","includeNodeModules":["eventemitter3"],"sourceMap":{"inlineSources":true}},"browser-minified":{"context":"browser","outputFormat":"global","optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-unminified":{"context":"browser","outputFormat":"global","optimize":false,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-minified-msgpack":{"context":"browser","outputFormat":"esmodule","isLibrary":true,"optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 102, safari >= 15"},"source":"lib/dataconnection/StreamConnection/MsgPack.ts"}},"scripts":{"contributors":"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\"chore(contributors): update and sort contributors list\\"","check":"tsc --noEmit && tsc -p e2e/tsconfig.json --noEmit","watch":"parcel watch","build":"rm -rf dist && parcel build","prepublishOnly":"npm run build","test":"jest","test:watch":"jest --watch","coverage":"jest --coverage --collectCoverageFrom=\\"./lib/**\\"","format":"prettier --write .","format:check":"prettier --check .","semantic-release":"semantic-release","e2e":"wdio run e2e/wdio.local.conf.ts","e2e:bstack":"wdio run e2e/wdio.bstack.conf.ts"},"devDependencies":{"@parcel/config-default":"^2.9.3","@parcel/packager-ts":"^2.9.3","@parcel/transformer-typescript-tsc":"^2.9.3","@parcel/transformer-typescript-types":"^2.9.3","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@swc/core":"^1.3.27","@swc/jest":"^0.2.24","@types/jasmine":"^4.3.4","@wdio/browserstack-service":"^8.11.2","@wdio/cli":"^8.11.2","@wdio/globals":"^8.11.2","@wdio/jasmine-framework":"^8.11.2","@wdio/local-runner":"^8.11.2","@wdio/spec-reporter":"^8.11.2","@wdio/types":"^8.10.4","http-server":"^14.1.1","jest":"^29.3.1","jest-environment-jsdom":"^29.3.1","mock-socket":"^9.0.0","parcel":"^2.9.3","prettier":"^3.0.0","semantic-release":"^21.0.0","ts-node":"^10.9.1","typescript":"^5.0.0","wdio-geckodriver-service":"^5.0.1"},"dependencies":{"@msgpack/msgpack":"^2.8.0","eventemitter3":"^4.0.7","peerjs-js-binarypack":"^2.1.0","webrtc-adapter":"^9.0.0"},"alias":{"process":false,"buffer":false}}');
class $8f5bfa60836d261d$export$4798917dbf149b79 extends ($c4dcfd1d1ea86647$exports.EventEmitter) {
  constructor(secure, host, port, path, key, pingInterval = 5e3) {
    super();
    this.pingInterval = pingInterval;
    this._disconnected = true;
    this._messagesQueue = [];
    const wsProtocol = secure ? "wss://" : "ws://";
    this._baseUrl = wsProtocol + host + ":" + port + path + "peerjs?key=" + key;
  }
  start(id, token) {
    this._id = id;
    const wsUrl = `${this._baseUrl}&id=${id}&token=${token}`;
    if (!!this._socket || !this._disconnected) return;
    this._socket = new WebSocket(wsUrl + "&version=" + ($f5f881ec4575f1fc$exports.version));
    this._disconnected = false;
    this._socket.onmessage = (event) => {
      let data;
      try {
        data = JSON.parse(event.data);
        (0, $257947e92926277a$export$2e2bcd8739ae039).log("Server message received:", data);
      } catch (e) {
        ($257947e92926277a$export$2e2bcd8739ae039).log("Invalid server message", event.data);
        return;
      }
      this.emit(($78455e22dea96b8c$export$3b5c4a4b6354f023).Message, data);
    };
    this._socket.onclose = (event) => {
      if (this._disconnected) return;
      ($257947e92926277a$export$2e2bcd8739ae039).log("Socket closed.", event);
      this._cleanup();
      this._disconnected = true;
      this.emit(($78455e22dea96b8c$export$3b5c4a4b6354f023).Disconnected);
    };
    this._socket.onopen = () => {
      if (this._disconnected) return;
      this._sendQueuedMessages();
      ($257947e92926277a$export$2e2bcd8739ae039).log("Socket open");
      this._scheduleHeartbeat();
    };
  }
  _scheduleHeartbeat() {
    this._wsPingTimer = setTimeout(() => {
      this._sendHeartbeat();
    }, this.pingInterval);
  }
  _sendHeartbeat() {
    if (!this._wsOpen()) {
      ($257947e92926277a$export$2e2bcd8739ae039).log(`Cannot send heartbeat, because socket closed`);
      return;
    }
    const message = JSON.stringify({
      type: ($78455e22dea96b8c$export$adb4a1754da6f10d).Heartbeat
    });
    this._socket.send(message);
    this._scheduleHeartbeat();
  }
  /** Is the websocket currently open? */
  _wsOpen() {
    return !!this._socket && this._socket.readyState === 1;
  }
  /** Send queued messages. */
  _sendQueuedMessages() {
    const copiedQueue = [
      ...this._messagesQueue
    ];
    this._messagesQueue = [];
    for (const message of copiedQueue) this.send(message);
  }
  /** Exposed send for DC & Peer. */
  send(data) {
    if (this._disconnected) return;
    if (!this._id) {
      this._messagesQueue.push(data);
      return;
    }
    if (!data.type) {
      this.emit(($78455e22dea96b8c$export$3b5c4a4b6354f023).Error, "Invalid message");
      return;
    }
    if (!this._wsOpen()) return;
    const message = JSON.stringify(data);
    this._socket.send(message);
  }
  close() {
    if (this._disconnected) return;
    this._cleanup();
    this._disconnected = true;
  }
  _cleanup() {
    if (this._socket) {
      this._socket.onopen = this._socket.onmessage = this._socket.onclose = null;
      this._socket.close();
      this._socket = void 0;
    }
    clearTimeout(this._wsPingTimer);
  }
}
class $b82fb8fc0514bfc1$export$89e6bb5ad64bf4a {
  constructor(connection) {
    this.connection = connection;
  }
  /** Returns a PeerConnection object set up correctly (for data, media). */
  startConnection(options) {
    const peerConnection = this._startPeerConnection();
    this.connection.peerConnection = peerConnection;
    if (this.connection.type === ($78455e22dea96b8c$export$3157d57b4135e3bc).Media && options._stream) this._addTracksToConnection(options._stream, peerConnection);
    if (options.originator) {
      const dataConnection = this.connection;
      const config = {
        ordered: !!options.reliable
      };
      const dataChannel = peerConnection.createDataChannel(dataConnection.label, config);
      dataConnection._initializeDataChannel(dataChannel);
      this._makeOffer();
    } else this.handleSDP("OFFER", options.sdp);
  }
  /** Start a PC. */
  _startPeerConnection() {
    ($257947e92926277a$export$2e2bcd8739ae039).log("Creating RTCPeerConnection.");
    const peerConnection = new RTCPeerConnection(this.connection.provider.options.config);
    this._setupListeners(peerConnection);
    return peerConnection;
  }
  /** Set up various WebRTC listeners. */
  _setupListeners(peerConnection) {
    const peerId = this.connection.peer;
    const connectionId = this.connection.connectionId;
    const connectionType = this.connection.type;
    const provider = this.connection.provider;
    ($257947e92926277a$export$2e2bcd8739ae039).log("Listening for ICE candidates.");
    peerConnection.onicecandidate = (evt) => {
      if (!evt.candidate || !evt.candidate.candidate) return;
      ($257947e92926277a$export$2e2bcd8739ae039).log(`Received ICE candidates for ${peerId}:`, evt.candidate);
      provider.socket.send({
        type: ($78455e22dea96b8c$export$adb4a1754da6f10d).Candidate,
        payload: {
          candidate: evt.candidate,
          type: connectionType,
          connectionId
        },
        dst: peerId
      });
    };
    peerConnection.oniceconnectionstatechange = () => {
      switch (peerConnection.iceConnectionState) {
        case "failed":
          ($257947e92926277a$export$2e2bcd8739ae039).log("iceConnectionState is failed, closing connections to " + peerId);
          this.connection.emitError(($78455e22dea96b8c$export$7974935686149686).NegotiationFailed, "Negotiation of connection to " + peerId + " failed.");
          this.connection.close();
          break;
        case "closed":
          ($257947e92926277a$export$2e2bcd8739ae039).log("iceConnectionState is closed, closing connections to " + peerId);
          this.connection.emitError(($78455e22dea96b8c$export$7974935686149686).ConnectionClosed, "Connection to " + peerId + " closed.");
          this.connection.close();
          break;
        case "disconnected":
          ($257947e92926277a$export$2e2bcd8739ae039).log("iceConnectionState changed to disconnected on the connection with " + peerId);
          break;
        case "completed":
          peerConnection.onicecandidate = () => {
          };
          break;
      }
      this.connection.emit("iceStateChanged", peerConnection.iceConnectionState);
    };
    ($257947e92926277a$export$2e2bcd8739ae039).log("Listening for data channel");
    peerConnection.ondatachannel = (evt) => {
      ($257947e92926277a$export$2e2bcd8739ae039).log("Received data channel");
      const dataChannel = evt.channel;
      const connection = provider.getConnection(peerId, connectionId);
      connection._initializeDataChannel(dataChannel);
    };
    ($257947e92926277a$export$2e2bcd8739ae039).log("Listening for remote stream");
    peerConnection.ontrack = (evt) => {
      ($257947e92926277a$export$2e2bcd8739ae039).log("Received remote stream");
      const stream = evt.streams[0];
      const connection = provider.getConnection(peerId, connectionId);
      if (connection.type === ($78455e22dea96b8c$export$3157d57b4135e3bc).Media) {
        const mediaConnection = connection;
        this._addStreamToMediaConnection(stream, mediaConnection);
      }
    };
  }
  cleanup() {
    ($257947e92926277a$export$2e2bcd8739ae039).log("Cleaning up PeerConnection to " + this.connection.peer);
    const peerConnection = this.connection.peerConnection;
    if (!peerConnection) return;
    this.connection.peerConnection = null;
    peerConnection.onicecandidate = peerConnection.oniceconnectionstatechange = peerConnection.ondatachannel = peerConnection.ontrack = () => {
    };
    const peerConnectionNotClosed = peerConnection.signalingState !== "closed";
    let dataChannelNotClosed = false;
    const dataChannel = this.connection.dataChannel;
    if (dataChannel) dataChannelNotClosed = !!dataChannel.readyState && dataChannel.readyState !== "closed";
    if (peerConnectionNotClosed || dataChannelNotClosed) peerConnection.close();
  }
  async _makeOffer() {
    const peerConnection = this.connection.peerConnection;
    const provider = this.connection.provider;
    try {
      const offer = await peerConnection.createOffer(this.connection.options.constraints);
      (0, $257947e92926277a$export$2e2bcd8739ae039).log("Created offer.");
      if (this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform === "function") offer.sdp = this.connection.options.sdpTransform(offer.sdp) || offer.sdp;
      try {
        await peerConnection.setLocalDescription(offer);
        (0, $257947e92926277a$export$2e2bcd8739ae039).log("Set localDescription:", offer, `for:${this.connection.peer}`);
        let payload = {
          sdp: offer,
          type: this.connection.type,
          connectionId: this.connection.connectionId,
          metadata: this.connection.metadata
        };
        if (this.connection.type === (0, $78455e22dea96b8c$export$3157d57b4135e3bc).Data) {
          const dataConnection = this.connection;
          payload = {
            ...payload,
            label: dataConnection.label,
            reliable: dataConnection.reliable,
            serialization: dataConnection.serialization
          };
        }
        provider.socket.send({
          type: (0, $78455e22dea96b8c$export$adb4a1754da6f10d).Offer,
          payload,
          dst: this.connection.peer
        });
      } catch (err) {
        if (err != "OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer") {
          provider.emitError((0, $78455e22dea96b8c$export$9547aaa2e39030ff).WebRTC, err);
          (0, $257947e92926277a$export$2e2bcd8739ae039).log("Failed to setLocalDescription, ", err);
        }
      }
    } catch (err_1) {
      provider.emitError(($78455e22dea96b8c$export$9547aaa2e39030ff).WebRTC, err_1);
      ($257947e92926277a$export$2e2bcd8739ae039).log("Failed to createOffer, ", err_1);
    }
  }
  async _makeAnswer() {
    const peerConnection = this.connection.peerConnection;
    const provider = this.connection.provider;
    try {
      const answer = await peerConnection.createAnswer();
      (0, $257947e92926277a$export$2e2bcd8739ae039).log("Created answer.");
      if (this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform === "function") answer.sdp = this.connection.options.sdpTransform(answer.sdp) || answer.sdp;
      try {
        await peerConnection.setLocalDescription(answer);
        (0, $257947e92926277a$export$2e2bcd8739ae039).log(`Set localDescription:`, answer, `for:${this.connection.peer}`);
        provider.socket.send({
          type: (0, $78455e22dea96b8c$export$adb4a1754da6f10d).Answer,
          payload: {
            sdp: answer,
            type: this.connection.type,
            connectionId: this.connection.connectionId
          },
          dst: this.connection.peer
        });
      } catch (err) {
        provider.emitError((0, $78455e22dea96b8c$export$9547aaa2e39030ff).WebRTC, err);
        (0, $257947e92926277a$export$2e2bcd8739ae039).log("Failed to setLocalDescription, ", err);
      }
    } catch (err_1) {
      provider.emitError(($78455e22dea96b8c$export$9547aaa2e39030ff).WebRTC, err_1);
      ($257947e92926277a$export$2e2bcd8739ae039).log("Failed to create answer, ", err_1);
    }
  }
  /** Handle an SDP. */
  async handleSDP(type, sdp) {
    sdp = new RTCSessionDescription(sdp);
    const peerConnection = this.connection.peerConnection;
    const provider = this.connection.provider;
    ($257947e92926277a$export$2e2bcd8739ae039).log("Setting remote description", sdp);
    const self = this;
    try {
      await peerConnection.setRemoteDescription(sdp);
      (0, $257947e92926277a$export$2e2bcd8739ae039).log(`Set remoteDescription:${type} for:${this.connection.peer}`);
      if (type === "OFFER") await self._makeAnswer();
    } catch (err) {
      provider.emitError(($78455e22dea96b8c$export$9547aaa2e39030ff).WebRTC, err);
      ($257947e92926277a$export$2e2bcd8739ae039).log("Failed to setRemoteDescription, ", err);
    }
  }
  /** Handle a candidate. */
  async handleCandidate(ice) {
    ($257947e92926277a$export$2e2bcd8739ae039).log(`handleCandidate:`, ice);
    try {
      await this.connection.peerConnection.addIceCandidate(ice);
      (0, $257947e92926277a$export$2e2bcd8739ae039).log(`Added ICE candidate for:${this.connection.peer}`);
    } catch (err) {
      this.connection.provider.emitError(($78455e22dea96b8c$export$9547aaa2e39030ff).WebRTC, err);
      ($257947e92926277a$export$2e2bcd8739ae039).log("Failed to handleCandidate, ", err);
    }
  }
  _addTracksToConnection(stream, peerConnection) {
    ($257947e92926277a$export$2e2bcd8739ae039).log(`add tracks from stream ${stream.id} to peer connection`);
    if (!peerConnection.addTrack) return ($257947e92926277a$export$2e2bcd8739ae039).error(`Your browser does't support RTCPeerConnection#addTrack. Ignored.`);
    stream.getTracks().forEach((track) => {
      peerConnection.addTrack(track, stream);
    });
  }
  _addStreamToMediaConnection(stream, mediaConnection) {
    ($257947e92926277a$export$2e2bcd8739ae039).log(`add stream ${stream.id} to media connection ${mediaConnection.connectionId}`);
    mediaConnection.addStream(stream);
  }
}
class $23779d1881157a18$export$6a678e589c8a4542 extends ($c4dcfd1d1ea86647$exports.EventEmitter) {
  /**
  * Emits a typed error message.
  *
  * @internal
  */
  emitError(type, err) {
    ($257947e92926277a$export$2e2bcd8739ae039).error("Error:", err);
    this.emit("error", new $23779d1881157a18$export$98871882f492de82(`${type}`, err));
  }
}
class $23779d1881157a18$export$98871882f492de82 extends Error {
  /**
  * @internal
  */
  constructor(type, err) {
    if (typeof err === "string") super(err);
    else {
      super();
      Object.assign(this, err);
    }
    this.type = type;
  }
}
class $5045192fc6d387ba$export$23a2a68283c24d80 extends ($23779d1881157a18$export$6a678e589c8a4542) {
  /**
  * Whether the media connection is active (e.g. your call has been answered).
  * You can check this if you want to set a maximum wait time for a one-sided call.
  */
  get open() {
    return this._open;
  }
  constructor(peer, provider, options) {
    super();
    this.peer = peer;
    this.provider = provider;
    this.options = options;
    this._open = false;
    this.metadata = options.metadata;
  }
}
class $5c1d08c7c57da9a3$export$4a84e95a2324ac29 extends ($5045192fc6d387ba$export$23a2a68283c24d80) {
  static #_ = this.ID_PREFIX = "mc_";
  /**
  * For media connections, this is always 'media'.
  */
  get type() {
    return ($78455e22dea96b8c$export$3157d57b4135e3bc).Media;
  }
  get localStream() {
    return this._localStream;
  }
  get remoteStream() {
    return this._remoteStream;
  }
  constructor(peerId, provider, options) {
    super(peerId, provider, options);
    this._localStream = this.options._stream;
    this.connectionId = this.options.connectionId || $5c1d08c7c57da9a3$export$4a84e95a2324ac29.ID_PREFIX + ($4f4134156c446392$export$7debb50ef11d5e0b).randomToken();
    this._negotiator = new ($b82fb8fc0514bfc1$export$89e6bb5ad64bf4a)(this);
    if (this._localStream) this._negotiator.startConnection({
      _stream: this._localStream,
      originator: true
    });
  }
  /** Called by the Negotiator when the DataChannel is ready. */
  _initializeDataChannel(dc) {
    this.dataChannel = dc;
    this.dataChannel.onopen = () => {
      ($257947e92926277a$export$2e2bcd8739ae039).log(`DC#${this.connectionId} dc connection success`);
      this.emit("willCloseOnRemote");
    };
    this.dataChannel.onclose = () => {
      ($257947e92926277a$export$2e2bcd8739ae039).log(`DC#${this.connectionId} dc closed for:`, this.peer);
      this.close();
    };
  }
  addStream(remoteStream) {
    ($257947e92926277a$export$2e2bcd8739ae039).log("Receiving stream", remoteStream);
    this._remoteStream = remoteStream;
    super.emit("stream", remoteStream);
  }
  /**
  * @internal
  */
  handleMessage(message) {
    const type = message.type;
    const payload = message.payload;
    switch (message.type) {
      case ($78455e22dea96b8c$export$adb4a1754da6f10d).Answer:
        this._negotiator.handleSDP(type, payload.sdp);
        this._open = true;
        break;
      case ($78455e22dea96b8c$export$adb4a1754da6f10d).Candidate:
        this._negotiator.handleCandidate(payload.candidate);
        break;
      default:
        ($257947e92926277a$export$2e2bcd8739ae039).warn(`Unrecognized message type:${type} from peer:${this.peer}`);
        break;
    }
  }
  /**
       * When receiving a {@apilink PeerEvents | `call`} event on a peer, you can call
       * `answer` on the media connection provided by the callback to accept the call
       * and optionally send your own media stream.
  
       *
       * @param stream A WebRTC media stream.
       * @param options
       * @returns
       */
  answer(stream, options = {}) {
    if (this._localStream) {
      ($257947e92926277a$export$2e2bcd8739ae039).warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");
      return;
    }
    this._localStream = stream;
    if (options && options.sdpTransform) this.options.sdpTransform = options.sdpTransform;
    this._negotiator.startConnection({
      ...this.options._payload,
      _stream: stream
    });
    const messages = this.provider._getMessages(this.connectionId);
    for (const message of messages) this.handleMessage(message);
    this._open = true;
  }
  /**
  * Exposed functionality for users.
  */
  /**
  * Closes the media connection.
  */
  close() {
    if (this._negotiator) {
      this._negotiator.cleanup();
      this._negotiator = null;
    }
    this._localStream = null;
    this._remoteStream = null;
    if (this.provider) {
      this.provider._removeConnection(this);
      this.provider = null;
    }
    if (this.options && this.options._stream) this.options._stream = null;
    if (!this.open) return;
    this._open = false;
    super.emit("close");
  }
}
class $abf266641927cd89$export$2c4e825dc9120f87 {
  constructor(_options) {
    this._options = _options;
  }
  _buildRequest(method) {
    const protocol = this._options.secure ? "https" : "http";
    const { host, port, path, key } = this._options;
    const url = new URL(`${protocol}://${host}:${port}${path}${key}/${method}`);
    url.searchParams.set("ts", `${Date.now()}${Math.random()}`);
    url.searchParams.set("version", ($f5f881ec4575f1fc$exports.version));
    return fetch(url.href, {
      referrerPolicy: this._options.referrerPolicy
    });
  }
  /** Get a unique ID from the server via XHR and initialize with it. */
  async retrieveId() {
    try {
      const response = await this._buildRequest("id");
      if (response.status !== 200) throw new Error(`Error. Status:${response.status}`);
      return response.text();
    } catch (error) {
      ($257947e92926277a$export$2e2bcd8739ae039).error("Error retrieving ID", error);
      let pathError = "";
      if (this._options.path === "/" && this._options.host !== ($4f4134156c446392$export$7debb50ef11d5e0b).CLOUD_HOST) pathError = " If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer.";
      throw new Error("Could not get an ID from the server." + pathError);
    }
  }
  /** @deprecated */
  async listAllPeers() {
    try {
      const response = await this._buildRequest("peers");
      if (response.status !== 200) {
        if (response.status === 401) {
          let helpfulError = "";
          if (this._options.host === (0, $4f4134156c446392$export$7debb50ef11d5e0b).CLOUD_HOST) helpfulError = "It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.";
          else helpfulError = "You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.";
          throw new Error("It doesn't look like you have permission to list peers IDs. " + helpfulError);
        }
        throw new Error(`Error. Status:${response.status}`);
      }
      return response.json();
    } catch (error) {
      ($257947e92926277a$export$2e2bcd8739ae039).error("Error retrieving list peers", error);
      throw new Error("Could not get list peers from the server." + error);
    }
  }
}
class $6366c4ca161bc297$export$d365f7ad9d7df9c9 extends ($5045192fc6d387ba$export$23a2a68283c24d80) {
  static #_ = this.ID_PREFIX = "dc_";
  static #_2 = this.MAX_BUFFERED_AMOUNT = 8388608;
  get type() {
    return ($78455e22dea96b8c$export$3157d57b4135e3bc).Data;
  }
  constructor(peerId, provider, options) {
    super(peerId, provider, options);
    this.connectionId = this.options.connectionId || $6366c4ca161bc297$export$d365f7ad9d7df9c9.ID_PREFIX + ($0e5fd1585784c252$export$4e61f672936bec77)();
    this.label = this.options.label || this.connectionId;
    this.reliable = !!this.options.reliable;
    this._negotiator = new ($b82fb8fc0514bfc1$export$89e6bb5ad64bf4a)(this);
    this._negotiator.startConnection(this.options._payload || {
      originator: true,
      reliable: this.reliable
    });
  }
  /** Called by the Negotiator when the DataChannel is ready. */
  _initializeDataChannel(dc) {
    this.dataChannel = dc;
    this.dataChannel.onopen = () => {
      ($257947e92926277a$export$2e2bcd8739ae039).log(`DC#${this.connectionId} dc connection success`);
      this._open = true;
      this.emit("open");
    };
    this.dataChannel.onmessage = (e) => {
      ($257947e92926277a$export$2e2bcd8739ae039).log(`DC#${this.connectionId} dc onmessage:`, e.data);
    };
    this.dataChannel.onclose = () => {
      ($257947e92926277a$export$2e2bcd8739ae039).log(`DC#${this.connectionId} dc closed for:`, this.peer);
      this.close();
    };
  }
  /**
  * Exposed functionality for users.
  */
  /** Allows user to close connection. */
  close(options) {
    if (options?.flush) {
      this.send({
        __peerData: {
          type: "close"
        }
      });
      return;
    }
    if (this._negotiator) {
      this._negotiator.cleanup();
      this._negotiator = null;
    }
    if (this.provider) {
      this.provider._removeConnection(this);
      this.provider = null;
    }
    if (this.dataChannel) {
      this.dataChannel.onopen = null;
      this.dataChannel.onmessage = null;
      this.dataChannel.onclose = null;
      this.dataChannel = null;
    }
    if (!this.open) return;
    this._open = false;
    super.emit("close");
  }
  /** Allows user to send data. */
  send(data, chunked = false) {
    if (!this.open) {
      this.emitError(($78455e22dea96b8c$export$49ae800c114df41d).NotOpenYet, "Connection is not open. You should listen for the `open` event before sending messages.");
      return;
    }
    return this._send(data, chunked);
  }
  async handleMessage(message) {
    const payload = message.payload;
    switch (message.type) {
      case ($78455e22dea96b8c$export$adb4a1754da6f10d).Answer:
        await this._negotiator.handleSDP(message.type, payload.sdp);
        break;
      case ($78455e22dea96b8c$export$adb4a1754da6f10d).Candidate:
        await this._negotiator.handleCandidate(payload.candidate);
        break;
      default:
        ($257947e92926277a$export$2e2bcd8739ae039).warn("Unrecognized message type:", message.type, "from peer:", this.peer);
        break;
    }
  }
}
class $a229bedbcaa6ca23$export$ff7c9d4c11d94e8b extends ($6366c4ca161bc297$export$d365f7ad9d7df9c9) {
  get bufferSize() {
    return this._bufferSize;
  }
  _initializeDataChannel(dc) {
    super._initializeDataChannel(dc);
    this.dataChannel.binaryType = "arraybuffer";
    this.dataChannel.addEventListener("message", (e) => this._handleDataMessage(e));
  }
  _bufferedSend(msg) {
    if (this._buffering || !this._trySend(msg)) {
      this._buffer.push(msg);
      this._bufferSize = this._buffer.length;
    }
  }
  // Returns true if the send succeeds.
  _trySend(msg) {
    if (!this.open) return false;
    if (this.dataChannel.bufferedAmount > ($6366c4ca161bc297$export$d365f7ad9d7df9c9).MAX_BUFFERED_AMOUNT) {
      this._buffering = true;
      setTimeout(() => {
        this._buffering = false;
        this._tryBuffer();
      }, 50);
      return false;
    }
    try {
      this.dataChannel.send(msg);
    } catch (e) {
      ($257947e92926277a$export$2e2bcd8739ae039).error(`DC#:${this.connectionId} Error when sending:`, e);
      this._buffering = true;
      this.close();
      return false;
    }
    return true;
  }
  // Try to send the first message in the buffer.
  _tryBuffer() {
    if (!this.open) return;
    if (this._buffer.length === 0) return;
    const msg = this._buffer[0];
    if (this._trySend(msg)) {
      this._buffer.shift();
      this._bufferSize = this._buffer.length;
      this._tryBuffer();
    }
  }
  close(options) {
    if (options?.flush) {
      this.send({
        __peerData: {
          type: "close"
        }
      });
      return;
    }
    this._buffer = [];
    this._bufferSize = 0;
    super.close();
  }
  constructor(...args) {
    super(...args);
    this._buffer = [];
    this._bufferSize = 0;
    this._buffering = false;
  }
}
class $9fcfddb3ae148f88$export$f0a5a64d5bb37108 extends ($a229bedbcaa6ca23$export$ff7c9d4c11d94e8b) {
  close(options) {
    super.close(options);
    this._chunkedData = {};
  }
  constructor(peerId, provider, options) {
    super(peerId, provider, options);
    this.chunker = new ($fcbcc7538a6776d5$export$f1c5f4c9cb95390b)();
    this.serialization = ($78455e22dea96b8c$export$89f507cf986a947).Binary;
    this._chunkedData = {};
  }
  // Handles a DataChannel message.
  _handleDataMessage({ data }) {
    const deserializedData = ($0cfd7828ad59115f$export$417857010dc9287f)(data);
    const peerData = deserializedData["__peerData"];
    if (peerData) {
      if (peerData.type === "close") {
        this.close();
        return;
      }
      this._handleChunk(deserializedData);
      return;
    }
    this.emit("data", deserializedData);
  }
  _handleChunk(data) {
    const id = data.__peerData;
    const chunkInfo = this._chunkedData[id] || {
      data: [],
      count: 0,
      total: data.total
    };
    chunkInfo.data[data.n] = new Uint8Array(data.data);
    chunkInfo.count++;
    this._chunkedData[id] = chunkInfo;
    if (chunkInfo.total === chunkInfo.count) {
      delete this._chunkedData[id];
      const data2 = ($fcbcc7538a6776d5$export$52c89ebcdc4f53f2)(chunkInfo.data);
      this._handleDataMessage({
        data: data2
      });
    }
  }
  _send(data, chunked) {
    const blob = ($0cfd7828ad59115f$export$2a703dbb0cb35339)(data);
    if (blob instanceof Promise) return this._send_blob(blob);
    if (!chunked && blob.byteLength > this.chunker.chunkedMTU) {
      this._sendChunks(blob);
      return;
    }
    this._bufferedSend(blob);
  }
  async _send_blob(blobPromise) {
    const blob = await blobPromise;
    if (blob.byteLength > this.chunker.chunkedMTU) {
      this._sendChunks(blob);
      return;
    }
    this._bufferedSend(blob);
  }
  _sendChunks(blob) {
    const blobs = this.chunker.chunk(blob);
    ($257947e92926277a$export$2e2bcd8739ae039).log(`DC#${this.connectionId} Try to send ${blobs.length} chunks...`);
    for (const blob2 of blobs) this.send(blob2, true);
  }
}
class $bbaee3f15f714663$export$6f88fe47d32c9c94 extends ($a229bedbcaa6ca23$export$ff7c9d4c11d94e8b) {
  _handleDataMessage({ data }) {
    super.emit("data", data);
  }
  _send(data, _chunked) {
    this._bufferedSend(data);
  }
  constructor(...args) {
    super(...args);
    this.serialization = ($78455e22dea96b8c$export$89f507cf986a947).None;
  }
}
class $817f931e3f9096cf$export$48880ac635f47186 extends ($a229bedbcaa6ca23$export$ff7c9d4c11d94e8b) {
  // Handles a DataChannel message.
  _handleDataMessage({ data }) {
    const deserializedData = this.parse(this.decoder.decode(data));
    const peerData = deserializedData["__peerData"];
    if (peerData && peerData.type === "close") {
      this.close();
      return;
    }
    this.emit("data", deserializedData);
  }
  _send(data, _chunked) {
    const encodedData = this.encoder.encode(this.stringify(data));
    if (encodedData.byteLength >= ($4f4134156c446392$export$7debb50ef11d5e0b).chunkedMTU) {
      this.emitError(($78455e22dea96b8c$export$49ae800c114df41d).MessageToBig, "Message too big for JSON channel");
      return;
    }
    this._bufferedSend(encodedData);
  }
  constructor(...args) {
    super(...args);
    this.serialization = ($78455e22dea96b8c$export$89f507cf986a947).JSON;
    this.encoder = new TextEncoder();
    this.decoder = new TextDecoder();
    this.stringify = JSON.stringify;
    this.parse = JSON.parse;
  }
}
class $416260bce337df90$export$ecd1fc136c422448 extends ($23779d1881157a18$export$6a678e589c8a4542) {
  static #_ = this.DEFAULT_KEY = "peerjs";
  /**
  * The brokering ID of this peer
  *
  * If no ID was specified in {@apilink Peer | the constructor},
  * this will be `undefined` until the {@apilink PeerEvents | `open`} event is emitted.
  */
  get id() {
    return this._id;
  }
  get options() {
    return this._options;
  }
  get open() {
    return this._open;
  }
  /**
  * @internal
  */
  get socket() {
    return this._socket;
  }
  /**
  * A hash of all connections associated with this peer, keyed by the remote peer's ID.
  * @deprecated
  * Return type will change from Object to Map<string,[]>
  */
  get connections() {
    const plainConnections = /* @__PURE__ */ Object.create(null);
    for (const [k, v] of this._connections) plainConnections[k] = v;
    return plainConnections;
  }
  /**
  * true if this peer and all of its connections can no longer be used.
  */
  get destroyed() {
    return this._destroyed;
  }
  /**
  * false if there is an active connection to the PeerServer.
  */
  get disconnected() {
    return this._disconnected;
  }
  constructor(id, options) {
    super();
    this._serializers = {
      raw: ($bbaee3f15f714663$export$6f88fe47d32c9c94),
      json: ($817f931e3f9096cf$export$48880ac635f47186),
      binary: ($9fcfddb3ae148f88$export$f0a5a64d5bb37108),
      "binary-utf8": ($9fcfddb3ae148f88$export$f0a5a64d5bb37108),
      default: ($9fcfddb3ae148f88$export$f0a5a64d5bb37108)
    };
    this._id = null;
    this._lastServerId = null;
    this._destroyed = false;
    this._disconnected = false;
    this._open = false;
    this._connections = /* @__PURE__ */ new Map();
    this._lostMessages = /* @__PURE__ */ new Map();
    let userId;
    if (id && id.constructor == Object) options = id;
    else if (id) userId = id.toString();
    options = {
      debug: 0,
      host: ($4f4134156c446392$export$7debb50ef11d5e0b).CLOUD_HOST,
      port: ($4f4134156c446392$export$7debb50ef11d5e0b).CLOUD_PORT,
      path: "/",
      key: $416260bce337df90$export$ecd1fc136c422448.DEFAULT_KEY,
      token: ($4f4134156c446392$export$7debb50ef11d5e0b).randomToken(),
      config: ($4f4134156c446392$export$7debb50ef11d5e0b).defaultConfig,
      referrerPolicy: "strict-origin-when-cross-origin",
      serializers: {},
      ...options
    };
    this._options = options;
    this._serializers = {
      ...this._serializers,
      ...this.options.serializers
    };
    if (this._options.host === "/") this._options.host = window.location.hostname;
    if (this._options.path) {
      if (this._options.path[0] !== "/") this._options.path = "/" + this._options.path;
      if (this._options.path[this._options.path.length - 1] !== "/") this._options.path += "/";
    }
    if (this._options.secure === void 0 && this._options.host !== ($4f4134156c446392$export$7debb50ef11d5e0b).CLOUD_HOST) this._options.secure = ($4f4134156c446392$export$7debb50ef11d5e0b).isSecure();
    else if (this._options.host == ($4f4134156c446392$export$7debb50ef11d5e0b).CLOUD_HOST) this._options.secure = true;
    if (this._options.logFunction) ($257947e92926277a$export$2e2bcd8739ae039).setLogFunction(this._options.logFunction);
    ($257947e92926277a$export$2e2bcd8739ae039).logLevel = this._options.debug || 0;
    this._api = new ($abf266641927cd89$export$2c4e825dc9120f87)(options);
    this._socket = this._createServerConnection();
    if (!($4f4134156c446392$export$7debb50ef11d5e0b).supports.audioVideo && !($4f4134156c446392$export$7debb50ef11d5e0b).supports.data) {
      this._delayedAbort(($78455e22dea96b8c$export$9547aaa2e39030ff).BrowserIncompatible, "The current browser does not support WebRTC");
      return;
    }
    if (!!userId && !($4f4134156c446392$export$7debb50ef11d5e0b).validateId(userId)) {
      this._delayedAbort(($78455e22dea96b8c$export$9547aaa2e39030ff).InvalidID, `ID "${userId}" is invalid`);
      return;
    }
    if (userId) this._initialize(userId);
    else this._api.retrieveId().then((id2) => this._initialize(id2)).catch((error) => this._abort(($78455e22dea96b8c$export$9547aaa2e39030ff).ServerError, error));
  }
  _createServerConnection() {
    const socket = new ($8f5bfa60836d261d$export$4798917dbf149b79)(this._options.secure, this._options.host, this._options.port, this._options.path, this._options.key, this._options.pingInterval);
    socket.on(($78455e22dea96b8c$export$3b5c4a4b6354f023).Message, (data) => {
      this._handleMessage(data);
    });
    socket.on(($78455e22dea96b8c$export$3b5c4a4b6354f023).Error, (error) => {
      this._abort(($78455e22dea96b8c$export$9547aaa2e39030ff).SocketError, error);
    });
    socket.on(($78455e22dea96b8c$export$3b5c4a4b6354f023).Disconnected, () => {
      if (this.disconnected) return;
      this.emitError(($78455e22dea96b8c$export$9547aaa2e39030ff).Network, "Lost connection to server.");
      this.disconnect();
    });
    socket.on(($78455e22dea96b8c$export$3b5c4a4b6354f023).Close, () => {
      if (this.disconnected) return;
      this._abort(($78455e22dea96b8c$export$9547aaa2e39030ff).SocketClosed, "Underlying socket is already closed.");
    });
    return socket;
  }
  /** Initialize a connection with the server. */
  _initialize(id) {
    this._id = id;
    this.socket.start(id, this._options.token);
  }
  /** Handles messages from the server. */
  _handleMessage(message) {
    const type = message.type;
    const payload = message.payload;
    const peerId = message.src;
    switch (type) {
      case ($78455e22dea96b8c$export$adb4a1754da6f10d).Open:
        this._lastServerId = this.id;
        this._open = true;
        this.emit("open", this.id);
        break;
      case ($78455e22dea96b8c$export$adb4a1754da6f10d).Error:
        this._abort(($78455e22dea96b8c$export$9547aaa2e39030ff).ServerError, payload.msg);
        break;
      case ($78455e22dea96b8c$export$adb4a1754da6f10d).IdTaken:
        this._abort(($78455e22dea96b8c$export$9547aaa2e39030ff).UnavailableID, `ID "${this.id}" is taken`);
        break;
      case ($78455e22dea96b8c$export$adb4a1754da6f10d).InvalidKey:
        this._abort(($78455e22dea96b8c$export$9547aaa2e39030ff).InvalidKey, `API KEY "${this._options.key}" is invalid`);
        break;
      case ($78455e22dea96b8c$export$adb4a1754da6f10d).Leave:
        ($257947e92926277a$export$2e2bcd8739ae039).log(`Received leave message from ${peerId}`);
        this._cleanupPeer(peerId);
        this._connections.delete(peerId);
        break;
      case ($78455e22dea96b8c$export$adb4a1754da6f10d).Expire:
        this.emitError(($78455e22dea96b8c$export$9547aaa2e39030ff).PeerUnavailable, `Could not connect to peer ${peerId}`);
        break;
      case ($78455e22dea96b8c$export$adb4a1754da6f10d).Offer: {
        const connectionId = payload.connectionId;
        let connection = this.getConnection(peerId, connectionId);
        if (connection) {
          connection.close();
          ($257947e92926277a$export$2e2bcd8739ae039).warn(`Offer received for existing Connection ID:${connectionId}`);
        }
        if (payload.type === ($78455e22dea96b8c$export$3157d57b4135e3bc).Media) {
          const mediaConnection = new ($5c1d08c7c57da9a3$export$4a84e95a2324ac29)(peerId, this, {
            connectionId,
            _payload: payload,
            metadata: payload.metadata
          });
          connection = mediaConnection;
          this._addConnection(peerId, connection);
          this.emit("call", mediaConnection);
        } else if (payload.type === ($78455e22dea96b8c$export$3157d57b4135e3bc).Data) {
          const dataConnection = new this._serializers[payload.serialization](peerId, this, {
            connectionId,
            _payload: payload,
            metadata: payload.metadata,
            label: payload.label,
            serialization: payload.serialization,
            reliable: payload.reliable
          });
          connection = dataConnection;
          this._addConnection(peerId, connection);
          this.emit("connection", dataConnection);
        } else {
          ($257947e92926277a$export$2e2bcd8739ae039).warn(`Received malformed connection type:${payload.type}`);
          return;
        }
        const messages = this._getMessages(connectionId);
        for (const message2 of messages) connection.handleMessage(message2);
        break;
      }
      default: {
        if (!payload) {
          ($257947e92926277a$export$2e2bcd8739ae039).warn(`You received a malformed message from ${peerId} of type ${type}`);
          return;
        }
        const connectionId = payload.connectionId;
        const connection = this.getConnection(peerId, connectionId);
        if (connection && connection.peerConnection)
          connection.handleMessage(message);
        else if (connectionId)
          this._storeMessage(connectionId, message);
        else ($257947e92926277a$export$2e2bcd8739ae039).warn("You received an unrecognized message:", message);
        break;
      }
    }
  }
  /** Stores messages without a set up connection, to be claimed later. */
  _storeMessage(connectionId, message) {
    if (!this._lostMessages.has(connectionId)) this._lostMessages.set(connectionId, []);
    this._lostMessages.get(connectionId).push(message);
  }
  /**
  * Retrieve messages from lost message store
  * @internal
  */
  //TODO Change it to private
  _getMessages(connectionId) {
    const messages = this._lostMessages.get(connectionId);
    if (messages) {
      this._lostMessages.delete(connectionId);
      return messages;
    }
    return [];
  }
  /**
  * Connects to the remote peer specified by id and returns a data connection.
  * @param peer The brokering ID of the remote peer (their {@apilink Peer.id}).
  * @param options for specifying details about Peer Connection
  */
  connect(peer, options = {}) {
    options = {
      serialization: "default",
      ...options
    };
    if (this.disconnected) {
      ($257947e92926277a$export$2e2bcd8739ae039).warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available.");
      this.emitError(($78455e22dea96b8c$export$9547aaa2e39030ff).Disconnected, "Cannot connect to new Peer after disconnecting from server.");
      return;
    }
    const dataConnection = new this._serializers[options.serialization](peer, this, options);
    this._addConnection(peer, dataConnection);
    return dataConnection;
  }
  /**
  * Calls the remote peer specified by id and returns a media connection.
  * @param peer The brokering ID of the remote peer (their peer.id).
  * @param stream The caller's media stream
  * @param options Metadata associated with the connection, passed in by whoever initiated the connection.
  */
  call(peer, stream, options = {}) {
    if (this.disconnected) {
      ($257947e92926277a$export$2e2bcd8739ae039).warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect.");
      this.emitError(($78455e22dea96b8c$export$9547aaa2e39030ff).Disconnected, "Cannot connect to new Peer after disconnecting from server.");
      return;
    }
    if (!stream) {
      ($257947e92926277a$export$2e2bcd8739ae039).error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");
      return;
    }
    const mediaConnection = new ($5c1d08c7c57da9a3$export$4a84e95a2324ac29)(peer, this, {
      ...options,
      _stream: stream
    });
    this._addConnection(peer, mediaConnection);
    return mediaConnection;
  }
  /** Add a data/media connection to this peer. */
  _addConnection(peerId, connection) {
    ($257947e92926277a$export$2e2bcd8739ae039).log(`add connection ${connection.type}:${connection.connectionId} to peerId:${peerId}`);
    if (!this._connections.has(peerId)) this._connections.set(peerId, []);
    this._connections.get(peerId).push(connection);
  }
  //TODO should be private
  _removeConnection(connection) {
    const connections = this._connections.get(connection.peer);
    if (connections) {
      const index = connections.indexOf(connection);
      if (index !== -1) connections.splice(index, 1);
    }
    this._lostMessages.delete(connection.connectionId);
  }
  /** Retrieve a data/media connection for this peer. */
  getConnection(peerId, connectionId) {
    const connections = this._connections.get(peerId);
    if (!connections) return null;
    for (const connection of connections) {
      if (connection.connectionId === connectionId) return connection;
    }
    return null;
  }
  _delayedAbort(type, message) {
    setTimeout(() => {
      this._abort(type, message);
    }, 0);
  }
  /**
  * Emits an error message and destroys the Peer.
  * The Peer is not destroyed if it's in a disconnected state, in which case
  * it retains its disconnected state and its existing connections.
  */
  _abort(type, message) {
    ($257947e92926277a$export$2e2bcd8739ae039).error("Aborting!");
    this.emitError(type, message);
    if (!this._lastServerId) this.destroy();
    else this.disconnect();
  }
  /**
  * Destroys the Peer: closes all active connections as well as the connection
  * to the server.
  *
  * :::caution
  * This cannot be undone; the respective peer object will no longer be able
  * to create or receive any connections, its ID will be forfeited on the server,
  * and all of its data and media connections will be closed.
  * :::
  */
  destroy() {
    if (this.destroyed) return;
    ($257947e92926277a$export$2e2bcd8739ae039).log(`Destroy peer with ID:${this.id}`);
    this.disconnect();
    this._cleanup();
    this._destroyed = true;
    this.emit("close");
  }
  /** Disconnects every connection on this peer. */
  _cleanup() {
    for (const peerId of this._connections.keys()) {
      this._cleanupPeer(peerId);
      this._connections.delete(peerId);
    }
    this.socket.removeAllListeners();
  }
  /** Closes all connections to this peer. */
  _cleanupPeer(peerId) {
    const connections = this._connections.get(peerId);
    if (!connections) return;
    for (const connection of connections) connection.close();
  }
  /**
  * Disconnects the Peer's connection to the PeerServer. Does not close any
  *  active connections.
  * Warning: The peer can no longer create or accept connections after being
  *  disconnected. It also cannot reconnect to the server.
  */
  disconnect() {
    if (this.disconnected) return;
    const currentId = this.id;
    ($257947e92926277a$export$2e2bcd8739ae039).log(`Disconnect peer with ID:${currentId}`);
    this._disconnected = true;
    this._open = false;
    this.socket.close();
    this._lastServerId = currentId;
    this._id = null;
    this.emit("disconnected", currentId);
  }
  /** Attempts to reconnect with the same ID.
  *
  * Only {@apilink Peer.disconnect | disconnected peers} can be reconnected.
  * Destroyed peers cannot be reconnected.
  * If the connection fails (as an example, if the peer's old ID is now taken),
  * the peer's existing connections will not close, but any associated errors events will fire.
  */
  reconnect() {
    if (this.disconnected && !this.destroyed) {
      ($257947e92926277a$export$2e2bcd8739ae039).log(`Attempting reconnection to server with ID ${this._lastServerId}`);
      this._disconnected = false;
      this._initialize(this._lastServerId);
    } else if (this.destroyed) throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");
    else if (!this.disconnected && !this.open)
      ($257947e92926277a$export$2e2bcd8739ae039).error("In a hurry? We're still trying to make the initial connection!");
    else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`);
  }
  /**
  * Get a list of available peer IDs. If you're running your own server, you'll
  * want to set allow_discovery: true in the PeerServer options. If you're using
  * the cloud server, email team@peerjs.com to get the functionality enabled for
  * your key.
  */
  listAllPeers(cb = (_) => {
  }) {
    this._api.listAllPeers().then((peers) => cb(peers)).catch((error) => this._abort(($78455e22dea96b8c$export$9547aaa2e39030ff).ServerError, error));
  }
}
var $dd0187d7f28e386f$export$2e2bcd8739ae039 = ($416260bce337df90$export$ecd1fc136c422448);

const socket = lookup();
const Video = ({ peer }) => {
  const ref = reactExports.useRef();
  reactExports.useEffect(() => {
    ref.current.srcObject = peer;
  }, [peer]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("video", { ref, autoPlay: true, playsInline: true });
};
function VideoPage({ roomId = "123" }) {
  const localMedia = reactExports.useRef(null);
  const [peers, setPeers] = reactExports.useState({});
  reactExports.useRef([]);
  const peer = reactExports.useRef(null);
  const getUniqueId = () => {
    return Math.round(Math.random() * 9999999999).toString(16) + "-" + roomId;
  };
  reactExports.useEffect(() => {
    if (!window.crypto) {
      window.crypto = {
        getRandomValues: function(buffer) {
          for (let i = 0; i < buffer.length; i++) {
            buffer[i] = Math.floor(Math.random() * 256);
          }
        }
      };
    }
    peer.current = new $dd0187d7f28e386f$export$2e2bcd8739ae039(getUniqueId(), {
      host: "call.tefiti.in",
      port: 443,
      secure: true,
      path: "/server",
      debug: 0,
      config: {
        iceServers: [
          { urls: "stun:stun.l.google.com:19302" },
          {
            url: "stun:global.stun.twilio.com:3478",
            urls: "stun:global.stun.twilio.com:3478"
          },
          {
            credential: "/UceUpkEPt6rYGr60FflURk/IQvsoPE3Md9hO8HUaTQ=",
            url: "turn:global.turn.twilio.com:3478?transport=udp",
            urls: "turn:global.turn.twilio.com:3478?transport=udp",
            username: "c67a793741df219bb9134d75e5af87b0baff32a6d72da8fdaf491d38858c10ca"
          },
          {
            credential: "/UceUpkEPt6rYGr60FflURk/IQvsoPE3Md9hO8HUaTQ=",
            url: "turn:global.turn.twilio.com:3478?transport=tcp",
            urls: "turn:global.turn.twilio.com:3478?transport=tcp",
            username: "c67a793741df219bb9134d75e5af87b0baff32a6d72da8fdaf491d38858c10ca"
          },
          {
            credential: "/UceUpkEPt6rYGr60FflURk/IQvsoPE3Md9hO8HUaTQ=",
            url: "turn:global.turn.twilio.com:443?transport=tcp",
            urls: "turn:global.turn.twilio.com:443?transport=tcp",
            username: "c67a793741df219bb9134d75e5af87b0baff32a6d72da8fdaf491d38858c10ca"
          }
        ]
      }
    });
    peer.current.socket.send({
      type: "join-room",
      roomId,
      userId: peer.current.id
    });
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((mediaStream) => {
      localMedia.current.srcObject = mediaStream;
      socket.emit("join-room", roomId, peer.current.id);
      peer.current.on("call", (call) => {
        call.answer(mediaStream);
        call.on("stream", (stream) => {
          const _peers = { ...peers };
          _peers[call.peer] = stream;
          setPeers(_peers);
        });
      });
      socket.on("user-connected", (userId) => {
        if (userId === peer.current.id) return;
        const call = peer.current.call(userId, mediaStream);
        call.on("stream", (userStream) => {
          const _peers = { ...peers };
          _peers[userId] = userStream;
          setPeers(_peers);
        });
        call.on("close", () => {
          const _peers = { ...peers };
          delete _peers[userId];
          setPeers(_peers);
        });
      });
      socket.on("user-disconnected", (userId) => {
        const _peers = { ...peers };
        delete _peers[userId];
        setPeers(_peers);
      });
    }).catch((err) => {
      console.log(err);
    });
    return () => {
      peer.current.destroy();
    };
  }, [roomId]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Video Conference" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("video", { ref: localMedia, autoPlay: true, playsInline: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Remote Video" }),
    Object.entries(peers).map(([key, value]) => /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { peer: value }, key))
  ] });
}

function App() {
  const [roomId, setRoomId] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("roomId");
    if (myParam) {
      setRoomId(myParam);
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: roomId ? /* @__PURE__ */ jsxRuntimeExports.jsx(VideoPage, { roomId }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Room ID not found" }) });
}

clientExports.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(App, {})
);
