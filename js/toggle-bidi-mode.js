/*
 * Copyright (c) 2015, Sarbborram Bandyopadhyay. All rights reserved.
 * Copyrights licensed under the MIT License.
 * See the accompanying LICENSE file for terms.
 */

var bidiModeCSS = {
    ltr: 'css/ltr.css',
    rtl: 'css/rtl.css'
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
