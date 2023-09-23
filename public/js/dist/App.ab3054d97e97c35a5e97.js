/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/NavBar/NavBar.js":
/*!*****************************************!*\
  !*** ./src/components/NavBar/NavBar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const NavBar = props => {
  return /*#__PURE__*/React.createElement("nav", {
    className: "NavBar"
  }, props.routes.map(_ref => {
    let {
      key,
      path
    } = _ref;
    return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {
      key: key,
      to: path
    }, key);
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./src/components/Pexels/PexelsContent.js":
/*!************************************************!*\
  !*** ./src/components/Pexels/PexelsContent.js ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/UserPortal/UserPortal.js":
/*!*************************************************!*\
  !*** ./src/components/UserPortal/UserPortal.js ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _pages_App_App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/App/App.js */ "./src/pages/App/App.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('app'));
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/React.createElement(_pages_App_App_js__WEBPACK_IMPORTED_MODULE_2__["default"], null))));

/***/ }),

/***/ "./src/pages/App/App.js":
/*!******************************!*\
  !*** ./src/pages/App/App.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _utilities_students_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/students-services */ "./src/utilities/students-services.js");
/* harmony import */ var _utilities_teachers_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/teachers-services */ "./src/utilities/teachers-services.js");
/* harmony import */ var _utilities_coaches_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/coaches-services */ "./src/utilities/coaches-services.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_UserPortal_UserPortal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/UserPortal/UserPortal */ "./src/components/UserPortal/UserPortal.js");
/* harmony import */ var _components_UserPortal_UserPortal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_UserPortal_UserPortal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* harmony import */ var _HomeScreen_HomeScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HomeScreen/HomeScreen */ "./src/pages/HomeScreen/HomeScreen.js");
/* harmony import */ var _pages_AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/AuthPage/AuthPage */ "./src/pages/AuthPage/AuthPage.js");
/* harmony import */ var _pages_AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_pages_AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pages_Profile_Profile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pages/Profile/Profile */ "./src/pages/Profile/Profile.js");
/* harmony import */ var _pages_Profile_Profile__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_pages_Profile_Profile__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _pages_Colleges_Colleges__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/Colleges/Colleges */ "./src/pages/Colleges/Colleges.js");
/* harmony import */ var _pages_Colleges_Colleges__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_pages_Colleges_Colleges__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _pages_ExtraCurr_ExtraCurr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pages/ExtraCurr/ExtraCurr */ "./src/pages/ExtraCurr/ExtraCurr.js");
/* harmony import */ var _pages_ExtraCurr_ExtraCurr__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_pages_ExtraCurr_ExtraCurr__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _pages_Grades_Grades__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pages/Grades/Grades */ "./src/pages/Grades/Grades.js");
/* harmony import */ var _pages_Grades_Grades__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_pages_Grades_Grades__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _pages_Recommend_Recommend__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pages/Recommend/Recommend */ "./src/pages/Recommend/Recommend.js");
/* harmony import */ var _pages_Recommend_Recommend__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_pages_Recommend_Recommend__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _pages_Sports_Sports__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../pages/Sports/Sports */ "./src/pages/Sports/Sports.js");
/* harmony import */ var _pages_Sports_Sports__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_pages_Sports_Sports__WEBPACK_IMPORTED_MODULE_14__);
















function App() {
  const [student, setStudent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utilities_students_services__WEBPACK_IMPORTED_MODULE_3__.getStudent)());
  const [teacher, setTeacher] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utilities_teachers_services__WEBPACK_IMPORTED_MODULE_4__.getTeacher)());
  const [coach, setCoach] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utilities_coaches_services__WEBPACK_IMPORTED_MODULE_5__.getCoach)());
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_components_UserPortal_UserPortal__WEBPACK_IMPORTED_MODULE_6___default()), {
    student: student,
    teacher: teacher,
    coach: coach
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/dreamBig",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HomeScreen_HomeScreen__WEBPACK_IMPORTED_MODULE_2__["default"], {
      student: student,
      setStudent: setStudent,
      teacher: teacher,
      setTeacher: setTeacher,
      coach: coach,
      setCoach: setCoach,
      pexelsData: pexelsData,
      setPexelsData: setPexelsData
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/signUp",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_pages_AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_8___default()), {
      student: student,
      setStudent: setStudent,
      teacher: teacher,
      setTeacher: setTeacher,
      coach: coach,
      setCoach: setCoach
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/colleges",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_pages_Colleges_Colleges__WEBPACK_IMPORTED_MODULE_9___default()), null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/extraCurr",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_pages_ExtraCurr_ExtraCurr__WEBPACK_IMPORTED_MODULE_10___default()), {
      student: student
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/grades",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_pages_Grades_Grades__WEBPACK_IMPORTED_MODULE_11___default()), {
      teacher: teacher,
      setTeacher: setTeacher
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/profile",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_pages_Profile_Profile__WEBPACK_IMPORTED_MODULE_12___default()), {
      student: student,
      setStudent: setStudent
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/recommend",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_pages_Recommend_Recommend__WEBPACK_IMPORTED_MODULE_13___default()), {
      teacher: teacher,
      setTeacher: setTeacher,
      coach: coach,
      setCoach: setCoach
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/sports",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_pages_Sports_Sports__WEBPACK_IMPORTED_MODULE_14___default()), {
      student: student,
      setStudent: setStudent
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Navigate, {
      to: "/dreamBig"
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_15___default()), null));
}

