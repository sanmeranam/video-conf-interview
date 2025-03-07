function getDefaultExportFromCjs$1(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
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
var browser$3 = { exports: {} };
var process = browser$3.exports = {};
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
var browserExports = browser$3.exports;
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
function isObject(value) {
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
                return isObject(payload);
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || isObject(payload);
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

var browser$2 = {exports: {}};

/**
 * Helpers.
 */

var ms;
var hasRequiredMs;

function requireMs () {
	if (hasRequiredMs) return ms;
	hasRequiredMs = 1;
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var w = d * 7;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} [options]
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */

	ms = function (val, options) {
	  options = options || {};
	  var type = typeof val;
	  if (type === 'string' && val.length > 0) {
	    return parse(val);
	  } else if (type === 'number' && isFinite(val)) {
	    return options.long ? fmtLong(val) : fmtShort(val);
	  }
	  throw new Error(
	    'val is not a non-empty string or a valid number. val=' +
	      JSON.stringify(val)
	  );
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = String(str);
	  if (str.length > 100) {
	    return;
	  }
	  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
	    str
	  );
	  if (!match) {
	    return;
	  }
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'weeks':
	    case 'week':
	    case 'w':
	      return n * w;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	    default:
	      return undefined;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtShort(ms) {
	  var msAbs = Math.abs(ms);
	  if (msAbs >= d) {
	    return Math.round(ms / d) + 'd';
	  }
	  if (msAbs >= h) {
	    return Math.round(ms / h) + 'h';
	  }
	  if (msAbs >= m) {
	    return Math.round(ms / m) + 'm';
	  }
	  if (msAbs >= s) {
	    return Math.round(ms / s) + 's';
	  }
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtLong(ms) {
	  var msAbs = Math.abs(ms);
	  if (msAbs >= d) {
	    return plural(ms, msAbs, d, 'day');
	  }
	  if (msAbs >= h) {
	    return plural(ms, msAbs, h, 'hour');
	  }
	  if (msAbs >= m) {
	    return plural(ms, msAbs, m, 'minute');
	  }
	  if (msAbs >= s) {
	    return plural(ms, msAbs, s, 'second');
	  }
	  return ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, msAbs, n, name) {
	  var isPlural = msAbs >= n * 1.5;
	  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
	}
	return ms;
}

var common;
var hasRequiredCommon;

function requireCommon () {
	if (hasRequiredCommon) return common;
	hasRequiredCommon = 1;
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 */

	function setup(env) {
		createDebug.debug = createDebug;
		createDebug.default = createDebug;
		createDebug.coerce = coerce;
		createDebug.disable = disable;
		createDebug.enable = enable;
		createDebug.enabled = enabled;
		createDebug.humanize = requireMs();
		createDebug.destroy = destroy;

		Object.keys(env).forEach(key => {
			createDebug[key] = env[key];
		});

		/**
		* The currently active debug mode names, and names to skip.
		*/

		createDebug.names = [];
		createDebug.skips = [];

		/**
		* Map of special "%n" handling functions, for the debug "format" argument.
		*
		* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
		*/
		createDebug.formatters = {};

		/**
		* Selects a color for a debug namespace
		* @param {String} namespace The namespace string for the debug instance to be colored
		* @return {Number|String} An ANSI color code for the given namespace
		* @api private
		*/
		function selectColor(namespace) {
			let hash = 0;

			for (let i = 0; i < namespace.length; i++) {
				hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
				hash |= 0; // Convert to 32bit integer
			}

			return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
		}
		createDebug.selectColor = selectColor;

		/**
		* Create a debugger with the given `namespace`.
		*
		* @param {String} namespace
		* @return {Function}
		* @api public
		*/
		function createDebug(namespace) {
			let prevTime;
			let enableOverride = null;
			let namespacesCache;
			let enabledCache;

			function debug(...args) {
				// Disabled?
				if (!debug.enabled) {
					return;
				}

				const self = debug;

				// Set `diff` timestamp
				const curr = Number(new Date());
				const ms = curr - (prevTime || curr);
				self.diff = ms;
				self.prev = prevTime;
				self.curr = curr;
				prevTime = curr;

				args[0] = createDebug.coerce(args[0]);

				if (typeof args[0] !== 'string') {
					// Anything else let's inspect with %O
					args.unshift('%O');
				}

				// Apply any `formatters` transformations
				let index = 0;
				args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
					// If we encounter an escaped % then don't increase the array index
					if (match === '%%') {
						return '%';
					}
					index++;
					const formatter = createDebug.formatters[format];
					if (typeof formatter === 'function') {
						const val = args[index];
						match = formatter.call(self, val);

						// Now we need to remove `args[index]` since it's inlined in the `format`
						args.splice(index, 1);
						index--;
					}
					return match;
				});

				// Apply env-specific formatting (colors, etc.)
				createDebug.formatArgs.call(self, args);

				const logFn = self.log || createDebug.log;
				logFn.apply(self, args);
			}

			debug.namespace = namespace;
			debug.useColors = createDebug.useColors();
			debug.color = createDebug.selectColor(namespace);
			debug.extend = extend;
			debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

			Object.defineProperty(debug, 'enabled', {
				enumerable: true,
				configurable: false,
				get: () => {
					if (enableOverride !== null) {
						return enableOverride;
					}
					if (namespacesCache !== createDebug.namespaces) {
						namespacesCache = createDebug.namespaces;
						enabledCache = createDebug.enabled(namespace);
					}

					return enabledCache;
				},
				set: v => {
					enableOverride = v;
				}
			});

			// Env-specific initialization logic for debug instances
			if (typeof createDebug.init === 'function') {
				createDebug.init(debug);
			}

			return debug;
		}

		function extend(namespace, delimiter) {
			const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
			newDebug.log = this.log;
			return newDebug;
		}

		/**
		* Enables a debug mode by namespaces. This can include modes
		* separated by a colon and wildcards.
		*
		* @param {String} namespaces
		* @api public
		*/
		function enable(namespaces) {
			createDebug.save(namespaces);
			createDebug.namespaces = namespaces;

			createDebug.names = [];
			createDebug.skips = [];

			const split = (typeof namespaces === 'string' ? namespaces : '')
				.trim()
				.replace(' ', ',')
				.split(',')
				.filter(Boolean);

			for (const ns of split) {
				if (ns[0] === '-') {
					createDebug.skips.push(ns.slice(1));
				} else {
					createDebug.names.push(ns);
				}
			}
		}

		/**
		 * Checks if the given string matches a namespace template, honoring
		 * asterisks as wildcards.
		 *
		 * @param {String} search
		 * @param {String} template
		 * @return {Boolean}
		 */
		function matchesTemplate(search, template) {
			let searchIndex = 0;
			let templateIndex = 0;
			let starIndex = -1;
			let matchIndex = 0;

			while (searchIndex < search.length) {
				if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
					// Match character or proceed with wildcard
					if (template[templateIndex] === '*') {
						starIndex = templateIndex;
						matchIndex = searchIndex;
						templateIndex++; // Skip the '*'
					} else {
						searchIndex++;
						templateIndex++;
					}
				} else if (starIndex !== -1) { // eslint-disable-line no-negated-condition
					// Backtrack to the last '*' and try to match more characters
					templateIndex = starIndex + 1;
					matchIndex++;
					searchIndex = matchIndex;
				} else {
					return false; // No match
				}
			}

			// Handle trailing '*' in template
			while (templateIndex < template.length && template[templateIndex] === '*') {
				templateIndex++;
			}

			return templateIndex === template.length;
		}

		/**
		* Disable debug output.
		*
		* @return {String} namespaces
		* @api public
		*/
		function disable() {
			const namespaces = [
				...createDebug.names,
				...createDebug.skips.map(namespace => '-' + namespace)
			].join(',');
			createDebug.enable('');
			return namespaces;
		}

		/**
		* Returns true if the given mode name is enabled, false otherwise.
		*
		* @param {String} name
		* @return {Boolean}
		* @api public
		*/
		function enabled(name) {
			for (const skip of createDebug.skips) {
				if (matchesTemplate(name, skip)) {
					return false;
				}
			}

			for (const ns of createDebug.names) {
				if (matchesTemplate(name, ns)) {
					return true;
				}
			}

			return false;
		}

		/**
		* Coerce `val`.
		*
		* @param {Mixed} val
		* @return {Mixed}
		* @api private
		*/
		function coerce(val) {
			if (val instanceof Error) {
				return val.stack || val.message;
			}
			return val;
		}

		/**
		* XXX DO NOT USE. This is a temporary stub function.
		* XXX It WILL be removed in the next major release.
		*/
		function destroy() {
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}

		createDebug.enable(createDebug.load());

		return createDebug;
	}

	common = setup;
	return common;
}

var hasRequiredBrowser$2;

function requireBrowser$2 () {
	if (hasRequiredBrowser$2) return browser$2.exports;
	hasRequiredBrowser$2 = 1;
	(function (module, exports) {
		var define_process_env_default = {};
		exports.formatArgs = formatArgs;
		exports.save = save;
		exports.load = load;
		exports.useColors = useColors;
		exports.storage = localstorage();
		exports.destroy = /* @__PURE__ */ (() => {
		  let warned = false;
		  return () => {
		    if (!warned) {
		      warned = true;
		      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
		    }
		  };
		})();
		exports.colors = [
		  "#0000CC",
		  "#0000FF",
		  "#0033CC",
		  "#0033FF",
		  "#0066CC",
		  "#0066FF",
		  "#0099CC",
		  "#0099FF",
		  "#00CC00",
		  "#00CC33",
		  "#00CC66",
		  "#00CC99",
		  "#00CCCC",
		  "#00CCFF",
		  "#3300CC",
		  "#3300FF",
		  "#3333CC",
		  "#3333FF",
		  "#3366CC",
		  "#3366FF",
		  "#3399CC",
		  "#3399FF",
		  "#33CC00",
		  "#33CC33",
		  "#33CC66",
		  "#33CC99",
		  "#33CCCC",
		  "#33CCFF",
		  "#6600CC",
		  "#6600FF",
		  "#6633CC",
		  "#6633FF",
		  "#66CC00",
		  "#66CC33",
		  "#9900CC",
		  "#9900FF",
		  "#9933CC",
		  "#9933FF",
		  "#99CC00",
		  "#99CC33",
		  "#CC0000",
		  "#CC0033",
		  "#CC0066",
		  "#CC0099",
		  "#CC00CC",
		  "#CC00FF",
		  "#CC3300",
		  "#CC3333",
		  "#CC3366",
		  "#CC3399",
		  "#CC33CC",
		  "#CC33FF",
		  "#CC6600",
		  "#CC6633",
		  "#CC9900",
		  "#CC9933",
		  "#CCCC00",
		  "#CCCC33",
		  "#FF0000",
		  "#FF0033",
		  "#FF0066",
		  "#FF0099",
		  "#FF00CC",
		  "#FF00FF",
		  "#FF3300",
		  "#FF3333",
		  "#FF3366",
		  "#FF3399",
		  "#FF33CC",
		  "#FF33FF",
		  "#FF6600",
		  "#FF6633",
		  "#FF9900",
		  "#FF9933",
		  "#FFCC00",
		  "#FFCC33"
		];
		function useColors() {
		  if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
		    return true;
		  }
		  if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		    return false;
		  }
		  let m;
		  return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
		  typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
		  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		  typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
		  typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
		}
		function formatArgs(args) {
		  args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
		  if (!this.useColors) {
		    return;
		  }
		  const c = "color: " + this.color;
		  args.splice(1, 0, c, "color: inherit");
		  let index = 0;
		  let lastC = 0;
		  args[0].replace(/%[a-zA-Z%]/g, (match) => {
		    if (match === "%%") {
		      return;
		    }
		    index++;
		    if (match === "%c") {
		      lastC = index;
		    }
		  });
		  args.splice(lastC, 0, c);
		}
		exports.log = console.debug || console.log || (() => {
		});
		function save(namespaces) {
		  try {
		    if (namespaces) {
		      exports.storage.setItem("debug", namespaces);
		    } else {
		      exports.storage.removeItem("debug");
		    }
		  } catch (error) {
		  }
		}
		function load() {
		  let r;
		  try {
		    r = exports.storage.getItem("debug");
		  } catch (error) {
		  }
		  if (!r && typeof process$1 !== "undefined" && "env" in process$1) {
		    r = define_process_env_default.DEBUG;
		  }
		  return r;
		}
		function localstorage() {
		  try {
		    return localStorage;
		  } catch (error) {
		  }
		}
		module.exports = requireCommon()(exports);
		const { formatters } = module.exports;
		formatters.j = function(v) {
		  try {
		    return JSON.stringify(v);
		  } catch (error) {
		    return "[UnexpectedJSONParseError]: " + error.message;
		  }
		}; 
	} (browser$2, browser$2.exports));
	return browser$2.exports;
}

var getBrowserRtc;
var hasRequiredGetBrowserRtc;

function requireGetBrowserRtc () {
	if (hasRequiredGetBrowserRtc) return getBrowserRtc;
	hasRequiredGetBrowserRtc = 1;
	getBrowserRtc = function getBrowserRTC() {
	  if (typeof globalThis === "undefined") return null;
	  var wrtc = {
	    RTCPeerConnection: globalThis.RTCPeerConnection || globalThis.mozRTCPeerConnection || globalThis.webkitRTCPeerConnection,
	    RTCSessionDescription: globalThis.RTCSessionDescription || globalThis.mozRTCSessionDescription || globalThis.webkitRTCSessionDescription,
	    RTCIceCandidate: globalThis.RTCIceCandidate || globalThis.mozRTCIceCandidate || globalThis.webkitRTCIceCandidate
	  };
	  if (!wrtc.RTCPeerConnection) return null;
	  return wrtc;
	};
	return getBrowserRtc;
}

var browser$1 = {exports: {}};

var safeBuffer = {exports: {}};

var dist = {};

var hasRequiredDist;

