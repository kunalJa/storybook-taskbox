(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),PageContext=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__).a.createContext({tasks:[],actions:{onArchiveTask:console.log("onArchiveTask"),onPinTask:console.log("onPinTask")}});__webpack_exports__.a=PageContext},169:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"defaultTasks",(function(){return defaultTasks})),__webpack_require__.d(__webpack_exports__,"withPinnedTasks",(function(){return withPinnedTasks}));var _mnt_c_Users_kcube_Code_Web_dev_taskbox_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(86),_mnt_c_Users_kcube_Code_Web_dev_taskbox_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(120),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(47),_TaskList__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(54),_Task_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(18);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(source,!0).forEach((function(key){Object(_mnt_c_Users_kcube_Code_Web_dev_taskbox_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var defaultTasks=[_objectSpread({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"1",title:"Task 1"}),_objectSpread({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"2",title:"Task 2"}),_objectSpread({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"3",title:"Task 3"}),_objectSpread({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"4",title:"Task 4"}),_objectSpread({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"5",title:"Task 5"}),_objectSpread({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"6",title:"Task 6"})],withPinnedTasks=[].concat(Object(_mnt_c_Users_kcube_Code_Web_dev_taskbox_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(defaultTasks.slice(0,5)),[{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("TaskList",module).addDecorator((function(story){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{style:{padding:"3rem"}},story())})).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,{tasks:defaultTasks,actions:_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions})})).add("withPinnedTasks",(function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,{tasks:withPinnedTasks,actions:_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions})})).add("loading",(function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,{loading:!0,tasks:defaultTasks,actions:_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions})})).add("empty",(function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,{tasks:[],actions:_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions})}))}.call(this,__webpack_require__(98)(module))},170:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_TaskList__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(54),InboxScreen=function InboxScreen(_ref){return _ref.error?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"page lists-show"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"wrapper-message"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"icon-face-sad"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"title-message"},"Oh no!"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"subtitle-message"},"Something went wrong"))):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"page lists-show"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:"title-page"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"title-wrapper"},"Taskbox"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_1__.b,null))};InboxScreen.defaultProps={error:null},InboxScreen.__docgenInfo={description:"",methods:[],displayName:"InboxScreen",props:{error:{defaultValue:{value:"null",computed:!1},required:!1}}},__webpack_exports__.a=InboxScreen,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InboxScreen.js"]={name:"InboxScreen",docgenInfo:InboxScreen.__docgenInfo,path:"src/components/InboxScreen.js"})},18:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"task",(function(){return task})),__webpack_require__.d(__webpack_exports__,"actions",(function(){return actions})),__webpack_require__.d(__webpack_exports__,"states",(function(){return states}));var _mnt_c_Users_kcube_Code_Web_dev_taskbox_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(120),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(47),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(171),_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(172),_Task__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(85);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(source,!0).forEach((function(key){Object(_mnt_c_Users_kcube_Code_Web_dev_taskbox_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var task={id:"1",title:"Test Task",state:"TASK_INBOX",updatedAt:new Date(2018,0,1,9,0)},actions={onArchiveTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("onArchiveTask"),onPinTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("onPinTask")},states=["TASK_INBOX","TASK_PINNED","TASK_ARCHIVED"],stories=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Task",module);stories.addDecorator(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__.withKnobs),stories.addDecorator((function(story){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{padding:"3rem"}},story())})),states.forEach((function(state){var story_name=state.split("_")[1].toLowerCase();stories.add(story_name,(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_5__.a,Object.assign({task:Object(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__.object)("task",_objectSpread({},task,{state:state}))},actions))}))}));stories.add("long title",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_5__.a,Object.assign({task:_objectSpread({},task,{title:"This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not"})},actions))}))}.call(this,__webpack_require__(98)(module))},272:function(module,exports,__webpack_require__){__webpack_require__(273),__webpack_require__(384),module.exports=__webpack_require__(385)},294:function(module,exports){},385:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(47),req=(__webpack_require__(571),__webpack_require__(572));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(98)(module))},54:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return TaskList}));var _mnt_c_Users_kcube_Code_Web_dev_taskbox_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(86),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_Task__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(85),_contexts_PageContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(119),LoadingRow=function LoadingRow(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"loading-item"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"glow-checkbox"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"glow-text"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,"Loading")," ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,"cool")," ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,"state")))},TaskList=function TaskList(_ref){var loading=_ref.loading,tasks=_ref.tasks,actions=_ref.actions;if(loading)return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"list-item"},tasks.map((function(task){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoadingRow,{key:task.id})})));if(0===tasks.length)return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"list-items"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"wrapper-message"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"icon-check"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"title-message"},"You have no tasks"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"subtitle-message"},"Sit back and relax")));var tasksInOrder=[].concat(Object(_mnt_c_Users_kcube_Code_Web_dev_taskbox_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(tasks.filter((function(task){return"TASK_PINNED"===task.state}))),Object(_mnt_c_Users_kcube_Code_Web_dev_taskbox_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(tasks.filter((function(task){return"TASK_PINNED"!==task.state}))));return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"list-items"},tasksInOrder.map((function(task){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({key:task.id,task:task},actions))})))};TaskList.defaultProps={loading:!1};var ContextualTaskList=function ContextualTaskList(_ref2){var loading=_ref2.loading,_useContext=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_PageContext__WEBPACK_IMPORTED_MODULE_3__.a),tasks=_useContext.tasks,actions=_useContext.actions;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TaskList,{loading:loading,tasks:tasks,actions:actions})};ContextualTaskList.defaultProps={loading:!1},ContextualTaskList.__docgenInfo={description:"",methods:[],displayName:"ContextualTaskList",props:{loading:{defaultValue:{value:"false",computed:!1},required:!1}}},__webpack_exports__.b=ContextualTaskList,TaskList.__docgenInfo={description:"",methods:[],displayName:"TaskList",props:{loading:{defaultValue:{value:"false",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TaskList.js"]={name:"ContextualTaskList",docgenInfo:ContextualTaskList.__docgenInfo,path:"src/components/TaskList.js"}),"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TaskList.js"]={name:"TaskList",docgenInfo:TaskList.__docgenInfo,path:"src/components/TaskList.js"})},571:function(module,exports,__webpack_require__){},572:function(module,exports,__webpack_require__){var map={"./InboxScreen.stories.js":573,"./Task.stories.js":18,"./TaskList.stories.js":169};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=572},573:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(47),_InboxScreen__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(170),_contexts_PageContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(119),_TaskList_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(169),_Task_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(18);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("InboxScreen",module).addDecorator((function(story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_PageContext__WEBPACK_IMPORTED_MODULE_3__.a.Provider,{value:{tasks:_TaskList_stories__WEBPACK_IMPORTED_MODULE_4__.withPinnedTasks,actions:_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions}},story())})).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InboxScreen__WEBPACK_IMPORTED_MODULE_2__.a,null)})).add("error",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InboxScreen__WEBPACK_IMPORTED_MODULE_2__.a,{error:"Error Message"})}))}.call(this,__webpack_require__(98)(module))},85:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),Task=function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,state=_ref$task.state,onArchiveTask=_ref.onArchiveTask,onPinTask=_ref.onPinTask;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"list-item ".concat(state)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{className:"checkbox"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"checkbox",defaultChecked:"TASK_ARCHIVED"===state,disabled:!0,name:"checked"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"checkbox-custom",onClick:function onClick(){return onArchiveTask(id)}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"title"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",value:title,readOnly:!0,placeholder:"Input title",style:{textOverflow:"ellipsis"}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"actions",onClick:function onClick(event){return event.stopPropagation()}},"TASK_ARCHIVED"!==state&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{onClick:function onClick(){return onPinTask(id)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"icon-star"}))))};Task.__docgenInfo={description:"",methods:[],displayName:"Task"},__webpack_exports__.a=Task,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Task.js"]={name:"Task",docgenInfo:Task.__docgenInfo,path:"src/components/Task.js"})}},[[272,1,2]]]);
//# sourceMappingURL=main.0e0d2dec7d537fd7806f.bundle.js.map