/***/ }),

/***/ "./src/pages/AuthPage/AuthPage.js":
/*!****************************************!*\
  !*** ./src/pages/AuthPage/AuthPage.js ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./src/pages/Colleges/Colleges.js":
/*!****************************************!*\
  !*** ./src/pages/Colleges/Colleges.js ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./src/pages/ExtraCurr/ExtraCurr.js":
/*!******************************************!*\
  !*** ./src/pages/ExtraCurr/ExtraCurr.js ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/pages/Grades/Grades.js":
/*!************************************!*\
  !*** ./src/pages/Grades/Grades.js ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./src/pages/HomeScreen/HomeScreen.js":
/*!********************************************!*\
  !*** ./src/pages/HomeScreen/HomeScreen.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Pexels_PexelsContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Pexels/PexelsContent */ "./src/components/Pexels/PexelsContent.js");
/* harmony import */ var _components_Pexels_PexelsContent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_Pexels_PexelsContent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HomeScreen_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeScreen.module.scss */ "./src/pages/HomeScreen/HomeScreen.module.scss");



function HomeScreen(_ref) {
  let {
    user,
    pexelsData,
    setPexelsData
  } = _ref;
  console.log(user);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeScreen_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].home
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: _HomeScreen_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].homeMessage
  }, "\"All your dreams can come true ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "if"), "we have the courage to pursue them!\" - Walt Disney"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomeScreen_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].pexelsContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_components_Pexels_PexelsContent__WEBPACK_IMPORTED_MODULE_2___default()), {
    pexelsData: pexelsData,
    setPexelsData: setPexelsData
  })));
}

/***/ }),

/***/ "./src/pages/Profile/Profile.js":
/*!**************************************!*\
  !*** ./src/pages/Profile/Profile.js ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./src/pages/Recommend/Recommend.js":
/*!******************************************!*\
  !*** ./src/pages/Recommend/Recommend.js ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/pages/Sports/Sports.js":
/*!************************************!*\
  !*** ./src/pages/Sports/Sports.js ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./src/utilities/coaches-api.js":
/*!**************************************!*\
  !*** ./src/utilities/coaches-api.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   signUp: () => (/* binding */ signUp),
/* harmony export */   updateCoach: () => (/* binding */ updateCoach)
/* harmony export */ });
/* unused harmony export getCoachProfile */
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");

const BASE_URL = '/api/coaches';
function signUp(coachData) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])(BASE_URL, 'POST', coachData);
}
function login(credentials) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/login"), 'POST', credentials);
}
function updateCoach(updatedCoachData, coachId) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(coachId), 'PUT', updatedCoachData);
}
function getCoachProfile() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/profile"));
}

/***/ }),

/***/ "./src/utilities/coaches-services.js":
/*!*******************************************!*\
  !*** ./src/utilities/coaches-services.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCoach: () => (/* binding */ getCoach),
/* harmony export */   getToken: () => (/* binding */ getToken)
/* harmony export */ });
/* unused harmony exports signUp, login, updateCoach, logOut */
/* harmony import */ var _coaches_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coaches-api */ "./src/utilities/coaches-api.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function signUp(_x) {
  return _signUp.apply(this, arguments);
}
function _signUp() {
  _signUp = _asyncToGenerator(function* (coachData) {
    // Delete the network request code to the
    // coaches-api.js module which will ultimately
    // return the JWT
    const token = yield _coaches_api__WEBPACK_IMPORTED_MODULE_0__.signUp(coachData);
    // Persist the token to localStorage
    localStorage.setItem('token', token);
    return getCoach();
  });
  return _signUp.apply(this, arguments);
}
function login(_x2) {
  return _login.apply(this, arguments);
}
function _login() {
  _login = _asyncToGenerator(function* (credentials) {
    const token = yield _coaches_api__WEBPACK_IMPORTED_MODULE_0__.login(credentials);
    // Persist the token to localStorage
    localStorage.setItem('token', token);
    return getCoach();
  });
  return _login.apply(this, arguments);
}
function getToken() {
  const token = localStorage.getItem('token');
  // getItem will return null if no key
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's expiration is expressed in seconds, not milliseconds
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}
function updateCoach(_x3) {
  return _updateCoach.apply(this, arguments);
}
function _updateCoach() {
  _updateCoach = _asyncToGenerator(function* (updatedCoachData) {
    // get a new token with updated coach info
    const token = yield _coaches_api__WEBPACK_IMPORTED_MODULE_0__.updateCoach(updatedCoachData);
    // remove the current token from localStorage
    localStorage.removeItem('token');
    // save new token to localStorage
    localStorage.setItem('token', token);
    return getCoach();
  });
  return _updateCoach.apply(this, arguments);
}
function getCoach() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).coach : null;
}
function logOut() {
  localStorage.removeItem('token');
  // localStorage.coach.isLoggedIn = false
}

