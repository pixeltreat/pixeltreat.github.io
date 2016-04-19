/* jshint esnext:true */

import EventEmitter from './EventEmitter';
import Forum from './components/Forum';

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', domReady, false);

    function domReady() {
        var pageView = document.querySelector('#page-view');
        var forumEle = React.createElement(Forum, null);
        var emitter = new EventEmitter();

        // render page view
        ReactDOM.render(forumEle, pageView);

        emitter.on('APP_START', function () {
            console.log('app started1');
        });

        emitter.on('APP_START', function () {
            console.log('app started2');
        });

        emitter.trigger('APP_START');
    }
})();