function requireDist () {
	if (hasRequiredDist) return dist;
	hasRequiredDist = 1;
	(function (exports) {
		Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
		var buffer = {};
		var base64Js = {};
		base64Js.byteLength = byteLength;
		base64Js.toByteArray = toByteArray;
		base64Js.fromByteArray = fromByteArray;
		var lookup = [];
		var revLookup = [];
		var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
		var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		for (var i = 0, len = code.length; i < len; ++i) {
		  lookup[i] = code[i];
		  revLookup[code.charCodeAt(i)] = i;
		}
		revLookup["-".charCodeAt(0)] = 62;
		revLookup["_".charCodeAt(0)] = 63;
		function getLens(b64) {
		  var len2 = b64.length;
		  if (len2 % 4 > 0) {
		    throw new Error("Invalid string. Length must be a multiple of 4");
		  }
		  var validLen = b64.indexOf("=");
		  if (validLen === -1) validLen = len2;
		  var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
		  return [validLen, placeHoldersLen];
		}
		function byteLength(b64) {
		  var lens = getLens(b64);
		  var validLen = lens[0];
		  var placeHoldersLen = lens[1];
		  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
		}
		function _byteLength(b64, validLen, placeHoldersLen) {
		  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
		}
		function toByteArray(b64) {
		  var tmp;
		  var lens = getLens(b64);
		  var validLen = lens[0];
		  var placeHoldersLen = lens[1];
		  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
		  var curByte = 0;
		  var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
		  var i2;
		  for (i2 = 0; i2 < len2; i2 += 4) {
		    tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
		    arr[curByte++] = tmp >> 16 & 255;
		    arr[curByte++] = tmp >> 8 & 255;
		    arr[curByte++] = tmp & 255;
		  }
		  if (placeHoldersLen === 2) {
		    tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
		    arr[curByte++] = tmp & 255;
		  }
		  if (placeHoldersLen === 1) {
		    tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
		    arr[curByte++] = tmp >> 8 & 255;
		    arr[curByte++] = tmp & 255;
		  }
		  return arr;
		}
		function tripletToBase64(num) {
		  return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
		}
		function encodeChunk(uint8, start, end) {
		  var tmp;
		  var output = [];
		  for (var i2 = start; i2 < end; i2 += 3) {
		    tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
		    output.push(tripletToBase64(tmp));
		  }
		  return output.join("");
		}
		function fromByteArray(uint8) {
		  var tmp;
		  var len2 = uint8.length;
		  var extraBytes = len2 % 3;
		  var parts = [];
		  var maxChunkLength = 16383;
		  for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
		    parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
		  }
		  if (extraBytes === 1) {
		    tmp = uint8[len2 - 1];
		    parts.push(
		      lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
		    );
		  } else if (extraBytes === 2) {
		    tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
		    parts.push(
		      lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
		    );
		  }
		  return parts.join("");
		}
		var ieee754 = {};
		/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
		ieee754.read = function(buffer2, offset, isLE, mLen, nBytes) {
		  var e, m;
		  var eLen = nBytes * 8 - mLen - 1;
		  var eMax = (1 << eLen) - 1;
		  var eBias = eMax >> 1;
		  var nBits = -7;
		  var i2 = isLE ? nBytes - 1 : 0;
		  var d = isLE ? -1 : 1;
		  var s = buffer2[offset + i2];
		  i2 += d;
		  e = s & (1 << -nBits) - 1;
		  s >>= -nBits;
		  nBits += eLen;
		  for (; nBits > 0; e = e * 256 + buffer2[offset + i2], i2 += d, nBits -= 8) {
		  }
		  m = e & (1 << -nBits) - 1;
		  e >>= -nBits;
		  nBits += mLen;
		  for (; nBits > 0; m = m * 256 + buffer2[offset + i2], i2 += d, nBits -= 8) {
		  }
		  if (e === 0) {
		    e = 1 - eBias;
		  } else if (e === eMax) {
		    return m ? NaN : (s ? -1 : 1) * Infinity;
		  } else {
		    m = m + Math.pow(2, mLen);
		    e = e - eBias;
		  }
		  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
		};
		ieee754.write = function(buffer2, value, offset, isLE, mLen, nBytes) {
		  var e, m, c;
		  var eLen = nBytes * 8 - mLen - 1;
		  var eMax = (1 << eLen) - 1;
		  var eBias = eMax >> 1;
		  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
		  var i2 = isLE ? 0 : nBytes - 1;
		  var d = isLE ? 1 : -1;
		  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
		  value = Math.abs(value);
		  if (isNaN(value) || value === Infinity) {
		    m = isNaN(value) ? 1 : 0;
		    e = eMax;
		  } else {
		    e = Math.floor(Math.log(value) / Math.LN2);
		    if (value * (c = Math.pow(2, -e)) < 1) {
		      e--;
		      c *= 2;
		    }
		    if (e + eBias >= 1) {
		      value += rt / c;
		    } else {
		      value += rt * Math.pow(2, 1 - eBias);
		    }
		    if (value * c >= 2) {
		      e++;
		      c /= 2;
		    }
		    if (e + eBias >= eMax) {
		      m = 0;
		      e = eMax;
		    } else if (e + eBias >= 1) {
		      m = (value * c - 1) * Math.pow(2, mLen);
		      e = e + eBias;
		    } else {
		      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
		      e = 0;
		    }
		  }
		  for (; mLen >= 8; buffer2[offset + i2] = m & 255, i2 += d, m /= 256, mLen -= 8) {
		  }
		  e = e << mLen | m;
		  eLen += mLen;
		  for (; eLen > 0; buffer2[offset + i2] = e & 255, i2 += d, e /= 256, eLen -= 8) {
		  }
		  buffer2[offset + i2 - d] |= s * 128;
		};
		/*!
		 * The buffer module from node.js, for the browser.
		 *
		 * @author   Feross Aboukhadijeh <https://feross.org>
		 * @license  MIT
		 */
		(function(exports2) {
		  const base64 = base64Js;
		  const ieee754$1 = ieee754;
		  const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
		  exports2.Buffer = Buffer2;
		  exports2.SlowBuffer = SlowBuffer;
		  exports2.INSPECT_MAX_BYTES = 50;
		  const K_MAX_LENGTH = 2147483647;
		  exports2.kMaxLength = K_MAX_LENGTH;
		  const { Uint8Array: GlobalUint8Array, ArrayBuffer: GlobalArrayBuffer, SharedArrayBuffer: GlobalSharedArrayBuffer } = globalThis;
		  Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
		  if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
		    console.error(
		      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
		    );
		  }
		  function typedArraySupport() {
		    try {
		      const arr = new GlobalUint8Array(1);
		      const proto = { foo: function() {
		        return 42;
		      } };
		      Object.setPrototypeOf(proto, GlobalUint8Array.prototype);
		      Object.setPrototypeOf(arr, proto);
		      return arr.foo() === 42;
		    } catch (e) {
		      return false;
		    }
		  }
		  Object.defineProperty(Buffer2.prototype, "parent", {
		    enumerable: true,
		    get: function() {
		      if (!Buffer2.isBuffer(this)) return void 0;
		      return this.buffer;
		    }
		  });
		  Object.defineProperty(Buffer2.prototype, "offset", {
		    enumerable: true,
		    get: function() {
		      if (!Buffer2.isBuffer(this)) return void 0;
		      return this.byteOffset;
		    }
		  });
		  function createBuffer(length) {
		    if (length > K_MAX_LENGTH) {
		      throw new RangeError('The value "' + length + '" is invalid for option "size"');
		    }
		    const buf = new GlobalUint8Array(length);
		    Object.setPrototypeOf(buf, Buffer2.prototype);
		    return buf;
		  }
		  function Buffer2(arg, encodingOrOffset, length) {
		    if (typeof arg === "number") {
		      if (typeof encodingOrOffset === "string") {
		        throw new TypeError(
		          'The "string" argument must be of type string. Received type number'
		        );
		      }
		      return allocUnsafe(arg);
		    }
		    return from(arg, encodingOrOffset, length);
		  }
		  Buffer2.poolSize = 8192;
		  function from(value, encodingOrOffset, length) {
		    if (typeof value === "string") {
		      return fromString(value, encodingOrOffset);
		    }
		    if (GlobalArrayBuffer.isView(value)) {
		      return fromArrayView(value);
		    }
		    if (value == null) {
		      throw new TypeError(
		        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
		      );
		    }
		    if (isInstance(value, GlobalArrayBuffer) || value && isInstance(value.buffer, GlobalArrayBuffer)) {
		      return fromArrayBuffer(value, encodingOrOffset, length);
		    }
		    if (typeof GlobalSharedArrayBuffer !== "undefined" && (isInstance(value, GlobalSharedArrayBuffer) || value && isInstance(value.buffer, GlobalSharedArrayBuffer))) {
		      return fromArrayBuffer(value, encodingOrOffset, length);
		    }
		    if (typeof value === "number") {
		      throw new TypeError(
		        'The "value" argument must not be of type number. Received type number'
		      );
		    }
		    const valueOf = value.valueOf && value.valueOf();
		    if (valueOf != null && valueOf !== value) {
		      return Buffer2.from(valueOf, encodingOrOffset, length);
		    }
		    const b = fromObject(value);
		    if (b) return b;
		    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
		      return Buffer2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
		    }
		    throw new TypeError(
		      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
		    );
		  }
		  Buffer2.from = function(value, encodingOrOffset, length) {
		    return from(value, encodingOrOffset, length);
		  };
		  Object.setPrototypeOf(Buffer2.prototype, GlobalUint8Array.prototype);
		  Object.setPrototypeOf(Buffer2, GlobalUint8Array);
		  function assertSize(size) {
		    if (typeof size !== "number") {
		      throw new TypeError('"size" argument must be of type number');
		    } else if (size < 0) {
		      throw new RangeError('The value "' + size + '" is invalid for option "size"');
		    }
		  }
		  function alloc(size, fill, encoding) {
		    assertSize(size);
		    if (size <= 0) {
		      return createBuffer(size);
		    }
		    if (fill !== void 0) {
		      return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
		    }
		    return createBuffer(size);
		  }
		  Buffer2.alloc = function(size, fill, encoding) {
		    return alloc(size, fill, encoding);
		  };
		  function allocUnsafe(size) {
		    assertSize(size);
		    return createBuffer(size < 0 ? 0 : checked(size) | 0);
		  }
		  Buffer2.allocUnsafe = function(size) {
		    return allocUnsafe(size);
		  };
		  Buffer2.allocUnsafeSlow = function(size) {
		    return allocUnsafe(size);
		  };
		  function fromString(string, encoding) {
		    if (typeof encoding !== "string" || encoding === "") {
		      encoding = "utf8";
		    }
		    if (!Buffer2.isEncoding(encoding)) {
		      throw new TypeError("Unknown encoding: " + encoding);
		    }
		    const length = byteLength2(string, encoding) | 0;
		    let buf = createBuffer(length);
		    const actual = buf.write(string, encoding);
		    if (actual !== length) {
		      buf = buf.slice(0, actual);
		    }
		    return buf;
		  }
		  function fromArrayLike(array) {
		    const length = array.length < 0 ? 0 : checked(array.length) | 0;
		    const buf = createBuffer(length);
		    for (let i2 = 0; i2 < length; i2 += 1) {
		      buf[i2] = array[i2] & 255;
		    }
		    return buf;
		  }
		  function fromArrayView(arrayView) {
		    if (isInstance(arrayView, GlobalUint8Array)) {
		      const copy = new GlobalUint8Array(arrayView);
		      return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
		    }
		    return fromArrayLike(arrayView);
		  }
		  function fromArrayBuffer(array, byteOffset, length) {
		    if (byteOffset < 0 || array.byteLength < byteOffset) {
		      throw new RangeError('"offset" is outside of buffer bounds');
		    }
		    if (array.byteLength < byteOffset + (length || 0)) {
		      throw new RangeError('"length" is outside of buffer bounds');
		    }
		    let buf;
		    if (byteOffset === void 0 && length === void 0) {
		      buf = new GlobalUint8Array(array);
		    } else if (length === void 0) {
		      buf = new GlobalUint8Array(array, byteOffset);
		    } else {
		      buf = new GlobalUint8Array(array, byteOffset, length);
		    }
		    Object.setPrototypeOf(buf, Buffer2.prototype);
		    return buf;
		  }
		  function fromObject(obj) {
		    if (Buffer2.isBuffer(obj)) {
		      const len2 = checked(obj.length) | 0;
		      const buf = createBuffer(len2);
		      if (buf.length === 0) {
		        return buf;
		      }
		      obj.copy(buf, 0, 0, len2);
		      return buf;
		    }
		    if (obj.length !== void 0) {
		      if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
		        return createBuffer(0);
		      }
		      return fromArrayLike(obj);
		    }
		    if (obj.type === "Buffer" && Array.isArray(obj.data)) {
		      return fromArrayLike(obj.data);
		    }
		  }
		  function checked(length) {
		    if (length >= K_MAX_LENGTH) {
		      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
		    }
		    return length | 0;
		  }
		  function SlowBuffer(length) {
		    if (+length != length) {
		      length = 0;
		    }
		    return Buffer2.alloc(+length);
		  }
		  Buffer2.isBuffer = function isBuffer(b) {
		    return b != null && b._isBuffer === true && b !== Buffer2.prototype;
		  };
		  Buffer2.compare = function compare(a, b) {
		    if (isInstance(a, GlobalUint8Array)) a = Buffer2.from(a, a.offset, a.byteLength);
		    if (isInstance(b, GlobalUint8Array)) b = Buffer2.from(b, b.offset, b.byteLength);
		    if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
		      throw new TypeError(
		        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
		      );
		    }
		    if (a === b) return 0;
		    let x = a.length;
		    let y = b.length;
		    for (let i2 = 0, len2 = Math.min(x, y); i2 < len2; ++i2) {
		      if (a[i2] !== b[i2]) {
		        x = a[i2];
		        y = b[i2];
		        break;
		      }
		    }
		    if (x < y) return -1;
		    if (y < x) return 1;
		    return 0;
		  };
		  Buffer2.isEncoding = function isEncoding(encoding) {
		    switch (String(encoding).toLowerCase()) {
		      case "hex":
		      case "utf8":
		      case "utf-8":
		      case "ascii":
		      case "latin1":
		      case "binary":
		      case "base64":
		      case "ucs2":
		      case "ucs-2":
		      case "utf16le":
		      case "utf-16le":
		        return true;
		      default:
		        return false;
		    }
		  };
		  Buffer2.concat = function concat(list, length) {
		    if (!Array.isArray(list)) {
		      throw new TypeError('"list" argument must be an Array of Buffers');
		    }
		    if (list.length === 0) {
		      return Buffer2.alloc(0);
		    }
		    let i2;
		    if (length === void 0) {
		      length = 0;
		      for (i2 = 0; i2 < list.length; ++i2) {
		        length += list[i2].length;
		      }
		    }
		    const buffer2 = Buffer2.allocUnsafe(length);
		    let pos = 0;
		    for (i2 = 0; i2 < list.length; ++i2) {
		      let buf = list[i2];
		      if (isInstance(buf, GlobalUint8Array)) {
		        if (pos + buf.length > buffer2.length) {
		          if (!Buffer2.isBuffer(buf)) buf = Buffer2.from(buf);
		          buf.copy(buffer2, pos);
		        } else {
		          GlobalUint8Array.prototype.set.call(
		            buffer2,
		            buf,
		            pos
		          );
		        }
		      } else if (!Buffer2.isBuffer(buf)) {
		        throw new TypeError('"list" argument must be an Array of Buffers');
		      } else {
		        buf.copy(buffer2, pos);
		      }
		      pos += buf.length;
		    }
		    return buffer2;
		  };
		  function byteLength2(string, encoding) {
		    if (Buffer2.isBuffer(string)) {
		      return string.length;
		    }
		    if (GlobalArrayBuffer.isView(string) || isInstance(string, GlobalArrayBuffer)) {
		      return string.byteLength;
		    }
		    if (typeof string !== "string") {
		      throw new TypeError(
		        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
		      );
		    }
		    const len2 = string.length;
		    const mustMatch = arguments.length > 2 && arguments[2] === true;
		    if (!mustMatch && len2 === 0) return 0;
		    let loweredCase = false;
		    for (; ; ) {
		      switch (encoding) {
		        case "ascii":
		        case "latin1":
		        case "binary":
		          return len2;
		        case "utf8":
		        case "utf-8":
		          return utf8ToBytes(string).length;
		        case "ucs2":
		        case "ucs-2":
		        case "utf16le":
		        case "utf-16le":
		          return len2 * 2;
		        case "hex":
		          return len2 >>> 1;
		        case "base64":
		          return base64ToBytes(string).length;
		        default:
		          if (loweredCase) {
		            return mustMatch ? -1 : utf8ToBytes(string).length;
		          }
		          encoding = ("" + encoding).toLowerCase();
		          loweredCase = true;
		      }
		    }
		  }
		  Buffer2.byteLength = byteLength2;
		  function slowToString(encoding, start, end) {
		    let loweredCase = false;
		    if (start === void 0 || start < 0) {
		      start = 0;
		    }
		    if (start > this.length) {
		      return "";
		    }
		    if (end === void 0 || end > this.length) {
		      end = this.length;
		    }
		    if (end <= 0) {
		      return "";
		    }
		    end >>>= 0;
		    start >>>= 0;
		    if (end <= start) {
		      return "";
		    }
		    if (!encoding) encoding = "utf8";
		    while (true) {
		      switch (encoding) {
		        case "hex":
		          return hexSlice(this, start, end);
		        case "utf8":
		        case "utf-8":
		          return utf8Slice(this, start, end);
		        case "ascii":
		          return asciiSlice(this, start, end);
		        case "latin1":
		        case "binary":
		          return latin1Slice(this, start, end);
		        case "base64":
		          return base64Slice(this, start, end);
		        case "ucs2":
		        case "ucs-2":
		        case "utf16le":
		        case "utf-16le":
		          return utf16leSlice(this, start, end);
		        default:
		          if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
		          encoding = (encoding + "").toLowerCase();
		          loweredCase = true;
		      }
		    }
		  }
		  Buffer2.prototype._isBuffer = true;
		  function swap(b, n, m) {
		    const i2 = b[n];
		    b[n] = b[m];
		    b[m] = i2;
		  }
		  Buffer2.prototype.swap16 = function swap16() {
		    const len2 = this.length;
		    if (len2 % 2 !== 0) {
		      throw new RangeError("Buffer size must be a multiple of 16-bits");
		    }
		    for (let i2 = 0; i2 < len2; i2 += 2) {
		      swap(this, i2, i2 + 1);
		    }
		    return this;
		  };
		  Buffer2.prototype.swap32 = function swap32() {
		    const len2 = this.length;
		    if (len2 % 4 !== 0) {
		      throw new RangeError("Buffer size must be a multiple of 32-bits");
		    }
		    for (let i2 = 0; i2 < len2; i2 += 4) {
		      swap(this, i2, i2 + 3);
		      swap(this, i2 + 1, i2 + 2);
		    }
		    return this;
		  };
		  Buffer2.prototype.swap64 = function swap64() {
		    const len2 = this.length;
		    if (len2 % 8 !== 0) {
		      throw new RangeError("Buffer size must be a multiple of 64-bits");
		    }
		    for (let i2 = 0; i2 < len2; i2 += 8) {
		      swap(this, i2, i2 + 7);
		      swap(this, i2 + 1, i2 + 6);
		      swap(this, i2 + 2, i2 + 5);
		      swap(this, i2 + 3, i2 + 4);
		    }
		    return this;
		  };
		  Buffer2.prototype.toString = function toString() {
		    const length = this.length;
		    if (length === 0) return "";
		    if (arguments.length === 0) return utf8Slice(this, 0, length);
		    return slowToString.apply(this, arguments);
		  };
		  Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
		  Buffer2.prototype.equals = function equals(b) {
		    if (!Buffer2.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
		    if (this === b) return true;
		    return Buffer2.compare(this, b) === 0;
		  };
		  Buffer2.prototype.inspect = function inspect() {
		    let str = "";
		    const max = exports2.INSPECT_MAX_BYTES;
		    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
		    if (this.length > max) str += " ... ";
		    return "<Buffer " + str + ">";
		  };
		  if (customInspectSymbol) {
		    Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
		  }
		  Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
		    if (isInstance(target, GlobalUint8Array)) {
		      target = Buffer2.from(target, target.offset, target.byteLength);
		    }
		    if (!Buffer2.isBuffer(target)) {
		      throw new TypeError(
		        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
		      );
		    }
		    if (start === void 0) {
		      start = 0;
		    }
		    if (end === void 0) {
		      end = target ? target.length : 0;
		    }
		    if (thisStart === void 0) {
		      thisStart = 0;
		    }
		    if (thisEnd === void 0) {
		      thisEnd = this.length;
		    }
		    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
		      throw new RangeError("out of range index");
		    }
		    if (thisStart >= thisEnd && start >= end) {
		      return 0;
		    }
		    if (thisStart >= thisEnd) {
		      return -1;
		    }
		    if (start >= end) {
		      return 1;
		    }
		    start >>>= 0;
		    end >>>= 0;
		    thisStart >>>= 0;
		    thisEnd >>>= 0;
		    if (this === target) return 0;
		    let x = thisEnd - thisStart;
		    let y = end - start;
		    const len2 = Math.min(x, y);
		    const thisCopy = this.slice(thisStart, thisEnd);
		    const targetCopy = target.slice(start, end);
		    for (let i2 = 0; i2 < len2; ++i2) {
		      if (thisCopy[i2] !== targetCopy[i2]) {
		        x = thisCopy[i2];
		        y = targetCopy[i2];
		        break;
		      }
		    }
		    if (x < y) return -1;
		    if (y < x) return 1;
		    return 0;
		  };
		  function bidirectionalIndexOf(buffer2, val, byteOffset, encoding, dir) {
		    if (buffer2.length === 0) return -1;
		    if (typeof byteOffset === "string") {
		      encoding = byteOffset;
		      byteOffset = 0;
		    } else if (byteOffset > 2147483647) {
		      byteOffset = 2147483647;
		    } else if (byteOffset < -2147483648) {
		      byteOffset = -2147483648;
		    }
		    byteOffset = +byteOffset;
		    if (numberIsNaN(byteOffset)) {
		      byteOffset = dir ? 0 : buffer2.length - 1;
		    }
		    if (byteOffset < 0) byteOffset = buffer2.length + byteOffset;
		    if (byteOffset >= buffer2.length) {
		      if (dir) return -1;
		      else byteOffset = buffer2.length - 1;
		    } else if (byteOffset < 0) {
		      if (dir) byteOffset = 0;
		      else return -1;
		    }
		    if (typeof val === "string") {
		      val = Buffer2.from(val, encoding);
		    }
		    if (Buffer2.isBuffer(val)) {
		      if (val.length === 0) {
		        return -1;
		      }
		      return arrayIndexOf(buffer2, val, byteOffset, encoding, dir);
		    } else if (typeof val === "number") {
		      val = val & 255;
		      if (typeof GlobalUint8Array.prototype.indexOf === "function") {
		        if (dir) {
		          return GlobalUint8Array.prototype.indexOf.call(buffer2, val, byteOffset);
		        } else {
		          return GlobalUint8Array.prototype.lastIndexOf.call(buffer2, val, byteOffset);
		        }
		      }
		      return arrayIndexOf(buffer2, [val], byteOffset, encoding, dir);
		    }
		    throw new TypeError("val must be string, number or Buffer");
		  }
		  function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
		    let indexSize = 1;
		    let arrLength = arr.length;
		    let valLength = val.length;
		    if (encoding !== void 0) {
		      encoding = String(encoding).toLowerCase();
		      if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
		        if (arr.length < 2 || val.length < 2) {
		          return -1;
		        }
		        indexSize = 2;
		        arrLength /= 2;
		        valLength /= 2;
		        byteOffset /= 2;
		      }
		    }
		    function read(buf, i3) {
		      if (indexSize === 1) {
		        return buf[i3];
		      } else {
		        return buf.readUInt16BE(i3 * indexSize);
		      }
		    }
		    let i2;
		    if (dir) {
		      let foundIndex = -1;
		      for (i2 = byteOffset; i2 < arrLength; i2++) {
		        if (read(arr, i2) === read(val, foundIndex === -1 ? 0 : i2 - foundIndex)) {
		          if (foundIndex === -1) foundIndex = i2;
		          if (i2 - foundIndex + 1 === valLength) return foundIndex * indexSize;
		        } else {
		          if (foundIndex !== -1) i2 -= i2 - foundIndex;
		          foundIndex = -1;
		        }
		      }
		    } else {
		      if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
		      for (i2 = byteOffset; i2 >= 0; i2--) {
		        let found = true;
		        for (let j = 0; j < valLength; j++) {
		          if (read(arr, i2 + j) !== read(val, j)) {
		            found = false;
		            break;
		          }
		        }
		        if (found) return i2;
		      }
		    }
		    return -1;
		  }
		  Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
		    return this.indexOf(val, byteOffset, encoding) !== -1;
		  };
		  Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
		    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
		  };
		  Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
		    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
		  };
		  function hexWrite(buf, string, offset, length) {
		    offset = Number(offset) || 0;
		    const remaining = buf.length - offset;
		    if (!length) {
		      length = remaining;
		    } else {
		      length = Number(length);
		      if (length > remaining) {
		        length = remaining;
		      }
		    }
		    const strLen = string.length;
		    if (length > strLen / 2) {
		      length = strLen / 2;
		    }
		    let i2;
		    for (i2 = 0; i2 < length; ++i2) {
		      const parsed = parseInt(string.substr(i2 * 2, 2), 16);
		      if (numberIsNaN(parsed)) return i2;
		      buf[offset + i2] = parsed;
		    }
		    return i2;
		  }
		  function utf8Write(buf, string, offset, length) {
		    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
		  }
		  function asciiWrite(buf, string, offset, length) {
		    return blitBuffer(asciiToBytes(string), buf, offset, length);
		  }
		  function base64Write(buf, string, offset, length) {
		    return blitBuffer(base64ToBytes(string), buf, offset, length);
		  }
		  function ucs2Write(buf, string, offset, length) {
		    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
		  }
		  Buffer2.prototype.write = function write(string, offset, length, encoding) {
		    if (offset === void 0) {
		      encoding = "utf8";
		      length = this.length;
		      offset = 0;
		    } else if (length === void 0 && typeof offset === "string") {
		      encoding = offset;
		      length = this.length;
		      offset = 0;
		    } else if (isFinite(offset)) {
		      offset = offset >>> 0;
		      if (isFinite(length)) {
		        length = length >>> 0;
		        if (encoding === void 0) encoding = "utf8";
		      } else {
		        encoding = length;
		        length = void 0;
		      }
		    } else {
		      throw new Error(
		        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
		      );
		    }
		    const remaining = this.length - offset;
		    if (length === void 0 || length > remaining) length = remaining;
		    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
		      throw new RangeError("Attempt to write outside buffer bounds");
		    }
		    if (!encoding) encoding = "utf8";
		    let loweredCase = false;
		    for (; ; ) {
		      switch (encoding) {
		        case "hex":
		          return hexWrite(this, string, offset, length);
		        case "utf8":
		        case "utf-8":
		          return utf8Write(this, string, offset, length);
		        case "ascii":
		        case "latin1":
		        case "binary":
		          return asciiWrite(this, string, offset, length);
		        case "base64":
		          return base64Write(this, string, offset, length);
		        case "ucs2":
		        case "ucs-2":
		        case "utf16le":
		        case "utf-16le":
		          return ucs2Write(this, string, offset, length);
		        default:
		          if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
		          encoding = ("" + encoding).toLowerCase();
		          loweredCase = true;
		      }
		    }
		  };
		  Buffer2.prototype.toJSON = function toJSON() {
		    return {
		      type: "Buffer",
		      data: Array.prototype.slice.call(this._arr || this, 0)
		    };
		  };
		  function base64Slice(buf, start, end) {
		    if (start === 0 && end === buf.length) {
		      return base64.fromByteArray(buf);
		    } else {
		      return base64.fromByteArray(buf.slice(start, end));
		    }
		  }
		  function utf8Slice(buf, start, end) {
		    end = Math.min(buf.length, end);
		    const res = [];
		    let i2 = start;
		    while (i2 < end) {
		      const firstByte = buf[i2];
		      let codePoint = null;
		      let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
		      if (i2 + bytesPerSequence <= end) {
		        let secondByte, thirdByte, fourthByte, tempCodePoint;
		        switch (bytesPerSequence) {
		          case 1:
		            if (firstByte < 128) {
		              codePoint = firstByte;
		            }
		            break;
		          case 2:
		            secondByte = buf[i2 + 1];
		            if ((secondByte & 192) === 128) {
		              tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
		              if (tempCodePoint > 127) {
		                codePoint = tempCodePoint;
		              }
		            }
		            break;
		          case 3:
		            secondByte = buf[i2 + 1];
		            thirdByte = buf[i2 + 2];
		            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
		              tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
		              if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
		                codePoint = tempCodePoint;
		              }
		            }
		            break;
		          case 4:
		            secondByte = buf[i2 + 1];
		            thirdByte = buf[i2 + 2];
		            fourthByte = buf[i2 + 3];
		            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
		              tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
		              if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
		                codePoint = tempCodePoint;
		              }
		            }
		        }
		      }
		      if (codePoint === null) {
		        codePoint = 65533;
		        bytesPerSequence = 1;
		      } else if (codePoint > 65535) {
		        codePoint -= 65536;
		        res.push(codePoint >>> 10 & 1023 | 55296);
		        codePoint = 56320 | codePoint & 1023;
		      }
		      res.push(codePoint);
		      i2 += bytesPerSequence;
		    }
		    return decodeCodePointsArray(res);
		  }
		  const MAX_ARGUMENTS_LENGTH = 4096;
		  function decodeCodePointsArray(codePoints) {
		    const len2 = codePoints.length;
		    if (len2 <= MAX_ARGUMENTS_LENGTH) {
		      return String.fromCharCode.apply(String, codePoints);
		    }
		    let res = "";
		    let i2 = 0;
		    while (i2 < len2) {
		      res += String.fromCharCode.apply(
		        String,
		        codePoints.slice(i2, i2 += MAX_ARGUMENTS_LENGTH)
		      );
		    }
		    return res;
		  }
		  function asciiSlice(buf, start, end) {
		    let ret = "";
		    end = Math.min(buf.length, end);
		    for (let i2 = start; i2 < end; ++i2) {
		      ret += String.fromCharCode(buf[i2] & 127);
		    }
		    return ret;
		  }
		  function latin1Slice(buf, start, end) {
		    let ret = "";
		    end = Math.min(buf.length, end);
		    for (let i2 = start; i2 < end; ++i2) {
		      ret += String.fromCharCode(buf[i2]);
		    }
		    return ret;
		  }
		  function hexSlice(buf, start, end) {
		    const len2 = buf.length;
		    if (!start || start < 0) start = 0;
		    if (!end || end < 0 || end > len2) end = len2;
		    let out = "";
		    for (let i2 = start; i2 < end; ++i2) {
		      out += hexSliceLookupTable[buf[i2]];
		    }
		    return out;
		  }
		  function utf16leSlice(buf, start, end) {
		    const bytes = buf.slice(start, end);
		    let res = "";
		    for (let i2 = 0; i2 < bytes.length - 1; i2 += 2) {
		      res += String.fromCharCode(bytes[i2] + bytes[i2 + 1] * 256);
		    }
		    return res;
		  }
		  Buffer2.prototype.slice = function slice(start, end) {
		    const len2 = this.length;
		    start = ~~start;
		    end = end === void 0 ? len2 : ~~end;
		    if (start < 0) {
		      start += len2;
		      if (start < 0) start = 0;
		    } else if (start > len2) {
		      start = len2;
		    }
		    if (end < 0) {
		      end += len2;
		      if (end < 0) end = 0;
		    } else if (end > len2) {
		      end = len2;
		    }
		    if (end < start) end = start;
		    const newBuf = this.subarray(start, end);
		    Object.setPrototypeOf(newBuf, Buffer2.prototype);
		    return newBuf;
		  };
		  function checkOffset(offset, ext, length) {
		    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
		    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
		  }
		  Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength3, noAssert) {
		    offset = offset >>> 0;
		    byteLength3 = byteLength3 >>> 0;
		    if (!noAssert) checkOffset(offset, byteLength3, this.length);
		    let val = this[offset];
		    let mul = 1;
		    let i2 = 0;
		    while (++i2 < byteLength3 && (mul *= 256)) {
		      val += this[offset + i2] * mul;
		    }
		    return val;
		  };
		  Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength3, noAssert) {
		    offset = offset >>> 0;
		    byteLength3 = byteLength3 >>> 0;
		    if (!noAssert) {
		      checkOffset(offset, byteLength3, this.length);
		    }
		    let val = this[offset + --byteLength3];
		    let mul = 1;
		    while (byteLength3 > 0 && (mul *= 256)) {
		      val += this[offset + --byteLength3] * mul;
		    }
		    return val;
		  };
		  Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
		    offset = offset >>> 0;
		    if (!noAssert) checkOffset(offset, 1, this.length);
		    return this[offset];
		  };
		  Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
		    offset = offset >>> 0;
		    if (!noAssert) checkOffset(offset, 2, this.length);
		    return this[offset] | this[offset + 1] << 8;
		  };
		  Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
		    offset = offset >>> 0;
		    if (!noAssert) checkOffset(offset, 2, this.length);
		    return this[offset] << 8 | this[offset + 1];
		  };
		  Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
		    offset = offset >>> 0;
		    if (!noAssert) checkOffset(offset, 4, this.length);
		    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
		  };
		  Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
		    offset = offset >>> 0;
		    if (!noAssert) checkOffset(offset, 4, this.length);
		    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
		  };
		  Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
		    offset = offset >>> 0;
		    validateNumber(offset, "offset");
		    const first = this[offset];
		    const last = this[offset + 7];
		    if (first === void 0 || last === void 0) {
		      boundsError(offset, this.length - 8);
		    }
		    const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
		    const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
		    return BigInt(lo) + (BigInt(hi) << BigInt(32));
		  });
		  Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
		    offset = offset >>> 0;
		    validateNumber(offset, "offset");
		    const first = this[offset];
		    const last = this[offset + 7];
		    if (first === void 0 || last === void 0) {
		      boundsError(offset, this.length - 8);
		    }
		    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
		    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
		    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
		  });
		  Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength3, noAssert) {
		    offset = offset >>> 0;
		    byteLength3 = byteLength3 >>> 0;
		    if (!noAssert) checkOffset(offset, byteLength3, this.length);
		    let val = this[offset];
		    let mul = 1;
		    let i2 = 0;
		    while (++i2 < byteLength3 && (mul *= 256)) {
		      val += this[offset + i2] * mul;
		    }
		    mul *= 128;
		    if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
		    return val;
		  };
		  Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength3, noAssert) {
		    offset = offset >>> 0;
		    byteLength3 = byteLength3 >>> 0;
		    if (!noAssert) checkOffset(offset, byteLength3, this.length);
		    let i2 = byteLength3;
		    let mul = 1;
		    let val = this[offset + --i2];
		    while (i2 > 0 && (mul *= 256)) {
		      val += this[offset + --i2] * mul;
		    }
		    mul *= 128;
		    if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
		    return val;
		  };
		  Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
		    offset = offset >>> 0;
		    if (!noAssert) checkOffset(offset, 1, this.length);
		    if (!(this[offset] & 128)) return this[offset];
		    return (255 - this[offset] + 1) * -1;
		  };
		  Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
		    offset = offset >>> 0;
		    if (!noAssert) checkOffset(offset, 2, this.length);
		    const val = this[offset] | this[offset + 1] << 8;
		    return val & 32768 ? val | 4294901760 : val;
		  };
		  Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
		    offset = offset >>> 0;
		    if (!noAssert) checkOffset(offset, 2, this.length);
		    const val = this[offset + 1] | this[offset] << 8;
		    return val & 32768 ? val | 4294901760 : val;
		  };
		  Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
		    offset = offset >>> 0;
		    if (!noAssert) checkOffset(offset, 4, this.length);
		    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
		  };
		  Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
		    offset = offset >>> 0;
		    if (!noAssert) checkOffset(offset, 4, this.length);
		    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
		  };
		  Buffer2.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
		    offset = offset >>> 0;
		    validateNumber(offset, "offset");
		    const first = this[offset];
		    const last = this[offset + 7];
		    if (first === void 0 || last === void 0) {
		      boundsError(offset, this.length - 8);
		    }
		    const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
		    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
		  });
		  Buffer2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
		    offset = offset >>> 0;
		    validateNumber(offset, "offset");
		    const first = this[offset];
		    const last = this[offset + 7];
		    if (first === void 0 || last === void 0) {
		      boundsError(offset, this.length - 8);
		    }
		    const val = (first << 24) + // Overflow
		    this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
		    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
		  });
		  Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
		    offset = offset >>> 0;
		    if (!noAssert) checkOffset(offset, 4, this.length);
		    return ieee754$1.read(this, offset, true, 23, 4);
		  };
		  Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
		    offset = offset >>> 0;
		    if (!noAssert) checkOffset(offset, 4, this.length);
		    return ieee754$1.read(this, offset, false, 23, 4);
		  };
		  Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
		    offset = offset >>> 0;
		    if (!noAssert) checkOffset(offset, 8, this.length);
		    return ieee754$1.read(this, offset, true, 52, 8);
		  };
		  Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
		    offset = offset >>> 0;
		    if (!noAssert) checkOffset(offset, 8, this.length);
		    return ieee754$1.read(this, offset, false, 52, 8);
		  };
		  function checkInt(buf, value, offset, ext, max, min) {
		    if (!Buffer2.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
		    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
		    if (offset + ext > buf.length) throw new RangeError("Index out of range");
		  }
		  Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength3, noAssert) {
		    value = +value;
		    offset = offset >>> 0;
		    byteLength3 = byteLength3 >>> 0;
		    if (!noAssert) {
		      const maxBytes = Math.pow(2, 8 * byteLength3) - 1;
		      checkInt(this, value, offset, byteLength3, maxBytes, 0);
		    }
		    let mul = 1;
		    let i2 = 0;
		    this[offset] = value & 255;
		    while (++i2 < byteLength3 && (mul *= 256)) {
		      this[offset + i2] = value / mul & 255;
		    }
		    return offset + byteLength3;
		  };
		  Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength3, noAssert) {
		    value = +value;
		    offset = offset >>> 0;
		    byteLength3 = byteLength3 >>> 0;
		    if (!noAssert) {
		      const maxBytes = Math.pow(2, 8 * byteLength3) - 1;
		      checkInt(this, value, offset, byteLength3, maxBytes, 0);
		    }
		    let i2 = byteLength3 - 1;
		    let mul = 1;
		    this[offset + i2] = value & 255;
		    while (--i2 >= 0 && (mul *= 256)) {
		      this[offset + i2] = value / mul & 255;
		    }
		    return offset + byteLength3;
		  };
		  Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
		    value = +value;
		    offset = offset >>> 0;
		    if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
		    this[offset] = value & 255;
		    return offset + 1;
		  };
		  Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
		    value = +value;
		    offset = offset >>> 0;
		    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
		    this[offset] = value & 255;
		    this[offset + 1] = value >>> 8;
		    return offset + 2;
		  };
		  Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
		    value = +value;
		    offset = offset >>> 0;
		    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
		    this[offset] = value >>> 8;
		    this[offset + 1] = value & 255;
		    return offset + 2;
		  };
		  Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
		    value = +value;
		    offset = offset >>> 0;
		    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
		    this[offset + 3] = value >>> 24;
		    this[offset + 2] = value >>> 16;
		    this[offset + 1] = value >>> 8;
		    this[offset] = value & 255;
		    return offset + 4;
		  };
		  Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
		    value = +value;
		    offset = offset >>> 0;
		    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
		    this[offset] = value >>> 24;
		    this[offset + 1] = value >>> 16;
		    this[offset + 2] = value >>> 8;
		    this[offset + 3] = value & 255;
		    return offset + 4;
		  };
		  function wrtBigUInt64LE(buf, value, offset, min, max) {
		    checkIntBI(value, min, max, buf, offset, 7);
		    let lo = Number(value & BigInt(4294967295));
		    buf[offset++] = lo;
		    lo = lo >> 8;
		    buf[offset++] = lo;
		    lo = lo >> 8;
		    buf[offset++] = lo;
		    lo = lo >> 8;
		    buf[offset++] = lo;
		    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
		    buf[offset++] = hi;
		    hi = hi >> 8;
		    buf[offset++] = hi;
		    hi = hi >> 8;
		    buf[offset++] = hi;
		    hi = hi >> 8;
		    buf[offset++] = hi;
		    return offset;
		  }
		  function wrtBigUInt64BE(buf, value, offset, min, max) {
		    checkIntBI(value, min, max, buf, offset, 7);
		    let lo = Number(value & BigInt(4294967295));
		    buf[offset + 7] = lo;
		    lo = lo >> 8;
		    buf[offset + 6] = lo;
		    lo = lo >> 8;
		    buf[offset + 5] = lo;
		    lo = lo >> 8;
		    buf[offset + 4] = lo;
		    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
		    buf[offset + 3] = hi;
		    hi = hi >> 8;
		    buf[offset + 2] = hi;
		    hi = hi >> 8;
		    buf[offset + 1] = hi;
		    hi = hi >> 8;
		    buf[offset] = hi;
		    return offset + 8;
		  }
		  Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
		    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
		  });
		  Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
		    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
		  });
		  Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength3, noAssert) {
		    value = +value;
		    offset = offset >>> 0;
		    if (!noAssert) {
		      const limit = Math.pow(2, 8 * byteLength3 - 1);
		      checkInt(this, value, offset, byteLength3, limit - 1, -limit);
		    }
		    let i2 = 0;
		    let mul = 1;
		    let sub = 0;
		    this[offset] = value & 255;
		    while (++i2 < byteLength3 && (mul *= 256)) {
		      if (value < 0 && sub === 0 && this[offset + i2 - 1] !== 0) {
		        sub = 1;
		      }
		      this[offset + i2] = (value / mul >> 0) - sub & 255;
		    }
		    return offset + byteLength3;
		  };
		  Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength3, noAssert) {
		    value = +value;
		    offset = offset >>> 0;
		    if (!noAssert) {
		      const limit = Math.pow(2, 8 * byteLength3 - 1);
		      checkInt(this, value, offset, byteLength3, limit - 1, -limit);
		    }
		    let i2 = byteLength3 - 1;
		    let mul = 1;
		    let sub = 0;
		    this[offset + i2] = value & 255;
		    while (--i2 >= 0 && (mul *= 256)) {
		      if (value < 0 && sub === 0 && this[offset + i2 + 1] !== 0) {
		        sub = 1;
		      }
		      this[offset + i2] = (value / mul >> 0) - sub & 255;
		    }
		    return offset + byteLength3;
		  };
		  Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
		    value = +value;
		    offset = offset >>> 0;
		    if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
		    if (value < 0) value = 255 + value + 1;
		    this[offset] = value & 255;
		    return offset + 1;
		  };
		  Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
		    value = +value;
		    offset = offset >>> 0;
		    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
		    this[offset] = value & 255;
		    this[offset + 1] = value >>> 8;
		    return offset + 2;
		  };
		  Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
		    value = +value;
		    offset = offset >>> 0;
		    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
		    this[offset] = value >>> 8;
		    this[offset + 1] = value & 255;
		    return offset + 2;
		  };
		  Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
		    value = +value;
		    offset = offset >>> 0;
		    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
		    this[offset] = value & 255;
		    this[offset + 1] = value >>> 8;
		    this[offset + 2] = value >>> 16;
		    this[offset + 3] = value >>> 24;
		    return offset + 4;
		  };
		  Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
		    value = +value;
		    offset = offset >>> 0;
		    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
		    if (value < 0) value = 4294967295 + value + 1;
		    this[offset] = value >>> 24;
		    this[offset + 1] = value >>> 16;
		    this[offset + 2] = value >>> 8;
		    this[offset + 3] = value & 255;
		    return offset + 4;
		  };
		  Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
		    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
		  });
		  Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
		    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
		  });
		  function checkIEEE754(buf, value, offset, ext, max, min) {
		    if (offset + ext > buf.length) throw new RangeError("Index out of range");
		    if (offset < 0) throw new RangeError("Index out of range");
		  }
		  function writeFloat(buf, value, offset, littleEndian, noAssert) {
		    value = +value;
		    offset = offset >>> 0;
		    if (!noAssert) {
		      checkIEEE754(buf, value, offset, 4);
		    }
		    ieee754$1.write(buf, value, offset, littleEndian, 23, 4);
		    return offset + 4;
		  }
		  Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
		    return writeFloat(this, value, offset, true, noAssert);
		  };
		  Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
		    return writeFloat(this, value, offset, false, noAssert);
		  };
		  function writeDouble(buf, value, offset, littleEndian, noAssert) {
		    value = +value;
		    offset = offset >>> 0;
		    if (!noAssert) {
		      checkIEEE754(buf, value, offset, 8);
		    }
		    ieee754$1.write(buf, value, offset, littleEndian, 52, 8);
		    return offset + 8;
		  }
		  Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
		    return writeDouble(this, value, offset, true, noAssert);
		  };
		  Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
		    return writeDouble(this, value, offset, false, noAssert);
		  };
		  Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
		    if (!Buffer2.isBuffer(target)) throw new TypeError("argument should be a Buffer");
		    if (!start) start = 0;
		    if (!end && end !== 0) end = this.length;
		    if (targetStart >= target.length) targetStart = target.length;
		    if (!targetStart) targetStart = 0;
		    if (end > 0 && end < start) end = start;
		    if (end === start) return 0;
		    if (target.length === 0 || this.length === 0) return 0;
		    if (targetStart < 0) {
		      throw new RangeError("targetStart out of bounds");
		    }
		    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
		    if (end < 0) throw new RangeError("sourceEnd out of bounds");
		    if (end > this.length) end = this.length;
		    if (target.length - targetStart < end - start) {
		      end = target.length - targetStart + start;
		    }
		    const len2 = end - start;
		    if (this === target && typeof GlobalUint8Array.prototype.copyWithin === "function") {
		      this.copyWithin(targetStart, start, end);
		    } else {
		      GlobalUint8Array.prototype.set.call(
		        target,
		        this.subarray(start, end),
		        targetStart
		      );
		    }
		    return len2;
		  };
		  Buffer2.prototype.fill = function fill(val, start, end, encoding) {
		    if (typeof val === "string") {
		      if (typeof start === "string") {
		        encoding = start;
		        start = 0;
		        end = this.length;
		      } else if (typeof end === "string") {
		        encoding = end;
		        end = this.length;
		      }
		      if (encoding !== void 0 && typeof encoding !== "string") {
		        throw new TypeError("encoding must be a string");
		      }
		      if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
		        throw new TypeError("Unknown encoding: " + encoding);
		      }
		      if (val.length === 1) {
		        const code2 = val.charCodeAt(0);
		        if (encoding === "utf8" && code2 < 128 || encoding === "latin1") {
		          val = code2;
		        }
		      }
		    } else if (typeof val === "number") {
		      val = val & 255;
		    } else if (typeof val === "boolean") {
		      val = Number(val);
		    }
		    if (start < 0 || this.length < start || this.length < end) {
		      throw new RangeError("Out of range index");
		    }
		    if (end <= start) {
		      return this;
		    }
		    start = start >>> 0;
		    end = end === void 0 ? this.length : end >>> 0;
		    if (!val) val = 0;
		    let i2;
		    if (typeof val === "number") {
		      for (i2 = start; i2 < end; ++i2) {
		        this[i2] = val;
		      }
		    } else {
		      const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
		      const len2 = bytes.length;
		      if (len2 === 0) {
		        throw new TypeError('The value "' + val + '" is invalid for argument "value"');
		      }
		      for (i2 = 0; i2 < end - start; ++i2) {
		        this[i2 + start] = bytes[i2 % len2];
		      }
		    }
		    return this;
		  };
		  const errors = {};
		  function E(sym, getMessage, Base) {
		    errors[sym] = class NodeError extends Base {
		      constructor() {
		        super();
		        Object.defineProperty(this, "message", {
		          value: getMessage.apply(this, arguments),
		          writable: true,
		          configurable: true
		        });
		        this.name = `${this.name} [${sym}]`;
		        this.stack;
		        delete this.name;
		      }
		      get code() {
		        return sym;
		      }
		      set code(value) {
		        Object.defineProperty(this, "code", {
		          configurable: true,
		          enumerable: true,
		          value,
		          writable: true
		        });
		      }
		      toString() {
		        return `${this.name} [${sym}]: ${this.message}`;
		      }
		    };
		  }
		  E(
		    "ERR_BUFFER_OUT_OF_BOUNDS",
		    function(name) {
		      if (name) {
		        return `${name} is outside of buffer bounds`;
		      }
		      return "Attempt to access memory outside buffer bounds";
		    },
		    RangeError
		  );
		  E(
		    "ERR_INVALID_ARG_TYPE",
		    function(name, actual) {
		      return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
		    },
		    TypeError
		  );
		  E(
		    "ERR_OUT_OF_RANGE",
		    function(str, range, input) {
		      let msg = `The value of "${str}" is out of range.`;
		      let received = input;
		      if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
		        received = addNumericalSeparator(String(input));
		      } else if (typeof input === "bigint") {
		        received = String(input);
		        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
		          received = addNumericalSeparator(received);
		        }
		        received += "n";
		      }
		      msg += ` It must be ${range}. Received ${received}`;
		      return msg;
		    },
		    RangeError
		  );
		  function addNumericalSeparator(val) {
		    let res = "";
		    let i2 = val.length;
		    const start = val[0] === "-" ? 1 : 0;
		    for (; i2 >= start + 4; i2 -= 3) {
		      res = `_${val.slice(i2 - 3, i2)}${res}`;
		    }
		    return `${val.slice(0, i2)}${res}`;
		  }
		  function checkBounds(buf, offset, byteLength3) {
		    validateNumber(offset, "offset");
		    if (buf[offset] === void 0 || buf[offset + byteLength3] === void 0) {
		      boundsError(offset, buf.length - (byteLength3 + 1));
		    }
		  }
		  function checkIntBI(value, min, max, buf, offset, byteLength3) {
		    if (value > max || value < min) {
		      const n = typeof min === "bigint" ? "n" : "";
		      let range;
		      {
		        if (min === 0 || min === BigInt(0)) {
		          range = `>= 0${n} and < 2${n} ** ${(byteLength3 + 1) * 8}${n}`;
		        } else {
		          range = `>= -(2${n} ** ${(byteLength3 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength3 + 1) * 8 - 1}${n}`;
		        }
		      }
		      throw new errors.ERR_OUT_OF_RANGE("value", range, value);
		    }
		    checkBounds(buf, offset, byteLength3);
		  }
		  function validateNumber(value, name) {
		    if (typeof value !== "number") {
		      throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
		    }
		  }
		  function boundsError(value, length, type) {
		    if (Math.floor(value) !== value) {
		      validateNumber(value, type);
		      throw new errors.ERR_OUT_OF_RANGE("offset", "an integer", value);
		    }
		    if (length < 0) {
		      throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
		    }
		    throw new errors.ERR_OUT_OF_RANGE(
		      "offset",
		      `>= ${0} and <= ${length}`,
		      value
		    );
		  }
		  const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
		  function base64clean(str) {
		    str = str.split("=")[0];
		    str = str.trim().replace(INVALID_BASE64_RE, "");
		    if (str.length < 2) return "";
		    while (str.length % 4 !== 0) {
		      str = str + "=";
		    }
		    return str;
		  }
		  function utf8ToBytes(string, units) {
		    units = units || Infinity;
		    let codePoint;
		    const length = string.length;
		    let leadSurrogate = null;
		    const bytes = [];
		    for (let i2 = 0; i2 < length; ++i2) {
		      codePoint = string.charCodeAt(i2);
		      if (codePoint > 55295 && codePoint < 57344) {
		        if (!leadSurrogate) {
		          if (codePoint > 56319) {
		            if ((units -= 3) > -1) bytes.push(239, 191, 189);
		            continue;
		          } else if (i2 + 1 === length) {
		            if ((units -= 3) > -1) bytes.push(239, 191, 189);
		            continue;
		          }
		          leadSurrogate = codePoint;
		          continue;
		        }
		        if (codePoint < 56320) {
		          if ((units -= 3) > -1) bytes.push(239, 191, 189);
		          leadSurrogate = codePoint;
		          continue;
		        }
		        codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
		      } else if (leadSurrogate) {
		        if ((units -= 3) > -1) bytes.push(239, 191, 189);
		      }
		      leadSurrogate = null;
		      if (codePoint < 128) {
		        if ((units -= 1) < 0) break;
		        bytes.push(codePoint);
		      } else if (codePoint < 2048) {
		        if ((units -= 2) < 0) break;
		        bytes.push(
		          codePoint >> 6 | 192,
		          codePoint & 63 | 128
		        );
		      } else if (codePoint < 65536) {
		        if ((units -= 3) < 0) break;
		        bytes.push(
		          codePoint >> 12 | 224,
		          codePoint >> 6 & 63 | 128,
		          codePoint & 63 | 128
		        );
		      } else if (codePoint < 1114112) {
		        if ((units -= 4) < 0) break;
		        bytes.push(
		          codePoint >> 18 | 240,
		          codePoint >> 12 & 63 | 128,
		          codePoint >> 6 & 63 | 128,
		          codePoint & 63 | 128
		        );
		      } else {
		        throw new Error("Invalid code point");
		      }
		    }
		    return bytes;
		  }
		  function asciiToBytes(str) {
		    const byteArray = [];
		    for (let i2 = 0; i2 < str.length; ++i2) {
		      byteArray.push(str.charCodeAt(i2) & 255);
		    }
		    return byteArray;
		  }
		  function utf16leToBytes(str, units) {
		    let c, hi, lo;
		    const byteArray = [];
		    for (let i2 = 0; i2 < str.length; ++i2) {
		      if ((units -= 2) < 0) break;
		      c = str.charCodeAt(i2);
		      hi = c >> 8;
		      lo = c % 256;
		      byteArray.push(lo);
		      byteArray.push(hi);
		    }
		    return byteArray;
		  }
		  function base64ToBytes(str) {
		    return base64.toByteArray(base64clean(str));
		  }
		  function blitBuffer(src, dst, offset, length) {
		    let i2;
		    for (i2 = 0; i2 < length; ++i2) {
		      if (i2 + offset >= dst.length || i2 >= src.length) break;
		      dst[i2 + offset] = src[i2];
		    }
		    return i2;
		  }
		  function isInstance(obj, type) {
		    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
		  }
		  function numberIsNaN(obj) {
		    return obj !== obj;
		  }
		  const hexSliceLookupTable = function() {
		    const alphabet = "0123456789abcdef";
		    const table = new Array(256);
		    for (let i2 = 0; i2 < 16; ++i2) {
		      const i16 = i2 * 16;
		      for (let j = 0; j < 16; ++j) {
		        table[i16 + j] = alphabet[i2] + alphabet[j];
		      }
		    }
		    return table;
		  }();
		  function defineBigIntMethod(fn) {
		    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
		  }
		  function BufferBigIntNotDefined() {
		    throw new Error("BigInt not supported");
		  }
		})(buffer);
		const Buffer = buffer.Buffer;
		exports.Blob = buffer.Blob;
		exports.BlobOptions = buffer.BlobOptions;
		exports.Buffer = buffer.Buffer;
		exports.File = buffer.File;
		exports.FileOptions = buffer.FileOptions;
		exports.INSPECT_MAX_BYTES = buffer.INSPECT_MAX_BYTES;
		exports.SlowBuffer = buffer.SlowBuffer;
		exports.TranscodeEncoding = buffer.TranscodeEncoding;
		exports.atob = buffer.atob;
		exports.btoa = buffer.btoa;
		exports.constants = buffer.constants;
		exports.default = Buffer;
		exports.isAscii = buffer.isAscii;
		exports.isUtf8 = buffer.isUtf8;
		exports.kMaxLength = buffer.kMaxLength;
		exports.kStringMaxLength = buffer.kStringMaxLength;
		exports.resolveObjectURL = buffer.resolveObjectURL;
		exports.transcode = buffer.transcode; 
	} (dist));
	return dist;
}

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