/***/ }),

/***/ "./src/utilities/send-request.js":
/*!***************************************!*\
  !*** ./src/utilities/send-request.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sendRequest)
/* harmony export */ });
/* harmony import */ var _students_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./students-services */ "./src/utilities/students-services.js");
/* harmony import */ var _teachers_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teachers-services */ "./src/utilities/teachers-services.js");
/* harmony import */ var _coaches_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coaches-services */ "./src/utilities/coaches-services.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// import { getToken } from './students-services';
// import { getToken } from './teachers-services'
// import { getToken } from './coaches-services'

// export default async function sendRequest(url, method = 'GET', payload = null) {
// const options = { method };
// if (payload) {
//     options.headers = { 'Content-Type': 'application/json' };
//     options.body = JSON.stringify(payload);
// }
// const token = getToken();
// if (token) {
//     options.headers = options.headers || {};
//     options.headers.Authorization = `Bearer ${token}`;
// }
// const res = await fetch(url, options)
// if (res.ok) return res.json();
// throw new Error('Bad Request');
// }




function sendRequest(_x) {
  return _sendRequest.apply(this, arguments);
}
function _sendRequest() {
  _sendRequest = _asyncToGenerator(function (url) {
    let method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
    let payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return function* () {
      const options = {
        method
      };
      if (payload) {
        options.headers = {
          'Content-Type': 'application/json'
        };
        options.body = JSON.stringify(payload);
      }
      const studentToken = (0,_students_services__WEBPACK_IMPORTED_MODULE_0__.getToken)();
      const teacherToken = (0,_teachers_services__WEBPACK_IMPORTED_MODULE_1__.getToken)();
      const coachToken = (0,_coaches_services__WEBPACK_IMPORTED_MODULE_2__.getToken)();

      // You can now use these tokens as needed in your function

      if (studentToken) {
        options.headers = options.headers || {};
        options.headers.Authorization = "Bearer ".concat(studentToken);
      } else if (teacherToken) {
        options.headers = options.headers || {};
        options.headers.Authorization = "Bearer ".concat(teacherToken);
      } else if (coachToken) {
        options.headers = options.headers || {};
        options.headers.Authorization = "Bearer ".concat(coachToken);
      }
      const res = yield fetch(url, options);
      if (res.ok) return res.json();
      throw new Error('Bad Request');
    }();
  });
  return _sendRequest.apply(this, arguments);
}

/***/ }),

/***/ "./src/utilities/students-api.js":
/*!***************************************!*\
  !*** ./src/utilities/students-api.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   signUp: () => (/* binding */ signUp),
/* harmony export */   updateStudent: () => (/* binding */ updateStudent)
/* harmony export */ });
/* unused harmony export getStudentProfile */
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");

const BASE_URL = '/api/students';
function signUp(studentData) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])(BASE_URL, 'POST', studentData);
}
function login(credentials) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/login"), 'POST', credentials);
}
function updateStudent(updatedStudentData, studentId) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(studentId), 'PUT', updatedStudentData);
}
function getStudentProfile() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/profile"));
}

/***/ }),

/***/ "./src/utilities/students-services.js":
/*!********************************************!*\
  !*** ./src/utilities/students-services.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStudent: () => (/* binding */ getStudent),
