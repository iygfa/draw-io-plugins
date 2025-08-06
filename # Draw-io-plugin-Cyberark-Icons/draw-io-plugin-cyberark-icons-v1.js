Draw.loadPlugin(function(ui) {

    // Adds custom sidebar entry
    ui.sidebar.addStencilPalette('flowchart', 'Cyberark Icons Others', 'https://cdn.jsdelivr.net/gh/iygfa/draw-io-plugins@master/%23%20Draw-io-plugin-Cyberark-Icons/stencil-cyberark-Others-v1.xml?maxAge=10', ';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');

    // Collapses default sidebar entry and inserts this before
    var c = ui.sidebar.container;
    c.firstChild.click();
    c.insertBefore(c.lastChild, c.firstChild);
    c.insertBefore(c.lastChild, c.firstChild);

    // Adds custom sidebar entry
    ui.sidebar.addStencilPalette('flowchart', 'Cyberark Icons Logos', 'https://cdn.jsdelivr.net/gh/iygfa/draw-io-plugins@master/%23%20Draw-io-plugin-Cyberark-Icons/stencil-cyberark-Logos-v1.xml?maxAge=10', ';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');

    // Collapses default sidebar entry and inserts this before
    var c = ui.sidebar.container;
    c.firstChild.click();
    c.insertBefore(c.lastChild, c.firstChild);
    c.insertBefore(c.lastChild, c.firstChild);

    // Adds custom sidebar entry
    ui.sidebar.addStencilPalette('flowchart', 'Cyberark Icons Levels', 'https://cdn.jsdelivr.net/gh/iygfa/draw-io-plugins@master/%23%20Draw-io-plugin-Cyberark-Icons/stencil-cyberark-Levels-v1.xml?maxAge=10', ';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');

    // Collapses default sidebar entry and inserts this before
    var c = ui.sidebar.container;
    c.firstChild.click();
    c.insertBefore(c.lastChild, c.firstChild);
    c.insertBefore(c.lastChild, c.firstChild);

    // Adds custom sidebar entry
    ui.sidebar.addStencilPalette('flowchart', 'Cyberark Icons Flow', 'https://cdn.jsdelivr.net/gh/iygfa/draw-io-plugins@master/%23%20Draw-io-plugin-Cyberark-Icons/stencil-cyberark-Flow-v1.xml?maxAge=10', ';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');

    // Collapses default sidebar entry and inserts this before
    var c = ui.sidebar.container;
    c.firstChild.click();
    c.insertBefore(c.lastChild, c.firstChild);
    c.insertBefore(c.lastChild, c.firstChild);

    // Adds custom sidebar entry
    ui.sidebar.addStencilPalette('flowchart', 'Cyberark Icons Components', 'https://cdn.jsdelivr.net/gh/iygfa/draw-io-plugins@master/%23%20Draw-io-plugin-Cyberark-Icons/stencil-cyberark-Components-v1.xml?maxAge=10', ';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');

    // Collapses default sidebar entry and inserts this before
    var c = ui.sidebar.container;
    c.firstChild.click();
    c.insertBefore(c.lastChild, c.firstChild);
    c.insertBefore(c.lastChild, c.firstChild);

});