var hasRequiredSafeBuffer;

function requireSafeBuffer () {
	if (hasRequiredSafeBuffer) return safeBuffer.exports;
	hasRequiredSafeBuffer = 1;
	(function (module, exports) {
		/* eslint-disable node/no-deprecated-api */
		var buffer = requireDist();
		var Buffer = buffer.Buffer;

		// alternative to using Object.keys for old browsers
		function copyProps (src, dst) {
		  for (var key in src) {
		    dst[key] = src[key];
		  }
		}
		if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
		  module.exports = buffer;
		} else {
		  // Copy properties from require('buffer')
		  copyProps(buffer, exports);
		  exports.Buffer = SafeBuffer;
		}

		function SafeBuffer (arg, encodingOrOffset, length) {
		  return Buffer(arg, encodingOrOffset, length)
		}

		SafeBuffer.prototype = Object.create(Buffer.prototype);

		// Copy static methods from Buffer
		copyProps(Buffer, SafeBuffer);

		SafeBuffer.from = function (arg, encodingOrOffset, length) {
		  if (typeof arg === 'number') {
		    throw new TypeError('Argument must not be a number')
		  }
		  return Buffer(arg, encodingOrOffset, length)
		};

		SafeBuffer.alloc = function (size, fill, encoding) {
		  if (typeof size !== 'number') {
		    throw new TypeError('Argument must be a number')
		  }
		  var buf = Buffer(size);
		  if (fill !== undefined) {
		    if (typeof encoding === 'string') {
		      buf.fill(fill, encoding);
		    } else {
		      buf.fill(fill);
		    }
		  } else {
		    buf.fill(0);
		  }
		  return buf
		};

		SafeBuffer.allocUnsafe = function (size) {
		  if (typeof size !== 'number') {
		    throw new TypeError('Argument must be a number')
		  }
		  return Buffer(size)
		};

		SafeBuffer.allocUnsafeSlow = function (size) {
		  if (typeof size !== 'number') {
		    throw new TypeError('Argument must be a number')
		  }
		  return buffer.SlowBuffer(size)
		}; 
	} (safeBuffer, safeBuffer.exports));
	return safeBuffer.exports;
}

var hasRequiredBrowser$1;