/* harmony export */   getToken: () => (/* binding */ getToken)
/* harmony export */ });
/* unused harmony exports signUp, login, updateStudent, logOut */
/* harmony import */ var _students_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./students-api */ "./src/utilities/students-api.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function signUp(_x) {
  return _signUp.apply(this, arguments);
}
function _signUp() {
  _signUp = _asyncToGenerator(function* (studentData) {
    // Delete the network request code to the
    // students-api.js module which will ultimately
    // return the JWT
    const token = yield _students_api__WEBPACK_IMPORTED_MODULE_0__.signUp(studentData);
    // Persist the token to localStorage
    localStorage.setItem('token', token);
    return getStudent();
  });
  return _signUp.apply(this, arguments);
}
function login(_x2) {
  return _login.apply(this, arguments);
}
function _login() {
  _login = _asyncToGenerator(function* (credentials) {
    const token = yield _students_api__WEBPACK_IMPORTED_MODULE_0__.login(credentials);
    // Persist the token to localStorage
    localStorage.setItem('token', token);
    return getStudent();
  });
  return _login.apply(this, arguments);
}
function getToken() {
  const token = localStorage.getItem('token');
  // getItem will return null if no key
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's expiration is expressed in seconds, not milliseconds
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}
function updateStudent(_x3) {
  return _updateStudent.apply(this, arguments);
}
function _updateStudent() {
  _updateStudent = _asyncToGenerator(function* (updatedStudentData) {
    // get a new token with updated student info
    const token = yield _students_api__WEBPACK_IMPORTED_MODULE_0__.updateStudent(updatedStudentData);
    // remove the current token from localStorage
    localStorage.removeItem('token');
    // save new token to localStorage
    localStorage.setItem('token', token);
    return getStudent();
  });
  return _updateStudent.apply(this, arguments);
}
function getStudent() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).student : null;
}
function logOut() {
  localStorage.removeItem('token');
  // localStorage.student.isLoggedIn = false
}

/***/ }),

/***/ "./src/utilities/teachers-api.js":
/*!***************************************!*\
  !*** ./src/utilities/teachers-api.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   signUp: () => (/* binding */ signUp),
/* harmony export */   updateTeacher: () => (/* binding */ updateTeacher)
/* harmony export */ });
/* unused harmony export getTeacherProfile */
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");

const BASE_URL = '/api/teachers';
function signUp(teacherData) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])(BASE_URL, 'POST', teacherData);
}
function login(credentials) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/login"), 'POST', credentials);
}
function updateTeacher(updatedTeacherData, teacherId) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(teacherId), 'PUT', updatedTeacherData);
}
function getTeacherProfile() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/profile"));
}

/***/ }),

/***/ "./src/utilities/teachers-services.js":
/*!********************************************!*\
  !*** ./src/utilities/teachers-services.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTeacher: () => (/* binding */ getTeacher),
/* harmony export */   getToken: () => (/* binding */ getToken)
/* harmony export */ });
/* unused harmony exports signUp, login, updateTeacher, logOut */
/* harmony import */ var _teachers_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teachers-api */ "./src/utilities/teachers-api.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function signUp(_x) {
  return _signUp.apply(this, arguments);
}
function _signUp() {
  _signUp = _asyncToGenerator(function* (teacherData) {
    // Delete the network request code to the
    // teachers-api.js module which will ultimately
    // return the JWT
    const token = yield _teachers_api__WEBPACK_IMPORTED_MODULE_0__.signUp(teacherData);
    // Persist the token to localStorage
    localStorage.setItem('token', token);
    return getTeacher();
  });
  return _signUp.apply(this, arguments);
}
function login(_x2) {
  return _login.apply(this, arguments);
}
function _login() {
  _login = _asyncToGenerator(function* (credentials) {
    const token = yield _teachers_api__WEBPACK_IMPORTED_MODULE_0__.login(credentials);
    // Persist the token to localStorage
    localStorage.setItem('token', token);
    return getTeacher();
  });
  return _login.apply(this, arguments);
}
function getToken() {
  const token = localStorage.getItem('token');
  // getItem will return null if no key
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's expiration is expressed in seconds, not milliseconds
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}
function updateTeacher(_x3) {
  return _updateTeacher.apply(this, arguments);
}
function _updateTeacher() {
  _updateTeacher = _asyncToGenerator(function* (updatedTeacherData) {
    // get a new token with updated teacher info
    const token = yield _teachers_api__WEBPACK_IMPORTED_MODULE_0__.updateTeacher(updatedTeacherData);
    // remove the current token from localStorage
    localStorage.removeItem('token');
    // save new token to localStorage
    localStorage.setItem('token', token);
    return getTeacher();
  });
  return _updateTeacher.apply(this, arguments);
}
function getTeacher() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).teacher : null;
}
function logOut() {
  localStorage.removeItem('token');
  // localStorage.teacher.isLoggedIn = false
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomeScreen/HomeScreen.module.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomeScreen/HomeScreen.module.scss ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/HomeScreen/HomeScreen.module.scss":
/*!*****************************************************!*\
  !*** ./src/pages/HomeScreen/HomeScreen.module.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomeScreen_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./HomeScreen.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomeScreen/HomeScreen.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomeScreen_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomeScreen_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomeScreen_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomeScreen_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-354ecd"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.js.map