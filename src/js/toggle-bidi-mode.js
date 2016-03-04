/*
 * Copyright (c) 2015, Sarbbottam Bandyopadhyay. All rights reserved.
 * Copyrights licensed under the MIT License.
 * See the accompanying LICENSE file for terms.
 */

var bidiModeCSS = {
    ltr: 'dist/css/ltr.css',
    rtl: 'dist/css/rtl.css'
  },
  tempBidiMode,
  currentBidiMode = 'ltr',
  nextBidiMode = 'rtl',
  toggleBidiMode = document.getElementById('toggle-bidi-mode');

if(toggleBidiMode) {
  toggleBidiMode.addEventListener('click', function(){
    var existingStyleNode, newStyleNode;

    tempBidiMode = nextBidiMode;
    nextBidiMode = currentBidiMode;
    currentBidiMode = tempBidiMode;
    existingStyleNode = document.head.getElementsByTagName('link')[0],
    newStyleNode = document.createElement('link');
    newStyleNode.setAttribute('rel', 'stylesheet');
    newStyleNode.setAttribute('href', bidiModeCSS[currentBidiMode]);
    document.head.appendChild(newStyleNode);
  });
}