function requireBrowser$1 () {
	if (hasRequiredBrowser$1) return browser$1.exports;
	hasRequiredBrowser$1 = 1;
	var define_global_default = {};
	var MAX_BYTES = 65536;
	var MAX_UINT32 = 4294967295;
	function oldBrowser() {
	  throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
	}
	var Buffer = requireSafeBuffer().Buffer;
	var crypto = define_global_default.crypto || define_global_default.msCrypto;
	if (crypto && crypto.getRandomValues) {
	  browser$1.exports = randomBytes;
	} else {
	  browser$1.exports = oldBrowser;
	}
	function randomBytes(size, cb) {
	  if (size > MAX_UINT32) throw new RangeError("requested too many random bytes");
	  var bytes = Buffer.allocUnsafe(size);
	  if (size > 0) {
	    if (size > MAX_BYTES) {
	      for (var generated = 0; generated < size; generated += MAX_BYTES) {
	        crypto.getRandomValues(bytes.slice(generated, generated + MAX_BYTES));
	      }
	    } else {
	      crypto.getRandomValues(bytes);
	    }
	  }
	  if (typeof cb === "function") {
	    return process$1.nextTick(function() {
	      cb(null, bytes);
	    });
	  }
	  return bytes;
	}
	return browser$1.exports;
}

var readableBrowser = {exports: {}};

var events = {exports: {}};

var hasRequiredEvents;

function requireEvents () {
	if (hasRequiredEvents) return events.exports;
	hasRequiredEvents = 1;

	var R = typeof Reflect === 'object' ? Reflect : null;
	var ReflectApply = R && typeof R.apply === 'function'
	  ? R.apply
	  : function ReflectApply(target, receiver, args) {
	    return Function.prototype.apply.call(target, receiver, args);
	  };

	var ReflectOwnKeys;
	if (R && typeof R.ownKeys === 'function') {
	  ReflectOwnKeys = R.ownKeys;
	} else if (Object.getOwnPropertySymbols) {
	  ReflectOwnKeys = function ReflectOwnKeys(target) {
	    return Object.getOwnPropertyNames(target)
	      .concat(Object.getOwnPropertySymbols(target));
	  };
	} else {
	  ReflectOwnKeys = function ReflectOwnKeys(target) {
	    return Object.getOwnPropertyNames(target);
	  };
	}

	function ProcessEmitWarning(warning) {
	  if (console && console.warn) console.warn(warning);
	}

	var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
	  return value !== value;
	};

	function EventEmitter() {
	  EventEmitter.init.call(this);
	}
	events.exports = EventEmitter;
	events.exports.once = once;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._eventsCount = 0;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	var defaultMaxListeners = 10;

	function checkListener(listener) {
	  if (typeof listener !== 'function') {
	    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
	  }
	}

	Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
	  enumerable: true,
	  get: function() {
	    return defaultMaxListeners;
	  },
	  set: function(arg) {
	    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
	      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
	    }
	    defaultMaxListeners = arg;
	  }
	});

	EventEmitter.init = function() {

	  if (this._events === undefined ||
	      this._events === Object.getPrototypeOf(this)._events) {
	    this._events = Object.create(null);
	    this._eventsCount = 0;
	  }

	  this._maxListeners = this._maxListeners || undefined;
	};

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
	  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
	    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
	  }
	  this._maxListeners = n;
	  return this;
	};

	function _getMaxListeners(that) {
	  if (that._maxListeners === undefined)
	    return EventEmitter.defaultMaxListeners;
	  return that._maxListeners;
	}

	EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
	  return _getMaxListeners(this);
	};

	EventEmitter.prototype.emit = function emit(type) {
	  var args = [];
	  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
	  var doError = (type === 'error');

	  var events = this._events;
	  if (events !== undefined)
	    doError = (doError && events.error === undefined);
	  else if (!doError)
	    return false;

	  // If there is no 'error' event listener then throw.
	  if (doError) {
	    var er;
	    if (args.length > 0)
	      er = args[0];
	    if (er instanceof Error) {
	      // Note: The comments on the `throw` lines are intentional, they show
	      // up in Node's output if this results in an unhandled exception.
	      throw er; // Unhandled 'error' event
	    }
	    // At least give some kind of context to the user
	    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
	    err.context = er;
	    throw err; // Unhandled 'error' event
	  }

	  var handler = events[type];

	  if (handler === undefined)
	    return false;

	  if (typeof handler === 'function') {
	    ReflectApply(handler, this, args);
	  } else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      ReflectApply(listeners[i], this, args);
	  }

	  return true;
	};

	function _addListener(target, type, listener, prepend) {
	  var m;
	  var events;
	  var existing;

	  checkListener(listener);

	  events = target._events;
	  if (events === undefined) {
	    events = target._events = Object.create(null);
	    target._eventsCount = 0;
	  } else {
	    // To avoid recursion in the case that type === "newListener"! Before
	    // adding it to the listeners, first emit "newListener".
	    if (events.newListener !== undefined) {
	      target.emit('newListener', type,
	                  listener.listener ? listener.listener : listener);

	      // Re-assign `events` because a newListener handler could have caused the
	      // this._events to be assigned to a new object
	      events = target._events;
	    }
	    existing = events[type];
	  }

	  if (existing === undefined) {
	    // Optimize the case of one listener. Don't need the extra array object.
	    existing = events[type] = listener;
	    ++target._eventsCount;
	  } else {
	    if (typeof existing === 'function') {
	      // Adding the second element, need to change to array.
	      existing = events[type] =
	        prepend ? [listener, existing] : [existing, listener];
	      // If we've already got an array, just append.
	    } else if (prepend) {
	      existing.unshift(listener);
	    } else {
	      existing.push(listener);
	    }

	    // Check for listener leak
	    m = _getMaxListeners(target);
	    if (m > 0 && existing.length > m && !existing.warned) {
	      existing.warned = true;
	      // No error code for this since it is a Warning
	      // eslint-disable-next-line no-restricted-syntax
	      var w = new Error('Possible EventEmitter memory leak detected. ' +
	                          existing.length + ' ' + String(type) + ' listeners ' +
	                          'added. Use emitter.setMaxListeners() to ' +
	                          'increase limit');
	      w.name = 'MaxListenersExceededWarning';
	      w.emitter = target;
	      w.type = type;
	      w.count = existing.length;
	      ProcessEmitWarning(w);
	    }
	  }

	  return target;
	}

	EventEmitter.prototype.addListener = function addListener(type, listener) {
	  return _addListener(this, type, listener, false);
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.prependListener =
	    function prependListener(type, listener) {
	      return _addListener(this, type, listener, true);
	    };

	function onceWrapper() {
	  if (!this.fired) {
	    this.target.removeListener(this.type, this.wrapFn);
	    this.fired = true;
	    if (arguments.length === 0)
	      return this.listener.call(this.target);
	    return this.listener.apply(this.target, arguments);
	  }
	}

	function _onceWrap(target, type, listener) {
	  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
	  var wrapped = onceWrapper.bind(state);
	  wrapped.listener = listener;
	  state.wrapFn = wrapped;
	  return wrapped;
	}

	EventEmitter.prototype.once = function once(type, listener) {
	  checkListener(listener);
	  this.on(type, _onceWrap(this, type, listener));
	  return this;
	};

	EventEmitter.prototype.prependOnceListener =
	    function prependOnceListener(type, listener) {
	      checkListener(listener);
	      this.prependListener(type, _onceWrap(this, type, listener));
	      return this;
	    };

	// Emits a 'removeListener' event if and only if the listener was removed.
	EventEmitter.prototype.removeListener =
	    function removeListener(type, listener) {
	      var list, events, position, i, originalListener;

	      checkListener(listener);

	      events = this._events;
	      if (events === undefined)
	        return this;

	      list = events[type];
	      if (list === undefined)
	        return this;

	      if (list === listener || list.listener === listener) {
	        if (--this._eventsCount === 0)
	          this._events = Object.create(null);
	        else {
	          delete events[type];
	          if (events.removeListener)
	            this.emit('removeListener', type, list.listener || listener);
	        }
	      } else if (typeof list !== 'function') {
	        position = -1;

	        for (i = list.length - 1; i >= 0; i--) {
	          if (list[i] === listener || list[i].listener === listener) {
	            originalListener = list[i].listener;
	            position = i;
	            break;
	          }
	        }

	        if (position < 0)
	          return this;

	        if (position === 0)
	          list.shift();
	        else {
	          spliceOne(list, position);
	        }

	        if (list.length === 1)
	          events[type] = list[0];

	        if (events.removeListener !== undefined)
	          this.emit('removeListener', type, originalListener || listener);
	      }

	      return this;
	    };

	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

	EventEmitter.prototype.removeAllListeners =
	    function removeAllListeners(type) {
	      var listeners, events, i;

	      events = this._events;
	      if (events === undefined)
	        return this;

	      // not listening for removeListener, no need to emit
	      if (events.removeListener === undefined) {
	        if (arguments.length === 0) {
	          this._events = Object.create(null);
	          this._eventsCount = 0;
	        } else if (events[type] !== undefined) {
	          if (--this._eventsCount === 0)
	            this._events = Object.create(null);
	          else
	            delete events[type];
	        }
	        return this;
	      }

	      // emit removeListener for all listeners on all events
	      if (arguments.length === 0) {
	        var keys = Object.keys(events);
	        var key;
	        for (i = 0; i < keys.length; ++i) {
	          key = keys[i];
	          if (key === 'removeListener') continue;
	          this.removeAllListeners(key);
	        }
	        this.removeAllListeners('removeListener');
	        this._events = Object.create(null);
	        this._eventsCount = 0;
	        return this;
	      }

	      listeners = events[type];

	      if (typeof listeners === 'function') {
	        this.removeListener(type, listeners);
	      } else if (listeners !== undefined) {
	        // LIFO order
	        for (i = listeners.length - 1; i >= 0; i--) {
	          this.removeListener(type, listeners[i]);
	        }
	      }

	      return this;
	    };

	function _listeners(target, type, unwrap) {
	  var events = target._events;

	  if (events === undefined)
	    return [];

	  var evlistener = events[type];
	  if (evlistener === undefined)
	    return [];

	  if (typeof evlistener === 'function')
	    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

	  return unwrap ?
	    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
	}

	EventEmitter.prototype.listeners = function listeners(type) {
	  return _listeners(this, type, true);
	};

	EventEmitter.prototype.rawListeners = function rawListeners(type) {
	  return _listeners(this, type, false);
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  if (typeof emitter.listenerCount === 'function') {
	    return emitter.listenerCount(type);
	  } else {
	    return listenerCount.call(emitter, type);
	  }
	};

	EventEmitter.prototype.listenerCount = listenerCount;
	function listenerCount(type) {
	  var events = this._events;

	  if (events !== undefined) {
	    var evlistener = events[type];

	    if (typeof evlistener === 'function') {
	      return 1;
	    } else if (evlistener !== undefined) {
	      return evlistener.length;
	    }
	  }

	  return 0;
	}

	EventEmitter.prototype.eventNames = function eventNames() {
	  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
	};

	function arrayClone(arr, n) {
	  var copy = new Array(n);
	  for (var i = 0; i < n; ++i)
	    copy[i] = arr[i];
	  return copy;
	}

	function spliceOne(list, index) {
	  for (; index + 1 < list.length; index++)
	    list[index] = list[index + 1];
	  list.pop();
	}

	function unwrapListeners(arr) {
	  var ret = new Array(arr.length);
	  for (var i = 0; i < ret.length; ++i) {
	    ret[i] = arr[i].listener || arr[i];
	  }
	  return ret;
	}

	function once(emitter, name) {
	  return new Promise(function (resolve, reject) {
	    function errorListener(err) {
	      emitter.removeListener(name, resolver);
	      reject(err);
	    }

	    function resolver() {
	      if (typeof emitter.removeListener === 'function') {
	        emitter.removeListener('error', errorListener);
	      }
	      resolve([].slice.call(arguments));
	    }
	    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
	    if (name !== 'error') {
	      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
	    }
	  });
	}

	function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
	  if (typeof emitter.on === 'function') {
	    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
	  }
	}

	function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
	  if (typeof emitter.on === 'function') {
	    if (flags.once) {
	      emitter.once(name, listener);
	    } else {
	      emitter.on(name, listener);
	    }
	  } else if (typeof emitter.addEventListener === 'function') {
	    // EventTarget does not have `error` event semantics like Node
	    // EventEmitters, we do not listen for `error` events here.
	    emitter.addEventListener(name, function wrapListener(arg) {
	      // IE does not have builtin `{ once: true }` support so we
	      // have to do it manually.
	      if (flags.once) {
	        emitter.removeEventListener(name, wrapListener);
	      }
	      listener(arg);
	    });
	  } else {
	    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
	  }
	}
	return events.exports;
}

var streamBrowser;
var hasRequiredStreamBrowser;

function requireStreamBrowser () {
	if (hasRequiredStreamBrowser) return streamBrowser;
	hasRequiredStreamBrowser = 1;
	streamBrowser = requireEvents().EventEmitter;
	return streamBrowser;
}

const __viteBrowserExternal = {};

const __viteBrowserExternal$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: __viteBrowserExternal
}, Symbol.toStringTag, { value: 'Module' }));

const require$$3 = /*@__PURE__*/getAugmentedNamespace(__viteBrowserExternal$1);

var buffer_list;
var hasRequiredBuffer_list;

function requireBuffer_list () {
	if (hasRequiredBuffer_list) return buffer_list;
	hasRequiredBuffer_list = 1;

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
	function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
	function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
	function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (String )(input); }
	var _require = requireDist(),
	  Buffer = _require.Buffer;
	var _require2 = require$$3,
	  inspect = _require2.inspect;
	var custom = inspect && inspect.custom || 'inspect';
	function copyBuffer(src, target, offset) {
	  Buffer.prototype.copy.call(src, target, offset);
	}
	buffer_list = /*#__PURE__*/function () {
	  function BufferList() {
	    _classCallCheck(this, BufferList);
	    this.head = null;
	    this.tail = null;
	    this.length = 0;
	  }
	  _createClass(BufferList, [{
	    key: "push",
	    value: function push(v) {
	      var entry = {
	        data: v,
	        next: null
	      };
	      if (this.length > 0) this.tail.next = entry;else this.head = entry;
	      this.tail = entry;
	      ++this.length;
	    }
	  }, {
	    key: "unshift",
	    value: function unshift(v) {
	      var entry = {
	        data: v,
	        next: this.head
	      };
	      if (this.length === 0) this.tail = entry;
	      this.head = entry;
	      ++this.length;
	    }
	  }, {
	    key: "shift",
	    value: function shift() {
	      if (this.length === 0) return;
	      var ret = this.head.data;
	      if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
	      --this.length;
	      return ret;
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      this.head = this.tail = null;
	      this.length = 0;
	    }
	  }, {
	    key: "join",
	    value: function join(s) {
	      if (this.length === 0) return '';
	      var p = this.head;
	      var ret = '' + p.data;
	      while (p = p.next) ret += s + p.data;
	      return ret;
	    }
	  }, {
	    key: "concat",
	    value: function concat(n) {
	      if (this.length === 0) return Buffer.alloc(0);
	      var ret = Buffer.allocUnsafe(n >>> 0);
	      var p = this.head;
	      var i = 0;
	      while (p) {
	        copyBuffer(p.data, ret, i);
	        i += p.data.length;
	        p = p.next;
	      }
	      return ret;
	    }

	    // Consumes a specified amount of bytes or characters from the buffered data.
	  }, {
	    key: "consume",
	    value: function consume(n, hasStrings) {
	      var ret;
	      if (n < this.head.data.length) {
	        // `slice` is the same for buffers and strings.
	        ret = this.head.data.slice(0, n);
	        this.head.data = this.head.data.slice(n);
	      } else if (n === this.head.data.length) {
	        // First chunk is a perfect match.
	        ret = this.shift();
	      } else {
	        // Result spans more than one buffer.
	        ret = hasStrings ? this._getString(n) : this._getBuffer(n);
	      }
	      return ret;
	    }
	  }, {
	    key: "first",
	    value: function first() {
	      return this.head.data;
	    }

	    // Consumes a specified amount of characters from the buffered data.
	  }, {
	    key: "_getString",
	    value: function _getString(n) {
	      var p = this.head;
	      var c = 1;
	      var ret = p.data;
	      n -= ret.length;
	      while (p = p.next) {
	        var str = p.data;
	        var nb = n > str.length ? str.length : n;
	        if (nb === str.length) ret += str;else ret += str.slice(0, n);
	        n -= nb;
	        if (n === 0) {
	          if (nb === str.length) {
	            ++c;
	            if (p.next) this.head = p.next;else this.head = this.tail = null;
	          } else {
	            this.head = p;
	            p.data = str.slice(nb);
	          }
	          break;
	        }
	        ++c;
	      }
	      this.length -= c;
	      return ret;
	    }

	    // Consumes a specified amount of bytes from the buffered data.
	  }, {
	    key: "_getBuffer",
	    value: function _getBuffer(n) {
	      var ret = Buffer.allocUnsafe(n);
	      var p = this.head;
	      var c = 1;
	      p.data.copy(ret);
	      n -= p.data.length;
	      while (p = p.next) {
	        var buf = p.data;
	        var nb = n > buf.length ? buf.length : n;
	        buf.copy(ret, ret.length - n, 0, nb);
	        n -= nb;
	        if (n === 0) {
	          if (nb === buf.length) {
	            ++c;
	            if (p.next) this.head = p.next;else this.head = this.tail = null;
	          } else {
	            this.head = p;
	            p.data = buf.slice(nb);
	          }
	          break;
	        }
	        ++c;
	      }
	      this.length -= c;
	      return ret;
	    }

	    // Make sure the linked list only shows the minimal necessary information.
	  }, {
	    key: custom,
	    value: function value(_, options) {
	      return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
	        // Only inspect one level.
	        depth: 0,
	        // It should not recurse.
	        customInspect: false
	      }));
	    }
	  }]);
	  return BufferList;
	}();
	return buffer_list;
}

var destroy_1;
var hasRequiredDestroy;

function requireDestroy () {
	if (hasRequiredDestroy) return destroy_1;
	hasRequiredDestroy = 1;

	// undocumented cb() API, needed for core, not for public API
	function destroy(err, cb) {
	  var _this = this;
	  var readableDestroyed = this._readableState && this._readableState.destroyed;
	  var writableDestroyed = this._writableState && this._writableState.destroyed;
	  if (readableDestroyed || writableDestroyed) {
	    if (cb) {
	      cb(err);
	    } else if (err) {
	      if (!this._writableState) {
	        process$1.nextTick(emitErrorNT, this, err);
	      } else if (!this._writableState.errorEmitted) {
	        this._writableState.errorEmitted = true;
	        process$1.nextTick(emitErrorNT, this, err);
	      }
	    }
	    return this;
	  }

	  // we set destroyed to true before firing error callbacks in order
	  // to make it re-entrance safe in case destroy() is called within callbacks

	  if (this._readableState) {
	    this._readableState.destroyed = true;
	  }

	  // if this is a duplex stream mark the writable part as destroyed as well
	  if (this._writableState) {
	    this._writableState.destroyed = true;
	  }
	  this._destroy(err || null, function (err) {
	    if (!cb && err) {
	      if (!_this._writableState) {
	        process$1.nextTick(emitErrorAndCloseNT, _this, err);
	      } else if (!_this._writableState.errorEmitted) {
	        _this._writableState.errorEmitted = true;
	        process$1.nextTick(emitErrorAndCloseNT, _this, err);
	      } else {
	        process$1.nextTick(emitCloseNT, _this);
	      }
	    } else if (cb) {
	      process$1.nextTick(emitCloseNT, _this);
	      cb(err);
	    } else {
	      process$1.nextTick(emitCloseNT, _this);
	    }
	  });
	  return this;
	}
	function emitErrorAndCloseNT(self, err) {
	  emitErrorNT(self, err);
	  emitCloseNT(self);
	}
	function emitCloseNT(self) {
	  if (self._writableState && !self._writableState.emitClose) return;
	  if (self._readableState && !self._readableState.emitClose) return;
	  self.emit('close');
	}
	function undestroy() {
	  if (this._readableState) {
	    this._readableState.destroyed = false;
	    this._readableState.reading = false;
	    this._readableState.ended = false;
	    this._readableState.endEmitted = false;
	  }
	  if (this._writableState) {
	    this._writableState.destroyed = false;
	    this._writableState.ended = false;
	    this._writableState.ending = false;
	    this._writableState.finalCalled = false;
	    this._writableState.prefinished = false;
	    this._writableState.finished = false;
	    this._writableState.errorEmitted = false;
	  }
	}
	function emitErrorNT(self, err) {
	  self.emit('error', err);
	}
	function errorOrDestroy(stream, err) {
	  // We have tests that rely on errors being emitted
	  // in the same tick, so changing this is semver major.
	  // For now when you opt-in to autoDestroy we allow
	  // the error to be emitted nextTick. In a future
	  // semver major update we should change the default to this.

	  var rState = stream._readableState;
	  var wState = stream._writableState;
	  if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);else stream.emit('error', err);
	}
	destroy_1 = {
	  destroy: destroy,
	  undestroy: undestroy,
	  errorOrDestroy: errorOrDestroy
	};
	return destroy_1;
}

var errorsBrowser = {};

var hasRequiredErrorsBrowser;

function requireErrorsBrowser () {
	if (hasRequiredErrorsBrowser) return errorsBrowser;
	hasRequiredErrorsBrowser = 1;

	function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

	var codes = {};

	function createErrorType(code, message, Base) {
	  if (!Base) {
	    Base = Error;
	  }

	  function getMessage(arg1, arg2, arg3) {
	    if (typeof message === 'string') {
	      return message;
	    } else {
	      return message(arg1, arg2, arg3);
	    }
	  }

	  var NodeError =
	  /*#__PURE__*/
	  function (_Base) {
	    _inheritsLoose(NodeError, _Base);

	    function NodeError(arg1, arg2, arg3) {
	      return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
	    }

	    return NodeError;
	  }(Base);

	  NodeError.prototype.name = Base.name;
	  NodeError.prototype.code = code;
	  codes[code] = NodeError;
	} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js


	function oneOf(expected, thing) {
	  if (Array.isArray(expected)) {
	    var len = expected.length;
	    expected = expected.map(function (i) {
	      return String(i);
	    });

	    if (len > 2) {
	      return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
	    } else if (len === 2) {
	      return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
	    } else {
	      return "of ".concat(thing, " ").concat(expected[0]);
	    }
	  } else {
	    return "of ".concat(thing, " ").concat(String(expected));
	  }
	} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith


	function startsWith(str, search, pos) {
	  return str.substr(0 , search.length) === search;
	} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


	function endsWith(str, search, this_len) {
	  if (this_len === undefined || this_len > str.length) {
	    this_len = str.length;
	  }

	  return str.substring(this_len - search.length, this_len) === search;
	} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


	function includes(str, search, start) {
	  if (typeof start !== 'number') {
	    start = 0;
	  }

	  if (start + search.length > str.length) {
	    return false;
	  } else {
	    return str.indexOf(search, start) !== -1;
	  }
	}

	createErrorType('ERR_INVALID_OPT_VALUE', function (name, value) {
	  return 'The value "' + value + '" is invalid for option "' + name + '"';
	}, TypeError);
	createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
	  // determiner: 'must be' or 'must not be'
	  var determiner;

	  if (typeof expected === 'string' && startsWith(expected, 'not ')) {
	    determiner = 'must not be';
	    expected = expected.replace(/^not /, '');
	  } else {
	    determiner = 'must be';
	  }

	  var msg;

	  if (endsWith(name, ' argument')) {
	    // For cases like 'first argument'
	    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
	  } else {
	    var type = includes(name, '.') ? 'property' : 'argument';
	    msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
	  }

	  msg += ". Received type ".concat(typeof actual);
	  return msg;
	}, TypeError);
	createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
	createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (name) {
	  return 'The ' + name + ' method is not implemented';
	});
	createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
	createErrorType('ERR_STREAM_DESTROYED', function (name) {
	  return 'Cannot call ' + name + ' after a stream was destroyed';
	});
	createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
	createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
	createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
	createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
	createErrorType('ERR_UNKNOWN_ENCODING', function (arg) {
	  return 'Unknown encoding: ' + arg;
	}, TypeError);
	createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
	errorsBrowser.codes = codes;
	return errorsBrowser;
}

var state;
var hasRequiredState;

function requireState () {
	if (hasRequiredState) return state;
	hasRequiredState = 1;

	var ERR_INVALID_OPT_VALUE = requireErrorsBrowser().codes.ERR_INVALID_OPT_VALUE;
	function highWaterMarkFrom(options, isDuplex, duplexKey) {
	  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
	}
	function getHighWaterMark(state, options, duplexKey, isDuplex) {
	  var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
	  if (hwm != null) {
	    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
	      var name = isDuplex ? duplexKey : 'highWaterMark';
	      throw new ERR_INVALID_OPT_VALUE(name, hwm);
	    }
	    return Math.floor(hwm);
	  }

	  // Default value
	  return state.objectMode ? 16 : 16 * 1024;
	}
	state = {
	  getHighWaterMark: getHighWaterMark
	};
	return state;
}

var inherits_browser = {exports: {}};

var hasRequiredInherits_browser;

function requireInherits_browser () {
	if (hasRequiredInherits_browser) return inherits_browser.exports;
	hasRequiredInherits_browser = 1;
	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  inherits_browser.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor;
	      ctor.prototype = Object.create(superCtor.prototype, {
	        constructor: {
	          value: ctor,
	          enumerable: false,
	          writable: true,
	          configurable: true
	        }
	      });
	    }
	  };
	} else {
	  // old school shim for old browsers
	  inherits_browser.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor;
	      var TempCtor = function () {};
	      TempCtor.prototype = superCtor.prototype;
	      ctor.prototype = new TempCtor();
	      ctor.prototype.constructor = ctor;
	    }
	  };
	}
	return inherits_browser.exports;
}

var browser;
var hasRequiredBrowser;

function requireBrowser () {
	if (hasRequiredBrowser) return browser;
	hasRequiredBrowser = 1;
	var define_global_default = {};
	browser = deprecate;
	function deprecate(fn, msg) {
	  if (config("noDeprecation")) {
	    return fn;
	  }
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (config("throwDeprecation")) {
	        throw new Error(msg);
	      } else if (config("traceDeprecation")) {
	        console.trace(msg);
	      } else {
	        console.warn(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	  return deprecated;
	}
	function config(name) {
	  try {
	    if (!define_global_default.localStorage) return false;
	  } catch (_) {
	    return false;
	  }
	  var val = define_global_default.localStorage[name];
	  if (null == val) return false;
	  return String(val).toLowerCase() === "true";
	}
	return browser;
}

var _stream_writable;
var hasRequired_stream_writable;

function require_stream_writable () {
	if (hasRequired_stream_writable) return _stream_writable;
	hasRequired_stream_writable = 1;
	var define_global_default = {};
	_stream_writable = Writable;
	function CorkedRequest(state) {
	  var _this = this;
	  this.next = null;
	  this.entry = null;
	  this.finish = function() {
	    onCorkedFinish(_this, state);
	  };
	}
	var Duplex;
	Writable.WritableState = WritableState;
	var internalUtil = {
	  deprecate: requireBrowser()
	};
	var Stream = requireStreamBrowser();
	var Buffer = requireDist().Buffer;
	var OurUint8Array = (typeof define_global_default !== "undefined" ? define_global_default : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
	};
	function _uint8ArrayToBuffer(chunk) {
	  return Buffer.from(chunk);
	}
	function _isUint8Array(obj) {
	  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
	}
	var destroyImpl = requireDestroy();
	var _require = requireState(), getHighWaterMark = _require.getHighWaterMark;
	var _require$codes = requireErrorsBrowser().codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
	var errorOrDestroy = destroyImpl.errorOrDestroy;
	requireInherits_browser()(Writable, Stream);
	function nop() {
	}
	function WritableState(options, stream, isDuplex) {
	  Duplex = Duplex || require_stream_duplex();
	  options = options || {};
	  if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
	  this.objectMode = !!options.objectMode;
	  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
	  this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
	  this.finalCalled = false;
	  this.needDrain = false;
	  this.ending = false;
	  this.ended = false;
	  this.finished = false;
	  this.destroyed = false;
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;
	  this.defaultEncoding = options.defaultEncoding || "utf8";
	  this.length = 0;
	  this.writing = false;
	  this.corked = 0;
	  this.sync = true;
	  this.bufferProcessing = false;
	  this.onwrite = function(er) {
	    onwrite(stream, er);
	  };
	  this.writecb = null;
	  this.writelen = 0;
	  this.bufferedRequest = null;
	  this.lastBufferedRequest = null;
	  this.pendingcb = 0;
	  this.prefinished = false;
	  this.errorEmitted = false;
	  this.emitClose = options.emitClose !== false;
	  this.autoDestroy = !!options.autoDestroy;
	  this.bufferedRequestCount = 0;
	  this.corkedRequestsFree = new CorkedRequest(this);
	}
	WritableState.prototype.getBuffer = function getBuffer() {
	  var current = this.bufferedRequest;
	  var out = [];
	  while (current) {
	    out.push(current);
	    current = current.next;
	  }
	  return out;
	};
	(function() {
	  try {
	    Object.defineProperty(WritableState.prototype, "buffer", {
	      get: internalUtil.deprecate(function writableStateBufferGetter() {
	        return this.getBuffer();
	      }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
	    });
	  } catch (_) {
	  }
	})();
	var realHasInstance;
	if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
	  realHasInstance = Function.prototype[Symbol.hasInstance];
	  Object.defineProperty(Writable, Symbol.hasInstance, {
	    value: function value(object) {
	      if (realHasInstance.call(this, object)) return true;
	      if (this !== Writable) return false;
	      return object && object._writableState instanceof WritableState;
	    }
	  });
	} else {
	  realHasInstance = function realHasInstance2(object) {
	    return object instanceof this;
	  };
	}
	function Writable(options) {
	  Duplex = Duplex || require_stream_duplex();
	  var isDuplex = this instanceof Duplex;
	  if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
	  this._writableState = new WritableState(options, this, isDuplex);
	  this.writable = true;
	  if (options) {
	    if (typeof options.write === "function") this._write = options.write;
	    if (typeof options.writev === "function") this._writev = options.writev;
	    if (typeof options.destroy === "function") this._destroy = options.destroy;
	    if (typeof options.final === "function") this._final = options.final;
	  }
	  Stream.call(this);
	}
	Writable.prototype.pipe = function() {
	  errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
	};
	function writeAfterEnd(stream, cb) {
	  var er = new ERR_STREAM_WRITE_AFTER_END();
	  errorOrDestroy(stream, er);
	  process$1.nextTick(cb, er);
	}
	function validChunk(stream, state, chunk, cb) {
	  var er;
	  if (chunk === null) {
	    er = new ERR_STREAM_NULL_VALUES();
	  } else if (typeof chunk !== "string" && !state.objectMode) {
	    er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
	  }
	  if (er) {
	    errorOrDestroy(stream, er);
	    process$1.nextTick(cb, er);
	    return false;
	  }
	  return true;
	}
	Writable.prototype.write = function(chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;
	  var isBuf = !state.objectMode && _isUint8Array(chunk);
	  if (isBuf && !Buffer.isBuffer(chunk)) {
	    chunk = _uint8ArrayToBuffer(chunk);
	  }
	  if (typeof encoding === "function") {
	    cb = encoding;
	    encoding = null;
	  }
	  if (isBuf) encoding = "buffer";
	  else if (!encoding) encoding = state.defaultEncoding;
	  if (typeof cb !== "function") cb = nop;
	  if (state.ending) writeAfterEnd(this, cb);
	  else if (isBuf || validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
	  }
	  return ret;
	};
	Writable.prototype.cork = function() {
	  this._writableState.corked++;
	};
	Writable.prototype.uncork = function() {
	  var state = this._writableState;
	  if (state.corked) {
	    state.corked--;
	    if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
	  }
	};
	Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
	  if (typeof encoding === "string") encoding = encoding.toLowerCase();
	  if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
	  this._writableState.defaultEncoding = encoding;
	  return this;
	};
	Object.defineProperty(Writable.prototype, "writableBuffer", {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get() {
	    return this._writableState && this._writableState.getBuffer();
	  }
	});
	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
	    chunk = Buffer.from(chunk, encoding);
	  }
	  return chunk;
	}
	Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get2() {
	    return this._writableState.highWaterMark;
	  }
	});
	function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
	  if (!isBuf) {
	    var newChunk = decodeChunk(state, chunk, encoding);
	    if (chunk !== newChunk) {
	      isBuf = true;
	      encoding = "buffer";
	      chunk = newChunk;
	    }
	  }
	  var len = state.objectMode ? 1 : chunk.length;
	  state.length += len;
	  var ret = state.length < state.highWaterMark;
	  if (!ret) state.needDrain = true;
	  if (state.writing || state.corked) {
	    var last = state.lastBufferedRequest;
	    state.lastBufferedRequest = {
	      chunk,
	      encoding,
	      isBuf,
	      callback: cb,
	      next: null
	    };
	    if (last) {
	      last.next = state.lastBufferedRequest;
	    } else {
	      state.bufferedRequest = state.lastBufferedRequest;
	    }
	    state.bufferedRequestCount += 1;
	  } else {
	    doWrite(stream, state, false, len, chunk, encoding, cb);
	  }
	  return ret;
	}
	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED("write"));
	  else if (writev) stream._writev(chunk, state.onwrite);
	  else stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}
	function onwriteError(stream, state, sync, er, cb) {
	  --state.pendingcb;
	  if (sync) {
	    process$1.nextTick(cb, er);
	    process$1.nextTick(finishMaybe, stream, state);
	    stream._writableState.errorEmitted = true;
	    errorOrDestroy(stream, er);
	  } else {
	    cb(er);
	    stream._writableState.errorEmitted = true;
	    errorOrDestroy(stream, er);
	    finishMaybe(stream, state);
	  }
	}
	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}
	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;
	  if (typeof cb !== "function") throw new ERR_MULTIPLE_CALLBACK();
	  onwriteStateUpdate(state);
	  if (er) onwriteError(stream, state, sync, er, cb);
	  else {
	    var finished = needFinish(state) || stream.destroyed;
	    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
	      clearBuffer(stream, state);
	    }
	    if (sync) {
	      process$1.nextTick(afterWrite, stream, state, finished, cb);
	    } else {
	      afterWrite(stream, state, finished, cb);
	    }
	  }
	}
	function afterWrite(stream, state, finished, cb) {
	  if (!finished) onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit("drain");
	  }
	}
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;
	  var entry = state.bufferedRequest;
	  if (stream._writev && entry && entry.next) {
	    var l = state.bufferedRequestCount;
	    var buffer = new Array(l);
	    var holder = state.corkedRequestsFree;
	    holder.entry = entry;
	    var count = 0;
	    var allBuffers = true;
	    while (entry) {
	      buffer[count] = entry;
	      if (!entry.isBuf) allBuffers = false;
	      entry = entry.next;
	      count += 1;
	    }
	    buffer.allBuffers = allBuffers;
	    doWrite(stream, state, true, state.length, buffer, "", holder.finish);
	    state.pendingcb++;
	    state.lastBufferedRequest = null;
	    if (holder.next) {
	      state.corkedRequestsFree = holder.next;
	      holder.next = null;
	    } else {
	      state.corkedRequestsFree = new CorkedRequest(state);
	    }
	    state.bufferedRequestCount = 0;
	  } else {
	    while (entry) {
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;
	      doWrite(stream, state, false, len, chunk, encoding, cb);
	      entry = entry.next;
	      state.bufferedRequestCount--;
	      if (state.writing) {
	        break;
	      }
	    }
	    if (entry === null) state.lastBufferedRequest = null;
	  }
	  state.bufferedRequest = entry;
	  state.bufferProcessing = false;
	}
	Writable.prototype._write = function(chunk, encoding, cb) {
	  cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
	};
	Writable.prototype._writev = null;
	Writable.prototype.end = function(chunk, encoding, cb) {
	  var state = this._writableState;
	  if (typeof chunk === "function") {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === "function") {
	    cb = encoding;
	    encoding = null;
	  }
	  if (chunk !== null && chunk !== void 0) this.write(chunk, encoding);
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }
	  if (!state.ending) endWritable(this, state, cb);
	  return this;
	};
	Object.defineProperty(Writable.prototype, "writableLength", {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get3() {
	    return this._writableState.length;
	  }
	});
	function needFinish(state) {
	  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
	}
	function callFinal(stream, state) {
	  stream._final(function(err) {
	    state.pendingcb--;
	    if (err) {
	      errorOrDestroy(stream, err);
	    }
	    state.prefinished = true;
	    stream.emit("prefinish");
	    finishMaybe(stream, state);
	  });
	}
	function prefinish(stream, state) {
	  if (!state.prefinished && !state.finalCalled) {
	    if (typeof stream._final === "function" && !state.destroyed) {
	      state.pendingcb++;
	      state.finalCalled = true;
	      process$1.nextTick(callFinal, stream, state);
	    } else {
	      state.prefinished = true;
	      stream.emit("prefinish");
	    }
	  }
	}
	function finishMaybe(stream, state) {
	  var need = needFinish(state);
	  if (need) {
	    prefinish(stream, state);
	    if (state.pendingcb === 0) {
	      state.finished = true;
	      stream.emit("finish");
	      if (state.autoDestroy) {
	        var rState = stream._readableState;
	        if (!rState || rState.autoDestroy && rState.endEmitted) {
	          stream.destroy();
	        }
	      }
	    }
	  }
	  return need;
	}
	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished) process$1.nextTick(cb);
	    else stream.once("finish", cb);
	  }
	  state.ended = true;
	  stream.writable = false;
	}
	function onCorkedFinish(corkReq, state, err) {
	  var entry = corkReq.entry;
	  corkReq.entry = null;
	  while (entry) {
	    var cb = entry.callback;
	    state.pendingcb--;
	    cb(err);
	    entry = entry.next;
	  }
	  state.corkedRequestsFree.next = corkReq;
	}
	Object.defineProperty(Writable.prototype, "destroyed", {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get4() {
	    if (this._writableState === void 0) {
	      return false;
	    }
	    return this._writableState.destroyed;
	  },
	  set: function set(value) {
	    if (!this._writableState) {
	      return;
	    }
	    this._writableState.destroyed = value;
	  }
	});
	Writable.prototype.destroy = destroyImpl.destroy;
	Writable.prototype._undestroy = destroyImpl.undestroy;
	Writable.prototype._destroy = function(err, cb) {
	  cb(err);
	};
	return _stream_writable;
}

var _stream_duplex;
var hasRequired_stream_duplex;

function require_stream_duplex () {
	if (hasRequired_stream_duplex) return _stream_duplex;
	hasRequired_stream_duplex = 1;

	/*<replacement>*/
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	};
	/*</replacement>*/

	_stream_duplex = Duplex;
	var Readable = require_stream_readable();
	var Writable = require_stream_writable();
	requireInherits_browser()(Duplex, Readable);
	{
	  // Allow the keys array to be GC'ed.
	  var keys = objectKeys(Writable.prototype);
	  for (var v = 0; v < keys.length; v++) {
	    var method = keys[v];
	    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
	  }
	}
	function Duplex(options) {
	  if (!(this instanceof Duplex)) return new Duplex(options);
	  Readable.call(this, options);
	  Writable.call(this, options);
	  this.allowHalfOpen = true;
	  if (options) {
	    if (options.readable === false) this.readable = false;
	    if (options.writable === false) this.writable = false;
	    if (options.allowHalfOpen === false) {
	      this.allowHalfOpen = false;
	      this.once('end', onend);
	    }
	  }
	}
	Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get() {
	    return this._writableState.highWaterMark;
	  }
	});
	Object.defineProperty(Duplex.prototype, 'writableBuffer', {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get() {
	    return this._writableState && this._writableState.getBuffer();
	  }
	});
	Object.defineProperty(Duplex.prototype, 'writableLength', {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get() {
	    return this._writableState.length;
	  }
	});

	// the no-half-open enforcer
	function onend() {
	  // If the writable side ended, then we're ok.
	  if (this._writableState.ended) return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  process$1.nextTick(onEndNT, this);
	}
	function onEndNT(self) {
	  self.end();
	}
	Object.defineProperty(Duplex.prototype, 'destroyed', {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get() {
	    if (this._readableState === undefined || this._writableState === undefined) {
	      return false;
	    }
	    return this._readableState.destroyed && this._writableState.destroyed;
	  },
	  set: function set(value) {
	    // we ignore the value if the stream
	    // has not been initialized yet
	    if (this._readableState === undefined || this._writableState === undefined) {
	      return;
	    }

	    // backward compatibility, the user is explicitly
	    // managing destroyed
	    this._readableState.destroyed = value;
	    this._writableState.destroyed = value;
	  }
	});
	return _stream_duplex;
}

var string_decoder = {};

var hasRequiredString_decoder;

function requireString_decoder () {
	if (hasRequiredString_decoder) return string_decoder;
	hasRequiredString_decoder = 1;

	/*<replacement>*/

	var Buffer = requireSafeBuffer().Buffer;
	/*</replacement>*/

	var isEncoding = Buffer.isEncoding || function (encoding) {
	  encoding = '' + encoding;
	  switch (encoding && encoding.toLowerCase()) {
	    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
	      return true;
	    default:
	      return false;
	  }
	};

	function _normalizeEncoding(enc) {
	  if (!enc) return 'utf8';
	  var retried;
	  while (true) {
	    switch (enc) {
	      case 'utf8':
	      case 'utf-8':
	        return 'utf8';
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return 'utf16le';
	      case 'latin1':
	      case 'binary':
	        return 'latin1';
	      case 'base64':
	      case 'ascii':
	      case 'hex':
	        return enc;
	      default:
	        if (retried) return; // undefined
	        enc = ('' + enc).toLowerCase();
	        retried = true;
	    }
	  }
	}
	// Do not cache `Buffer.isEncoding` when checking encoding names as some
	// modules monkey-patch it to support additional encodings
	function normalizeEncoding(enc) {
	  var nenc = _normalizeEncoding(enc);
	  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
	  return nenc || enc;
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters.
	string_decoder.StringDecoder = StringDecoder;
	function StringDecoder(encoding) {
	  this.encoding = normalizeEncoding(encoding);
	  var nb;
	  switch (this.encoding) {
	    case 'utf16le':
	      this.text = utf16Text;
	      this.end = utf16End;
	      nb = 4;
	      break;
	    case 'utf8':
	      this.fillLast = utf8FillLast;
	      nb = 4;
	      break;
	    case 'base64':
	      this.text = base64Text;
	      this.end = base64End;
	      nb = 3;
	      break;
	    default:
	      this.write = simpleWrite;
	      this.end = simpleEnd;
	      return;
	  }
	  this.lastNeed = 0;
	  this.lastTotal = 0;
	  this.lastChar = Buffer.allocUnsafe(nb);
	}

	StringDecoder.prototype.write = function (buf) {
	  if (buf.length === 0) return '';
	  var r;
	  var i;
	  if (this.lastNeed) {
	    r = this.fillLast(buf);
	    if (r === undefined) return '';
	    i = this.lastNeed;
	    this.lastNeed = 0;
	  } else {
	    i = 0;
	  }
	  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
	  return r || '';
	};

	StringDecoder.prototype.end = utf8End;

	// Returns only complete characters in a Buffer
	StringDecoder.prototype.text = utf8Text;

	// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
	StringDecoder.prototype.fillLast = function (buf) {
	  if (this.lastNeed <= buf.length) {
	    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
	    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
	  }
	  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
	  this.lastNeed -= buf.length;
	};

	// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
	// continuation byte. If an invalid byte is detected, -2 is returned.
	function utf8CheckByte(byte) {
	  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
	  return byte >> 6 === 0x02 ? -1 : -2;
	}

	// Checks at most 3 bytes at the end of a Buffer in order to detect an
	// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
	// needed to complete the UTF-8 character (if applicable) are returned.
	function utf8CheckIncomplete(self, buf, i) {
	  var j = buf.length - 1;
	  if (j < i) return 0;
	  var nb = utf8CheckByte(buf[j]);
	  if (nb >= 0) {
	    if (nb > 0) self.lastNeed = nb - 1;
	    return nb;
	  }
	  if (--j < i || nb === -2) return 0;
	  nb = utf8CheckByte(buf[j]);
	  if (nb >= 0) {
	    if (nb > 0) self.lastNeed = nb - 2;
	    return nb;
	  }
	  if (--j < i || nb === -2) return 0;
	  nb = utf8CheckByte(buf[j]);
	  if (nb >= 0) {
	    if (nb > 0) {
	      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
	    }
	    return nb;
	  }
	  return 0;
	}

	// Validates as many continuation bytes for a multi-byte UTF-8 character as
	// needed or are available. If we see a non-continuation byte where we expect
	// one, we "replace" the validated continuation bytes we've seen so far with
	// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
	// behavior. The continuation byte check is included three times in the case
	// where all of the continuation bytes for a character exist in the same buffer.
	// It is also done this way as a slight performance increase instead of using a
	// loop.
	function utf8CheckExtraBytes(self, buf, p) {
	  if ((buf[0] & 0xC0) !== 0x80) {
	    self.lastNeed = 0;
	    return '\ufffd';
	  }
	  if (self.lastNeed > 1 && buf.length > 1) {
	    if ((buf[1] & 0xC0) !== 0x80) {
	      self.lastNeed = 1;
	      return '\ufffd';
	    }
	    if (self.lastNeed > 2 && buf.length > 2) {
	      if ((buf[2] & 0xC0) !== 0x80) {
	        self.lastNeed = 2;
	        return '\ufffd';
	      }
	    }
	  }
	}

	// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
	function utf8FillLast(buf) {
	  var p = this.lastTotal - this.lastNeed;
	  var r = utf8CheckExtraBytes(this, buf);
	  if (r !== undefined) return r;
	  if (this.lastNeed <= buf.length) {
	    buf.copy(this.lastChar, p, 0, this.lastNeed);
	    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
	  }
	  buf.copy(this.lastChar, p, 0, buf.length);
	  this.lastNeed -= buf.length;
	}

	// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
	// partial character, the character's bytes are buffered until the required
	// number of bytes are available.
	function utf8Text(buf, i) {
	  var total = utf8CheckIncomplete(this, buf, i);
	  if (!this.lastNeed) return buf.toString('utf8', i);
	  this.lastTotal = total;
	  var end = buf.length - (total - this.lastNeed);
	  buf.copy(this.lastChar, 0, end);
	  return buf.toString('utf8', i, end);
	}

	// For UTF-8, a replacement character is added when ending on a partial
	// character.
	function utf8End(buf) {
	  var r = buf && buf.length ? this.write(buf) : '';
	  if (this.lastNeed) return r + '\ufffd';
	  return r;
	}

	// UTF-16LE typically needs two bytes per character, but even if we have an even
	// number of bytes available, we need to check if we end on a leading/high
	// surrogate. In that case, we need to wait for the next two bytes in order to
	// decode the last character properly.
	function utf16Text(buf, i) {
	  if ((buf.length - i) % 2 === 0) {
	    var r = buf.toString('utf16le', i);
	    if (r) {
	      var c = r.charCodeAt(r.length - 1);
	      if (c >= 0xD800 && c <= 0xDBFF) {
	        this.lastNeed = 2;
	        this.lastTotal = 4;
	        this.lastChar[0] = buf[buf.length - 2];
	        this.lastChar[1] = buf[buf.length - 1];
	        return r.slice(0, -1);
	      }
	    }
	    return r;
	  }
	  this.lastNeed = 1;
	  this.lastTotal = 2;
	  this.lastChar[0] = buf[buf.length - 1];
	  return buf.toString('utf16le', i, buf.length - 1);
	}

	// For UTF-16LE we do not explicitly append special replacement characters if we
	// end on a partial character, we simply let v8 handle that.
	function utf16End(buf) {
	  var r = buf && buf.length ? this.write(buf) : '';
	  if (this.lastNeed) {
	    var end = this.lastTotal - this.lastNeed;
	    return r + this.lastChar.toString('utf16le', 0, end);
	  }
	  return r;
	}

	function base64Text(buf, i) {
	  var n = (buf.length - i) % 3;
	  if (n === 0) return buf.toString('base64', i);
	  this.lastNeed = 3 - n;
	  this.lastTotal = 3;
	  if (n === 1) {
	    this.lastChar[0] = buf[buf.length - 1];
	  } else {
	    this.lastChar[0] = buf[buf.length - 2];
	    this.lastChar[1] = buf[buf.length - 1];
	  }
	  return buf.toString('base64', i, buf.length - n);
	}

	function base64End(buf) {
	  var r = buf && buf.length ? this.write(buf) : '';
	  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
	  return r;
	}

	// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
	function simpleWrite(buf) {
	  return buf.toString(this.encoding);
	}

	function simpleEnd(buf) {
	  return buf && buf.length ? this.write(buf) : '';
	}
	return string_decoder;
}

var endOfStream;
var hasRequiredEndOfStream;

function requireEndOfStream () {
	if (hasRequiredEndOfStream) return endOfStream;
	hasRequiredEndOfStream = 1;

	var ERR_STREAM_PREMATURE_CLOSE = requireErrorsBrowser().codes.ERR_STREAM_PREMATURE_CLOSE;
	function once(callback) {
	  var called = false;
	  return function () {
	    if (called) return;
	    called = true;
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	    callback.apply(this, args);
	  };
	}
	function noop() {}
	function isRequest(stream) {
	  return stream.setHeader && typeof stream.abort === 'function';
	}
	function eos(stream, opts, callback) {
	  if (typeof opts === 'function') return eos(stream, null, opts);
	  if (!opts) opts = {};
	  callback = once(callback || noop);
	  var readable = opts.readable || opts.readable !== false && stream.readable;
	  var writable = opts.writable || opts.writable !== false && stream.writable;
	  var onlegacyfinish = function onlegacyfinish() {
	    if (!stream.writable) onfinish();
	  };
	  var writableEnded = stream._writableState && stream._writableState.finished;
	  var onfinish = function onfinish() {
	    writable = false;
	    writableEnded = true;
	    if (!readable) callback.call(stream);
	  };
	  var readableEnded = stream._readableState && stream._readableState.endEmitted;
	  var onend = function onend() {
	    readable = false;
	    readableEnded = true;
	    if (!writable) callback.call(stream);
	  };
	  var onerror = function onerror(err) {
	    callback.call(stream, err);
	  };
	  var onclose = function onclose() {
	    var err;
	    if (readable && !readableEnded) {
	      if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
	      return callback.call(stream, err);
	    }
	    if (writable && !writableEnded) {
	      if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
	      return callback.call(stream, err);
	    }
	  };
	  var onrequest = function onrequest() {
	    stream.req.on('finish', onfinish);
	  };
	  if (isRequest(stream)) {
	    stream.on('complete', onfinish);
	    stream.on('abort', onclose);
	    if (stream.req) onrequest();else stream.on('request', onrequest);
	  } else if (writable && !stream._writableState) {
	    // legacy streams
	    stream.on('end', onlegacyfinish);
	    stream.on('close', onlegacyfinish);
	  }
	  stream.on('end', onend);
	  stream.on('finish', onfinish);
	  if (opts.error !== false) stream.on('error', onerror);
	  stream.on('close', onclose);
	  return function () {
	    stream.removeListener('complete', onfinish);
	    stream.removeListener('abort', onclose);
	    stream.removeListener('request', onrequest);
	    if (stream.req) stream.req.removeListener('finish', onfinish);
	    stream.removeListener('end', onlegacyfinish);
	    stream.removeListener('close', onlegacyfinish);
	    stream.removeListener('finish', onfinish);
	    stream.removeListener('end', onend);
	    stream.removeListener('error', onerror);
	    stream.removeListener('close', onclose);
	  };
	}
	endOfStream = eos;
	return endOfStream;
}

var async_iterator;
var hasRequiredAsync_iterator;

function requireAsync_iterator () {
	if (hasRequiredAsync_iterator) return async_iterator;
	hasRequiredAsync_iterator = 1;

	var _Object$setPrototypeO;
	function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
	function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
	var finished = requireEndOfStream();
	var kLastResolve = Symbol('lastResolve');
	var kLastReject = Symbol('lastReject');
	var kError = Symbol('error');
	var kEnded = Symbol('ended');
	var kLastPromise = Symbol('lastPromise');
	var kHandlePromise = Symbol('handlePromise');
	var kStream = Symbol('stream');
	function createIterResult(value, done) {
	  return {
	    value: value,
	    done: done
	  };
	}
	function readAndResolve(iter) {
	  var resolve = iter[kLastResolve];
	  if (resolve !== null) {
	    var data = iter[kStream].read();
	    // we defer if data is null
	    // we can be expecting either 'end' or
	    // 'error'
	    if (data !== null) {
	      iter[kLastPromise] = null;
	      iter[kLastResolve] = null;
	      iter[kLastReject] = null;
	      resolve(createIterResult(data, false));
	    }
	  }
	}
	function onReadable(iter) {
	  // we wait for the next tick, because it might
	  // emit an error with process.nextTick
	  process$1.nextTick(readAndResolve, iter);
	}
	function wrapForNext(lastPromise, iter) {
	  return function (resolve, reject) {
	    lastPromise.then(function () {
	      if (iter[kEnded]) {
	        resolve(createIterResult(undefined, true));
	        return;
	      }
	      iter[kHandlePromise](resolve, reject);
	    }, reject);
	  };
	}
	var AsyncIteratorPrototype = Object.getPrototypeOf(function () {});
	var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
	  get stream() {
	    return this[kStream];
	  },
	  next: function next() {
	    var _this = this;
	    // if we have detected an error in the meanwhile
	    // reject straight away
	    var error = this[kError];
	    if (error !== null) {
	      return Promise.reject(error);
	    }
	    if (this[kEnded]) {
	      return Promise.resolve(createIterResult(undefined, true));
	    }
	    if (this[kStream].destroyed) {
	      // We need to defer via nextTick because if .destroy(err) is
	      // called, the error will be emitted via nextTick, and
	      // we cannot guarantee that there is no error lingering around
	      // waiting to be emitted.
	      return new Promise(function (resolve, reject) {
	        process$1.nextTick(function () {
	          if (_this[kError]) {
	            reject(_this[kError]);
	          } else {
	            resolve(createIterResult(undefined, true));
	          }
	        });
	      });
	    }

	    // if we have multiple next() calls
	    // we will wait for the previous Promise to finish
	    // this logic is optimized to support for await loops,
	    // where next() is only called once at a time
	    var lastPromise = this[kLastPromise];
	    var promise;
	    if (lastPromise) {
	      promise = new Promise(wrapForNext(lastPromise, this));
	    } else {
	      // fast path needed to support multiple this.push()
	      // without triggering the next() queue
	      var data = this[kStream].read();
	      if (data !== null) {
	        return Promise.resolve(createIterResult(data, false));
	      }
	      promise = new Promise(this[kHandlePromise]);
	    }
	    this[kLastPromise] = promise;
	    return promise;
	  }
	}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function () {
	  return this;
	}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
	  var _this2 = this;
	  // destroy(err, cb) is a private API
	  // we can guarantee we have that here, because we control the
	  // Readable class this is attached to
	  return new Promise(function (resolve, reject) {
	    _this2[kStream].destroy(null, function (err) {
	      if (err) {
	        reject(err);
	        return;
	      }
	      resolve(createIterResult(undefined, true));
	    });
	  });
	}), _Object$setPrototypeO), AsyncIteratorPrototype);
	var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
	  var _Object$create;
	  var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
	    value: stream,
	    writable: true
	  }), _defineProperty(_Object$create, kLastResolve, {
	    value: null,
	    writable: true
	  }), _defineProperty(_Object$create, kLastReject, {
	    value: null,
	    writable: true
	  }), _defineProperty(_Object$create, kError, {
	    value: null,
	    writable: true
	  }), _defineProperty(_Object$create, kEnded, {
	    value: stream._readableState.endEmitted,
	    writable: true
	  }), _defineProperty(_Object$create, kHandlePromise, {
	    value: function value(resolve, reject) {
	      var data = iterator[kStream].read();
	      if (data) {
	        iterator[kLastPromise] = null;
	        iterator[kLastResolve] = null;
	        iterator[kLastReject] = null;
	        resolve(createIterResult(data, false));
	      } else {
	        iterator[kLastResolve] = resolve;
	        iterator[kLastReject] = reject;
	      }
	    },
	    writable: true
	  }), _Object$create));
	  iterator[kLastPromise] = null;
	  finished(stream, function (err) {
	    if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
	      var reject = iterator[kLastReject];
	      // reject if we are waiting for data in the Promise
	      // returned by next() and store the error
	      if (reject !== null) {
	        iterator[kLastPromise] = null;
	        iterator[kLastResolve] = null;
	        iterator[kLastReject] = null;
	        reject(err);
	      }
	      iterator[kError] = err;
	      return;
	    }
	    var resolve = iterator[kLastResolve];
	    if (resolve !== null) {
	      iterator[kLastPromise] = null;
	      iterator[kLastResolve] = null;
	      iterator[kLastReject] = null;
	      resolve(createIterResult(undefined, true));
	    }
	    iterator[kEnded] = true;
	  });
	  stream.on('readable', onReadable.bind(null, iterator));
	  return iterator;
	};
	async_iterator = createReadableStreamAsyncIterator;
	return async_iterator;
}

var fromBrowser;
var hasRequiredFromBrowser;

function requireFromBrowser () {
	if (hasRequiredFromBrowser) return fromBrowser;
	hasRequiredFromBrowser = 1;
	fromBrowser = function () {
	  throw new Error('Readable.from is not available in the browser')
	};
	return fromBrowser;
}

var _stream_readable;
var hasRequired_stream_readable;

function require_stream_readable () {
	if (hasRequired_stream_readable) return _stream_readable;
	hasRequired_stream_readable = 1;
	var define_global_default = {};
	_stream_readable = Readable;
	var Duplex;
	Readable.ReadableState = ReadableState;
	requireEvents().EventEmitter;
	var EElistenerCount = function EElistenerCount2(emitter, type) {
	  return emitter.listeners(type).length;
	};
	var Stream = requireStreamBrowser();
	var Buffer = requireDist().Buffer;
	var OurUint8Array = (typeof define_global_default !== "undefined" ? define_global_default : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
	};
	function _uint8ArrayToBuffer(chunk) {
	  return Buffer.from(chunk);
	}
	function _isUint8Array(obj) {
	  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
	}
	var debugUtil = require$$3;
	var debug;
	if (debugUtil && debugUtil.debuglog) {
	  debug = debugUtil.debuglog("stream");
	} else {
	  debug = function debug2() {
	  };
	}
	var BufferList = requireBuffer_list();
	var destroyImpl = requireDestroy();
	var _require = requireState(), getHighWaterMark = _require.getHighWaterMark;
	var _require$codes = requireErrorsBrowser().codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
	var StringDecoder;
	var createReadableStreamAsyncIterator;
	var from;
	requireInherits_browser()(Readable, Stream);
	var errorOrDestroy = destroyImpl.errorOrDestroy;
	var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
	function prependListener(emitter, event, fn) {
	  if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
	  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
	  else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
	  else emitter._events[event] = [fn, emitter._events[event]];
	}
	function ReadableState(options, stream, isDuplex) {
	  Duplex = Duplex || require_stream_duplex();
	  options = options || {};
	  if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
	  this.objectMode = !!options.objectMode;
	  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
	  this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
	  this.buffer = new BufferList();
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;
	  this.sync = true;
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;
	  this.resumeScheduled = false;
	  this.paused = true;
	  this.emitClose = options.emitClose !== false;
	  this.autoDestroy = !!options.autoDestroy;
	  this.destroyed = false;
	  this.defaultEncoding = options.defaultEncoding || "utf8";
	  this.awaitDrain = 0;
	  this.readingMore = false;
	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder) StringDecoder = requireString_decoder().StringDecoder;
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}
	function Readable(options) {
	  Duplex = Duplex || require_stream_duplex();
	  if (!(this instanceof Readable)) return new Readable(options);
	  var isDuplex = this instanceof Duplex;
	  this._readableState = new ReadableState(options, this, isDuplex);
	  this.readable = true;
	  if (options) {
	    if (typeof options.read === "function") this._read = options.read;
	    if (typeof options.destroy === "function") this._destroy = options.destroy;
	  }
	  Stream.call(this);
	}
	Object.defineProperty(Readable.prototype, "destroyed", {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get() {
	    if (this._readableState === void 0) {
	      return false;
	    }
	    return this._readableState.destroyed;
	  },
	  set: function set(value) {
	    if (!this._readableState) {
	      return;
	    }
	    this._readableState.destroyed = value;
	  }
	});
	Readable.prototype.destroy = destroyImpl.destroy;
	Readable.prototype._undestroy = destroyImpl.undestroy;
	Readable.prototype._destroy = function(err, cb) {
	  cb(err);
	};
	Readable.prototype.push = function(chunk, encoding) {
	  var state = this._readableState;
	  var skipChunkCheck;
	  if (!state.objectMode) {
	    if (typeof chunk === "string") {
	      encoding = encoding || state.defaultEncoding;
	      if (encoding !== state.encoding) {
	        chunk = Buffer.from(chunk, encoding);
	        encoding = "";
	      }
	      skipChunkCheck = true;
	    }
	  } else {
	    skipChunkCheck = true;
	  }
	  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
	};
	Readable.prototype.unshift = function(chunk) {
	  return readableAddChunk(this, chunk, null, true, false);
	};
	function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
	  debug("readableAddChunk", chunk);
	  var state = stream._readableState;
	  if (chunk === null) {
	    state.reading = false;
	    onEofChunk(stream, state);
	  } else {
	    var er;
	    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
	    if (er) {
	      errorOrDestroy(stream, er);
	    } else if (state.objectMode || chunk && chunk.length > 0) {
	      if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
	        chunk = _uint8ArrayToBuffer(chunk);
	      }
	      if (addToFront) {
	        if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
	        else addChunk(stream, state, chunk, true);
	      } else if (state.ended) {
	        errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
	      } else if (state.destroyed) {
	        return false;
	      } else {
	        state.reading = false;
	        if (state.decoder && !encoding) {
	          chunk = state.decoder.write(chunk);
	          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
	          else maybeReadMore(stream, state);
	        } else {
	          addChunk(stream, state, chunk, false);
	        }
	      }
	    } else if (!addToFront) {
	      state.reading = false;
	      maybeReadMore(stream, state);
	    }
	  }
	  return !state.ended && (state.length < state.highWaterMark || state.length === 0);
	}
	function addChunk(stream, state, chunk, addToFront) {
	  if (state.flowing && state.length === 0 && !state.sync) {
	    state.awaitDrain = 0;
	    stream.emit("data", chunk);
	  } else {
	    state.length += state.objectMode ? 1 : chunk.length;
	    if (addToFront) state.buffer.unshift(chunk);
	    else state.buffer.push(chunk);
	    if (state.needReadable) emitReadable(stream);
	  }
	  maybeReadMore(stream, state);
	}
	function chunkInvalid(state, chunk) {
	  var er;
	  if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
	    er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
	  }
	  return er;
	}
	Readable.prototype.isPaused = function() {
	  return this._readableState.flowing === false;
	};
	Readable.prototype.setEncoding = function(enc) {
	  if (!StringDecoder) StringDecoder = requireString_decoder().StringDecoder;
	  var decoder = new StringDecoder(enc);
	  this._readableState.decoder = decoder;
	  this._readableState.encoding = this._readableState.decoder.encoding;
	  var p = this._readableState.buffer.head;
	  var content = "";
	  while (p !== null) {
	    content += decoder.write(p.data);
	    p = p.next;
	  }
	  this._readableState.buffer.clear();
	  if (content !== "") this._readableState.buffer.push(content);
	  this._readableState.length = content.length;
	  return this;
	};
	var MAX_HWM = 1073741824;
	function computeNewHighWaterMark(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    n--;
	    n |= n >>> 1;
	    n |= n >>> 2;
	    n |= n >>> 4;
	    n |= n >>> 8;
	    n |= n >>> 16;
	    n++;
	  }
	  return n;
	}
	function howMuchToRead(n, state) {
	  if (n <= 0 || state.length === 0 && state.ended) return 0;
	  if (state.objectMode) return 1;
	  if (n !== n) {
	    if (state.flowing && state.length) return state.buffer.head.data.length;
	    else return state.length;
	  }
	  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
	  if (n <= state.length) return n;
	  if (!state.ended) {
	    state.needReadable = true;
	    return 0;
	  }
	  return state.length;
	}
	Readable.prototype.read = function(n) {
	  debug("read", n);
	  n = parseInt(n, 10);
	  var state = this._readableState;
	  var nOrig = n;
	  if (n !== 0) state.emittedReadable = false;
	  if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
	    debug("read: emitReadable", state.length, state.ended);
	    if (state.length === 0 && state.ended) endReadable(this);
	    else emitReadable(this);
	    return null;
	  }
	  n = howMuchToRead(n, state);
	  if (n === 0 && state.ended) {
	    if (state.length === 0) endReadable(this);
	    return null;
	  }
	  var doRead = state.needReadable;
	  debug("need readable", doRead);
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug("length less than watermark", doRead);
	  }
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug("reading or ended", doRead);
	  } else if (doRead) {
	    debug("do read");
	    state.reading = true;
	    state.sync = true;
	    if (state.length === 0) state.needReadable = true;
	    this._read(state.highWaterMark);
	    state.sync = false;
	    if (!state.reading) n = howMuchToRead(nOrig, state);
	  }
	  var ret;
	  if (n > 0) ret = fromList(n, state);
	  else ret = null;
	  if (ret === null) {
	    state.needReadable = state.length <= state.highWaterMark;
	    n = 0;
	  } else {
	    state.length -= n;
	    state.awaitDrain = 0;
	  }
	  if (state.length === 0) {
	    if (!state.ended) state.needReadable = true;
	    if (nOrig !== n && state.ended) endReadable(this);
	  }
	  if (ret !== null) this.emit("data", ret);
	  return ret;
	};
	function onEofChunk(stream, state) {
	  debug("onEofChunk");
	  if (state.ended) return;
	  if (state.decoder) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;
	  if (state.sync) {
	    emitReadable(stream);
	  } else {
	    state.needReadable = false;
	    if (!state.emittedReadable) {
	      state.emittedReadable = true;
	      emitReadable_(stream);
	    }
	  }
	}
	function emitReadable(stream) {
	  var state = stream._readableState;
	  debug("emitReadable", state.needReadable, state.emittedReadable);
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug("emitReadable", state.flowing);
	    state.emittedReadable = true;
	    process$1.nextTick(emitReadable_, stream);
	  }
	}
	function emitReadable_(stream) {
	  var state = stream._readableState;
	  debug("emitReadable_", state.destroyed, state.length, state.ended);
	  if (!state.destroyed && (state.length || state.ended)) {
	    stream.emit("readable");
	    state.emittedReadable = false;
	  }
	  state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
	  flow(stream);
	}
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    process$1.nextTick(maybeReadMore_, stream, state);
	  }
	}
	function maybeReadMore_(stream, state) {
	  while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
	    var len = state.length;
	    debug("maybeReadMore read 0");
	    stream.read(0);
	    if (len === state.length)
	      break;
	  }
	  state.readingMore = false;
	}
	Readable.prototype._read = function(n) {
	  errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
	};
	Readable.prototype.pipe = function(dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;
	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
	  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process$1.stdout && dest !== process$1.stderr;
	  var endFn = doEnd ? onend : unpipe;
	  if (state.endEmitted) process$1.nextTick(endFn);
	  else src.once("end", endFn);
	  dest.on("unpipe", onunpipe);
	  function onunpipe(readable, unpipeInfo) {
	    debug("onunpipe");
	    if (readable === src) {
	      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
	        unpipeInfo.hasUnpiped = true;
	        cleanup();
	      }
	    }
	  }
	  function onend() {
	    debug("onend");
	    dest.end();
	  }
	  var ondrain = pipeOnDrain(src);
	  dest.on("drain", ondrain);
	  var cleanedUp = false;
	  function cleanup() {
	    debug("cleanup");
	    dest.removeListener("close", onclose);
	    dest.removeListener("finish", onfinish);
	    dest.removeListener("drain", ondrain);
	    dest.removeListener("error", onerror);
	    dest.removeListener("unpipe", onunpipe);
	    src.removeListener("end", onend);
	    src.removeListener("end", unpipe);
	    src.removeListener("data", ondata);
	    cleanedUp = true;
	    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
	  }
	  src.on("data", ondata);
	  function ondata(chunk) {
	    debug("ondata");
	    var ret = dest.write(chunk);
	    debug("dest.write", ret);
	    if (ret === false) {
	      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
	        debug("false write response, pause", state.awaitDrain);
	        state.awaitDrain++;
	      }
	      src.pause();
	    }
	  }
	  function onerror(er) {
	    debug("onerror", er);
	    unpipe();
	    dest.removeListener("error", onerror);
	    if (EElistenerCount(dest, "error") === 0) errorOrDestroy(dest, er);
	  }
	  prependListener(dest, "error", onerror);
	  function onclose() {
	    dest.removeListener("finish", onfinish);
	    unpipe();
	  }
	  dest.once("close", onclose);
	  function onfinish() {
	    debug("onfinish");
	    dest.removeListener("close", onclose);
	    unpipe();
	  }
	  dest.once("finish", onfinish);
	  function unpipe() {
	    debug("unpipe");
	    src.unpipe(dest);
	  }
	  dest.emit("pipe", src);
	  if (!state.flowing) {
	    debug("pipe resume");
	    src.resume();
	  }
	  return dest;
	};
	function pipeOnDrain(src) {
	  return function pipeOnDrainFunctionResult() {
	    var state = src._readableState;
	    debug("pipeOnDrain", state.awaitDrain);
	    if (state.awaitDrain) state.awaitDrain--;
	    if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}
	Readable.prototype.unpipe = function(dest) {
	  var state = this._readableState;
	  var unpipeInfo = {
	    hasUnpiped: false
	  };
	  if (state.pipesCount === 0) return this;
	  if (state.pipesCount === 1) {
	    if (dest && dest !== state.pipes) return this;
	    if (!dest) dest = state.pipes;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest) dest.emit("unpipe", this, unpipeInfo);
	    return this;
	  }
	  if (!dest) {
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    for (var i = 0; i < len; i++) dests[i].emit("unpipe", this, {
	      hasUnpiped: false
	    });
	    return this;
	  }
	  var index = indexOf(state.pipes, dest);
	  if (index === -1) return this;
	  state.pipes.splice(index, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1) state.pipes = state.pipes[0];
	  dest.emit("unpipe", this, unpipeInfo);
	  return this;
	};
	Readable.prototype.on = function(ev, fn) {
	  var res = Stream.prototype.on.call(this, ev, fn);
	  var state = this._readableState;
	  if (ev === "data") {
	    state.readableListening = this.listenerCount("readable") > 0;
	    if (state.flowing !== false) this.resume();
	  } else if (ev === "readable") {
	    if (!state.endEmitted && !state.readableListening) {
	      state.readableListening = state.needReadable = true;
	      state.flowing = false;
	      state.emittedReadable = false;
	      debug("on readable", state.length, state.reading);
	      if (state.length) {
	        emitReadable(this);
	      } else if (!state.reading) {
	        process$1.nextTick(nReadingNextTick, this);
	      }
	    }
	  }
	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;
	Readable.prototype.removeListener = function(ev, fn) {
	  var res = Stream.prototype.removeListener.call(this, ev, fn);
	  if (ev === "readable") {
	    process$1.nextTick(updateReadableListening, this);
	  }
	  return res;
	};
	Readable.prototype.removeAllListeners = function(ev) {
	  var res = Stream.prototype.removeAllListeners.apply(this, arguments);
	  if (ev === "readable" || ev === void 0) {
	    process$1.nextTick(updateReadableListening, this);
	  }
	  return res;
	};
	function updateReadableListening(self2) {
	  var state = self2._readableState;
	  state.readableListening = self2.listenerCount("readable") > 0;
	  if (state.resumeScheduled && !state.paused) {
	    state.flowing = true;
	  } else if (self2.listenerCount("data") > 0) {
	    self2.resume();
	  }
	}
	function nReadingNextTick(self2) {
	  debug("readable nexttick read 0");
	  self2.read(0);
	}
	Readable.prototype.resume = function() {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug("resume");
	    state.flowing = !state.readableListening;
	    resume(this, state);
	  }
	  state.paused = false;
	  return this;
	};
	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    process$1.nextTick(resume_, stream, state);
	  }
	}
	function resume_(stream, state) {
	  debug("resume", state.reading);
	  if (!state.reading) {
	    stream.read(0);
	  }
	  state.resumeScheduled = false;
	  stream.emit("resume");
	  flow(stream);
	  if (state.flowing && !state.reading) stream.read(0);
	}
	Readable.prototype.pause = function() {
	  debug("call pause flowing=%j", this._readableState.flowing);
	  if (this._readableState.flowing !== false) {
	    debug("pause");
	    this._readableState.flowing = false;
	    this.emit("pause");
	  }
	  this._readableState.paused = true;
	  return this;
	};
	function flow(stream) {
	  var state = stream._readableState;
	  debug("flow", state.flowing);
	  while (state.flowing && stream.read() !== null) ;
	}
	Readable.prototype.wrap = function(stream) {
	  var _this = this;
	  var state = this._readableState;
	  var paused = false;
	  stream.on("end", function() {
	    debug("wrapped end");
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length) _this.push(chunk);
	    }
	    _this.push(null);
	  });
	  stream.on("data", function(chunk) {
	    debug("wrapped data");
	    if (state.decoder) chunk = state.decoder.write(chunk);
	    if (state.objectMode && (chunk === null || chunk === void 0)) return;
	    else if (!state.objectMode && (!chunk || !chunk.length)) return;
	    var ret = _this.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });
	  for (var i in stream) {
	    if (this[i] === void 0 && typeof stream[i] === "function") {
	      this[i] = /* @__PURE__ */ function methodWrap(method) {
	        return function methodWrapReturnFunction() {
	          return stream[method].apply(stream, arguments);
	        };
	      }(i);
	    }
	  }
	  for (var n = 0; n < kProxyEvents.length; n++) {
	    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
	  }
	  this._read = function(n2) {
	    debug("wrapped _read", n2);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };
	  return this;
	};
	if (typeof Symbol === "function") {
	  Readable.prototype[Symbol.asyncIterator] = function() {
	    if (createReadableStreamAsyncIterator === void 0) {
	      createReadableStreamAsyncIterator = requireAsync_iterator();
	    }
	    return createReadableStreamAsyncIterator(this);
	  };
	}
	Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get2() {
	    return this._readableState.highWaterMark;
	  }
	});
	Object.defineProperty(Readable.prototype, "readableBuffer", {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get3() {
	    return this._readableState && this._readableState.buffer;
	  }
	});
	Object.defineProperty(Readable.prototype, "readableFlowing", {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get4() {
	    return this._readableState.flowing;
	  },
	  set: function set2(state) {
	    if (this._readableState) {
	      this._readableState.flowing = state;
	    }
	  }
	});
	Readable._fromList = fromList;
	Object.defineProperty(Readable.prototype, "readableLength", {
	  // making it explicit this property is not enumerable
	  // because otherwise some prototype manipulation in
	  // userland will fail
	  enumerable: false,
	  get: function get5() {
	    return this._readableState.length;
	  }
	});
	function fromList(n, state) {
	  if (state.length === 0) return null;
	  var ret;
	  if (state.objectMode) ret = state.buffer.shift();
	  else if (!n || n >= state.length) {
	    if (state.decoder) ret = state.buffer.join("");
	    else if (state.buffer.length === 1) ret = state.buffer.first();
	    else ret = state.buffer.concat(state.length);
	    state.buffer.clear();
	  } else {
	    ret = state.buffer.consume(n, state.decoder);
	  }
	  return ret;
	}
	function endReadable(stream) {
	  var state = stream._readableState;
	  debug("endReadable", state.endEmitted);
	  if (!state.endEmitted) {
	    state.ended = true;
	    process$1.nextTick(endReadableNT, state, stream);
	  }
	}
	function endReadableNT(state, stream) {
	  debug("endReadableNT", state.endEmitted, state.length);
	  if (!state.endEmitted && state.length === 0) {
	    state.endEmitted = true;
	    stream.readable = false;
	    stream.emit("end");
	    if (state.autoDestroy) {
	      var wState = stream._writableState;
	      if (!wState || wState.autoDestroy && wState.finished) {
	        stream.destroy();
	      }
	    }
	  }
	}
	if (typeof Symbol === "function") {
	  Readable.from = function(iterable, opts) {
	    if (from === void 0) {
	      from = requireFromBrowser();
	    }
	    return from(Readable, iterable, opts);
	  };
	}
	function indexOf(xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}
	return _stream_readable;
}

var _stream_transform;
var hasRequired_stream_transform;

function require_stream_transform () {
	if (hasRequired_stream_transform) return _stream_transform;
	hasRequired_stream_transform = 1;

	_stream_transform = Transform;
	var _require$codes = requireErrorsBrowser().codes,
	  ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
	  ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
	  ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING,
	  ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
	var Duplex = require_stream_duplex();
	requireInherits_browser()(Transform, Duplex);
	function afterTransform(er, data) {
	  var ts = this._transformState;
	  ts.transforming = false;
	  var cb = ts.writecb;
	  if (cb === null) {
	    return this.emit('error', new ERR_MULTIPLE_CALLBACK());
	  }
	  ts.writechunk = null;
	  ts.writecb = null;
	  if (data != null)
	    // single equals check for both `null` and `undefined`
	    this.push(data);
	  cb(er);
	  var rs = this._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    this._read(rs.highWaterMark);
	  }
	}
	function Transform(options) {
	  if (!(this instanceof Transform)) return new Transform(options);
	  Duplex.call(this, options);
	  this._transformState = {
	    afterTransform: afterTransform.bind(this),
	    needTransform: false,
	    transforming: false,
	    writecb: null,
	    writechunk: null,
	    writeencoding: null
	  };

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;
	  if (options) {
	    if (typeof options.transform === 'function') this._transform = options.transform;
	    if (typeof options.flush === 'function') this._flush = options.flush;
	  }

	  // When the writable side finishes, then flush out anything remaining.
	  this.on('prefinish', prefinish);
	}
	function prefinish() {
	  var _this = this;
	  if (typeof this._flush === 'function' && !this._readableState.destroyed) {
	    this._flush(function (er, data) {
	      done(_this, er, data);
	    });
	  } else {
	    done(this, null, null);
	  }
	}
	Transform.prototype.push = function (chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function (chunk, encoding, cb) {
	  cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
	};
	Transform.prototype._write = function (chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function (n) {
	  var ts = this._transformState;
	  if (ts.writechunk !== null && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};
	Transform.prototype._destroy = function (err, cb) {
	  Duplex.prototype._destroy.call(this, err, function (err2) {
	    cb(err2);
	  });
	};
	function done(stream, er, data) {
	  if (er) return stream.emit('error', er);
	  if (data != null)
	    // single equals check for both `null` and `undefined`
	    stream.push(data);

	  // TODO(BridgeAR): Write a test for these two error cases
	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
	  if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
	  return stream.push(null);
	}
	return _stream_transform;
}

var _stream_passthrough;
var hasRequired_stream_passthrough;

function require_stream_passthrough () {
	if (hasRequired_stream_passthrough) return _stream_passthrough;
	hasRequired_stream_passthrough = 1;

	_stream_passthrough = PassThrough;
	var Transform = require_stream_transform();
	requireInherits_browser()(PassThrough, Transform);
	function PassThrough(options) {
	  if (!(this instanceof PassThrough)) return new PassThrough(options);
	  Transform.call(this, options);
	}
	PassThrough.prototype._transform = function (chunk, encoding, cb) {
	  cb(null, chunk);
	};
	return _stream_passthrough;
}

var pipeline_1;
var hasRequiredPipeline;

function requirePipeline () {
	if (hasRequiredPipeline) return pipeline_1;
	hasRequiredPipeline = 1;

	var eos;
	function once(callback) {
	  var called = false;
	  return function () {
	    if (called) return;
	    called = true;
	    callback.apply(void 0, arguments);
	  };
	}
	var _require$codes = requireErrorsBrowser().codes,
	  ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS,
	  ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
	function noop(err) {
	  // Rethrow the error if it exists to avoid swallowing it
	  if (err) throw err;
	}
	function isRequest(stream) {
	  return stream.setHeader && typeof stream.abort === 'function';
	}
	function destroyer(stream, reading, writing, callback) {
	  callback = once(callback);
	  var closed = false;
	  stream.on('close', function () {
	    closed = true;
	  });
	  if (eos === undefined) eos = requireEndOfStream();
	  eos(stream, {
	    readable: reading,
	    writable: writing
	  }, function (err) {
	    if (err) return callback(err);
	    closed = true;
	    callback();
	  });
	  var destroyed = false;
	  return function (err) {
	    if (closed) return;
	    if (destroyed) return;
	    destroyed = true;

	    // request.destroy just do .end - .abort is what we want
	    if (isRequest(stream)) return stream.abort();
	    if (typeof stream.destroy === 'function') return stream.destroy();
	    callback(err || new ERR_STREAM_DESTROYED('pipe'));
	  };
	}
	function call(fn) {
	  fn();
	}
	function pipe(from, to) {
	  return from.pipe(to);
	}
	function popCallback(streams) {
	  if (!streams.length) return noop;
	  if (typeof streams[streams.length - 1] !== 'function') return noop;
	  return streams.pop();
	}
	function pipeline() {
	  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
	    streams[_key] = arguments[_key];
	  }
	  var callback = popCallback(streams);
	  if (Array.isArray(streams[0])) streams = streams[0];
	  if (streams.length < 2) {
	    throw new ERR_MISSING_ARGS('streams');
	  }
	  var error;
	  var destroys = streams.map(function (stream, i) {
	    var reading = i < streams.length - 1;
	    var writing = i > 0;
	    return destroyer(stream, reading, writing, function (err) {
	      if (!error) error = err;
	      if (err) destroys.forEach(call);
	      if (reading) return;
	      destroys.forEach(call);
	      callback(error);
	    });
	  });
	  return streams.reduce(pipe);
	}
	pipeline_1 = pipeline;
	return pipeline_1;
}

var hasRequiredReadableBrowser;

function requireReadableBrowser () {
	if (hasRequiredReadableBrowser) return readableBrowser.exports;
	hasRequiredReadableBrowser = 1;
	(function (module, exports) {
		exports = module.exports = require_stream_readable();
		exports.Stream = exports;
		exports.Readable = exports;
		exports.Writable = require_stream_writable();
		exports.Duplex = require_stream_duplex();
		exports.Transform = require_stream_transform();
		exports.PassThrough = require_stream_passthrough();
		exports.finished = requireEndOfStream();
		exports.pipeline = requirePipeline(); 
	} (readableBrowser, readableBrowser.exports));
	return readableBrowser.exports;
}

var queueMicrotask_1;
var hasRequiredQueueMicrotask;

function requireQueueMicrotask () {
	if (hasRequiredQueueMicrotask) return queueMicrotask_1;
	hasRequiredQueueMicrotask = 1;
	var define_global_default = {};
	/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
	let promise;
	queueMicrotask_1 = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : define_global_default) : (cb) => (promise || (promise = Promise.resolve())).then(cb).catch((err) => setTimeout(() => {
	  throw err;
	}, 0));
	return queueMicrotask_1;
}

var errCode;
var hasRequiredErrCode;

function requireErrCode () {
	if (hasRequiredErrCode) return errCode;
	hasRequiredErrCode = 1;

	/**
	 * @typedef {{ [key: string]: any }} Extensions
	 * @typedef {Error} Err
	 * @property {string} message
	 */

	/**
	 *
	 * @param {Error} obj
	 * @param {Extensions} props
	 * @returns {Error & Extensions}
	 */
	function assign(obj, props) {
	    for (const key in props) {
	        Object.defineProperty(obj, key, {
	            value: props[key],
	            enumerable: true,
	            configurable: true,
	        });
	    }

	    return obj;
	}

	/**
	 *
	 * @param {any} err - An Error
	 * @param {string|Extensions} code - A string code or props to set on the error
	 * @param {Extensions} [props] - Props to set on the error
	 * @returns {Error & Extensions}
	 */
	function createError(err, code, props) {
	    if (!err || typeof err === 'string') {
	        throw new TypeError('Please pass an Error to err-code');
	    }

	    if (!props) {
	        props = {};
	    }

	    if (typeof code === 'object') {
	        props = code;
	        code = '';
	    }

	    if (code) {
	        props.code = code;
	    }

	    try {
	        return assign(err, props);
	    } catch (_) {
	        props.message = err.message;
	        props.stack = err.stack;

	        const ErrClass = function () {};

	        ErrClass.prototype = Object.create(Object.getPrototypeOf(err));

	        // @ts-ignore
	        const output = assign(new ErrClass(), props);

	        return output;
	    }
	}

	errCode = createError;
	return errCode;
}

/*! simple-peer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

var simplePeer;
var hasRequiredSimplePeer;

function requireSimplePeer () {
	if (hasRequiredSimplePeer) return simplePeer;
	hasRequiredSimplePeer = 1;
	const debug = requireBrowser$2()("simple-peer");
	const getBrowserRTC = requireGetBrowserRtc();
	const randombytes = requireBrowser$1();
	const stream = requireReadableBrowser();
	const queueMicrotask = requireQueueMicrotask();
	const errCode = requireErrCode();
	const { Buffer } = requireDist();
	const MAX_BUFFERED_AMOUNT = 64 * 1024;
	const ICECOMPLETE_TIMEOUT = 5 * 1e3;
	const CHANNEL_CLOSING_TIMEOUT = 5 * 1e3;
	function filterTrickle(sdp) {
	  return sdp.replace(/a=ice-options:trickle\s\n/g, "");
	}
	function warn(message) {
	  console.warn(message);
	}
	class Peer extends stream.Duplex {
	  constructor(opts) {
	    opts = Object.assign({
	      allowHalfOpen: false
	    }, opts);
	    super(opts);
	    this._id = randombytes(4).toString("hex").slice(0, 7);
	    this._debug("new peer %o", opts);
	    this.channelName = opts.initiator ? opts.channelName || randombytes(20).toString("hex") : null;
	    this.initiator = opts.initiator || false;
	    this.channelConfig = opts.channelConfig || Peer.channelConfig;
	    this.channelNegotiated = this.channelConfig.negotiated;
	    this.config = Object.assign({}, Peer.config, opts.config);
	    this.offerOptions = opts.offerOptions || {};
	    this.answerOptions = opts.answerOptions || {};
	    this.sdpTransform = opts.sdpTransform || ((sdp) => sdp);
	    this.streams = opts.streams || (opts.stream ? [opts.stream] : []);
	    this.trickle = opts.trickle !== void 0 ? opts.trickle : true;
	    this.allowHalfTrickle = opts.allowHalfTrickle !== void 0 ? opts.allowHalfTrickle : false;
	    this.iceCompleteTimeout = opts.iceCompleteTimeout || ICECOMPLETE_TIMEOUT;
	    this.destroyed = false;
	    this.destroying = false;
	    this._connected = false;
	    this.remoteAddress = void 0;
	    this.remoteFamily = void 0;
	    this.remotePort = void 0;
	    this.localAddress = void 0;
	    this.localFamily = void 0;
	    this.localPort = void 0;
	    this._wrtc = opts.wrtc && typeof opts.wrtc === "object" ? opts.wrtc : getBrowserRTC();
	    if (!this._wrtc) {
	      if (typeof window === "undefined") {
	        throw errCode(new Error("No WebRTC support: Specify `opts.wrtc` option in this environment"), "ERR_WEBRTC_SUPPORT");
	      } else {
	        throw errCode(new Error("No WebRTC support: Not a supported browser"), "ERR_WEBRTC_SUPPORT");
	      }
	    }
	    this._pcReady = false;
	    this._channelReady = false;
	    this._iceComplete = false;
	    this._iceCompleteTimer = null;
	    this._channel = null;
	    this._pendingCandidates = [];
	    this._isNegotiating = false;
	    this._firstNegotiation = true;
	    this._batchedNegotiation = false;
	    this._queuedNegotiation = false;
	    this._sendersAwaitingStable = [];
	    this._senderMap = /* @__PURE__ */ new Map();
	    this._closingInterval = null;
	    this._remoteTracks = [];
	    this._remoteStreams = [];
	    this._chunk = null;
	    this._cb = null;
	    this._interval = null;
	    try {
	      this._pc = new this._wrtc.RTCPeerConnection(this.config);
	    } catch (err) {
	      this.destroy(errCode(err, "ERR_PC_CONSTRUCTOR"));
	      return;
	    }
	    this._isReactNativeWebrtc = typeof this._pc._peerConnectionId === "number";
	    this._pc.oniceconnectionstatechange = () => {
	      this._onIceStateChange();
	    };
	    this._pc.onicegatheringstatechange = () => {
	      this._onIceStateChange();
	    };
	    this._pc.onconnectionstatechange = () => {
	      this._onConnectionStateChange();
	    };
	    this._pc.onsignalingstatechange = () => {
	      this._onSignalingStateChange();
	    };
	    this._pc.onicecandidate = (event) => {
	      this._onIceCandidate(event);
	    };
	    if (typeof this._pc.peerIdentity === "object") {
	      this._pc.peerIdentity.catch((err) => {
	        this.destroy(errCode(err, "ERR_PC_PEER_IDENTITY"));
	      });
	    }
	    if (this.initiator || this.channelNegotiated) {
	      this._setupData({
	        channel: this._pc.createDataChannel(this.channelName, this.channelConfig)
	      });
	    } else {
	      this._pc.ondatachannel = (event) => {
	        this._setupData(event);
	      };
	    }
	    if (this.streams) {
	      this.streams.forEach((stream2) => {
	        this.addStream(stream2);
	      });
	    }
	    this._pc.ontrack = (event) => {
	      this._onTrack(event);
	    };
	    this._debug("initial negotiation");
	    this._needsNegotiation();
	    this._onFinishBound = () => {
	      this._onFinish();
	    };
	    this.once("finish", this._onFinishBound);
	  }
	  get bufferSize() {
	    return this._channel && this._channel.bufferedAmount || 0;
	  }
	  // HACK: it's possible channel.readyState is "closing" before peer.destroy() fires
	  // https://bugs.chromium.org/p/chromium/issues/detail?id=882743
	  get connected() {
	    return this._connected && this._channel.readyState === "open";
	  }
	  address() {
	    return { port: this.localPort, family: this.localFamily, address: this.localAddress };
	  }
	  signal(data) {
	    if (this.destroying) return;
	    if (this.destroyed) throw errCode(new Error("cannot signal after peer is destroyed"), "ERR_DESTROYED");
	    if (typeof data === "string") {
	      try {
	        data = JSON.parse(data);
	      } catch (err) {
	        data = {};
	      }
	    }
	    this._debug("signal()");
	    if (data.renegotiate && this.initiator) {
	      this._debug("got request to renegotiate");
	      this._needsNegotiation();
	    }
	    if (data.transceiverRequest && this.initiator) {
	      this._debug("got request for transceiver");
	      this.addTransceiver(data.transceiverRequest.kind, data.transceiverRequest.init);
	    }
	    if (data.candidate) {
	      if (this._pc.remoteDescription && this._pc.remoteDescription.type) {
	        this._addIceCandidate(data.candidate);
	      } else {
	        this._pendingCandidates.push(data.candidate);
	      }
	    }
	    if (data.sdp) {
	      this._pc.setRemoteDescription(new this._wrtc.RTCSessionDescription(data)).then(() => {
	        if (this.destroyed) return;
	        this._pendingCandidates.forEach((candidate) => {
	          this._addIceCandidate(candidate);
	        });
	        this._pendingCandidates = [];
	        if (this._pc.remoteDescription.type === "offer") this._createAnswer();
	      }).catch((err) => {
	        this.destroy(errCode(err, "ERR_SET_REMOTE_DESCRIPTION"));
	      });
	    }
	    if (!data.sdp && !data.candidate && !data.renegotiate && !data.transceiverRequest) {
	      this.destroy(errCode(new Error("signal() called with invalid signal data"), "ERR_SIGNALING"));
	    }
	  }
	  _addIceCandidate(candidate) {
	    const iceCandidateObj = new this._wrtc.RTCIceCandidate(candidate);
	    this._pc.addIceCandidate(iceCandidateObj).catch((err) => {
	      if (!iceCandidateObj.address || iceCandidateObj.address.endsWith(".local")) {
	        warn("Ignoring unsupported ICE candidate.");
	      } else {
	        this.destroy(errCode(err, "ERR_ADD_ICE_CANDIDATE"));
	      }
	    });
	  }
	  /**
	   * Send text/binary data to the remote peer.
	   * @param {ArrayBufferView|ArrayBuffer|Buffer|string|Blob} chunk
	   */
	  send(chunk) {
	    if (this.destroying) return;
	    if (this.destroyed) throw errCode(new Error("cannot send after peer is destroyed"), "ERR_DESTROYED");
	    this._channel.send(chunk);
	  }
	  /**
	   * Add a Transceiver to the connection.
	   * @param {String} kind
	   * @param {Object} init
	   */
	  addTransceiver(kind, init) {
	    if (this.destroying) return;
	    if (this.destroyed) throw errCode(new Error("cannot addTransceiver after peer is destroyed"), "ERR_DESTROYED");
	    this._debug("addTransceiver()");
	    if (this.initiator) {
	      try {
	        this._pc.addTransceiver(kind, init);
	        this._needsNegotiation();
	      } catch (err) {
	        this.destroy(errCode(err, "ERR_ADD_TRANSCEIVER"));
	      }
	    } else {
	      this.emit("signal", {
	        // request initiator to renegotiate
	        type: "transceiverRequest",
	        transceiverRequest: { kind, init }
	      });
	    }
	  }
	  /**
	   * Add a MediaStream to the connection.
	   * @param {MediaStream} stream
	   */
	  addStream(stream2) {
	    if (this.destroying) return;
	    if (this.destroyed) throw errCode(new Error("cannot addStream after peer is destroyed"), "ERR_DESTROYED");
	    this._debug("addStream()");
	    stream2.getTracks().forEach((track) => {
	      this.addTrack(track, stream2);
	    });
	  }
	  /**
	   * Add a MediaStreamTrack to the connection.
	   * @param {MediaStreamTrack} track
	   * @param {MediaStream} stream
	   */
	  addTrack(track, stream2) {
	    if (this.destroying) return;
	    if (this.destroyed) throw errCode(new Error("cannot addTrack after peer is destroyed"), "ERR_DESTROYED");
	    this._debug("addTrack()");
	    const submap = this._senderMap.get(track) || /* @__PURE__ */ new Map();
	    let sender = submap.get(stream2);
	    if (!sender) {
	      sender = this._pc.addTrack(track, stream2);
	      submap.set(stream2, sender);
	      this._senderMap.set(track, submap);
	      this._needsNegotiation();
	    } else if (sender.removed) {
	      throw errCode(new Error("Track has been removed. You should enable/disable tracks that you want to re-add."), "ERR_SENDER_REMOVED");
	    } else {
	      throw errCode(new Error("Track has already been added to that stream."), "ERR_SENDER_ALREADY_ADDED");
	    }
	  }
	  /**
	   * Replace a MediaStreamTrack by another in the connection.
	   * @param {MediaStreamTrack} oldTrack
	   * @param {MediaStreamTrack} newTrack
	   * @param {MediaStream} stream
	   */
	  replaceTrack(oldTrack, newTrack, stream2) {
	    if (this.destroying) return;
	    if (this.destroyed) throw errCode(new Error("cannot replaceTrack after peer is destroyed"), "ERR_DESTROYED");
	    this._debug("replaceTrack()");
	    const submap = this._senderMap.get(oldTrack);
	    const sender = submap ? submap.get(stream2) : null;
	    if (!sender) {
	      throw errCode(new Error("Cannot replace track that was never added."), "ERR_TRACK_NOT_ADDED");
	    }
	    if (newTrack) this._senderMap.set(newTrack, submap);
	    if (sender.replaceTrack != null) {
	      sender.replaceTrack(newTrack);
	    } else {
	      this.destroy(errCode(new Error("replaceTrack is not supported in this browser"), "ERR_UNSUPPORTED_REPLACETRACK"));
	    }
	  }
	  /**
	   * Remove a MediaStreamTrack from the connection.
	   * @param {MediaStreamTrack} track
	   * @param {MediaStream} stream
	   */
	  removeTrack(track, stream2) {
	    if (this.destroying) return;
	    if (this.destroyed) throw errCode(new Error("cannot removeTrack after peer is destroyed"), "ERR_DESTROYED");
	    this._debug("removeSender()");
	    const submap = this._senderMap.get(track);
	    const sender = submap ? submap.get(stream2) : null;
	    if (!sender) {
	      throw errCode(new Error("Cannot remove track that was never added."), "ERR_TRACK_NOT_ADDED");
	    }
	    try {
	      sender.removed = true;
	      this._pc.removeTrack(sender);
	    } catch (err) {
	      if (err.name === "NS_ERROR_UNEXPECTED") {
	        this._sendersAwaitingStable.push(sender);
	      } else {
	        this.destroy(errCode(err, "ERR_REMOVE_TRACK"));
	      }
	    }
	    this._needsNegotiation();
	  }
	  /**
	   * Remove a MediaStream from the connection.
	   * @param {MediaStream} stream
	   */
	  removeStream(stream2) {
	    if (this.destroying) return;
	    if (this.destroyed) throw errCode(new Error("cannot removeStream after peer is destroyed"), "ERR_DESTROYED");
	    this._debug("removeSenders()");
	    stream2.getTracks().forEach((track) => {
	      this.removeTrack(track, stream2);
	    });
	  }
	  _needsNegotiation() {
	    this._debug("_needsNegotiation");
	    if (this._batchedNegotiation) return;
	    this._batchedNegotiation = true;
	    queueMicrotask(() => {
	      this._batchedNegotiation = false;
	      if (this.initiator || !this._firstNegotiation) {
	        this._debug("starting batched negotiation");
	        this.negotiate();
	      } else {
	        this._debug("non-initiator initial negotiation request discarded");
	      }
	      this._firstNegotiation = false;
	    });
	  }
	  negotiate() {
	    if (this.destroying) return;
	    if (this.destroyed) throw errCode(new Error("cannot negotiate after peer is destroyed"), "ERR_DESTROYED");
	    if (this.initiator) {
	      if (this._isNegotiating) {
	        this._queuedNegotiation = true;
	        this._debug("already negotiating, queueing");
	      } else {
	        this._debug("start negotiation");
	        setTimeout(() => {
	          this._createOffer();
	        }, 0);
	      }
	    } else {
	      if (this._isNegotiating) {
	        this._queuedNegotiation = true;
	        this._debug("already negotiating, queueing");
	      } else {
	        this._debug("requesting negotiation from initiator");
	        this.emit("signal", {
	          // request initiator to renegotiate
	          type: "renegotiate",
	          renegotiate: true
	        });
	      }
	    }
	    this._isNegotiating = true;
	  }
	  // TODO: Delete this method once readable-stream is updated to contain a default
	  // implementation of destroy() that automatically calls _destroy()
	  // See: https://github.com/nodejs/readable-stream/issues/283
	  destroy(err) {
	    this._destroy(err, () => {
	    });
	  }
	  _destroy(err, cb) {
	    if (this.destroyed || this.destroying) return;
	    this.destroying = true;
	    this._debug("destroying (error: %s)", err && (err.message || err));
	    queueMicrotask(() => {
	      this.destroyed = true;
	      this.destroying = false;
	      this._debug("destroy (error: %s)", err && (err.message || err));
	      this.readable = this.writable = false;
	      if (!this._readableState.ended) this.push(null);
	      if (!this._writableState.finished) this.end();
	      this._connected = false;
	      this._pcReady = false;
	      this._channelReady = false;
	      this._remoteTracks = null;
	      this._remoteStreams = null;
	      this._senderMap = null;
	      clearInterval(this._closingInterval);
	      this._closingInterval = null;
	      clearInterval(this._interval);
	      this._interval = null;
	      this._chunk = null;
	      this._cb = null;
	      if (this._onFinishBound) this.removeListener("finish", this._onFinishBound);
	      this._onFinishBound = null;
	      if (this._channel) {
	        try {
	          this._channel.close();
	        } catch (err2) {
	        }
	        this._channel.onmessage = null;
	        this._channel.onopen = null;
	        this._channel.onclose = null;
	        this._channel.onerror = null;
	      }
	      if (this._pc) {
	        try {
	          this._pc.close();
	        } catch (err2) {
	        }
	        this._pc.oniceconnectionstatechange = null;
	        this._pc.onicegatheringstatechange = null;
	        this._pc.onsignalingstatechange = null;
	        this._pc.onicecandidate = null;
	        this._pc.ontrack = null;
	        this._pc.ondatachannel = null;
	      }
	      this._pc = null;
	      this._channel = null;
	      if (err) this.emit("error", err);
	      this.emit("close");
	      cb();
	    });
	  }
	  _setupData(event) {
	    if (!event.channel) {
	      return this.destroy(errCode(new Error("Data channel event is missing `channel` property"), "ERR_DATA_CHANNEL"));
	    }
	    this._channel = event.channel;
	    this._channel.binaryType = "arraybuffer";
	    if (typeof this._channel.bufferedAmountLowThreshold === "number") {
	      this._channel.bufferedAmountLowThreshold = MAX_BUFFERED_AMOUNT;
	    }
	    this.channelName = this._channel.label;
	    this._channel.onmessage = (event2) => {
	      this._onChannelMessage(event2);
	    };
	    this._channel.onbufferedamountlow = () => {
	      this._onChannelBufferedAmountLow();
	    };
	    this._channel.onopen = () => {
	      this._onChannelOpen();
	    };
	    this._channel.onclose = () => {
	      this._onChannelClose();
	    };
	    this._channel.onerror = (event2) => {
	      const err = event2.error instanceof Error ? event2.error : new Error(`Datachannel error: ${event2.message} ${event2.filename}:${event2.lineno}:${event2.colno}`);
	      this.destroy(errCode(err, "ERR_DATA_CHANNEL"));
	    };
	    let isClosing = false;
	    this._closingInterval = setInterval(() => {
	      if (this._channel && this._channel.readyState === "closing") {
	        if (isClosing) this._onChannelClose();
	        isClosing = true;
	      } else {
	        isClosing = false;
	      }
	    }, CHANNEL_CLOSING_TIMEOUT);
	  }
	  _read() {
	  }
	  _write(chunk, encoding, cb) {
	    if (this.destroyed) return cb(errCode(new Error("cannot write after peer is destroyed"), "ERR_DATA_CHANNEL"));
	    if (this._connected) {
	      try {
	        this.send(chunk);
	      } catch (err) {
	        return this.destroy(errCode(err, "ERR_DATA_CHANNEL"));
	      }
	      if (this._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) {
	        this._debug("start backpressure: bufferedAmount %d", this._channel.bufferedAmount);
	        this._cb = cb;
	      } else {
	        cb(null);
	      }
	    } else {
	      this._debug("write before connect");
	      this._chunk = chunk;
	      this._cb = cb;
	    }
	  }
	  // When stream finishes writing, close socket. Half open connections are not
	  // supported.
	  _onFinish() {
	    if (this.destroyed) return;
	    const destroySoon = () => {
	      setTimeout(() => this.destroy(), 1e3);
	    };
	    if (this._connected) {
	      destroySoon();
	    } else {
	      this.once("connect", destroySoon);
	    }
	  }
	  _startIceCompleteTimeout() {
	    if (this.destroyed) return;
	    if (this._iceCompleteTimer) return;
	    this._debug("started iceComplete timeout");
	    this._iceCompleteTimer = setTimeout(() => {
	      if (!this._iceComplete) {
	        this._iceComplete = true;
	        this._debug("iceComplete timeout completed");
	        this.emit("iceTimeout");
	        this.emit("_iceComplete");
	      }
	    }, this.iceCompleteTimeout);
	  }
	  _createOffer() {
	    if (this.destroyed) return;
	    this._pc.createOffer(this.offerOptions).then((offer) => {
	      if (this.destroyed) return;
	      if (!this.trickle && !this.allowHalfTrickle) offer.sdp = filterTrickle(offer.sdp);
	      offer.sdp = this.sdpTransform(offer.sdp);
	      const sendOffer = () => {
	        if (this.destroyed) return;
	        const signal = this._pc.localDescription || offer;
	        this._debug("signal");
	        this.emit("signal", {
	          type: signal.type,
	          sdp: signal.sdp
	        });
	      };
	      const onSuccess = () => {
	        this._debug("createOffer success");
	        if (this.destroyed) return;
	        if (this.trickle || this._iceComplete) sendOffer();
	        else this.once("_iceComplete", sendOffer);
	      };
	      const onError = (err) => {
	        this.destroy(errCode(err, "ERR_SET_LOCAL_DESCRIPTION"));
	      };
	      this._pc.setLocalDescription(offer).then(onSuccess).catch(onError);
	    }).catch((err) => {
	      this.destroy(errCode(err, "ERR_CREATE_OFFER"));
	    });
	  }
	  _requestMissingTransceivers() {
	    if (this._pc.getTransceivers) {
	      this._pc.getTransceivers().forEach((transceiver) => {
	        if (!transceiver.mid && transceiver.sender.track && !transceiver.requested) {
	          transceiver.requested = true;
	          this.addTransceiver(transceiver.sender.track.kind);
	        }
	      });
	    }
	  }
	  _createAnswer() {
	    if (this.destroyed) return;
	    this._pc.createAnswer(this.answerOptions).then((answer) => {
	      if (this.destroyed) return;
	      if (!this.trickle && !this.allowHalfTrickle) answer.sdp = filterTrickle(answer.sdp);
	      answer.sdp = this.sdpTransform(answer.sdp);
	      const sendAnswer = () => {
	        if (this.destroyed) return;
	        const signal = this._pc.localDescription || answer;
	        this._debug("signal");
	        this.emit("signal", {
	          type: signal.type,
	          sdp: signal.sdp
	        });
	        if (!this.initiator) this._requestMissingTransceivers();
	      };
	      const onSuccess = () => {
	        if (this.destroyed) return;
	        if (this.trickle || this._iceComplete) sendAnswer();
	        else this.once("_iceComplete", sendAnswer);
	      };
	      const onError = (err) => {
	        this.destroy(errCode(err, "ERR_SET_LOCAL_DESCRIPTION"));
	      };
	      this._pc.setLocalDescription(answer).then(onSuccess).catch(onError);
	    }).catch((err) => {
	      this.destroy(errCode(err, "ERR_CREATE_ANSWER"));
	    });
	  }
	  _onConnectionStateChange() {
	    if (this.destroyed) return;
	    if (this._pc.connectionState === "failed") {
	      this.destroy(errCode(new Error("Connection failed."), "ERR_CONNECTION_FAILURE"));
	    }
	  }
	  _onIceStateChange() {
	    if (this.destroyed) return;
	    const iceConnectionState = this._pc.iceConnectionState;
	    const iceGatheringState = this._pc.iceGatheringState;
	    this._debug(
	      "iceStateChange (connection: %s) (gathering: %s)",
	      iceConnectionState,
	      iceGatheringState
	    );
	    this.emit("iceStateChange", iceConnectionState, iceGatheringState);
	    if (iceConnectionState === "connected" || iceConnectionState === "completed") {
	      this._pcReady = true;
	      this._maybeReady();
	    }
	    if (iceConnectionState === "failed") {
	      this.destroy(errCode(new Error("Ice connection failed."), "ERR_ICE_CONNECTION_FAILURE"));
	    }
	    if (iceConnectionState === "closed") {
	      this.destroy(errCode(new Error("Ice connection closed."), "ERR_ICE_CONNECTION_CLOSED"));
	    }
	  }
	  getStats(cb) {
	    const flattenValues = (report) => {
	      if (Object.prototype.toString.call(report.values) === "[object Array]") {
	        report.values.forEach((value) => {
	          Object.assign(report, value);
	        });
	      }
	      return report;
	    };
	    if (this._pc.getStats.length === 0 || this._isReactNativeWebrtc) {
	      this._pc.getStats().then((res) => {
	        const reports = [];
	        res.forEach((report) => {
	          reports.push(flattenValues(report));
	        });
	        cb(null, reports);
	      }, (err) => cb(err));
	    } else if (this._pc.getStats.length > 0) {
	      this._pc.getStats((res) => {
	        if (this.destroyed) return;
	        const reports = [];
	        res.result().forEach((result) => {
	          const report = {};
	          result.names().forEach((name) => {
	            report[name] = result.stat(name);
	          });
	          report.id = result.id;
	          report.type = result.type;
	          report.timestamp = result.timestamp;
	          reports.push(flattenValues(report));
	        });
	        cb(null, reports);
	      }, (err) => cb(err));
	    } else {
	      cb(null, []);
	    }
	  }
	  _maybeReady() {
	    this._debug("maybeReady pc %s channel %s", this._pcReady, this._channelReady);
	    if (this._connected || this._connecting || !this._pcReady || !this._channelReady) return;
	    this._connecting = true;
	    const findCandidatePair = () => {
	      if (this.destroyed) return;
	      this.getStats((err, items) => {
	        if (this.destroyed) return;
	        if (err) items = [];
	        const remoteCandidates = {};
	        const localCandidates = {};
	        const candidatePairs = {};
	        let foundSelectedCandidatePair = false;
	        items.forEach((item) => {
	          if (item.type === "remotecandidate" || item.type === "remote-candidate") {
	            remoteCandidates[item.id] = item;
	          }
	          if (item.type === "localcandidate" || item.type === "local-candidate") {
	            localCandidates[item.id] = item;
	          }
	          if (item.type === "candidatepair" || item.type === "candidate-pair") {
	            candidatePairs[item.id] = item;
	          }
	        });
	        const setSelectedCandidatePair = (selectedCandidatePair) => {
	          foundSelectedCandidatePair = true;
	          let local = localCandidates[selectedCandidatePair.localCandidateId];
	          if (local && (local.ip || local.address)) {
	            this.localAddress = local.ip || local.address;
	            this.localPort = Number(local.port);
	          } else if (local && local.ipAddress) {
	            this.localAddress = local.ipAddress;
	            this.localPort = Number(local.portNumber);
	          } else if (typeof selectedCandidatePair.googLocalAddress === "string") {
	            local = selectedCandidatePair.googLocalAddress.split(":");
	            this.localAddress = local[0];
	            this.localPort = Number(local[1]);
	          }
	          if (this.localAddress) {
	            this.localFamily = this.localAddress.includes(":") ? "IPv6" : "IPv4";
	          }
	          let remote = remoteCandidates[selectedCandidatePair.remoteCandidateId];
	          if (remote && (remote.ip || remote.address)) {
	            this.remoteAddress = remote.ip || remote.address;
	            this.remotePort = Number(remote.port);
	          } else if (remote && remote.ipAddress) {
	            this.remoteAddress = remote.ipAddress;
	            this.remotePort = Number(remote.portNumber);
	          } else if (typeof selectedCandidatePair.googRemoteAddress === "string") {
	            remote = selectedCandidatePair.googRemoteAddress.split(":");
	            this.remoteAddress = remote[0];
	            this.remotePort = Number(remote[1]);
	          }
	          if (this.remoteAddress) {
	            this.remoteFamily = this.remoteAddress.includes(":") ? "IPv6" : "IPv4";
	          }
	          this._debug(
	            "connect local: %s:%s remote: %s:%s",
	            this.localAddress,
	            this.localPort,
	            this.remoteAddress,
	            this.remotePort
	          );
	        };
	        items.forEach((item) => {
	          if (item.type === "transport" && item.selectedCandidatePairId) {
	            setSelectedCandidatePair(candidatePairs[item.selectedCandidatePairId]);
	          }
	          if (item.type === "googCandidatePair" && item.googActiveConnection === "true" || (item.type === "candidatepair" || item.type === "candidate-pair") && item.selected) {
	            setSelectedCandidatePair(item);
	          }
	        });
	        if (!foundSelectedCandidatePair && (!Object.keys(candidatePairs).length || Object.keys(localCandidates).length)) {
	          setTimeout(findCandidatePair, 100);
	          return;
	        } else {
	          this._connecting = false;
	          this._connected = true;
	        }
	        if (this._chunk) {
	          try {
	            this.send(this._chunk);
	          } catch (err2) {
	            return this.destroy(errCode(err2, "ERR_DATA_CHANNEL"));
	          }
	          this._chunk = null;
	          this._debug('sent chunk from "write before connect"');
	          const cb = this._cb;
	          this._cb = null;
	          cb(null);
	        }
	        if (typeof this._channel.bufferedAmountLowThreshold !== "number") {
	          this._interval = setInterval(() => this._onInterval(), 150);
	          if (this._interval.unref) this._interval.unref();
	        }
	        this._debug("connect");
	        this.emit("connect");
	      });
	    };
	    findCandidatePair();
	  }
	  _onInterval() {
	    if (!this._cb || !this._channel || this._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) {
	      return;
	    }
	    this._onChannelBufferedAmountLow();
	  }
	  _onSignalingStateChange() {
	    if (this.destroyed) return;
	    if (this._pc.signalingState === "stable") {
	      this._isNegotiating = false;
	      this._debug("flushing sender queue", this._sendersAwaitingStable);
	      this._sendersAwaitingStable.forEach((sender) => {
	        this._pc.removeTrack(sender);
	        this._queuedNegotiation = true;
	      });
	      this._sendersAwaitingStable = [];
	      if (this._queuedNegotiation) {
	        this._debug("flushing negotiation queue");
	        this._queuedNegotiation = false;
	        this._needsNegotiation();
	      } else {
	        this._debug("negotiated");
	        this.emit("negotiated");
	      }
	    }
	    this._debug("signalingStateChange %s", this._pc.signalingState);
	    this.emit("signalingStateChange", this._pc.signalingState);
	  }
	  _onIceCandidate(event) {
	    if (this.destroyed) return;
	    if (event.candidate && this.trickle) {
	      this.emit("signal", {
	        type: "candidate",
	        candidate: {
	          candidate: event.candidate.candidate,
	          sdpMLineIndex: event.candidate.sdpMLineIndex,
	          sdpMid: event.candidate.sdpMid
	        }
	      });
	    } else if (!event.candidate && !this._iceComplete) {
	      this._iceComplete = true;
	      this.emit("_iceComplete");
	    }
	    if (event.candidate) {
	      this._startIceCompleteTimeout();
	    }
	  }
	  _onChannelMessage(event) {
	    if (this.destroyed) return;
	    let data = event.data;
	    if (data instanceof ArrayBuffer) data = Buffer.from(data);
	    this.push(data);
	  }
	  _onChannelBufferedAmountLow() {
	    if (this.destroyed || !this._cb) return;
	    this._debug("ending backpressure: bufferedAmount %d", this._channel.bufferedAmount);
	    const cb = this._cb;
	    this._cb = null;
	    cb(null);
	  }
	  _onChannelOpen() {
	    if (this._connected || this.destroyed) return;
	    this._debug("on channel open");
	    this._channelReady = true;
	    this._maybeReady();
	  }
	  _onChannelClose() {
	    if (this.destroyed) return;
	    this._debug("on channel close");
	    this.destroy();
	  }
	  _onTrack(event) {
	    if (this.destroyed) return;
	    event.streams.forEach((eventStream) => {
	      this._debug("on track");
	      this.emit("track", event.track, eventStream);
	      this._remoteTracks.push({
	        track: event.track,
	        stream: eventStream
	      });
	      if (this._remoteStreams.some((remoteStream) => {
	        return remoteStream.id === eventStream.id;
	      })) return;
	      this._remoteStreams.push(eventStream);
	      queueMicrotask(() => {
	        this._debug("on stream");
	        this.emit("stream", eventStream);
	      });
	    });
	  }
	  _debug() {
	    const args = [].slice.call(arguments);
	    args[0] = "[" + this._id + "] " + args[0];
	    debug.apply(null, args);
	  }
	}
	Peer.WEBRTC_SUPPORT = !!getBrowserRTC();
	Peer.config = {
	  iceServers: [
	    {
	      urls: [
	        "stun:stun.l.google.com:19302",
	        "stun:global.stun.twilio.com:3478"
	      ]
	    }
	  ],
	  sdpSemantics: "unified-plan"
	};
	Peer.channelConfig = {};
	simplePeer = Peer;
	return simplePeer;
}

var simplePeerExports = requireSimplePeer();
const SimplePeer = /*@__PURE__*/getDefaultExportFromCjs$1(simplePeerExports);

const host = window.location.origin;
const socket = lookup(host);
const Video = ({ peer }) => {
  const ref = reactExports.useRef();
  reactExports.useEffect(() => {
    peer.on("stream", (stream) => {
      ref.current.srcObject = stream;
    });
  }, [peer]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("video", { ref, autoPlay: true, playsInline: true });
};
function VideoPage({ roomId = "123" }) {
  const localMedia = reactExports.useRef(null);
  const [stream, setStream] = reactExports.useState(null);
  const [peers, setPeers] = reactExports.useState([]);
  reactExports.useRef();
  const peersRef = reactExports.useRef([]);
  const [turnDetails, setTurnDetails] = reactExports.useState(null);
  reactExports.useEffect(() => {
    (async () => {
      const data = await (await fetch("/api/v1/get-turn")).json();
      setTurnDetails([
        { urls: "stun:stun.l.google.com:19302" },
        ...data.iceServers
      ]);
    })();
  }, []);
  reactExports.useEffect(() => {
    if (!turnDetails) return;
    if (!window.crypto) {
      window.crypto = {
        getRandomValues: function(buffer) {
          for (let i = 0; i < buffer.length; i++) {
            buffer[i] = Math.floor(Math.random() * 256);
          }
        }
      };
    }
    const myUserId2 = `user_${Math.floor(Math.random() * 1e12)}`;
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((mediaStream) => {
      localMedia.current.srcObject = mediaStream;
      setStream(mediaStream);
      socket.emit("join-room", roomId, myUserId2);
      socket.on("user-connected", (userId) => {
        const peer = createPeer(userId, myUserId2, mediaStream);
        peersRef.current.push({ peerID: userId, peer });
        setPeers((users) => [...users, peer]);
      });
      socket.on("offer", (data) => {
        const peer = addPeer(data, mediaStream);
        peersRef.current.push({ peerID: data.from, peer });
        setPeers((users) => [...users, peer]);
      });
      socket.on("answer", (data) => {
        const peer = peersRef.current.find((p) => p.peerID === data.from);
        if (peer) peer.peer.signal(data.signal);
      });
      socket.on("ice-candidate", (data) => {
        const peer = peersRef.current.find((p) => p.peerID === data.from);
        if (peer) peer.peer.signal(data.candidate);
      });
      socket.on("user-disconnected", (userId) => {
        const peerObj = peersRef.current.find((p) => p.peerID === userId);
        if (peerObj) {
          peerObj.peer.destroy();
          setPeers((users) => users.filter((p) => p !== peerObj.peer));
        }
      });
    }).catch((err) => {
      console.log(err);
    });
    return () => {
      socket.off("user-connected");
      socket.off("offer");
      socket.off("answer");
      socket.off("ice-candidate");
      socket.off("user-disconnected");
    };
  }, [roomId, turnDetails]);
  function createPeer(userToSignal, callerID, stream2) {
    const peer = new SimplePeer({
      initiator: true,
      trickle: false,
      stream: stream2,
      config: {
        iceServers: turnDetails
      }
    });
    peer.on("signal", (signal) => {
      socket.emit("offer", { signal, from: callerID, to: userToSignal, roomId });
    });
    return peer;
  }
  function addPeer(incomingData, stream2) {
    const peer = new SimplePeer({
      initiator: false,
      trickle: false,
      stream: stream2,
      config: {
        iceServers: turnDetails
      }
    });
    peer.on("signal", (signal) => {
      socket.emit("answer", { signal, from: myUserId, to: incomingData.from, roomId });
    });
    peer.signal(incomingData.signal);
    return peer;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Video Conference" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("video", { ref: localMedia, autoPlay: true, playsInline: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Remote Video" }),
    peers.map((peer, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { peer }, index))
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
